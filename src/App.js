import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Welcome />
        <About />
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
