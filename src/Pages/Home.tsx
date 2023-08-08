import { FC } from "react";
import Menu from "../Common/Menu/menu";
import HomeSub from "../Components/Client/Home/home";
import Footer from "../Common/Footer/footer";

const Home: FC = () => {
  return (
    <section>
      <div
        style={{
          position: "absolute",
          zIndex: "5",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Menu />
      </div>
      <HomeSub />
      <Footer />
    </section>
  );
};

export default Home;
