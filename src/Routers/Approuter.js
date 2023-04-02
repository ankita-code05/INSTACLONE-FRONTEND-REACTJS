import React from "react"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import LandingPage from "../components/LandingComponent/Landing"

export default function AppRouter(){
    return <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {/* <Route path="post" element={<PostView/>}>
                    <Route path="new" element={<LandingComponent/>}/>
                    <Route path="all" element={<LandingComponent/>}/>
                </Route> */}
            </Routes>
    </BrowserRouter>
}