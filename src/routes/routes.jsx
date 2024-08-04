import { Route, Routes } from "react-router-dom";

import Home from '../containers/Home'
import Series from '../containers/Series'
import Movies from '../containers/Movies'
import DefaultLayout from "../layout/defaltLayout";


function Router() {
    return (
        <Routes>
            <Route element={ <DefaultLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
            </Route>
        </Routes>
    )
}

export default Router 