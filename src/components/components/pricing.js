import React from 'react';
import ListContainer from './mensaje'

export default () => (
  <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-12 text-center'>

          <div className='heading'>¿Quienes Somos?</div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
              Somos una institución educativa con 29 años de experiencia brindando un Servicio
               Educativo que promueve el desarrollo integral y pleno de nuestros estudiantes. <br/>
               <br/>
               Buscamos formar personas autónomas y dialogantes, que aprendan a pensar críticamente,
                desarrollen su sensibilidad, dando énfasis en la formación de valores y en educación
                 ciudadana para que pongan en ejercicio sus deberes y derechos convirtiéndolos
                  en agentes de cambio para una sociedad más justa.
              </p>
            </div>
          </div>
        </div>

        
        </div>
        <ListContainer/>
    </section>
  
);
