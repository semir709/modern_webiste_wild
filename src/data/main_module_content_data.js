import animals from "../assets/img/animals.jpg";
import food from "../assets/img/food.jpg";
import travel from "../assets/img/travel.jpg";
import space from "../assets/img/space.jpg";
import earth from "../assets/img/earth.jpg";
import { nanoid } from "nanoid";

export const module_data = [
  {
    id: nanoid(),
    imgContent: { url: travel, alt: "travel" },
    title: "WanderWave",
    rightText: "2022",
    subtext: "Ride the Waves of Adventure!",
    text: "WanderWave curates personalized travel experiences that immerse you in local cultures, from stunning beaches to hidden mountain retreats.",
    urlRedirect: "/travel",
  },
  {
    id: nanoid(),
    imgContent: { url: food, alt: "food" },
    title: "NutriNest",
    rightText: "2021",
    subtext: "Nourish Your Body, Fuel Your Life!",
    text: "NutriNest offers a subscription service for healthy meal kits, packed with organic ingredients and easy-to-follow recipes for busy lifestyles.",
    urlRedirect: "/nutri",
  },
  {
    id: nanoid(),
    imgContent: { url: earth, alt: "earth" },
    title: "EarthHeart",
    rightText: "2020",
    subtext: "Cultivating a Greener Tomorrow!",
    text: "EarthHeart promotes sustainable living by providing eco-friendly products and resources to help individuals and families reduce their environmental impact.",
    urlRedirect: "/earth",
  },
  {
    id: nanoid(),
    imgContent: { url: space, alt: "space" },
    title: "CosmicVista",
    rightText: "2019",
    subtext: "Explore the Universe, One Star at a Time!",
    text: "CosmicVista delivers virtual reality experiences that take you on breathtaking journeys through the cosmos, exploring galaxies and celestial phenomena.",
    urlRedirect: "/space",
  },
  {
    id: nanoid(),
    imgContent: { url: animals, alt: "animals" },
    title: "Pawsitive Haven",
    rightText: "2018",
    subtext: "Where Love Meets Fur!",
    text: "Pawsitive Haven is a community-focused animal rescue organization dedicated to finding forever homes for abandoned pets while promoting responsible pet ownership.",
    urlRedirect: "/animals",
  },
];
