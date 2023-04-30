import './nav.css';
import { FaBars } from 'react-icons/fa';

function Nav() {

    function OpenClose() {
        const menu = document.querySelector('.navbar ul');
        const navBar = document.querySelector('.navbar');
        menu.classList.toggle('activeMenu');
    }

    return (
        <div className="navbar">
        <div id='menu'>
            <div className='logo'><span className='color'>Moda</span>Dev</div>
            <a onClick={OpenClose}><FaBars /></a>
            
        </div>
        <ul>
            <li>
                <a href="#">Início</a>
            </li>
            <li>
                <a href="#">Destaques</a>
            </li>
            <li>
                <a href="#">Promoções</a>
            </li>

        </ul>
    </div>
    )
}

export default Nav;