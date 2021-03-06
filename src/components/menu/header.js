import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);


export default function() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
    };
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky + 300) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar'>
     <div className='container-fluid'>
       <div className='row m-2-hor w-100-nav'>
          <div className='logo'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                 <span className='amado'>AMADO DE <span className='dios'>DIOS       </span></span>
                
                </NavLink>
              </div>
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                      <NavLink to="/">Inicio</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/nosotros" onClick={() => btn_icon(!showmenu)}>
                        Nosotros
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/historia" onClick={() => btn_icon(!showmenu)}>
                        Historia
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/valores" onClick={() => btn_icon(!showmenu)}>
                        Valores
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick}
                          >
                          Niveles
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <NavLink to="/inicial" onClick={() => btn_icon(!showmenu)}>Inicial</NavLink>
                              <NavLink to="/primaria" onClick={() => btn_icon(!showmenu)}>Primaria</NavLink>
                              <NavLink to="/secundaria" onClick={() => btn_icon(!showmenu)}>Secundaria</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item menos'>
                      <NavLink to="/librodereclamaciones" onClick={() => btn_icon(!showmenu)}>
                     <span className='menos'> Libro de reclamaciones</span>
                      </NavLink>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                  <div className='navbar-item'>
                      <NavLink to="/">Inicio</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/nosotros">Nosotros</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/historia">Historia</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/valores">Valores</NavLink>
                    </div>
                    <div className='navbar-item'>
                        <div ref={ref}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                            Niveles
                            {openMenu && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu}>
                                <NavLink to="/inicial">Inicial</NavLink>
                                <NavLink to="/primaria">Primaria</NavLink>
                                <NavLink to="/secundaria">Secundaria</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item menos'>
                      <NavLink to="/librodereclamaciones"><span className='menos'> Libro de reclamaciones</span></NavLink>
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
