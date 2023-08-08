import { FC } from "react";
import Latest from "../../../../Common/Latest/Latest";
// import Layout1 from "../Home/Layouts/Layout1";
// import Layout2 from "../Home/Layouts/Layout2";
import LatestSongs from "../LatestSongs/LatestSong";
import style from "./Music.module.css";

const MusicSub: FC = () => {
  return (
    <section className={style.holdAll}>
      <div className={style.holdAllSec}>
        <div className={style.holdLay3}>
          <LatestSongs />
        </div>
        <div className={style.holdLay4}>
          <Latest />
        </div>
      </div>
    </section>
  );
};

export default MusicSub;
