---
layout: project.html
title: Prllel
start_date: 2017-01-01 00:00:00 -05:00
#end_date: 2017-04-14 00:00:00 -05:00
tags:
  - projects
description: "Prllel: Augmented Reality Social Platform for sharing stories in real places."
portrait_image: projects/prllel/portrait_2.png
video: "/projects/prllel/demo.mp4"
images:
  - /projects/prllel/demo_2.jpg
---

<!--
<figure class="video_container" align="left" style="
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    float: right;">
  <video controls="true" allowfullscreen="true" width="200px" height="300px">
    <source src="/projects/prllel/demo.mp4" type="video/mp4">
  </video>
</figure>
-->

[Prllel](https://prllel.co) is an Augmented Reality (AR) social platform that empowers its users to create their own content in AR and place it on the real world.

## Motivation
Doing the next-gen social platform that allows us to express ourselves in a
creative way using our space. The arrival of the Metaverse, the hype and then
in an steady growth of the NFTs have leveraged some promising technologies.
Augmented Reality (AR) is one of them. AR have gained certain importance in
order to interact the virtual information with the real objects, however it is
not yet accesible for everyone because of the elevated prices it cost to obtain
a device like that.
To tackle this, Prllel is a proposal that bets for the use of Artificial
Intelligence models in order the close the gap of accesibility while
maintaining a decent immersive experience.

<hr/>

## Technical challenges
This project currently is in progress. Besides the challenges of building an
entire social platform that goes from frontend to backend, the real challenge
here is to produce a decent and immersive experience. As this was partially
achieved by using native SDKs like ARKit and ARCore, it doesn't cover the
gap of accesibility, at least for the most of Android devices. Currently, I am
working on the development of a new AR engine based on the use neural networks related to depth estimation 
that could learn our environment.

Tasks and Tech details:

- Design and development of Backend side, DB modeling.
- UI/UX Design and development of Frontend side with ARCore (Android) and ARKit (iOS).
- Prllel platform is built using [Flutter Framework](https://flutter.dev/).


