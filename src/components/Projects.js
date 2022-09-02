import cvPic from "../assets/cv.jpg";
import membersPic from "../assets/members-only.jpg";
import blogPic from "../assets/blog.jpg";
import pokemonPic from "../assets/pokemon.jpg";
import storePic from "../assets/store.jpg";
import waldoPic from "../assets/waldo.jpg";

const Projects = () => {
  return (
    <section>
      <h3>Projects</h3>
      <div className="project-container">
        <img src={waldoPic} alt="" />
        <div className="project-info">
          <h4>Where's Waldo?</h4>
          <p>description</p>
          <ul>
            <li>
              <a
                href="https://github.com/luhook04/wheres-waldo"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span>&#8599;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/wheres-waldo/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={blogPic} alt="" />
        <div className="project-info">
          <h4>Cap'n Hook's Blog</h4>
          <p>description</p>
          <ul>
            <li>
              <a
                href="https://github.com/luhook04/blog-rest"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span>&#8599;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/blog-rest-client/"
                target="_blank"
                rel="noreferrer"
              >
                Live Application <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={storePic} alt="" />
        <div className="project-info">
          <h4>Luke's Store</h4>
          <p>description</p>
          <ul>
            <li>
              <a
                href="https://github.com/luhook04/lukes-store"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span>&#8599;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/lukes-store/"
                target="_blank"
                rel="noreferrer"
              >
                Live Application <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={membersPic} alt="" />
        <div className="project-info">
          <h4>Member's Only</h4>
          <p>description</p>
          <ul>
            <li>
              <a
                href="https://github.com/luhook04/members-only"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span>&#8599;</span>
              </a>
            </li>
            <li>
              <a
                href="https://agile-ravine-75999.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={pokemonPic} alt="" />
        <div className="project-info">
          <h4>Memory Game</h4>
          <p>description</p>
          <ul>
            <li>
              <a
                href="https://github.com/luhook04/memory-card"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span>&#8599;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/memory-card/"
                target="_blank"
                rel="noreferrer"
              >
                Live Application <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={cvPic} alt="" />
        <div className="project-info">
          <h4>CV Creator</h4>
          <p>description</p>
          <ul>
            <li>
              <a
                href="https://github.com/luhook04/cv-app"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span>&#8599;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/cv-app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Application <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
