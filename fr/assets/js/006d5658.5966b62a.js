(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1864],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4370:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"Validation Hooks"},p={unversionedId:"upgrade-to-v2/validation-hooks",id:"upgrade-to-v2/validation-hooks",isDocsHomePage:!1,title:"Validation Hooks",description:"Due to incompatibility with the OpenAPI specification, the following hooks have been removed:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/validation-hooks.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/validation-hooks",permalink:"/fr/docs/upgrade-to-v2/validation-hooks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/validation-hooks.md",version:"current",frontMatter:{title:"Validation Hooks"}},u=[{value:"Examples",id:"examples",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Due to incompatibility with the OpenAPI specification, the following hooks have been removed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateHeaders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateQuery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateParams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateCookies"))),(0,i.kt)("p",null,"You can use these ones instead:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateHeader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateQueryParam")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidatePathParam")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ValidateCookie"))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ValidateHeaders & ValidateHeader")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\n@ValidateHeaders({\n  properties: {\n    // All properties should be in lower case.\n    'a-number': { type: 'integer' },\n    'authorization': { type: 'string' },\n  },\n  required: [ 'authorization' ],\n  type: 'object'\n})\n\n// After\n@ValidateHeader('Authorization')\n@ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ValidateQuery & ValidateQueryParam")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\n@ValidateQuery({\n  properties: {\n    'a-number': { type: 'integer' },\n    'authorization': { type: 'string' },\n  },\n  required: [ 'authorization' ],\n  type: 'object'\n})\n\n// After\n@ValidateQueryParam('authorization')\n@ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ValidateParams & ValidatePathParam")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\n@ValidateParams({\n  properties: {\n    productId: { type: 'integer' }\n  },\n  type: 'object'\n})\n\n// After\n@ValidatePathParam('productId', { type: 'integer' })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ValidateCookies & ValidateCookie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\n@ValidateCookies({\n  properties: {\n    'A-Number': { type: 'integer' },\n    'Authorization': { type: 'string' },\n  },\n  required: [ 'Authorization' ],\n  type: 'object'\n})\n\n// After\n@ValidateCookie('Authorization')\n@ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n")))}d.isMDXComponent=!0}}]);