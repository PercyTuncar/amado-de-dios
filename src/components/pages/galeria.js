import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import ImageGallery from "../components/ImageGallery";
import Bannercontact from '../components/bannercontact';
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
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Alumnos%2Ffoto-cover-amado-de-dios.jpg?alt=media&token=165a57fc-8f74-4462-9a6c-8ffcf3c3fabb'})`}}>
    <div className='mainbreadcumb'>

    </div>
  </Item>
  <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Galería</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Galeía</span>
            </div>
          </div>
        </div>
      </div>
      <div className="videos">
         
          <video width="320" height="240" controls autoplay>
            <source src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Videos%2FVideo-amado-de-dios002.mp4?alt=media&token=a9a3d6f4-fcbd-46b1-abd4-51580e277706" type="video/mp4"/>
            Your browser does not support the video tag.
          </video> 
          <video width="320" height="240" controls>
            <source src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Videos%2FVideo-amado-de-dios001.mp4?alt=media&token=a7a99af9-1d7a-47bf-9bed-0128aff67296" type="video/mp4"/>
            Your browser does not support the video tag.
          </video> 

      </div>
  <Item className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12'>
        <div className='AppContainer'>
          <ImageGallery />
        </div>
      </div>
    
    </div>
  </Item>

  <Bannercontact/>
  <Testimony />
  <Footer />
</ListContainer>

);
