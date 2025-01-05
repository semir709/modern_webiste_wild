import { nanoid } from "nanoid";
import boat_water from "../assets/img/boat_water.jpg";
import canyon from "../assets/img/canyon.jpg";
import { winter_from_sky } from "../assets/videos/index";

export const wild_dest = [
  {
    id: nanoid(),
    title: "Lake Escape",
    text: "Escape to the calm of crystal-clear waters.Breathe in serenity, surrounded by nature.",
    type: "img",
    src: { img: boat_water, alt: "boat_water" },
    url: "/blog/lake_escape",
  },
  {
    id: nanoid(),
    title: "Canyon Wonders",
    text: "Wander through landscapes etched by time.Adventure and wonder await at every turn.",
    type: "img",
    src: { img: canyon, alt: "canyon" },
    url: "/blog/canyon_wonders",
  },
  {
    id: nanoid(),
    title: "Winter Haven",
    text: "Dive into the thrill of snow-covered mountains.Experience the warmth of winter magic.",
    type: "video",
    src: { video: winter_from_sky, alt: "winterVideo" },
    url: "/blog/winter_haven",
  },
];
