import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Inicial from './pages/inicial';
import Home1 from './pages/primaria';
import Home2 from './pages/secundaria';
import About from './pages/nosotros';
import Team from './pages/historia';
import Price from './pages/valores';
import Portofolio from './pages/portofolio';
import Contact from './pages/librodereclamaciones';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0, delay: 300, beforeChildren: 300 }
});

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup primary={false}>
        <RouteContainer key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

export default () => (
  <div className="wraper">
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Home1 path="/primaria" />
        <Inicial path="/inicial" />
        <Home2 path="/secundaria" />
        <About path="/nosotros" />
        <Team path="/historia" />
        <Price path="/valores" />
        <Portofolio path="/portofolio" />
        <Contact path="/librodereclamaciones" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
  </div>
);
