(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{242:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(7),a=(n(0),n(257)),i={title:"Error-handling"},c={unversionedId:"upgrade-to-v2/error-handling",id:"upgrade-to-v2/error-handling",isDocsHomePage:!1,title:"Error-handling",description:"Customizing the Error Handler",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/error-handling.md",slug:"/upgrade-to-v2/error-handling",permalink:"/fr/docs/upgrade-to-v2/error-handling",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/error-handling.md",version:"current"},p=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",children:[]},{value:"Errors in Hook Post Functions",id:"errors-in-hook-post-functions",children:[]},{value:"New features",id:"new-features",children:[{value:"The <code>IAppController</code> interface",id:"the-iappcontroller-interface",children:[]},{value:"Error details and <code>HttpResponseInternalServerError</code>",id:"error-details-and-httpresponseinternalservererror",children:[]}]}],l={toc:p};function s(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"customizing-the-error-handler"},"Customizing the Error Handler"),Object(a.b)("p",null,"In version 1, we had to provide an option to ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," to use ",Object(a.b)("inlineCode",{parentName:"p"},"AppController.handleError"),". This is no longer necessary."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\nconst app = createApp(AppController, {\n  methods: {\n    handleError: true\n  }\n});\n\n// After\nconst app = await createApp(AppController);\n")),Object(a.b)("h2",{id:"errors-in-hook-post-functions"},"Errors in Hook Post Functions"),Object(a.b)("p",null,"In version 1, hook post functions were skipped when an error was thrown or rejected. In version 2, this is no longer the case and the response passed to the post functions is an ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," instance."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"class Controller {\n\n  @Get('/products')\n  @Hook(() => response => {\n    // Not executed in version 1.\n    // Executed in version 2 and the response is an `HttpResponseInternalServerError` instance.\n    console.log(response);\n  })\n  readProducts() {\n    throw new Error();\n  }\n\n}\n")),Object(a.b)("h2",{id:"new-features"},"New features"),Object(a.b)("h3",{id:"the-iappcontroller-interface"},"The ",Object(a.b)("inlineCode",{parentName:"h3"},"IAppController")," interface"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"AppController")," can implement the ",Object(a.b)("inlineCode",{parentName:"p"},"IAppController")," interface. In this way, we make sure that the optional methods ",Object(a.b)("inlineCode",{parentName:"p"},"init")," and ",Object(a.b)("inlineCode",{parentName:"p"},"handleError")," are correctly implemented as well as the ",Object(a.b)("inlineCode",{parentName:"p"},"subControllers")," property."),Object(a.b)("h3",{id:"error-details-and-httpresponseinternalservererror"},"Error details and ",Object(a.b)("inlineCode",{parentName:"h3"},"HttpResponseInternalServerError")),Object(a.b)("p",null,"The default ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," instance returned by the error handler when an error is thrown or rejected has two new properties:\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"error")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"ctx"),"."))}s.isMDXComponent=!0},257:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return h}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=t,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(h,c(c({ref:r},l),{},{components:n})):o.a.createElement(h,c({ref:r},l))}));function h(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);