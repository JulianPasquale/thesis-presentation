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
        Herramientas de prototipado
      </p>

      <table className="table-fixed text-3xl">
        <thead>
          <tr>
            <th aria-label="Analysis" className="w-1/7" />
            <th className="w-1/6">
              <div className="flex justify-center">
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.Figma} alt="Figma" />
                </a>
              </div>
            </th>
            <th className="w-1/7">
              <div className="flex justify-center">
                <a
                  href="https://www.adobe.com/la/products/xd.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.AdobeXD} alt="Adobe XD" />
                </a>
              </div>
            </th>
            <th className="w-1/7">
              <div className="flex justify-center">
                <a
                  href="https://www.sketch.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.Sketch} alt="Sketch" />
                </a>
              </div>
            </th>
            <th className="w-1/7">
              <div className="flex justify-center">
                <a
                  href="https://balsamiq.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.Balsamiq} alt="Balsamiq" />
                </a>
              </div>
            </th>
            <th className="w-1/7">
              <div className="flex justify-center">
                <a
                  href="https://www.framer.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={images.Framer} alt="Framer" />
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Utilizada para diseño de interfaces</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>✅</td>
          </tr>
          <tr>
            <td>Posee aplicación móvil</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>✅</td>
            <td style={{ textAlign: 'center' }}>❌</td>
            <td style={{ textAlign: 'center' }}>✅</td>
          </tr>
          <tr>
            <td>Permite ejecutar vibraciones</td>
            <td style={{ textAlign: 'center' }}>❌</td>
            <td style={{ textAlign: 'center' }}>❌</td>
            <td style={{ textAlign: 'center' }}>❌</td>
            <td style={{ textAlign: 'center' }}>❌</td>
            <td style={{ textAlign: 'center' }}>✅</td>
          </tr>
        </tbody>
      </table>
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

      <div className="text-gray-600 text-3xl text-left">
        <p className="font-extrabold">
          Ventajas
        </p>

        <ul className="space-y-6">
          <li>
            Facilidad de uso
          </li>

          <li>
            Abstracción
          </li>
        </ul>

        <p className="font-extrabold">
          Desventajas
        </p>

        <ul className="space-y-6">
          <li>
            Compatibilidad
          </li>

          <li>
            Control sobre el motor de vibraciones
          </li>
        </ul>
      </div>

      <aside className="notes">
        <p>
          El Consorcio World Wide Web (W3C) presentó una API de vibraciones para aplicaciones web.
        </p>

        <p>
          Nos permite pedirle al motor de vibración del dispositivo (si es que éste posee),
          que ejecute un patrón de vibración.
        </p>

        <p>
          A través del llamado a la función vibrate se puede iniciar una vibración
          del hardware pasando como argumento un sólo número, o un arreglo de un sólo número.
          Este número representa la cantidad de milisegundos
          que el motor de vibración estará encendido.
        </p>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Muestreo
      </p>

      <p className="text-gray-600 text-3xl">
        Permite obtener una representación analógica de la señal.
      </p>

      <div className="mx-auto flex justify-center">
        <img
          src={images.Sampling}
          alt="Sampling"
        />
      </div>

      <aside className="notes">
        <p>
          Se obtienen muestras de la señal en puntos aislados,
          igualmente espaciados en el tiempo.
        </p>

        <p>
          El resultado del muestreo es una secuencia de números que se puede representar
          como una función de una variable de índice que sólo toma valores enteros.
        </p>

        <p>
          Para el desarrollo de esta herramienta, se utiliza una cantidad fija
          de muestras por cada par de puntos (se utilizó un valor de 10 muestras).
        </p>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        PWM (Pulse Width Modulation)
      </p>

      <ul className="text-gray-600 text-3xl space-y-5">
        <li>
          Nos permite simular la intensidad de las vibraciones.
        </li>

        <li>
          Se basa en alterar el ciclo de trabajo.
        </li>

        <li className="font-extrabold">
          Ciclo de trabajo bajo = baja potencia.
        </li>

        <li className="font-extrabold">
          Ciclo de trabajo alto = alta potencia.
        </li>
      </ul>

      <aside className="notes">
        <p>
          Es una técnica en la que se modifica el ciclo de trabajo de una señal periódica.
        </p>

        <p>
          El ciclo de trabajo describe la proporción de tiempo que el motor estará
          &quot;encendido&quot; dentro de un intervalo o &quot;período&quot; de tiempo.
          Se expresa en porcentaje.
        </p>
      </aside>
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
