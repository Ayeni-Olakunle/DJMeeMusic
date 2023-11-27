import React, { useState, FC, ChangeEvent, FormEvent } from "react";
import Layout1Style from "./News.module.scss";
import axios from "axios";
import env from "react-dotenv";

interface FormData {
  image: File | null;
  postBy: string;
  author: string;
  title: string;
  description: string;
  content: string;
}

const LatestNews: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    image: null,
    postBy: "",
    author: "",
    title: "",
    description: "",
    content: "",
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
    formDataToSend.append("postBy", formData.postBy);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);

    // console.log(formData);

    const options = {
      url: `https://kind-plum-whale-toga.cyclic.cloud/api/news`,
      method: "POST",
      data: formDataToSend,
    };

    axios(options)
      .then((response) => {
        setFormData({
          image: null,
          postBy: "",
          author: "",
          title: "",
          description: "",
          content: "",
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
        <h4 className={Layout1Style.textHead}>Upload Latest News</h4>
        <div>
          <form className={Layout1Style.holdForm} onSubmit={handleSubmit}>
            <div className={Layout1Style.holdDiv1}>
              <div className={Layout1Style.holInput}>
                <label htmlFor="musicTitle">Post By</label>
                <br />
                <input
                  type="text"
                  placeholder="Post By"
                  id="postBy"
                  name="postBy"
                  value={formData.postBy}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="musicLink">New Author</label>
                <br />
                <input
                  type="text"
                  placeholder="New Author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="articsName">Title</label>
                <br />
                <input
                  type="text"
                  placeholder="Title"
                  id="articsName"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="featuredArtisc">Description</label>
                <br />
                <textarea
                  placeholder="Description"
                  id="featuredArtisc"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className={Layout1Style.holInput}>
                <label htmlFor="releasedYear">Content</label>
                <br />
                <textarea
                  placeholder="Content"
                  id="releasedYear"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
