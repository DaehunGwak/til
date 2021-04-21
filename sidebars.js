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
          label: "실전! 스프링 부트 JPA 활용 1",
          items: [
            "spring/practical-boot-jpa-1/00-intro",
            "spring/practical-boot-jpa-1/01-setting",
          ],
        },
        {
          type: "category",
          label: "김영한님의 스프링 입문 - 노트",
          items: [
            "spring/beginner/0-intro",
            "spring/beginner/1-project-settings",
            "spring/beginner/2-web-dev-basic",
            "spring/beginner/3-dev-backend",
            "spring/beginner/4-bean-dependency",
            "spring/beginner/5-web-mvc",
            "spring/beginner/6-spring-db",
            "spring/beginner/7-aop",
            "spring/beginner/8-wrap-up",
            "spring/beginner/9-review",
            "spring/beginner/999-intellij-shortcut",
          ],
        },
      
      ],
    },
    {
      type: "category",
      label: "Java",
      items: [
        {
          type: "category",
          label: "이펙티브 자바 3판 스터디",
          items: [
            "java/effective-java/01-intro",
            "java/effective-java/02-destroy-create-object",
          ]
        },
        {
          type: "category",
          label: "백기선님의 기본 live-study",
          items: [
            "java/live-study/01-jvm",
          ]
        },
        "java/mac-jenv",
        "java/mac-tomcat",
      ],
    },
    {
      type: "category",
      label: "MySQL",
      items: [
        "mysql/docker-mysql",
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
      label: "git",
      items: ["git/config-account"],
    },
    {
      type: "category",
      label: "책",
      items: [
        "books/clean-coder",
        "books/python-algo-interview",
        "books/practices-of-the-python-pro",
        {
          type: "category",
          label: "클린코드",
          items: [
            "books/cleancode/01",
            "books/cleancode/02",
          ]
        }
      ]
    },    
    {
      type: "category",
      label: "Docusaurus",
      items: ["docusaurus/til"],
    },
  ],
};
