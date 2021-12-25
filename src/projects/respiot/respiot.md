---
templateEngineOverride: njk,md
layout: project.njk
title: Resp IoT
order: 4
start_date: 2020-09-15 00:00:00 -05:00
end_date: 2021-01-01 00:00:00 -05:00
tags: [ projects ]
description: "RespIoT: IoT platform which manage vital signs from patients and brings an easy visualization for doctors"
portrait_image: ./src/projects/respiot/portrait.png	
images:
  - ./src/projects/respiot/photo_2021-01-09 11.35.34.jpeg
  - ./src/projects/respiot/2021-01-09 11.37.11.jpg
  - ./src/projects/respiot/2021-01-09 11.37.40.jpg
  - ./src/projects/respiot/2021-01-09 11.37.50.jpg
---

[Resp IoT](https://respiot-live.web.app/) is an IoT system for remote monitoring of vital signs in COVID patients.
Project Winner at Engineering X Pandemic Preparedness.

## Motivation

In 2020, I think the primary concern of everyone was the COVID-19 outbreak. Due
to this virus's high level of contagiousness, several people were infected and urged for medical attention. Along with this, people present respiratory
issues as one of the earlier symptoms, which can be used to diagnose this virus.
However, the hospitals in most countries but specifically in countries with 
mid and low resources collapsed, which means that several people cannot receive 
medic attention or monitor their health status. 
Given the situation, the project RespIoT is a proposal for monitoring system of
vital health signs. 


## Tech Details

Specifically, RespIoT is an Internet of Things (IoT) solution that is compound 
by two parts hardware monitoring system and software infrastructure. 
The hardware monitoring system measures health parameters like respiratory, 
and heart rate and oxygen saturation. The software infrastructure consists of
a Progressive Web Application (PWA) that serves as a display of measurements, and 
a serverless backend service to store the values and functions as a central
communication between the web platform and the hardware. 

<hr/>


My duties are:

- Frontend development of PWA Application. Using Vue.js 3.0, Typescript, and Jest for testing.
- Backend development. I used Firebase as the primary tool for the database (Firestore), Push Notifications (FCM), authentication, API endpoints (Cloud Functions), and hosting.
- UI/UX Design and development of the frontend.




