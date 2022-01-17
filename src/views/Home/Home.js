import "./Home.scss";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Routes from "../../components/Routes/Routes";

export default function Home() {
  const [themeDark, setthemeDark] = useState(false);
  return (
    <div className="AppPage">
      <div className="AppPage_Contents">
        <Navbar />
        <Footer />
        <Routes />
      </div>
    </div>
  );
}
