import React from 'react';

// Images
import * as images from '../images/Implementation';

export default () => (
  <section>
    <p className="font-extrabold text-green-800 text-5xl">
      Desarrollo e implementación
    </p>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
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

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Relevamiento y estudio de Herramientas de maquetado comerciales
      </p>

      <div className="grid grid-cols-4 gap-4 justify-center">
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
          style={{ width: '80%', height: '80%' }}
        >
          <img src={images.Figma} alt="Figma" />
        </a>

        <a
          href="https://www.adobe.com/la/products/xd.html"
          target="_blank"
          rel="noreferrer"
          style={{ width: '80%', height: '80%' }}
        >
          <img src={images.AdobeXD} alt="Adobe XD" />
        </a>

        <a
          href="https://www.sketch.com/"
          target="_blank"
          rel="noreferrer"
          style={{ width: '60%', height: '60%' }}
        >
          <img src={images.Sketch} alt="Sketch" />
        </a>

        <a
          href="https://www.framer.com/"
          target="_blank"
          rel="noreferrer"
          style={{ width: '50%', height: '50%' }}
        >
          <img src={images.Framer} alt="Framer" />
        </a>
      </div>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Flujo de trabajo con herramienta de diseño
      </p>

      <div className="mx-auto flex justify-center">
        <img
          src={images.DesignWithFramer}
          alt="Design With Framer"
        />
      </div>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Arquitectura de la solución
      </p>

      <div className="mx-auto flex justify-center">
        <img
          src={images.SolutionArchitecture}
          alt="Solution diagram"
        />
      </div>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        PWM (Pulse Width Modulation)
      </p>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Vibration API
      </p>
    </section>
  </section>
);
