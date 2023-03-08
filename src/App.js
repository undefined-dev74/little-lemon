import React from "react";
import "./App.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Routing from "./routes/Routing";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
