import books from "../assets/img/books.jpg";
import office2 from "../assets/img/office2.jpg";
import tree from "../assets/img/tree.jpg";
import window from "../assets/img/window.jpg";
import { nanoid } from "nanoid";

export const imageCompanyList = [
  {
    id: nanoid(),
    url: books,
    alt: "books",
  },
  {
    id: nanoid(),
    url: office2,
    alt: "office2",
  },
  {
    id: nanoid(),
    url: tree,
    alt: "tree",
  },
  {
    id: nanoid(),
    url: window,
    alt: "window",
  },
];
