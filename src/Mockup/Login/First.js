import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./signupPage";
import CreateAccount from "./createAccount";
import PickleHouse from "../pickleHouse/pickleHouse";
import Products from "../pickleHouse/Products";
import Cart from "../Cart/Cart";

export default function Rout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/signupPage" element={<Signup />} />
          <Route path="/pickleHouse/pickleHouse" element={<PickleHouse />} />
          <Route path="/pickleHouse/Products" element={<Products />} />
          <Route path="/Cart/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
