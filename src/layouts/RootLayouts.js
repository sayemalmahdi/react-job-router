import {NavLink,Outlet} from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>React-Job-Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>    
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayouts
