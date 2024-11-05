import building1 from "../assets/img/building1.jpg";
import building2 from "../assets/img/building2.jpg";
import building3 from "../assets/img/building3.jpg";
import building4 from "../assets/img/building4.jpg";
import { nanoid } from "nanoid";

export const building_data = [
  {
    id: nanoid(),
    imgContent: { url: building1, alt: "building1" },
    location: "San Diego",
    address: ` 350 Tenth Ave Suite 700`,
    addressLocation: "San Diego, CA 92101",
    time: "5:04 AM PST",
  },
  {
    id: nanoid(),
    imgContent: { url: building2, alt: "building2" },
    location: "New York",
    address: `36 E 20th St #6`,
    addressLocation: "New York, NY 10003",
    time: "8:06 AM EST",
  },
  {
    id: nanoid(),
    imgContent: { url: building3, alt: "building3" },
    location: "Bay Area",
    address: ` *The location of this office`,
    addressLocation: "is undisclosed.",
    time: "5:06 AM PST",
  },
  {
    id: nanoid(),
    imgContent: { url: building4, alt: "building4" },
    location: "St. Louis",
    address: ` 4814 Washington Blvd Studio 240`,
    addressLocation: "St. Louis, Missouri 63108",
    time: "7:07 AM CST",
  },
];
