(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6420],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4450:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"OpenAPI"},u={unversionedId:"upgrade-to-v2/openapi",id:"upgrade-to-v2/openapi",isDocsHomePage:!1,title:"OpenAPI",description:"From version 2, the settings.openapi.useHooks configuration is enabled by default. This means that when generating the OpenAPI document, FoalTS will use the OpenAPI decorators but also the current hooks to create the document.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/openapi.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/openapi",permalink:"/id/docs/upgrade-to-v2/openapi",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/openapi.md",version:"current",frontMatter:{title:"OpenAPI"}},p=[{value:"New features",id:"new-features",children:[{value:"Validation &amp; OpenAPI schema references",id:"validation--openapi-schema-references",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From version 2, the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.openapi.useHooks")," configuration is enabled by default. This means that when generating the OpenAPI document, FoalTS will use the OpenAPI decorators but also the current hooks to create the document."),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("h3",{id:"validation--openapi-schema-references"},"Validation & OpenAPI schema references"),(0,a.kt)("p",null,"OpenAPI schema references are now supported in validation hooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ApiDefineRequestBody,\n  Post,\n  Put,\n  ValidateBody,\n} from '@foal/core';\n\n@ApiDefineRequestBody('product', { /* ... */ })\nclass ProductController {\n\n  @Post('/products')\n  @ValidateBody({\n    $ref: '#/components/requestBodies/product'\n  })\n  createProduct(ctx) {\n    // ...\n  }\n\n  @Put('/products/:id')\n  @ValidateBody({\n    $ref: '#/components/requestBodies/product'\n  })\n  replaceProduct(ctx) {\n    // ...\n  }\n\n}\n")))}l.isMDXComponent=!0}}]);