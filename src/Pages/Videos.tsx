import { FC } from "react";
import Menu from "../Common/Menu/menu";
import Footer from "../Common/Footer/footer";

const Videos: FC = () => {
  return (
    <section>
      <div style={{ padding: "20px 0", backgroundColor: "black" }}>
        <Menu />
      </div>
      <h1>Videos</h1>
      <Footer />
    </section>
  );
};

export default Videos;
