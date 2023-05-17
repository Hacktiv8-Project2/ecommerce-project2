import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import CartPages from "./pages/CartPages";
import HomePages from "./pages/HomePages";
import LoginPages from "./pages/LoginPages";
import Logout from "./pages/LogoutPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/cart" element={<CartPages />}></Route>
        <Route path="/login" element={<LoginPages />}></Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
