import React from 'react';
import posed from 'react-pose';
import Slider from '../components/sliderhome';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Objetive from '../components/objetive';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';
import ReadMoreReact from 'read-more-react';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


export default () => (
  <ListContainer>
      <Item className="jumbotron jumbomain">
          <Slider />
          <div className="icon-scroll-wraper">
            <div className="icon-scroll">
              <div className="icon-scroll-screen"></div>
            </div>
          </div>
      </Item>

      <div  className='col-12 text-center arriba' >
          <div className='heading'>Nuestra propuesta pedagógica
           </div>
                <div className='propuesta'>
                <ReadMoreReact   text={"La propuesta pedagógica de La Institución Educativa Privada “Amado de Dios” es: tener como propósito mejorar el nivel de aprendizaje, según los resultados precisados en el diagnóstico que responde a las características, necesidades e intereses de los estudiantes y la implementación del enfoque formatico, Desde este enfoque, la evaluación es un proceso sistemático en el que se recoge y valora información relevante acerca del nivel de  desarrollo de las competencias en cada estudiante, con el fin de contribuir oportunamente su aprendizaje, acción pedagógica expresada en la implementación del Currículo Nacional de la Educación Básica (CNEB) Y EL PCI de la institución. Se plantean los compromisos de gestión escolar, los enfoques transversales, las orientaciones para el proceso de enseñanza y aprendizaje, teorías pedagógicas, las orientaciones pedagógicas para el desarrollo de competencias, los principios psicopedagógicos, los perfiles de los actores, la diversificación curricular, demandas educativas y sistema de evaluación, elementos que guiarán y orientarán el proceso de enseñanza, aprendizaje y la toma de decisiones sobre como mejorar las condiciones de aprendizaje que parten de los saberes y valores de la cultura local y los articulan con nuevos conocimientos."}
                              min={80}
                              ideal={100}
                              max={200}
                              readMoreText="haga clic aquí para leer más..."/>
                </div>
          </div>
          <Objetive/>

    <Bannercontact/>
    <Pricing />
    <Testimony />
    <Footer />

  </ListContainer>
);
