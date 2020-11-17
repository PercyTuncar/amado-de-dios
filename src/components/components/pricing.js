import React from 'react';
import ListContainer from './mensaje'

export default () => (
  <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-12 text-center'>

          <div className='heading'>¿Qué valores practicamos en nuestro trabajo diario?
           </div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
              Practicamos los valores de 
              responsabilidad, respeto, justicia, solidaridad 
              y superación personal.  <br/>
               <br/>
               Compartimos con todas las instituciones 
               educativas los principios de: ética, 
               equidad, inclusión, democracia, interculturalidad, conciencia
                ambiental, creatividad e innovación, valores que ayuden a regular la convivencia. 
              </p>
            </div>
          </div>
        </div>

        
        </div>
        <ListContainer/>
    </section>
  
);
