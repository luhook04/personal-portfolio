import { useInView } from 'react-intersection-observer';
import pollsterPic from '../assets/Pollster.jpg';
import membersPic from '../assets/members-only.jpg';
import blogPic from '../assets/blogpic.jpg';
import pokemonPic from '../assets/pokemon.jpg';
import storePic from '../assets/store.jpg';
import waldoPic from '../assets/waldo.jpg';

const Projects = () => {
  const [inViewRef1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [inViewRef2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [inViewRef3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [inViewRef4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [inViewRef5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [inViewRef6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="projects">
      <div className="flex-header">
        <div></div>
        <h2>Projects</h2>
        <div></div>
      </div>
      <div
        ref={inViewRef1}
        className={`project-container right ${
          inView1 ? 'show ' : ''
        }md:px-7 px-1.5 py-7`}
      >
        <img src={pollsterPic} alt="Social Media Project" />
        <div className="project-info">
          <h3 className="mb-0 md:mb-2">Pollster</h3>
          <p className="my-2 text-center text-sm sm:text-left sm:text-base">
            Pollster is a full-stack social media web application that allows
            users to vote on polls posted by their friends. Users can create
            polls with different types of questions and options. Once the poll
            is created, the user can share it by posting it for everyone to see.
          </p>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/luhook04/pollster-front/"
                target="_blank"
                rel="noreferrer"
              >
                Repository <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
            <li>
              <a
                href="https://luhook04.github.io/pollster-front/"
                target="_blank"
                rel="noreferrer"
              >
                Live App <span className="font-bold">&#8599;&#xFE0E;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={inViewRef2}
        className={`project-container left ${
          inView2 ? 'show ' : ''
        }md:px-7 px-1.5 py-7`}
      >
        <img src={waldoPic} alt="Waldo Project" />
        <div className="project-info">
          <h3 className="mb-0 md:mb-2">Where's Waldo?</h3>
          <p className="my-2 text-center text-sm sm:text-left sm:text-base">
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
      <div
        ref={inViewRef3}
        className={`project-container right ${
          inView3 ? 'show ' : ''
        }md:px-7 px-1.5 py-7`}
      >
        <img src={blogPic} alt="Blog Project"></img>
        <div className="project-info">
          <h3 className="mb-0 md:mb-2">Cap'n Hook's Blog</h3>
          <p className="my-2 text-center text-sm sm:text-left sm:text-base">
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
      <div
        ref={inViewRef4}
        className={`project-container left ${
          inView4 ? 'show ' : ''
        }md:px-7 px-1.5 py-7`}
      >
        <img src={storePic} alt="Store Project" />
        <div className="project-info">
          <h3 className="mb-0 md:mb-2">Luke's Store</h3>
          <p className="my-2 text-center text-sm sm:text-left sm:text-base">
            Luke's Store is a fake online store that fetches its products from
            Fake Store API. The user can add and remove items from their cart,
            and this app will keep track of their total cost and items selected.
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
      <div
        ref={inViewRef5}
        className={`project-container right ${
          inView5 ? 'show ' : ''
        }md:px-7 px-1.5 py-7`}
      >
        <img src={membersPic} alt="Members Only Project" />
        <div className="project-info">
          <h3 className="mb-0 md:mb-2">Members Only</h3>
          <p className="my-2 text-center text-sm sm:text-left sm:text-base">
            Members Only is a forum app built with modern authentication and
            security tactics. It is a message board that hides specific message
            information depending on the user's authentication level.
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
      <div
        ref={inViewRef6}
        className={`project-container left ${
          inView6 ? 'show ' : ''
        }md:px-7 px-1.5 py-7`}
      >
        <img src={pokemonPic} alt="Pokemon Memory Game Project" />
        <div className="project-info">
          <h3 className="mb-0 md:mb-2">Memory Game</h3>
          <p className="my-2 text-center text-sm sm:text-left sm:text-base">
            This app displays random pokémon fetched from the PokéAPI. The goal
            is to click on all twelve pokémon without repeating picks. Can you
            catch 'em all?
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
    </section>
  );
};

export default Projects;
