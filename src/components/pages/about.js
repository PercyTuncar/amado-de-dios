import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
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


export default () => (
<ListContainer>
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/male-school-teacher-standing-in-an-elementary-scho-KC35YSL.jpg?alt=media&token=3e9f246f-5ef8-4622-9856-a64a3919dddb'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>¿Quienes Somos?</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Inicio</Link>
              <span className='dash'>/</span>
              <span>Sobre nosotros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Item>

  <Item className='container-fluid black'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='subheading'>
            Bienvenidos a la familia 
            </div>
            <div className='heading'>
            amadina!
            </div>
            <div className='col-md-10'>
            <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia.png?alt=media&token=ff1e043d-cc3f-45a8-b30e-68921dfa8bd5' alt='imgbanner' className='w-100 border-radius'/>
          </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Somos una institución educativa con 29 años de experiencia brindando 
              un Servicio Educativo que promueve el desarrollo integral y pleno de
              nuestros estudiantes, Buscamos formar personas autónomas y 
              dialogantes, que aprendan a pensar críticamente, desarrollen 
              su sensibilidad, dando énfasis en la formación de valores y 
              en educación ciudadana para que pongan en ejercicio sus 
              deberes y derechos convirtiéndolos en agentes de cambio 
              para una sociedad más justa.
            </div>
            <div className='content'>
            Contamos con una plana de docentes calificados, así como un Dpto. 
            Psicopedagógico, Talleres como Taekwondo, Francés en suma, enfocados
             en proporcionar a nuestros estudiantes una educación integral y en
              desarrollar sus potencialidades. Todo esto, sin dejar de lado
               una formación integral que fortalezca los aprendizajes 
               relacionados con el arte y la cultura, así como la práctica 
               de una educación física orientada hacia la salud y a disciplina 
               que se adquiere con la práctica del Taekwondo, respetando siempre 
               las características de los estudiantes desde una perspectiva
                intercultural, ambiental e inclusiva.
            </div>
          </div>

        </div>
  </Item>

  <section className='container-fluid pt-0'>
        <div className='row m-10-hor'>

          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/happy-caucasian-boy-in-graduation-cap-pointing-his-H6WR57A.jpg?alt=media&token=996da7a7-f6ed-409c-befb-08eeb8b7d558" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
              <div className="subheading">Nuestra misión institucional</div>
              <div className="heading">
              ¿Cuál es nuestra razón?
              </div>
              <p className="mt-3">
              Lograr que todas y todos los estudiantes de la I.E.P. culminen 
              la escolaridad de los niveles de inicial, primaria y 
              secundaria, afiancen los aprendizajes establecidos en el 
              currículo nacional y la propuesta pedagógica de la I.E.P. 
              y alcancen su desarrollo integral en espacios 
              seguros, inclusivos, de sana convivencia y libres 
              de violencia a fin de potencializar sus habilidades 
              para la vida y convertirlos en agente de cambio para la sociedad. 
              </p>
             {/* <Link className='btn' to="">
                <span>Ver malla curricular</span>
                </Link> */ }
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
              <div className="subheading">Nuestra visión compartida</div>
              <div className="heading">
              ¿A dónde nos gustaría llegar?
              </div>
              <p className="mt-3">
              Ser reconocidos como una IEP que contribuye a que todos
               nuestros estudiantes desarrollen su potencial
                desde el nivel inicial hasta el nivel secundario, logrando 
                no solo que accedan al mundo letrado, sino que manejen
                 en un nivel intermedio otro idioma, resuelven 
                 problemas, practican valores, saben seguir 
                 aprendiendo, se asumen como ciudadanos con derechos 
                 y responsabilidades, logrando con éxito su proyecto 
                 de vida y se conviertan en agentes de cambio que
                  contribuyen al desarrollo de sus familias, comunidades y 
                  del país, combinando su capital cultural y natural; y 
                  adaptándose a los diversos avances mundiales en concordancia 
                  con el perfil de egreso del CNEB y el Currículo Nacional, buscando 
                  responder a las exigencias de un mundo globalizado.
              </p>
              {/* <Link className='btn' to="">
                <span>Ver malla curricular</span>
              </Link> */}
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/picture-of-business-meeting-in-conference-room-29G4LQD.jpg?alt=media&token=273024de-5988-433c-bc57-02370e41820a" className="imgslickz" alt="#"/>
          </div>

        </div>
  </section>

  <Testimony />
  <Footer />
</ListContainer>

);
