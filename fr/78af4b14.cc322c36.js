(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(257)),i={title:"D\xe9pannage de l'installation"},l={unversionedId:"tutorials/simple-todo-list/installation-troubleshooting",id:"tutorials/simple-todo-list/installation-troubleshooting",isDocsHomePage:!1,title:"D\xe9pannage de l'installation",description:"Erreurs avec node-gyp.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/installation-troubleshooting.md",slug:"/tutorials/simple-todo-list/installation-troubleshooting",permalink:"/fr/docs/tutorials/simple-todo-list/installation-troubleshooting",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/installation-troubleshooting.md",version:"current"},u=[{value:"Erreurs avec <code>node-gyp</code>.",id:"erreurs-avec-node-gyp",children:[]},{value:"Un autre probl\xe8me ?",id:"un-autre-probl\xe8me-",children:[]}],s={toc:u};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"erreurs-avec-node-gyp"},"Erreurs avec ",Object(a.b)("inlineCode",{parentName:"h2"},"node-gyp"),"."),Object(a.b)("p",null,"Si vous \xeates sous Windows et que vous obtenez des erreurs mentionnant ",Object(a.b)("inlineCode",{parentName:"p"},"gyp")," ou ",Object(a.b)("inlineCode",{parentName:"p"},"node_gyp"),", c'est probablement parce que cette ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nodejs/node-gyp"}),"biblioth\xe8que")," n'a pas toutes les d\xe9pendances dont elle a besoin."),Object(a.b)("p",null,"Essayez d'ex\xe9cuter ",Object(a.b)("inlineCode",{parentName:"p"},"npm install --global windows-build-tools")," \xe0 partir d'un PowerShell ou CMD.exe \xe9lev\xe9 (ex\xe9cut\xe9 en tant qu'administrateur)."),Object(a.b)("p",null,"Si cela ne r\xe9sout pas votre probl\xe8me, veuillez ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/issues/new"}),"soumettre une issue")," sur Github avec votre sortie de terminal afin que nous puissions vous aider !"),Object(a.b)("h2",{id:"un-autre-probl\xe8me-"},"Un autre probl\xe8me ?"),Object(a.b)("p",null,"Veuillez ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/issues/new"}),"soumettre une issue")," sur Github."))}c.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);