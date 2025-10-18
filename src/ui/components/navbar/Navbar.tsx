import { Home, Search, Library, ChartLine, User2Icon, Ellipsis } from "lucide-react"

export default function Navbar() {
    return(
        <div className="flex flex-col justify-between p-6 w-72 bg-neutral-600 rounded-20">
            <div className="flex flex-col gap-6">
                <h3 className="font-lily text-3xl">Dash</h3>
                <div className="flex flex-col">
                    <a href="/" className="flex items-center gap-2 py-2 px-3 bg-neutral-200 rounded-8">
                        <Home color="#1F1F1F" size={16}/>
                        <h3 className="text-neutral-600 text-p">Home</h3>
                    </a>
                    <a href="/" className="flex items-center gap-2 py-2 px-3 bg-neutral-600 rounded-8">
                        <Search color="#BCBCBC" size={16}/>
                        <h3 className="text-p">Discover</h3>
                    </a>
                    <a href="/" className="flex items-center gap-2 py-2 px-3 bg-neutral-600 rounded-8">
                        <Library color="#BCBCBC" size={16}/>
                        <h3 className="text-p">Library</h3>
                    </a>
                    <a href="/" className="flex items-center gap-2 py-2 px-3 bg-neutral-600 rounded-8">
                        <ChartLine color="#BCBCBC" size={16}/>
                        <h3 className="text-p">Statistics</h3>
                    </a>
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