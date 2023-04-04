import React from "react"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import LandingPage from "../components/LandingComponent/Landing"
import NewPost from "../components/Post/New/NewPost"
import AllPost from "../components/Post/List/List"

export default function AppRouter(){
    return <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="post/new" element={<NewPost/>}/>
                <Route path="post/All" element={<AllPost/>}>
                    
                    {/* <Route path="all" element={<LandingComponent/>}/> */}
                </Route>
            </Routes>
    </BrowserRouter>
}