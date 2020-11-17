import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Footer from '../components/footer';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});
const img1 = {
  backgroundImage:'url(https://i.imgur.com/3qchD6B.png)'
}
const img2 = {
  backgroundImage:'url(https://i.imgur.com/aMLi3Gx.jpg)'
}

export default () => (
<ListContainer>
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia.png?alt=media&token=ff1e043d-cc3f-45a8-b30e-68921dfa8bd5'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Historia</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Inicio</Link>
              <span className='dash'>/</span>
              <span>Historia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Item>


  <section className='container-fluid'>
        <div className='row m-10-hor'>

       
          <div className='col-md-12 centered'>
            <div>
              <div className="subheading">
              Reseña histórica del
              </div>
              <div className="heading">
               CEGNE Amado de Dios
              </div>
                <ul>
                La I.E.P.” Amado de Dios” es una institución fundada e implementada en 1991, por el promotor y director, sr. Florencio Amado Dávalos Calderón. Tiene como sede dos locales, uno en la Av. Aviación B-6 Juan XXIII, San Borja, donde funciona el nivel secundario y otro en la Av. Aviación B-26 Juan XXIII, San Borja, donde funcionan los niveles de inicial y primaria.
<br/>
<br/>
La I.E.P. “Amado de Dios” fue autorizada para funcionar por Resolución Ministerial  Nº 000155. 

Nuestra institución es una entidad privada y de enseñanza mixta. Comprende los niveles de inicial, primaria y secundaria en el turno de la mañana. 
<br/>
<br/>
Buscamos formar personas autónomas y dialogantes, que aprendan a pensar críticamente, desarrollen su sensibilidad, dando énfasis en la formación de valores y en educación ciudadana para que pongan en ejercicio sus deberes y derechos convirtiéndolos en agentes de cambio para una sociedad más justa.

El aprendizaje de idiomas extranjeros con un enfoque comunicativo, tanto en el idioma inglés como el francés así como el uso de la tecnología moderna, TICs, y de comunicación, son instrumentos indispensables para lograr una preparación de calidad, adecuada conscientemente a un mercado laboral actual y comprometida con el mejoramiento del entorno, en busca del desarrollo sostenible.
<br/>
<br/>
Todo esto, sin dejar de lado una formación integral que fortalezca los aprendizajes relacionados con el arte y la cultura, así como la práctica de una educación física orientada hacia la salud y a disciplina que se adquiere con la práctica del Tae kwon do, respetando siempre las características de los estudiantes desde una perspectiva intercultural, ambiental e inclusiva.

                </ul>
              {/**
               * <Link className='btn' to="/contact">
                <span>Leer más</span>
              </Link>
               */}
            </div>
          </div>
          
        </div>
    </section>



  <section className='container-fluid black_more'>
      <div className='row m-10-hor'>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/team1.jpg"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Descripoción</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/team2.jpg"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Descripoción</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/team3.jpg"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Descripoción</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/team4.jpg"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Descripoción</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  </section>

  <Bannercontact/>
  <Footer />
</ListContainer>

);
