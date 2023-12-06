import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

type LinksType = {
  path: string;
  name: string;
};

const links: LinksType[] = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const Nav: FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();

  return (
    <div className={`${containerStyles}`}>
      {links.map((item: LinksType, i: number) => (
        <Link
          key={item.name + i}
          href={item.path}
          className={`capitalize ${linkStyles}`}
        >
          {item.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
