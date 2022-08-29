import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src="" alt="logo" />
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="welcome-content">
          <h1>Luke Hook</h1>
          <h2>Full Stack Web Developer</h2>
        </section>
        <section className="about-content">
          <img src="null" alt="" />
          <p>lorem ipsum dolor</p>
        </section>
        <section>
          <h3>Skills</h3>
        </section>
        <section>
          <h3>Projects</h3>
        </section>
        <section>
          <h3>Contact</h3>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
