import React, { useState, FC, ChangeEvent, FormEvent } from "react";
import Layout1Style from "./DjMix.module.scss";
import axios from "axios";
import env from "react-dotenv";

interface FormData {
  image: File | null;
  mixTitle: string;
  djmixLink: string;
  djName: string;
  featuredArtisc: string;
  releasedYear: string;
  youtubeLink: string;
  songDeails1: string;
  songDeails2: string;
  songDeails3: string;
  songDeails4: string;
  songDeails5: string;
}

const DjMix: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    image: null,
    mixTitle: "",
    djmixLink: "",
    djName: "",
    featuredArtisc: "",
    releasedYear: "",
    youtubeLink: "",
    songDeails1: "",
    songDeails2: "",
    songDeails3: "",
    songDeails4: "",
    songDeails5: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFormData({ ...formData, image: file || null });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("images", formData.image as File);
    formDataToSend.append("mixTitle", formData.mixTitle);
    formDataToSend.append("djmixLink", formData.djmixLink);
    formDataToSend.append("djName", formData.djName);
    formDataToSend.append("featuredArtisc", formData.featuredArtisc);
    formDataToSend.append("releasedYear", formData.releasedYear);
    formDataToSend.append("youtubeLink", formData.youtubeLink);
    formDataToSend.append("songDeails1", formData.songDeails1);
    formDataToSend.append("songDeails2", formData.songDeails2);
    formDataToSend.append("songDeails3", formData.songDeails3);
    formDataToSend.append("songDeails4", formData.songDeails4);
    formDataToSend.append("songDeails5", formData.songDeails5);

    console.log(formDataToSend);

    const options = {
      url: `https://kind-plum-whale-toga.cyclic.cloud/api/djmix`,
      method: "POST",
      data: formDataToSend,
    };

    axios(options)
      .then((response) => {
        setFormData({
          image: null,
          mixTitle: "",
          djmixLink: "",
          djName: "",
          featuredArtisc: "",
          releasedYear: "",
          youtubeLink: "",
          songDeails1: "",
          songDeails2: "",
          songDeails3: "",
          songDeails4: "",
          songDeails5: "",
        });
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
        <h4 className={Layout1Style.textHead}>Upload Dj Mix</h4>
        <div>
          <form className={Layout1Style.holdForm} onSubmit={handleSubmit}>
            <div className={Layout1Style.holdDiv1}>
              <div className={Layout1Style.holInput}>
                <label htmlFor="musicTitle">Mix Title</label>
                <br />
                <input
                  type="text"
                  placeholder="Mix Title"
                  id="mixTitle"
                  name="mixTitle"
                  value={formData.mixTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="musicLink">Dj Mix Link</label>
                <br />
                <input
                  type="text"
                  placeholder="Dj Mix Link"
                  name="djmixLink"
                  value={formData.djmixLink}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="articsName">Dj Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Dj Name"
                  id="djName"
                  name="djName"
                  value={formData.djName}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="releasedYear">Released Year</label>
                <br />
                <input
                  type="text"
                  placeholder="Released Year"
                  id="releasedYear"
                  name="releasedYear"
                  value={formData.releasedYear}
                  onChange={handleInputChange}
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
                  name="youtubeLink"
                  value={formData.youtubeLink}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="featuredArtisc">Featured Artisc</label>
                <br />
                <input
                  type="text"
                  placeholder="Featured Artisc"
                  id="featuredArtisc"
                  name="featuredArtisc"
                  value={formData.featuredArtisc}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="featuredArtisc">Add Image Link</label>
                <br />
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
            </div>

            <div className={Layout1Style.holdDiv1}>
              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails1">Song Deails 1</label>
                <br />
                <textarea
                  placeholder="Song Deails 1"
                  id="songDeails1"
                  name="songDeails1"
                  value={formData.songDeails1}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails2">Song Deails 2</label>
                <br />
                <textarea
                  placeholder="Song Deails 2"
                  id="songDeails2"
                  name="songDeails2"
                  value={formData.songDeails2}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails3">Song Deails 3</label>
                <br />
                <textarea
                  placeholder="Song Deails 3"
                  id="songDeails3"
                  name="songDeails3"
                  value={formData.songDeails3}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails4">Song Deails 4</label>
                <br />
                <textarea
                  placeholder="Song Deails 4"
                  id="songDeails4"
                  name="songDeails4"
                  value={formData.songDeails4}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="songDeails1">Song Deails 5</label>
                <br />
                <textarea
                  placeholder="Song Deails 5"
                  id="songDeails5"
                  name="songDeails5"
                  value={formData.songDeails5}
                  onChange={handleInputChange}
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

export default DjMix;
