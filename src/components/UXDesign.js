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

      <div className="text-gray-600 text-3xl text-left">
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
          hasta el efecto que tienen los pequeños detalles
        </p>

        <p>
          Por diseño de interacción, nos referimos a diseñar productos interactivos
          para respaldar la forma en que las personas se comunican e interactúan en su vida diaria
          y laboral.
        </p>
      </div>

      <aside className="notes">
        El término diseño de interacción se utiliza generalmente para describir el campo,
        incluidos sus métodos, teorías y enfoques.
        UX se usa más ampliamente en la industria para referirse a la profesión.
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Feedback háptico
      </p>

      <div className="text-gray-600 text-3xl text-left">
        <p>
          El feedback háptico puede proveer múltiples beneficios en experiencias interactivas.
        </p>

        <p>
          Las tecnologías hápticas permiten la transferencia de información entre humanos
          y computadoras; esta transferencia es rica, proximal y rápida.
          La información fluye en ambos sentidos, a través de la entrada y la salida,
          a veces simultáneamente.
        </p>

        <p>
          La tecnología háptica puede reforzar otras modalidades,
          enriqueciendo la retroalimentación para una experiencia más completa,
          o proporcionar retroalimentación complementaria.
        </p>
      </div>

      <aside className="notes">
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
      </aside>
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
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Prototipado
      </p>

      <div className="text-gray-600 text-3xl text-left">
        <p>
          La forma más eficiente para que los usuarios puedan evaluar los diseños creados,
          es mediante interacciones con ellos.
        </p>

        <p>
          Un prototipo es una manifestación de un diseño que permite a los stakeholders
          interactuar con él y explorarlo. Generalmente se utiliza para hacer
          énfasis en algunas características del producto, por sobre otras.
        </p>

        <p>
          Los prototipos pueden ser muy útiles para discutir o evaluar ideas con los stakeholders,
          comunicar algo a los miembros del equipo o incluso pueden ser utilizados
          por los diseñadores para explorar nuevas ideas.
        </p>
      </div>
    </section>
  </section>
);
