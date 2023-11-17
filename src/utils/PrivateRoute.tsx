import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
    let auth = { token: localStorage.getItem("token") };
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;