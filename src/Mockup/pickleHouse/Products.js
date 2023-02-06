import React from "react";
import PickleJar from "../reusableComponents/pickleJar";
import PickleBottle from "../Asserts/PickleBottle.png";
import Footer from "../reusableComponents/footer";
import Header from "../reusableComponents/header";

export default function Products() {
  return (
    <>
      <Header />
      <div>
        <h1>Products</h1>
        <div>
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Add Cart"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Add Cart"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Add Cart"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
