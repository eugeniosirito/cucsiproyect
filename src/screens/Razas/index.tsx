/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import humano from '../LogIn/assets/humano.jpg';
import elfo from '../LogIn/assets/elfo.jpg';
import elfoscuro from '../LogIn/assets/elfoscuro.jpg';
import gnomo from '../LogIn/assets/gnomo.jpg';
import enano from '../LogIn/assets/enano.jpg';
import orco from '../LogIn/assets/orco.jpg';
import verdeD from '../LogIn/assets/verdeD.png';
import amarillaD from '../LogIn/assets/amarillaD.png';
import verde from '../LogIn/assets/potverde.jpg';
import amarilla from '../LogIn/assets/potamarilla.jpg';

import styles from './styles.module.scss';

function Razas() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.listaRazas}>
          <div className={styles.razasDiv}>
            <h1 className={styles.razasTitulo}>Razas</h1>
          </div>
          <br />
          <p className={styles.razasParrafo}>
            En estos tiempos de la edad media, hasta el momento se conocen 6 diferentes razas que habitan las
            tierras de CucsiAO.
          </p>
          <div className={styles.contenedorCaras}>
            <div className={styles.cara}>
              <h3 className={styles.nombreCara}>Humano</h3>
              <img className={styles.imgCara1} src={humano} />
            </div>
            <div className={styles.cara}>
              <h3 className={styles.nombreCara}>Elfo</h3>
              <img className={styles.imgCara2} src={elfo} />
            </div>
            <div className={styles.cara}>
              <h3 className={styles.nombreCara}>Elfo Oscuro</h3>
              <img className={styles.imgCara3} src={elfoscuro} />
            </div>
            <div className={styles.cara}>
              <h3 className={styles.nombreCara}>Gnomo</h3>
              <img className={styles.imgCara4} src={gnomo} />
            </div>
            <div className={styles.cara}>
              <h3 className={styles.nombreCara}>Enano</h3>
              <img className={styles.imgCara5} src={enano} />
            </div>
            <div className={styles.cara}>
              <h3 className={styles.nombreCara}>Orco</h3>
              <img className={styles.imgCara6} src={orco} />
            </div>
          </div>
          <p className={styles.razasParrafo}>
            Cada una de estas razas, tiene una característica que le da ciertas ventajas y desventajas
            respecto a otras razas, según la clase u oficio del personaje.
          </p>
        </div>
        <div className={styles.tablaRazas}>
          <div className={styles.tablaTitulo}>
            <h1 className={styles.atributos}>Atributos</h1>
          </div>
          <p className={styles.atributosContenido}>
            {' '}
            Según la raza que elijas, tus atributos iniciales se veran modificados de la siguiente manera:
          </p>
          <div className={styles.tablaAtributos}>
            <table>
              <tr>
                <th />
                <th>Raza/Atributo</th>
                <th>Fuerza</th>
                <th>Agilidad</th>
                <th>Inteligencia</th>
                <th>Carisma</th>
                <th>Constitucion</th>
              </tr>
              <tr>
                <td className={styles.imgTd1}>
                  <img src={humano} className={styles.img} />
                </td>
                <td>Humano</td>
                <td>+2</td>
                <td>+2</td>
                <td>-1</td>
                <td>0</td>
                <td>+2</td>
              </tr>
              <tr>
                <td className={styles.imgTd2}>
                  <img src={elfo} className={styles.img} />
                </td>
                <td>Elfo</td>
                <td>-2</td>
                <td>+4</td>
                <td>+3</td>
                <td>+1</td>
                <td>-1</td>
              </tr>
              <tr>
                <td className={styles.imgTd3}>
                  <img src={elfoscuro} className={styles.img} />
                </td>
                <td>Elfo Oscuro</td>
                <td>+3</td>
                <td>+3</td>
                <td>+2</td>
                <td>-1</td>
                <td>0</td>
              </tr>
              <tr>
                <td className={styles.imgTd4}>
                  <img src={gnomo} className={styles.img} />
                </td>
                <td>Gnomo</td>
                <td>-4</td>
                <td>+5</td>
                <td>+5</td>
                <td>+2</td>
                <td>-2</td>
              </tr>
              <tr>
                <td className={styles.imgTd5}>
                  <img src={enano} className={styles.img} />
                </td>
                <td>Enano</td>
                <td>+3</td>
                <td>-1</td>
                <td>-6</td>
                <td>-1</td>
                <td>+3</td>
              </tr>
              <tr>
                <td className={styles.imgTd6}>
                  <img src={orco} className={styles.img} />
                </td>
                <td>Orco</td>
                <td>+5</td>
                <td>-2</td>
                <td>-7</td>
                <td>-2</td>
                <td>+4</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.tablaRazas}>
          <div className={styles.tablaTitulo}>
            <h1 className={styles.atributos}>Ventajas en Combate</h1>
          </div>
          <p className={styles.atributosContenido}>
            {' '}
            Ademas, cada raza tendrá ciertas ventajas y desventajas a la hora de combatir:
          </p>
          <div className={styles.tablaAtributos}>
            <table>
              <tr>
                <th />
                <th>Raza/Atributo</th>
                <th>
                  <img src={verde} className={styles.img} />
                </th>
                <th>
                  <img src={amarilla} className={styles.img} />
                </th>
                <th>
                  <img src={verdeD} className={styles.img} />
                </th>
                <th>
                  <img src={amarillaD} className={styles.img} />
                </th>
                <th>Evasión</th>
                <th>%Golpe</th>
                <th>Daño fis</th>
                <th>%Arco</th>
                <th>Daño Arco</th>
              </tr>
              <tr>
                <td className={styles.imgTd1}>
                  <img src={humano} className={styles.img} />
                </td>
                <td>Humano</td>
                <td>32</td>
                <td>32</td>
                <td>34</td>
                <td>34</td>
                <td>+0.01</td>
                <td>+0.03</td>
                <td>+0.02</td>
                <td>+0.02</td>
                <td>+0.01</td>
              </tr>
              <tr>
                <td className={styles.imgTd2}>
                  <img src={elfo} className={styles.img} />
                </td>
                <td>Elfo</td>
                <td>31</td>
                <td>34</td>
                <td>33</td>
                <td>36</td>
                <td>+0.03</td>
                <td>+0.02</td>
                <td>+0</td>
                <td>+0.08</td>
                <td>+0.02</td>
              </tr>
              <tr>
                <td className={styles.imgTd3}>
                  <img src={elfoscuro} className={styles.img} />
                </td>
                <td>Elfo Oscuro</td>
                <td>33</td>
                <td>33</td>
                <td>35</td>
                <td>35</td>
                <td>+0.02</td>
                <td>+0.03</td>
                <td>+0.04</td>
                <td>+0.04</td>
                <td>+0.04</td>
              </tr>
              <tr>
                <td className={styles.imgTd4}>
                  <img src={gnomo} className={styles.img} />
                </td>
                <td>Gnomo</td>
                <td>30</td>
                <td>35</td>
                <td>32</td>
                <td>37</td>
                <td>+0.04</td>
                <td>+0.01</td>
                <td>+0</td>
                <td>+0.04</td>
                <td>+0.06</td>
              </tr>
              <tr>
                <td className={styles.imgTd5}>
                  <img src={enano} className={styles.img} />
                </td>
                <td>Enano</td>
                <td>34</td>
                <td>31</td>
                <td>36</td>
                <td>33</td>
                <td>+0.01</td>
                <td>+0.06</td>
                <td>+0.06</td>
                <td>+0.01</td>
                <td>+0.06</td>
              </tr>
              <tr>
                <td className={styles.imgTd6}>
                  <img src={orco} className={styles.img} />
                </td>
                <td>Orco</td>
                <td>35</td>
                <td>30</td>
                <td>37</td>
                <td>32</td>
                <td>+0</td>
                <td>+0.04</td>
                <td>+0.08</td>
                <td>+0</td>
                <td>+0.08</td>
              </tr>
            </table>
          </div>
        </div>
        <Link to="/manual">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Razas;
