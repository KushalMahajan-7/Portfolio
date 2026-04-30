import Image from "next/image";
import Link from "next/link";
import InvennzyAnimation from "./InvennzyAnimation";
import TimelazAnimation from "./TimelazAnimation";
import GradyzeAnimation from "./GradyzeAnimation";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      {title.includes("Invennzy") ? (
        <div className="w-full">
          <InvennzyAnimation />
        </div>
      ) : title.includes("Timelazy") ? (
        <div className="w-full">
          <TimelazAnimation />
        </div>
      ) : title.includes("Gradyze") ? (
        <div className="w-full">
          <GradyzeAnimation />
        </div>
      ) : (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};