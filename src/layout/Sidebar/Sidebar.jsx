import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logo.png"
import { SidebarItems, SidebarItemsBottom } from "./SidebarItems"
import "./style.css"




const SideBar = ({ close }) => {
    return (
        <div className={`sidebar  box-shadow-4 ${close ? 'show-menu' : ''}`}>
            <div className="flex align-items-center gap-3 px-1 mb-3">
                <img src={Logo} alt="comeso logo" />
                <h1 className="text-lg text-white">Crypto</h1>
            </div>
            <div className="flex-1">
                <div className="menu">
                    <ul>
                        {SidebarItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <NavLink to={item.to} >
                                        {item.icon}
                                        <span className="text">{item.name}</span>
                                    </NavLink>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="menu">
                <ul>
                    {SidebarItemsBottom.map((item, index) => (
                        <React.Fragment key={index}>
                            <li>
                                <NavLink to={item.to} >
                                    {item.icon}
                                    <span className="text">{item.name}</span>
                                </NavLink>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar