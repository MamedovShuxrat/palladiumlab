import React from 'react'
import About from '../../components/About/About'
import Examples from '../../components/Examples/Examples'

const MainPage = () => {
    return (
        <main>
            <div className="container">
                <About />
                <Examples />
            </div>
        </main>
    )
}

export default MainPage