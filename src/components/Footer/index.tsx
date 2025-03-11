// src/components/Footer.tsx
"use client";

import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className="relative bg-black w-full mt-5 pt-20 pb-8 px-20 text-white flex flex-col items-center gap-12">
            <div className="w-full max-w-7xl flex justify-between items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-medium">Have something in mind?</h1>
                    <div className="flex items-center gap-5">
                        <Image src="/ayush.png" alt="Ayush" width={50} height={50} />
                        <h1 className="text-4xl font-medium">Let’s build it together.</h1>
                    </div>
                </div>

                <button className="bg-white text-black text-lg font-bold py-3 px-6 rounded-full hover:bg-black hover:text-white transition">
                    Get in Touch
                </button>
            </div>

            <div className="w-full max-w-7xl flex justify-between items-center py-5 px-20 opacity-70 text-sm relative">
                <p className="text-lg">Build with 💖 by Brightscout & Ayush</p>
                <ul className="flex gap-5 cursor-pointer">
                    <li className="hover:underline">LinkedIn</li>
                    <li className="hover:underline">Twitter</li>
                    <li className="hover:underline">Instagram</li>
                    <li className="hover:underline">Webflow</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
