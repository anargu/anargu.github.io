---
templateEngineOverride: njk,md
layout: project.njk
title: Gin-Brotli
order: 10
start_date: 2018-11-08 00:00:00 -05:00
end_date: 2021-06-09 00:00:00 -05:00
tags: [ projects ]
description: "Gin-Brotli: Brotli Compressor for gin gonic (Web Framework)."
portrait_image: ./src/projects/gin-brotli/github_repo_icon.png	
#mini_portrait_image: ./src/projects/flird/flird_birds.jpeg
image:
  brotli_vs_gzip: ./src/projects/gin-brotli/brotli_vs_gzip.png
---

## Motivation

After working on the backend-side and exploring about compression algorithms I
found different alternatives to Gzip compression. Although it is yet widely
used, [Brotli](https://github.com/google/brotli) offers an optimized technique to compress files (mainly plain
texts) offering until 11 level of compression (Gzip provides 9) but the higher
the level the slower it turns to compress the file, so there is a pro
and cons when using level of compression. If we look at the plot below (taken
from this <a
  href="https://blog.bitsrc.io/gzip-to-brotli-better-frontend-load-performance-b2b4d8dbf60f#:~:text=In%20comparison%2C%20Gzip%20has%209,compression%2C%20while%20Brotli%20has%2011.&text=These%20factors%20improve%20the%20compression,%25%20better%20than%20Gzip%2C%20respectively."
  target="_blank">article:</a>

{% BlockImage image.brotli_vs_gzip, "brotli vs gzip", "(min-width: 1024px) 800px, 40px" %}

We see that, in general, Brotli provides a slight advantage over Gzip in time
and size of compression of files. With Brotli, we would be able to deliver our
web content faster, so our users don't get bored so easily while loading our
websites. That's why, as I was working in certain golang projects, I created
this plugin (or middleware) to ease the process of implement this compression
algorithm. Then, I made the repo [Gin-Brotli](https://github.com/anargu/gin-brotli) public so more developers could use it in their projects. 

## Tech Details & Challenges

First of all, this is my first plugin/library I made for golang. I went through
full research of how to properly build a middleware for gin-gonic (the Web
Framework commonly used by go developers as far as I know). Furthermore, I
explored ways to test the code I built. I added minimal unit tests to verify
the core functionalities of this middleware.





