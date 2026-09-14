import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Countries } from "../pages/countries/countries"
import { Cities } from "../pages/cities/cities"
import { Places } from "../pages/places/places"
import { About } from "../pages/about/about"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/places" element={<Places />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}