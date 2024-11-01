import earth from "../assets/img/earth.jpg";
import squirrel from "../assets/img/squirrel.jpg";
import air_sky from "../assets/img/air_sky.jpg";
import green_land from "../assets/img/green_land.jpg";
import windmills from "../assets/img/windmills.jpg";

import { nanoid } from "nanoid";

export const thinking_data = [
  {
    id: nanoid(),
    imgContent: { url: green_land, alt: "green_land" },
    title:
      "The Healing Power of Nature: How Spending Time Outdoors Benefits Our Health",
    date: "12.10.2024",
    urlRedirect: "/article/healing_power",
    tag: "our_thoughts",
  },
  {
    id: nanoid(),
    imgContent: { url: squirrel, alt: "squirrel" },
    title:
      "Protecting Animal Health: Why Wildlife Conservation is Essential for Biodiversity",
    date: "15.10.2024",
    urlRedirect: "/article/protecting_animals",
    tag: "our_thoughts",
  },
  {
    id: nanoid(),
    imgContent: { url: earth, alt: "earth" },
    title:
      "Human Responsibility for Earth’s Health: Our Role in Environmental Sustainability",
    date: "20.10.2024",
    urlRedirect: "article/human_responsibility",
    tag: "our_thoughts",
  },
  {
    id: nanoid(),
    imgContent: { url: air_sky, alt: "air_sky" },
    title:
      "Teaching Future Generations: The Importance of Environmental Education in Schools",
    date: "10.09.2024",
    urlRedirect: "article/future_gens",
    tag: "sponsors_thoughts",
  },
  {
    id: nanoid(),
    imgContent: { url: windmills, alt: "windmills" },
    title:
      "From Green Spaces to Clean Air: The Link Between a Healthy Planet and Human Well-being",
    date: "10.08.2024",
    urlRedirect: "article/green_space",
    tag: "sponsors_thoughts",
  },
];
