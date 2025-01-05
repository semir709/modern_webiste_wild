import { nanoid } from "nanoid";
import { Logo1, Logo2, Logo3 } from "../assets/svg";

export const awards_data = [
  {
    id: nanoid(),
    text: "Earth Guardian Award",
    url: "/blog/earth_guadrian_award",
    logo: Logo1,
  },
  {
    id: nanoid(),
    text: "Green Horizon Award",
    url: "/blog/green_horizon_award",
    logo: Logo2,
  },
  {
    id: nanoid(),
    text: "Nature's Beacon Award",
    url: "/blog/natures_beacon_award",
    logo: Logo3,
  },
];
