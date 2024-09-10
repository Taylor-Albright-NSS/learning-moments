import { PostsList } from "./components/PostsList"
import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"


export const App = () => {
  return (
    <Routes className="app">
        <Route path="/" element={
          <>
            <NavBar />
            <Outlet />
          </>
          } 
          />
        <Route path='/allposts' element={<PostsList/>} />
    </Routes>

  )
}
