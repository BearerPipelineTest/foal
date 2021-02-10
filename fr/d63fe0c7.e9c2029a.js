(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(257)),i={title:"Single Page Applications (SPA)",sidebar_label:null},s={unversionedId:"frontend-integration/single-page-applications",id:"version-1.x/frontend-integration/single-page-applications",isDocsHomePage:!1,title:"Single Page Applications (SPA)",description:"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue.",source:"@site/versioned_docs/version-1.x/frontend-integration/single-page-applications.md",slug:"/frontend-integration/single-page-applications",permalink:"/fr/docs/1.x/frontend-integration/single-page-applications",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/frontend-integration/single-page-applications.md",version:"1.x",sidebar_label:null,sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/fr/docs/1.x/api-section/graphql"},next:{title:"Angular, React & Vue",permalink:"/fr/docs/1.x/frontend-integration/angular-react-vue"}},c=[{value:"Building the App &amp; Proxifying Requests",id:"building-the-app--proxifying-requests",children:[]},{value:"Using Frontend Routers",id:"using-frontend-routers",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue."),Object(o.b)("p",null,"Building a SPA, however, introduces a certain complexity. This document presents some techniques and tools for solving common scenarios."),Object(o.b)("h2",{id:"building-the-app--proxifying-requests"},"Building the App & Proxifying Requests"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/frontend-integration/angular-react-vue"}),"Angular, React & Vue")," section to learn on how to configure your frontend CLI to interact with a Foal application."),Object(o.b)("h2",{id:"using-frontend-routers"},"Using Frontend Routers"),Object(o.b)("p",null,"Most single-page applications simulate routing on the frontend side. This is usually done by libraries such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reacttraining.com/react-router"}),"react-router")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://angular.io/guide/router"}),"@angular/router"),". The application does not actually make any requests to the server but simply modifies the URL in the address bar."),Object(o.b)("p",null,"This works fine until the user presses the refresh button, shares the link or saves the page in their bookmarks. In that case, the browser makes a request to the server to retreive the desired page and thus gets a 404 error."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example"),"\n| Request | Response |\n| --- | --- |\n| ",Object(o.b)("inlineCode",{parentName:"p"},"/")," | 200 - Returns the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"public/")," directory. |\n| ",Object(o.b)("inlineCode",{parentName:"p"},"/users?city=Paris")," | 404 - The server has no route that handles ",Object(o.b)("inlineCode",{parentName:"p"},"/users"),". |"),Object(o.b)("p",null,"One technique to solve this problem is to add a handler responsible for processing uncaught requests. It returns the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," page in all cases. This way, the browser loads the application which then looks at the address bar and displays the appropriate page."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, controller, createHttpResponseFile, Get, HttpResponseNotFound } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    // ...\n  ];\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return createHttpResponseFile({\n      directory: './public',\n      file: 'index.html'\n    });\n    // OR render('./templates/index.html');\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note:")," With this approach, the frontend is responsible for catching incorrect URLs and displaying a 404 page.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Note 2:")," This issue usually does not show up in development as frontend CLIs are sufficiently clever to handle these requests.")))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);