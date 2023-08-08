import { FC } from "react";
import Menu from "../Common/Menu/menu";
import MusicSub from "../Components/Client/Music/MusicLatest1/Music";
import Footer from "../Common/Footer/footer";

const Music: FC = () => {
  return (
    <section>
      <div style={{ padding: "20px 0", backgroundColor: "black" }}>
        <Menu />
      </div>
      <MusicSub />
      <Footer />
    </section>
  );
};

export default Music;
