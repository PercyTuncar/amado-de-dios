import React from 'react';
import { Link } from '@reach/router';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/group-of-students-learning-in-classroom-PHLQZRZ.jpg?alt=media&token=0a74012d-3921-4755-b4ac-45905b94f34f'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Nuestros valores</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Inicio</Link>
              <span className='dash'>/</span>
              <span>Valores</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-12 text-center'>

          <div className='heading'>¿Qué valores practicamos en nuestro trabajo diario?
           </div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
            
               Compartimos con todas las instituciones 
               educativas los principios de: ética, 
               equidad, inclusión, democracia, interculturalidad, conciencia
                ambiental, creatividad e innovación, valores que ayuden a regular la convivencia. 
              </p>
            </div>
          </div>
        </div>

        
        </div>
       
    </section>


  <section className='container-fluid'>
        <div className='row m-10-hor'>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Valores de la IEP</div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Responsabilidad</li>
              <li><i className="fa fa-check"></i> Respeto</li>
              <li><i className="fa fa-check"></i> Justicia</li>
              <li><i className="fa fa-check"></i> Solidaridad</li>
              <li><i className="fa fa-check"></i> Superación personal</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Valores</div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Libertad y responsabilidad, diálogo y concertación</li>
              <li><i className="fa fa-check"></i> Respeto por las diferencias, equidad en la enseñanza</li>
              <li><i className="fa fa-check"></i> Respeto a la identidad cultural, justicia, dialogo intercultural</li>
              <li><i className="fa fa-check"></i> Igualdad y dignidad, justicia, empatía</li>
              <li><i className="fa fa-check"></i> Solidaridad planetaria y equidad intergeneracional</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Enfoques</div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Enfoque de derechos</li>
              <li><i className="fa fa-check"></i> Enfoque inclusivo o de atención a la diversidad</li>
              <li><i className="fa fa-check"></i> Enfoque intercultural</li>
              <li><i className="fa fa-check"></i> Enfoque de igualdad de género</li>
              <li><i className="fa fa-check"></i> Enfoque ambiental</li>
            </ul>
          </div>
        </div>

        </div>
    </section>
  
  <Testimony/>
  <Footer />
</div>

);
