import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes";

const App = () => {
  return (
    <div className="AppPage">
      <div className="AppPage__AppContent">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
