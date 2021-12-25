---
templateEngineOverride: njk,md
layout: project.njk
title: Prllel
order: 1
start_date: 2017-01-01 00:00:00 -05:00
#end_date: 2017-04-14 00:00:00 -05:00
tags:
  - projects
description: "Prllel: Augmented Reality Social Platform for sharing stories in real places."
portrait_image: ./src/projects/prllel/demo_4.jpeg
video: ./src/projects/prllel/demo.mp4
images:
  - ./src/projects/prllel/demo_2.jpg
---

[Prllel](https://prllel.co) is an Augmented Reality (AR) social platform that empowers its users to create their own content in AR and place it on the real world.

## Motivation
Doing the next-gen social platform that allows us to express ourselves in a
creative way using our space. The arrival of the Metaverse and the steady growth of the NFTs have leveraged some promising technologies.
Augmented Reality (AR) is one of them. AR has gained particular importance in
order to interact the virtual information with the real objects; however, it is
not yet accessible for everyone because of the elevated prices it cost to obtain
a device like that.
To tackle this, Prllel is a proposal that bets the use of Artificial Intelligence models to close the gap of accessibility while maintaining a decently immersive experience.

<hr/>

## Technical challenges

This project is currently in progress. Besides the challenges of building an
entire social platform that goes from frontend to backend, the real challenge
here is to produce a decent and immersive experience. As this was partially achieved by using native SDKs like ARKit and ARCore, it doesn't cover the
gap of accessibility, at least for most Android devices. Currently, I am
working on developing a new AR engine based on the use of neural networks related to depth estimation 
that could learn our environment.

Tasks and Tech details:

- Design and development of Backend side, DB modeling.
- UI/UX Design and development of Frontend side with ARCore (Android) and ARKit (iOS).
- Prllel platform is built using [Flutter Framework](https://flutter.dev/).


