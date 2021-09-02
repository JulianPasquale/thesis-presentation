import React, { useEffect } from 'react';

// Styles
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
        Slide 1
        asfgsdgdrhs
        argshshsfg
        dfhsf
      </section>
      <section>Slide 2</section>
    </div>
  );
};

export default App;
