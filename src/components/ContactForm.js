import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8lai8c9',
        'template_ocr5ct6',
        form.current,
        'RbdILbUhZGRF7hzy-'
      )
      .then(
        (result) => {
          setShowModal(true);
          setTimeout(() => setShowModal(false), 5000);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form
        ref={form}
        className="contact-form w-11/12 md:w-5/6"
        onSubmit={sendEmail}
      >
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <label htmlFor="message" className="visually-hidden">
          Message
        </label>
        <textarea name="message" id="message" placeholder="Message" required />
        <button type="submit" name="submit">
          Send Message
        </button>
      </form>
      <Modal showModal={showModal}></Modal>
    </div>
  );
};

export default ContactForm;
