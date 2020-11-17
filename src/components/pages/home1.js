import React from 'react';
import posed from 'react-pose';
import { Link } from '@reach/router';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 }, 
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export default () => (
  <ListContainer>
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/school-children-with-microscope-UR27XTN.jpg?alt=media&token=52f2c1e9-367f-4a0d-9c27-7603eb17a1a4'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mr-auto '>
                <div className='heading'>
                Educación Primaria
                </div>
                <div className='subheading'>
                Lunes a Viernes de 7:45 a. m. a 2:00 p. m.
                </div>
                <div className='content'>
                Nuestra institución es una entidad privada y de enseñanza mixta. Comprende los niveles de inicial, primaria y secundaria en el turno de la mañana. 
                </div>
                <div class="btn" onClick={()=> window.open("//google.com", "_blank")}>
                  <span>PROSPECTO INFORMATIVO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='subheading'>
            CEGNE
            </div>
            <div className='heading'>
            Amado de Dios
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
            Desarrollamos sus capacidades académicas, sociales y su sentido de responsabilidad. Asimismo incentivamos su pensamiento crítico, analítico y creativo para formar a los futuros líderes que nuestra sociedad necesita.
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Quisque vitae sodales lectus, 
              vel tristique risus faucibus.
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid p-0 black_more'>
        <div className='row m-10-hor'>

          <div className="col-md-6 pr-md-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
              <div className="subheading">Nuestras</div>
              <div className="heading">
              Áreas curriculares
              </div>
              <ul>
                <li>Matemáticas</li>
                <li>Comunicación</li>
                <li>Personal Social</li>
                <li>Ciencia y ambiente</li>
                <li>Educación física</li>
                <li>Ingles</li>
                <li>Arte y cultura</li>
              </ul>
            {/*
              <Link className='btn' to="">
                <span>Ver más detalles</span>
              </Link>
            */}
            </div>
          </div>


          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
              <div className="subheading">Nuestros</div>
              <div className="heading">
              Talleres y servicios  (2021)
              </div> 
              <ul>
                <li>Talleres: Pintura, Manualidades, Teatro y Oratoria</li>
                <li>Simulacros académicos</li>
                <li>Nivelación</li>
                <li>Círculo de estudio</li>
                <li>Taekwondo</li>
                <li>Danzas folclóricas</li>
                <li>Francés</li>
              </ul>
            { /* <Link className='btn' to="">
                <span>Más información</span>
              </Link>*/
              }
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/a-girl-painting-with-acrylic-paint-VR3LWD4.jpg?alt=media&token=ee4ef670-3d49-4ef0-a7c4-1c34412eb0fb" className="imgslickz" alt="#"/>
          </div>
      





          <div className="col-md-6 pr-md-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
              <div className="subheading">Departamento</div>
              <div className="heading">
              Psicopedagógico
              </div>
              <ul>
                <li>Evaluación con fines pedagógicos</li>
                <li>Orientaciones</li>
                <li>Personal Social</li>
                <li>Apoyos Socioemocionales</li>
                <li>Escuela de padres de familia</li>
           
              </ul>
            {/*
              <Link className='btn' to="">
                <span>Ver más detalles</span>
              </Link>
            */}
            </div>
          </div>
        </div>
    </section>

  
    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-12 text-center'>

          <div className='heading'>Nota:
           </div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
              "Para acceder a los instrumentos de gestión de nuestra institución educativa solicítelo a través de nuestro correo institucional"
              </p>
             
              <Mailto email="iepamadodedios@hotmail.com" subject="Solicito acceso a los instrumentos de gestión" body="Buenos días">
             
                <span className='btn'>iepamadodedios@hotmail.com</span>
            </Mailto>
            </div>
          </div>
        </div>
        </div>
       
    </section>



    <Pricing />
    <Testimony />
    <Footer />

  </ListContainer>
);
