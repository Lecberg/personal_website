export const projects = [
  {
    id: "northern-metropolis",
    title: "Northern Metropolis Spatial Analysis",
    period: "Sep 2025 - Dec 2025",
    tags: ["GWR Analysis", "Python"],
    color: "brand",
    icon: "fa-map",
    summary: "Performed GWR analysis on employment categories using integrated census and Foursquare POI data. Demonstrated superior explanatory power (R² > 0.5) and generated 2033 job distribution predictions.",
    fullDescription: `
      <p>This project focused on the spatial analysis of employment categories in the Northern Metropolis area. By integrating traditional census data with real-time Foursquare POI (Points of Interest) data, we were able to create a more dynamic and accurate model of urban job distribution.</p>
      <p>The core methodology involved Geographical Weighted Regression (GWR), which allowed us to account for spatial non-stationarity in the relationship between land use and employment.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Key Accomplishments:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Integrated heterogeneous data sources including census demographics and digital footprint data.</li>
        <li>Achieved an R² value greater than 0.5, significantly outperforming global OLS models.</li>
        <li>Generated spatial predictions for job distributions for the year 2033 to inform urban planning decisions.</li>
      </ul>
    `,
    technologies: ["Python (GeoPandas, Statsmodels)", "ArcGIS Pro", "QGIS", "Foursquare API"],
    role: "Lead Spatial Analyst",
    challenges: "Handling spatial autocorrelation and aligning disparate spatial scales between census tracts and POI clusters.",
    images: [],
    links: { github: "#", report: "#" }
  },
  {
    id: "accident-early-warning",
    title: "Accident Early Warning System",
    period: "June 2022 - May 2023",
    tags: ["National Innovation", "CV / Python"],
    color: "red",
    icon: "fa-triangle-exclamation",
    summary: "Developed a real-time warning device using computer vision to prevent secondary traffic accidents. Secured a utility model patent for the system's improved response speed.",
    fullDescription: `
      <p>Secondary accidents on highways often cause more fatalities than initial collisions. This project developed an automated, vision-based early warning system designed to be deployed rapidly at accident scenes.</p>
      <p>The system uses high-speed cameras and custom Computer Vision algorithms to detect oncoming traffic and predict potential collisions with stationary vehicles or emergency responders.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Technical Innovation:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Designed a low-latency image processing pipeline for real-time detection.</li>
        <li>Implemented a robust warning trigger mechanism based on Time-to-Collision (TTC) metrics.</li>
        <li>Awarded a National Utility Model Patent for the unique hardware-software integration.</li>
      </ul>
    `,
    technologies: ["Python", "OpenCV", "TensorFlow Lite", "Raspberry Pi", "Arduino"],
    role: "Core Developer & Hardware Integrator",
    challenges: "Optimizing CV algorithms to run on edge computing hardware with limited power supply while maintaining high detection accuracy in various weather conditions.",
    images: [],
    links: { patent: "#" }
  },
  {
    id: "freight-tire-classification",
    title: "Freight Tire Classification",
    period: "Jul 2023 - Apr 2024",
    tags: ["Provincial Innovation", "YOLOv8 / ResNet"],
    color: "indigo",
    icon: "fa-truck-monster",
    summary: "Developed a non-contact weight estimation system using YOLOv8 and ResNet for real-time tire classification and deep feature extraction in complex traffic scenarios.",
    fullDescription: `
      <p>Illegal overloading is a major cause of road damage and accidents. This project aimed to create a non-contact method for estimating truck weight by analyzing tire deformation through computer vision.</p>
      <p>We combined YOLOv8 for precise tire localization and ResNet-based architectures for extracting fine-grained features of tire sidewalls and contact patches.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Research Outcomes:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>High-accuracy tire type classification across various truck brands and models.</li>
        <li>Correlation model between tire contact area/deformation and axle load.</li>
        <li>Robust performance in complex outdoor environments with varying lighting.</li>
      </ul>
    `,
    technologies: ["YOLOv8", "ResNet", "PyTorch", "CUDA", "Digital Image Processing"],
    role: "Algorithm Engineer",
    challenges: "Collecting and labeling a high-quality dataset of truck tires under various load conditions and camera angles.",
    images: [],
    links: { demo: "#" }
  },
  {
    id: "yuxiang-gate-design",
    title: "Yuxiang Gate Intersection Design",
    period: "May 2024 - June 2024",
    tags: ["CAD", "Traffic Eng"],
    color: "orange",
    icon: "fa-layer-group",
    summary: "Designed layout plan and traffic organization for Yuxiangmen intersection. Utilized CAD for precise compliance with road engineering standards and optimized traffic capacity.",
    fullDescription: `
      <p>The Yuxiang Gate intersection is a critical node in the historical urban core. This project involved a complete redesign of the intersection to improve safety for pedestrians and efficiency for transit.</p>
      <p>The design had to balance the preservation of historical context with modern traffic demands, following strict national road engineering standards.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Design Focus:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Optimized lane channelization to reduce vehicle conflict points.</li>
        <li>Improved pedestrian crossing facilities and accessibility features.</li>
        <li>Integration of dedicated bus lanes to prioritize public transport.</li>
      </ul>
    `,
    technologies: ["AutoCAD", "Civil 3D", "Traffic Simulation Software"],
    role: "Traffic Designer",
    challenges: "Working within extremely tight spatial constraints due to existing historical structures and high-density urban fabric.",
    images: [],
    links: {}
  },
  {
    id: "traffic-signal-optimization",
    title: "Traffic Signal Optimization",
    period: "Oct 2023 - Dec 2023",
    tags: ["VISSIM", "Simulation"],
    color: "emerald",
    icon: "fa-traffic-light",
    summary: "Optimized signal control for Fengcheng 7th Road using VISSIM. Analyzed traffic volume and speed data to adjust signal timing, significantly enhancing efficiency.",
    fullDescription: `
      <p>This project applied micro-simulation to solve congestion issues at a major arterial corridor. By modeling the current traffic state in VISSIM, we identified bottlenecks caused by suboptimal signal timing.</p>
      <p>We developed a new signal timing plan using Synchro and validated it through extensive VISSIM simulations, measuring improvements in delay, queue length, and throughput.</p>
      <h4 class="text-lg font-bold mt-6 mb-2">Simulation Results:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Reduced average vehicle delay by 18% during peak hours.</li>
        <li>Minimized queue spillback at critical upstream intersections.</li>
        <li>Improved coordination (green wave) along the arterial segment.</li>
      </ul>
    `,
    technologies: ["VISSIM", "Synchro", "Python (for data analysis)", "Signal 4.0"],
    role: "Simulation Analyst",
    challenges: "Calibrating the simulation model to accurately reflect local driving behavior and saturation flow rates.",
    images: [],
    links: {}
  }
];
