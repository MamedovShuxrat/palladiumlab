import React from 'react'
import geo from '../../assets/images/icons/MapMarker.svg'
import phone from '../../assets/images/icons/Vector.svg'
import logo from '../../assets/images/icons/logo.svg'
import './header.scss'

const Header = () => {

    return (
        <div className="container">
            <header className='header'>
                <div className="header__inner">
                    <a href='https://yandex.ru/maps/213/moscow/house/tverskaya_ulitsa_4/Z04YcAZjSEwPQFtvfXt0eXhqZw==/?indoorLevel=1&ll=37.613198%2C55.758494&z=16.72' target='_blank' className="header__item header__item-geo">
                        <img width={15} height={18} src={geo} alt="Geo" />
                    </a>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link"  >Главная</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">О компании</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Услуги</a>
                            </li>
                            <li className="nav__item nav__item-logo">
                                <img width={30} height={30} src={logo} alt="Logo " />
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Цены</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Портфолио</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <a href='tel:+78009000000' className="header__item header__item-phone">
                        <img src={phone} width={18} height={18} alt="phone" />
                    </a>
                </div>
            </header>
        </div >
    )
}

export default Header