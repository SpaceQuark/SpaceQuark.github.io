import PageLayout from "@/layouts/PageLayout";
import useColorMode from "@/hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Cool = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <PageLayout>
      <div className={"mx-auto w-full max-w-prose"}>
        <h1 className={"pt-12 text-4xl font-semibold"}>Cool</h1>
        <section className="text-md my-8 space-y-4">
          <p>
            Below are some great websites/resources I have found over the years.
          </p>
        </section>
        {/* <h2 className={"text-2xl font-semibold"}>Personal Library</h2> */}
        <section className="text-2xl font-semibold">
          <Link
            href="/cool/library"
            className="font-medium text-fuchsia-700 hover:text-fuchsia-500 dark:text-fuchsia-500 dark:hover:text-fuchsia-400"
          >
            Library
          </Link>
        </section>
        <section className="text-md my-4 space-y-4">
          <p>
            A collection of books I have read and recommend. Book topics range
            from CS/Math and Engineering to various self-helps.
          </p>
        </section>
        {/* <h2 className={"text-2xl font-semibold"}>Websites</h2>
        <section className="text-md my-4 space-y-4">
          <p>
            <Link
              href="https://detexify.kirelabs.org/classify.html"
              className="font-medium text-fuchsia-700 hover:text-fuchsia-500 dark:text-fuchsia-500 dark:hover:text-fuchsia-400"
            >
              Detexify
            </Link>
          </p>
        </section> */}
        <div className="mt-4 space-y-12"></div>
      </div>
    </PageLayout>
  );
};
export default Cool;
