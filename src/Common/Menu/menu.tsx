import { FC } from "react";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";

const Menu: FC = () => {
  return (
    <header className={style.holdHeader}>
      <div className={style.holdLogo}>
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={style.holdList}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? style.activeNow : style.Notactive
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/music"}
            className={({ isActive }) =>
              isActive ? style.activeNow : style.Notactive
            }
          >
            Our Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/videos"}
            className={({ isActive }) =>
              isActive ? style.activeNow : style.Notactive
            }
          >
            Our Video
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? style.activeNow : style.Notactive
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? style.activeNow : style.Notactive
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? style.activeNow : style.Notactive
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
