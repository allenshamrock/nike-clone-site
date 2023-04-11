import NavBar from "./components/NavBar";
import AfterNavBar from "./components/AfterNavBar";
import Home from "./components/Home";
import FeaturedStyles from "./components/FeaturedStyles";
import Trending from "./components/Trending";
import LetsGo from "./components/LetsGo";
import NewArrival from "./components/NewArrival";
import Membership from "./components/Membership";
import AfterMembership from "./components/AfterMembership";
import BeforeFooter from "./components/BeforeFooter";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AfterNavBar />
      <Home />
      <FeaturedStyles />
       <Trending />
       <LetsGo />
      <NewArrival />
       <Membership />
      <AfterMembership/>
      <BeforeFooter />
      <Footer />       
    </div>
  );
}

export default App;
