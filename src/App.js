import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
