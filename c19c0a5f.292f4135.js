(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),c=(n(0),n(91)),a={id:"debounce-throttle",title:"Debounce\uc640 Throttle"},l={unversionedId:"web/javascript/debounce-throttle",id:"web/javascript/debounce-throttle",isDocsHomePage:!1,title:"Debounce\uc640 Throttle",description:"fastcampus \uc2dc\ud06c\ub9bf \ucf54\ub4dc: \ud504\ub860\ud2b8\uc5d4\ub4dc UI \ucef4\ud3ec\ub10c\ud2b8\ud3b8 2\uac15\uc5d0\uc11c \ubaa8\ub974\ub294 \ubd80\ubd84 \uc815\ub9ac",source:"@site/docs/web/javascript/debounce-throttle.md",slug:"/web/javascript/debounce-throttle",permalink:"/til/docs/web/javascript/debounce-throttle",editUrl:"https://github.com/daehungwak/til/edit/main/docs/web/javascript/debounce-throttle.md",version:"current",lastUpdatedAt:1613578037,sidebar:"docs",previous:{title:"\uc774\ubca4\ud2b8 \ubc84\ube14\ub9c1, \ucea1\ucc98\ub9c1, \uc704\uc784",permalink:"/til/docs/web/javascript/events"},next:{title:"\uc2dc\uc791\ud558\uae30\uc5d0 \uc55e\uc11c",permalink:"/til/docs/web/htmlcss/01-intro"}},i=[{value:"debounce \uc608\uc81c",id:"debounce-\uc608\uc81c",children:[]},{value:"Refs",id:"refs",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"fastcampus \uc2dc\ud06c\ub9bf \ucf54\ub4dc: \ud504\ub860\ud2b8\uc5d4\ub4dc UI \ucef4\ud3ec\ub10c\ud2b8\ud3b8 2\uac15\uc5d0\uc11c \ubaa8\ub974\ub294 \ubd80\ubd84 \uc815\ub9ac")),Object(c.b)("p",null,"\uc5f0\uc18d\uc801\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"debounce: \ub9c8\uc9c0\ub9c9 \ud55c \ubc88\ub9cc \uc2e4\ud589"),Object(c.b)("li",{parentName:"ul"},"throttle: \uc77c\uc815 \uc2dc\uac04\uac04\uaca9\uc73c\ub85c \ud55c\ubc88\uc529 \ub9cc \uc2e4\ud589")),Object(c.b)("h2",{id:"debounce-\uc608\uc81c"},"debounce \uc608\uc81c"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"infinite scrolling \uc608\uc2dc")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const debounce = (func, delay) => {\n  let timeoutId = null;\n  return (...args) => {  // closure\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(func.bind(null, ...args), delay);\n  };\n}\n\nconst onScroll = (e) => {\n  const { clientHeight, scrollHeight, scrollTop } = e.target.scrollingElement;\n  if (scrollTop + clientHeight >= scrollHeight) {\n    // when to touch bottom\n    loadMore();\n  }\n};\n\ndocument.addEventListener("scroll", debounce(onScroll, 300));\n')),Object(c.b)("h2",{id:"refs"},"Refs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa"}),"https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://medium.com/@progjh/throttle-debounce-%EA%B0%9C%EB%85%90-%EC%9E%A1%EA%B8%B0-19cea2e85a9f"}),"https://medium.com/@progjh/throttle-debounce-%EA%B0%9C%EB%85%90-%EC%9E%A1%EA%B8%B0-19cea2e85a9f"))))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||s[d]||c;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);