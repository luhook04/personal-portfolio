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
        </div>
        <div>
          <img src={waldoPic} alt="" />
          <button>Live Preview</button>
          <button>Respository</button>
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
        </div>
        <div>
          <img src={blogPic} alt="" />
          <button>Live Preview</button>
          <button>Respository</button>
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
        </div>
        <div>
          <img src={storePic} alt="" />
          <button>Live Preview</button>
          <button>Respository</button>
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
        </div>
        <div>
          <img src={membersPic} alt="" />
          <button>Live Preview</button>
          <button>Respository</button>
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
        </div>
        <div>
          <img src={pokemonPic} alt="" />
          <button>Live Preview</button>
          <button>Respository</button>
        </div>
      </div>
      <div className="project-container">
        <div className="project-info">
          <h4>App name</h4>
          <p>description</p>
        </div>
        <div>
          <img src={cvPic} alt="" />
          <button>Live Preview</button>
          <button>Respository</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
