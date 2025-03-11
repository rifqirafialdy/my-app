// src/components/Testimonial.tsx

import { FC } from "react";
import { DUMMY_TESTIMONI } from "@/constants/testimonials"; 
import Image from "next/image";

const Testimonial: FC = () => {
    return (
        <div className="flex flex-col gap-5 font-neue-montreal">
            {DUMMY_TESTIMONI.map((testimoni, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <p className="font-normal text-[27px] leading-[37.8px]">
                        {testimoni.testimoni}
                    </p>
                    <div className="flex items-center gap-5">
                        <div className="relative w-16 h-16">
                            <Image
                                src={testimoni.pic}
                                alt={testimoni.name}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-medium text-[18px] leading-[28.8px] m-0">
                                {testimoni.name}
                            </h3>
                            <p className="font-normal text-[14px] leading-[22.4px] m-0">
                                {testimoni.position} @ {testimoni.workplace}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;
