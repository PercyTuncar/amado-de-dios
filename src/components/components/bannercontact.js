import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/team-united-29UVSFZ.JPG?alt=media&token=2944fa70-ee01-481f-9f86-1082e809d909' alt='imgbanner' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className="subheading">
                Valores de la institución educativa.
              </div>
              <div className="heading">
                Amado de Dios __
              </div>
                <ul>
                  <li>Responsabilidad</li>
                  <li>Respeto</li>
                  <li>Justicia</li>
                  <li>Solidaridad</li>
                  <li>Superación personal</li>
                </ul>
              <Link className='btn' to="/contact">
                <span>Leer más</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
