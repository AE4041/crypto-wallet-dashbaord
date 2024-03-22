import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/img/Logo.png"
import ServerImage from "../../assets/img/Server3.png"
import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [passowrd, setPassword] = useState('')

    return (
        <div className="flex w-full h-full" style={{ background: "#03030f" }}  >
            <div className="flex justify-content-center h-screen ">
                <img className="fadein animation-duration-1000 hidden md:block" src={ServerImage} alt="" />
            </div>
            <div className="flex flex-column justify-content-center align-items-center md:align-items-start h-screen w-full md:w-6 lg:w-5">
                <div className="flex gap-2 align-items-center px-4">
                    <img src={Logo} alt="" />
                    <h2 className="text-white">Crypto</h2>
                </div>

                <div className="flex flex-column gap-5 mt-5 w-full px-4">
                    <div className="flex flex-column gap-3 w-full">
                        <p className="font-medium text-white">Email</p>
                        <InputText
                            value={email}
                            className="w-full"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-column gap-3 w-full">
                        <p className="font-medium text-white">Password</p>
                        <InputText
                            value={passowrd}
                            className="w-full"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mt-3 justify-content-between w-full px-4">
                    <p className="font-medium text-bluegray-300 text-xs">Save Email and Password</p>
                    <p className="font-medium text-bluegray-300 text-xs">Don't have an account? {passowrd}</p>
                </div>
                <div className="flex px-4 mt-3">
                    <Button label="Sign in" className="font-medium" onClick={() => navigate('/dashboard')} />
                </div>
            </div>
        </div>
    )
}

export default Login