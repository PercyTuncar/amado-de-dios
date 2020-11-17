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
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/male-school-teacher-standing-in-an-elementary-scho-KC35YSL.jpg?alt=media&token=3e9f246f-5ef8-4622-9856-a64a3919dddb'})`}}>
        <div className='mainbreadcumb'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Contacto</h1>
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
        </div>
      </Item>
      <Item className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <div className="form-side">
              <h2>Amado de DIos</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto cupiditate aperiam neque</p>
              {submitted ? showThankYou : showForm}
              {errors && errors.submit && showSubmitError(errors.submit.message)}
            </div>
          </div>

          <div className='col-md-6 pl-md-5'>
           <div className="text-side">
             <h2>Maás inormación</h2>
              <p>Vestibulum volutpat, lacus a ultrices sagittis, 
              mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. 
              Phasellus pede arcu, dapibus eu, fermentum et, 
              dapibus sed, urna.</p>

              <div className='address'>
                <div className='heading'>Ubicación</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                  San Borja, Lima - Peru
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:Contact_info@slickz.com' target='_blank' rel='noopener noreferrer'>
                    Contacto@@amadodedios.edu.pe
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  +92 423 567 745
                </div>
              </div>
           </div>
          </div>

        </div>
      </Item>

      <Testimony />
      <Footer />
    </ListContainer>
  );
};
