import logo from '../assets/LH12.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="w-10/12 mx-auto flex justify-between text-slate-400">
          <a href="#top">
            <img
              src={logo}
              title="Back to top"
              alt="Back to top"
              className="h-36 w-36"
            />
          </a>
          <ul className="flex md:text-lg items-center gap-x-3 md:gap-x-10 nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
