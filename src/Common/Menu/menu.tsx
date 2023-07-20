import { FC } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import style from "./menu.module.css";

const Menu: FC = () => {
  return (
    <header className={style.holdHeader}>
      <div className={style.holdLogo}>
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={style.holdList}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Gallery</Link>
        </li>
        <li>
          <Link to={"/"}>Our Music</Link>
        </li>
        <li>
          <Link to={"/"}>Blog</Link>
        </li>
        <li>
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"/"}>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
