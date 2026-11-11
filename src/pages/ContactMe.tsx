import React from "react";

const CURRENT_YEAR = new Date().getFullYear();
const EMAIL = "harryfreney639@gmail.com";

export default function ContactMe() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 pb-24 pt-16 sm:px-10 sm:pb-32">
      <div className="contact-panel mx-auto max-w-6xl rounded-3xl border px-7 py-12 sm:px-12 sm:py-16">
        <p className="section-kicker">Have a project in mind?</p>
        <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let’s connect.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-base-content/65">
              Find me online, or send me an email.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="button-outline inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold"
              href="https://github.com/HarryF123"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.61 1.21 3.25.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub
            </a>
            <a
              className="button-outline inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold"
              href="https://www.linkedin.com/in/harryfreney/"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.33h2.97v9.57ZM6.45 8.02a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.48 10.88h-2.97v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.65V9.33h2.85v1.31h.04c.4-.75 1.37-1.55 2.81-1.55 3 0 3.58 1.98 3.58 4.55v5.26Z" />
              </svg>
              LinkedIn
            </a>
            <a
                className="button-outline inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold"
                href={`mailto:${EMAIL}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-6.46 4.84a1.9 1.9 0 0 1-2.28 0L4.4 8.25a1 1 0 1 1 1.2-1.6l6.4 4.8 6.4-4.8a1 1 0 1 1 1.2 1.6Z" />
                </svg>
                {EMAIL}
              </a>
          </div>
        </div>
      </div>
      <footer className="mx-auto mt-10 max-w-6xl text-sm text-base-content/45">
        © {CURRENT_YEAR} Harry Freney
      </footer>
    </section>
  );
}
