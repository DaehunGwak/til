(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,s=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(s,o(o({ref:t},l),{},{components:n})):a.a.createElement(s,o({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(104)),c={id:"5-web-mvc",title:"5. \ud68c\uc6d0 \uad00\ub9ac \uc608\uc81c - \uc6f9 MVC \uac1c\ubc1c"},o={unversionedId:"spring/beginner/5-web-mvc",id:"spring/beginner/5-web-mvc",isDocsHomePage:!1,title:"5. \ud68c\uc6d0 \uad00\ub9ac \uc608\uc81c - \uc6f9 MVC \uac1c\ubc1c",description:"\ud648 \ud654\uba74",source:"@site/docs/spring/beginner/5-web-mvc.md",slug:"/spring/beginner/5-web-mvc",permalink:"/til/docs/spring/beginner/5-web-mvc",editUrl:"https://github.com/daehungwak/til/edit/main/docs/spring/beginner/5-web-mvc.md",version:"current",lastUpdatedAt:1617122432,sidebar:"docs",previous:{title:"4. \uc2a4\ud504\ub9c1 \ube48\uacfc \uc758\uc874\uad00\uacc4",permalink:"/til/docs/spring/beginner/4-bean-dependency"},next:{title:"6. \uc2a4\ud504\ub9c1 DB \uc811\uadfc \uae30\uc220",permalink:"/til/docs/spring/beginner/6-spring-db"}},b=[{value:"\ud648 \ud654\uba74",id:"\ud648-\ud654\uba74",children:[]},{value:"\ub4f1\ub85d",id:"\ub4f1\ub85d",children:[]},{value:"\uc870\ud68c",id:"\uc870\ud68c",children:[]}],l={toc:b};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\ud648-\ud654\uba74"},"\ud648 \ud654\uba74"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"http://localhost:8080/ \uc694\uccad \uc2dc",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ud1b0\ucea3\uc774 \ubc1b\uc544 \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uc5d0\uac8c \uac74\ub0b4\uc90c"),Object(i.b)("li",{parentName:"ul"},"\uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uc5d0\uac8c \ub9f5\ud551\ub418\uc5b4\uc788\ub294\uc9c0 \ud655\uc778\ud574\ubd04"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\uc5c6\uc73c\uba74")," /resources/static/index.html \uc744 \ub80c\ub354\ub9c1")))),Object(i.b)("h2",{id:"\ub4f1\ub85d"},"\ub4f1\ub85d"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@PostMapping")," \uc744 \uc0ac\uc6a9\ud558\uc5ec html form-data \uc785\ub825 \ubc1b\uae30 (HTTP POST)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@PostMapping("/members/new")\npublic String create(MemberForm form) { // MemberForm\uc5d0 <input> \uc758 name \uc18d\uc131\uc5d0 \ub9e4\uce6d\ub418\ub294 \uac12\ub4e4\uc744 \uc2a4\ud504\ub9c1\uc774 \ud30c\uc2f1\ud574\uc90c\n    Member member = new Member();\n    member.setName(form.getName());\n\n    memberService.join(member);\n\n    return "redirect:/";  // 302 redirect\ub85c \ubcc0\ud658\ud574\uc90c\n}\n')),Object(i.b)("h2",{id:"\uc870\ud68c"},"\uc870\ud68c"),Object(i.b)("p",null,"thymeleaf \ubb38\ubc95\uc73c\ub85c \uc870\ud68c"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'...\n<table>\n    <thead>\n    <tr>\n        <th>#</th>\n        <th>\uc774\ub984</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr th:each="member : ${members}">  \x3c!--model.addAttribute("members", members); \ub85c \uc8fc\uc785\ub41c \uac12\ub4e4--\x3e\n        <td th:text="${member.id}"></td> \x3c!--member.getId() \ub97c \uc774\uc6a9\ud574\uc11c \uac00\uc838\uc634--\x3e\n        <td th:text="${member.name}"></td> \n    </tr>\n    </tbody>\n</table>\n...\n')))}m.isMDXComponent=!0}}]);