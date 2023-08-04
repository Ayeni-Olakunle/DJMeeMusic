import React, { FC } from "react";
import musiccover1 from "../../../../assets/musiccover1.jpeg";
import smallCover from "../../../../assets/smallCover.jpg";
import style from "./HomeMusic.module.css";

const HomeMusic: FC = () => {
  return (
    <section>
      <div className={style.holdBigCover}>
        <div className={style.holdImage}>
          <img src={musiccover1} alt="musiccover1" />
        </div>
        <div className={style.holdText}>
          <h1>Olamide Released a new song featuring Sunday Theophilous</h1>
          <p>Titl: God abeg ooo</p>
        </div>
      </div>

      <div className={style.LatestMusic}>
        <h4>Latest Music</h4>
      </div>

      <div className={style.holdSmallMusi}>
        <div className={style.holdSmallMusi1}>
          <div className={style.holdSmallMusi2}>
            <img
              src={smallCover}
              alt="smallCover"
              className={style.holdSmallMusi3}
            />
          </div>
          <div className={style.holdSmallMusi4}>
            <h5>Omay Lay</h5>
            <p>Reason</p>
          </div>
        </div>
        <div className={style.holdSmallMusi1}>
          <div className={style.holdSmallMusi2}>
            <img
              src={smallCover}
              alt="smallCover"
              className={style.holdSmallMusi3}
            />
          </div>
          <div className={style.holdSmallMusi4}>
            <h5>Omay Lay</h5>
            <p>Reason</p>
          </div>
        </div>
        <div className={style.holdSmallMusi1}>
          <div className={style.holdSmallMusi2}>
            <img
              src={smallCover}
              alt="smallCover"
              className={style.holdSmallMusi3}
            />
          </div>
          <div className={style.holdSmallMusi4}>
            <h5>Omay Lay</h5>
            <p>Reason</p>
          </div>
        </div>
        <div className={style.holdSmallMusi1}>
          <div className={style.holdSmallMusi2}>
            <img
              src={smallCover}
              alt="smallCover"
              className={style.holdSmallMusi3}
            />
          </div>
          <div className={style.holdSmallMusi4}>
            <h5>Omay Lay</h5>
            <p>Reason</p>
          </div>
        </div>
        <div className={style.holdSmallMusi1}>
          <div className={style.holdSmallMusi2}>
            <img
              src={smallCover}
              alt="smallCover"
              className={style.holdSmallMusi3}
            />
          </div>
          <div className={style.holdSmallMusi4}>
            <h5>Omay Lay</h5>
            <p>Reason</p>
          </div>
        </div>
        <div className={style.holdSmallMusi1}>
          <div className={style.holdSmallMusi2}>
            <img
              src={smallCover}
              alt="smallCover"
              className={style.holdSmallMusi3}
            />
          </div>
          <div className={style.holdSmallMusi4}>
            <h5>Omay Lay</h5>
            <p>Reason</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMusic;
