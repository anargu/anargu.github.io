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

[Resp IoT](https://respiot-live.web.app/) is an IoT system for remote monitoring of vital signs in COVID patients.
Project Winner at Engineering X Pandemic Preparedness.

## Motivation

In 2020, I think the major concern of everyone was the COVID-19 outbreak. Due
to the high level of contagiousness of this virus, several people were infected
and urged of medic attention. Along with this, people present respiratory
issues as one of the earlier symptons that can diagnose this virus.
However, the hospitals in most countries but specifically in countries with 
mid and low resources collapsed, what means that several people cannot receive 
medic attention or monitor their health status. 
Given the situation, the project RespIoT is a proposal of monitoring system of
vital health signs. 


## Tech Details

Specifically, RespIoT is a Internet of Things (IoT) solution that is compound 
by two parts hardware monitoring system and software infraestructure. 
The hardware monitoring system measures health parameters like respiratory, 
and heart rate, and oxygen saturation. The software infraestructure consists of
a Progressive Web Application (PWA) that serves as display of measurements, and 
a serverless backend service to store the values and serves as a central
communication between the web platform and the hardware. 

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


