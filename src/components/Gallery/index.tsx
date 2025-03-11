import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images1 = [
  "/image 33.png",
  "/image 33 (1).png",
  "/image 33 (2).png",
  "/image 33 (3).png",
];

const images2 = [
  "/image 33 (4).png",
  "/image 33 (5).png",
  "/image 33 (6).png",
  "/image 33 (7).png",
];

const Gallery: FC = () => {
    return (
        <section className="w-screen overflow-hidden py-5 flex flex-col gap-10 items-center">
          <div className="relative  overflow-hidden">
            <motion.div
              className="flex gap-10"
              initial={{ x: 0 }}
              animate={{ x: -2000 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...images1, ...images1].map((src, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-xl shadow-lg w-[444px] h-[306px] flex items-center justify-center"
                >
                  <Image src={src} alt={`Image ${index + 1}`} width={348} height={194} />
                </div>
              ))}
            </motion.div>
          </div>
    
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-10"
              initial={{ x: 0 }}
              animate={{ x: -2000 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...images2, ...images2].map((src, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-xl shadow-lg w-[444px] h-[306px] flex items-center justify-center"
                >
                  <Image src={src} alt={`Image ${index + 1}`} width={348} height={194}  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      );
    };

export default Gallery;
