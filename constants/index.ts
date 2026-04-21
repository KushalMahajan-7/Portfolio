import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ================= SKILLS =================

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
] as const;

// ================= SOCIALS =================

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/KushalMahajan-7",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kushal-mahajan-007674292",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/__kushal__7",
  },
] as const;

// ================= FRONTEND =================

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI", image: "mui.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
] as const;

// ================= BACKEND =================

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Prisma", image: "prisma.png", width: 70, height: 70 },
  { skill_name: "Graphql", image: "graphql.png", width: 80, height: 80 },
] as const;

// ================= FULLSTACK =================

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
] as const;

// ================= OTHER =================

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
] as const;

// ================= PROJECTS =================

export const PROJECTS = [
  {
    title: "Invennzy – Smart Inventory Management System",
    description:
      "A web-based platform for labs to track instruments and automate workflows.",
    image: "/projects/project-1.jpeg",
    link: "https://example.com",
  },
  {
    title: "Timelazy – AI Timetable Generator",
    description:
      "AI-powered platform for conflict-free academic timetable generation.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Gradyze – Marks Management System",
    description:
      "Digital platform for managing student grades with analytics.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

// ================= ✅ FIXED FOOTER =================

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/KushalMahajan-7",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        link: "mailto:kushal@example.com",
      },
    ],
  },
] as const;

// ================= NAV =================

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact Me", link: "#contact" },
] as const;