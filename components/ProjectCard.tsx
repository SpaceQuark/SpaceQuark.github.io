import React, { Children, ComponentType } from "react";
import Image, { StaticImageData } from "next/image";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { IconType } from "react-icons";

interface ProjectInfo {
  url?: string | string[];
  github?: string | string[];
}
const ProjectInfoContext = React.createContext<ProjectInfo>({});

interface LinkProps {
  url: string;
}

const LinkIcon = ({ url, icon: Icon }: { url: string; icon: IconType }) => {
  return (
    <a
      className="opacity-50 hover:opacity-90"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className={"h-5 w-5"} />
    </a>
  );
};

const Link = ({ url }: LinkProps) => (
  <LinkIcon
    url={url.startsWith("http") ? url : `https://${url}`}
    icon={FiLink}
  />
);

const GitHub = ({ url }: LinkProps) => (
  <LinkIcon
    url={
      url.includes("/")
        ? `https://github.com/${url}`
        : `https://github.com/SpaceQuark/${url}`
    }
    icon={FaGithub}
  />
);

const LinksBase = ({
  urls,
  as: Tag,
}: {
  urls: string | string[];
  as: ComponentType<LinkProps>;
}) => {
  if (typeof urls === "string") {
    return <Tag url={urls} />;
  }
  return (
    <>
      {urls.map((u) => (
        <Tag key={u} url={u} />
      ))}
    </>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const info = React.useContext(ProjectInfoContext);
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-dark-800 dark:text-dark-100 text-2xl font-medium">
        {children}
      </h2>
      <div className="text-dark-500 dark:text-dark-200 flex gap-2">
        {info.url && <LinksBase as={Link} urls={info.url} />}
        {info.github && <LinksBase as={GitHub} urls={info.github} />}
      </div>
    </div>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  if (Children.count(children) === 1) {
    return <p>{children}</p>;
  }
  return <div className="space-y-2">{children}</div>;
};

// const ProjectImage = ({ src }: { src: StaticImageData }) => {
//   return (
//     <Image
//       className="mx-auto rounded"
//       placeholder="blur"
//       src={src}
//       alt="project image"
//     />
//   );
// };

const ProjectCard = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ProjectInfo) => {
  return (
    <ProjectInfoContext.Provider value={props}>
      <div
        className={`dark:text-dark-200 rounded-xl px-4 py-4 hover:animate-pulse
      ${className}`}
      >
        {children}
      </div>
    </ProjectInfoContext.Provider>
  );
};
ProjectCard.Title = Title;
ProjectCard.Description = Description;
// ProjectCard.Image = ProjectImage;
export default ProjectCard;
