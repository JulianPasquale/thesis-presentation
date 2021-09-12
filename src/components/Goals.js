import React from 'react';

export default () => (
  <section>
    <p className="font-extrabold text-green-800 text-5xl">
      Objetivos
    </p>

    <div className="text-gray-600 text-3xl text-left">
      <p className="text-gray-800 font-extrabold">Objetivo principal:</p>
      <p>
        Contribuir a la integración de interacciones hápticas en el diseño
        de la experiencia de usuario en aplicaciones móviles.
      </p>

      <p className="text-gray-800 font-extrabold">Objetivos específicos:</p>
      <ul className="space-y-6">
        <li>
          Comprender el proceso de diseño de UX de aplicaciones móviles.
        </li>
        <li>
          Relevar y analizar las tecnologías y herramientas disponibles
          para el diseño de interacciones hápticas.
        </li>
        <li>
          Proponer y desarrollar una herramienta de soporte a los diseñadores de UX
          para que puedan incorporar las interacciones hápticas.
        </li>
      </ul>
    </div>
  </section>
);
