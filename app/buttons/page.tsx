import { Button } from "@/components/ui/button";

const ButtonsPage = () =>{
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Deafult</Button>

            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutline">Primary outline</Button>

            <Button variant="secondary">Secondary</Button>
            <Button variant="secondaryOutline">Secondary outline</Button>

            <Button variant="danger">Danger</Button>
            <Button variant="dangerOutline">Danger outline</Button>
           
            <Button variant="super">Super</Button>
            <Button variant="superOutline">Super outline</Button>

            <Button variant="ghost">Ghost</Button>

            <Button variant="sideBar">Side Bar</Button>
            <Button variant="sideBarOutline">Side Bar outline</Button>
           
        </div>
    )
}

export default ButtonsPage;