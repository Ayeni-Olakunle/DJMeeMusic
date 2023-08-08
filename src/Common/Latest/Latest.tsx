import { FC } from "react";
import style from "./Latest.module.css";
import cover1 from "../../assets/trend1.jpeg";
import cover2 from "../../assets/cover2.jpeg";

const Latest: FC = () => {
  return (
    <section>
      <div className={style.holdAll}>
        <div className={style.holdAll2}>
          <div className={style.holdAll2P}>
            <h3 className={style.hotest}>Latest Music</h3>

            <div className={style.holdPost}>
              <div className={style.holdPost2}>
                <img src={cover1} alt="cover1" className={style.holdcover1} />
                <h1 className={style.holdName}>DjMee Music</h1>
                <p className={style.Title}>Orenta</p>
              </div>
            </div>

            <div className={style.holdMusicList}>
              <div className={style.musicList1}>
                <h4>Cough</h4>
                <p>Kizz Daniel & Becky G</p>
              </div>
              <div className={style.musicList1}>
                <h4>Cough</h4>
                <p>Kizz Daniel & Becky G</p>
              </div>
              <div className={style.musicList1}>
                <h4>Cough</h4>
                <p>Kizz Daniel & Becky G</p>
              </div>
              <div className={style.musicList1}>
                <h4>Cough</h4>
                <p>Kizz Daniel & Becky G</p>
              </div>
              <div className={style.musicList1}>
                <h4>Cough</h4>
                <p>Kizz Daniel & Becky G</p>
              </div>
              <div className={style.musicList1}>
                <h4>Cough</h4>
                <p>Kizz Daniel & Becky G</p>
              </div>
              <div className={style.musicList1}>
                <p className={style.more}>More...</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.holdAll2} style={{ marginTop: "50px" }}>
          <div className={style.holdAll2P}>
            <h3 className={style.hotest}>Latest Videos</h3>

            <div className={style.holdPost}>
              <div className={style.holdPost2}>
                <img src={cover2} alt="cover1" className={style.holdcover1} />
                <h1 className={style.holdName}>DjMee Music</h1>
                <p className={style.Title}>Orenta</p>
              </div>
            </div>

            <div className={style.holdMusicList}>
              <div className={style.musicList1}>
                <h4>
                  Idahams, Eltee Skhillz & DanDizzy - Wetin No Good (Remix)
                </h4>
              </div>
              <div className={style.musicList1}>
                <h4>King Promise - Terminator (feat. Young Jonn)</h4>
              </div>
              <div className={style.musicList1}>
                <h4>All the Queen's Men</h4>
              </div>
              <div className={style.musicList1}>
                <h4>Warrior</h4>
              </div>
              <div className={style.musicList1}>
                <h4>Stephen Curry: Underrated (2023)</h4>
              </div>
              <div className={style.musicList1}>
                <h4>Stephen Curry: Underrated (2023)</h4>
              </div>
              <div className={style.musicList1}>
                <p className={style.more}>More...</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.holdAll2} style={{ marginTop: "50px" }}>
          <div className={style.holdAll2P}>
            <h3 className={style.hotest}>Latest News</h3>

            <div className={style.holdPost}>
              <div className={style.holdPost2}>
                <img src={cover2} alt="cover1" className={style.holdcover1} />
                <h1 className={style.holdName}>DjMee Music</h1>
                <p className={style.Title}>Orenta</p>
              </div>
            </div>

            <div className={style.holdMusicList}>
              <div className={style.musicList1}>
                <h4>
                  Idahams, Eltee Skhillz & DanDizzy - Wetin No Good (Remix)
                </h4>
              </div>
              <div className={style.musicList1}>
                <h4>King Promise - Terminator (feat. Young Jonn)</h4>
              </div>
              <div className={style.musicList1}>
                <h4>All the Queen's Men</h4>
              </div>
              <div className={style.musicList1}>
                <h4>Warrior</h4>
              </div>
              <div className={style.musicList1}>
                <h4>Stephen Curry: Underrated (2023)</h4>
              </div>
              <div className={style.musicList1}>
                <h4>Stephen Curry: Underrated (2023)</h4>
              </div>
              <div className={style.musicList1}>
                <p className={style.more}>More...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
