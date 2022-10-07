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
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Full name" required />
        <input type="email" name="email" placeholder="Your e-mail" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit" name="submit">
          Send Message
        </button>
      </form>
      <Modal showModal={showModal}></Modal>
    </div>
  );
};

export default ContactForm;
