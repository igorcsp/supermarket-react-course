import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Page not found</h2>
      <p>The page could not be found</p>
      <Link to="/">Go back to home page</Link>
    </>
  );
}
