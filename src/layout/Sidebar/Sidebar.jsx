import "./style.css"
import Logo from "../../assets/img/Logo.png"
import { SquaresFour, SignOut, CurrencyCircleDollar, CurrencyBtc, Wallet, User, Gear } from "@phosphor-icons/react"


const SideBar = () => {

    return (
        <div className="sidebar z-5 box-shadow-4">
            <div className="flex align-items-center gap-3 px-1">
                <img src={Logo} alt="comeso logo" />
                <h1 className="text-lg text-white">Crypto</h1>
            </div>
            <div className="flex-1">
                <div className="menu">
                    <ul>
                        <li >
                            <a href="#">
                                <i>{<SquaresFour size={20} />}</i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">
                                <i>{<CurrencyCircleDollar size={20} />}</i>
                                <span className="text">WithDraw</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                                <i>{<Wallet size={20} />}</i>
                                <span className="text">Deposit</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                                <i>{<CurrencyBtc size={20} />}</i>
                                <span className="text">Buy Miner</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                                <i>{<User size={20} />}</i>
                                <span className="text">Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">
                            <i>{<Gear size={20} />}</i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i><SignOut size={20} /></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar