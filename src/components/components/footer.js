import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2 className='font-weight-bold '>Amado de Dios</h2>
          </div>
          <div className='content'>
             <p>La I.E.P. “Amado de Dios” fue autorizada para funcionar por Resolución Ministerial  Nº 000155.</p>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Contacto:
          </div>
          <div className='content'>
             <div className='link'>+51 987654321</div>
             <div className='link'>info@amadodedios.edu.pe</div>
             <div className='link'>contacto@amadodedios.edu.pe</div>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Siguenos en:
          </div>
          <div className='content'>
            <p>Todas nuestras redes sociales</p>
            <div className='socialicon'>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2020 <span className='font-weight-bold'>Amado de Dios</span> Todos los derechos reservados.</div>
        </div>
        <div className='col-md-6'>
          <div className='content-right'>
            Echo con
            <i className="fa fa-heart text-gradient"></i>
            por Percy Tuncar
          </div>
        </div>
      </div>
    </div>
  </footer>
);
