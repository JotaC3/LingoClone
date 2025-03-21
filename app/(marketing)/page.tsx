import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, ClerkProvider, SignedIn, SignedOut, SignIn, SignInButton, SignUpButton } from "@clerk/nextjs";
import {  Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
         <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
            <Image src="/imagemPrincipal.svg" fill alt="Hero" />
         </div>
         <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
               {/* ALTERAR: colocar nome correto */}
               Aprenda e pratique física utilizando ENERGIZE.
            </h1>
            <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
               <ClerkLoading>
                  <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
               </ClerkLoading>
               <ClerkLoaded>
                  <SignedOut>
                     <SignUpButton mode="modal" signInFallbackRedirectUrl='/learn' fallbackRedirectUrl='/learn'>
                        <Button size="lg" variant="primary" className="w-full">Criar uma conta</Button>
                     </SignUpButton>

                     <SignInButton mode="modal" fallbackRedirectUrl='/learn' signUpFallbackRedirectUrl='/learn' >
                        <Button size="lg" variant="secondaryOutline" className="w-full">Já tenho conta</Button>
                     </SignInButton>
                  </SignedOut>
                  <SignedIn>
                     <Button size="lg" variant="primary" className="w-full" asChild>
                        <Link href="/learn">
                           Continue Aprendendo
                        </Link>
                     </Button>
                  </SignedIn>
               </ClerkLoaded>
            </div>
         </div>
      </div>
   );
}
