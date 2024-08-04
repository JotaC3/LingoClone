import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {  
    onCheck:() => void; 
    status: "correct" | "wrong" | "none" | "completed";
    disabled?: boolean;
    lessonId?: number;
};

export const Footer = ({onCheck, status, disabled, lessonId}:Props) =>{
    useKey("Enter", onCheck, {}, [onCheck])
    const ismobile = useMedia('(max-width: 1024px)');

    return(
        <footer className={cn(
            "lg:h-[140px] h-[100px] border-t-2",
            status ==="correct" && "border-transparent bg-green-100",
            status ==="wrong" && "border-transparent bg-rose-100",
        )}>
            <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
                {/* caso marque correct */}
                {status === "correct" &&(
                    <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
                        <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
                        Boa! 

                    </div>
                )}
                {/* caso marque wrong */}
                {status === "wrong" &&(
                    <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
                        <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
                        Tentar novamente! 

                    </div>
                )}
                {/* caso marque completed */}
                {status === "completed" &&(
                    <Button variant="default" size={ismobile ? "sm" : "lg"} onClick={() => window.location.href=`/lesson/${lessonId}`}>
                        Pratice Again
                    </Button>
                )}

                <Button disabled={disabled} className="ml-auto" onClick={onCheck} size={ismobile ? "sm" : "lg"} variant={status === "wrong" ? "danger" : "secondary"}>
                    {status === "none" && "Check"}
                    {status === "correct" && "Next"}
                    {status === "wrong" && "Retry"}
                    {status === "completed" && "Continue"}
                </Button>
            </div>
        </footer>
    )
}