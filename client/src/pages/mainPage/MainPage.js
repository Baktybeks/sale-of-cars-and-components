import React from 'react'
import About from "../../components/about/About"
import KnowPrice from "../../components/knowPrice/KnowPrice"
import OurCars from "../../components/ourCars/OurCars"
function MainPage() {

    return (
        <div>
            <About/>
            <OurCars/>
            <KnowPrice/>
        </div>
    )
}

export default MainPage