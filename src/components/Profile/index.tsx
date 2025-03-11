import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
  return (
    <section className="flex flex-col gap-10 w-3/4">
      <Image
        src="/Rectangle 25.png"
        alt="Profile Image"
        width={297}
        height={297}
        className="rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-[#3C3D3E] text-[18px] font-normal">Contact Details</h1>
        <h2 className="text-[27px] font-normal">ayush.barnwal@brightscout.com</h2>
        <h2 className="text-[27px] font-normal">+91 8651447521</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#3C3D3E] text-[18px] font-normal">Social</h1>
        {["Linkedin", "Instagram", "Twitter", "Webflow", "Figma"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[27px] font-normal cursor-pointer hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profile;
