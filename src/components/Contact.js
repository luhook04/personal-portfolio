import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="flex-header">
        <div></div>
        <h1>Contact</h1>
        <div></div>
      </div>
      <div className="contact-content">
        <p>Please contact me if you'd like to get in touch!</p>
        <ContactForm />
        <div className="contact-links">
          <a href="https://github.com/luhook04">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/luke-hook-47676916b/">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="mailto: lukehook04@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
