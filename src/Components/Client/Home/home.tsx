import React, { FC } from "react";
import hero1 from "../../../assets/djhero1-min.jpg";
import style from "./home.module.css";

const HomeSub: FC = () => {
  return (
    <section>
      <div>
        <div className={style.holdText}>
          <h1>
            Get ready to dance all night long
            <br /> with beats that will ignite your soul.
          </h1>
          <p>
            Get ready to embark on an electrifying journey of music that will
            ignite your soul and set the dance floor ablaze! Our DJ Mee's
            curated beats will infuse your night with infectious rhythms,
            ensuring you never want to leave the dance floor
          </p>
          <div className={style.holdButton}>
            <button className={style.HireMe}>Hire Me</button>
            <button className={style.bookNow}>Book Now</button>
          </div>
        </div>
        <div className={style.holdImage}>
          <img src={hero1} alt="hero1" />
        </div>
      </div>
    </section>
  );
};

export default HomeSub;
