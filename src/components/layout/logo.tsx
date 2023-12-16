import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt="logo" width={54} height={54} priority />
    </Link>
  );
};

export default Logo;
