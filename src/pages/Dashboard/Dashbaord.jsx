import { useEffect, useState } from "react"
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
        <div className="flex flex-column gap-4 fadein animation-duration-1000 px-4 mt-5 md:mt-2 lg:mt-2">
            <div className="grid gap-5 w-12 mx-auto">
                <div className="col">
                    <div className="flex flex-column gap-7 bg-blur p-5 border-round-xl">
                        <div className="flex flex-column text-gray-50 md:flex-row lg:flex-row gap-8 justify-content-start">
                            {renderInfoBlock(Money, "Total assets", "$ 87.743")}
                            {renderInfoBlock(Wallet, "Total deposits", "$ 78,342")}
                            {renderInfoBlock(AlignBottom, "APY", "+ 12.3%")}
                        </div>

                        <div className="flex gap-3 align-items-center">
                            <div className="flex gap-1 align-items-center bg-gray-800 px-3 py-2 border-round-3xl">
                                <CurrencyEth className="bg-white border-circle " size={25} color="#00000" weight="fill" />
                                <p className="text-white text-sm">ETH</p>
                            </div>
                            <p className="font-bold text-xl text-white">$ 78,342</p>
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

const renderInfoBlock = (IconComponent, label, value) => (
    <div className="flex align-items-center gap-2">
        <div className="bg-blur-50 p-3 border-round-lg">
            <IconComponent size={25} />
        </div>
        <div className="flex flex-column gap-2">
            <p className="text-gray-200">{label}</p>
            <p className="font-bold text-xl">{value}</p>
        </div>
    </div>
);


export default Dashboard