import logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header className="bg-white">
      <nav>
        <div className="w-10/12 mx-auto flex justify-between">
          <a href="#top">
            <img src={logo} alt="Back to top" className="h-20 w-20" />
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
