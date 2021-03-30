(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),l=(t(0),t(104)),i={id:"2-web-dev-basic",title:"2. \uc2a4\ud504\ub9c1 \uc6f9 \uac1c\ubc1c \uae30\ucd08"},o={unversionedId:"spring/beginner/2-web-dev-basic",id:"spring/beginner/2-web-dev-basic",isDocsHomePage:!1,title:"2. \uc2a4\ud504\ub9c1 \uc6f9 \uac1c\ubc1c \uae30\ucd08",description:"\uc6f9 \uac1c\ubc1c \uc885\ub958",source:"@site/docs/spring/beginner/2-web-dev-basic.md",slug:"/spring/beginner/2-web-dev-basic",permalink:"/til/docs/spring/beginner/2-web-dev-basic",editUrl:"https://github.com/daehungwak/til/edit/main/docs/spring/beginner/2-web-dev-basic.md",version:"current",lastUpdatedAt:1616925111,sidebar:"docs",previous:{title:"1. \ud504\ub85c\uc81d\ud2b8 \ud658\uacbd\uc124\uc815",permalink:"/til/docs/spring/beginner/1-project-settings"},next:{title:"3. \ud68c\uc6d0 \uad00\ub9ac\uc608\uc81c - \ubc31\uc5d4\ub4dc \uac1c\ubc1c",permalink:"/til/docs/spring/beginner/3-dev-backend"}},c=[{value:"\uc6f9 \uac1c\ubc1c \uc885\ub958",id:"\uc6f9-\uac1c\ubc1c-\uc885\ub958",children:[{value:"\uc815\uc801 \ucee8\ud150\uce20",id:"\uc815\uc801-\ucee8\ud150\uce20",children:[]},{value:"MVC + template \uc5d4\uc9c4",id:"mvc--template-\uc5d4\uc9c4",children:[]},{value:"API",id:"api",children:[]}]}],b={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\uc6f9-\uac1c\ubc1c-\uc885\ub958"},"\uc6f9 \uac1c\ubc1c \uc885\ub958"),Object(l.b)("h3",{id:"\uc815\uc801-\ucee8\ud150\uce20"},"\uc815\uc801 \ucee8\ud150\uce20"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc11c\ubc84\uc5d0\uc11c html, css, js \uac19\uc740\uac83\uc744 \ub0b4\ub824\uc90c"),Object(l.b)("li",{parentName:"ul"},"spring \uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \uc815\uc801 \ucee8\ud150\uce20 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc74c"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"main/resrouces/static")," \uacbd\ub85c\uc5d0 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uba74 \uc790\ub3d9 \ub9f5\ud551")),Object(l.b)("h4",{id:"spring\uc5d0\uc11c-\uc815\uc801\ucee8\ud150\uce20-\uc694\uccad\uc774-\ub4e4\uc5b4\uc654\uc744-\ub54c-\ucc98\ub9ac-\uc21c\uc11c"},"spring\uc5d0\uc11c \uc815\uc801\ucee8\ud150\uce20 \uc694\uccad\uc774 \ub4e4\uc5b4\uc654\uc744 \ub54c \ucc98\ub9ac \uc21c\uc11c"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"html\uc744 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc694\uccad"),Object(l.b)("li",{parentName:"ol"},"\ub0b4\uc7a5 \ud1b0\ucea3\uc774 \uc694\uccad\uc744 \ubc1b\uc74c"),Object(l.b)("li",{parentName:"ol"},"\uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ucee8\ud2b8\ub864\ub7ec \ub9f5\ud551\uc744 \ucc3e\uc9c0\ub9cc \uc5c6\uc74c"),Object(l.b)("li",{parentName:"ol"},"resources \uacbd\ub85c\uc5d0 \ud30c\uc77c \uc720\ubb34 \ud655\uc778 \ud6c4, \uc788\uc73c\uba74 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ud574\ub2f9 \ub9ac\uc2a4\uc18c \uc804\uc1a1")),Object(l.b)("h3",{id:"mvc--template-\uc5d4\uc9c4"},"MVC + template \uc5d4\uc9c4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MVC: Model, View, Controller")),Object(l.b)("h4",{id:"mvc-\uc0d8\ud50c-\ucf54\ub4dc"},"mvc \uc0d8\ud50c \ucf54\ub4dc"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping("hello-mvc")\npublic String helloMvc(@RequestParam(value = "name", required = false) String name, Model model) {\n    model.addAttribute("name", name);\n    return "hello-template";\n}\n')),Object(l.b)("h4",{id:"http-get-hello-mvcname123-\uc774-\uc694\uccad\ub418\uc5c8\uc744-\ub54c-\uc77c\uc5b4\ub098\ub294-\uc77c"},"HTTP GET ",Object(l.b)("inlineCode",{parentName:"h4"},"/hello-mvc?name=123")," \uc774 \uc694\uccad\ub418\uc5c8\uc744 \ub54c \uc77c\uc5b4\ub098\ub294 \uc77c"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ud1b0\ucea3\uc774 \ud574\ub2f9\uc694\uccad\uc744 \ubc1b\uc544 \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uc5d0 \ub118\uaca8\uc900\ub2e4"),Object(l.b)("li",{parentName:"ol"},"\uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uac00 ",Object(l.b)("inlineCode",{parentName:"li"},"helloController"),"\uc5d0 ",Object(l.b)("inlineCode",{parentName:"li"},'GetMapping("hello-mvc")')," \ub418\uc5b4 \uc788\ub294 \uacf3\uc5d0 \ub77c\uc6b0\ud305 \ud568"),Object(l.b)("li",{parentName:"ol"},"\ub85c\uc9c1\uc744 \ucc98\ub9ac\ud558\uace0 ",Object(l.b)("inlineCode",{parentName:"li"},"viewResolver")," \ub85c model\uacfc hello-template \uc774\ub780 \uc815\ubcf4\ub97c \ub118\uae40"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"viewResolver"),"\uc5d0\uc11c \ubc1b\uc740 \uc815\ubcf4\ub85c Thymeleaf \ud15c\ud50c\ub9bf \uc5d4\uc9c4\uc744 \uc0ac\uc6a9\ud558\uc5ec html \ubcc0\ud658 \ud568"),Object(l.b)("li",{parentName:"ol"},"\ubcc0\ud658\ub41c html\uc744 \ube0c\ub77c\uc6b0\uc800\ub85c \uc804\uc1a1")),Object(l.b)("h3",{id:"api"},"API"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HTTP method\ub97c \uc774\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub9cc \uc804\uc1a1\ud558\ub294 \ubc29\uc2dd (not html, css, js)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ud615\uc2dd\uc73c\ub85c string, xml, json \ub4f1\uc774 \uc788\uc74c")))),Object(l.b)("h4",{id:"api-\uc0d8\ud50c-\ucf54\ub4dc"},"api \uc0d8\ud50c \ucf54\ub4dc"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping("hello-string")\n@ResponseBody\npublic String helloString(@RequestParam(value = "name", required = false, defaultValue = "default") String name) {\n    return "hello, " + name; // string \uc73c\ub85c \ubc18\ud658\n}\n\n@GetMapping("hello-api")\n@ResponseBody\npublic Hello helloApi(@RequestParam(value = "name", required = false, defaultValue = "default") String name) {\n    Hello hello = new Hello();\n    hello.setName(name);\n    return hello; // json \uc73c\ub85c \ubc18\ud658\n}\n\nstatic class Hello {\n    private String name;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n')),Object(l.b)("h4",{id:"responsebody-\ub3d9\uc791-\ubc29\uc2dd"},Object(l.b)("inlineCode",{parentName:"h4"},"@ResponseBody")," \ub3d9\uc791 \ubc29\uc2dd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HTTP\uc758 body\ub97c \uc9c1\uc811 \ubc18\ud658"),Object(l.b)("li",{parentName:"ul"},"viewResolver \ub300\uc2e0 ",Object(l.b)("inlineCode",{parentName:"li"},"HttpMessageConverter")," \ub3d9\uc791",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"string \uc744 \uc804\ub2ec \ubc1b\uc73c\uba74 ",Object(l.b)("inlineCode",{parentName:"li"},"StringHttpMessageConverter"),"\uac00 \ub3d9\uc791 (string type body \uc0dd\uc131)"),Object(l.b)("li",{parentName:"ul"},"\uac1d\uccb4\uac00 \ubc18\ud658\ub418\uba74 ",Object(l.b)("inlineCode",{parentName:"li"},"MappingJackson2HttpMessageConverter"),"\uac00 \ub3d9\uc791 (json type body \uc0dd\uc131)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"json converter\ub294 spring\uc5d0\uc11c \ud06c\uac8c ",Object(l.b)("inlineCode",{parentName:"li"},"jackson")," (\uae30\ubcf8) \uacfc ",Object(l.b)("inlineCode",{parentName:"li"},"gson")," (google) \uc774 \uc788\uc74c"))),Object(l.b)("li",{parentName:"ul"},"byte \ucc98\ub9ac \ub4f1\ub4f1 \uae30\ud0c0 \uc5ec\ub7ec HttpMessageConverter\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5b4 \uc788\uc74c")))))}p.isMDXComponent=!0}}]);