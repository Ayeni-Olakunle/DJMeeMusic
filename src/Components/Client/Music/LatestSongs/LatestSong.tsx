import { FC, useState, useEffect } from "react";
import asake from "../../../../assets/asake.jpeg";
import style from "./LatestSong.module.css";
import axios from "axios";
// import {} from "cloudinary-react";

const LatestSongs: FC = () => {
  const [data, setData] = useState<string[]>([]);
  const getMusic = () => {
    axios
      .get("https://kind-plum-whale-toga.cyclic.cloud/api/music")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((err) => {
        alert("Opps sometimes went wrong");
      });
  };

  useEffect(() => {
    getMusic();
  }, []);
  return (
    <section>
      <h1 className={style.LatestSongs}>Latest Songs</h1>
      <div>
        {data.map((item, index) => {
          return (
            <div className={style.holdSong} key={index}>
              <img src={asake} alt="Dj Mee" />
              <div className={style.SongDetails}>
                <div>
                  <h1>{item.articsName}</h1>
                  <p>{item.musicTitle}</p>
                  <p>Featuring: {item.featuredArtisc}</p>
                </div>

                <div className={style.holdDownload}>
                  <button>Song Details</button>
                  <a href={item.musicLink} download>
                    Download
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
// "https://drive.google.com/file/d/1mCexXGS3luhOaKk25KPhihu-NA5_INwi/view?usp=drive_link"
export default LatestSongs;
