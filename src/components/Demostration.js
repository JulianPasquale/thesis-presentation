import React from 'react';

export default () => (
  <section>
    <p className="font-extrabold text-green-800 text-5xl">
      Demostración
    </p>

    <div className="mx-auto flex justify-center max-h-96 max-w-2xl">
      <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="640"
        height="480"
        src="https://framer.com/embed/Social-app-for-demo--ftun6BXqSf7WBZ962Ww1/SBG1dwWHL?highlights=0"
        allowFullScreen
        title="Framer app"
      />
    </div>
  </section>
);
