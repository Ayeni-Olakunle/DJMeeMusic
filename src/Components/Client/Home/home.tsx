import { FC } from "react";
import Layout1 from "./Layouts/Layout1";
import Layout2 from "./Layouts/Layout2";
// import style from "./home.module.css";

const HomeSub: FC = () => {
  return (
    <section>
      <Layout1 />
      <Layout2 />
    </section>
  );
};

export default HomeSub;
