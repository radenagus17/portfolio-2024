import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";

interface CtaProps {}

const Cta: FC<CtaProps> = ({}) => {
  return (
    <section className="py-24 bg-muted dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h2>
          <Link href={"/contact"}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
