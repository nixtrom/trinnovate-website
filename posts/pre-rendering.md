---
title: 'Two forms of Pre-rendring'
date: "2025-04-23"
minutesToRead: "4"
author:
  name: "Niket"
  avatarUrl: "https://avatar.iran.liara.run/public"
heroImage: "https://img.freepik.com/free-vector/abstract-colorful-shapes-background_361591-2848.jpg?semt=ais_hybrid&w=740"
description: "Next.js has two forms of pre-rendering  The difference is in it generates the HTML for a page."
tags:
  - react
  - frontend
  - javascript
---
 
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
 
- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
 
Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.