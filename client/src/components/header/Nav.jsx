import { useState } from "react";
import { ArrowBigDownDash, ArrowBigUpDash } from 'lucide-react';

import NavLinks from "./NavLinks";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-16 h-16 text-center flex justify-center items-center border-2 border-black rounded-md border-b-4 border-l-4 relative bg-transparent">
            <div>
                <button
                    className=" text-[#D1D0C5]"
                    onClick={toggleNav}>
                    {isOpen
                        ? <ArrowBigUpDash className="w-[40px] h-[40px]" />
                        : <ArrowBigDownDash className="w-[40px] h-[40px]" />
                    }
                </button>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center mt-[168px] basis-full text-amber-200 text-2xl space-y-5 absolute top-full bg-transparent">
                    <NavLinks />
                </div>
            )};
        </nav>
    );
};

export default Nav;
