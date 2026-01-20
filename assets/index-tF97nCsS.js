(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const x=[{id:"northern-metropolis",title:"Northern Metropolis Spatial Analysis",period:"Sep 2025 - Dec 2025",tags:["GWR Analysis","Python"],color:"brand",icon:"fa-map",summary:"Performed GWR analysis on employment categories using integrated census and Foursquare POI data. Demonstrated superior explanatory power (R² > 0.5) and generated 2033 job distribution predictions.",fullDescription:`
      <p>This project focused on the spatial analysis of employment categories in the Northern Metropolis area. By integrating traditional census data with real-time Foursquare POI (Points of Interest) data, we were able to create a more dynamic and accurate model of urban job distribution.</p>
      <p>The core methodology involved Geographical Weighted Regression (GWR), which allowed us to account for spatial non-stationarity in the relationship between land use and employment.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Key Accomplishments:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Integrated heterogeneous data sources including census demographics and digital footprint data.</li>
        <li>Achieved an R² value greater than 0.5, significantly outperforming global OLS models.</li>
        <li>Generated spatial predictions for job distributions for the year 2033 to inform urban planning decisions.</li>
      </ul>
    `,technologies:["Python (GeoPandas, Statsmodels)","ArcGIS Pro","QGIS","Foursquare API"],role:"Lead Spatial Analyst",challenges:"Handling spatial autocorrelation and aligning disparate spatial scales between census tracts and POI clusters.",images:[],links:{github:"#",report:"#"}},{id:"accident-early-warning",title:"Accident Early Warning System",period:"June 2022 - May 2023",tags:["National Innovation","CV / Python"],color:"red",icon:"fa-triangle-exclamation",summary:"Developed a real-time warning device using computer vision to prevent secondary traffic accidents. Secured a utility model patent for the system's improved response speed.",fullDescription:`
      <p>Secondary accidents on highways often cause more fatalities than initial collisions. This project developed an automated, vision-based early warning system designed to be deployed rapidly at accident scenes.</p>
      <p>The system uses high-speed cameras and custom Computer Vision algorithms to detect oncoming traffic and predict potential collisions with stationary vehicles or emergency responders.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Technical Innovation:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Designed a low-latency image processing pipeline for real-time detection.</li>
        <li>Implemented a robust warning trigger mechanism based on Time-to-Collision (TTC) metrics.</li>
        <li>Awarded a National Utility Model Patent for the unique hardware-software integration.</li>
      </ul>
    `,technologies:["Python","OpenCV","TensorFlow Lite","Raspberry Pi","Arduino"],role:"Core Developer & Hardware Integrator",challenges:"Optimizing CV algorithms to run on edge computing hardware with limited power supply while maintaining high detection accuracy in various weather conditions.",images:[],links:{patent:"#"}},{id:"freight-tire-classification",title:"Freight Tire Classification",period:"Jul 2023 - Apr 2024",tags:["Provincial Innovation","YOLOv8 / ResNet"],color:"indigo",icon:"fa-truck-monster",summary:"Developed a non-contact weight estimation system using YOLOv8 and ResNet for real-time tire classification and deep feature extraction in complex traffic scenarios.",fullDescription:`
      <p>Illegal overloading is a major cause of road damage and accidents. This project aimed to create a non-contact method for estimating truck weight by analyzing tire deformation through computer vision.</p>
      <p>We combined YOLOv8 for precise tire localization and ResNet-based architectures for extracting fine-grained features of tire sidewalls and contact patches.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Research Outcomes:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>High-accuracy tire type classification across various truck brands and models.</li>
        <li>Correlation model between tire contact area/deformation and axle load.</li>
        <li>Robust performance in complex outdoor environments with varying lighting.</li>
      </ul>
    `,technologies:["YOLOv8","ResNet","PyTorch","CUDA","Digital Image Processing"],role:"Algorithm Engineer",challenges:"Collecting and labeling a high-quality dataset of truck tires under various load conditions and camera angles.",images:[],links:{demo:"#"}},{id:"yuxiang-gate-design",title:"Yuxiang Gate Intersection Design",period:"May 2024 - June 2024",tags:["CAD","Traffic Eng"],color:"orange",icon:"fa-layer-group",summary:"Designed layout plan and traffic organization for Yuxiangmen intersection. Utilized CAD for precise compliance with road engineering standards and optimized traffic capacity.",fullDescription:`
      <p>The Yuxiang Gate intersection is a critical node in the historical urban core. This project involved a complete redesign of the intersection to improve safety for pedestrians and efficiency for transit.</p>
      <p>The design had to balance the preservation of historical context with modern traffic demands, following strict national road engineering standards.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Design Focus:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Optimized lane channelization to reduce vehicle conflict points.</li>
        <li>Improved pedestrian crossing facilities and accessibility features.</li>
        <li>Integration of dedicated bus lanes to prioritize public transport.</li>
      </ul>
    `,technologies:["AutoCAD","Civil 3D","Traffic Simulation Software"],role:"Traffic Designer",challenges:"Working within extremely tight spatial constraints due to existing historical structures and high-density urban fabric.",images:[],links:{}},{id:"traffic-signal-optimization",title:"Traffic Signal Optimization",period:"Oct 2023 - Dec 2023",tags:["VISSIM","Simulation"],color:"emerald",icon:"fa-traffic-light",summary:"Optimized signal control for Fengcheng 7th Road using VISSIM. Analyzed traffic volume and speed data to adjust signal timing, significantly enhancing efficiency.",fullDescription:`
      <p>This project applied micro-simulation to solve congestion issues at a major arterial corridor. By modeling the current traffic state in VISSIM, we identified bottlenecks caused by suboptimal signal timing.</p>
      <p>We developed a new signal timing plan using Synchro and validated it through extensive VISSIM simulations, measuring improvements in delay, queue length, and throughput.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Simulation Results:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Reduced average vehicle delay by 18% during peak hours.</li>
        <li>Minimized queue spillback at critical upstream intersections.</li>
        <li>Improved coordination (green wave) along the arterial segment.</li>
      </ul>
    `,technologies:["VISSIM","Synchro","Python (for data analysis)","Signal 4.0"],role:"Simulation Analyst",challenges:"Calibrating the simulation model to accurately reflect local driving behavior and saturation flow rates.",images:[],links:{}}],p=document.getElementById("theme-toggle"),u=document.getElementById("theme-toggle-mobile"),g=document.documentElement,v=()=>{g.classList.toggle("dark"),g.classList.contains("dark")?localStorage.theme="dark":localStorage.theme="light"};localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?g.classList.add("dark"):g.classList.remove("dark");p==null||p.addEventListener("click",v);u==null||u.addEventListener("click",v);const s=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>50?(s==null||s.classList.add("bg-white/90","dark:bg-slate-900/90","backdrop-blur-md","shadow-sm","py-2"),s==null||s.classList.remove("py-4","bg-transparent")):(s==null||s.classList.add("py-4","bg-transparent"),s==null||s.classList.remove("bg-white/90","dark:bg-slate-900/90","backdrop-blur-md","shadow-sm","py-2"))});const l=document.getElementById("menu-btn"),n=document.getElementById("mobile-menu"),k=document.querySelectorAll(".mobile-link");let c=!1;l==null||l.addEventListener("click",()=>{c=!c,c?(n==null||n.classList.add("open"),l.innerHTML='<i class="fa-solid fa-xmark text-2xl"></i>'):(n==null||n.classList.remove("open"),l.innerHTML='<i class="fa-solid fa-bars text-2xl"></i>')});k.forEach(e=>{e.addEventListener("click",()=>{c=!1,n==null||n.classList.remove("open"),l&&(l.innerHTML='<i class="fa-solid fa-bars text-2xl"></i>')})});const L=document.querySelectorAll("section"),I=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{let e="";L.forEach(t=>{const a=t.offsetTop;window.pageYOffset>=a-200&&(e=t.getAttribute("id")||"")}),I.forEach(t=>{var a;t.classList.remove("active","text-brand-600"),(a=t.getAttribute("href"))!=null&&a.includes(e)&&t.classList.add("active","text-brand-600")})});const y=document.getElementById("projects-grid"),r=document.getElementById("project-overlay"),b=document.getElementById("overlay-content"),h=document.getElementById("close-overlay");function S(){y&&(y.innerHTML=x.map(e=>`
        <article class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
            <div class="h-48 bg-gradient-to-br from-${e.color}-600 to-${e.color}-800 p-6 flex items-end relative overflow-hidden">
                <i class="fa-solid ${e.icon} absolute -right-4 -bottom-4 text-9xl text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500"></i>
                <h3 class="text-white font-bold text-xl relative z-10">${e.title}</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex gap-2 mb-4 flex-wrap">
                    ${e.tags.map(t=>`
                        <span class="px-2 py-1 bg-${e.color}-50 dark:bg-${e.color}-900/30 text-${e.color}-700 dark:text-${e.color}-300 text-xs font-semibold rounded border border-${e.color}-100 dark:border-${e.color}-800/50">${t}</span>
                    `).join("")}
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                    ${e.summary}
                </p>
                <div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <span class="text-xs text-slate-400 dark:text-slate-500 font-medium">${e.period}</span>
                    <a href="#project/${e.id}" class="text-brand-600 dark:text-brand-400 text-sm font-semibold hover:text-brand-800 dark:hover:text-brand-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join(""))}function w(e){const t=x.find(a=>a.id===e);!t||!b||!r||(b.innerHTML=`
        <div class="max-w-4xl mx-auto">
            <div class="mb-12">
                <div class="flex flex-wrap gap-2 mb-4">
                    ${t.tags.map(a=>`<span class="px-3 py-1 bg-${t.color}-50 dark:bg-${t.color}-900/30 text-${t.color}-600 dark:text-${t.color}-400 text-xs font-bold rounded-full">${a}</span>`).join("")}
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">${t.title}</h2>
                <p class="text-lg text-slate-500 dark:text-slate-400">${t.period} • ${t.role}</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-8">
                    <section class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                        ${t.fullDescription}
                    </section>
                    
                    ${t.challenges?`
                        <section class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <i class="fa-solid fa-triangle-exclamation text-orange-500"></i> Key Challenges
                            </h4>
                            <p class="text-slate-600 dark:text-slate-400">${t.challenges}</p>
                        </section>
                    `:""}
                </div>

                <div class="space-y-8">
                    <div class="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                        <h4 class="font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h4>
                        <div class="flex flex-wrap gap-2">
                            ${t.technologies.map(a=>`<span class="px-2 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded border border-slate-200 dark:border-slate-600">${a}</span>`).join("")}
                        </div>
                    </div>

                    ${Object.keys(t.links).length>0?`
                        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h4 class="font-bold text-slate-900 dark:text-white mb-4">Project Links</h4>
                            <div class="space-y-3">
                                ${Object.entries(t.links).map(([a,d])=>`
                                    <a href="${d}" class="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                        <span class="text-sm font-medium text-slate-600 dark:text-slate-400 capitalize">${a}</span>
                                        <i class="fa-solid fa-external-link text-xs text-slate-400 group-hover:text-brand-500"></i>
                                    </a>
                                `).join("")}
                            </div>
                        </div>
                    `:""}
                </div>
            </div>
        </div>
    `,r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("opacity-100"),document.body.style.overflow="hidden"},10))}function f(){r&&(r.classList.remove("opacity-100"),setTimeout(()=>{r.classList.add("hidden"),document.body.style.overflow="",window.location.hash="#projects"},500))}window.addEventListener("hashchange",()=>{const e=window.location.hash;if(e.startsWith("#project/")){const t=e.replace("#project/","");w(t)}else(e==="#projects"||e==="")&&f()});if(window.location.hash.startsWith("#project/")){const e=window.location.hash.replace("#project/","");w(e)}h==null||h.addEventListener("click",f);window.addEventListener("keydown",e=>{e.key==="Escape"&&!(r!=null&&r.classList.contains("hidden"))&&f()});S();
