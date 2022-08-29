import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Welcome />
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
};

export default App;
