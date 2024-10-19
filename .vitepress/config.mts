import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "徒然(Tsuredure) SNS",
  description: "徒然 SNS Developer Portal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "ホーム", link: "/" },
      { text: "ゴール", link: "/goal" },
    ],

    sidebar: [
      {
        items: [
          { text: "ゴール", link: "/goal" },
          { text: "要求", link: "/requirements" },
          { text: "利用技術", link: "/techniques" },
          { text: "課題", link: "/problems" },
          { text: "開発者", link: "/developers" },
          { text: "リファレンス", link: "/references" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tsuredure-sns/" },
    ],
  },
});
