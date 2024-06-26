import { faker } from "@faker-js/faker"
import ProgresssBar from "../../components/Progressbar/ProgressBar"
import Bitcoin from "../../assets/frames/bitcoin.png"
import Shibar from "../../assets/frames/shibar.png"
import Etherum from "../../assets/frames/etherum.png"
import Solana from "../../assets/frames/solana.png"
import Tether from "../../assets/frames/tether.png"
import Button from "../../components/Button/Button"
import UserGroup from "../../assets/frames/users.png"


const TransactionAssets = () => {
    return (
        <div className="flex flex-column gap-4 px-3 w-full md:w-4 lg:w-4 ">
            <div className="flex flex-column gap-3 px-3 py-4 border-round-xl bg-blur">
                <h4 className="text-white">Assets</h4>
                <div className="flex flex-column gap-3">
                    <AssetItem
                        icon={Bitcoin}
                        name="Bitcoin"
                    />
                    <AssetItem
                        icon={Etherum}
                        name="Etherum"
                    />
                    <AssetItem
                        icon={Shibar}
                        name="Shibar"
                    />
                    <AssetItem
                        icon={Solana}
                        name="Solana"
                    />
                    <AssetItem
                        icon={Tether}
                        name="Tether"
                    />
                </div>
                <Button className="btn-mask border-round-xl text-center text-white" label="View All" />
            </div>

            <div className="flex flex-column gap-3 px-4 py-4 border-round-xl bg-blur">
                <div className="w-max mx-auto">
                    <img src={UserGroup} alt="" />
                </div>
                <h4 className="text-center text-white">Join Our Community</h4>
                <p className="text-center text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button className="btn-mask border-round-xl text-center text-white" label="Join Now" />

            </div>
        </div>
    );
};



const AssetItem = ({ icon, name }) => {
    const amount = faker.finance.amount({ min: 400, max: 1000, dec: 2, symbol: '$', autoFormat: true })
    const amount2 = faker.finance.amount({ min: 340, max: 990, dec: 2, symbol: '$', autoFormat: true })


    return (
        <div className="flex flex-column gap-2">
            <div className="flex gap-2 align-items-center">
                <div className="w-1">
                    <img src={icon} alt="name" />
                </div>
                <p className="font-semibold text-white text-sm">{name}</p>
                <p className="font-semibold text-sm text-white ml-auto">{amount}</p>
            </div>
            <div className="flex align-items-center">
                <div className="w-full">
                    <ProgresssBar className="w-full" />
                </div>
                <div className="w-5 ml-auto">
                    <p className="font-medium text-xs  text-white text-right">{amount2}</p>
                </div>
            </div>
        </div>
    );
};

export default TransactionAssets