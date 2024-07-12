import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="heroContainer">
        <div className="left">
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
        <div className="right">
          <img
            src="/src/assets/homepage.png"
            style={{ width: "500px", height: "500px" }}
            alt="homepage"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
