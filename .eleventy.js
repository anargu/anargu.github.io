const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const htmlmin = require('html-minifier');
const yaml = require("js-yaml");
const pluginDate = require('eleventy-plugin-date');
const Image = require("@11ty/eleventy-img");
const sortBy = require("lodash/sortBy");
const { DateTime } = require("luxon");

async function blockImage(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [100, 300, 660],
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img/"
  });

  let imageAttributes = {
    alt,
    sizes: sizes || "(min-width: 1024px) 200px, 150px",
    loading: "lazy",
    decoding: "async",
  };

  return `
  <div class="block-image">
    ${Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: 'inline'
    })}
  </div>
  `;
}

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [200, 300, 660, null],
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img/"
  });



  let imageAttributes = {
    alt,
    sizes: sizes || "(min-width: 1024px) 200px, 150px",
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

function video(src, alt) {
  return `
  <div class="video-container">
    <figure>
      <video controls="true" allowfullscreen="true" alt="${alt}">
        <source src="${src}" type="video/mp4">
      </video>
    </figure>
  </div>
  `;
}

function rawGIF(src, alt) {
  let _src = src.replace('./src', '');

  return `
  <div class="image-container">
    <img src="${_src}" alt="${alt}" />
  </div>
  `;
}

async function rawImage(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [null],
    formats: ["jpeg"],
    outputDir: "./_site/img/"
  });

  let imageAttributes = {
    alt,
    sizes: sizes || "(min-width: 1024px) 200px, 150px",
    loading: "lazy",
    decoding: "async",
  };


  return `
  <div class="image-container">
    ${Image.generateHTML(metadata, imageAttributes)}
  </div>
  `;
}

module.exports = (config) => {

    config.addWatchTarget('src/sass/');

    config.setBrowserSyncConfig({
      files: './_site/css/**/*.css'
    });


		config.addPlugin(pluginDate,{
			formats: {
				// Change the readableDate filter to use abbreviated months.
				readableDate: { year: 'numeric', month: 'short', day: 'numeric' },
				// Add a new filter to format a Date to just the month and year.
				readableMonth: { year: 'numeric', month: 'long' },
				// Add a new filter using formatting tokens.
				timeZone: 'z',

				onlyYear: { year: 'numeric' },
			}
		});

    // config.setNunjucksEnvironmentOptions({
    //   throwOnUndefined: true,
    //   autoescape: false, // warning: don’t do this!
    // });

    // Needed to prevent eleventy from ignoring changes to generated
    // templates since it is in our `.gitignore`
    config.setUseGitIgnore(false);

    // Pass-through files
    config.addPassthroughCopy({ 'src/assets/public': '/' });
    config.addPassthroughCopy({ 'src/scripts/utilities/sw.js': 'sw.js' });
    config.addPassthroughCopy('src/assets');
    config.addPassthroughCopy('src/assets/*.svg');
    config.addPassthroughCopy('src/assets/files');
    config.addPassthroughCopy('src/assets/images');
		config.addPassthroughCopy('src/assets/js/*')
		config.addPassthroughCopy('src/assets/favicons/*')

		config.addPassthroughCopy('src/projects/**/*.png');
		config.addPassthroughCopy('src/projects/**/*.jpg');
		config.addPassthroughCopy('src/projects/**/*.jpeg');
		config.addPassthroughCopy('src/projects/**/*.gif');
		config.addPassthroughCopy('src/projects/**/*.mp4');

    // // Markdown 
    // config.setLibrary('md',
    //     require('markdown-it')({
    //       html: true
    //     })
    // );

    // Strip HTML
    config.addFilter('stripHtml', (content) => {
        const strippedContent = content.replace(/(<([^>]+)>)/gi, "")
                                       .replace(/\r?\n|\r/gi, " ")
                                       .trim();
        return strippedContent;
    });

    // Minify any files
    // config.addPlugin(eleventyPluginFilesMinifier);

    // // Minify HTML
    // config.addTransform("htmlmin", function(content, outputPath) {
    //     // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    //     if( outputPath.endsWith(".html") ) {
    //         let minified = htmlmin.minify(content, {
    //             useShortDoctype: true,
    //             removeComments: true,
    //             collapseWhitespace: true
    //         });
    //         return minified;
    //     }
    //
    //     return content;
    // });
    config.addShortcode("year", () => `${new Date().getFullYear()}`);

		config.addDataExtension("yaml", contents => yaml.load(contents));
		config.addDataExtension("yml", contents => yaml.load(contents));

    config.addNunjucksAsyncShortcode("Image", imageShortcode);
    config.addNunjucksAsyncShortcode("BlockImage", blockImage);
    config.addNunjucksShortcode("Video", video);
    config.addNunjucksAsyncShortcode("RawImage", rawImage);
    config.addNunjucksShortcode("RawGIF", rawGIF);

    config.addCollection("projectsByOrder", (collection) =>
      sortBy(collection.getFilteredByGlob("src/projects/**/*.md"), [(o) => o.data.order])
    );

    config.addCollection("projectsByEndDate", (collection) =>
      sortBy(
        collection.getFilteredByGlob("src/projects/**/*.md"),
        [(o) => o.data.end_date ?? new Date().toISOString()]
      )
      // collection.getFilteredByGlob("src/projects/**/*.md").sort((a, b) => {
      //   if (a.data.end_date > b.data.end_date) return -1;
      //   else if (a.data.end_date < b.data.end_date) return 1;
      //   else return 0;
      // }
    );

    config.addFilter("hasTag", (tags, tag) => {
      return (tags || []).includes(tag);
    });

    config.addFilter("dateFormat", (dateObj) => {
      if (!dateObj) return null;
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    config.addFilter("defaultPresent", (obj) => obj ?? 'Present');

    config.addFilter("hasOnlyOneElement", (list) => {
      return (list || []).length === 1;
    });

    config.addFilter("removeSrcFromPath", (obj) => obj.replace("./src", ""));

    return {
        dir: {
            input: 'src',
            output: '_site',
            layouts: '_layouts',
            includes: '_includes',
        },
        templateFormats: ['md', 'njk'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: "njk",
    };
};
