import React, { FC } from "react";
import { useState, useEffect } from "react";
import musiccover1 from "../../../../assets/wizkid.webp";
import asake from "../../../../assets/asake.jpeg";
import davido from "../../../../assets/davido.jpeg";
import style from "./HomeVideo.module.css";

const HomeVideo: FC = () => {
  return (
    <section>
      <div className={style.holdVideo}>
        <div className={style.LatestMusic}>
          <h4>Latest Video</h4>
        </div>
        <div className={style.holdBigCover}>
          <div className={style.holdImage}>
            <img src={musiccover1} alt="musiccover1" />
          </div>
          <div className={style.holdText}>
            <h1>
              Ethereal Embrace Step into a world of captivating melodies and
              mesmerizing visuals with the latest music video, "Ethereal
              Embrace." This artistic masterpiece blends soulful vocals with
              dreamlike instrumentation, taking viewers on an enchanting journey
              through the realms of love and imagination.
            </h1>
          </div>
        </div>

        <div className={style.holdSmallMusi}>
          <div className={style.holdAsake}>
            <div className={style.holdAsake2}>
              <img src={asake} alt="musiccover1" />
            </div>
            <div className={style.holdAsake3}>
              <h1>
                Ethereal Embrace Step into a world of captivating melodies
              </h1>
            </div>
          </div>

          <div className={style.holdAsake}>
            <div className={style.holdAsake2}>
              <img src={davido} alt="musiccover1" />
            </div>
            <div className={style.holdAsake3}>
              <h1>
                Ethereal Embrace Step into a world of captivating melodies
              </h1>
            </div>
          </div>

          <div className={style.holdAsake}>
            <div className={style.holdAsake2}>
              <img src={davido} alt="musiccover1" />
            </div>
            <div className={style.holdAsake3}>
              <h1>
                Ethereal Embrace Step into a world of captivating melodies
              </h1>
            </div>
          </div>

          <div className={style.holdAsake}>
            <div className={style.holdAsake2}>
              <img src={davido} alt="musiccover1" />
            </div>
            <div className={style.holdAsake3}>
              <h1>
                Ethereal Embrace Step into a world of captivating melodies
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
