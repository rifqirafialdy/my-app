import { FC } from "react";
import Image from "next/image";
import { useState } from "react";

interface MenuButtonProps {
    onClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex items-center bg-black text-white font-sans gap-2 p-4 pl-4 rounded-l-full cursor-pointer transition-all duration-400 ${isHovered ? 'max-w-[200px]' : 'max-w-[50px]'}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src="/wave.png" alt="Menu Icon" width={30} height={30} />
            {isHovered && <p className="font-medium text-lg transition-all duration-300">Hi I&apos;m Ayush</p>}
            </div>
    );
};

export default MenuButton;