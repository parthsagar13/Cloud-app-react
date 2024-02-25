import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Footer from "../Footer/Footer";
import Checkout from "../Checkout/Checkout";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/checkout/cart"
          element={
            <>
              <Checkout />
              <Cart />
            </>
          }
        />
        <Route
          path="/checkout/address"
          element={
            <>
              <Checkout />
              <Address />
            </>
          }
        />
        <Route
          path="/checkout/payment"
          element={
            <>
              <Checkout />
              <Payment />
            </>
          }
        />
        <Route
          path="/checkout/summary"
          element={
            <>
              <Checkout />
              <Summary />
            </>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
