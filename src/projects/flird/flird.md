---
templateEngineOverride: njk,md
layout: project.njk
title: Flird
order: 3
start_date: 2017-04-14 00:00:00 -05:00
end_date: 2017-07-14 00:00:00 -05:00
tags: [ projects ]
description: "Flird: AR Experience."
video: /projects/flird/flird_demo.mp4	
portrait_image: ./src/projects/flird/flird_2.jpg	
mini_portrait_image: ./src/projects/flird/flird_birds.jpeg
---


## Motivation

The project is a result of the Bootcamp held in Lab San Isidro. In
collaboration with the Municipality of San Isidro, we developed a mobile application that interacts with the book produced by the municipality that
shows birds that live in "El Olivar" park. The application displays a 3D
animation of the bird that is scanned while focusing on the bird in the book.

## Tech Details & Challenges

The AR experience was built with Unity IDE and Vuforia SDK. 
In order to make it interactive with the images shown in the book, we chose
the mechanism of Image-Based Tracking to recognize the pictures and display the
corresponding bird.


<hr/>


The modeling and animating tasks of the birds were made by [Jean Pierre Tincopa](https://www.instagram.com/jptincopa/).


{% Video video, "project image" %}

