(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),p=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return n?c.a.createElement(b,i(i({ref:t},u),{},{components:n})):c.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),o=(n(0),n(141)),a={id:"concepts",title:"\ud074\ub9b0\ucf54\ub4dc \uc77d\uc744 \uc2dc \uc54c\uc544\ub450\uba74 \uc88b\uc740 \uac1c\ub150"},i={unversionedId:"java/cleancode/concepts",id:"java/cleancode/concepts",isDocsHomePage:!1,title:"\ud074\ub9b0\ucf54\ub4dc \uc77d\uc744 \uc2dc \uc54c\uc544\ub450\uba74 \uc88b\uc740 \uac1c\ub150",description:"SOLID",source:"@site/docs/java/cleancode/concepts.md",slug:"/java/cleancode/concepts",permalink:"/til/docs/java/cleancode/concepts",editUrl:"https://github.com/daehungwak/til/edit/main/docs/java/cleancode/concepts.md",version:"current",lastUpdatedAt:1621181956},l=[{value:"SOLID",id:"solid",children:[]},{value:"\ub514\ubbf8\ud130 \ubc95\uce59",id:"\ub514\ubbf8\ud130-\ubc95\uce59",children:[]},{value:"\ucd5c\uc18c \ub180\ub78c\uc758 \uc6d0\uce59",id:"\ucd5c\uc18c-\ub180\ub78c\uc758-\uc6d0\uce59",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"solid"},"SOLID"),Object(o.b)("h2",{id:"\ub514\ubbf8\ud130-\ubc95\uce59"},"\ub514\ubbf8\ud130 \ubc95\uce59"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Law of Demeter")),Object(o.b)("h2",{id:"\ucd5c\uc18c-\ub180\ub78c\uc758-\uc6d0\uce59"},"\ucd5c\uc18c \ub180\ub78c\uc758 \uc6d0\uce59"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The Princicple of Least Surprise")))}p.isMDXComponent=!0}}]);