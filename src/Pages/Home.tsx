import { FC } from "react";
import Menu from "../Common/Menu/menu";
import HomeSub from "../Components/Client/Home/home";
import Footer from "../Common/Footer/footer";

const Home: FC = () => {
  return (
    <section>
      <Menu />
      <HomeSub />
      <Footer />
    </section>
  );
};

export default Home;
