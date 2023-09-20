import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import NavBar from "@/components/NavBar";
import PTS from "@/components/PTS";
import Typing from "@/components/Typing";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  const [temp, setTemp] = useState(0);
  // const [day, setDay] = useState(1);

  // useEffect(() => {
  //   async function getWeather() {
  //     const res = await fetch("/api/weather.ts", { cache: "no-store" });
  //     const data = await res.json();
  //     setTemp(data.current_weather.temperature);
  //   }
  //   getWeather();
  // }, []);

  return (
    <div>
      <Head>
        <title> Richard&apos;s Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PTS />
      <NavBar />
      <div className={"bg-dark-200  h-screen px-4 dark:bg-black sm:px-8"}>
        <div
          className={
            "mx-auto flex w-full max-w-prose flex-col justify-center py-16"
          }
        >
          <section
            className={
              "text-dark-900 mt-16 w-full self-start dark:text-gray-50"
            }
          >
            <h1 className={"text-center text-4xl font-semibold "}>
              Richard Chen
            </h1>
            <br />
            <h3 className={"text-center text-2xl"}>
              <Typing>
                {["I'm a problem solver.", "I'm a programmer.", "I do math."]}
              </Typing>
            </h3>
          </section>
          <section className="text-md my-8 space-y-4">
            <p>
              I am a passionate problem solver who thrives at the intersection
              of computer science and mathematics. My keen interests lies in
              leveraging these skills to develop innovative solutions to
              real-world challenges.
            </p>
            <p>
              I am currently a ICS honors student studying computer science and
              mathematics at the UCI. These are some of the{" "}
              <a
                href="/coursework"
                rel="noreferrer"
                className={
                  "rounded bg-fuchsia-100 px-0.5 py-0.5 font-medium text-fuchsia-600 hover:text-fuchsia-500 dark:bg-fuchsia-900 dark:text-fuchsia-200 dark:hover:bg-fuchsia-800 dark:hover:text-fuchsia-100"
                }
              >
                courses
              </a>{" "}
              that I have taken.
            </p>

            <p>
              Check out my GitHub (
              <a
                href="https://github.com/SpaceQuark"
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded bg-fuchsia-100 px-0.5 py-0.5 font-medium text-fuchsia-600 hover:text-fuchsia-500 dark:bg-fuchsia-900 dark:text-fuchsia-200 dark:hover:bg-fuchsia-800 dark:hover:text-fuchsia-100"
                }
              >
                @SpaceQuark
              </a>
              ) or{" "}
              <Link
                href="/projects"
                className="font-medium text-fuchsia-700 hover:text-fuchsia-500 dark:text-fuchsia-500 dark:hover:text-fuchsia-400"
              >
                ~/projects
              </Link>{" "}
              to see more cool projects!
            </p>
          </section>
          <section className={"self-stretch"}>
            <h3 className="text-dark-500 text-center text-2xl font-light"></h3>
          </section>
        </div>
      </div>

      {/* <div className="static bottom-5">
        <p className=" ml-2 text-sm italic text-gray-600">
          it&apos;s {temp}&#176; celsius in Santa Clara
        </p>
      </div> */}
    </div>
  );
}
