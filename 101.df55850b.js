(window.webpackJsonp=window.webpackJsonp||[]).push([[101,102],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(171),o=a(22),c=a(25),s=a(183),i=a(3),u=a(173),p=a(172),m=a(195),d=a(199),y=a(200),b=a(198),h=a(177),f=a(178),g=a(202);var v=e=>r.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=a(201),O=a(76),k=a.n(O);const E=(e,t)=>"link"===e.type?Object(p.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>E(e,t)));function N({item:e,onItemClick:t,collapsible:a,activePath:l,...o}){const{items:c,label:s}=e,p=E(e,l),m=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[d,y]=Object(n.useState)((()=>!!a&&(!p&&e.collapsed))),b=Object(n.useRef)(null),[h,f]=Object(n.useState)(void 0),g=(e=!0)=>{var t;f(e?`${null===(t=b.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{p&&!m&&d&&y(!1)}),[p,m,d]);const v=Object(n.useCallback)((e=>{e.preventDefault(),h||g(),setTimeout((()=>y((e=>!e))),100)}),[h]);return 0===c.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&p,[k.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},o),s),r.a.createElement("ul",{className:"menu__list",ref:b,style:{height:h},onTransitionEnd:()=>{d||g(!1)}},c.map((e=>r.a.createElement(x,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function C({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:o,label:c}=e,s=E(e,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(h.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:o},Object(f.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),c))}function x(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(C,e)}}var w=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:l,isHidden:o}){const[c,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:h}=Object(p.useThemeConfig)(),{isAnnouncementBarClosed:f}=Object(m.a)(),{scrollY:O}=Object(b.a)();Object(d.a)(c);const E=Object(y.a)();return Object(n.useEffect)((()=>{E===y.b.desktop&&s(!1)}),[E]),r.a.createElement("div",{className:Object(u.a)(k.a.sidebar,{[k.a.sidebarWithHideableNavbar]:i,[k.a.sidebarHidden]:o})},i&&r.a.createElement(g.a,{tabIndex:-1,className:k.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,{"menu--show":c,[k.a.menuWithAnnouncementBar]:!f&&0===O})},r.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!c)}},c?r.a.createElement("span",{className:Object(u.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:k.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(x,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),h&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:l},r.a.createElement(v,{className:k.a.collapseSidebarButtonIcon})))},P={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},T={Prism:a(23).a,theme:P};function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},L=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},B=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=_({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=_({},a,{backgroundColor:null}),r};function $(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var M=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),S(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?B(e.theme,e.language):void 0;return t.themeDict=a})),S(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=_({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?_({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),S(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),S(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=_({},$(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?_({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,u=t[o],p=a[o][l];if("string"==typeof p?(u=o>0?u:["plain"],i=p):(u=L(u,p.type),p.alias&&(u=L(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(D),d=m.length;c.push({types:u,content:m[0]});for(var y=1;y<d;y++)I(c),s.push(c=[]),c.push({types:u,content:m[y]})}else o++,t.push(u),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return I(c),s}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),R=a(211),A=a.n(R),F=a(212),H=a.n(F),W={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},z=a(193);var J=()=>{const{prism:e}=Object(p.useThemeConfig)(),{isDarkTheme:t}=Object(z.a)(),a=e.theme||W,n=e.darkTheme||a;return t?n:a},K=a(77),U=a.n(K);const V=/{([\d,-]+)}/,X=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},Y=/(?:title=")(.*)(?:")/;var q=({children:e,className:t,metastring:a})=>{const{prism:l}=Object(p.useThemeConfig)(),[o,c]=Object(n.useState)(!1),[s,m]=Object(n.useState)(!1);Object(n.useEffect)((()=>{m(!0)}),[]);const d=Object(n.useRef)(null);let y=[],b="";const h=J(),f=Array.isArray(e)?e.join(""):e;if(a&&V.test(a)){const e=a.match(V)[1];y=H()(e).filter((e=>e>0))}a&&Y.test(a)&&(b=a.match(Y)[1]);let g=t&&t.replace(/language-/,"");!g&&l.defaultLanguage&&(g=l.defaultLanguage);let v=f.replace(/\n$/,"");if(0===y.length&&void 0!==g){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return X(["js","jsBlock"]);case"jsx":case"tsx":return X(["js","jsBlock","jsx"]);case"html":return X(["js","jsBlock","html"]);case"python":case"py":return X(["python"]);default:return X()}})(g),a=f.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,o=a[r].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(r,1)}else r+=1}y=H()(e),v=a.join("\n")}const j=()=>{A()(v),c(!0),setTimeout((()=>c(!1)),2e3)};return r.a.createElement(M,Object(i.a)({},T,{key:String(s),theme:h,code:v,language:g}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:l})=>r.a.createElement(r.a.Fragment,null,b&&r.a.createElement("div",{style:t,className:U.a.codeBlockTitle},b),r.a.createElement("div",{className:U.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(u.a)(e,U.a.codeBlock,"thin-scrollbar",{[U.a.codeBlockWithTitle]:b})},r.a.createElement("div",{className:U.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t}))))))})))),r.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(U.a.copyButton),onClick:j},o?"Copied":"Copy")))))},G=(a(78),a(79)),Q=a.n(G);var Z=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(p.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[Q.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):r.a.createElement(e,a)},ee=a(80),te=a.n(ee);var ae={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(q,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(h.a,e),pre:e=>r.a.createElement("div",Object(i.a)({className:te.a.mdxCodeBlock},e)),h1:Z("h1"),h2:Z("h2"),h3:Z("h3"),h4:Z("h4"),h5:Z("h5"),h6:Z("h6")},ne=a(194),re=a(175),le=a(81),oe=a.n(le);function ce({currentDocRoute:e,versionMetadata:t,children:a}){var c,i;const{siteConfig:m,isClient:d}=Object(o.default)(),{pluginId:y,permalinkToSidebar:b,docsSidebars:h,version:f}=t,g=b[e.path],j=h[g],[O,k]=Object(n.useState)(!1),[E,N]=Object(n.useState)(!1),C=Object(n.useCallback)((()=>{E&&N(!1),k(!O)}),[E]);return r.a.createElement(s.a,{key:d,searchMetadatas:{version:f,tag:Object(p.docVersionSearchTag)(y,f)}},r.a.createElement("div",{className:oe.a.docPage},j&&r.a.createElement("div",{className:Object(u.a)(oe.a.docSidebarContainer,{[oe.a.docSidebarContainerHidden]:O}),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.a.docSidebarContainer)&&O&&N(!0)},role:"complementary"},r.a.createElement(w,{key:g,sidebar:j,path:e.path,sidebarCollapsible:null===(c=null===(i=m.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===c||c,onCollapse:C,isHidden:E}),E&&r.a.createElement("div",{className:oe.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:C,onClick:C},r.a.createElement(v,null))),r.a.createElement("main",{className:oe.a.docMainContainer},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",oe.a.docItemWrapper,{[oe.a.docItemWrapperEnhanced]:O})},r.a.createElement(l.a,{components:ae},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(re.matchPath)(n.pathname,e)));return l?r.a.createElement(ce,{currentDocRoute:l,versionMetadata:a},Object(c.a)(t)):r.a.createElement(ne.default,e)}},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return y}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return a?r.a.createElement(y,c(c({ref:t},i),{},{components:a})):r.a.createElement(y,c({ref:t},i))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(183);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},211:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},212:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a}}]);