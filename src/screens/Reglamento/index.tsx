import React from 'react';

import Navbar from 'screens/Navbar';
import Shortcut from 'screens/Shortcut/index,';

import styles from './styles.module.scss';

function Reglamento() {
  return (
    <div>
      <Navbar />
      <Shortcut />
      <div className={styles.componentContainer}>
        <div className={styles.container}>
          <div className={styles.reglamento}>
            <div className={styles.administradores}>1) De la creación de Personajes.</div>
          </div>
          <div className={styles.reglamento1}>
            <p className={styles.texto}>
              1.1) No serán permitidos nombres que aludan a la discriminación o al racismo, como así tampoco
              ningún nombre que contenga insultos hacia una persona o clase social.
            </p>
            <p className={styles.texto}>
              1.2) No se permitirán nombres con más de 1 espacio entre letra o palabra
            </p>
            <p className={styles.texto}>
              1.3) Estan terminantemente prohibidos los nombres que tengan semejanzas con los utilizados por
              los GameMasters Pena: Los nombres inválidos pueden ser solucionados mediante un cambio de
              nombre, o si se trata de un insulto hacia algun miembro del Staff puede llegar hasta el Ban del
              personaje.{' '}
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>2) De la manera de tratar</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              2.1) Los insultos y agresiones dentro del juego hacia otros usuarios no serán penados salvo que
              aludan a la discriminación racial o étnica.{' '}
            </p>
            <p className={styles.texto}>
              2.2) Cualquier insulto a un miembro del Staff es considerado una pena gravísima.{' '}
            </p>
            <p className={styles.texto}>
              2.3) El GameMaster tiene el derecho de exigir respeto al usuario como asi mismo el usuario tiene
              el derecho de exigirlo hacia el GM. No obstante, cualquier falta de respeto es considerada una
              falta.{' '}
            </p>
            <p className={styles.texto}>
              2.4) El Mal uso del comando /DENUNCIAR esta terminantemente prohibido. Pena: La mala manera de
              hablar puede ser penada desde el Silencio del Personaje, hasta la cárcel de 30 minutos. Sin
              embargo, una grave falta de respeto/insulto hacia un GM puede llevar al Baneo del Personaje. El
              Mal uso del Denunciar puede ir desde el Silencio del Personaje hasta la Carcel de 60 minutos,
              siempre y cuando no haya un Insulto hacia un miembro del Staff, lo que lleva al Ban.{' '}
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>3) De la interrupción del normal funcionamiento del juego</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              3.1) Cualquier interrupcion al trabajo del GameMaster, ya sea interrumpir en consulta, no dejar
              leer, etc es considerada una falta.
            </p>
            <p className={styles.texto}>
              3.2) La molestia en las ciudades o en salas de Torneo equipando y desequipando objetos, tirando
              seguidamente hechizos molestos, hablar de manera deliberada, etc. Puede ser considerada una
              falta por el Game Master.
            </p>
            <p className={styles.texto}>
              3.3) El robo de NPCs NO es considerado Ilegal. Pena: Este tipo de ilegalidades puede llevar
              hasta una prisión de 60 minutos.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>4) De los piquetes</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              4.1) El uso de Elementales y otras invocaciones para no dejar escapar a alguién NO es
              considerado ilegal, ya que involucra a una táctica de juego.
            </p>
            <p className={styles.texto}>
              4.2) Utilizar Fantasmas para encerrar a un usuario NO es considerado una falta, ya que cualquier
              usuario vivo puede mover al fantasma.
            </p>
            <p className={styles.texto}>
              4.3) Personas vivas encerrando a otra persona viva NO es considerado una falta.
            </p>
            <p className={styles.texto}>
              4.4) El uso de NPCs Hostiles para atacar o encerrar a un Usuario vivo indefenso es considerado
              una táctica de juego, por lo tanto es válido. Pena: No existe pena por piquete.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>5) De los Programas Externos</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              5.1) Están terminantemente prohibidos cualquier tipo de programa que facilite la jugabilidad, ya
              sean: Macros de U, Auto Clickers, Editores de Paquetes, Radares, Auto Removedores, etc.
            </p>
            <p className={styles.texto}>
              5.2) Esta prohibido la utilización de macros inasistidos externos al juego para facilitar todo
              tipo de trabajo o la jugabilidad.
            </p>
            <p className={styles.texto}>
              5.3) Los programas utilizados para enviar mensajes de Habla están prohibidos. Pena: El uso de
              cualquiera de los programas descriptos anteriormente, está penado con el BAN del Personaje.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>6) De los Game Masters</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              6.1) Está totalmente prohibido pedir oro, objetos, nivel y demás a un GM.
            </p>
            <p className={styles.texto}>
              6.2) Se toma como una falta de respeto hacia un GM revelar su identidad, sea verdad o sea
              mentira.
            </p>
            <p className={styles.texto}>
              6.3) La acusación de corrupción es ilegal siempre y cuando se demuestre lo contrario o si el
              usuario carece de pruebas.
            </p>
            <p className={styles.texto}>
              6.4) Quien utilice el comando /GM debe tener en mente la pregunta y que tenga un mínimo de
              lógica.{' '}
            </p>
            <p className={styles.texto}>
              6.5) Si un Game Master sanciona a un usuario, sólo él podrá unbanearlo, o un Game Master de
              mayor jerarquía que el que ejerció el BAN. Pena: Dependiendo del Game Master, la pena puede ir
              desde el silencio del personaje, pasando por la cárcel, hasta el BAN del personaje.{' '}
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>7) Del abuso de bugs</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              7.1) Descubrir un error en el juego y utilizarlo para el provecho propio es considerado una
              ilegalidad.
            </p>
            <p className={styles.texto}>
              7.2) Reportar un Bug, puede traer beneficios al usuario, dependiendo la gravedad del Bug y la
              certeza con que fue reportado. Pena: El abuso de un Bug puede ir desde el Ban de TODOS los
              personajes del usuario, o el usuario mismo, hasta el BAN del clan del usuario.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>8) De los Torneos</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              8.1) Sólo será permitida la solicitud para participar que el Game Master indique. Será penado
              aquel usuario que insista en este sentido.
            </p>
            <p className={styles.texto}>
              8.2) Los duelos serán a 1, salvo la final que será llevada a cabo al mejor de 3.
            </p>
            <p className={styles.texto}>
              8.3) Las pociones Druidas no están permitidas salvo que el Game Master indique lo contrario.
            </p>
            <p className={styles.texto}>
              8.4) Los premios de los torneos son elegidos por el Game Master que lo organice. Si no es
              avisado nada, los Premios son Trofeos para el primer y segundo puesto solamente.
            </p>
            <p className={styles.texto}>
              8.5) Aquellos participantes que se vayan del torneo sin su respectivo trofeo SE QUEDARÁN SIN EL
              MISMO. Una vez fuera del mapa donde se realizó el torneo no podrá pedir su trofeo.
            </p>
            <p className={styles.texto}>
              8.6) Queda terminantemente prohibido solicitar mediante el comando de ayuda (/gm) o Denunciar el
              pedido de realización de torneos y eventos.
            </p>
            <p className={styles.texto}>
              8.7) El organizador puede limitar en tiempo los duelos, el torneo o declarar la cancelación o
              reiniciación del mismo en cualquier momento.
            </p>
            <p className={styles.texto}>
              8.8) En el momento de realizar un Triangular, el Game Master debe explicar a los usuarios la
              manera a realizarse antes de hacerlo y los usuarios no tienen derecho a quejas luego de
              finalizado.
            </p>
            <p className={styles.texto}>
              8.9) Está terminantemente prohibido luego de morir en torneo, insultar al GameMaster, cuestionar
              temas de balance, acusar por Cheats, o todo tipo de cosas que alguien suele hacer al morir en
              torneo. Pena: El no cumplimiento de estos puntos puede ser penado desde el Silencio del
              Personaje Hasta carcel de 60 minutos. Sin embargo, un insulto agravado a un GM puede ser penado
              con BAN.{' '}
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>9) De las Facciones</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              9.1) Está terminantemente prohibido alternar entre la matanza de dos o más usuarios para
              incrementar usuarios matados, lo que facilita el aumento de Jerarquía.
            </p>
            <p className={styles.texto}>
              9.2) Cualquier intento o pedido de ayuda para aumentar usuarios matados es considerado una pena.
              Pena: El no cumplimiento de estos puntos es penado con la expulsión del personaje de su debida
              Facción.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>10) De las Antifacciones</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              10.1) Un ciudadano en compañía de un criminal NO es considerado una Antifacción.{' '}
            </p>
            <p className={styles.texto}>
              10.2) Un ciudadano con un miembro del caos SI es considerado una Antifacción.
            </p>
            <p className={styles.texto}>
              10.3) Un criminal con un miembro de la Armada Real SI es considerado una Antifacción.
            </p>
            <p className={styles.texto}>
              10.4) La compañía de dos miembros de facciones diferentes SI es considerado una Antifacción.
              Pena: Una antifacción es penado con una Advertencia. A las dos advertencias el/los usuario(s)
              pierden el derecho de pertenecer al Concilio de su facción. A las tres advertencias el usuario
              es expulsado de su facción.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>10) De las Antifacciones</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              11.1) Está prohibido utilizar dos clientes en una misma computadora.
            </p>
            <p className={styles.texto}>
              11.2) Un usuario podrá utilizar dos o más computadoras, una para jugar y las otras para
              trabajar, siempre y cuando el personaje que está realizando el trabajo (minar, talar, etc.)
              utilice el Macro interno de CucsiAO (que se activa presionando F10).
            </p>
            <p className={styles.texto}>
              11.3) El uso de macros externos para el trabajo, esta terminantemente prohibido como indica el
              punto 5.2 Pena: El game master que encuentre un personaje talando o minando con un programa
              externo, será baneado inmediatamente. Los personajes con la misma IP serán advertidos e
              investigados.
            </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>12) Otras aclaraciones</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>
              12.1) El GameMaster tiene derecho en todo momento de revisar tus procesos, Pestañas, Ventanas,
              FPS, etc. Como así tambien la virtud de Cerrar algún proceso que el GameMaster considere
              malicioso para la correcta jugabilidad de CucsiAO.
            </p>
            <p className={styles.texto}>12.2) Los gráficos editados están permitidos.</p>
            <p className={styles.texto}>
              12.3) El único identificador personal existente en CucsiAO es el e-mail que se coloca en el
              momento de la creación del personaje, y el cual lo habilita para cualquier tipo de trámite a
              realizar ante el Staff de CucsiAO. Bajo ninguna circunstancia se podrán recuperar personajes que
              tengan mail inexistente (a@a.com) o erróneo (asdasd@hotmail.com). Altamente recomendado colocar
              un e-mail verdadero, y al que se tenga acceso, a la hora de Crear un Personaje.
            </p>
            <p className={styles.texto}>
              12.4) La pregunta y la Respuesta secreta son importantísimas a la hora de Recuperar un
              personaje. Se exige colocar una Pregunta y respuesta válida, ya que el staff no acepta reclamos
              y no hay forma de cambiarlas.
            </p>
            12.5) Los administradores tienen derecho a obtener una foto instantánea de la pantalla de
            cualquier usuario que esté jugando CucsiAO en cualquier momento.{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reglamento;
