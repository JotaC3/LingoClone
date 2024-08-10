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
import { useHeartsModal } from "@/store/use-hearts-modal";
import { DialogTitle } from '@radix-ui/react-dialog';


export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useHeartsModal();

    useEffect(() => setIsClient(true), []);

    const onclick = () =>{
        close();
        router.push('/store');
    }

    if(!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex items-center w-full justify-center mb-5'>
                        <Image src='/deadMascot.svg' alt='Mascot' height={90} width={90}  />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        Opa, parece que suas vidas acabaram!
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Obtenha a versão pro para ter vidas ilimitadas, ou compre mais na loja
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button variant="primary" className='w-full' size="lg" onClick={onclick}>
                            Conseguir mais vidas
                        </Button>

                        <Button variant="dangerOutline" className='w-full' size="lg" onClick={close}
                        >
                            Não, obrigado
                        </Button>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )

}