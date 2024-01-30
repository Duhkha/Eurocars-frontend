import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { RootState } from '../store'
import { ReactNode } from 'react';

interface AdminProtectedRouteProps {
    children: ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
    const { userType } = useSelector((state: RootState) => state.auth)

    if (userType !== 'ADMIN') {
        // Redirect to login or unauthorized page
        return (
            <div className='unauthorized'>
                <h1>Unauthorized:</h1>
                <span>
                    <NavLink to='/login'>Login</NavLink> to gain access.
                </span>
            </div>
        )
    }

    return <>{children}</>;
}

export default AdminProtectedRoute