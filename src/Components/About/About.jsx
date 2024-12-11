import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setplaystate}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          setplaystate(true)
        }} />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorows Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          expedita quo magnam quam dolorem debitis ab modi, asperiores unde,
          odio quasi officia deserunt molestiae! Quisquam illo asperiores
          voluptatem laboriosam iusto!
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam impedit
          optio velit reiciendis pariatur! Laborum necessitatibus animi
          doloribus esse vero maiores! Nisi eligendi repellat est veritatis
          pariatur ullam sed debitis atque non deleniti totam molestiae
          reiciendis, aut, amet perspiciatis. Minus.
        </p>
      </div>
    </div>
  );
};

export default About;
