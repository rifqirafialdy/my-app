import { FC } from "react";
import Image from "next/image";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}></div>
            )}
            <div className={`fixed top-0 right-0 w-1/2 h-full bg-black transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
                <Image src="/CLOSE.png" alt="Close Menu" width={60} height={60} className="absolute top-10 right-10 cursor-pointer" onClick={onClose} />
                <ul className="absolute top-32 left-16 text-white text-4xl space-y-6 cursor-pointer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
                <ul className="absolute bottom-16 left-16 text-white flex space-x-4">
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Webflow</li>
                </ul>
            </div>
        </>
    );
};

export default Menu;