import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';

const mensaje = {
  marginTop: '100px'
}
const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


export default () => (
<ListContainer style={mensaje}>

  <section className='container-fluid pt-0'>
        <div className='row m-10-hor'>

          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/business-woman-explaining-plan-of-work-in-conferen-TEQY3JM.JPG?alt=media&token=5c96bee2-087c-48de-abd3-33d0b4b792d6" className="imgslickz" alt="#"/>
          </div>


          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
              <div className="subheading">.....................</div>
              <div className="heading">
                Mensaje de la directora
              </div>
              <p className="mt-3">
              Estimada familia amadina: <br/>
              <br/>
                Estas líneas son para presentarme como Directora del CEGNE Amado de Dios
                 y ponerme a disposición de la Comunidad Educativa.
                Espero que mi trabajo, que asumo con la enorme ilusión y 
                responsabilidad, que conlleva incorporarse a un Proyecto como del 
                CEGNE Amado de Dios, sea útil y contribuya al mantenimiento y 
                ejecución de los objetivos, cuyo fin es lograr el desarrollo integral
                 de los y las estudiantes, basados en el desarrollo de las 
                 potencialidades, capacidades, actitudes y valores fundamentales.

              </p>
              <Link className='btn' to="">
                <span>Sober nosotros</span>
              </Link>
            </div>
          </div>


        </div>
  </section>
</ListContainer>

);
