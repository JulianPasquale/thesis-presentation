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
        Diseñar vibraciones
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Se ideó una forma de poder expresar en un gráfico como debería sentirse
        el efecto vibrotáctil que se desea crear, a través de la creación de puntos.
      </p>

      <div className="mx-auto flex justify-center max-h-96 max-w-2xl">
        <img
          src={images.HapticDesign}
          alt="Haptic Design"
        />
      </div>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        API de vibración W3C
      </p>

      <p className="text-gray-600 text-3xl text-left">
        El Consorcio World Wide Web (W3C) presentó una API de vibraciones para aplicaciones web.
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Nos permite pedirle al motor de vibración del dispositivo (si es que éste posee),
        que ejecute un patrón de vibración.
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Se destaca principalmente por su facilidad de uso, aunque también posee varias limitaciones:
      </p>

      <ul className="text-gray-600 text-3xl space-y-6 font-extrabold">
        <li>
          Compatibilidad
        </li>

        <li>
          Control sobre el motor de vibraciones
        </li>
      </ul>

      <aside className="notes">
        A través del llamado a la función vibrate se puede iniciar una vibración
        del hardware pasando como argumento un sólo número, o un arreglo de un sólo número.
        Este número representa la cantidad de milisegundos
        que el motor de vibración estará encendido.
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Muestreo
      </p>

      <p className="text-gray-600 text-3xl text-left">
        A los fines de poder enviar los datos al motor de vibración de los dispositivos móviles,
        debemos obtener una representación analógica de la señal.
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Esto se puede hacer muestreando una señal en puntos aislados,
        igualmente espaciados en el tiempo.
      </p>

      <div className="mx-auto flex justify-center">
        <img
          src={images.Sampling}
          alt="Sampling"
        />
      </div>

      <aside className="notes">
        El resultado del muestreo es una secuencia de números que se puede representar
        como una función de una variable de índice que sólo toma valores enteros.
        Para el desarrollo de esta herramienta, se utiliza una cantidad fija
        de muestras por cada par de puntos (se utilizó un valor de 10 muestras).
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        PWM (Pulse Width Modulation)
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Es una técnica en la que se modifica el ciclo de trabajo de una señal periódica.
        En el contexto de este trabajo, fue utilizada para poder
        simular la intensidad de las vibraciones.
      </p>

      <p className="text-gray-600 text-3xl text-left">
        El ciclo de trabajo describe la proporción de tiempo &quot;encendido&quot;
        dentro de un intervalo o &quot;período&quot; de tiempo. Se expresa en
        porcentaje (el 100% indica que el motor se encotrará encendido todo el tiempo).
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Un ciclo de trabajo bajo significa baja potencia,
        porque la alimentación está apagada la mayor parte del tiempo.
      </p>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        PWM (Pulse Width Modulation)
      </p>

      <p className="text-gray-600 text-3xl text-left">
        Se establecieron 5 posibles valores del ciclo de trabajo:
      </p>

      <ul className="text-gray-600 text-3xl space-y-5">
        <li>
          El valor 0 indica que el motor estará apagado durante todo el ciclo de trabajo.
        </li>

        <li>
          El valor 0.25 indica que el motor estará prendido el 25% del tiempo y
          se encontrará apagado el restante 75%.
        </li>

        <li>
          El valor 0.5 indica que el motor estará prendido la mitad del tiempo y
          apagado la otra mitad.
        </li>

        <li>
          El valor 0.75 indica que el motor estará prendido el 75% del tiempo y
          apagado el 25% del tiempo restante.
        </li>

        <li>
          El valor 1 indica que el motor estará prendido durante todo el ciclo de trabajo.
        </li>
      </ul>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Arquitectura final de la solución
      </p>

      <div className="mx-auto flex justify-center">
        <img
          src={images.SolutionArchitecture}
          alt="Solution diagram"
        />
      </div>
    </section>
  </section>
);
