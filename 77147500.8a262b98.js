(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(153)),i={id:"weak-hash-map",title:"WeakHashMap \uc54c\uc544\ubcf4\uae30"},l={unversionedId:"java/util/weak-hash-map",id:"java/util/weak-hash-map",isDocsHomePage:!1,title:"WeakHashMap \uc54c\uc544\ubcf4\uae30",description:"- WeakHashMap \uc608\uc81c",source:"@site/docs/java/util/weak-hash-map.md",slug:"/java/util/weak-hash-map",permalink:"/til/docs/java/util/weak-hash-map",editUrl:"https://github.com/daehungwak/til/edit/main/docs/java/util/weak-hash-map.md",version:"current",lastUpdatedAt:1619099704,sidebar:"docs",previous:{title:"mac\uc5d0 jenv\uc73c\ub85c \uc5ec\ub7ec jdk \uc124\uce58",permalink:"/til/docs/java/live-study/01-jvm"},next:{title:"mac\uc5d0 jenv\uc73c\ub85c \uc5ec\ub7ec jdk \uc124\uce58",permalink:"/til/docs/java/mac-jenv"}},o=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",children:[]}],p={toc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/DaehunGwak/study-java/tree/main/effective-java/src/ch02/item07/WeakHashMapTest.java"}),"WeakHashMap \uc608\uc81c")),Object(c.b)("li",{parentName:"ul"},"weak reference\ub97c \uae30\ubc18\uc73c\ub85c \ud568"),Object(c.b)("li",{parentName:"ul"},"\ub9cc\uc57d weak reference \ubcc0\uc218 \ub85c \uc9c0\uc815\ub41c \ub300\uc0c1 \uac1d\uccb4\uc5d0 \ub300\ud574\uc11c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub2e4\ub978 \ubcc0\uc218\ub4e4\uc774 \ub354\uc774\uc0c1 \uac1d\uccb4\uc5d0 \ub3c4\ub2ec \ud558\uc9c0 \ubabb\ud558\uba74"),Object(c.b)("li",{parentName:"ul"},"weak reference \ubcc0\uc218\ub3c4 null\uc774 \ub428 (weak reference \ub294 mark and sweep \uc758 \ub300\uc0c1\uc774 \ub418\uc9c0 \uc54a\uc74c)")))),Object(c.b)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package ch02.item07;\n\nimport java.util.Map;\nimport java.util.WeakHashMap;\n\npublic class WeakHashMapTest {\n\n    public static void main(String[] args) {\n        // setup\n        Map<Integer, Stack> weakMap = new WeakHashMap<>();\n\n        // \uc2a4\ud0dd\uc740 \uc790\uccb4\uc801\uc73c\ub85c \uc9e0 \uc2a4\ud0dd\uc744 \ud65c\uc6a9\ud574\uc11c \uc2e4\uc81c \uc608\uc81c\ucf54\ub4dc\ub97c \ucc38\uace0\ubc14\ub78c\n        Stack s1 = new Stack();\n        Stack s2 = new Stack();\n        weakMap.put(20, s1);\n        weakMap.put(450, s2);\n\n        // \uc815\uc0c1\uc801\uc73c\ub85c 2\uac1c \ucd9c\ub825\n        for (Map.Entry<Integer, Stack> elem : weakMap.entrySet()) {\n            System.out.printf("%d: %s\\n", elem.getKey(), elem.getValue());\n        }\n\n        // \uac15\uc81c GC\n        s2 = null;\n        System.gc();\n\n        // WeakHashMap \uc5d0\uc11c 450 \ud0a4\uac00 \uc790\ub3d9\uc73c\ub85c \uc0ac\ub77c\uc9c4 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc74c\n        for (Map.Entry<Integer, Stack> elem : weakMap.entrySet()) {\n            System.out.printf("%d: %s\\n", elem.getKey(), elem.getValue());\n        }\n    }\n}\n')),Object(c.b)("h2",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://blog.breakingthat.com/2018/08/26/java-collection-map-weakhashmap/"}),"Java - Collection - Map - WeakHashMap (\uc57d\ud55c \ucc38\uc870 \ud574\uc2dc\ub9f5) - \uc870\uae08 \ub2a6\uc740, IT \uad00\uc2b5 \ub118\uae30 (JS.Kim)")),Object(c.b)("li",{parentName:"ul"},"\uc774\ud399\ud2f0\ube0c \uc790\ubc14")))}u.isMDXComponent=!0},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),b=n,f=s["".concat(i,".").concat(b)]||s[b]||m[b]||c;return a?r.a.createElement(f,l(l({ref:t},p),{},{components:a})):r.a.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<c;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);