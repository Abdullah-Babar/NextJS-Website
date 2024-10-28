import "./layout1"
import Image from "next/image";
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.jpg"
import img4 from "../image/img4.jpg"
import img5 from "../image/img5.jpg"
import img6 from "../image/img6.jpg"

export default function About() {
    return (
      <div>
        <div id="header">
        <h1 id="CarHeading">Cars Section</h1>
        </div>
        <ul> 
          <li id="CarPara">
           Available cars in <span>Luxury Automobiles</span>
          </li>
        </ul>

        <div id="Pictures1">
          <div id="pic1">
          <Image src={img1} alt=""/>
          <p>Honda Civic</p>
          </div>

          <div id="pic2">
          <Image src={img2} alt=""/>
          <p>Toyota Corolla</p>
          </div>

          <div id="pic3">
          <Image src={img3} alt=""/>
          <p>MG HS Essence</p>
          </div>

        </div>

        <div id="Pictures2">
          <div id="pic4">
          <Image src={img4} alt=""/>
          <p>Daihatsu Mira</p>
          </div>

          <div id="pic5">
          <Image src={img5} alt=""/>
          <p>Suzuki Swift</p>
          </div>

          <div id="pic6">
          <Image src={img6} alt=""/>
          <p>Hyundai Elantra</p>
          </div>

        </div>
      </div>
    );
  }