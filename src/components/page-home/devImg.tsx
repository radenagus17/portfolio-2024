import Image from "next/image";
import React, { FC } from "react";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
  imgStyle?: string;
}

const DevImg: FC<DevImgProps> = ({ containerStyles, imgSrc, imgStyle }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        fill
        priority
        alt="devImg"
        quality={100}
        className={imgStyle}
      />
    </div>
  );
};

export default DevImg;
