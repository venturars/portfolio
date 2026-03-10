// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid({
      autoTheme: false,
      theme: "base",
      mermaidConfig: {
        themeVariables: {
          darkMode: false,
          primaryColor: "#efe8dc",
          primaryTextColor: "#2b2b2b",
          primaryBorderColor: "#c7b199",
          secondaryColor: "#f4f1e8",
          secondaryBorderColor: "#c7b199",
          tertiaryColor: "#f7f5ef",
          background: "#f4f1e8",
          mainBkg: "#efe8dc",
          lineColor: "#2b2b2b",
          textColor: "#2b2b2b",
          fontFamily: "Lato, ui-sans-serif, system-ui, sans-serif",
        },
      },
    }),
    starlight({
      favicon: "/favicon.ico",
      title: "Portfolio",
      disable404Route: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      customCss: ["./src/styles/index.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
          },
        },
      ],
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/venturars",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ventura-rodriguez",
        },
        {
          icon: "telegram",
          label: "Telegram",
          href: "https://t.me/ventura_r_s",
        },
        {
          icon: "rocket",
          label: "Website",
          href: "https://www.venturarodriguez.xyz",
        },
      ],
      sidebar: [
        {
          label: "Professional Projects",
          items: [
            {
              label: "Beraborrow & YariFi",
              slug: "professional-project/beraborrow-yarifi",
            },
            {
              label: "Audicity & Radxu",
              slug: "professional-project/audicity-radxu",
            },
            {
              label: "Unlockd & The Lockeys",
              slug: "professional-project/unlockd-lockeys",
            },
          ],
        },
        // {
        //   label: "Instructor Experiences",
        //   items: [
        //     { label: "Neoland", slug: "instructor-experience/neoland" },
        //     { label: "ISDI Coders", slug: "instructor-experience/isdicoders" },
        //   ],
        // },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
