import type { IconType } from "react-icons";
import { PiBrowsersFill, PiChartLineUpFill, PiMagnifyingGlassFill, PiNotePencilFill, PiPaletteFill, PiShareNetworkFill, PiShieldCheckFill, PiTargetFill, PiVideoCameraFill } from "react-icons/pi";

export type Service = { image: string; title: string; icon: IconType; zoom?: boolean };

export const serviceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

// campaigns.webp is a circular cut-out, so `zoom` pushes it past its transparent corners to fill a frame like the rest.
export const services: Service[] = [
  { image: "digitalmarketing-new", title: "Digital Marketing", icon: PiChartLineUpFill },
  { image: "seo-new", title: "Search Engine Optimization", icon: PiMagnifyingGlassFill },
  { image: "social-new", title: "Social Media Marketing", icon: PiShareNetworkFill },
  { image: "web-new", title: "Website Development", icon: PiBrowsersFill },
  { image: "content-new", title: "Content Marketing", icon: PiNotePencilFill },
  { image: "graphic-new", title: "Graphic Design", icon: PiPaletteFill },
  { image: "video-new", title: "Video Production", icon: PiVideoCameraFill },
  { image: "campaigns", title: "Ad Campaigns", icon: PiTargetFill, zoom: true },
  { image: "reputation-new", title: "Online Reputation Management", icon: PiShieldCheckFill },
];

export const serviceSrc = (service: Service) => `/services/${service.image}.webp`;
