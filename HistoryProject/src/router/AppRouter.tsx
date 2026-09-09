import { Route, Routes } from "react-router-dom"
import { Today } from "../pages/today/today"
import { Since } from "../pages/since/since"
import { ByDate } from "../pages/bydate/byDate"

export const AppRouter = () => {
    return(
       <Routes>
            <Route index element={<Today />} />
            <Route path="/since" element={<Since />} />
            <Route path="bydate" element={<ByDate />} />
       </Routes>
    )
}