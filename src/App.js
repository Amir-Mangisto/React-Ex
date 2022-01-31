import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Order from "./Components/Orders/Order";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import AppRouter from "./App-Router";
function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}


      {/* <BrowserRouter> 
    <Link to='/'><button>Home</button></Link>
    <Link to="/Order"><button>Order</button></Link>
    <Link to="/Menu"><button>Menu</button></Link>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Order" element={<Order />} />
          <Route exact path="/Menu" element={<Menu />} />   
        </Routes>
      </BrowserRouter> */}



      <AppRouter/>
    </div>
  );
}

export default App;
