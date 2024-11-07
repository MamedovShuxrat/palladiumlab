import React from 'react'
import './about.scss'

import arrowDown from '../../assets/images/icons/arrow-down.svg'

const about = () => {
    return (
        <section className='about'>
            <h1 className="title ">
                Ремонт <span className="outline-text">и</span>  дизайн <br />
                <span className="outline-text"> в Москве и Московской области</span>
            </h1>
            <button className="button about__btn">Оставить заявку</button>

            <div className="about__content">
                <ul className="about__list">
                    <li className="about__item">Услуги по ремонту</li>
                    <li className="about__item">Виды работ</li>
                    <li className="about__item">Дизайн интерьера</li>
                    <li className="about__item">Ремонт помещений</li>
                </ul>
                <button className='circle-btn about__circle-btn'>
                    <img width={7} height={15} src={arrowDown} alt="arrow down" />
                </button>
            </div>
        </section>
    )
}

export default about