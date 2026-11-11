import React from "react";
import { TabId } from "../assets/Types";

interface HeaderProps {
  activeTab: TabId;
  theme: "dark" | "light";
  onThemeToggle: () => void;
  onTabChange: (tab: TabId) => void;
}

const TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header({
  activeTab,
  theme,
  onThemeToggle,
  onTabChange,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
      <nav
        aria-label="Page sections"
        className="portfolio-nav flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border px-2 py-2 backdrop-blur-xl"
      >
        <a
          href="#home"
          className="whitespace-nowrap px-2 text-sm font-bold tracking-tight sm:px-5 sm:text-base"
          onClick={() => onTabChange("home")}
        >
          Harry Freney
        </a>
        <span aria-hidden="true" className="h-7 border-l border-base-content/10" />
        {TABS.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            aria-current={activeTab === tab.id ? "location" : undefined}
            className={`whitespace-nowrap rounded-full px-2 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
              activeTab === tab.id
                ? "bg-base-200 text-base-content"
                : "text-base-content/70 hover:bg-base-200/70 hover:text-base-content"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="theme-toggle absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full border p-2"
        onClick={onThemeToggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
      </button>
    </header>
  );
}
