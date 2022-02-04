import { NavLink } from 'react-router-dom';

function Nav() {

    function closeNav() {
        document.body.classList.remove('show');
    }

    return (
        <nav onClick={closeNav}>
            <div className="primary-navlist">
                <ul>
                    <li><NavLink to="/">Local</NavLink></li>
                    <li><NavLink to="/">Canada</NavLink></li>
                    <li><NavLink to="/">Indigenous</NavLink></li>
                    <li><NavLink to="/">World</NavLink></li>
                    <li><NavLink to="/">Opinion</NavLink></li>
                </ul>
            </div>
            <div className="secondary-navlist">
                <ul>
                    <li><NavLink to="/">Business</NavLink></li>
                    <li><NavLink to="/">Entertainment</NavLink></li>
                    <li><NavLink to="/">Health</NavLink></li>
                    <li><NavLink to="/">Science</NavLink></li>
                    <li><NavLink to="/">Sports</NavLink></li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav;