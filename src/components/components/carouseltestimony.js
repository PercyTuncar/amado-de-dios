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
    <section className='container-fluid  wraper-testimony' 
    style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/group-of-professional-successful-business-people-J67SEEN.jpg?alt=media&token=4d5aee09-091a-4bab-86a4-4ad235a503bc'})`}}>
      <div className='row m-10-hor'>
        <div className='testimony'>
          <Slider {...settings}>

            <CustomSlide className='itm' index={1}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  "Quiero agradecer al Colegio Amado de dios por haber sido mi primer lugar de enseñanza, donde los profesores motivan las mejores capacidades de cada uno.
                  </p>
                  <div className="bytesti">
                  Pedro Aramburu
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  "Estudiar en la escuela Amado de Dios ha sido una experiencia estimulante. Con un programa escolar enfocado en las ciencias humanas, ellos impulsan a los estudiantes al pensamiento crítico y la creatividad, haciendo de nosotros, los ex alumnos, verdaderos agentes y líderes de cambio".
                  </p>
                  <div className="bytesti">
                  Pedro Aramburu
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Agradezco al Colegio Amado de Dios por la formación cultural y la preparación académica que he recibido durante la primera etapa de mis estudios. La experiencia de compartir otras culturas y aprender con excelentes maestros, fue fundamental en mi formación."
                  </p>
                  <div className="bytesti">
                  Anna Sofia Pisani
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Agradezco al Colegio Amado de Dios por la formación cultural y la preparación académica que he recibido durante la primera etapa de mis estudios. La experiencia de compartir otras culturas y aprender con excelentes maestros, fue fundamental en mi formación."

                  </p>
                  <div className="bytesti">
                    Lauria, Guest
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
