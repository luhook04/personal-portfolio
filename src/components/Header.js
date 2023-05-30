import logo from '../assets/LH12.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="w-10/12 mx-auto flex justify-between text-slate-100">
          <a href="#top">
            <img
              src={logo}
              title="Back to top"
              alt="Back to top"
              className="md:h-36 md:w-36 w-28 h-28"
            />
          </a>
          <ul className="flex md:text-lg items-center gap-x-7 sm:gap-x-10 md:gap-x-14 nav-links">
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
