import { Link } from "react-router-dom";

const Nav = ({ data, lineColor = "white" }) => {
  return (
    <>
      <nav className="h-full w-full">
        <ul className="block justify-around text-lg font-semibold uppercase md:flex md:text-base md:font-normal md:capitalize">
          {data.map(({ id, text, url }) => (
            <li
              key={id}
              className="group mb-4 cursor-pointer overflow-hidden md:mb-0"
            >
              <Link className="block" to={url}>
                <span>{text}</span>
                <div
                  className={`hidden h-[0.1rem] w-full animate-animationRight group-hover:animate-animationLeft md:block`}
                  style={{ backgroundColor: lineColor }}
                ></div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
