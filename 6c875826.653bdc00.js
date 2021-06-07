(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),l=(r(0),r(153)),i={id:"00-intro",title:"00. \uc18c\uac1c"},c={unversionedId:"spring/practical-boot-jpa-1/00-intro",id:"spring/practical-boot-jpa-1/00-intro",isDocsHomePage:!1,title:"00. \uc18c\uac1c",description:"\ubcf8 \ub178\ud2b8 \uc815\ub9ac\ub294 \uae40\uc601\ud55c\ub2d8\uc758 \uc778\ud504\ub7f0, \uc2e4\uc804! \uc2a4\ud504\ub9c1 \ubd80\ud2b8\uc640 JPA \ud65c\uc6a9 1 - \uc6f9 \uc560\ud50c\ub9ac\uc5d0\ud0a4\uc158 \uac1c\ubc1c \uc744 \ub4e3\uace0 \ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",source:"@site/docs/spring/practical-boot-jpa-1/00-intro.md",slug:"/spring/practical-boot-jpa-1/00-intro",permalink:"/til/docs/spring/practical-boot-jpa-1/00-intro",editUrl:"https://github.com/daehungwak/til/edit/main/docs/spring/practical-boot-jpa-1/00-intro.md",version:"current",lastUpdatedAt:1617714739,sidebar:"docs",previous:{title:"10. \uac1d\uccb4 \uc9c0\ud5a5 \ucffc\ub9ac \uc5b8\uc5b41 - \uae30\ubcf8",permalink:"/til/docs/spring/jpa/10"},next:{title:"01. \ud504\ub85c\uc81d\ud2b8 \uc138\ud305",permalink:"/til/docs/spring/practical-boot-jpa-1/01-setting"}},o=[{value:"\ub2e4\ub8e8\uac8c \ub418\ub294 \ub3c4\uad6c",id:"\ub2e4\ub8e8\uac8c-\ub418\ub294-\ub3c4\uad6c",children:[]},{value:"\uac15\uc758\ubaa9\ud45c",id:"\uac15\uc758\ubaa9\ud45c",children:[]},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",children:[]},{value:"\uac15\uc758 \uad6c\uc131",id:"\uac15\uc758-\uad6c\uc131",children:[]},{value:"\uac00\uc7a5 \uc911\uc694\ud55c \ubd80\ubd84",id:"\uac00\uc7a5-\uc911\uc694\ud55c-\ubd80\ubd84",children:[]}],b={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\ubcf8 \ub178\ud2b8 \uc815\ub9ac\ub294 \uae40\uc601\ud55c\ub2d8\uc758 \uc778\ud504\ub7f0, ",Object(l.b)("inlineCode",{parentName:"p"},"\uc2e4\uc804! \uc2a4\ud504\ub9c1 \ubd80\ud2b8\uc640 JPA \ud65c\uc6a9 1 - \uc6f9 \uc560\ud50c\ub9ac\uc5d0\ud0a4\uc158 \uac1c\ubc1c")," \uc744 \ub4e3\uace0 \ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\n\ubb38\uc81c\uac00 \uc788\uc744 \uc2dc, \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\ub2e4.")),Object(l.b)("h2",{id:"\ub2e4\ub8e8\uac8c-\ub418\ub294-\ub3c4\uad6c"},"\ub2e4\ub8e8\uac8c \ub418\ub294 \ub3c4\uad6c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Spring Boot",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gradle"),Object(l.b)("li",{parentName:"ul"},"tomcat"),Object(l.b)("li",{parentName:"ul"},"thymeleaf"))),Object(l.b)("li",{parentName:"ul"},"JPA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Hibernate")))),Object(l.b)("h2",{id:"\uac15\uc758\ubaa9\ud45c"},"\uac15\uc758\ubaa9\ud45c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc2e4\ubb34\uc5d0 \uac00\uae4c\uc6b4 spring boot + JPA \ub97c \ud65c\uc6a9\ud55c \ubcf5\uc7a1\ud55c \uc608\uc81c")),Object(l.b)("h2",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ucc98\uc74c\ubd80\ud130 \ub05d\uac00\uc9c0 \ud558\ub098\uc758 \ud504\ub85c\uc81d\ud2b8\ub85c \ucf54\ub529\uc73c\ub85c \uc644\uc131")),Object(l.b)("h2",{id:"\uac15\uc758-\uad6c\uc131"},"\uac15\uc758 \uad6c\uc131"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\uc6f9 \uc571 \uac1c\ubc1c (\uc9c0\uae08 \uac15\uc758)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"DB \uc124\uacc4"),Object(l.b)("li",{parentName:"ul"},"\ud575\uc2ec \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \uac1c\ubc1c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\uc790\uc5f0\uc2a4\ub7fd\uac8c \ub3c4\uba54\uc778 \uc8fc\ub3c4 \uc124\uacc4\ub97c \ubc30\uc6b8 \uc218 \uc788\uc74c"))),Object(l.b)("li",{parentName:"ul"},"\uc6f9 \uacc4\uce35 \uac1c\ubc1c")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"API \ucd5c\uc801\ud654")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"REST api \uac1c\ubc1c"),Object(l.b)("li",{parentName:"ul"},"\uc131\ub2a5 \ucd5c\uc801\ud654",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"JPA \uc870\ud68c \uc131\ub2a5 \ucd5c\uc801\ud654 \ub178\ud558\uc6b0"),Object(l.b)("li",{parentName:"ul"},"6\ub2e8\uacc4\uc758 \uc131\ub2a5 \ud29c\ub2dd"),Object(l.b)("li",{parentName:"ul"},"JPA \uc131\ub2a5 \ubb38\uc81c\uc758 90% \uac00 \ud574\uacb0 \uac00\ub2a5\ud560 \uc788\ub3c4\ub85d \uc81c\uacf5")))),Object(l.b)("h2",{id:"\uac00\uc7a5-\uc911\uc694\ud55c-\ubd80\ubd84"},"\uac00\uc7a5 \uc911\uc694\ud55c \ubd80\ubd84"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \uc9c1\uc811 \ucf54\ub529!")))}p.isMDXComponent=!0},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,j=u["".concat(i,".").concat(m)]||u[m]||O[m]||l;return r?a.a.createElement(j,c(c({ref:t},b),{},{components:r})):a.a.createElement(j,c({ref:t},b))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);