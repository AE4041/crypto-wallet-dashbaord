import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar"
import Sidebar from "../layout/Sidebar/Sidebar"
import Dashboard from "../pages/Dashboard/Dashbaord";

const DashboardRoutes = () => {
    const [hideSidebar, setHideSidebar] = useState(false)
    const toggleSidebarHandler = () => {
        setHideSidebar(hideSidebar)
    }

    useEffect(() => {
        if (!hideSidebar) { return }

        toggleSidebarHandler()
    }, [hideSidebar])

    return (
        <div className="flex flex-column w-full h-screen">
            <Sidebar close={hideSidebar} />

            <div className="flex-1 flex flex-column ralative md:absolute lg:absolute xl:absolute top-0 layout-wrapper ">
                <Navbar closeState={hideSidebar} closeHandler={setHideSidebar} />
                <div className="flex flex-column relative botom-auto w-full mt-6 mb-7">
                    <StrictRoutes />
                </div>
            </div>
        </div>
    )
}

const StrictRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/withdraw" element={<Dashboard />} />
            <Route path="/deposit" element={<Dashboard />} />
            <Route path="/buyminer" element={<Dashboard />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
        </Routes>
    )
}

export default DashboardRoutes