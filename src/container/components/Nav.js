import { Link } from "react-router-dom";

const Nav = ({ data, lineColor = "white" }) => {
  return (
    <>
      <nav className="h-full w-full">
        <ul className="block justify-around text-lg font-semibold uppercase lg:flex lg:text-base lg:font-normal lg:capitalize">
          {data.map(({ id, text, url }) => (
            <li className="group mb-4 cursor-pointer overflow-hidden lg:mb-0">
              <Link className="block" to={url} key={id}>
                <span>{text}</span>
                <div
                  className={`hidden h-[0.1rem] w-full animate-animationRight group-hover:animate-animationLeft lg:block`}
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
