(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),r=(n(0),n(190)),c={id:"2-handson",title:"2. \ubc30\ud3ec\ub97c \ud1b5\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccb4\ud5d8"},b={unversionedId:"kubernetes/easy-kubernetes/2-handson",id:"kubernetes/easy-kubernetes/2-handson",isDocsHomePage:!1,title:"2. \ubc30\ud3ec\ub97c \ud1b5\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uccb4\ud5d8",description:"\ub178\uc158 \ub178\ud2b8",source:"@site/docs/kubernetes/easy-kubernetes/2-handson.md",slug:"/kubernetes/easy-kubernetes/2-handson",permalink:"/til/docs/kubernetes/easy-kubernetes/2-handson",editUrl:"https://github.com/daehungwak/til/edit/main/docs/kubernetes/easy-kubernetes/2-handson.md",version:"current",sidebar:"docs",previous:{title:"1. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud658\uacbd \uad6c\uc131",permalink:"/til/docs/kubernetes/easy-kubernetes/1-env"},next:{title:"3. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc778\uc0ac\uc774\ub4dc",permalink:"/til/docs/kubernetes/easy-kubernetes/3-inside"}},i=[{value:"2.1 \ubc30\ud3ec\ub97c \ud1b5\ud574 \ud655\uc778\ud558\ub294 Pod",id:"21-\ubc30\ud3ec\ub97c-\ud1b5\ud574-\ud655\uc778\ud558\ub294-pod",children:[]},{value:"2.2 Pod\ub97c \uc678\ubd80\uc5d0\uc11c\ub3c4 \uc811\uc18d\ud558\uac8c \ud558\ub294 Service",id:"22-pod\ub97c-\uc678\ubd80\uc5d0\uc11c\ub3c4-\uc811\uc18d\ud558\uac8c-\ud558\ub294-service",children:[]},{value:"2.3 Pod\uc640 Deployment \ucc28\uc774",id:"23-pod\uc640-deployment-\ucc28\uc774",children:[]},{value:"2.4 \uc678\ubd80\ub85c \ub178\ucd9c\ud558\ub294 \ub354 \uc88b\uc740 \ubc29\ubc95\uc778 LoadBalaner",id:"24-\uc678\ubd80\ub85c-\ub178\ucd9c\ud558\ub294-\ub354-\uc88b\uc740-\ubc29\ubc95\uc778-loadbalaner",children:[]},{value:"2.5 \ubc30\ud3ec\ud55c \uac83\ub4e4 \uc0ad\uc81c\ud558\uae30",id:"25-\ubc30\ud3ec\ud55c-\uac83\ub4e4-\uc0ad\uc81c\ud558\uae30",children:[{value:"\ub9ac\ubdf0",id:"\ub9ac\ubdf0",children:[]},{value:"\uc0ad\uc81c",id:"\uc0ad\uc81c",children:[]}]}],o={toc:i};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://first-diadem-378.notion.site/2-a824cf21a6324563873800a2bb4ad4e3"}),"\ub178\uc158 \ub178\ud2b8")),Object(r.b)("h2",{id:"21-\ubc30\ud3ec\ub97c-\ud1b5\ud574-\ud655\uc778\ud558\ub294-pod"},"2.1 \ubc30\ud3ec\ub97c \ud1b5\ud574 \ud655\uc778\ud558\ub294 Pod"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pod\ub780? Container\uc758 \uc9d1\ud569",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ub300\ubd80\ubd84\uc740 \ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\uac00 \ud558\ub098\uc758 Pod\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uacbd\uc6b0\uac00 \ub9ce\uc74c")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# master node (m-k8s)\nkubectl run nginx --image=nginx\nkubectl get pod\nkubectl get pod -o wide # ip\ub3c4 \uac19\uc774 \ubcf4\uc5ec\uc90c\ncurl 172.16.221.129\n")),Object(r.b)("h2",{id:"22-pod\ub97c-\uc678\ubd80\uc5d0\uc11c\ub3c4-\uc811\uc18d\ud558\uac8c-\ud558\ub294-service"},"2.2 Pod\ub97c \uc678\ubd80\uc5d0\uc11c\ub3c4 \uc811\uc18d\ud558\uac8c \ud558\ub294 Service"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud574\uacb0 \ubc29\ubc95 1\ubc88: \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 \ud1b5\ub85c\ub97c \uc5c6\uc560\ubc84\ub9bc (\ubcf4\uc548\ucde8\uc57d)"),Object(r.b)("li",{parentName:"ul"},"\ud574\uacb0 \ubc29\ubc95 2\ubc88: Service\uc601\uc5ed\uc5d0 \ubc30\ud3ec\ud55c Pod\uc744 \uc5f0\uacb0",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NodePort")," \uc5d0 \uc811\uc18d\uc744 \ud1b5\ud574 Pod\ub97c \ucc3e\uc544\uac00\ub294 \uad6c\uc870 (Service \u2192 Pod\uc774 \uc9c1\uc811\uc801\uc73c\ub85c \uc5f0\uacb0\ub41c \uad6c\uc870\ub294 \uc544\ub2d8)")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl expose pod nginx --type=NodePort --port=80 # \uc11c\ube44\uc2a4 \uc0dd\uc131\nkubectl get service\nkubectl get nodes -o wide\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pod \uc774 \uc8fd\uac8c\ub418\uba74?",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud30c\ub4dc\uc758 \ud55c\uacc4\ub97c \uadf9\ubcf5\ud558\ub294 Deployment")))),Object(r.b)("h2",{id:"23-pod\uc640-deployment-\ucc28\uc774"},"2.3 Pod\uc640 Deployment \ucc28\uc774"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Pod\ub294 \uc8fd\uc73c\uba74 \ub2e4\uc2dc \uc0b4\ub9b4 \uc218 \uc5c6\uc5c8\uc74c")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\ud30c\ub4dc\ub97c \uc5ec\ub7ec\uac1c \uc0ac\uc6a9\ud558\ub824\uba74 \u2192 Deployment \ub97c \uc0ac\uc6a9")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"deployment\ub294 pod\uc744 \uc5ec\ub7ec\uac1c \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud558\ub294 \ub2e8\uc704")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"kubectl run")," : pod O, deployment X (test \ubaa9\uc801)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"kubectl create"),": pod O, deployment O")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply")," + file: pod O, deployment O"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create deployment deploy-nginx --image=nginx\nkubectl get pods -o wide\nkubectl scale deployment deploy-nginx --replicas=3\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud31f\uc744 \uc0dd\uc131\ud558\ub824\uba74",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"kubectl create\ub97c \ud1b5\ud574\uc120 \uc5ec\ub7ec\ubc88 \uc2e4\ud589\ud574\uc918\uc57c\ud568"),Object(r.b)("li",{parentName:"ul"},"kubectl apply + file \uc744\ud1b5\ud574 \ud55c\uaebc\ubc88\uc5d0 \uac00\ub2a5")))),Object(r.b)("h2",{id:"24-\uc678\ubd80\ub85c-\ub178\ucd9c\ud558\ub294-\ub354-\uc88b\uc740-\ubc29\ubc95\uc778-loadbalaner"},"2.4 \uc678\ubd80\ub85c \ub178\ucd9c\ud558\ub294 \ub354 \uc88b\uc740 \ubc29\ubc95\uc778 LoadBalaner"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deployment\ub97c \uc678\ubd80\ub85c \ub178\ucd9c\ud558\ub294 \ubc29\ubc95",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uae30\uc874\uc5d0 \ubc30\uc6b4 NodePort \uc0ac\uc6a9\uac00\ub2a5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ip\ub97c \uc9c1\uc811\uc54c\uc544\uc11c \ud638\ucd9c\ud558\ub294\ub370"))),Object(r.b)("li",{parentName:"ul"},"LoadBalancer(service) \uac00 \uc81c\uc77c \uc88b\uc74c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"MetalLB \ub97c \uc774\uc6a9"),Object(r.b)("li",{parentName:"ul"},"\ub178\ub4dc\ud3ec\ud2b8\ubcf4\ub2e4 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uac00 \uc88b\uc740 \uc810",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uace0\uc720\uc758 IP\ub97c \ub9cc\ub4e4\uc5b4 \uc678\ubd80\ub85c \uacf5\uac1c\uac00\ub2a5"),Object(r.b)("li",{parentName:"ul"},"\uac00\uc57c\ub420 \ucd5c\uc801\uc758 \uacbd\ub85c\ub97c \uc54c\uc544\uc11c \ud3ec\uc6cc\ub529\ud568")))))))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f ~/_Lecture_k8s_starter.kit/ch2/2.4/metallb.yaml\nkubectl create deployment chk-hn --image=sysnet4admin/chk-hn\nkubectl scale deployment chk-hn --replicas=3\nkubectl expose deployment chk-hn --type=LoadBalancer --port=80\nkubectl get services # external ip\uac00 \ud0c0\uc788\ub294 \uac83\uc744 \ud655\uc778\n\n# NodePort\nkubectl expose deployment deploy-nginx --type=NodePort --port=80\nkubectl get service\n\n")),Object(r.b)("h2",{id:"25-\ubc30\ud3ec\ud55c-\uac83\ub4e4-\uc0ad\uc81c\ud558\uae30"},"2.5 \ubc30\ud3ec\ud55c \uac83\ub4e4 \uc0ad\uc81c\ud558\uae30"),Object(r.b)("h3",{id:"\ub9ac\ubdf0"},"\ub9ac\ubdf0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108(\uc560\ud50c\ub9ac\ucf00\uc774\uc158)\ub97c \ubaa8\uc544\ub193\uc740 \uac83\uc740?",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Pod"))),Object(r.b)("li",{parentName:"ul"},"\ud30c\ub4dc\ub97c \ubaa8\uc544 \ub193\uc740 \uac83\uc740?",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Deployment"))),Object(r.b)("li",{parentName:"ul"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \uc11c\ube44\uc2a4\ub780",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc678\ubd80\ub85c \ub178\ucd9c\ud558\ub294 \ubb38\uc758 \uc5ed\ud560"),Object(r.b)("li",{parentName:"ul"},"NodePort, LoadBalancer \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud568"),Object(r.b)("li",{parentName:"ul"},"Deployment - LoadBalancer \uc870\ud569\uc774 \uc88b\uc74c")))),Object(r.b)("h3",{id:"\uc0ad\uc81c"},"\uc0ad\uc81c"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"36  kubectl delete service chk-hn\n37  kubectl get service\n38  kubectl get pod\n39  kubectl delete service deploy-nginx\n40  kubectl delete service nginx\n41  kubectl get pod\n42  kubectl get service\n43  kubectl delete deployment chk-hn\n44  kubectl delete deployment deploy-nginx\n45  kubectl delete pod nginx\nkubectl delete -f ~/_Lecture_k8s_starter.kit/ch2/2.4/metallb.yaml\n")))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,s=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?l.a.createElement(s,b(b({ref:t},o),{},{components:n})):l.a.createElement(s,b({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<r;o++)c[o]=n[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);