import './App.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1000,
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: '#fcd34d',
            },
            shape: {
              type: 'circle',
              options: {
                sides: 6,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: false,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: 'clockwise',
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 32,
              color: '#ffffff',
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'random',
              random: false,
              straight: true,
              out_mode: 'bounce',
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ['grab'],
              },
              onclick: {
                enable: false,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 120,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: '#0f172a',
            image: '',
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
        }}
      />
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
