"use client";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import React, { FC } from "react";
import Form from "./form";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary" />
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Togather.</h1>
            <p className="subtitle max-w-[400px]">
              Please leave your details and message, and I&apos;ll get back to
              you shortly.
            </p>
          </div>
          {/* <div className="border"> */}
          <Player
            autoplay
            loop
            src="/assets/contact/workTogather.json"
            style={{ height: "450px", width: "450px" }}
            // direction={-1}
            // speed={0.8}
            // controls={true}
          />
          {/* </div> */}
          {/* <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div> */}
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-7">
              <MailIcon size={18} className="text-primary" />
              <div>vaghuz@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-7">
              <HomeIcon size={18} className="text-primary" />
              <div>Malaka II Street No. 50, West Jakarta City</div>
            </div>
            <div className="flex items-center gap-x-7">
              <PhoneIcon size={18} className="text-primary" />
              <div>+62 852 425 88 580</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
