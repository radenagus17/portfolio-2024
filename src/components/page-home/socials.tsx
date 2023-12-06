import React, { FC } from "react";
import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiDiscordFill,
  RiTwitterFill,
} from "react-icons/ri";

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

type SocialType = {
  path: string;
  name: any;
};

const icons: SocialType[] = [
  {
    path: "/",
    name: <RiDiscordFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiTwitterFill />,
  },
];

const Socials: FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((item: SocialType, i: number) => (
        <Link key={i} href={item.path}>
          <div className={`${iconsStyles}`}>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
