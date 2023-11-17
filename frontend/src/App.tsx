import { Link, useLocation } from "react-router-dom";

export default function App() {

  let location = useLocation();
  return (
    <h1 className="text-3xl font-bold underline">
      Home Page

      {
        location.pathname
      }
      <Link to='/authenticate' state={{ next: location.pathname }}>Login</Link>


    </h1>
  )
}