import { Route, Routes } from "react-router-dom";
import Confirmation from "../pages/Confirmation";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Reservation from "../pages/BookingPage";
import About from "../pages/About";

// ==============================|| ROUTING RENDER ||============================== //

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
