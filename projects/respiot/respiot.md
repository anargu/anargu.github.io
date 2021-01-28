---
layout: project.html
title: Resp IoT
start_date: 2020-09-15 00:00:00 -05:00
end_date: 2021-01-01 00:00:00 -05:00
tags: [ projects ]
description: "RespIoT: IoT platform which manage vital signs from patients and brings an easy visualization for doctors"
portrait_image: projects/respiot/portrait.png	
images:
  - /projects/respiot/portrait.png
  - /projects/respiot/photo_2021-01-09 11.35.34.jpeg
  - /projects/respiot/2021-01-09 11.37.11.jpg
  - /projects/respiot/2021-01-09 11.37.40.jpg
  - /projects/respiot/2021-01-09 11.37.50.jpg
---

[Resp IoT](https://respiot-live.web.app/) is an IoT system for remote monitoring of vital signs in COVID patients. Project Winner at Engineering X Pandemic Preparedness.

<hr/>
My duties were:

- Frontend development of PWA Application. Using Vue.js 3.0, Typescript and Jest for testing
- Backend development. I used Firebase as the main tool for: database (Firestore), Push Notifications (FCM), authentication, API endpoints (Cloud Functions), and hosting.
- UI/UX Design and development of Frontend 

<div style="height: 20px;"></div>

<div class="grid-image-gallery">
{% for item in images %}
  {% unless item contains 'portrait' %}
<img src="{{ item }}">
	{% endunless %}
{% endfor %}
</div>


