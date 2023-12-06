import React, { FC, useEffect, useState } from "react";
import ThemeToggler from "../themeToggler";
import Logo from "./logo";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [header, setHeader] = useState<boolean>(false);

  useEffect(() => {
    var f = () => (window.scrollY > 50 ? setHeader(true) : setHeader(false));
    window.addEventListener("scroll", f);

    return () => window.removeEventListener("scroll", f);
  });

  const pathname = usePathname();

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles={"hidden xl:flex gap-x-8 items-center"}
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
