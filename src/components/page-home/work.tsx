"use client";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECT_DATA, ProjectType } from "@/data";
import ProjectCard from "../projectCard";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            My latest project involved harnessing the capabilities of Node.js,
            React.js, and Next.js to develop a cutting-edge web application.
          </p>
          <Link href={"/projects"}>
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {PROJECT_DATA.slice(0, 4).map((project: ProjectType, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <ProjectCard projects={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
