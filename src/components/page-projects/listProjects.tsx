"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECT_DATA, ProjectType } from "@/data";
import React, { FC, useState } from "react";
import ProjectCard from "../projectCard";

interface ListProjectsProps {}

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(PROJECT_DATA.map((item: ProjectType) => item.category)),
];

const ListProjects: FC<ListProjectsProps> = ({}) => {
  const [categories] = useState(uniqueCategories);
  const [defCategory, setDefCategory] = useState("all projects");
  const filteredProjects = PROJECT_DATA.filter((project) =>
    defCategory === "all projects" ? project : project.category === defCategory
  );
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={defCategory} className="mb-24 xl:mb-32">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category: string, i: number) => {
              return (
                <TabsTrigger
                  onClick={() => setDefCategory(category)}
                  key={i}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project: ProjectType, i: number) => {
              return (
                <TabsContent key={i} value={defCategory}>
                  <ProjectCard projects={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ListProjects;
