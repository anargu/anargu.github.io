---
layout: project.html
title: Voz 3D
start_date: 2017-01-02 09:45:47 -05:00
end_date: 2018-10-02 09:45:47 -05:00
tags: [ projects ]
description: "Voz 3D: Plataforma para el aprendizaje del lenguaje de señas a través de animaciones 3D"
portrait_image: projects/voz3d/screenshot_1.png	
page_url: https://voz3d.com/demo.html#/
images:
	- /projects/voz3d/screenshot_1.png	
---


[Voz 3D](https://voz3d.com/demo.html#/) is a platform that works as a dictionary in which you search words or build a sentence and you can learn the gestures for sign languaje by a 3D avatar playing the animation.

<hr/>
My work in this project:

- Development of the PWA Application:
	- Frontend: Lit-Element (next version of Polymer), Three.js as Stylus
	- Backend: Firebase for hosting
	- Importing 3D models from Blender and converting them to a supported format for Three.js

<div style="height: 20px;"></div>

<div class="grid-gallery">
{% for item in images %}
  {% unless item contains 'portrait' %}
<img src="{{ item }}">
	{% endunless %}
{% endfor %}
</div>


