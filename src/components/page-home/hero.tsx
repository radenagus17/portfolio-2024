import React, { FC } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTodoFill,
  RiArrowDownSLine,
  RiOrganizationChart,
} from "react-icons/ri";

// components
import DevImg from "./devImg";
import Badge from "./badge";
import Socials from "./socials";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="py-10 xl:py-24 h-[84dvh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is R. Agus Iman Sudrajat</h1>
            <p className="subtitle">
              Expert Software Engineering bringing 3 years of expertise in
              Technology. Effectively manages assignments and team members.
              Dedicated to self-development to provide expectation-exceeding
              service.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                download={true}
                href={"/CV 2024.pdf"}
                prefetch={false}
                target="_blank"
              >
                <Button variant={"secondary"} className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials icon */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
              endCountText="+"
              containerStyles="absolute top-[24%] -left-[5rem]"
            />
            {/* badge 2 */}
            <Badge
              icon={<RiTodoFill />}
              endCountNum={17}
              badgeText="Finished Projects"
              endCountText="+"
              containerStyles="absolute top-[80%] -left-[1rem]"
            />
            {/* badge 3 */}
            <Badge
              icon={<RiOrganizationChart />}
              endCountNum={20}
              badgeText="Libraries & Tools"
              endCountText="+"
              containerStyles="absolute top-[55%] -right-8"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[468px] bg-no-repeat relative bg-bottom"
              imgSrc="/assets/hero/developer.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
