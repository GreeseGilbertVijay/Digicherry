// Names and descriptions are read off the screenshots in public/projects; swap in the real client names and links when you have them.
export type Project = { image: string; title: string; category: string; text: string; tags: string[]; tone: string };

export const projects: Project[] = [
  { image: "project-1", title: "Ainvsys", category: "Technology", text: "A dark, high-tech website for an industrial IoT and AI company, built to showcase solutions and products.", tags: ["Web Design", "Development"], tone: "#1aa3ff" },
  { image: "project-2", title: "Purple Resorts", category: "Hospitality", text: "A warm boutique-resort website with room showcases and online booking front and centre.", tags: ["Web Design", "Booking"], tone: "#d4a537" },
  { image: "project-3", title: "Industrial Machinery", category: "Manufacturing", text: "A clean corporate site for a machinery manufacturer, telling its story and why customers choose it.", tags: ["Web Design", "Branding"], tone: "#2f6fd6" },
  { image: "project-4", title: "Flux CB", category: "Technology", text: "An electronics-manufacturing site with bold headlines, a factory video and a clear path to a quote.", tags: ["Web Design", "Development"], tone: "#19c2f0" },
  { image: "project-5", title: "Rack Manufacturer", category: "Manufacturing", text: "A product-led website for a storage rack maker, with categories laid out for quick browsing.", tags: ["Web Design", "SEO"], tone: "#e0453a" },
  { image: "project-6", title: "The Great Indian Cuisine", category: "Restaurant", text: "A rich restaurant website with menu highlights, a photo gallery and table booking.", tags: ["Web Design", "Booking"], tone: "#c9a227" },
];

export const projectSrc = (project: Project) => `/projects/${project.image}.webp`;

export const categories = ["All", ...new Set(projects.map((project) => project.category))];
