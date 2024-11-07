import React from 'react'
import './examples.scss'

const Examples = () => {
    return (
        <section className='examples'>
            <h2 className="subtitle subtitle-dash">
                Примеры <span className='outline-text'>выполненных</span>  работ
            </h2>
            <div class="examples__grid">
                <div class="examples__item examples__item-1"><span className="definition">Новостройка</span></div>
                <div class="examples__item examples__item-2"> <span className="definition">Новостройка</span></div>
                <div class="examples__item examples__item-3"> <span className="definition">Вторичка</span></div>
                <div class="examples__item examples__item-4"><span className="definition">Вторичка</span> </div>
                <div class="examples__item examples__item-5"> <span className="definition">Новостройка</span></div>
                <div class="examples__item examples__item-6"> <span className="definition">Вторичка</span></div>
                <div class="examples__item examples__item-7"> <span className="definition">Вторичка</span></div>
                <div class="examples__item examples__item-8"> <span className="definition">Новостройка</span></div>
            </div>
            <button className="button examples__btn">Все проекты</button>

        </section>
    )
}

export default Examples