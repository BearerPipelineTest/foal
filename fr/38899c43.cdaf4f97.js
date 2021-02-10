(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),c=(r(0),r(257)),a={title:"Protection XSS"},i={unversionedId:"security/xss-protection",id:"security/xss-protection",isDocsHomePage:!1,title:"Protection XSS",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/security/xss-protection.md",slug:"/security/xss-protection",permalink:"/fr/docs/security/xss-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/security/xss-protection.md",version:"current",sidebar:"someSidebar",previous:{title:"Protection CSRF",permalink:"/fr/docs/security/csrf-protection"},next:{title:"Planification de Travaux (en arri\xe8re-plan)",permalink:"/fr/docs/cookbook/scheduling-jobs"}},s=[{value:"<code>escape(str: string): string</code>",id:"escapestr-string-string",children:[]},{value:"<code>escapeProp(object: object, propName: string): void</code>",id:"escapepropobject-object-propname-string-void",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(c.b)("p",null,"FoalTS provides some utils to protect you against XSS attacks."),Object(c.b)("h2",{id:"escapestr-string-string"},Object(c.b)("inlineCode",{parentName:"h2"},"escape(str: string): string")),Object(c.b)("p",null,"Escapes HTML and returns a new string."),Object(c.b)("h2",{id:"escapepropobject-object-propname-string-void"},Object(c.b)("inlineCode",{parentName:"h2"},"escapeProp(object: object, propName: string): void")),Object(c.b)("p",null,"Escapes HTML in the given property."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"escapeProp(myObject, 'foobar')\n")),Object(c.b)("p",null,"is equivalent to"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"myObject.foobar = escape(myObject.foobar)\n")))}u.isMDXComponent=!0},257:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,f=l["".concat(a,".").concat(d)]||l[d]||b[d]||c;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);