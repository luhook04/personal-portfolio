import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Welcome />
        <About />

        <Projects />
        <section>
          <h3>Contact</h3>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
