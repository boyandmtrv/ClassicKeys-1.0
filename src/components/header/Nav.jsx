import { useState } from "react";
import { Menu, X } from 'lucide-react'
import NavLinks from "./NavLinks";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="w-1/3 flex justify-start relative"> 
                <div className="hidden md:flex w-full justify-between text-amber-200 text-2xl">
                    <NavLinks />
                </div>
                <div>
                    <button className="md:hidden text-amber-200 text-2xl" onClick={toggleNav}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-center basis-full text-amber-200 text-2xl space-y-5 absolute top-full left-0 right-0  bg-zinc-800">   
                    <NavLinks />
                </div>  
            )}
        </>
    )

}

export default Nav;
