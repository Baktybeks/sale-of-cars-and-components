import {BrowserRouter} from "react-router-dom"
import AppRouter from "./links/AppRouter"
import HeaderCar from "./components/header/HeaderCar"
import FooterCar from "./components/footer/FooterCar"


function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <HeaderCar/>
                <AppRouter/>
                <FooterCar/>
            </BrowserRouter>
        </div>
    )
}

export default App
