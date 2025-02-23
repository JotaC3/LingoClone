import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-2 flex-col", className,)}>
            <Link href="/learn" >
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.svg" height={50} width={50} alt="logo" />
                    <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
                        Energize
                    </h1>
                </div>
            </Link>


            <div className="fle flex-col gap-y-2 flex-1">
                <SidebarItem label="Aprender" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem label="Lideranças" href="/leaderboard" iconSrc="/leaderboard.svg" />
                <SidebarItem label="Desafios" href="/quests" iconSrc="/quests.svg" />
                <SidebarItem label="Feedback" href="/feedback" iconSrc="/feedback.svg" />
                {/* <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg"/> */}
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin " />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
            </div>
        </div>
    );
};