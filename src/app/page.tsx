// src/app/page.tsx
"use client";
import { FC, useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import MenuButton from '@/components/Menu/MenuButton';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Portofolio from '@/components/Portofolio';
import Testimonial from '@/components/Testimonials';
import Gallery from '@/components/Gallery';


const LandingPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; 
      if (window.scrollY > heroHeight) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative h-screen">
        <Hero />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <MenuButton onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>

      {showHamburger && (
        <div className="fixed top-10 right-10 z-50">
          <img
            src="/hamburger.png"
            alt="Menu"
            className="h-14 w-14 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      )}

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <section className="pt-40 px-8 md:px-20 flex items-baseline justify-between">
        <div className="w-1/3 p-5">
          <h1 className="text-4xl font-medium">About</h1>
        </div>
        <div className="w-2/3 p-5">
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <section className="pt-40 px-8 md:px-20 flex items-baseline justify-between">
        <div className="w-1/3 p-5">
          <h1 className="text-4xl font-medium">Recent Work</h1>
        </div>
        <div className="w-2/3 p-5">
        <Portofolio/>
        </div>
      </section>

      <Gallery/>
      <section className="pt-40 px-8 md:px-20 flex items-baseline justify-between">
        <div className="w-1/3 p-5">
          <h1 className="text-4xl font-medium">Testimonials</h1>
        </div>
        <div className="w-2/3 p-5">
        <Testimonial/>
        </div>
      </section>
<Footer/>
    </div>
  );
};

export default LandingPage;
