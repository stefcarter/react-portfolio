import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log({inputType, inputValue});

    if (inputType === 'sender') {
      setSender(inputValue);
        } else if (inputType === 'email') {
      setEmail(inputValue);
        } else if (inputType === 'message') {
      setMessage(inputValue);
        }
    };

  const handleFormSubmit = (e) => {
    e.preventDefault();
      if (!validateEmail(email)  || !sender) {
        setErrorMessage("Email or Name is invalid");
        return;
    }
      if (!message) {
        setErrorMessage("Message field blank or invalid");
        return;
      }

        setSender("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        alert(`Hello ${sender}, thank you for the message.`)
    };


return (
  <section className="container-fluid contact" id="contact">
    <h2 id="contact-title" className="topText">Contact Me</h2>
      <div className="row contact-row" data-contact="hide">
        <div className="contact-info">
          <form
            action="mailto:xisled09@gmail.com"
            method="POST"
            enctype="multipart/form-data"
            id="contact-form"
            >
            <p>
              <label for="name" className="nameText">Name:</label>
                <br />
                <input
                  value={sender}
                  type="text"
                  className="text-input"
                  name="sender"
                  onChange={handleInputChange}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  id="full-name"
                  placeholder="name"
                  />
            </p>
            <p>
              <label for="email" className="nameText">Email:</label>
                <br />
                  <input
                    value={email}
                    type="email"
                    className="text-input"
                    name="email"
                    onChange={handleInputChange}
                    id="email"
                    placeholder="email"
                    />
            </p>
            <p>
              <label for="message" className="nameText">Message:</label>
                <br />
                  <textarea
                    value={message}
                    className="text-input"
                    name="message"
                    id="message"
                    onChange={handleInputChange}
                    placeholder="please send me a question or comment!"
                    rows="4"
                    cols=""
                    ></textarea>
                </p>
                <p>
                <button 
                    type="submit" 
                    id="email-btn"
                    className="boopBtn"
                    onClick={handleFormSubmit}
                    >Submit</button>
                </p>
                </form>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
            </div>
        </section>
    )
}

export default Contact;