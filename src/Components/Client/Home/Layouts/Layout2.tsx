import { FC } from "react";
import style from "./Layout2.module.css";
import Layout3 from "./Layout3";
import Latest from "../../../../Common/Latest/Latest";

const Layout2: FC = () => {
  return (
    <section className={style.holdAll}>
      <div className={style.holdAllSec}>
        <div className={style.holdLay3}>
          <Layout3 />
        </div>
        <div className={style.holdLay4}>
          <Latest />
        </div>
      </div>
    </section>
  );
};

export default Layout2;
