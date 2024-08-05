"use client";

import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { startTransition, useTransition } from "react";
import { toast } from "sonner";

const pointsToRefil = 10;

type Props = {
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const Items = ({hearts, points, hasActiveSubscription}: Props) =>{
    const [pending, starTransition] = useTransition();
    
    const onRefillHearts = () =>{
        if(pending || hearts===5 || points<pointsToRefil){
            return;
        }

        startTransition(() =>{
            refillHearts()
                .catch(() => toast.error('Algo deu errado'));
        });
    }

    return(
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image 
                    src='/heart.svg' 
                    alt="Hearts"
                    height={60}
                    width={60}  
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Obter vidas
                    </p>
                </div> 
                <Button
                onClick={onRefillHearts} 
                disabled={hearts ===5 || points<pointsToRefil || pending} >
                    {hearts === 5
                        ? 'Full'
                        : (
                            <div className="flex items-center gap-[4px]">
                                <Image 
                                    src='/points.svg'
                                    alt="Ponts"
                                    height={20}
                                    width={20}
                                />
                                <p>
                                    {pointsToRefil}
                                </p>
                            </div>
                        )
                    }
                </Button>
                
            </div>
        </ul >
    )
}