import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
        <div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About
          </h2>
          <p className="section-kicker">A little about me</p>
        </div>
        <div className="max-w-2xl">
          <p className="text-xl leading-8 text-base-content/75 sm:text-2xl sm:leading-10">
            A software engineer, with more than 4 years of experience in continuous
            integration, testing, and deployment. 
          </p>
          <p className="mt-6 leading-7 text-base-content/60">
            Interested in technologies from a young age, I completed my Bsc in Computer Science & Information Technology in 2023, from University of Galway, Ireland in 2023; Graduating with a 2.1.
          </p>
          <p className="mt-6 leading-7 text-base-content/60">
            I enjoy exploring new technologies, and building tools, apps and games that make life easier and more fun. I have a passion for learning, and I am always looking for new challenges to tackle.
          </p>
          <p className="mt-6 leading-7 text-base-content/60">
            When I'm not working on projects, professional or personal, I greatly enjoy playing football, going to the gym, playing video games and reading.
          </p>
        </div>
      </div>
    </section>
  );
}
