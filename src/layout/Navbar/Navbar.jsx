import { CirclesFour } from "@phosphor-icons/react"
import Logo from "../../assets/img/Logo.png"
import "./style.css"

const Navbar = ({ closeState, closeHandler }) => {

    return (
        <header className="header fixed top-0 left-0 w-full px-3">
            <div className="header-container flex align-items-center justify-content-between ">
                <div className="flex align-items-center gap-2">
                    <div className="logo-card">
                        <img src={Logo} alt="crypto logo" />
                    </div>
                    <h1 className="text-lg text-white">Crypto</h1>
                </div>

                <div className="header__toggle bg-bluegray-500 border-round-md p-2 flex align-items-center">
                    <i onClick={() => closeHandler(!closeState)} className="text-white font-bold cursor-pointer">
                        <CirclesFour size={20} />
                    </i>
                </div>
            </div>
        </header>
    )
}

export default Navbar
