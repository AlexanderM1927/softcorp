if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,o)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let l={};const f=n=>i(n,r),c={module:{uri:r},exports:l,require:f};e[r]=Promise.all(s.map((n=>c[n]||f(n)))).then((n=>(o(...n),l)))}}define(["./workbox-a1e58f5e"],(function(n){"use strict";n.setCacheNameDetails({prefix:"softcorp"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/323.13a1de8e.css",revision:null},{url:"css/702.d2538d86.css",revision:null},{url:"css/739.86bb5fb6.css",revision:null},{url:"css/83.c763cd98.css",revision:null},{url:"css/app.00bf6ce8.css",revision:null},{url:"css/vendor.16ec85d4.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/fa-brands-400.150de8ea.ttf",revision:null},{url:"fonts/fa-brands-400.e033a13e.woff2",revision:null},{url:"fonts/fa-regular-400.3223dc79.woff2",revision:null},{url:"fonts/fa-regular-400.d8747423.ttf",revision:null},{url:"fonts/fa-solid-900.4a2cd718.ttf",revision:null},{url:"fonts/fa-solid-900.bb975c96.woff2",revision:null},{url:"fonts/fa-v4compatibility.0e3a648b.ttf",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"images/exro.png",revision:"8fb55a3099756b4adb7e84e1f29ba251"},{url:"images/myguardmoney.PNG",revision:"0b24b5d5caca5fe93231a9403b5a6dd4"},{url:"images/mypipeline.PNG",revision:"3a494e92172829e85c1f98879396206d"},{url:"images/software-development-button.jpg",revision:"e7ed7ea0bd2d918d75b3c959761df035"},{url:"images/soundhub.PNG",revision:"21896a76f8748e85210e2a80a26b51f9"},{url:"index.html",revision:"03b5aa89c572222df1c4e86130026991"},{url:"js/323.c01de721.js",revision:null},{url:"js/702.bd4ace94.js",revision:null},{url:"js/739.92c7dde0.js",revision:null},{url:"js/83.0cdcd970.js",revision:null},{url:"js/862.07a7347c.js",revision:null},{url:"js/app.9b4c35f3.js",revision:null},{url:"js/vendor.a25c08cd.js",revision:null},{url:"manifest.json",revision:"a8434dceefc7572c29aaf7e836e9f545"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
