import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import brand_logo from "./image/brand_logo.png";
import hero from "./image/hero.png";
import Filpkart from './image/flipkart.png';
import Amazon from './image/amazon.png';

function App() {
  return (
    <>
      <nav className=" flex justify-between m-auto max-w-1280px h-100px ">
        <div>
          <img className="nikeimg" src={brand_logo} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
      <main className="hero" >
      <div className="her_img" >
        <img src={hero} alt="" />
        </div>
        <div className="Hero_content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
            SHOES.
          </p>
          <div className="hero-btn">
            <button className="  border-5 bg-red-500 h-10">SHOP NOW</button>
            <button className=" w-100 border-5px">CATOGRIE</button>
          </div>
          <div className="Shpoing">
            <p className=" text-xl ">NOW AVVAILABLE ON </p>
            <img src={Filpkart} alt="" />
            <img src={Amazon} alt="" />
          </div>

        </div>
        
      </main>
      
      
    </>
  );
}

export default App;
