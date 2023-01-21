import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import {AllProducts} from "../pages/AllProducts";
import { Details } from "../pages/Details";

import React from 'react'

export function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/products" element={<AllProducts/>}></Route>
            <Route path="/products/details/:productId" element={<Details/>}></Route>
        </Routes>
    </Router>
  )
}





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LandingPage } from "../pages/LandingPage";
// import { Search } from "../pages/Search";

// import React from 'react'

// export function MyRoutes() {
//   return (
//     <Router>
//         <Routes>
//             <Route path="/" element={<LandingPage/>}/>
//             <Route path="/search" element={<Search/>}/>
//         </Routes>
//     </Router>
//   )
// }