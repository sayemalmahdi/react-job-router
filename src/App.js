import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
  } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from './pages/About'
// layouts
import RootLayout from './layouts/RootLayouts'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
) 

function App() {
  return (
    <RouterProvider router = {router}  />    
  );
}

export default App;
