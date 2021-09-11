import React from 'react';

// Images
import * as images from '../images/Introduction';

export default () => (
  <section>
    <p className="font-extrabold text-green-800 text-5xl">
      Introducción
    </p>

    <section>
      <div className="mx-auto flex justify-center">
        <img src={images.WordsMap} alt="Words Map" />
      </div>

      <aside className="notes">
        <p>
          La propiocepción se refiere a cómo las personas perciben su propio cuerpo,
          a diferencia del sentido háptico que es como las personas perciben a los objetos externos.
        </p>

        <p>
          El término háptica fue utilizado en el año 1892 para referirse al estudio del tacto,
          similar a “óptico” para la vista o “acústico” para el sonido.
        </p>

        <p>
          En la actualidad, se utiliza tanto para referirse al estudio de la psicología y
          percepción del sentido del tacto, como a la tecnología que utiliza el tacto
          como método para brindar retroalimentación o feedback.
        </p>

        <p>
          Integra información proveniente de dos sentidos:
          el tacto y la kinestesia.
        </p>

        <p>
          Utiliza receptores de la piel y sensores en los músculos, tendones y articulaciones,
          y combina el tacto con el sentido del movimiento.
        </p>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Percepción háptica
      </p>

      <div className="flex justify-center">
        <a
          className="text-center"
          href="https://www.diariomarca.com.mx/2021/05/invitan-a-participar-en-taller-virtual-el-abc-del-braile/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={images.Braille} alt="Braille" />
        </a>
      </div>

      <aside className="notes">
        <ul>
          <li>
            El sensado háptico difiere de otros sentidos en que es bidireccional:
            la información que se puede extraer sobre las propiedades de un objeto
            está muy vinculada con los movimientos realizados para percibir esas propiedades.
          </li>
          <li>
            La persona realiza movimientos voluntarios para inspeccionar los objetos de su entorno,
            lo que permite obtener información mucho más detallada,
            que está estrictamente relacionada con los movimientos realizados
            por la persona en su interacción con el objeto.
          </li>
        </ul>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Tecnología háptica
      </p>

      <div className="mx-auto flex justify-center max-h-full max-w-2xl">
        <img src={images.Technologies} alt="Haptic technologies" />
      </div>

      <aside className="notes">
        <ul>
          <li>
            El diseño de experiencias hápticas (en particular mediante efectos vibrotáctiles) es una
            tendencia que está siendo cada vez más relevante dentro de la industria tecnológica,
            ya sea en el área de los videojuegos, dispositivos de IoT o
            desarrollo de aplicaciones móviles.
          </li>
          <li>
            Diseñar este tipo de experiencias es por el momento un gran reto
            para los diseñadores por la falta de herramientas específicas
          </li>
        </ul>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-4xl">
        Limitaciones al diseñar háptica
      </p>

      <ul className="text-gray-600 text-3xl space-y-6">
        <li>
          Escasez de herramientas que faciliten el diseño y prueba de efectos vibrotáctiles.
        </li>
        <li>
          Diferencias entre experiencias personales.
        </li>
        <li>
          Diferencias en la ejecución de vibraciones en
          distitos dispositivos de hardware y sistemas operativos.
        </li>
        <li>
          No existe un modelo conceptual unificado.
        </li>
      </ul>
    </section>
  </section>
);
