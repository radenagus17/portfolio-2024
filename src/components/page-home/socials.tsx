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
    path: "https://discord.gg/ZgMjQJ3m",
    name: <RiDiscordFill />,
  },
  {
    path: "https://www.linkedin.com/in/radenagus17/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/radenagus17",
    name: <RiGithubFill />,
  },
  {
    path: "https://instagram.com/radenagus17_",
    name: <RiInstagramFill />,
  },
  {
    path: "https://twitter.com/radenagus17_",
    name: <RiTwitterFill />,
  },
];

const Socials: FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((item: SocialType, i: number) => (
        <Link key={i} href={item.path} target="_blank">
          <div className={`${iconsStyles}`}>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
