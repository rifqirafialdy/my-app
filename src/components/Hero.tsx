// src/components/Hero.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const Hero: FC = () => {
    return (
        <section className="relative bg-[#C7D0D9] w-full h-screen flex flex-col overflow-hidden">
            <Header/>
            <div className="absolute inset-0 flex justify-center items-center z-0">
                <img
                    src="/My project 1 (1).png"
                    alt="Hero Image"
                    className="max-w-full object-contain"
                />
                <motion.div
                    className="absolute top-1/2 left-0 whitespace-nowrap text-white text-[150px] font-medium"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                >
                    Webflow Developer - UI/UX Designer
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
