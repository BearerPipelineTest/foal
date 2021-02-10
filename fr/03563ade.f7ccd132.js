(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{257:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(257)),c={title:"Unit Testing"},s={unversionedId:"testing/unit-testing",id:"version-1.x/testing/unit-testing",isDocsHomePage:!1,title:"Unit Testing",description:"Convention",source:"@site/versioned_docs/version-1.x/testing/unit-testing.md",slug:"/testing/unit-testing",permalink:"/fr/docs/1.x/testing/unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/unit-testing.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/1.x/testing/introduction"},next:{title:"E2E Testing",permalink:"/fr/docs/1.x/testing/e2e-testing"}},a=[{value:"Convention",id:"convention",children:[]},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",children:[{value:"Watch mode (for development)",id:"watch-mode-for-development",children:[]},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",children:[]}]},{value:"Testing Controllers",id:"testing-controllers",children:[]},{value:"Testing Services",id:"testing-services",children:[]},{value:"Testing Hooks",id:"testing-hooks",children:[]},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",children:[]}],l={toc:a};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"convention"},"Convention"),Object(o.b)("p",null,"Every unit test file should be placed next to the file it tests with the same name and the ",Object(o.b)("inlineCode",{parentName:"p"},".spec.ts")," extension. If this extension is not present then the file won't be executed when running the test commands."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n")),Object(o.b)("h2",{id:"build-and-run-unit-tests"},"Build and Run Unit Tests"),Object(o.b)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run test\n")),Object(o.b)("p",null,"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),Object(o.b)("p",null,"The process runs forever until you stop it."),Object(o.b)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),Object(o.b)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n")),Object(o.b)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),Object(o.b)("h2",{id:"testing-controllers"},"Testing Controllers"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/architecture/controllers"}),"Controllers"),"."),Object(o.b)("h2",{id:"testing-services"},"Testing Services"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/architecture/services-and-dependency-injection"}),"Services & Dependency Injection"),"."),Object(o.b)("h2",{id:"testing-hooks"},"Testing Hooks"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/architecture/hooks"}),"Hooks"),"."),Object(o.b)("h2",{id:"dependency-injection--unit-testing"},"Dependency Injection & Unit Testing"),Object(o.b)("p",null,"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/architecture/services-and-dependency-injection"}),"Services & Dependency Injection"),"."))}u.isMDXComponent=!0}}]);