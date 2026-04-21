"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("@/components/main/EarthCanvas"), {
  ssr: false,
});

const FORM_FIELDS = {
  name: { span: "Your Name", placeholder: "What's your name?" },
  email: { span: "Your Email", placeholder: "What's your email?" },
  message: { span: "Your Message", placeholder: "What do you want to say?" },
};

const INITIAL_STATE = Object.fromEntries(
  Object.keys(FORM_FIELDS).map((key) => [key, ""])
);

// ✅ FINAL FIX (as const - no TypeScript error)
const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
} as const;

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
} as const;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulated submit (replace with EmailJS later)
    setTimeout(() => {
      alert("Contact form submitted! Email integration coming soon.");
      setLoading(false);
      setForm(INITIAL_STATE);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-6"
    >
      <h2 className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
        Contact Me
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Got a project or question? Drop me a message.
      </p>

      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-4 xl:flex-row w-full max-w-5xl">

        {/* Form */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-[0.75] rounded-2xl p-8"
          style={{
            background: "rgba(3, 0, 20, 0.37)",
            border: "1px solid rgba(112, 66, 248, 0.43)",
          }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8"
          >
            {Object.keys(FORM_FIELDS).map((input) => {
              const { span, placeholder } =
                FORM_FIELDS[input as keyof typeof FORM_FIELDS];
              const Component = input === "message" ? "textarea" : "input";

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 font-medium text-white">{span}</span>
                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[input]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="rounded-lg px-6 py-4 font-medium text-white outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500 transition-all"
                    style={{
                      background: "rgba(3, 0, 20, 0.37)",
                      border: "1px solid rgba(112, 66, 248, 0.38)",
                    }}
                    {...(input === "message" ? { rows: 7 } : {})}
                  />
                </label>
              );
            })}

            <button
              type="submit"
              className="w-fit rounded-xl px-8 py-3 font-bold text-white outline-none transition-all hover:opacity-80"
              style={{
                background: "linear-gradient(to right, #7042f8, #00d4ff)",
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth Globe */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 rounded-2xl"
        >
          <EarthCanvas />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;