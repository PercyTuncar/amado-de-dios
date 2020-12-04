import React, { useState } from "react";
import { useForm } from 'react-hook-form';
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

const style={
  textAlign:'center',
  marginTop:'50px'
}
const URL = "https://jsonplaceholder.typicode.com/posts";
const required = "This field is required";

export default () => {

  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm mt-5">
      <h3>Awesome! Your message was sent.</h3>
    </div>
  );

  const showForm = (
    <form className='formcontact' onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          type="text"
          name="Nombre"
          id="name"
          placeholder="Ingrese su nombre"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.name && <div className="msg-error">{errors.name.message}</div>}
      </label>

      <label htmlFor="email">
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
      </label>

      <label htmlFor="question">
        <h5>Mensaje</h5>
        <textarea
          ref={register({ required })}
          name="question"
          id="question"
          rows="3"
          placeholder="Escribe tu mensaje"
          disabled={isSubmitting}
        />
        {errors.question && (
          <div className="msg-error">{errors.question.message}</div>
        )}
      </label>

      <div className="submit-wrapper">
        <button type="submit" disabled={isSubmitting}>
          <span>Enviar</span>
        </button>
      </div>
    </form>
  );

  return (
    <ListContainer>
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Profesor-en-clases.webp?alt=media&token=e8e21434-803a-42c3-b90d-b0fa5ef777a4'})`}}>
        <div className='mainbreadcumb'>
        
        </div>
      </Item>
      <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Libro de reclamaciones</h1>
              </div>
              <div className='col-md-6'>
                <div className='list'>
                  <Link className='link' to="/home">Inicio</Link>
                  <span className='dash'>/</span>
                  <span>Libro de reclamaciones</span>
                </div>
              </div>
            </div>
          </div>
      <Item className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <div className="form-side">
              <h2>INICIAL y PRIMARIA</h2>
              <p>Av Aviación Mz B Lt 26 Urb Papa Juan XXIII San Borja</p>
              <ul>
                <li>RD de funcionamiento nivel Inicial N° 000482</li>
                <li>RD de funcionamiento nivel Primaria N° 00155</li>
              </ul>
                <div class="btn" onClick={()=> window.open("//forms.gle/pBZk3XCLTpbPfWB26", "_blank")}>
                  <span>Ver libro de reclamaciones</span>
                </div>
            </div>
          </div>

          <div className='col-md-6 pl-md-5'>
          <div className="form-side">
              <h2>SECUNDARIA</h2>
              <p>Av Aviación Mz B Lt 6 Urb Papa Juan XXIII San Borja</p>
              <ul>
                <li>RD de funcionamiento nivel Secundaria N° 00155</li>
              </ul>
              <div class="btn" onClick={()=> window.open("//forms.gle/pBZk3XCLTpbPfWB26", "_blank")}>
                  <span>Ver libro de reclamaciones</span>
                </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 pl-md-5 center' style={style}>
        <h4>Más información</h4>
        <p>Señor padre de familia los reportes serán respondidos en la brevedad 
          posible con la finalidad de hacer prevalecer el
          bienestar de toda la comunidad Amadina. </p>
        </div>
      </Item>

      <Testimony />
      <Footer />
    </ListContainer>
  );
};
