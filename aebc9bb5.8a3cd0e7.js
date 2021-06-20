(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(158)),l={id:"00",title:"00. \uc18c\uac1c"},c={unversionedId:"spring/jpa/00",id:"spring/jpa/00",isDocsHomePage:!1,title:"00. \uc18c\uac1c",description:"\uc778\ud504\ub7f0 - \uc790\ubc14 ORM \ud45c\uc900 JPA \ud504\ub85c\uadf8\ub798\ubc0d - \uae30\ubcf8\ud3b8 \uc744 \ubcf4\uace0 \uc815\ub9ac",source:"@site/docs/spring/jpa/00.md",slug:"/spring/jpa/00",permalink:"/til/docs/spring/jpa/00",editUrl:"https://github.com/daehungwak/til/edit/main/docs/spring/jpa/00.md",version:"current",lastUpdatedAt:1619264822,sidebar:"docs",previous:{title:"01. \ud504\ub85c\uc81d\ud2b8 \uc138\ud305",permalink:"/til/docs/spring/practical-boot-jpa-1/01-setting"},next:{title:"01. JPA \uc18c\uac1c",permalink:"/til/docs/spring/jpa/01"}},o=[{value:"JPA",id:"jpa",children:[]},{value:"\uc2e4\ubb34\uc5d0\uc11c \uc5b4\ub824\uc6b4 \uc774\uc720",id:"\uc2e4\ubb34\uc5d0\uc11c-\uc5b4\ub824\uc6b4-\uc774\uc720",children:[]},{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",children:[{value:"\uac1d\uccb4\uc640 \ud14c\uc774\ube14 \uc124\uacc4 \ub9e4\ud551",id:"\uac1d\uccb4\uc640-\ud14c\uc774\ube14-\uc124\uacc4-\ub9e4\ud551",children:[]},{value:"JPA \ub0b4\ubd80 \ub3d9\uc791\ubc29\uc2dd \uc774\ud574",id:"jpa-\ub0b4\ubd80-\ub3d9\uc791\ubc29\uc2dd-\uc774\ud574",children:[]}]},{value:"\ud559\uc2b5 \ubc29\ubc95",id:"\ud559\uc2b5-\ubc29\ubc95",children:[]},{value:"JPA \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294\uac00",id:"jpa-\ub9ce\uc774-\uc0ac\uc6a9\ud558\ub294\uac00",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\uc778\ud504\ub7f0 - \uc790\ubc14 ORM \ud45c\uc900 JPA \ud504\ub85c\uadf8\ub798\ubc0d - \uae30\ubcf8\ud3b8 \uc744 \ubcf4\uace0 \uc815\ub9ac")),Object(i.b)("h2",{id:"jpa"},"JPA"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Java Persistent API"),Object(i.b)("li",{parentName:"ul"},"JPA \uac00 \ucffc\ub9ac\ub97c \uc790\ub3d9\uc73c\ub85c jdbc \ucc98\ub7fc SQL\uc744 \ub9cc\ub4e4 \ud544\uc694\uac00 \uc5c6\uc74c"),Object(i.b)("li",{parentName:"ul"},"\uc608\uc2dc: ",Object(i.b)("inlineCode",{parentName:"li"},"class MemberDAO")),Object(i.b)("li",{parentName:"ul"},"\ucffc\ub9ac\ub97c \uc9c1\uc811 \uc9e4\ub54c \ubcf4\ub2e8 \uc0dd\uc0b0\uc131\uc774 \uadf9\ub300\ud654 \ub428"),Object(i.b)("li",{parentName:"ul"},"\ub300\uc2e0 \uc775\ud788\ub294\ub370 \uc2dc\uac04\uc774 \uac78\ub9bc")),Object(i.b)("h2",{id:"\uc2e4\ubb34\uc5d0\uc11c-\uc5b4\ub824\uc6b4-\uc774\uc720"},"\uc2e4\ubb34\uc5d0\uc11c \uc5b4\ub824\uc6b4 \uc774\uc720"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uac1d\uccb4\uc640 \ud14c\uc774\ube14\uc744 \ub9f5\ud551\ud558\ub294 \uc62c\ubc14\ub978 \ubc29\ubc95\uc744 \uc775\ud788\uc9c0 \ubabb\ud574 \uadf8\ub7fc")),Object(i.b)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),Object(i.b)("h3",{id:"\uac1d\uccb4\uc640-\ud14c\uc774\ube14-\uc124\uacc4-\ub9e4\ud551"},"\uac1d\uccb4\uc640 \ud14c\uc774\ube14 \uc124\uacc4 \ub9e4\ud551"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uac1d\uccb4\uc640 \ud14c\uc774\ube14\uc744 \uc124\uacc4\ud558\uace0 \ub9f5\ud551\ud558\ub294 \ubc29\ubc95"),Object(i.b)("li",{parentName:"ul"},"\uae30\ubcf8\ud0a4\uc640 \uc678\ub798\ud0a4 \ub9f5\ud551"),Object(i.b)("li",{parentName:"ul"},"1:1, 1:N, N:1, N:N \uad00\uacc4 \ub9f5\ud551"),Object(i.b)("li",{parentName:"ul"},"\uc2e4\ubb34 \ub178\ud558\uc6b0 + \uc131\ub2a5\uae4c\uc9c0 \uace0\ub824"),Object(i.b)("li",{parentName:"ul"},"\uc774\ud574\uac00 \ub41c\ub2e4\uba74 \ubcf5\uc7a1\ud55c \uc2dc\uc2a4\ud15c\ub3c4 JPA\ub85c \uc124\uacc4\uac00\ub2a5")),Object(i.b)("h3",{id:"jpa-\ub0b4\ubd80-\ub3d9\uc791\ubc29\uc2dd-\uc774\ud574"},"JPA \ub0b4\ubd80 \ub3d9\uc791\ubc29\uc2dd \uc774\ud574"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uadf8\ub9bc\uacfc \ucf54\ub4dc\ub85c \uc124\uba85"),Object(i.b)("li",{parentName:"ul"},"\uc5b4\ub5a4 SQL\uc744 \ub9cc\ub4dc\ub294\uc9c0 \uc774\ud574"),Object(i.b)("li",{parentName:"ul"},"\uc5b8\uc81c SQL\uc744 \uc2e4\ud589\ud558\ub294\uc9c0 \uc774\ud574")),Object(i.b)("h2",{id:"\ud559\uc2b5-\ubc29\ubc95"},"\ud559\uc2b5 \ubc29\ubc95"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uac15\uc758: \uc774\ub860 + \ucf54\ub529"),Object(i.b)("li",{parentName:"ul"},"6\ub2e8\uacc4 \uc2e4\uc804 \uc608\uc81c"),Object(i.b)("li",{parentName:"ul"},"\uac15\uc758\ub97c \uba54\uc778, \ucc45\uc740 \ucc38\uace0\uc11c"),Object(i.b)("li",{parentName:"ul"},"\ud558\ub8e8 1\uc2dc\uac04 \ubc18, 2\uc8fc \uc644\uc131")),Object(i.b)("h2",{id:"jpa-\ub9ce\uc774-\uc0ac\uc6a9\ud558\ub294\uac00"},"JPA \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294\uac00"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud574\uc678\ub294 \uac70\uc758 JPA\uc704\uc8fc\uc758 \uad6c\uae00 \ud2b8\ub80c\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc74c"),Object(i.b)("li",{parentName:"ul"},"\uad6d\ub0b4\ub098 \uc911\uad6d\ub3c4 MyBatis vs JPA \uc9c0\ud45c\uc640 \uc5ed\uc804\ub418\uace0 \uc788\uc74c")))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(l,".").concat(d)]||u[d]||j[d]||i;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);