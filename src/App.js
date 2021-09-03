import React, { useEffect } from 'react';

// Reveal Styles
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import Reveal from 'reveal.js';

const App = () => {
  useEffect(() => {
    Reveal.initialize({
      hash: false,
      controls: true,
      progress: true,
      center: true,
      plugins: [RevealHighlight, RevealNotes],
    });
  }, [Reveal]);

  return (
    <div className="slides">
      <section>
        <p className="font-sans:roboto font-bold text-green-900 text-7xl">
          Diseño de interacciones vibrotáctiles en dispositivos móviles
        </p>

        <p className="prose prose-xl prose-indigo">
          Facultad de informática - UNLP
        </p>
      </section>
      <section>Slide 2</section>
    </div>
  );
};

export default App;
