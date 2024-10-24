import alps from "../assets/img/alps.jpg";
import artic from "../assets/img/artic.jpg";
import desert from "../assets/img/desert.jpg";
import rainforest from "../assets/img/rainforest.jpg";
import ocean from "../assets/img/ocean.jpg";
import { nanoid } from "nanoid";

export const news_data = [
  {
    id: nanoid(),
    imgContent: { url: rainforest, alt: "rainforest" },
    title: "The Hidden Wonders of Rainforests",
    date: "10.10.2024",
    urlRedirect: "/rainforest",
  },
  {
    id: nanoid(),
    imgContent: { url: alps, alt: "alps" },
    title: "Mountain Majesty: A Journey Through the Alps",
    date: "10.09.2024",
    urlRedirect: "/alps",
  },
  {
    id: nanoid(),
    imgContent: { url: ocean, alt: "ocean" },
    title: "The Oceans: Earth's Final Frontier",
    date: "05.10.2024",
    urlRedirect: "/earthOcean",
  },
  {
    id: nanoid(),
    imgContent: { url: desert, alt: "desert" },
    title: "Desert Bloom: The Beauty of Arid Landscapes",
    date: "30.09.2024",
    urlRedirect: "/desert",
  },
  {
    id: nanoid(),
    imgContent: { url: artic, alt: "artic" },
    title: "The Silent Song of the Arctic",
    date: "12.10.2024",
    urlRedirect: "/artic",
  },
];