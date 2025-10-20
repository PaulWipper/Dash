import type { IconName } from "lucide-react/dynamic";

export default interface NavbaritemProps {
    title: string,
    icon: IconName,
    state: "ACTIVE" | "DEFAULT" | "DISABLED",
    link: string
}