import { Header } from "./header";
import { Footer } from "./footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

type Props = {
  children: React.ReactNode;
}

const marketingLayout = ({ children }: Props) => {
  return (

      <div className="min-h-screen flex flex-col"> 
        <Header></Header>

        <main className="flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
          
      <Footer></Footer>
    </div> 
    )
}

export default marketingLayout