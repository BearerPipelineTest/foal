(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4440:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"Error Handling"},s={unversionedId:"cookbook/error-handling",id:"version-1.x/cookbook/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an html page Internal Server Error with the status code 500. If the configuration key settings.debug is set to true (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc).",source:"@site/versioned_docs/version-1.x/cookbook/error-handling.md",sourceDirName:"cookbook",slug:"/cookbook/error-handling",permalink:"/docs/1.x/cookbook/error-handling",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/error-handling.md",version:"1.x",frontMatter:{title:"Error Handling"},sidebar:"someSidebar",previous:{title:"Logging & Debugging",permalink:"/docs/1.x/utilities/logging-and-debugging"},next:{title:"Generate Tokens",permalink:"/docs/1.x/cookbook/generate-tokens"}},l=[],p={toc:l};function u(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an html page ",(0,a.kt)("inlineCode",{parentName:"p"},"Internal Server Error")," with the status code ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),". If the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.debug")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."),(0,a.kt)("p",null,"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."),(0,a.kt)("p",null,"To do this, you can pass an additional option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function and add an ",(0,a.kt)("inlineCode",{parentName:"p"},"handleError")," method to the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController")," class."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\nexport async function main() {\n  // ...\n\n  const app = createApp(AppController, {\n    methods: {\n      handleError: true\n    }\n  });\n\n  // ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/app/app.controller.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponse, renderError } from '@foal/core';\n\nfunction sendErrorToAnExternalService(error: Error, user: User) {\n  // ...\n}\n\nexport class AppController {\n  subControllers = [\n    // ...\n  ];\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error, ctx.user);\n\n    if (error instanceof MyError) {\n      // Do something\n    }\n\n    return renderError(err, ctx);\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If necessary, error logging can be disabled by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.logErrors")," configuration key to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")))}u.isMDXComponent=!0}}]);