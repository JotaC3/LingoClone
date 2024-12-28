import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = ()=>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg  mx-auto flex items-center justify-evenly h-full">
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/SolarSystem1.svg" alt="Brasil" height={100} width={70} className="mr-4 rounded-md"/>
                    ASTRONOMIAA
                </Button>
                
                {/* <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/eletromag.svg" alt="EUA" height={100} width={70} className="mr-4 rounded-md"/>
                    Eletrodinâmica 
                </Button>
                
                <Button  size="lg" variant="ghost" className="w-full">
                    <Image src="/optica.svg" alt="Espanha" height={100} width={70} className="mr-4 rounded-md"/>
                    Óptica, Ondulatória e Termologia
                </Button> */}
                

            </div>
        </footer>
    );
};