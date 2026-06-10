import { Navigate,Outlet } from "react-router";

interface ProtectedRouteProps{
    isAuthenticated: boolean;
}

function ProtectedRoute({isAuthenticated}:ProtectedRouteProps){
    if (!isAuthenticated){
        // Redirect unauthenticated users to the login page
    // 'replace' prevents them from clicking 'back' into the locked route
        return <Navigate to= "/login" replace/>
    }
    return <Outlet/>
}
// Render the nested child routes if authenticated
export default ProtectedRoute;