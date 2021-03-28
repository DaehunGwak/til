module.exports = {
  docs: [
    "main",
    {
      type: "category",
      label: "Web",
      items: [
        {
          html: [
            "web/html/intro",
            "web/html/elements",
            "web/html/document-metadata",
            "web/html/sections",
            "web/html/grouping",
          ],
          javascript: [
            "web/javascript/events",
            "web/javascript/debounce-throttle",
          ],
          "htmlcss-bugless-101": [
            "web/htmlcss/01-intro",
            "web/htmlcss/02-tags-basic",
          ],
          dom: [
            "web/dom/document-fragment",
          ],
          concept: ["web/concept/ssr"],
        },
      ],
    },
    {
      type: "category",
      label: "Spring",
      items: [
        {
          type: "category",
          label: "김영한님의 스프링 입문 - 노트",
          items: [
            "spring/beginner/0-intro",
            "spring/beginner/1-project-settings",
            "spring/beginner/2-web-dev-basic",
            "spring/beginner/3-dev-backend",
            "spring/beginner/999-intellij-shortcut",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Java",
      items: [
        "java/mac-jenv",
      ],
    },
    {
      type: "category",
      label: "Vue",
      items: [
        {
          "Vue Mastery": [
            "vue/vue-mastery/vue3-ts"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Webpack",
      items: [
        "webpack/webpack-beginner",
      ],
    },
    {
      type: "category",
      label: "책",
      items: [
        "books/clean-coder",
        "books/python-algo-interview",
        "books/practices-of-the-python-pro",
      ]
    },
    {
      type: "category",
      label: "Docusaurus",
      items: ["docusaurus/til"],
    },
  ],
};
