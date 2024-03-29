import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="flex-header">
        <div></div>
        <h2>Contact</h2>
        <div></div>
      </div>
      <div className="contact-content mt-7 w-5/6 md:w-2/3 ">
        <p className="mt-3 mb-4">
          Feel free to contact me if you'd like to get in touch!
        </p>
        <ContactForm />
        <div className="contact-links">
          <a href="https://github.com/luhook04" aria-label="Github">
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lukehook04/"
            aria-label="LinkedIn"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
