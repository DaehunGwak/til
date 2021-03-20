(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(98)),c={id:"vue3-ts",title:"Vue 3 + Typescript"},l={unversionedId:"vue/vue-mastery/vue3-ts",id:"vue/vue-mastery/vue3-ts",isDocsHomePage:!1,title:"Vue 3 + Typescript",description:"1. Why Vue & TypeScript",source:"@site/docs/vue/vue-mastery/vue3-ts.md",slug:"/vue/vue-mastery/vue3-ts",permalink:"/til/docs/vue/vue-mastery/vue3-ts",editUrl:"https://github.com/daehungwak/til/edit/main/docs/vue/vue-mastery/vue3-ts.md",version:"current",lastUpdatedAt:1614695953,sidebar:"docs",previous:{title:"mac\uc5d0 jenv\uc73c\ub85c \uc5ec\ub7ec jdk \uc124\uce58",permalink:"/til/docs/java/mac-jenv"},next:{title:"npm + webpack \ube60\ub974\uac8c \uc2dc\uc791",permalink:"/til/docs/webpack/webpack-beginner"}},p=[{value:"1. Why Vue &amp; TypeScript",id:"1-why-vue--typescript",children:[{value:"TypeScript",id:"typescript",children:[]}]},{value:"2. Setting Up Vue 3 &amp; TypeScript",id:"2-setting-up-vue-3--typescript",children:[{value:"\uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uace0 \uc2f6\ub2e4\uba74",id:"\uae30\uc874-\ud504\ub85c\uc81d\ud2b8\uc5d0-\ucd94\uac00\ud558\uace0-\uc2f6\ub2e4\uba74",children:[]}]},{value:"3. Creating Components with TypeScript",id:"3-creating-components-with-typescript",children:[]}],o={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-why-vue--typescript"},"1. Why Vue & TypeScript"),Object(a.b)("h3",{id:"typescript"},"TypeScript"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"builds on JavaScript"),Object(a.b)("li",{parentName:"ul"},"using ",Object(a.b)("strong",{parentName:"li"},"static type definitions"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ub3d9\uc801 \ud0c0\uc785\uc5d0 \ub300\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \uc904\uc77c \uc218 \uc788\uc74c"))),Object(a.b)("li",{parentName:"ul"},"Vue3 \ubd80\ud130 \uc6d0\ud65c\ud788 \uc801\uc6a9 \uac00\ub2a5"),Object(a.b)("li",{parentName:"ul"},"\ubd80\ubd84\uc801\uc73c\ub85c \uc801\uc6a9 \uac00\ub2a5")),Object(a.b)("h2",{id:"2-setting-up-vue-3--typescript"},"2. Setting Up Vue 3 & TypeScript"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"install ",Object(a.b)("inlineCode",{parentName:"li"},"npm install -g @vue/cli")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vue create vue-3-and-typescript")),Object(a.b)("li",{parentName:"ul"},"select ",Object(a.b)("inlineCode",{parentName:"li"},"Manually select features")),Object(a.b)("li",{parentName:"ul"},"activate below options",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Choose Vue version"),Object(a.b)("li",{parentName:"ul"},"Babel"),Object(a.b)("li",{parentName:"ul"},"TypeScript"),Object(a.b)("li",{parentName:"ul"},"Linter / Formatter"))),Object(a.b)("li",{parentName:"ul"},"select ",Object(a.b)("inlineCode",{parentName:"li"},"3.x (preview)")),Object(a.b)("li",{parentName:"ul"},"Use class-stype compoennt syntax? ",Object(a.b)("inlineCode",{parentName:"li"},"No")),Object(a.b)("li",{parentName:"ul"},"Use Babel alongside TypeScript? ",Object(a.b)("inlineCode",{parentName:"li"},"Yes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ESLint + Prettier")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Lint on save")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"In dedicated config files")),Object(a.b)("li",{parentName:"ul"},"and choose the last option you preferred")),Object(a.b)("h3",{id:"\uae30\uc874-\ud504\ub85c\uc81d\ud2b8\uc5d0-\ucd94\uac00\ud558\uace0-\uc2f6\ub2e4\uba74"},"\uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uace0 \uc2f6\ub2e4\uba74"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"vue \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0\uc11c",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vue add typescript"))))),Object(a.b)("h2",{id:"3-creating-components-with-typescript"},"3. Creating Components with TypeScript"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'<script lang="ts">')," \uac00 \uc0c8\ub86d\uac8c \ub4f1\uc7a5 \ub418\uc5b4 \uc788\uc744 \uac70\uc784"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"import { defineComponent } from 'vue'"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Component \ub9cc\ub4e4\uc5b4\uc8fc\ub294 helper function"),Object(a.b)("li",{parentName:"ul"},"export default\ub85c \ucef4\ud3ec\ub10c\ud2b8 \ub9cc\ub4e4\ub54c \uc544\ub798\uc640 \uac19\uc774 \ub9cc\ub4e4 \uc218 \uc788\uc74c")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"<script lang=\"ts\">\nimport { defineComponent } from 'vue'\n\nexport default defineComponent({\n  name: 'DefaultComponent',\n  ...\n})\n<\/script>\n")))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),u=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||a;return n?i.a.createElement(d,l(l({ref:t},o),{},{components:n})):i.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);