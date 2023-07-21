import { FC } from "react";
import style from "./Layout2.module.css";
import Layout3 from "./Layout3";
import Layout4 from "./Layout4";

const Layout2: FC = () => {
  return (
    <section className={style.holdAll}>
      <div className={style.holdAllSec}>
        <div className={style.holdLay3}>
          <Layout3 />
        </div>
        <div className={style.holdLay4}>
          <Layout4 />
        </div>
      </div>
    </section>
  );
};

export default Layout2;
