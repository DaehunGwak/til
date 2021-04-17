(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),m=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(r),b=n,d=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return r?c.a.createElement(d,l(l({ref:t},s),{},{components:r})):c.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return m}));var n=r(3),c=r(7),a=(r(0),r(115)),o={id:"docker-mysql",title:"docker\ub85c mysql local \uc138\ud305"},l={unversionedId:"mysql/docker-mysql",id:"mysql/docker-mysql",isDocsHomePage:!1,title:"docker\ub85c mysql local \uc138\ud305",description:"Environments",source:"@site/docs/mysql/docker-mysql.md",slug:"/mysql/docker-mysql",permalink:"/til/docs/mysql/docker-mysql",editUrl:"https://github.com/daehungwak/til/edit/main/docs/mysql/docker-mysql.md",version:"current",lastUpdatedAt:1618234706,sidebar:"docs",previous:{title:"mac\uc5d0 tomcat \uc124\uce58",permalink:"/til/docs/java/mac-tomcat"},next:{title:"Vue 3 + Typescript",permalink:"/til/docs/vue/vue-mastery/vue3-ts"}},i=[{value:"Environments",id:"environments",children:[]},{value:"Commands",id:"commands",children:[]},{value:"References",id:"references",children:[]}],s={toc:i};function m(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"environments"},"Environments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Mac"),Object(a.b)("li",{parentName:"ul"},"mysql:8")),Object(a.b)("h2",{id:"commands"},"Commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker pull mysql:8\ndocker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234abcd --name mysql-test-8 mysql:8 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci\n\n# connect mysql shell on docker\ndocker exec -it mysql-test-8 bash\n\n# in mysql-test-8 container\nmysql -u root -p\n\n# create local user\ncreate user 'localtest'@'%' identified by '1234abcd';\ngrant all privileges on *.* to 'localtest'@'%';\n# or specific db privilieges\ngrant all privileges on <DB_name>.* to 'localtest'@'%';\n\n# create database\ncreate database test\n")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://hub.docker.com/_/mysql"}),"hub.docker.com: mysql")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://poiemaweb.com/docker-mysql"}),"poiemaweb.com: docker-mysql")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://cjh5414.github.io/mysql-create-user/"}),"cjh5414.github: mysql-create-user")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://futurists.tistory.com/11"}),"futurists.tistory: mysql 1\uc7a5 \uc2dc\uc791\ud558\uae30"))))}m.isMDXComponent=!0}}]);