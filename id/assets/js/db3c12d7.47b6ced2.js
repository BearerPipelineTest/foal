(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||p;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<p;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6608:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return l}});var r=n(2122),o=n(9756),p=(n(7294),n(3905)),a=["components"],s={title:"Custom Express Instance"},c={unversionedId:"upgrade-to-v2/custom-express-instance",id:"upgrade-to-v2/custom-express-instance",isDocsHomePage:!1,title:"Custom Express Instance",description:"FoalTS allows to provide a custom Express instance to the createApp function. In version 1, there were two ways to do it. In version 2, there is only one.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/custom-express-instance.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/custom-express-instance",permalink:"/id/docs/upgrade-to-v2/custom-express-instance",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/custom-express-instance.md",version:"current",frontMatter:{title:"Custom Express Instance"}},i=[],u={toc:i};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"FoalTS allows to provide a custom Express instance to the ",(0,p.kt)("inlineCode",{parentName:"p"},"createApp")," function. In version 1, there were two ways to do it. In version 2, there is only one."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Version 1")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = createApp(AppController, expressApp);\n// OR\nconst app = createApp(AppController, {\n  expressInstance: expressApp\n});\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Version 2")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n")))}l.isMDXComponent=!0}}]);