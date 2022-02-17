import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Hamburger from './Hamburger';
import Nav from './Nav';

function Header() {

  function openNav(){
    document.body.classList.toggle('show');
}

function preventFocus(e){
    e.preventDefault();
}

function isDesktop(e) {
    if(e.matches){
        document.body.classList.remove('show');
    }
}

useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 680px)');
    mediaQuery.addEventListener('change', isDesktop);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
}, []);


  return (
    <header className="nav-header">
        <h1 className="logo"><Link to="/">Canada Times</Link></h1>
        <span className="hamburger" 
                id="hamburger" 
                onClick={openNav}
                onMouseDown={preventFocus}>
        <a href="#main-nav" class="btn-menu-smscreen" id="btn-menu">Sections</a>
        <a href="#main-nav" class="btn-menu-lscreen" id="btn-menu">More</a>
        </span>
        <Nav/>
    </header>
  )
}

export default Header;