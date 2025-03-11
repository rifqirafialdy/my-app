import { FC, useState } from "react";
import { DUMMY_PROJECTS } from "@/constants/projectList";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Portofolio: FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-5">
            {DUMMY_PROJECTS.map((project, index) => (
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
                            whileHover={{ scale: 1.1 }}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={hoveredIndex === index ? "/black-link.png" : "/link.png"}
                                alt="project link"
                                width={60}
                                height={60}
                            />
                        </motion.div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Portofolio;
