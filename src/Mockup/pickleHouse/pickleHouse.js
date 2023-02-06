import React from "react";
import "./pickleHouse.css";
import MainBanner1 from "../Asserts/MainBanner1.png";
import PickleBottle from "../Asserts/PickleBottle.png";
import PickleJar from "../reusableComponents/pickleJar";
import Text from "../reusableComponents/text";
import Card from "../reusableComponents/card";
import Footer from "../reusableComponents/footer";
import Header from "../reusableComponents/header";

export default function PickleHouse() {
  return (
    <>
      <Header />
      <div className="backstyle">
        <img src={MainBanner1} alt="main banner" className="img" />
      </div>
      <div className="backstyle">
        <div>
          <h1 className="tproduct">Top Products</h1>
          <hr className="hrstyle" />
        </div>
        <div style={{ display: "flex" }}>
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
        </div>
      </div>
      <div className="tophead2">
        <div className="content">
          <div className="text">
            <Text
              numb="1."
              heading="Home Delivery"
              dummy=" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
            />
            <Text
              numb="3."
              heading="High Quality"
              dummy=" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
            />
          </div>
          <div className="text">
            <Text
              numb="2."
              heading="Order Your Favorite"
              dummy=" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
            />
            <Text
              numb="4."
              heading="Buy With Love"
              dummy=" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content."
            />
          </div>
        </div>
        <div className="imgbox">
          <p className="specialoffer">SPECIAL OFFERS</p>
          <hr className="hrstyle" />
          <div className="hexa">
            <p className="hexapara">13%</p>
          </div>
          <img src={PickleBottle} alt="Mango Pickle" />
          <h3>Mango Pickle</h3>
          <p className="picklepara">
            <del className="pickleparad">150.00</del>
            120.00
          </p>
        </div>
      </div>
      <div className="picklediv">
        <p className="pickles">PICKLES</p>
        <div className="cardbottle">
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
        </div>
        <div className="cardbottle">
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
        </div>
      </div>
      <div className="twoimagesdiv">
        <div style={{ width: "50%", margin: "15px" }}>
          <div className="firstimg">
            <div className="newarrivals">New Arrivals of Pickles</div>
            <button className="newbutton">VIEW MORE</button>
          </div>
        </div>
        <div style={{ width: "50%", margin: "15px" }}>
          <div className="secondimg">
            <div className="newarrivals">New Arrivals of Powders</div>
            <button className="newbutton">VIEW MORE</button>
          </div>
        </div>
      </div>
      <div>
        <p className="pickles">POWDERS</p>
      </div>
      <div style={{ textAlign: "-webkit-right" }}>
        <div className="rectangle2">
          <div className="recdiv">NON-VEG</div>
          <div className="recdiv1">VEG</div>
        </div>
      </div>

      <div>
        <div className="cardbottle">
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
        </div>
        <div className="cardbottle">
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
          <Card
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            amount="150.00"
            btnname="Select Options"
          />
        </div>
      </div>
      <div className="backstyle2">
        <div style={{ paddingTop: "50px" }}>
          <h1 className="tproduct">Recently Viewed</h1>
          <hr className="hrstyle" />
        </div>
        <div style={{ display: "flex" }}>
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
          <PickleJar
            img={PickleBottle}
            alt="Mango Pickle"
            content="Mango Pickle"
            btnname="Select Options"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
