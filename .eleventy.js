const fs = require('fs');
const stylus = require('stylus');
const path = require('path')
const yaml = require("js-yaml");
const pluginDate = require('eleventy-plugin-date');
const Image = require("@11ty/eleventy-img");


function parseStylusFile(stylusData, filename) {
	let paths = [
		__dirname
		, __dirname + '/stylus'
	];
	stylus(stylusData)
		.set('paths', paths)
		.set('filename', filename + '.css')
		.render(function (err, data) {
			if (err) throw err
			fs.writeFileSync('./assets/' + filename + '.css', data)

		});
}

function watchStylus() {
	dirStylus = './stylus/'
	let files = fs.readdirSync(dirStylus)
	// watching for styl changes
	fs.watch(dirStylus, function (event, _) {
		console.log('event is: ' + event);
		files = fs.readdirSync(dirStylus)

		for (let i = 0; i < files.length; i++) {
			let file = files[i];
			const data = fs.readFileSync(path.join(dirStylus, file), {encoding: 'utf-8'})
			const filename = path.basename(file).split('.')[0]
			parseStylusFile(data, filename)
		}
	});

	// initial css compilation
	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		const data = fs.readFileSync(path.join(dirStylus, file), {encoding: 'utf-8'})
		const filename = path.basename(file).split('.')[0]
		parseStylusFile(data, filename)
	}

}

module.exports = function (eleventyConfig) {
	try {
		watchStylus()

		eleventyConfig.setTemplateFormats([
			"html",
			"liquid",
			"css",
			"md"
		]);

		eleventyConfig.addPlugin(pluginDate,{
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

		eleventyConfig.addPassthroughCopy('*.svg')
		
		// eleventyConfig.addPassthroughCopy('*.css')
		eleventyConfig.addPassthroughCopy('assets/')
		eleventyConfig.addPassthroughCopy('projects/**/*.png')
		eleventyConfig.addPassthroughCopy('projects/**/*.jpg')
		eleventyConfig.addPassthroughCopy('projects/**/*.jpeg')
		eleventyConfig.addPassthroughCopy('projects/**/*.mp4')
		// eleventyConfig.addPassthroughCopy('*.js')
		
		eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
		eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

		eleventyConfig.addLiquidShortcode("Image", async function(src, alt) {
			if (!alt) {
				throw new Error(`Missing \`alt\` on myImage from: ${src}`);
			}

			let stats = await Image(src, {
				widths: [320, 640, 960, 1200, 1800, 2400],
				formats: ["jpeg", "webp"],
				urlPath: "/images/",
				outputDir: "./_site/images/",
			});

			let lowestSrc = stats["jpeg"][0];

			const srcset = Object.keys(stats).reduce(
				(acc, format) => ({
					...acc,
					[format]: stats[format].reduce(
						(_acc, curr) => `${_acc} ${curr.srcset} ,`,
						""
					),
				}),
				{}
			);

			const source = `<source type="image/webp" srcset="${srcset["webp"]}" >`;

			const img = `<img
				loading="lazy"
				alt="${alt}"
				src="${lowestSrc.url}"
				sizes='(min-width: 1024px) 1024px, 100vw'
				srcset="${srcset["jpeg"]}">`;

			return `<div class="image-wrapper"><picture> ${source} ${img} </picture></div>`;
		});
		
		
		// eleventyConfig.addCollection("posts", function (collection) {
		//   // return collection.getFilteredByTags("post");
		//   return collection.getFilteredByGlob("posts/*.md");
		// });
		// eleventyConfig.addCollection("projects2", function (collection) {
		//   return collection.getFilteredByGlob("/_projects/**/*.yml");
		// });
		// eleventyConfig.addCollection("post", function (collection) {
		//   return collection.getFilteredByGlob("/_projects/**/*.md");
		// });
	
	} catch (error) {
		console.error(error);
	}
	// return {
	//   pathPrefix: '/_site/'
	// }
}
