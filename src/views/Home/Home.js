import "./Home.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Routes from "../../components/Routes";
import { useState } from "react";

export default function Home() {
  const [themeDark, setthemeDark] = useState(false);
  return (
    <div>
      <p>initial layout</p>
    </div>
  );
}
