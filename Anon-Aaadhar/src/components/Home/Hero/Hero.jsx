import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="heroContainer">
        <div className="left">
          <div className="lcont">

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, soluta. Illo ex ipsa quasi incidunt rerum, molestiae
            sint unde et beatae assumenda. Libero adipisci, esse explicabo odit
            nisi ab iusto, harum neque officia praesentium ad Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sint quasi et necessitatibus
            repellendus incidunt soluta, non dolorem minus aperiam amet!
          </p>
          <span>
            <Link to={'/mainPage'}>
              <Button text={"Get Started"} colour={"blue"} />
            </Link>
          </span>

          </div>
          

          {/* <div class="ag-format-container">
   <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
        </div>
        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate praesentium tempore molestias voluptates optio totam. Reprehenderit officiis amet tempora fugiat mollitia aut minus alias deleniti! Expedita sunt quaerat culpa!
          </span>
        </div>
      </a>
    </div>
  </div>
</div> */}


        </div>


        <div className="right">
          <img
            src="/src/assets/homepage.png"
            style={{ width: "550px", height: "650px" }}
            alt="homepage"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
