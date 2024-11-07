import React from 'react'
import telegram from '../../assets/images/icons/social/telegram.svg'
import vk from '../../assets/images/icons/social/vk.svg'
import yandex from '../../assets/images/icons/social/yandex.svg'
import clip from '../../assets/images/icons/Clip.svg'

import './footer.scss'
const Footer = () => {
    return (
        <div className="container">
            <footer className='footer'>
                <h2 className="subtitle subtitle-dash">
                    Связаться <span className='outline-text'>с нами</span>
                </h2>
                <div className="footer__list">
                    <div className="footer__item">
                        <p className="footer__desc">Офис</p>
                        <a href="https://yandex.ru/maps/213/moscow/house/tverskaya_ulitsa_4/Z04YcAZjSEwPQFtvfXt0eXhqZw==/?indoorLevel=1&ll=37.613198%2C55.758494&z=16.72" className="footer__link">Москва, ул. Уличная, д. 1, оф. 1</a>
                        <p className="footer__desc">E-mail</p>
                        <a href="mailto:company@company.ru" className="footer__link">company@company.ru</a>
                        <div className="social">
                            <a href="#" className="social__link social__link-tg">
                                <img src={telegram} alt="telegram logo" />
                            </a>
                            <a href="#" className="social__link social__link-vk">
                                <img src={vk} alt="vk logo" />
                            </a>
                            <a href="#" className="social__link social__link-yandex">
                                <img src={yandex} alt="yandex logo" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__item">
                        <p className="footer__desc">Режим работы</p>
                        <span className="footer__link">Пн-Вт: 1000 — 1900; Сб-Вс: 1000 — 1500</span>
                        <p className="footer__desc">Телефон</p>
                        <a href="tel:+78009000000" className="footer__link">8 (800) 900-00-00</a>
                    </div>
                    <div className="footer__item">
                        <p className="footer__desc">Остались вопросы?</p>
                        <form action="/" className="footer__form">
                            <label for="name">Ваше имя</label>
                            <input type="text" id="name" name="name" placeholder='Иван Иванов' required />
                            <label for="email">Телефон / E-mail</label>
                            <input type="email" id="email" name="email" placeholder='example@example.com' required />
                            <div className="footer__message-wrapper">
                                <label for="message">Ваше сообщение</label>
                                <input type="text" name='message' id='message' placeholder='Текст обращения' />
                                <button><img src={clip} alt="clip" /></button>
                            </div>
                            <p className="footer__agree">Нажимая на кнопку «Получить консультацию», вы соглашаетесь
                                <br />  на <a href='#'>обработку персональных данных</a></p>
                            <button className="button footer__btn">Получить консультацию</button>
                        </form>
                    </div>
                </div>
                <div className="copy-right">
                    <p className="copy-right__decs"> Веб-ресурс создан в рамках тестового задания.
                        Фронтенд частью занимался я, <span >Мамедов Шухрат</span> ,  Сайт предназначен для ознакомления работодателя с моими способностями
                        и подходом к созданию веб-приложений.</p>
                    <p className="copy-right__decs">Сделано в <span>Palladiumlab</span> </p>
                </div>
            </footer >
        </div>
    )
}

export default Footer