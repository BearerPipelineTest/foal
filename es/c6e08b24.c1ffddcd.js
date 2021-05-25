(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(288)),l={title:"Construcci\xf3n de Producci\xf3n"},i={unversionedId:"tutorials/real-world-example-with-react/14-production-build",id:"tutorials/real-world-example-with-react/14-production-build",isDocsHomePage:!1,title:"Construcci\xf3n de Producci\xf3n",description:"So far, the front-end and back-end applications are compiled and served by two different development servers. The next step is to build them into a single one ready for production.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/14-production-build.md",slug:"/tutorials/real-world-example-with-react/14-production-build",permalink:"/es/docs/tutorials/real-world-example-with-react/14-production-build",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/14-production-build.md",version:"current",sidebar:"someSidebar",previous:{title:"Protecci\xf3n contra CSRF",permalink:"/es/docs/tutorials/real-world-example-with-react/13-csrf"},next:{title:"Autenticaci\xf3n Social con Google",permalink:"/es/docs/tutorials/real-world-example-with-react/15-social-auth"}},c=[{value:"Building the React app",id:"building-the-react-app",children:[]},{value:"Preventing 404 errors",id:"preventing-404-errors",children:[]},{value:"Building the Foal app",id:"building-the-foal-app",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So far, the front-end and back-end applications are compiled and served by two different development servers. The next step is to build them into a single one ready for production."),Object(a.b)("h2",{id:"building-the-react-app"},"Building the React app"),Object(a.b)("p",null,"In your frontend directory, run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(a.b)("p",null,"This command builds the React application for production and saves the files in the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," directory."),Object(a.b)("p",null,"Open it and copy all its contents to the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," directory of your Foal application."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When you use ",Object(a.b)("inlineCode",{parentName:"p"},"foal connect")," with Angular or Vue, the frontend build will automatically save the files in ",Object(a.b)("inlineCode",{parentName:"p"},"public"),".")),Object(a.b)("p",null,"Now, if you navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3001"}),"http://localhost:3001"),", you will see the frontend application served by the backend server."),Object(a.b)("h2",{id:"preventing-404-errors"},"Preventing 404 errors"),Object(a.b)("p",null,"Open the link ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3001/login"}),"http://localhost:3001/login")," in a new tab. The server returns a 404 error."),Object(a.b)("p",null,"This is perfectly normal. At the moment, the server does not have a handler for the ",Object(a.b)("inlineCode",{parentName:"p"},"/login")," route and therefore returns this error. Previously, this problem was handled by the React development server, which is why there was no such error."),Object(a.b)("p",null,"To solve this problem, you will add a controller method that will process unhandled requests."),Object(a.b)("p",null,"Open ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," and update its contents."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, controller, Get, HttpResponseNotFound, IAppController, render } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return render('./public/index.html');\n  }\n}\n\n")),Object(a.b)("p",null,"This method returns the React application for any GET request that accepts HTML content and has not been handled by the other methods of the controller and its subcontrollers."),Object(a.b)("p",null,"If you return to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3001/login"}),"http://localhost:3001/login")," and refresh the page, the login page should display."),Object(a.b)("h2",{id:"building-the-foal-app"},"Building the Foal app"),Object(a.b)("p",null,"Now, if you want to build the backend application so that you don't use the ",Object(a.b)("inlineCode",{parentName:"p"},"npm run develop")," option, you can run this command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(a.b)("p",null,"Then, to launch the application, simply execute the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run start\n")))}u.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,h=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(h,i(i({ref:t},p),{},{components:n})):o.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);