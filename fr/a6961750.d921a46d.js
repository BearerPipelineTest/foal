(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(257)),i={title:"E2E Testing"},c={unversionedId:"testing/e2e-testing",id:"version-1.x/testing/e2e-testing",isDocsHomePage:!1,title:"E2E Testing",description:"End-to-end tests are located in the src/e2e directory.",source:"@site/versioned_docs/version-1.x/testing/e2e-testing.md",slug:"/testing/e2e-testing",permalink:"/fr/docs/1.x/testing/e2e-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/e2e-testing.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/fr/docs/1.x/testing/unit-testing"},next:{title:"AWS Beanstalk",permalink:"/fr/docs/1.x/cloud/aws-beanstalk"}},s=[{value:"Build and Run E2E Tests",id:"build-and-run-e2e-tests",children:[{value:"Watch mode (for development)",id:"watch-mode-for-development",children:[]},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",children:[]}]},{value:"The <code>SuperTest</code> library",id:"the-supertest-library",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"End-to-end tests are located in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e")," directory."),Object(a.b)("h2",{id:"build-and-run-e2e-tests"},"Build and Run E2E Tests"),Object(a.b)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run e2e\n")),Object(a.b)("p",null,"This command builds and executes the e2e tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),Object(a.b)("p",null,"The process runs forever until you stop it."),Object(a.b)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),Object(a.b)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build:e2e # Build the e2e tests code (compile the typescript files and copy the templates)\nnpm run start:e2e # Execute the e2e tests from the built files\n")),Object(a.b)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),Object(a.b)("h2",{id:"the-supertest-library"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"SuperTest")," library"),Object(a.b)("p",null,"You can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/visionmedia/supertest"}),"the SuperTest library")," to write your e2e tests. It is installed by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\n\ndescribe('The server', () => {\n\n  let app;\n\n  before(async () => {\n    await createConnection();\n    app = createApp(AppController);\n  });\n\n  after(() => getConnection().close());\n\n  it('should return a 200 status on GET / requests.', () => {\n    return request(app)\n      .get('/')\n      .expect(200);\n  });\n\n});\n\n")))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);