import { User2Icon, Ellipsis } from "lucide-react"
import type NavbaritemProps from "../../Models/NavbarItemProps"
import NavbarItem from "./NavbarItem"

const ITEMS: NavbaritemProps[] = [
    {
        title: "Home",
        icon: "home",
        state: "ACTIVE",
        link: "/"
    },
    {
        title: "Discover",
        icon: "search",
        state: "DISABLED",
        link: "/"
    },
    {
        title: "Library",
        icon: "library",
        state: "DEFAULT",
        link: "/"
    },
    {
        title: "Statistics",
        icon: "chart-line",
        state: "DISABLED",
        link: "/"
    },
]

export default function Navbar() {
    return(
        <div className="flex flex-col justify-between p-6 w-72 bg-neutral-600 rounded-20">
            <div className="flex flex-col gap-6">
                <h3 className="font-lily text-3xl">Dash</h3>
                <div className="flex flex-col">
                    {ITEMS.map((item) => (
                        <NavbarItem key={item.title} item={item}/>
                    ))}
                </div>
            </div>
            <a href="" className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-neutral-200 rounded-full w-fit h-fit p-1">
                        <User2Icon color="#1F1F1F" size={16}/>
                    </div>
                    <h3 className="text-p">Jane Doe</h3>
                </div>
                <Ellipsis color="#BCBCBC" size={16}/>
            </a>
        </div>
    )
}