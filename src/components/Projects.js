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
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
          <ul>
            <li>Repository</li>
            <li>Live Preview</li>
          </ul>
        </div>
        <div>
          <img src={waldoPic} alt="" />
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
          <ul>
            <li>Repository</li>
            <li>Live Preview</li>
          </ul>
        </div>
        <div>
          <img src={blogPic} alt="" />
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
          <ul>
            <li>Repository</li>
            <li>Live Preview</li>
          </ul>
        </div>
        <div>
          <img src={storePic} alt="" />
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
          <ul>
            <li>Repository</li>
            <li>Live Preview</li>
          </ul>
        </div>
        <div>
          <img src={membersPic} alt="" />
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
          <ul>
            <li>Repository</li>
            <li>Live Preview</li>
          </ul>
        </div>
        <div>
          <img src={pokemonPic} alt="" />
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
          <ul>
            <li>Repository</li>
            <li>Live Preview</li>
          </ul>
        </div>
        <div>
          <img src={cvPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
