import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralTitle from "./Components/GeneralTitle";
import CoursesDetail from "./layouts/CoursesDetail";
import Home from "./layouts/Home";
import English from "./layouts/English";
import CoursesShop from "./layouts/CoursesShop";
import Checkout from "./layouts/Checkout";
import Cart from "./layouts/Cart";
import Category from "./layouts/Category";
import NavbarChakra from "./Components/Navbar/NavbarChakra";

function App() {
  return (
    <BrowserRouter>
      <NavbarChakra />
      <GeneralTitle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/english" element={<English />} />
        <Route exact path="/coursesShop" element={<CoursesShop />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:category" element={<Category />} />

        <Route
          exact
          path="/coursesShop/:muebleDetail"
          element={<CoursesDetail />}
        />

        <Route
          path="*"
          element={
            <h2>¡Lo sentimos! No pudimos encontrar lo que estás buscando.</h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
