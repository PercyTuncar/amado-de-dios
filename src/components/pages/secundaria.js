import React from 'react';
import posed from 'react-pose';

import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



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
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/group-of-school-friends-outdoors-lifestyle-and-aft-PLMN4VW-min.webp?alt=media&token=3569a918-0281-4e6f-90e6-88b3e165cc91'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mx-auto text-center '>
                <div className='heading'>
                Educación Secundaria
                </div>
                <div className='subheading'>
                Lunes a Viernes de 8:00 a. m. a 3:30 p. m.
                </div>
                <div className='content mx-auto'>
                Nuestra institución es una entidad privada y de enseñanza mixta.
                </div>
                   {/**
               *   <div class="btn" onClick={()=> window.open("//google.com", "_blank")}>
                  <span>PROSPECTO INFORMATIVO</span>
                </div>
               */}
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
           


            <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Objetivo N° 1
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Promover en los alumnos el desarrollo personal, el ejercicio
                    de la ciudadnía, la práctica de valores, la sociedad y el
                    conocimiento y su vinculación al mundo del trabajo en un
                    clima, de participación, libertad, respeto a Dios, patria y
                    familia.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Objetivo N° 2
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Fomentar en nuestros alumnos hábitos positivos a la
                    investigación, la lectura y práctica de valores.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Objetivo N° 3
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Promover en nuestros alumnos la práctica y participación
                    democrática, iniciándoles en los ejercicios de sus deberes y
                    derechos.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>


            </div>
          
          </div>

        </div>
    </section>

    <section className='container-fluid p-0 black_more'>
        <div className='row m-10-hor'>

          <div className="col-md-6 pr-md-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/utiles-escolaeres.webp?alt=media&token=154d3df9-c27f-4eb5-a720-86f832de6d6c" className="imgslickz" alt="#"/>
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
              Talleres y servicios  
              </div> 
              <ul>
                <li>Talleres: Pintura, Manualidades, Teatro y Oratoria (2021)</li>
                <li>Simulacros académicos</li>
                <li>Nivelación</li>
                <li>Círculo de estudio</li>
                <li>Taekwondo</li>
                <li>Danzas folklóricas</li>
                <li>Francés</li>
              </ul>
            { /* <Link className='btn' to="">
                <span>Más información</span>
              </Link>*/
              }
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/beautiful-teenage-girl-at-art-school-painting-on-e-GUWRMTA-min.webp?alt=media&token=617138cb-da02-4fd5-895f-6e352623f971" className="imgslickz" alt="#"/>
          </div>
      





          <div className="col-md-6 pr-md-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Depaartamento-psicopedagogico.webp?alt=media&token=d558b787-d8f7-404e-b833-f76f1156b6a2" className="imgslickz" alt="#"/>
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
        <div>
           <h2>Instrumentos de Gestión </h2>
           <ul><li>PEI   (Proyecto Educativo Institucional)</li></ul>
            <ul><li>PAT (Plan Anual del Trabajo)</li></ul>
            <ul><li>PCI   (Proyecto Curricular Institucional) </li></ul>
            <ul><li>RI     (Reglamento Interno) </li></ul>
           </div>
        <div className='col-12 text-center'>

          <div className='heading'>Nota:
           </div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
              "Para acceder a los instrumentos de gestión de nuestra institución educativa solicítelo a través de nuestro correo institucional"
              </p>
              <p>Hacer click aquí 👇</p>
              <Mailto email="iepamadodedios@hotmail.com" subject="Solicito acceso a los instrumentos de gestión" body="Buenos días">
             
                <span className='correo'>iepamadodedios@hotmail.com</span>
            </Mailto>
            </div>
          </div>
        </div>
        </div>
       
    </section>


    <Bannercontact/>
    <Pricing />
    <Testimony />
    <Footer />

  </ListContainer>
);