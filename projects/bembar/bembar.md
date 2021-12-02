---
layout: project.html
title: BembAR 
start_date: 2016-03-01 00:00:00 -05:00
end_date: 2016-07-01 00:00:00 -05:00
tags:
	- projects
portrait_image: projects/bembar/snapshot_1.jpg
description: Description Project
video: "/projects/bembar/bembar_demo_1.mp4"
images:
  - /projects/bembar/snapshot_1.jpg
---


<figure class="video_container" align="left" style="
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    float: right;">
  <video controls="true" allowfullscreen="true" width="200px" height="300px">
    <source src="/projects/bembar/bembar_demo_1.mp4" type="video/mp4">
  </video>
</figure>

 
## Motivation

In my way to rethink advertising campaigns, BembAR is conceived as a proof of 
concept of a game in Augmented Reality (AR) that is oriented to ad campaigns.
Once installed in a smartphone, the user launches the app and scans the 
corresponding brand logo and starts to play the game. 
Ideally, the score achieved in the game would be
displayed in a ranking and would serve as a way to gain promotion codes or
prizes. Having this way of interaction would lead to ideas of constructing
advertising with gamification elements. 

## Tech Details

BembAR was built using Unity as the game development engine to create the game logic and attach the texture and materials. The immersive experience in Augmented Reality was built using Vuforia SDK. Although I am familiar with the process of creating AR apps, the difficulty resided in the image to track in order to display the game. For example, when the mechanism to display AR content is Image-Based Tracking, the image has to have enough pixel details to make it trackable. Images that consist of only lines, solid
colors, and poor details are not considered trackable. Therefore, they are not good, and it would be hard to track the image in real scenarios. This problem arises as it is expected that logos don't have much detail in their designs. To tackle this, we found a logo with good enough details, so we ended up with a decent trackable image where the application could recognize and show the game. However, if it were not possible to find a picture with a high level of detail, we would apply some filters to the image to gain a high level of detail, like the noise effect.

BembAR is a prototype of an AR game-like app that lets users interact with the brand logo in Augmented Reality with gamification elements. This application aims to show new media to present the product or to engage with the brand. In addition, it adds elements of gamification to demonstrate an interactive ad campaign to increase engagement.

<p align="center">
  <img src="/projects/bembar/snapshot_1.jpg" width="300px">
</p>

