import React, { FC } from "react";
import { useState, useEffect } from "react";
import hero1 from "../../../assets/djhero1-min.jpg";
import hero2 from "../../../assets/djhero2-min.jpg";
import hero3 from "../../../assets/djhero3-min.jpg";
import hero4 from "../../../assets/djhero4-min.jpg";
import hero5 from "../../../assets/djhero5-min.jpg";
import style from "./home.module.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const HomeSub: FC = () => {
  const [count, setCount] = useState<number>(0);

  const arrowBack = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(4);
    }
  };

  const arrowForward = () => {
    setCount(count + 1);
    if (count === 4) {
      setCount(0);
    }
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCount(count + 1);
      if (count === 4) {
        setCount(0);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <section>
      <div>
        <span className={style.backArrow} onClick={arrowBack}>
          <MdOutlineArrowBackIosNew />
        </span>

        {count === 0 ? (
          <div className={style.fade}>
            <div className={style.holdText}>
              <h1>
                Get ready to dance all night long
                <br /> with beats that will ignite your soul.
              </h1>
              <p>
                Get ready to embark on an electrifying journey of music that
                will ignite your soul and set the dance floor ablaze! Our DJ
                Mee's curated beats will infuse your night with infectious
                rhythms, ensuring you never want to leave the dance floor
              </p>
              <div className={style.holdButton}>
                <button className={style.HireMe}>Hire Me</button>
                <button className={style.bookNow}>Book Now</button>
              </div>
            </div>
            <div className={style.holdImage}>
              <img src={hero1} alt="hero1" loading="lazy" />
            </div>
          </div>
        ) : null}

        {count === 1 ? (
          <div className={style.fade}>
            <div className={style.holdText}>
              <h1>
                Let the "MeeMusic" take control and
                <br /> elevate your party to a whole new level.
              </h1>
              <p>
                Unleash the power of "MeeMusic" and experience a party like
                never before! Our cutting-edge DJ services will take control of
                the beats, transforming your event into an electrifying
                celebration that transcends all expectations. Get ready to
                elevate your party to a whole new level as our expert DJs curate
                an unforgettable playlist, perfectly tailored to your taste and
                vibe.
              </p>
              <div className={style.holdButton}>
                <button className={style.HireMe}>Hire Me</button>
                <button className={style.bookNow}>Book Now</button>
              </div>
            </div>

            <div>
              <div className={style.holdImage}>
                <img src={hero2} alt="hero1" />
              </div>
            </div>
          </div>
        ) : null}

        {count === 2 ? (
          <div className={style.fade}>
            <div className={style.holdText}>
              <h1>
                "Feel the energy, embrace the sound, and surrender <br /> to the
                rhythm of the night." I'mNotUrRegularDj"
              </h1>
              <p>
                So, get ready to let go of inhibitions, immerse yourself in the
                music, and embrace the dance floor like never before. Allow
                "I'mNotUrRegularDj" to take you on a ride through euphoria,
                where the night comes alive with a symphony of emotions and
                melodies.
              </p>
              <div className={style.holdButton}>
                <button className={style.HireMe}>Hire Me</button>
                <button className={style.bookNow}>Book Now</button>
              </div>
            </div>
            <div>
              <div className={style.holdImage}>
                <img src={hero3} alt="hero1" />
              </div>
            </div>
          </div>
        ) : null}

        {count === 3 ? (
          <div className={style.fade}>
            <div className={style.holdText}>
              <h1>
                "Turn up the volume, let loose, and <br /> create memories that
                will last a lifetime."
              </h1>
              <p>
                With pulsating beats and infectious rhythms, we'll transport you
                to a world where worries fade away and the dance floor becomes
                your sanctuary. Whether it's a private gathering, a milestone
                celebration, or a grand party, our mission is to curate the
                perfect soundtrack for your special occasion.
              </p>
              <div className={style.holdButton}>
                <button className={style.HireMe}>Hire Me</button>
                <button className={style.bookNow}>Book Now</button>
              </div>
            </div>
            <div>
              <div className={style.holdImage}>
                <img src={hero4} alt="hero1" />
              </div>
            </div>
          </div>
        ) : null}

        {count === 4 ? (
          <div className={style.slide}>
            <div className={style.holdText}>
              <h1>
                "Join the ultimate sonic revolution and let the DJ guide you
                <br />
                to the dancefloor of your dreams.
              </h1>
              <p>
                With pulsating beats and infectious rhythms, we'll transport you
                to a world where worries fade away and the dance floor becomes
                your sanctuary. Whether it's a private gathering, a milestone
                celebration, or a grand party, our mission is to curate the
                perfect soundtrack for your special occasion.
              </p>
              <div className={style.holdButton}>
                <button className={style.HireMe}>Hire Me</button>
                <button className={style.bookNow}>Book Now</button>
              </div>
            </div>
            <div className={style.slide}>
              <div className={style.holdImage}>
                <img src={hero5} alt="hero5" />
              </div>
            </div>
          </div>
        ) : null}

        <span className={style.arrowForward} onClick={arrowForward}>
          <MdOutlineArrowForwardIos />
        </span>
      </div>
    </section>
  );
};

export default HomeSub;
