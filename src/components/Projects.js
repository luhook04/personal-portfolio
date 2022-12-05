import cvPic from '../assets/cv2.jpg';
import membersPic from '../assets/members-only.jpg';
import blogPic from '../assets/blog2.jpg';
import pokemonPic from '../assets/pokemon.jpg';
import storePic from '../assets/store.jpg';
import waldoPic from '../assets/waldo.jpg';

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex-header">
        <div></div>
        <h1>Projects</h1>
        <div></div>
      </div>
      <div className="project-container mt-16">
        <img src={waldoPic} alt="" />
        <div className="project-info">
          <h2 className="mb-0 md:mb-3">Where's Waldo?</h2>
          <p className="my-3 text-center text-sm sm:text-left sm:text-base">
            Developed with React for the front end and Firebase for the backend,
            Where's Waldo? is a game that keeps track of how long it takes for
            the user to find all four characters in the picture. Finish quickly
            to get your name up on the leaderboards!
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/wheres-waldo"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/wheres-waldo/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={blogPic} alt=""></img>
        <div className="project-info">
          <h2 className="mb-0 md:mb-3">Cap'n Hook's Blog</h2>
          <p className="my-3 text-center text-sm sm:text-left sm:text-base">
            Cap'n Hook's Blog is a MERN stack blogging website. The client-side
            website allows users to read blog posts and add comments, while the
            CMS website permits the admin to perform CRUD operations on the blog
            posts and comments.
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/blog-rest"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/blog-rest-client/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={storePic} alt="" />
        <div className="project-info">
          <h2 className="mb-0 md:mb-3">Luke's Store</h2>
          <p className="my-3 text-center text-sm sm:text-left sm:text-base">
            Developed with React, Luke's Store is a fake online store that
            fetches its products from Fake Store API. The user can add and
            remove items from their cart, and this app will keep track of their
            total cost and items selected.
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/lukes-store"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/lukes-store/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={membersPic} alt="" />
        <div className="project-info">
          <h2 className="mb-0 md:mb-3">Members Only</h2>
          <p className="my-3 text-center text-sm sm:text-left sm:text-base">
            Members Only is a forum app built with Express using modern
            authentication and security tactics. It is a message board that
            hides specific message information depending on the user's
            authentication level.
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/members-only"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://agile-ravine-75999.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={pokemonPic} alt="" />
        <div className="project-info">
          <h2 className="mb-0 md:mb-3">Memory Game</h2>
          <p className="my-3 text-center text-sm sm:text-left sm:text-base">
            This app is a Pokémon memory game built using React. It displays
            random pokémon fetched from the PokéAPI. The goal is to click on all
            twelve pokémon without repeating picks. Can you catch 'em all?
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/memory-card"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/memory-card/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <img src={cvPic} alt="" />
        <div className="project-info">
          <h2 className="mb-0 md:mb-3">CV Creator</h2>
          <p className="my-3 text-center text-sm sm:text-left sm:text-base">
            CV Creator is a React app where the user will input their
            information into a form on one side of the page, and a formatted CV
            will display on the other side.
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/cv-app"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/cv-app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
