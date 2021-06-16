(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2298],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6530:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={title:"Estilo de C\xf3digo y Linting"},l={unversionedId:"development-environment/linting-and-code-style",id:"development-environment/linting-and-code-style",isDocsHomePage:!1,title:"Estilo de C\xf3digo y Linting",description:"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/development-environment/linting-and-code-style.md",sourceDirName:"development-environment",slug:"/development-environment/linting-and-code-style",permalink:"/es/docs/development-environment/linting-and-code-style",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/linting-and-code-style.md",version:"current",frontMatter:{title:"Estilo de C\xf3digo y Linting"},sidebar:"someSidebar",previous:{title:"Generaci\xf3n de C\xf3digo",permalink:"/es/docs/development-environment/code-generation"},next:{title:"Visual Studio Code",permalink:"/es/docs/development-environment/vscode"}},c=[{value:"ESLint &amp; TypeScript",id:"eslint--typescript",children:[]},{value:"Configuration with VSCode",id:"configuration-with-vscode",children:[]},{value:"Adding New Rules",id:"adding-new-rules",children:[]},{value:"Migrating from TSLint",id:"migrating-from-tslint",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members."),(0,o.kt)("p",null,"For example, with ESLint, the rule ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/quotes: single")," enforces the use of single quotes throughout the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Valid\nconst foo = 'bar';\n// Invalid\nconst foo = \"bar\";\n")),(0,o.kt)("h2",{id:"eslint--typescript"},"ESLint & TypeScript"),(0,o.kt)("p",null,"FoalTS offers a pre-configuration for the linter ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),". It is the most commonly used in the JavaScript ecosystem and can work with TypeScript through the ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/parser")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/eslint-plugin")," packages."),(0,o.kt)("p",null,"You can run the linting with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint\n")),(0,o.kt)("p",null,"And if the linting issues can be automatically fixed, you can also fix them with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),(0,o.kt)("h2",{id:"configuration-with-vscode"},"Configuration with VSCode"),(0,o.kt)("p",null,"Instructions to configure VSCode with ESLint and TypeScript can be found ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/development-environment/vscode"},"here"),"."),(0,o.kt)("h2",{id:"adding-new-rules"},"Adding New Rules"),(0,o.kt)("p",null,"The rules are specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file located at the root of the project."),(0,o.kt)("p",null,"The list of available JavaScript rules can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/"},"ESLint website"),". Some of them are compatible with TypeScript. Others are not and you will need to find equivalents ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules"},"here"),"."),(0,o.kt)("h2",{id:"migrating-from-tslint"},"Migrating from TSLint"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/"},"TSLint")," is a TypeScript linter that was previously used by FoalTS but has since been ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/palantir/tslint-in-2019-1a144c2317a9"},"deprecated"),". This is why new versions of the framework use ESLint."),(0,o.kt)("p",null,"In order to migrate from TSLint to ESLint, you can refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md"},"page"),". It lists all TSLint rules along side rules from the ESLint ecosystem that are identical or similar."))}u.isMDXComponent=!0}}]);