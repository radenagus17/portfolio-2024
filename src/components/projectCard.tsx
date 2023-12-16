"use client";
import { ProjectType } from "@/data";
import React, { FC } from "react";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface ProjectCardProps {
  projects: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ projects }) => {
  const pathname = usePathname();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-[300px] flex items-center justify-center dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
            <Image
              className="absolute bottom-0 shadow-2xl rounded-t-lg"
              src={projects.image}
              alt=""
              width={247}
              height={250}
              priority
            />
            {/* button links */}
            <div className="flex gap-x-4">
              <Link
                className="bg-slate-900/30 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                href={projects.link}
                target="_blank"
              >
                <Link2Icon className="text-white" />
              </Link>
              <Link
                className="bg-slate-900/30 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                href={projects.github}
                target="_blank"
              >
                <Github className="text-white" />
              </Link>
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
            {projects.category}
          </Badge>
          <h4 className="h4 mb-1">{projects.name}</h4>
          <p
            className={`text-muted-foreground text-lg ${
              pathname === "/" ? "line-clamp-2" : ""
            }`}
          >
            {projects.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
