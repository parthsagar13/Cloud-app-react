import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Checkout from "../Checkout/Checkout";
import ProductCount from "../Product/ProductCount";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:id"
          element={
            <>
              <Product />
              <ProductCount />
            </>
          }
        />
        <Route
          path="/checkout/address/:id"
          element={
            <>
              <Address />
            </>
          }
        />
        <Route
          path="/checkout/payment/:id"
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
    </>
  );
}
