import waldoGif from "../assets/wheres-waldo-gif.gif";

const Projects = () => {
  return (
    <section>
      <h3>Projects</h3>
      <div className="project-container">
        <div>
          <h4>App name</h4>
          <p>description</p>
          <div>
            <img src={waldoGif} alt="" />
            <button>Live Preview</button>
            <button>Respository</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
