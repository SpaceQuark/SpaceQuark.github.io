import PageLayout from "@/layouts/PageLayout";
import useColorMode from "@/hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Coursework = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <PageLayout>
      <div className={"mx-auto w-full max-w-prose"}>
        <h1 className={"pt-12 text-4xl font-semibold"}>Coursework</h1>
        <section className="text-md my-4 space-y-4">
          <p>Some of the courses I have taken at UC Irvine.</p>
        </section>
        {/* <h2 className={"text-2xl font-semibold"}>Personal Library</h2> */}
        <section className="text-2xl font-semibold">Completed </section>
        <p>These are some of the courses I have taken at UC Irvine.</p>
        <ul className="list-inside list-disc pt-4">
          <li>CS 122A: Intro to Data Management</li>
          <li>CS 161: Design and Analysis of Algorithms</li>
          <li>CS 162: Formal Languages and Automata Theory</li>
          <li>CS 164: Computational Geometry</li>
          <li>CS 165: Projects in Algorithms</li>
          <li>CS 171: Intro to Artificial Intelligence</li>
          <li>CS 178: Machine Learning and Data Mining</li>
          <li>ICS 51: Intro to Computer Organization</li>
          <li>ICS 53: Principles in System Design</li>
          <li>Math 13: Introduction to Abstract Mathematics</li>
          <li>Stats 120A: Introduction to Group Theory</li>
        </ul>

        <section className="pt-4 text-2xl font-semibold">
          In Progress (Fall 2023)
        </section>
        <ul className="list-inside list-disc pt-4">
          <li> CS 121: Information Retrieval</li>
          <li> CS 169: Introduction to Optimization</li>
          <li> CS 117: Project in Computer Vision</li>
          <li> Stats 120A: Introduction to Probability and Statistics</li>
        </ul>

        <section className="pt-4 text-2xl font-semibold">
          Planned (Winter 2024)
        </section>
        <ul className="list-inside list-disc pt-4">
          <li> CS 163: Graph Algorithms</li>
          <li> CS 166: Quantum Computation and Information</li>
          <li> CS 277: Control and Reinforcement Learning</li>
        </ul>
        <div className="mt-4 space-y-12"></div>
      </div>
    </PageLayout>
  );
};
export default Coursework;
