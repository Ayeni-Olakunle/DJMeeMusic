import { FC } from "react";
import asake from "../../../../assets/asake.jpeg";
import style from "./LatestSong.module.css";

const LatestSongs: FC = () => {
  return (
    <section>
      <h1 className={style.LatestSongs}>Latest Songs</h1>
      <div>
        <div className={style.holdSong}>
          <img src={asake} alt="Dj Mee" />
          <div className={style.SongDetails}>
            <div>
              <h1>Asake</h1>
              <p>Only at the top</p>
              <p>Featuring: Dj Mee</p>
            </div>

            <div className={style.holdDownload}>
              <button>Song Details</button>
              <a
                href="https://res.cloudinary.com/dl1pgb7kr/video/upload/v1691502806/Adekunle-Gold----Ogaranya-2_kuv3s1.mp3"
                download
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSongs;
