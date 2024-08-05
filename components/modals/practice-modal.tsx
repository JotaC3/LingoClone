"use client"
import Image  from 'next/image';
import { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { usePracticeModal } from "@/store/use-practice-modal";
import { DialogTitle } from '@radix-ui/react-dialog';


export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = usePracticeModal();

    useEffect(() => setIsClient(true), []);


    if(!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex items-center w-full justify-center mb-5'>
                        <Image src='/heart.svg' alt='Heart' height={100} width={100}  />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        Lissão de treino
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Use lições de prática para ganhar mais pontos e vidas. Você nã pode perder corações, nem vidas aqui
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button variant="primary" className='w-full' size="lg" onClick={close}>
                            Tudo bem!
                        </Button>
                        
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )

}