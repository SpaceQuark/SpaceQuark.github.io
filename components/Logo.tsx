import { useState, useRef, useEffect } from "react";

const Icon = () => {
  // const [spin, setSpin] = useState(false);

  // const ref = useRef<SVGSVGElement>(null);

  // const handleClick = () => {
  //   setSpin(true);
  // };

  // useEffect(() => {
  //   if (!spin) return;

  //   const logo = ref.current;
  //   logo?.classList.add("animate-spin");

  //   const timeout = setTimeout(() => {
  //     setSpin(false);
  //     logo?.classList.remove("animate-spin");
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [spin]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="`icon icon-tabler icon-tabler-rocket``"
      // ref={ref}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      // onClick={handleClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
      <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
      <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    </svg>
  );
};

export default Icon;
