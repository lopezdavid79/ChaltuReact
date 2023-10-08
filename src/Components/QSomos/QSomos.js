import React from 'react';
import './QSomos.css'
function QSomos() {
  return (
    <div className="container mt-5 nosotros">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-6">Quiénes Somos</h2>
          <p className='qsomos'>
            Somos Chaltu Bags, una empresa argentina conformada por un equipo de
            jóvenes altamente innovadores y creativos que se han dedicado a
            integrarse a la venta por internet con el objetivo de satisfacer al
            cliente al acceso de nuestros productos. Tenemos como objetivo
            de/stacar dentro del mercado nacional e internacional en base a un
            producto de buena calidad cumpliendo con las necesidades de nuestra
            distinguida clientela, para ello aplicaremos altos estándares de
            calidad.
          </p>

          <h2 className="text-center mt-10">Misión</h2>
          <p className='mision'>
            Proporcionar accesorios según las exigencias del mercado, cumpliendo
            con los estándares adecuados a nivel nacional como internacional,
            desarrollar permanentemente modelos acordes a la temporada y las
            tendencias.
          </p>

          <h2 className="text-center mt-4">Visión</h2>
          <p className='vision'>
            Crecer como empresa para convertirnos en una empresa líder a nivel
            nacional e internacional, generando oportunidad de desarrollo tanto
            para la industria argentina como para nuestros colaboradores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QSomos;
