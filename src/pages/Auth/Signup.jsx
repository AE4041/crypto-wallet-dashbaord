import { useState } from "react"
import Logo from "../../assets/img/Logo.png"
import ServerImage from "../../assets/img/Server3.png"
import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"


const Signup = () => {
    const [email, setEmail] = useState('')
    const [passowrd, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [btcAddress, setBtcAddress] = useState('')

    return (
        <div className="flex w-full h-full" style={{ background: "#03030f" }}  >
            <div className="flex justify-content-center h-screen ">
                <img className="fadein animation-duration-1000 hidden md:block" src={ServerImage} alt="illustrator" />
            </div>
            <div className="flex flex-column justify-content-center align-items-center md:align-items-start h-screen w-full md:w-6 lg:w-5">
                <div className="flex gap-2 align-items-center px-4">
                    <img src={Logo} alt="luxury logo" />
                    <h2 className="text-white">Crypto</h2>
                </div>

                <div className="flex flex-column gap-4 mt-5 w-full px-4 fadein animation-duration-1000">
                    <div className="flex flex-column gap-3 w-full">
                        <p className="font-normal text-white text-sm">Email</p>
                        <InputText
                            value={email}
                            className="w-full"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-column gap-3 w-full">
                        <p className="font-normal text-white text-sm">Password</p>
                        <InputText
                            value={passowrd}
                            className="w-full"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-column gap-3 w-full">
                        <p className="font-normal text-white text-sm">Confirm Password</p>
                        <InputText
                            value={confirmPassword}
                            className="w-full"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-column gap-3 w-full">
                        <p className="font-normal text-white text-sm">BTC Address (optional)</p>
                        <InputText
                            value={btcAddress}
                            className="w-full"
                            placeholder="Enter BTC address"
                            onChange={(e) => setBtcAddress(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex px-4 mt-5">
                    <Button label="Sign up" className="font-normal" />
                </div>
            </div>
        </div>
    )
}

export default Signup