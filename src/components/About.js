import mePhoto from '../assets/me.jpeg';
import sadiePhoto from '../assets/sadie1.jpeg';

const About = () => {
  return (
    <section id="about" className="about-content font-About text-amber-400">
      <div className="flex-header">
        <div></div>
        <h2>About Me</h2>
        <div></div>
      </div>
      <div className="about-container mt-20 mb-20 ">
        <div className="about-info text-center text-s sm:text-lg sm:text-left  ">
          <div className="flip-box">
            <div className="outer">
              <div className="below bg-slate-900">
                <img src={mePhoto} alt="" className="about-photo" />
              </div>
              <div className="top">
                <img src={sadiePhoto} className="about-photo" alt=""></img>
              </div>
            </div>
          </div>
          <p className="hover-text text-center text-base mt-2 hidden">
            (Hover for a cute picture of my dog)
          </p>
          <p className="mt-3">Hi, I'm Luke!</p>

          <p className="mt-3">
            I'm a self-taught full stack developer currently living in
            Indianapolis. I gravitated towards programming because of my love of
            solving problems and the endless amount of things to learn. In my
            free time, I love to read, play with my dog, and watch/play sports
            of any kind. I also like to spend time connecting with other
            programmers on The Odin Project Discord channel to hang out with
            people who share my passion.
          </p>
        </div>
        <div className="skills text-xs sm:w-1/2 w-full">
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
            <i className="devicon-typescript-plain colored"></i>
            <span>TYPESCRIPT</span>
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
          <div className="tech-icon">
            <i className="devicon-tailwindcss-plain colored"></i>
            <span>TAILWIND</span>
          </div>
          <div className="tech-icon">
            <i class="devicon-mysql-plain"></i>
            <span>MYSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
