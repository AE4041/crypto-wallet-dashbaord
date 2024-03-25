import { useEffect, useState } from "react"
import { faker } from "@faker-js/faker"
import { Money, CurrencyEth, Wallet, AlignBottom } from "@phosphor-icons/react"
import TransactionAssets from "./TransactionAssets"
import { Transactions } from "../../data/Transactions"
import Table from "../../components/Table/Table"
import TransactionChart from "./TransactionChart"


const Dashboard = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        Transactions.getSmallData().then((data) => setTransactions(data))
    }, [])

    return (
        <div className="flex flex-column gap-4 mt-5 mb-9 md:mt-9 lg:mt-9 fadein animation-duration-1000">
            <div className="flex-1 flex flex-column md:flex-row lg:flex-row xl:flex-row gap-4 md:gap-0 lg:gap-0 w-full mx-auto">
                <div className="flex-1 px-3">
                    <div className="flex flex-column gap-7 bg-blur p-5 border-round-xl">
                        <div className="flex flex-column text-gray-50 md:flex-row lg:flex-row gap-8 justify-content-start">
                            {renderInfoBlock(Money, "Total assets")}
                            {renderInfoBlock(Wallet, "Total deposits")}
                            {renderInfoBlock(AlignBottom, "APY")}
                        </div>

                        <div className="flex gap-2 align-items-center">
                            <div className="flex gap-1 align-items-center bg-gray-900 px-3 py-2 border-round-3xl">
                                <CurrencyEth className="bg-white border-circle " size={25} color="#00000" weight="fill" />
                                <p className="text-white text-sm">ETH</p>
                            </div>
                            <p className="font-bold text-xl text-white">{faker.finance.amount({ dec: 2, symbol: '$' })}</p>
                        </div>

                        <div className="flex w-full">
                            <TransactionChart />
                        </div>
                    </div>

                    <div className="flex flex-column gap-5 bg-blur p-5 border-round-xl mt-5">
                        <h4 className="text-white">Tokens</h4>
                        <Table className="text-white" data={transactions} />
                    </div>
                </div>

                <TransactionAssets />
            </div>
        </div>
    )
}

const renderInfoBlock = (IconComponent, label) => (
    <div className="flex align-items-center gap-2">
        <div className="bg-blur-50 p-3 border-round-lg">
            <IconComponent size={25} />
        </div>
        <div className="flex flex-column gap-2">
            <p className="text-gray-200">{label}</p>
            <p className="font-bold text-xl">{faker.finance.amount({ min: 400, max: 1000, dec: 2, symbol: '$' })}</p>
        </div>
    </div>
);


export default Dashboard