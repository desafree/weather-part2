(()=>{"use strict";async function e(e="bergamo",t,n="kelvin"){try{const o=`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=f85db4f81e9fe36af88d71da420865f0`,c=document.querySelector(".loading");c.classList.add("active");const d=await fetch(o),r=await d.json();c.classList.remove("active"),t(r,n)}catch(e){console.error(e)}}const t=function(){const e=document.querySelector(".meteo-container");return{removeContent:t,updateContent:function({main:{temp:n,humidity:o,feels_like:c},wind:{speed:d},name:r,weather:[{main:l}]},s="kelvin"){"Drizzle"==l||"Thunderstorm"==l||"Rain"==l||"Snow"==l?(document.documentElement.style.setProperty("--font-color","#dbdffd"),document.documentElement.style.setProperty("--header-color","#9ba3eb"),document.documentElement.style.setProperty("--container-color","#646fd4"),document.documentElement.style.setProperty("--background-color","#242f9b")):"Clear"==l?(document.documentElement.style.setProperty("--font-color","#D49B54"),document.documentElement.style.setProperty("--header-color","#C74B50"),document.documentElement.style.setProperty("--container-color","#712B75"),document.documentElement.style.setProperty("--background-color","#46244C")):(document.documentElement.style.setProperty("--font-color","#E5DCC3"),document.documentElement.style.setProperty("--header-color","#C7BEA2"),document.documentElement.style.setProperty("--container-color","#AAA492"),document.documentElement.style.setProperty("--background-color","#9A9483")),t();const a=document.createElement("h2");a.classList.add("city"),a.textContent=r,e.appendChild(a);const m=document.createElement("h3");m.classList.add("grade"),"kelvin"==s?m.textContent=n+" K":"celsius"==s&&(m.textContent=`${Math.ceil(n-273.15)} C`),e.appendChild(m);const u=document.createElement("h4");u.textContent="Humidity: ";const i=document.createElement("span");i.classList.add("humidity"),i.textContent=o+"%",u.appendChild(i),e.appendChild(u);const p=document.createElement("h4");p.textContent="Feels like: ";const C=document.createElement("span");C.classList.add("feel-grade"),"kelvin"==s?C.textContent=c+" K":"celsius"==s&&(C.textContent=`${Math.ceil(c-273.15)} C`),p.appendChild(C),e.appendChild(p);const y=document.createElement("h4");y.textContent="Wind: ";const h=document.createElement("span");h.classList.add("wind"),h.textContent=d+" km/h",y.appendChild(h),e.appendChild(y)}};function t(){e.textContent=""}}();e("bergamo",t.updateContent);const n=document.querySelector(".unit");n.addEventListener("click",(()=>{"kelvin"==n.textContent?n.textContent="celsius":"celsius"==n.textContent&&(n.textContent="kelvin"),e(document.querySelector(".city").textContent,t.updateContent,n.textContent)}));const o=document.querySelector("form");o.addEventListener("submit",(c=>{c.preventDefault(),e(o.city.value,t.updateContent,n.textContent),o.reset()}))})();