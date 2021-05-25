(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{273:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(288)),c={title:"Arquitectura"},s={unversionedId:"architecture/architecture-overview",id:"architecture/architecture-overview",isDocsHomePage:!1,title:"Arquitectura",description:"FoalTS is a framework for creating server-side Node.js applications. It is written in TypeScript, a typed superset of JavaScript that provides advanced development tools and the latest language features.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/architecture-overview.md",slug:"/architecture/architecture-overview",permalink:"/es/docs/architecture/architecture-overview",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/architecture/architecture-overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Autenticaci\xf3n Social con Google",permalink:"/es/docs/tutorials/real-world-example-with-react/15-social-auth"},next:{title:"Controladores",permalink:"/es/docs/architecture/controllers"}},i=[{value:"Controllers",id:"controllers",children:[]},{value:"Services",id:"services",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"A Simple Application",id:"a-simple-application",children:[]}],l={toc:i};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"FoalTS is a framework for creating server-side ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node.js")," applications. It is written in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),", a typed superset of JavaScript that provides advanced development tools and the latest language features."),Object(a.b)("p",null,"FoalTS architecture is organized around three main components: controllers, services and hooks."),Object(a.b)("h2",{id:"controllers"},"Controllers"),Object(a.b)("p",null,"Controllers are classes instantiated as singletons. Their methods process the incoming HTTP requests."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("h2",{id:"services"},"Services"),Object(a.b)("p",null,"Services are also classes instantiated as singletons. They are used by the controllers (or hooks) to perform specific tasks."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass FormatService {\n  withDate(message: string): string {\n    return `${new Date()} - ${message}`;\n  }\n}\n\nclass AppController {\n  @dependency\n  format: FormatService;\n\n  @Get('/')\n  index() {\n    const message = this.format.withDate('Hello world!');\n    return new HttpResponseOK(message);\n  }\n\n}\n")),Object(a.b)("h2",{id:"hooks"},"Hooks"),Object(a.b)("p",null,"Hooks are small functions that add extra logic before or after the execution of a controller method."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nclass AppController {\n\n  @Get('/')\n  @JWTRequired()\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("h2",{id:"a-simple-application"},"A Simple Application"),Object(a.b)("p",null,"Controllers may have sub-controllers. Hooks can be attached to the controllers or their methods. "),Object(a.b)("p",null,"Here's an example of what a FoalTS application may look like."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, controller, Get, HttpResponseNotFound, HttpResponseOK, Log } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass ApiController {\n  private products = [\n    { id: 1, name: 'phone' },\n    { id: 2, name: 'computer' },\n  ]\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Get('/products/:id')\n  getProduct(ctx: Context) {\n    const product = this.products.find(\n      p => p.id === parseInt(ctx.request.params.id, 10)\n    );\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n}\n\n@Log('Receiving a request...')\nclass AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Welcome!');\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Request Lifecycle",src:r(445).default})))}p.isMDXComponent=!0},288:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},445:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/request_lifecycle-6483154b08c8a22d7412d0fa953a7304.png"}}]);