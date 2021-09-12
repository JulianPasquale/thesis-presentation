import React from 'react';

// Images
import * as images from '../images/UXDesign';

export default () => (
  <section>
    <p className="font-extrabold text-green-800 text-5xl">
      Diseño de experiencias de usuario
    </p>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        ¿Qué es la experiencia de usuario?
      </p>

      <div className="mx-auto flex justify-center">
        <img src={images.UX} alt="User Experience" className="h-2/5 w-2/5" />
      </div>

      <aside className="notes">
        <p>
          La experiencia de usuario trata de cómo un producto se comporta y
          cómo es usado por los usuarios.
        </p>

        <p>
          Se trata de la satisfacción de las personas al usar un producto, mirarlo,
          sostenerlo, abrirlo o cerrarlo.
        </p>

        <p>
          Incluye la impresión general de lo bueno que es usarlo,
          hasta el efecto que tienen los pequeños detalles.
        </p>

        <p>
          Por diseño de interacción, nos referimos a diseñar productos interactivos
          para respaldar la forma en que las personas se comunican e interactúan en su vida diaria
          y laboral.
        </p>

        <p>
          El término diseño de interacción se utiliza generalmente para describir el campo,
          incluidos sus métodos, teorías y enfoques.
          UX se usa más ampliamente en la industria para referirse a la profesión.
        </p>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Feedback háptico
      </p>

      <div className="text-gray-600 text-3xl text-left max-h-full">
        <ul className="space-y-6">
          <li>
            Transferencia de información entre humanos y computadoras.
            <ul>
              <li>
                Rica, proximal y rápida.
              </li>

              <li>
                Fluye en ambos sentidos.
              </li>
            </ul>
          </li>

          <li>
            Reforzar otras modalidades, brindando una experiencia más completa.
            <ul>
              <li>
                Saturación de información
              </li>

              <li>
                Contexto de la tarea
              </li>

              <li>
                Deterioro de alguno de los sentidos
              </li>

              <li>
                Comunicar emoción
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Actividades básicas del diseño de interacción
      </p>

      <div className="flex justify-center">
        <img
          src={images.InteractionDesign}
          alt="Interaction design cycle"
          height="60%"
          width="60%"
        />
      </div>

      <aside className="notes">
        <p>
          La forma más eficiente para que los usuarios puedan evaluar los diseños creados,
          es mediante interacciones con ellos.
        </p>

        <p>
          Un prototipo es una manifestación de un diseño que permite a los stakeholders
          interactuar con él y explorarlo.
        </p>

        <p>
          Los prototipos pueden ser muy útiles para discutir o evaluar ideas con los stakeholders,
          comunicar algo a los miembros del equipo o incluso pueden ser utilizados
          por los diseñadores para explorar nuevas ideas.
        </p>
      </aside>
    </section>
  </section>
);
