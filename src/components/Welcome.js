const Welcome = () => {
  return (
    <section className="text-center flex h-screen">
      <div className="text-slate-100 m-auto">
        <div className="font-Welcome italic font-black md:text-8xl text-7xl block glow-container">
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
        <div className="wrapper">
          <ul className="words font-Change">
            <li className="word">Software Engineer</li>
            <li className="word">Technology Junkie</li>
            <li className="word">Book Worm</li>
            <li className="word">Indy Sports Fan</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
