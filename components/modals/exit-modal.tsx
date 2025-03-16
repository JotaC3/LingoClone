"use client"
import Image  from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useExitModal } from "@/store/use-exit-modal";
import { DialogTitle } from '@radix-ui/react-dialog';


export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useExitModal();

    useEffect(() => setIsClient(true), []);

    if(!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex items-center w-full justify-center mb-5'>
                        <Image src='/sadMascot.svg' alt='Mascot' height={90} width={90}  />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        Espera, não vai!
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Você está prestes a deixa a lição. Tem certeza disso?
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button variant="primary" className='w-full' size="lg" onClick={close}>
                            Continuar aprendendo
                        </Button>

                        <Button variant="dangerOutline" className='w-full' size="lg" onClick={() =>{
                            close();
                            router.push("/learn");
                        }}>
                            Encerrar seção
                        </Button>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )

}