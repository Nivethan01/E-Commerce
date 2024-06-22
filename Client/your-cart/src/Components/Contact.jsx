import React, { useState } from "react";
import Modal from "react-modal";
import "./Contact.css";
import ContactIcon from "../assets/phone.png";
import Mail from "../assets/email.png";
import Location from "../assets/location.png";

// Modal Styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e2decdd-98d3-4205-8ccc-577b572d1455");
    formData.append("inquiryType", inquiryType);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <button onClick={openModal} className="contact-button">Select Inquiry Type</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Select Inquiry Type"
      >
        <h2>Select Inquiry Type</h2>
        <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)}>
          <option value="">--Select--</option>
          <option value="Order">Order</option>
          <option value="Review">Review</option>
          <option value="Other">Other</option>
        </select>
        <button onClick={closeModal} className="modal-button">Confirm</button>
      </Modal>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={ContactIcon} alt="Contact Icon" />
              <p>xxxxxxxxxx</p>
            </div>
            <div className="contact-detail">
              <img src={Mail} alt="Mail Icon" />
              <div>
                <p>yyyy@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="Location Icon" />
              <p>aaaaa,bbbbbb</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <textarea name="message" rows="8" placeholder="Enter your message" required />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
