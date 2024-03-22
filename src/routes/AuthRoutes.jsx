import { Route, Routes } from "react-router-dom"
import Signup from "../pages/Authentication/Signup"
import Login from "../pages/Authentication/Login"
import DashboardRoutes from "./DashboardRoutes"

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
    )
}

export default AuthRoutes