(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{154:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(257)),i={title:"Gestion des Erreurs"},s={unversionedId:"architecture/error-handling",id:"architecture/error-handling",isDocsHomePage:!1,title:"Gestion des Erreurs",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/architecture/error-handling.md",slug:"/architecture/error-handling",permalink:"/fr/docs/architecture/error-handling",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/architecture/error-handling.md",version:"current",sidebar:"someSidebar",previous:{title:"Initialisation",permalink:"/fr/docs/architecture/initialization"},next:{title:"Validation & Assainissement",permalink:"/fr/docs/common/validation-and-sanitization"}},c=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",children:[{value:"Reporting Errors",id:"reporting-errors",children:[]},{value:"Returning JSON",id:"returning-json",children:[]},{value:"Converting Errors into 4xx Responses",id:"converting-errors-into-4xx-responses",children:[]}]},{value:"Errors in Hooks Post Functions",id:"errors-in-hooks-post-functions",children:[]}],p={toc:c};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"/fr/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an HTML page ",Object(a.b)("inlineCode",{parentName:"p"},"Internal Server Error")," with the status code ",Object(a.b)("inlineCode",{parentName:"p"},"500"),". If the configuration parameter ",Object(a.b)("inlineCode",{parentName:"p"},"settings.debug")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."),Object(a.b)("h2",{id:"customizing-the-error-handler"},"Customizing the Error Handler"),Object(a.b)("p",null,"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."),Object(a.b)("p",null,"To do this, you can add an ",Object(a.b)("inlineCode",{parentName:"p"},"handleError")," method to the ",Object(a.b)("inlineCode",{parentName:"p"},"AppController")," class."),Object(a.b)("h3",{id:"reporting-errors"},"Reporting Errors"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"app.controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponse, IAppController, renderError } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error);\n\n    return renderError(error, ctx);\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If necessary, error logging can also be disabled by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"settings.logErrors")," configuration value to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),".")),Object(a.b)("h3",{id:"returning-json"},"Returning JSON"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"app.controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponse, HttpResponseInternalServerError, IAppController } from '@foal/core';\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new Error('Hello world');\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    return new HttpResponseInternalServerError({\n      err: error.message,\n      message: 'An error occured.',\n      path: ctx.request.path,\n    });\n  }\n}\n")),Object(a.b)("h3",{id:"converting-errors-into-4xx-responses"},"Converting Errors into 4xx Responses"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"app.controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponse, HttpResponseForbidden, IAppController, renderError } from '@foal/core';\n\nclass PermissionDenied extends Error {}\n\nexport class AppController implements IAppController {\n  @Get('/')\n  index() {\n    throw new PermissionDenied();\n  }\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    if (error instanceof PermissionDenied) {\n      return new HttpResponseForbidden();\n    }\n\n    return renderError(error, ctx);\n  }\n}\n")),Object(a.b)("h2",{id:"errors-in-hooks-post-functions"},"Errors in Hooks Post Functions"),Object(a.b)("p",null,"When an error is thrown or rejected in a hook or in a controller method, it is converted directly into an ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," (or another response if the ",Object(a.b)("inlineCode",{parentName:"p"},"handleError")," above is defined). The method or hook behaves exactly the same as if it had returned this response."),Object(a.b)("p",null,"Thus, when using ",Object(a.b)("em",{parentName:"p"},"hook post functions"),", you might want to check whether or not an error has been thrown before executing logic."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"@Hook(() => response => {\n  if (isHttpResponseInternalServerError(response)) {\n    return;\n  }\n\n  // Else execute some logic.\n})\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you use the default error handler, then the generated ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," has two additional properties: ",Object(a.b)("inlineCode",{parentName:"p"},"error")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ctx"),".")))}l.isMDXComponent=!0},257:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=t,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,s(s({ref:r},p),{},{components:n})):o.a.createElement(m,s({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);