(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7023],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1532:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={title:"Architecture Overview"},c={unversionedId:"architecture/architecture-overview",id:"architecture/architecture-overview",isDocsHomePage:!1,title:"Architecture Overview",description:"FoalTS is a framework for creating server-side Node.js applications. It is written in TypeScript, a typed superset of JavaScript that provides advanced development tools and the latest language features.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/architecture/architecture-overview.md",sourceDirName:"architecture",slug:"/architecture/architecture-overview",permalink:"/id/docs/architecture/architecture-overview",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/architecture-overview.md",version:"current",frontMatter:{title:"Architecture Overview"},sidebar:"someSidebar",previous:{title:"Social Auth with Google",permalink:"/id/docs/tutorials/real-world-example-with-react/15-social-auth"},next:{title:"Controllers",permalink:"/id/docs/architecture/controllers"}},l=[{value:"Controllers",id:"controllers",children:[]},{value:"Services",id:"services",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"A Simple Application",id:"a-simple-application",children:[]}],p={toc:l};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FoalTS is a framework for creating server-side ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," applications. It is written in ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", a typed superset of JavaScript that provides advanced development tools and the latest language features."),(0,a.kt)("p",null,"FoalTS architecture is organized around three main components: controllers, services and hooks."),(0,a.kt)("h2",{id:"controllers"},"Controllers"),(0,a.kt)("p",null,"Controllers are classes instantiated as singletons. Their methods process the incoming HTTP requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"Services are also classes instantiated as singletons. They are used by the controllers (or hooks) to perform specific tasks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass FormatService {\n  withDate(message: string): string {\n    return `${new Date()} - ${message}`;\n  }\n}\n\nclass AppController {\n  @dependency\n  format: FormatService;\n\n  @Get('/')\n  index() {\n    const message = this.format.withDate('Hello world!');\n    return new HttpResponseOK(message);\n  }\n\n}\n")),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,"Hooks are small functions that add extra logic before or after the execution of a controller method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nclass AppController {\n\n  @Get('/')\n  @JWTRequired()\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("h2",{id:"a-simple-application"},"A Simple Application"),(0,a.kt)("p",null,"Controllers may have sub-controllers. Hooks can be attached to the controllers or their methods. "),(0,a.kt)("p",null,"Here's an example of what a FoalTS application may look like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, Get, HttpResponseNotFound, HttpResponseOK, Log } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass ApiController {\n  private products = [\n    { id: 1, name: 'phone' },\n    { id: 2, name: 'computer' },\n  ]\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Get('/products/:id')\n  getProduct(ctx: Context) {\n    const product = this.products.find(\n      p => p.id === parseInt(ctx.request.params.id, 10)\n    );\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n}\n\n@Log('Receiving a request...')\nclass AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Welcome!');\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Request Lifecycle",src:r(8448).Z})))}u.isMDXComponent=!0},8448:function(e,t,r){"use strict";t.Z=r.p+"assets/images/request_lifecycle-6483154b08c8a22d7412d0fa953a7304.png"}}]);