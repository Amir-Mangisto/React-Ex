import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Order from "./Components/Orders/Order";
import Menu from "./Components/Menu/Menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
  
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Order" element={<Order />} />
          <Route exact path="/Menu" element={<Menu />} />
        </Routes>

        <Footer />
      </BrowserRouter>
  );
};

export default AppRouter;
