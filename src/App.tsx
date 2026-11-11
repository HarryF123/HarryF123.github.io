import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import { TabId } from "./assets/Types";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [pageProgress, setPageProgress] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const updateScrollState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setPageProgress(
        scrollableHeight > 0
          ? Math.round((window.scrollY / scrollableHeight) * 100)
          : 0,
      );

      const sectionIds: TabId[] = ["home", "projects", "about", "skills", "contact"];
      const activeSection = [...sectionIds].reverse().find((id) => {
        const section = document.getElementById(id);
        return (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.35
        );
      });
      if (activeSection) setActiveTab(activeSection);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div
      data-theme={theme}
      className="portfolio-app min-h-screen bg-base-100 text-base-content"
    >
      <Header
        activeTab={activeTab}
        theme={theme}
        onThemeToggle={() =>
          setTheme((currentTheme) => {
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            window.localStorage.setItem("portfolio-theme", nextTheme);
            return nextTheme;
          })
        }
        onTabChange={setActiveTab}
      />

      <main>
        <section
          id="home"
          className="hero-section scroll-mt-24 px-6 pb-24 pt-36 sm:px-10 sm:pt-40"
        >
          <div className="mx-auto grid min-h-[68vh] w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-2xl">
              <p className="mb-4 text-lg text-base-content/65 sm:text-2xl">
                Hello, I’m
              </p>
              <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
                Harry Freney
              </h1>
              <p className="mt-5 text-2xl text-base-content/65 sm:text-3xl">
                Software engineer
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-base-content/65 sm:text-lg sm:leading-8">
                Experienced in continuous integration, cloud-native development, and building scalable applications; passionate about exploring and creating with new technologies.
              </p>
              <a className="button-outline mt-8 inline-flex rounded-full px-6 py-3 font-semibold" href="#projects">
                Explore my projects <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="profile-orb flex aspect-square w-64 items-center justify-center rounded-full sm:w-80 lg:w-[26rem]">
                <span className="select-none text-7xl font-semibold tracking-tighter text-white/90 sm:text-8xl">
                  HF
                </span>
              </div>
            </div>
          </div>
        </section>

        <Body />
        <AboutMe />
        <Skills />
        <ContactMe />
      </main>

      <div
        className="radial-progress fixed bottom-5 right-5 z-20 bg-base-100 text-primary shadow-md"
        style={
          {
            "--value": pageProgress,
            "--size": "3.5rem",
            "--thickness": "4px",
          } as React.CSSProperties
        }
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={pageProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {pageProgress}%
      </div>
    </div>
  );
}