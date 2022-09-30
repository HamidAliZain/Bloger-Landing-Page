/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      lg: "976px",
      xl: "1440px",
    },
    extend: { 
      colors: {
        LightRed: "hsl(356, 100%, 66%)",
        VeryLightRed_CTA_hover_background: " hsl(355, 100%, 74%)",
        VeryDarkBlue_headings: " hsl(208, 49%, 24%)",
        White: " hsl(0, 0%, 100%)",
        GrayishBlue_footerText: "hsl(240, 2%, 79%)",
        VeryDarkGrayishBlue_bodyCopy: "hsl(207, 13%, 34%)",
        VeryDarkBlackBlue_footerBackground: "hsl(240, 10%, 16%)",
        cta: "linear-gradient(to right, hsl(13, 100%, 72%) ,  hsl(353, 100%, 62%))",
      },
      backgroundImage: {
        system: "linear-gradient(to right,  hsl(237, 17%, 21%) ,  hsl(237, 23%, 32%))",
        cta: "linear-gradient(to right,  hsl(13, 100%, 72%) ,   hsl(353, 100%, 62%))",
       },
    },
  },
  plugins: [],
};
