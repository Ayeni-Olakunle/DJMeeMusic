import { FC } from "react";
import style from "./Layout3.module.css";
import HomeMusic from "./HomeMusic";
import HomeVideo from "./HomeVideo";
import HomeNew from "./HomeNew";

const Layout3: FC = () => {
  return (
    <section>
      <div>
        <HomeMusic />
      </div>
      <div>
        <HomeVideo />
      </div>
      <div>
        <HomeNew />
      </div>
    </section>
  );
};

export default Layout3;
