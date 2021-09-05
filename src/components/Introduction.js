import React from 'react';

// Images
import * as images from '../images/Introduction';

export default () => (
  <section>
    <p className="font-extrabold text-green-800 text-7xl">
      Introducción
    </p>

    <section>
      <p className="font-extrabold text-green-600 text-5xl">Háptica</p>

      <div className="text-gray-600 text-4xl text-left">
        <p>
          El término háptica fue utilizado en el año 1892 para referirse al estudio del tacto,
          similar a “óptico” para la vista o “acústico” para el sonido.
        </p>

        <p>
          En la actualidad, se utiliza tanto para referirse al estudio de la psicología y
          percepción del sentido del tacto, como a la tecnología que utiliza el tacto
          como método para brindar retroalimentación o feedback.
        </p>
      </div>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-5xl">Háptica</p>

      <div className="text-gray-600 text-4xl text-left">
        <p>
          Integra información proveniente de dos sentidos:
          el tacto y la kinestesia (vinculada a su vez con la propiocepción).
        </p>

        <p>
          Utiliza receptores de la piel y sensores en los músculos, tendones y articulaciones,
          y combina el tacto con el sentido del movimiento.
        </p>
      </div>

      <aside className="notes">
        La propiocepción se refiere a cómo las personas perciben su propio cuerpo,
        a diferencia del sentido háptico que es como las personas perciben a los objetos externos.
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-5xl">
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
          <li>
            La mano es la estructura principal utilizada en la exploración táctil del mundo externo.
          </li>
        </ul>
      </aside>
    </section>

    <section>
      <p className="font-extrabold text-green-600 text-5xl">
        Tecnología háptica
      </p>

      <div className="grid grid-cols-3 gap-4">
        <a
          href="https://es.dreamstime.com/tel%C3%A9fono-m%C3%B3vil-que-vibra-o-suena-el-icono-plano-del-vector-para-los-apps-y-las-p%C3%A1ginas-web-image144600676"
          target="_blank"
          rel="noreferrer"
          style={{ width: '80%', height: '80%' }}
        >
          <img src={images.Smartphone} alt="Smartphone" />
        </a>

        <a
          href="https://www.amazon.com/-/es/Xbox-Core-Controller-Robot-White/dp/B08DF26MXW"
          target="_blank"
          rel="noreferrer"
          style={{ width: '80%', height: '80%' }}
        >
          <img src={images.Joystick} alt="Xbox Controller" />
        </a>

        <a
          href="https://www.automate.org/userAssets/riaUploads/image/RIA-CR-Blog-Nov-T2-BLOG(1).jpg"
          target="_blank"
          rel="noreferrer"
          style={{ width: '80%', height: '80%' }}
        >
          <img src={images.RoboticHand} alt="Xbox Controller" />
        </a>
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
      <p className="font-extrabold text-green-600 text-5xl">
        Limitaciones al diseñar háptica
      </p>

      <ul className="text-gray-600 text-4xl space-y-6">
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
