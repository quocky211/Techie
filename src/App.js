import "./App.css";
import Header from "./Components/HeaderFolder/Header";
import Footer from "./Components/FooterFolder/Footer";
import { Outlet } from "react-router-dom";
// import Contact from './Components/Contact'
///
function App() {
  return (
    <div className="App">
      <Header />
	  <Outlet/>
      <Footer />
    </div>
  );
}
export default App;
