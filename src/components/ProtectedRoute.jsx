/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ user, redirectPath = "/login", children }) {
  if (!user) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
}
//
//https://www.robinwieruch.de/react-router-private-routes/
export default ProtectedRoute;

// /* eslint-disable react/prop-types */
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ user, redirectPath = "/login", children }) {
//   if (!user) return <Navigate to={redirectPath} replace />;

//   return children
// }
// //https://www.robinwieruch.de/react-router-private-routes/
// export default ProtectedRoute;
