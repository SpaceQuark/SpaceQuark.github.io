import Project from "@/components/ProjectCard";
// const Project = React.lazy(() => import('@/components/ProjectCard'));

import PageLayout from "@/layouts/PageLayout";
import useColorMode from "@/hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import Image from "next/image";

const Projects = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <PageLayout>
      <div className={"mx-auto w-full max-w-prose"}>
        <h1 className={"pt-12 text-4xl font-semibold"}>Projects</h1>
        <div className="mt-4 space-y-12">
          <p>Under construction! check back later</p>
          <Project
            github={["SpaceQuark/Graph-Library"]}
            className={
              "dark:to-purple-100-900 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800"
            }
          >
            <Project.Title>Graph Library</Project.Title>
            <Project.Description>
              A modern and efficient graph object library with 25+ algorithms.
              The goal of this project is to provide a lightweight and
              user-friendly graph library using modern C++ functionalities.
            </Project.Description>
          </Project>
          <Project
            github={["SpaceQuark/SpaceQuark.github.io"]}
            className={
              "bg-gradient-to-tr from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900"
            }
          >
            <Project.Title>My Website</Project.Title>
            <Project.Description>
              My website! I learned a lot about web development this summer and
              I wanted to make a website to showcase my projects and skills. I
              build this website using Next.js, TailwindCSS, and TypeScript.
            </Project.Description>
          </Project>
        </div>
      </div>
    </PageLayout>
  );
};
export default Projects;
