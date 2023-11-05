import { Routes,Route } from "react-router-dom"
import { HomePage } from "../pages/home/home.index"
import { AboutPage } from "../pages/about/about.index"
import { Page404 } from "../pages/404/404.index"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}