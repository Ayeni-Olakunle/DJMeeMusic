import React, { useState, FC } from "react";
import Layout1Style from "./MakeEnquiry.module.scss";
import axios from "axios";
import env from "react-dotenv";

const MakeEnquiry: FC = () => {
  const [musicTitle, setMsicTitle] = useState<string>("");
  const [musicLink, setMusicLink] = useState<string>("");
  const [articsName, setArticsName] = useState<string>("");
  const [featuredArtisc, setFeaturedArtisc] = useState<string>("");
  const [releasedYear, setReleasedYear] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [songDeails1, setSongDeails1] = useState<string>("");
  const [songDeails2, setSongDeails2] = useState<string>("");
  const [songDeails3, setSongDeails3] = useState<string>("");
  const [songDeails4, setSongDeails4] = useState<string>("");
  const [songDeails5, setSongDeails5] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("working");

    const data = {
      musicTitle,
      musicLink,
      articsName,
      featuredArtisc,
      releasedYear,
      category,
      youtubeLink,
      songDeails1,
      songDeails2,
      songDeails3,
      songDeails4,
      songDeails5,
    };

    const options = {
      url: `https://kind-plum-whale-toga.cyclic.cloud/api/music`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: data,
    };

    axios(options)
      .then((response) => {
        setMsicTitle("");
        setMusicLink("");
        setArticsName("");
        setFeaturedArtisc("");
        setReleasedYear("");
        setCategory("");
        setYoutubeLink("");
        setSongDeails1("");
        setSongDeails2("");
        setSongDeails3("");
        setSongDeails4("");
        setSongDeails5("");
        console.log(response);
        alert("Success!");
      })
      .catch((err) => {
        console.log(err);
        alert("Opps Something went wrong!");
      });
  };

  return (
    <div className={Layout1Style.holdAll}>
      <div className={Layout1Style.holdAll2}>
        <h4 className={Layout1Style.textHead}>Upload Song</h4>
        <div>
          <form className={Layout1Style.holdForm} onSubmit={handleSubmit}>
            <div className={Layout1Style.holdDiv1}>
              <div className={Layout1Style.holInput}>
                <label htmlFor="musicTitle">Music Title</label>
                <br />
                <input
                  type="text"
                  placeholder="Music Title"
                  value={musicTitle}
                  onChange={(e) => setMsicTitle(e.target.value)}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="musicLink">Music Link</label>
                <br />
                <input
                  type="text"
                  placeholder="Music Link"
                  value={musicLink}
                  onChange={(e) => setMusicLink(e.target.value)}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="articsName">Artics Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Artics Name"
                  id="articsName"
                  value={articsName}
                  onChange={(e) => setArticsName(e.target.value)}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="releasedYear">Released Year</label>
                <br />
                <input
                  type="text"
                  placeholder="Released Year"
                  id="releasedYear"
                  value={releasedYear}
                  onChange={(e) => setReleasedYear(e.target.value)}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="youtubeLink">YouTube Link</label>
                <br />
                <input
                  type="text"
                  placeholder="YouTube Link"
                  id="youtubeLink"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="featuredArtisc">Featured Artisc</label>
                <br />
                <input
                  type="text"
                  placeholder="Featured Artisc"
                  id="featuredArtisc"
                  value={featuredArtisc}
                  onChange={(e) => setFeaturedArtisc(e.target.value)}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="Hip Pop">Hip Pop</option>
                  <option value="R&B">R&B</option>
                  <option value="Gosple">Gosple</option>
                  <option value="Fuji">Fuji</option>
                  <option value="Apala">Apala</option>
                  <option value="Afro">Afro</option>
                  <option value="Amapiano">Amapiano</option>
                </select>
              </div>
            </div>

            <div className={Layout1Style.holdDiv1}>
              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails1">Song Deails 1</label>
                <br />
                <textarea
                  placeholder="Song Deails 1"
                  id="songDeails1"
                  value={songDeails1}
                  onChange={(e) => setSongDeails1(e.target.value)}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails2">Song Deails 2</label>
                <br />
                <textarea
                  placeholder="Song Deails 2"
                  id="songDeails2"
                  value={songDeails2}
                  onChange={(e) => setSongDeails2(e.target.value)}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails3">Song Deails 3</label>
                <br />
                <textarea
                  placeholder="Song Deails 3"
                  id="songDeails3"
                  value={songDeails3}
                  onChange={(e) => setSongDeails3(e.target.value)}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails4">Song Deails 4</label>
                <br />
                <textarea
                  placeholder="Song Deails 4"
                  id="songDeails4"
                  value={songDeails4}
                  onChange={(e) => setSongDeails4(e.target.value)}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails1">Song Deails 5</label>
                <br />
                <textarea
                  placeholder="Song Deails 5"
                  id="songDeails5"
                  value={songDeails5}
                  onChange={(e) => setSongDeails5(e.target.value)}
                />
              </div>

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeEnquiry;
