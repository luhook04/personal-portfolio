const Welcome = () => {
  return (
    <section className="text-center h-screen pt-52">
      <div className="text-slate-100 m-auto">
        <div className="font-Welcome md:text-8xl text-7xl glow-container w-full">
          <div className="glow-text-animation">
            <span className="animate-slide inline-block" style={{ '--i': 1 }}>
              L
            </span>
            <span className="animate-slide2 inline-block" style={{ '--i': 2 }}>
              U
            </span>
            <span className="animate-slide3 inline-block" style={{ '--i': 3 }}>
              K
            </span>
            <span className="animate-slide4 inline-block" style={{ '--i': 4 }}>
              E
            </span>
            <span
              className="animate-slide4 inline-block text-amber-300"
              style={{ '--i': 5 }}
            >
              H
            </span>
            <span
              className="animate-slide3 inline-block text-amber-300"
              style={{ '--i': 6 }}
            >
              O
            </span>
            <span
              className="animate-slide2 inline-block text-amber-300"
              style={{ '--i': 7 }}
            >
              O
            </span>
            <span
              className="animate-slide inline-block text-amber-300"
              style={{ '--i': 8 }}
            >
              K
            </span>
          </div>
          <div className="glow-text-animation bright-text">
            <span className="animate-slide inline-block" style={{ '--i': 1 }}>
              L
            </span>
            <span className="animate-slide2 inline-block" style={{ '--i': 2 }}>
              U
            </span>
            <span className="animate-slide3 inline-block" style={{ '--i': 3 }}>
              K
            </span>
            <span className="animate-slide4 inline-block" style={{ '--i': 4 }}>
              E
            </span>
            <span
              className="animate-slide4 inline-block text-amber-300"
              style={{ '--i': 5 }}
            >
              H
            </span>
            <span
              className="animate-slide3 inline-block text-amber-300"
              style={{ '--i': 6 }}
            >
              O
            </span>
            <span
              className="animate-slide2 inline-block text-amber-300"
              style={{ '--i': 7 }}
            >
              O
            </span>
            <span
              className="animate-slide inline-block  text-amber-300"
              style={{ '--i': 8 }}
            >
              K
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <ul className="words font-Change">
          <li className="word">Software Engineer</li>
          <li className="word">Technology Junkie</li>
          <li className="word">Book Worm</li>
          <li className="word">Indy Sports Fan</li>
        </ul>
      </div>
    </section>
  );
};

export default Welcome;
