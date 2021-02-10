(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(257)),i={title:"Request Body Size"},c={unversionedId:"cookbook/request-body-size",id:"version-1.x/cookbook/request-body-size",isDocsHomePage:!1,title:"Request Body Size",description:"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key settings.bodyParser.limit. If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the bytes library for parsing.",source:"@site/versioned_docs/version-1.x/cookbook/request-body-size.md",slug:"/cookbook/request-body-size",permalink:"/fr/docs/1.x/cookbook/request-body-size",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/request-body-size.md",version:"1.x",sidebar:"someSidebar",previous:{title:"404 Page",permalink:"/fr/docs/1.x/cookbook/404-page"},next:{title:"ExpressJS",permalink:"/fr/docs/1.x/cookbook/expressjs"}},s=[],b={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.bodyParser.limit"),". If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/bytes"}),"bytes")," library for parsing."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"config/default.yml (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  bodyParser:\n    limit: '50mb'\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"config/default.json (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "bodyParser": {\n      "limit": "50mb"\n    }\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},".env (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"SETTINGS_BODY_PARSER_LIMIT=50mb\n")))}p.isMDXComponent=!0},257:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||u[d]||a;return r?o.a.createElement(f,c(c({ref:t},b),{},{components:r})):o.a.createElement(f,c({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<a;b++)i[b]=r[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);