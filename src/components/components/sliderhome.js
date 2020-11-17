import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
  {
    title: "Bienvenidos a la familia amadina!",
    description:
      "Somos una institución educativa con 29 años de experiencia brindando un Servicio Educativo que promueve el desarrollo integral y pleno de nuestros estudiantes",
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/school-kids-studying-in-the-classroom-at-school-YV4SJFQ.jpg?alt=media&token=62019fb1-fc72-40ea-a83b-38c1167412d3"
  },
  {
    title: "Nuestra misión institucional",
    description:
      "Lograr que todas y todos los estudiantes de la I.E.P. culminen la escolaridad de los niveles de inicial, primaria y secundaria exitosamente para convertirse en ciudadanos que aporten a la sociedad y forjen un mejor futuro.",
  
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/group-of-school-kids-raising-hands-in-classroom-PTEJETQ.jpg?alt=media&token=5a47606d-4375-417a-a1b3-7a1c32ce4e53"
  },
  {
    title: "Nuestra visión compartida",
    description:
      "Ser reconocidos como una IEP que contribuye a que todos nuestros estudiantes desarrollen su potencial desde el nivel inicial hasta el nivel secundario.",
   
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/schoolkids-raising-their-hands-in-classroom-8UVQRHU.jpg?alt=media&token=8d6ca77e-4e21-4f55-97a0-71f036db46ba"
  }
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
               {/*
                     <button onClick={()=> window.open(item.link, "_blank")}>
                     <span>
                       {item.button}
                     </span>
                   </button> 
               */ }
                </div>
              </div>
            ))}
        </Slider>
);
