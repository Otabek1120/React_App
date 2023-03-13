import { Link } from "react-router-dom";
const NotFound = () => {
   return (
      <div className="not-found">
         <div>404 error. The Page not Found</div>
         <Link to="/">Back to HomePage...</Link>
      </div>
   );
}

export default NotFound;