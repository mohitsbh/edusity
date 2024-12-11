import React from "react";
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "66a3af37-e7c6-447a-adb6-39f534bbf127");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          send message <img src={message_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          possimus, accusantium repudiandae, nobis incidunt dolorum, animi quis
          vel deleniti doloribus deserunt amet ea esse autem? Enim error earum
          at quas.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-5678
          </li>
          <li>
            <img src={location_icon} alt="" />
            23,cbcbhhhc,cabv <br />
            ma 09768,united states
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone number"
            required
          />

          <label>Write Your Message:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            
            Submit Now<img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
