import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

function Header() {
    return (
        <header className="nav-header">
          <h1 className="logo"><Link to="/">Canada Times</Link></h1>
          <Hamburger />
        </header>
      )
  }
  
  export default Header;