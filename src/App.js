import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Qwindow from "./components/Qwindow";

function App() {
  return (
    <div className="container-fluid test">
      <div className="row"> <Header /> </div>
      <div className="row"> <Qwindow /> </div>
      <div className="row"> <Footer /> </div>
    </div>
  );
}

export default App;
