import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes";
import SearchNavigator from "./components/SearchNavigator/SearchNavigator";

const App = () => {
  return (
    <div className="AppPage">
      <div className="AppPage__AppContent">
        <Navbar />
        <SearchNavigator />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
