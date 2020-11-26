import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}
const center={
    textAlign:'center',
    fontSize: '25px'
}
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
    <section className='container-fluid ' 
    style={{backgroundImage: `url(${''})`}}>
       <div className='heading' style={center}>Objetivos Planteados en el PEI
           </div>
      <div className='row m-10-hor'>
        <div className='testimony'>
          <Slider {...settings}>

            <CustomSlide className='itm' index={1}>
              <div className='blockquote'>
        
                <div className="conesti">
                  <p>
                  1. Implementar el taller de francés para los estudiantes de la IEP para que logren un manejo básico de ese idioma.
(Al 2021 el 100% de los alumnos de 2° de primaria a 5° de secundaria logren un manejo básico de idioma francés)
                  </p>
                  <div className="bytesti">
  
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className='blockquote'>
        
                <div className="conesti">
                  <p>
                  2. Continuar generando las condiciones que garanticen el acceso y permanencia en el sistema educativo.
(Al 2021 lograr una retención interanual del 100% con respecto al año anterior)
                  </p>
                  <div className="bytesti">
                 
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className='blockquote'>
        
                <div className="conesti">
                  <p>
                  3. Capacitar a los docentes en las rúbricas de evaluación.
(Al 2021 lograr que el 100% de los docentes capacitados demuestren su eficacia en la evaluación con rúbricas)
                  </p>
                  <div className="bytesti">
                 
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
        
                <div className="conesti">
                  <p>
                  4. Fortalecer los espacios que garanticen el apoyo a los padres de familia para mejorar el proceso de aprendizaje.
(Al 2021 realizar 5 escuelas de Familia al año)

                  </p>
                  <div className="bytesti">
            
                  </div>
                </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
        
                <div className="conesti">
                  <p>
                  5. Fortalecer a los docentes en el manejo los espacios que garanticen una adecuada gestión de la convivencia escolar.
(Al 2021 todos los docentes de la IEP manejen estrategias de resolución de conflicto)

                  </p>
                  <div className="bytesti">
            
                  </div>
                </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
        
                <div className="conesti">
                  <p>
                  6. Mejorar los aprendizajes de los estudiantes a través de la capacitación de nuestros docentes en los enfoques curriculares para lograr el nivel del logro previsto.
(Al 2021 mejora de los aprendizajes de los alumnos de primaria en un 16% /Al 2021 mejora de los aprendizajes de los alumnos de secundaria en un 27%)
                  </p>
                  <div className="bytesti">
            
                  </div>
                </div>
              </div>
            </CustomSlide>
          </Slider>
        </div>
      </div>
    </section>
    );
  }
}
