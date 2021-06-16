(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2530],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},l={unversionedId:"databases/using-another-orm",id:"version-1.x/databases/using-another-orm",isDocsHomePage:!1,title:"Using Another ORM or Query Builder",description:"If you want to use another ORM/ODM (Sequelize, Objection.js, etc) or just do not want to use one at all, you can uninstall the typeorm and @foal/typeorm packages. The framework core is TypeORM-independent.",source:"@site/versioned_docs/version-1.x/databases/using-another-orm.md",sourceDirName:"databases",slug:"/databases/using-another-orm",permalink:"/docs/1.x/databases/using-another-orm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/using-another-orm.md",version:"1.x",sidebar_label:"Using Another ORM",frontMatter:{title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},sidebar:"someSidebar",previous:{title:"MongoDB",permalink:"/docs/1.x/databases/mongodb"},next:{title:"Quick Start",permalink:"/docs/1.x/authentication-and-access-control/quick-start"}},u=[],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to use another ORM/ODM (Sequelize, Objection.js, etc) or just do not want to use one at all, you can uninstall the ",(0,a.kt)("inlineCode",{parentName:"p"},"typeorm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/typeorm")," packages. The framework core is TypeORM-independent."),(0,a.kt)("p",null,"Using TypeORM has some advantages though:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Foal offers built-in commands to generate, run and revert migrations with TypeORM."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"Groups & Permissions")," system can only be used with this library as well as the ",(0,a.kt)("inlineCode",{parentName:"li"},"foal g rest-api")," command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@foal/typeorm")," implements the ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchUser")," function required by ",(0,a.kt)("inlineCode",{parentName:"li"},"TokenRequired")," and often used with ",(0,a.kt)("inlineCode",{parentName:"li"},"JWTRequired"),". This function, which takes an id and returns a user or undefined, can easily be implemented with another ORM however.")))}p.isMDXComponent=!0}}]);