import "./layout3"
import Image from "next/image";
import service1 from "../image/service1.jpg"
import service2 from "../image/service2.jpg"
import service3 from "../image/service3.jpg"
import service4 from "../image/service4.jpg"
import service5 from "../image/service5.jpg"
import service6 from "../image/service6.jpg"

export default function Contact() {
    return (
      <div>

        <div id="header2">
        <h1 id="ServiceHeading">Services Section</h1>
        </div>


        <ul> 
          <li id="ServicePara">
           Services provided by <span>Luxury Automobiles</span>
          </li>
        </ul>

        <div id="service1">

          <div id="ser1">
            <Image src={service1} alt=""/>
            <p>Car Wash</p>
          </div>

          <div id="ser2">

            <Image src={service2} alt=""/>
            <p>Car Polishing</p>
          </div>

          <div id="ser3">
            <Image src={service3} alt=""/>
            <p>Car Wrapping</p>
          </div>


        </div>

        <div id="service2">

        <div id="ser4">
            <Image src={service4} alt=""/>
            <p>Denting & Penting</p>
          </div>

          <div id="ser5">
            <Image src={service5} alt=""/>
            <p>Car Service</p>
          </div>

          <div id="ser6">
            <Image src={service6} alt=""/>
            <p>Car Cleaning</p>
          </div>



        </div>



      </div>
    );
  }