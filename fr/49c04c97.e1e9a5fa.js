(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(257)),c={title:"G\xe9n\xe9rer des Jetons"},i={unversionedId:"common/generate-tokens",id:"common/generate-tokens",isDocsHomePage:!1,title:"G\xe9n\xe9rer des Jetons",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/common/generate-tokens.md",slug:"/common/generate-tokens",permalink:"/fr/docs/common/generate-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/common/generate-tokens.md",version:"current",sidebar:"someSidebar",previous:{title:"Journalisation & D\xe9bogage",permalink:"/fr/docs/common/logging-and-debugging"},next:{title:"TypeORM",permalink:"/fr/docs/databases/typeorm"}},s=[{value:"Unsigned Tokens (simple case)",id:"unsigned-tokens-simple-case",children:[]},{value:"Signed Tokens",id:"signed-tokens",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS."),Object(a.b)("h2",{id:"unsigned-tokens-simple-case"},"Unsigned Tokens (simple case)"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"generateToken")," function generates a cryptographically secure random token encoded in base64url (128 bits)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { generateToken } from '@foal/core';\n\nconst token = await generateToken();\n")),Object(a.b)("h2",{id:"signed-tokens"},"Signed Tokens"),Object(a.b)("p",null,"You can also generate a token using a secret. The secret is used to ",Object(a.b)("em",{parentName:"p"},"sign")," the token to provide extra security. It must be encoded in base64. You can generate one with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Generate a signed token")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { generateSignedToken } from '@foal/core';\n\nconst token = await generateSignedToken(secret);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Verify and read a signed token")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { verifySignedToken } from '@foal/core';\n\nconst signedTokenToVerify = 'xxx.yyy';\nconst result = await verifySignedToken(signedTokenToVerify, secret);\nif (result === false) {\n  console.log('incorrect signature');\n} else {\n  console.log('The token is ', result);\n}\n")))}u.isMDXComponent=!0},257:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);