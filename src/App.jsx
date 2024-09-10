import { PostsList } from "./components/PostsList"

import { NavBar } from "./components/NavBar"

export const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <PostsList />
    </div>
  )
}
