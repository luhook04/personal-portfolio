import placeHolderPhoto from "../assets/pic.jpg";

const About = () => {
  return (
    <section id="about" className="about-content">
      <div className="flex-header">
        <div></div>
        <h1>About</h1>
        <div></div>
      </div>
      <div className="about-container">
        <div className="about-info">
          <img src={placeHolderPhoto} alt="null" className="about-photo" />
          <p>Hi, I'm Luke!</p>
          <p>
            I'm a self-taught full stack developer that lives in Indianapolis. I
            gravitated towards programming because of my love of solving
            problems and the idea of always having more to learn.
          </p>
          <p>
            In my free time, I love to read, play with my dog, and watch/play
            sports of any kind. I also really enjoy spending time in nature and
            hiking.
          </p>
        </div>
        <div className="skills">
          <div className="tech-icon">
            <i className="devicon-html5-plain colored"></i>
            <span>HTML</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-css3-plain colored"></i>
            <span>CSS</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-javascript-plain colored"></i>
            <span>JAVASCRIPT</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-react-original colored"></i>
            <span>REACT</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-nodejs-plain colored"></i>
            <span>NODEJS</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-express-original colored"></i>
            <span>EXPRESS</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-mongodb-plain colored"></i>
            <span>MONGODB</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-heroku-plain colored"></i>
            <span>HEROKU</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-firebase-plain colored"></i>
            <span>FIREBASE</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-git-plain colored"></i>
            <span>GIT</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-jest-plain colored"></i>
            <span>JEST</span>
          </div>
          <div className="tech-icon">
            <i className="devicon-webpack-plain colored"></i>
            <span>WEBPACK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
