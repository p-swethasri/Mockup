import React from "react";
import Header from "../reusableComponents/header";
import Footer from "../reusableComponents/footer";
import "./cart.css";
export default function Cart() {
  return (
    <>
      <Header />
      <div>
        <h1>Cart</h1>
        <div className="table">
          <table>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
            <tr>
              <td>Image</td>
              <td>$14.00USD</td>
              <td>3</td>
              <td>$42.00USD</td>
            </tr>
            <tr>
              <td>Image</td>
              <td>$28.00USD</td>
              <td>3</td>
              <td>$28.00USD</td>
            </tr>
            <tr>
              <td>Image</td>
              <td>$26.00USD</td>
              <td>3</td>
              <td>$26.00USD</td>
            </tr>
          </table>
        </div>
        <div>
          <p>$96.00USD</p>
          <p>Taxes and Shipping not included</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
