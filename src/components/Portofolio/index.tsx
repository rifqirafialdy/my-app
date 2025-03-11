// src/components/Portofolio.tsx

import { FC, useState } from "react";
import { DUMMY_PROJECTS } from "@/constants/projectList"; // Make sure the path is correct
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Portofolio: FC = () => {
    const [imgSrc, setImgSrc] = useState("/link.png");

    return (
        <div className="flex flex-col gap-5">
            {DUMMY_PROJECTS.map((project, index) => {
                
                return (
                    <div
                        key={index}
                        className="flex justify-between items-center pb-7 border-b border-[#C7D0D9]"
                    >
                        <div>
                            <h2 className="font-inter font-normal text-[60px] leading-[72.61px] m-0">
                                {project.name}
                            </h2>
                            <p className="font-neue-montreal font-normal text-[18px] leading-[28.8px] text-[#3C3D3E] m-0">
                                {project.roles.join(" - ")}
                            </p>
                        </div>
                        
                        <Link href={project.link} target="_blank">
                            <motion.div
                                onHoverStart={() => setImgSrc("/black-link.png")}
                                onHoverEnd={() => setImgSrc("/link.png")}
                                className="cursor-pointer"
                            >
                                <Image
                                    src={imgSrc}
                                    alt="project link"
                                    width={24}
                                    height={24}
                                />
                            </motion.div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Portofolio;
