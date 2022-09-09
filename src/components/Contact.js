const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="flex-header">
        <div></div>
        <h1>Contact</h1>
        <div></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <i className="fa-solid fa-phone"></i>
          <span>317-503-0939</span>
        </div>
        <div className="contact-info">
          <i className="fa-solid fa-envelope"></i>
          <span>lukehook04@gmail.com</span>
        </div>
        <div className="contact-links">
          <a href="google.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="google.com">
            <i className="devicon-github-original"></i>
          </a>
          <a href="google.com">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
