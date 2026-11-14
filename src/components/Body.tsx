import React, { useEffect, useState } from "react";
import { GitHubRepo } from "../assets/GitHubRepo";

const GITHUB_USER = "HarryF123";
const SHOWCASE = ["gaa-stor", "debloatR", "GamesProject"];

export default function Body() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Skip forks and repos with no description, so only your own work shows
        const filtered: GitHubRepo[] = data.filter((repo: GitHubRepo) =>
          SHOWCASE.includes(repo.name),
        );
        return Promise.all(
          filtered.map(async (repo) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/contents/expo`,
            );
            if (response.status === 404) {
              return { ...repo, expoGifUrl: null };
            }
            if (!response.ok) {
              throw new Error(`GitHub API returned ${response.status}`);
            }

            const files: { name: string; download_url: string | null }[] =
              await response.json();
            const gif = files
              .filter((file) => /\.gif$/i.test(file.name))
              .sort((a, b) => a.name.localeCompare(b.name))[0];
            return { ...repo, expoGifUrl: gif?.download_url ?? null };
          }),
        );
      })
      .then((repos) => {
        setRepos(repos);
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker text-center">Selected work</p>
        <h2 className="mb-4 mt-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center leading-7 text-base-content/60">
          A selection of my personal projects.
        </p>

        {status === "loading" && <p>Loading projects…</p>}
        {status === "error" && <p>Couldn't load projects from GitHub.</p>}

        {status === "done" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {repos.map((repo, index) => (
              <article key={repo.id} className="project-card overflow-hidden rounded-2xl border">
                <div className={`project-art project-art-${index % 2} flex aspect-[1.55] items-center justify-center ${repo.expoGifUrl ? "overflow-hidden" : "p-8"}`}>
                  {repo.expoGifUrl ? (
                    <img
                      className="h-full w-full object-cover"
                      src={repo.expoGifUrl}
                      alt={`${repo.name} demo`}
                    />
                  ) : (
                    <div className="project-window w-full max-w-sm rounded-xl border p-5 shadow-2xl">
                      <div className="mb-5 flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-current opacity-30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-current opacity-20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-current opacity-10" />
                      </div>
                      <div className="h-3 w-2/5 rounded-full bg-current opacity-20" />
                      <div className="mt-3 h-2 w-3/4 rounded-full bg-current opacity-10" />
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <span className="h-12 rounded-lg bg-current opacity-10" />
                        <span className="h-12 rounded-lg bg-current opacity-15" />
                        <span className="h-12 rounded-lg bg-current opacity-10" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{repo.name}</h3>
                    <a
                      className="project-link shrink-0 rounded-full border px-4 py-2 text-sm font-medium"
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View code <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <p className="mt-3 leading-6 text-base-content/65">
                    {repo.description}
                  </p>
                  {repo.language && (
                    <span className="mt-5 inline-block text-sm text-base-content/50">
                      {repo.language}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
