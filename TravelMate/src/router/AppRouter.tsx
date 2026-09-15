import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Cities } from "../pages/cities/cities"
import { About } from "../pages/about/about"
import { Attractions } from "../pages/places/attraction"
import { CountryList } from "../components/modules/countryList/CountryList"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/countries" element={<CountryList mode="popular" />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}