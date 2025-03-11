"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className="flex items-center justify-between px-20 pt-6 z-10">
            <Image src="/Logo.png" alt="Website Logo" width={100} height={100} />
            <nav className="flex gap-5">
                <Link href="#" className="font-neue-montreal text-[16px] font-normal leading-[21.6px] text-black hover:underline">
                    About
                </Link>
                <Link href="/ShowForm" className="font-neue-montreal text-[16px] font-normal leading-[21.6px] text-black hover:underline">
                    Form
                </Link>
                <Link href="/ContactUs" className="font-neue-montreal text-[16px] font-normal leading-[21.6px] text-black hover:underline">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
