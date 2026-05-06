(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const v=[{id:"northern-metropolis",title:"Northern Metropolis Spatial Analysis",type:"Spatial analytics",role:"Lead Spatial Analyst",year:"2025",period:"Sep 2025 - Dec 2025",methods:["GWR","POI fusion","Scenario forecast"],technologies:["Python","GeoPandas","Statsmodels","ArcGIS Pro","QGIS","Foursquare API"],outcome:"Explained employment distribution patterns with R² > 0.5 and produced 2033 job forecasts.",problem:"Planning decisions for the Northern Metropolis need evidence that connects employment demand, land use, census patterns, and emerging activity centers.",method:"Integrated census demographics with Foursquare POI data, cleaned spatial units, and applied geographically weighted regression to capture local variation that global OLS models flatten.",evidence:["Combined traditional census data with digital activity signals.","Compared local GWR performance against global model baselines.","Mapped predicted 2033 job distribution to support planning discussion."],summary:"Modeled employment categories with census and POI data to make future job distribution easier to explain, compare, and map.",links:{}},{id:"accident-early-warning",title:"Accident Early Warning System",type:"Computer vision safety",role:"Core Developer and Hardware Integrator",year:"2022-2023",period:"June 2022 - May 2023",methods:["OpenCV","Edge device","TTC warning"],technologies:["Python","OpenCV","TensorFlow Lite","Raspberry Pi","Arduino"],outcome:"Built a real-time warning prototype and secured a utility model patent for the hardware-software system.",problem:"Secondary highway crashes can happen when approaching drivers miss stopped vehicles or emergency response activity after an initial incident.",method:"Designed a low-latency computer vision pipeline that detects approaching traffic, estimates risk with time-to-collision logic, and triggers warning hardware on compact edge devices.",evidence:["Connected camera input, inference, and warning output in one deployable prototype.","Optimized the pipeline for limited power and compute resources.","Tested robustness considerations for weather, lighting, and roadside deployment."],summary:"Created an edge-computing warning device that uses computer vision to reduce the risk of secondary traffic accidents.",links:{}},{id:"freight-tire-classification",title:"Freight Tire Classification",type:"Vision-based freight analysis",role:"Algorithm Engineer",year:"2023-2024",period:"Jul 2023 - Apr 2024",methods:["YOLOv8","ResNet","Feature extraction"],technologies:["YOLOv8","ResNet","PyTorch","CUDA","Digital Image Processing"],outcome:"Developed a non-contact tire classification workflow for weight-estimation research in complex road scenes.",problem:"Overloaded freight vehicles damage roads and raise safety risk, but direct weighing infrastructure is expensive and not always available.",method:"Combined YOLOv8 tire localization with ResNet-based feature extraction to classify tires and support deformation-based load inference.",evidence:["Built a pipeline for tire detection in uncontrolled outdoor imagery.","Prepared classification logic across truck types, brands, and viewing angles.","Studied tire contact area and deformation as signals for axle-load estimation."],summary:"Used deep learning to classify freight tires and support a non-contact truck weight estimation workflow.",links:{}},{id:"traffic-signal-optimization",title:"Traffic Signal Optimization",type:"Traffic simulation",role:"Simulation Analyst",year:"2023",period:"Oct 2023 - Dec 2023",methods:["VISSIM","Synchro","Delay analysis"],technologies:["VISSIM","Synchro","Python","Signal 4.0"],outcome:"Reduced average simulated vehicle delay by 18% during peak-hour testing.",problem:"A major arterial corridor suffered from queue spillback and uneven progression caused by suboptimal signal timing.",method:"Modeled the corridor in VISSIM, calibrated local behavior assumptions, revised timing in Synchro, and compared delay, queue length, and throughput before and after optimization.",evidence:["Identified bottlenecks in peak-hour movement patterns.","Validated a revised signal plan in microsimulation.","Improved arterial progression while reducing queue spillback."],summary:"Optimized corridor signal timing with traffic simulation and before-after performance comparison.",links:{}},{id:"yuxiang-gate-design",title:"Yuxiang Gate Intersection Design",type:"Intersection design",role:"Traffic Designer",year:"2024",period:"May 2024 - June 2024",methods:["CAD","Channelization","Street safety"],technologies:["AutoCAD","Civil 3D","Traffic Simulation Software"],outcome:"Produced an intersection layout balancing vehicle flow, pedestrian safety, and tight historic-core constraints.",problem:"The Yuxiang Gate intersection needed a safer, clearer layout while preserving surrounding urban fabric and meeting road engineering standards.",method:"Used CAD-based layout iteration to adjust lane channelization, pedestrian crossings, bus movement, and turning geometry within fixed spatial constraints.",evidence:["Reduced vehicle conflict points through channelization.","Improved pedestrian crossing clarity and accessibility.","Coordinated design constraints around dense existing street conditions."],summary:"Designed a constrained urban intersection plan with clearer movement, safer crossings, and standard-compliant geometry.",links:{}}],f=document.getElementById("theme-toggle"),h=document.getElementById("theme-toggle-mobile"),m=document.documentElement,r=document.getElementById("navbar"),d=document.getElementById("menu-btn"),c=document.getElementById("mobile-menu"),E=document.querySelectorAll(".mobile-link"),I=document.querySelectorAll("main section, footer[id]"),P=document.querySelectorAll(".nav-link"),b=document.getElementById("projects-grid"),s=document.getElementById("project-overlay"),x=document.getElementById("overlay-content"),p=document.getElementById("close-overlay"),y=[{tile:"case-tile-featured",visual:"visual-brand",dot:"bg-brand-500",accent:"text-brand-700 dark:text-brand-300"},{tile:"case-tile-featured",visual:"visual-teal",dot:"bg-teal-500",accent:"text-teal-700 dark:text-teal-300"},{tile:"case-tile-featured",visual:"visual-slate",dot:"bg-slate-700 dark:bg-slate-200",accent:"text-slate-700 dark:text-slate-200"},{tile:"case-tile-compact",visual:"visual-cyan",dot:"bg-cyan-500",accent:"text-cyan-700 dark:text-cyan-300"},{tile:"case-tile-compact",visual:"visual-amber",dot:"bg-amber-500",accent:"text-amber-700 dark:text-amber-300"}],A=()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?m.classList.add("dark"):m.classList.remove("dark")},w=()=>{m.classList.toggle("dark"),localStorage.theme=m.classList.contains("dark")?"dark":"light"},k=()=>{r&&(window.scrollY>40?(r.classList.add("border-b","border-slate-200","bg-atlas-paper/90","shadow-sm","backdrop-blur","py-3","dark:border-slate-800","dark:bg-slate-950/90"),r.classList.remove("py-4")):(r.classList.add("py-4"),r.classList.remove("border-b","border-slate-200","bg-atlas-paper/90","shadow-sm","backdrop-blur","py-3","dark:border-slate-800","dark:bg-slate-950/90")))},$=e=>{c==null||c.classList.toggle("open",e),d&&(d.setAttribute("aria-expanded",String(e)),d.setAttribute("aria-label",e?"Close menu":"Open menu"),d.innerHTML=e?'<i class="fa-solid fa-xmark text-lg" aria-hidden="true"></i>':'<i class="fa-solid fa-bars text-lg" aria-hidden="true"></i>')},L=e=>y[e]||y[y.length-1],a=e=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),C=(e={})=>Object.entries(e).filter(([,t])=>typeof t=="string"&&t.trim()&&t.trim()!=="#");function O(e,t,i){return`
    <div class="case-visual ${t.visual}" aria-hidden="true">
      <div class="route-line route-line-a"></div>
      <div class="route-line route-line-b"></div>
      <div class="route-node route-node-one"></div>
      <div class="route-node route-node-two"></div>
      <span class="case-index">${String(i+1).padStart(2,"0")}</span>
      <i class="fa-solid fa-location-crosshairs case-compass"></i>
      <p>${a(e.type)}</p>
    </div>
  `}function D(e,t){const i=L(t);return`
    <article class="${i.tile} group">
      ${O(e,i,t)}
      <div class="flex flex-1 flex-col p-6 sm:p-7">
        <div class="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          <span class="inline-flex items-center gap-2"><span class="h-2 w-2 rounded-full ${i.dot}"></span>${a(e.year)}</span>
          <span>${a(e.type)}</span>
        </div>
        <h3 class="text-2xl font-extrabold leading-tight text-slate-950 dark:text-white">${a(e.title)}</h3>
        <p class="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">${a(e.summary)}</p>
        <dl class="mt-6 grid grid-cols-1 gap-4 border-y border-slate-200 py-5 text-sm dark:border-slate-800">
          <div>
            <dt class="font-bold text-slate-400">Role</dt>
            <dd class="mt-1 font-semibold text-slate-800 dark:text-slate-100">${a(e.role)}</dd>
          </div>
          <div>
            <dt class="font-bold text-slate-400">Outcome</dt>
            <dd class="mt-1 font-semibold text-slate-800 dark:text-slate-100">${a(e.outcome)}</dd>
          </div>
        </dl>
        <div class="mt-6 flex flex-wrap gap-2">
          ${e.methods.map(l=>`<span class="method-pill">${a(l)}</span>`).join("")}
        </div>
        <a href="#project/${e.id}" class="mt-7 inline-flex w-fit items-center gap-2 text-sm font-extrabold ${i.accent} transition-all group-hover:gap-3">
          Open case study <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `}function T(e,t){const i=L(t);return`
    <article class="${i.tile} group">
      <div>
        <div class="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          <span class="inline-flex items-center gap-2"><span class="h-2 w-2 rounded-full ${i.dot}"></span>${a(e.year)}</span>
          <span>${a(e.type)}</span>
        </div>
        <h3 class="text-xl font-extrabold text-slate-950 dark:text-white">${a(e.title)}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${a(e.summary)}</p>
      </div>
      <div class="flex flex-col gap-5 md:items-end">
        <p class="max-w-sm text-sm font-semibold text-slate-700 dark:text-slate-200">${a(e.outcome)}</p>
        <a href="#project/${e.id}" class="inline-flex w-fit items-center gap-2 text-sm font-extrabold ${i.accent} transition-all group-hover:gap-3">
          Open case study <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `}function M(){if(!b)return;const e=v.slice(0,3).map(D).join(""),t=v.slice(3).map((i,l)=>T(i,l+3)).join("");b.innerHTML=`
    <div class="grid gap-6 lg:grid-cols-3">${e}</div>
    ${t?`<div class="mt-6 grid gap-4">${t}</div>`:""}
  `}function R(){const e=window.innerWidth-document.documentElement.clientWidth;e>0&&(document.body.style.paddingRight=`${e}px`,r&&(r.classList.add("no-transition"),r.style.paddingRight=`${e}px`)),document.body.style.overflow="hidden"}function q(){document.body.style.overflow="",document.body.style.paddingRight="",r&&(r.style.paddingRight="",setTimeout(()=>r.classList.remove("no-transition"),10))}function j(e){const t=C(e.links);return t.length?`
    <section class="overlay-panel">
      <h3>Links</h3>
      <div class="mt-4 grid gap-3">
        ${t.map(([i,l])=>`
          <a href="${a(l)}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            ${a(i)} <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
          </a>
        `).join("")}
      </div>
    </section>
  `:""}function B(e){const t=v.find(i=>i.id===e);!t||!x||!s||(x.innerHTML=`
    <article>
      <div class="grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
        <div>
          <p class="section-label">${a(t.type)} / ${a(t.year)}</p>
          <h2 id="overlay-title" class="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-6xl dark:text-white">${a(t.title)}</h2>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">${a(t.summary)}</p>
        </div>
        <aside class="overlay-panel">
          <h3>Case signal</h3>
          <dl class="mt-5 space-y-4 text-sm">
            <div>
              <dt class="font-bold uppercase tracking-[0.16em] text-slate-400">Role</dt>
              <dd class="mt-1 font-semibold text-slate-900 dark:text-slate-100">${a(t.role)}</dd>
            </div>
            <div>
              <dt class="font-bold uppercase tracking-[0.16em] text-slate-400">Outcome</dt>
              <dd class="mt-1 font-semibold text-slate-900 dark:text-slate-100">${a(t.outcome)}</dd>
            </div>
            <div>
              <dt class="font-bold uppercase tracking-[0.16em] text-slate-400">Period</dt>
              <dd class="mt-1 font-semibold text-slate-900 dark:text-slate-100">${a(t.period)}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-[0.64fr_0.36fr]">
        <div class="space-y-6">
          <section class="overlay-panel">
            <h3>Problem</h3>
            <p>${a(t.problem)}</p>
          </section>
          <section class="overlay-panel">
            <h3>Method</h3>
            <p>${a(t.method)}</p>
          </section>
          <section class="overlay-panel">
            <h3>Evidence</h3>
            <ul class="mt-5 space-y-3">
              ${t.evidence.map(i=>`<li>${a(i)}</li>`).join("")}
            </ul>
          </section>
        </div>
        <div class="space-y-6">
          <section class="overlay-panel">
            <h3>Tools</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              ${t.technologies.map(i=>`<span class="method-pill">${a(i)}</span>`).join("")}
            </div>
          </section>
          <section class="overlay-panel">
            <h3>Methods</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              ${t.methods.map(i=>`<span class="method-pill">${a(i)}</span>`).join("")}
            </div>
          </section>
          ${j(t)}
        </div>
      </div>
    </article>
  `,s.classList.remove("hidden"),requestAnimationFrame(()=>{s.classList.add("opacity-100"),R(),p==null||p.focus()}))}function u(){s&&(s.classList.remove("opacity-100"),setTimeout(()=>{s.classList.add("hidden"),q(),window.location.hash.startsWith("#project/")&&history.pushState("",document.title,window.location.pathname+window.location.search)},300))}function S(){const e=window.location.hash;e.startsWith("#project/")?B(e.replace("#project/","")):s!=null&&s.classList.contains("hidden")||u()}function z(){let e="";I.forEach(t=>{window.pageYOffset>=t.offsetTop-220&&(e=t.getAttribute("id")||"")}),P.forEach(t=>{const i=t.getAttribute("href")||"";t.classList.toggle("active",!!(e&&i===`#${e}`))})}A();k();M();S();f==null||f.addEventListener("click",w);h==null||h.addEventListener("click",w);window.addEventListener("scroll",()=>{k(),z()});d==null||d.addEventListener("click",()=>$(!(c!=null&&c.classList.contains("open"))));E.forEach(e=>e.addEventListener("click",()=>$(!1)));window.addEventListener("hashchange",S);p==null||p.addEventListener("click",u);s==null||s.addEventListener("click",e=>{e.target===s&&u()});window.addEventListener("keydown",e=>{e.key==="Escape"&&!(s!=null&&s.classList.contains("hidden"))&&u()});
