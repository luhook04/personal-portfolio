import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
