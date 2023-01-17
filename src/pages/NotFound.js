import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="page-not-found">
      <h2>Page not found!</h2> <br />
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias cupiditate ad nostrum doloribus iste tempora quisquam excepturi repellat, fugit cumque dolore magni possimus inventore neque provident! Sunt, quo eos?</h4>
      <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
    </div>
  )
}