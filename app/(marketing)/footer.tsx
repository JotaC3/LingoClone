import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = ()=>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg  mx-auto flex items-center justify-evenly h-full">
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/BR.svg" alt="Brasil" height={32} width={40} className="mr-4 rounded-md"/>
                    Português
                </Button>
                
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/USA.svg" alt="EUA" height={32} width={40} className="mr-4 rounded-md"/>
                    Inglês
                </Button>
                
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/ESP.svg" alt="Espanha" height={32} width={40} className="mr-4 rounded-md"/>
                    Espanhol
                </Button>
                
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/JP.svg" alt="Japão" height={32} width={40} className="mr-4 rounded-md"/>
                    Japonês
                </Button>
                
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/ITL.svg" alt="Itália" height={32} width={40} className="mr-4 rounded-md"/>
                    Italiano
                </Button>

            </div>
        </footer>
    );
};