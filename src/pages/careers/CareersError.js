import { Link, useRouteError } from "react-router-dom"

export default function CareersError() {
  const error = useRouteError()

  return (
    <div className="page-not-found">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}