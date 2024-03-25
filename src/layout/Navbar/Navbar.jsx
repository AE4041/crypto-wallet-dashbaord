import { faker } from "@faker-js/faker"
import { CirclesFour } from "@phosphor-icons/react"
import Logo from "../../assets/img/Logo.png"
import "./style.css"

const Navbar = ({ closeState, closeHandler }) => {
    const avatar = faker.image.avatarGitHub()
    const userName = faker.person.firstName({ sex: 'male | female' })

    return (
        <header className="header fixed top-0 left-0 flex align-items-center w-full px-3">
            <div className="header-container flex align-items-center justify-content-between flex-1">
                <div className="header-brand flex align-items-center gap-2">
                    <div className="logo-card">
                        <img src={Logo} alt="crypto logo" />
                    </div>
                    <h1 className="text-lg text-white">Crypto</h1>
                </div>

                <div className="flex align-items-center gap-3">
                    <div className="ml-auto flex gap-2 align-items-center">
                        <p className="profile-name text-gray-50">{userName}</p>
                        <img className="border-circle" src={avatar} alt="profile" style={{ width: "30px" }} />
                    </div>

                    <div className="header__toggle bg-bluegray-500 border-round-md p-2 flex align-items-center">
                        <i onClick={() => closeHandler(!closeState)} className="text-white font-bold cursor-pointer">
                            <CirclesFour size={20} />
                        </i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
