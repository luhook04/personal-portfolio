import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
