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
          label: "자바 ORM 표준 JPA 프로그래밍",
          items: [
            "spring/jpa/00",
            "spring/jpa/01",
            "spring/jpa/02",
            "spring/jpa/03",
            "spring/jpa/04",
            "spring/jpa/05",
            "spring/jpa/06",
            "spring/jpa/09",
            "spring/jpa/10",
          ]
        },
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
          label: "모던 자바 인 액션",
          items: [
            "java/modern-java-in-action/04",
            "java/modern-java-in-action/05",
            "java/modern-java-in-action/06",
            "java/modern-java-in-action/07",
          ]
        },
        {
          type: "category",
          label: "이펙티브 자바",
          items: [
            "java/effective-java/01-intro",
            "java/effective-java/02-destroy-create-object",
            "java/effective-java/03-common-method",
            "java/effective-java/04-class-interface",
            "java/effective-java/05-generic",
            "java/effective-java/06-enum-annotation",
            "java/effective-java/07-lambda-stream",
          ]
        },
        {
          type: "category",
          label: "클린코드",
          items: [
            "java/cleancode/01",
            "java/cleancode/02",
            "java/cleancode/03",
            "java/cleancode/04",
            "java/cleancode/07",
            "java/cleancode/08",
            "java/cleancode/09",
            "java/cleancode/10",
            "java/cleancode/12",
            "java/cleancode/16",
            "java/cleancode/17",
          ]
        },
        {
          type: "category",
          label: "자바의 정석",
          items: [
            "java/essence-of-java/01-05",
          ]
        },
        {
          type: "category",
          label: "백기선님의 기본 live-study",
          items: [
            "java/live-study/01-jvm",
          ]
        },
        {
          type: "category",
          label: "유틸 정리",
          items: [
            "java/util/weak-hash-map",
          ]
        },
        "java/mac-jenv",
        "java/mac-tomcat",
      ],
    },
    {
      type: "category",
      label: "OOP",
      items: [
        "oop/solid",
      ]
    },
    {
      type: "category",
      label: "책",
      items: [
        {
          type: "category",
          label: "리팩터링 2판",
          items: [
            "books/refactoring/02"
          ]
        },
        "books/clean-coder",
        "books/python-algo-interview",
        "books/practices-of-the-python-pro",
      ]
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
      label: "MongoDB",
      items: [
        {
          type: "category",
          label: "MongoDB in Action",
          items: [],
        },
        "mongodb/docker-mongodb",
      ]
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
      label: "Docusaurus",
      items: ["docusaurus/til"],
    },
  ],
};
