---
title: 'When to use Client Side Rendering vs CSR'
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
 
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
 
You can use Static Generation for many types of pages, including:
 
- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation
 
You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
 
On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
 
In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.