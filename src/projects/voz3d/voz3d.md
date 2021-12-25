---
templateEngineOverride: njk,md
layout: project.njk
title: Voz 3D
order: 6
start_date: 2017-01-02 09:45:47 -05:00
end_date: 2018-10-02 09:45:47 -05:00
tags: [ projects ]
description: "Voz 3D: Plataforma para el aprendizaje del lenguaje de señas a través de animaciones 3D"
portrait_image: ./src/projects/voz3d/screenshot_1.png	
page_url: https://voz3d.com/demo.html#/
#images:
#	- ./src/projects/voz3d/screenshot_1.png	
---

[Voz 3D](https://voz3d.com/demo.html#/) is a platform that works like a dictionary 
in which you search words or build a sentence, and you can learn the gestures 
for sign language by a 3D avatar playing the animation.

## Motivation

Towards a more inclusive society, Voz3D is an agent that aims to close this gap. 
This platform can be understood as a learning resource of
sign language so more people can learn and communicate with deaf people. 

## Tech Details

Making the web interactive like a google translator but with a 3D model as a
response was a challenge I overcame by using web libraries to
handle the 3D models and their respective animations. For this case, it was THREE.js to handle and load the 3D models. Once loaded on the web, each translator input, whether by text or voice, was directed to the corresponding
animation. If the information is a sentence, then it will concatenate among the 
related gestural animations.

<hr/>

- Development of the PWA Application:
- Frontend: Lit-Element (next version of Polymer), Three.js as Stylus
- Backend: Firebase for hosting
- Importing 3D models from Blender and converting them to a supported format for Three.js

<div style="height: 20px;"></div>

