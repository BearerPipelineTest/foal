(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1570],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||l[f]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},825:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p},default:function(){return l}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),i=["components"],s={title:"XSS Protection"},a={unversionedId:"security/xss-protection",id:"security/xss-protection",isDocsHomePage:!1,title:"XSS Protection",description:"FoalTS provides some utils to protect you against XSS attacks.",source:"@site/docs/security/xss-protection.md",sourceDirName:"security",slug:"/security/xss-protection",permalink:"/docs/security/xss-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/security/xss-protection.md",version:"current",frontMatter:{title:"XSS Protection"},sidebar:"someSidebar",previous:{title:"CSRF Protection",permalink:"/docs/security/csrf-protection"},next:{title:"Scheduling Jobs",permalink:"/docs/cookbook/scheduling-jobs"}},p=[{value:"<code>escape(str: string): string</code>",id:"escapestr-string-string",children:[]},{value:"<code>escapeProp(object: object, propName: string): void</code>",id:"escapepropobject-object-propname-string-void",children:[]}],u={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"FoalTS provides some utils to protect you against XSS attacks."),(0,c.kt)("h2",{id:"escapestr-string-string"},(0,c.kt)("inlineCode",{parentName:"h2"},"escape(str: string): string")),(0,c.kt)("p",null,"Escapes HTML and returns a new string."),(0,c.kt)("h2",{id:"escapepropobject-object-propname-string-void"},(0,c.kt)("inlineCode",{parentName:"h2"},"escapeProp(object: object, propName: string): void")),(0,c.kt)("p",null,"Escapes HTML in the given property."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"escapeProp(myObject, 'foobar')\n")),(0,c.kt)("p",null,"is equivalent to"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"myObject.foobar = escape(myObject.foobar)\n")))}l.isMDXComponent=!0}}]);