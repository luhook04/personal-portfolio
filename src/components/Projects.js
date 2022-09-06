import cvPic from "../assets/cv.jpg";
import membersPic from "../assets/members-only.jpg";
import blogPic from "../assets/blog.jpg";
import pokemonPic from "../assets/pokemon.jpg";
import storePic from "../assets/store.jpg";
import waldoPic from "../assets/waldo.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex-header">
        <div></div>
        <h1>Projects</h1>
        <div></div>
      </div>
      <div className="project-container">
        <img src={waldoPic} alt="" />
        <div className="project-info">
          <h2>Where's Waldo?</h2>
          <p>
            Developed with React for the frontend and Firebase for the backend,
            Where's Waldo? is a game that keeps track of how long it takes for
            the user to find all four characters in the picture.
          </p>
          <ul className="project-links">
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
        <img src={blogPic} alt=""></img>
        <div className="project-info">
          <h2>Cap'n Hook's Blog</h2>
          <p>
            Cap'n Hook's Blog is a MERN stack blogging website. There is a
            client side website that allows users to read blog posts and add
            comments, while the CMS website allows the admin to do CRUD
            operations on the posts and comments.
          </p>
          <ul className="project-links">
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
                Live App <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={storePic} alt="" />
        <div className="project-info">
          <h2>Luke's Store</h2>
          <p>
            Developed with React, Luke's Store is an online store that fetches
            it's products from Fake Store API. The users can add and remove
            items from their cart, and this app will keep track of their total
            cost and items selected.
          </p>
          <ul className="project-links">
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
                Live App <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={membersPic} alt="" />
        <div className="project-info">
          <h2>Member's Only</h2>
          <p>
            Member's Only was built with Express using modern authentication and
            security tactics. It is a message board that hides specific message
            information depending on the users authentication level.
          </p>
          <ul className="project-links">
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
          <h2>Memory Game</h2>
          <p>
            This a Pokémon memory game built using React and random pokémon
            fetched from the PokéAPI. The goal of the game is to click on all
            twelve pokémon without repeating picks.
          </p>
          <ul className="project-links">
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
                Live App <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={cvPic} alt="" />
        <div className="project-info">
          <h2>CV Creator</h2>
          <p>
            CV Creator is a React app that has users input information into a
            form on one side of the page, with a formatted CV being displayed on
            the other side.
          </p>
          <ul className="project-links">
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
                Live App <span>&#8599;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
