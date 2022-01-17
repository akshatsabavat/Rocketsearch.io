import "./Home.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Routes from "../../components/Routes";
import { useState } from "react";

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
