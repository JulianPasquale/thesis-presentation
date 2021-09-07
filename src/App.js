import React, { useEffect } from 'react';

// Reveal Styles
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';

import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import Reveal from 'reveal.js';

// Components
import * as slides from './components';

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
      <slides.CoverPage />

      <slides.Agenda />

      <slides.Introduction />

      <slides.Targets />

      <slides.UXDesign />

      <slides.Implementation />

      <slides.Demostración />

      <slides.Conclusion />

      <slides.Final />
    </div>
  );
};

export default App;
