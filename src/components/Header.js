import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="#welcome">
            <img src={logo} alt="Back to top" />
          </a>
          <ul className="nav-links">
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
