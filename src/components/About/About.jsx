import React, { useState } from 'react';
import './about.scss';

import arrowDown from '../../assets/images/icons/arrow-down.svg';
import servicesImg from '../../assets/images/about/about-bg-2.png';
import typesImg from '../../assets/images/about/about-bg-3.png';
import designImg from '../../assets/images/about/about-bg-4.png';
import renovationImg from '../../assets/images/about/about-bg-5.png';
import defaultImg from '../../assets/images/about/about-bg-1.png';

const SECTION_DATA = [
    {
        key: 'services',
        bgImg: servicesImg,
        title: 'Услуги по ремонту ',
        outlineTitle: 'в Москве и Московской области',
        card: {
            title: 'Услуги по ремонту ',
            description: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.'
        }
    },
    {
        key: 'types',
        bgImg: typesImg,
        title: 'Виды работ по ремонту',
        outlineTitle: 'в Москве и Московской области',
        card: {
            title: 'Виды работ',
            description: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.'
        }
    },
    {
        key: 'design',
        bgImg: designImg,
        title: 'Дизайн интерьера',
        outlineTitle: 'в Москве и Московской области',
        card: {
            title: 'Дизайн интерьера',
            description: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.'
        }
    },
    {
        key: 'renovation',
        bgImg: renovationImg,
        title: 'Ремонт помещений',
        outlineTitle: 'в Москве и Московской области',
        card: {
            title: 'Ремонт помещений',
            description: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа.'
        }
    }
];
const VARIABLES = {
    mainDark: 'rgb(34, 34, 34)',
    mainWhite: ' rgb(255, 255, 255)',
}
const About = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [textColor, setTextColor] = useState(VARIABLES.mainDark)
    const [selectedCard, setSelectedCard] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem((prev) => (prev === item ? null : item));

        const selectedCard = SECTION_DATA.find(data => data.key === item);
        setSelectedCard(selectedCard)
        if (selectedCard?.bgImg === servicesImg || selectedCard?.bgImg === renovationImg || selectedCard?.bgImg === typesImg || selectedCard?.bgImg === designImg) {
            setTextColor(VARIABLES.mainWhite);
        } else {
            setTextColor(VARIABLES.mainDark);
        }
    }
    return (
        <section className='about' style={{ backgroundImage: `url(${selectedCard?.bgImg || ''})` }}>
            <h1 className="title" style={{ color: textColor }}>
                {selectedCard?.title || 'Ремонт и дизайн'} <br />
                <span className={`${selectedCard ? 'outline-text-white' : ''} outline-text `}  >{selectedCard?.outlineTitle || 'в Москве и Московской области'}</span>
            </h1>
            <button className={`${selectedCard ? 'button-white' : ''} button about__btn `} >Оставить заявку</button>

            <div className="about__content" style={{ backgroundImage: `url(${selectedCard ? '' : defaultImg})` }}>
                <ul className="about__list">
                    {SECTION_DATA.map(({ key, card }) => (
                        <li key={key}
                            className={`about__item about__item-${key}  ${activeItem === key ? 'active' : ''}`}
                            onClick={() => handleItemClick(key)}
                        >
                            <span className='about__item_title'>{card.title}</span>
                            <div className="about__item_hide">
                                <p className='about__item_hide_title'>{card.title}</p>
                                <p className='about__item_hide_decs'>{card.description}</p>
                                <button className='circle-btn about__circle-btn about__circle-btn-rotate'>
                                    <img width={7} height={15} src={arrowDown} alt="arrow down" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className='circle-btn about__circle-btn'>
                    <img width={7} height={15} src={arrowDown} alt="arrow down" />
                </button>
            </div>
        </section >
    );
};

export default About;
