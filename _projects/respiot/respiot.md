---
layout: project
title: Resp IoT
date: 2020-09-15 10:00:00 +07:00
tags: []
description: "RespIoT: IoT platform which manage vital signs from patients and brings an easy visualization for doctors"
portrait: image	
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


