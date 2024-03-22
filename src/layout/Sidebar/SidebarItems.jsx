import { SquaresFour, SignOut, CurrencyCircleDollar, CurrencyBtc, Wallet, User, Gear } from "@phosphor-icons/react"

export const SidebarItems = [
    {
        to: "/dashboard",
        icon: <SquaresFour size={20} />,
        name: "Dashboard"
    },
    {
        to: "withdraw",
        icon: <CurrencyCircleDollar size={20} />,
        name: "WithDraw"
    },
    {
        to: "deposit",
        icon: <Wallet size={20} />,
        name: "Deposit"
    },
    {
        to: "buyminer",
        icon: <CurrencyBtc size={20} />,
        name: "Buy Miner"
    },
    {
        to: "profile",
        icon: <User size={20} />,
        name: "Profile"
    },
]

export const SidebarItemsBottom = [
    {
        to: "settings",
        icon: <Gear size={20} />,
        name: "Settings"
    },
    {
        to: "/",
        icon: <SignOut size={20} />,
        name: "Logout"
    }
]