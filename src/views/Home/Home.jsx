import "./Home.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Routes from "../../components/Routes";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Routes />
    </div>
  );
}
