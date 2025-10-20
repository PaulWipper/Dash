import { DynamicIcon } from 'lucide-react/dynamic';
import type NavbaritemProps from '../../Models/NavbarItemProps';

export default function NavbarItem({item} : {item : NavbaritemProps}) {
    return(
        <div className="flex items-center justify-between w-full">
            <a 
                href={item.link} 
                className={`flex items-center gap-2 py-2 px-3 rounded-8 ${item.state === "DISABLED" ? "pointer-events-none bg-neutral-600" : item.state === "ACTIVE" ? "bg-neutral-200 w-full" :  "bg-neutral-600 w-full"}`}>
                    <DynamicIcon name={item.icon} color={item.state === "DISABLED" ? "#3F3F3F" : item.state === "ACTIVE" ? "#1F1F1F": "#BCBCBC"} size={16}/>
                    <h3 className={`text-p ${item.state === "DISABLED" ? "text-neutral-400" : item.state === "ACTIVE" ? "text-neutral-600" : null}`}>{item.title}</h3>
            </a>
            {item.state === "DISABLED" ? 
                <h4 className="py-1 px-2 text-[12px] bg-neutral-400 rounded-8 text-neutral-200">Coming soon</h4>
                :
                null
            }
        </div>
    )
}