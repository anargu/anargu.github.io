---
layout: project.html
title: Voz 3D
start_date: 2017-01-02 09:45:47 -05:00
end_date: 2018-10-02 09:45:47 -05:00
tags: [ projects ]
description: "Voz 3D: Plataforma para el aprendizaje del lenguaje de señas a través de animaciones 3D"
portrait_image: projects/voz3d/screenshot_1.png	
images:
  - /projects/respiot/portrait.png
  - /projects/respiot/photo_2021-01-09 11.35.34.jpeg
  - /projects/respiot/2021-01-09 11.37.11.jpg
  - /projects/respiot/2021-01-09 11.37.40.jpg
  - /projects/respiot/2021-01-09 11.37.50.jpg
---

[Resp IoT](https://prllel.co) is an IoT system for remote monitoring of vital signs in COVID patients. Project Winner at Engineering X Pandemic Preparedness.

<hr/>
My duties were:
- Frontend development of PWA Application. Using Vue.js 3.0, Typescript and Jest for testing
- Backend development. I used Firebase as the main tool for: database (Firestore), Push Notifications (FCM), authentication, API endpoints (Cloud Functions), and hosting.
- UI/UX Design and development of Frontend 

<div style="height: 20px;"></div>
<style>
.grid-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
}
</style>
<div class="grid-gallery">
{% for item in page.images %}
  {% unless item contains 'portrait' %}
		<img src="{{ item }}" width="200px" height="400px">
	{% endunless %}
{% endfor %}
</div>


