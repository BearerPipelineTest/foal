(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5203],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7377:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),s=["components"],i={title:"Hooks"},l={unversionedId:"architecture/hooks",id:"version-1.x/architecture/hooks",isDocsHomePage:!1,title:"Hooks",description:"`sh",source:"@site/versioned_docs/version-1.x/architecture/hooks.md",sourceDirName:"architecture",slug:"/architecture/hooks",permalink:"/es/docs/1.x/architecture/hooks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/hooks.md",version:"1.x",frontMatter:{title:"Hooks"},sidebar:"someSidebar",previous:{title:"Services & Dependency Injection",permalink:"/es/docs/1.x/architecture/services-and-dependency-injection"},next:{title:"Initialization",permalink:"/es/docs/1.x/architecture/initialization"}},c=[{value:"Description",id:"description",children:[]},{value:"Built-in Hooks",id:"built-in-hooks",children:[]},{value:"Use",id:"use",children:[]},{value:"Build Custom Hooks",id:"build-custom-hooks",children:[{value:"Executing Logic After the Controller Method",id:"executing-logic-after-the-controller-method",children:[]}]},{value:"Grouping Several Hooks into One",id:"grouping-several-hooks-into-one",children:[]},{value:"Testing Hooks",id:"testing-hooks",children:[{value:"Testing Hook Post Functions",id:"testing-hook-post-functions",children:[]},{value:"Testing Hooks that Use <code>this</code>",id:"testing-hooks-that-use-this",children:[]},{value:"Mocking services",id:"mocking-services",children:[]}]},{value:"Hook factories",id:"hook-factories",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate hook my-hook\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Hooks are decorators that execute extra logic before and/or after the execution of a controller method."),(0,a.kt)("p",null,"They are particulary useful in these scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"authentication & access control"),(0,a.kt)("li",{parentName:"ul"},"request validation & sanitization"),(0,a.kt)("li",{parentName:"ul"},"logging")),(0,a.kt)("p",null,"They improve code readability and make unit testing easier."),(0,a.kt)("h2",{id:"built-in-hooks"},"Built-in Hooks"),(0,a.kt)("p",null,"Foal provides a number of hooks to handle the most common scenarios."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateBody"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateHeader"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateHeaders"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidatePathParam"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateParams"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateCookie"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateCookies"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateQueryParam")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidateQuery")," validate the format of the incoming HTTP requests (see ",(0,a.kt)("a",{parentName:"li",href:"/es/docs/1.x/validation-and-sanitization"},"Validation"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Log")," displays information on the request (see ",(0,a.kt)("a",{parentName:"li",href:"/es/docs/1.x/utilities/logging-and-debugging"},"Logging & Debugging"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWTRequired"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"JWTOptional"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TokenRequired"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TokenOptional")," authenticate the user by filling the ",(0,a.kt)("inlineCode",{parentName:"li"},"ctx.user")," property."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PermissionRequired")," restricts the route access to certain users.")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"A hook can decorate a controller method or the controller itself. If it decorates the controller then it applies to all its methods and sub-controllers."),(0,a.kt)("p",null,"In the below example, ",(0,a.kt)("inlineCode",{parentName:"p"},"JWTRequired")," applies to ",(0,a.kt)("inlineCode",{parentName:"p"},"listProducts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"addProduct"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context, Get, HttpResponseCreated, HttpResponseOK, Post, ValidateBody\n} from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass AppController {\n  private products = [\n    { name: 'Hoover' }\n  ];\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      name: { type: 'string' }\n    },\n    additionalProperties: false,\n    required: [ 'name' ]\n  })\n  addProduct(ctx: Context) {\n    this.products.push(ctx.request.body);\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,a.kt)("p",null,"If the user makes a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/products")," whereas she/he is not authenticated, then the server will respond with a 401 error and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateBody")," hook and ",(0,a.kt)("inlineCode",{parentName:"p"},"addProduct")," method won't be executed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you need to apply a hook globally, you just have to make it decorate the root controller: ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController"),"."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Log('Request body:', { body: true })\nexport class AppController {\n // ...\n}\n"))),(0,a.kt)("h2",{id:"build-custom-hooks"},"Build Custom Hooks"),(0,a.kt)("p",null,"In addition to the hooks provided by FoalTS, you can also create your own."),(0,a.kt)("p",null,"A hook is made of a small function, synchronous or asynchronous, that is executed before the controller method."),(0,a.kt)("p",null,"To create one, you need to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hook")," function."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => {\n    console.log('Receiving GET / request...');\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("p",null,"The hook function can take two parameters: the ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," object and the service manager. The ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/1.x/architecture/controllers"},"Context object")," is specific to the request and gives you information on it. The service manager lets you access any service through its ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," method."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n\nclass MyController {\n\n  @Get('/')\n  @Hook((ctx, services) => {\n    const logger = services.get(Logger);\n    logger.log('IP: ' + ctx.request.ip);\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("p",null,"A hook function can return an ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponse")," object. If so, the remaining hooks and the controller method are not executed and the object is used to render the HTTP response."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, Hook, HttpResponseBadRequest, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook((ctx: Context) => {\n    if (typeof ctx.request.body.name !== 'string') {\n      return new HttpResponseBadRequest();\n    }\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("p",null,"You can also have access to the controller instance through the ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," keyword."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, getAjvInstance, Hook, HttpResponseBadRequest, HttpResponseOK } from '@foal/core';\n\n\nclass MyController {\n\n  schema = { /* ... */ };\n\n  @Get('/')\n  @Hook((this: MyController, ctx, services) => {\n    const ajv = getAjvInstance();\n    const requestBody = ctx.request.body;\n    if (!ajv.validate(this.schema, requestBody)) {\n      return new HttpResponseBadRequest(ajv.errors);\n    }\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("h3",{id:"executing-logic-after-the-controller-method"},"Executing Logic After the Controller Method"),(0,a.kt)("p",null,"A hook can also be used to execute extra logic after the controller method. To do so, you can return a ",(0,a.kt)("em",{parentName:"p"},"hook post function")," inside the hook. This function will be executed after the controller method. It takes exactly one parameter: the ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponse")," object returned by the controller."),(0,a.kt)("p",null,"The below example shows how to add a custom cookie to the response returned by the controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => response => {\n    response.setCookie('X-CSRF-TOKEN', 'xxx');\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("p",null,"This example shows how to execute logic both before and after the controller method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => {\n    const time = process.hrtime(); \n\n    return () => {\n      const seconds = process.hrtime(time)[0];\n      console.log(`Executed in ${seconds} seconds`);\n    };\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("h2",{id:"grouping-several-hooks-into-one"},"Grouping Several Hooks into One"),(0,a.kt)("p",null,"In case you need to group several hooks together, the ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeHooks")," function can be used to do this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\n\nclass MyController {\n  @Post('/products')\n  @ValidateBody({...})\n  @ValidateHeaders({...})\n  @ValidateCookie({...})\n  addProduct() {\n    // ...\n  }\n}\n\n// After\n\nfunction ValidateAll() {\n  return MergeHooks(\n    ValidateBody({...}),\n    ValidateHeaders({...}),\n    ValidateCookie({...})\n  )\n}\n\nclass MyController {\n  @Post('/products')\n  @ValidateAll()\n  addProduct() {\n    // ...\n  }\n}\n")),(0,a.kt)("h2",{id:"testing-hooks"},"Testing Hooks"),(0,a.kt)("p",null,"Hooks can be tested thanks to the utility ",(0,a.kt)("inlineCode",{parentName:"p"},"getHookFunction")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"getHookFunctions")," if the hook was made from several functions)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// validate-body.hook.ts\nimport { Hook, HttpResponseBadRequest } from '@foal/core';\n\nexport function ValidateBody() {\n  return Hook(ctx => {\n    if (typeof ctx.request.body.name !== 'string') {\n      return new HttpResponseBadRequest();\n    }\n  });\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// validate-body.hook.spec.ts\nimport {\n  Context, getHookFunction,\n  isHttpResponseBadRequest, ServiceManager\n} from '@foal/core';\nimport { ValidateBody } from './validate-body.hook';\n\nit('ValidateBody', () => {\n  const ctx = new Context({\n    // fake request object\n    body: { name: 3 }\n  });\n  const hook = getHookFunction(ValidateBody());\n  \n  const response = hook(ctx, new ServiceManager());\n\n  if (!isHttpResponseBadRequest(response)) {\n    throw new Error('The hook should return an HttpResponseBadRequest object.');\n  }\n});\n")),(0,a.kt)("h3",{id:"testing-hook-post-functions"},"Testing Hook Post Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// add-xxx-header.hook.ts\nimport { Hook } from '@foal/core';\n\nexport function AddXXXHeader() {\n  return Hook(ctx => response => {\n    response.setHeader('XXX', 'YYY');\n  });\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// add-xxx-header.hook.spec.ts\nimport { strictEqual } from 'assert';\nimport {\n  Context, getHookFunction, HttpResponseOK,\n  isHttpResponse, ServiceManager\n} from '@foal/core';\nimport { AddXXXHeader } from './add-xxx-header.hook';\n\nit('AddXXXHeader', () => {\n  const ctx = new Context({});\n  const hook = getHookFunction(AddXXXHeader());\n  \n  const postHookFunction = await hook(ctx, new ServiceManager());\n  if (postHookFunction === undefined || isHttpResponse(postHookFunction)) {\n    throw new Error('The hook should return a post hook function');\n  }\n\n  const response = new HttpResponseOK();\n  await postHookFunction(response);\n\n  strictEqual(response.getHeader('XXX'), 'YYY');\n});\n")),(0,a.kt)("h3",{id:"testing-hooks-that-use-this"},"Testing Hooks that Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// validate-param-type.hook.ts\nimport { Context, Hook, HttpResponseBadRequest } from '@foal/core';\n\nexport function ValidateParamType() {\n  return Hook(function(this: any, ctx: Context) {\n    if (typeof ctx.request.params.id !== this.paramType) {\n      return new HttpResponseBadRequest();\n    }\n  });\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// validate-param-type.hook.spec.ts\nimport { Context, getHookFunction , HttpResponseBadRequest } from '@foal/core';\nimport { ValidateParamType } from './validate-param-type';\n\nconst ctx = new Context({\n  // fake request object\n  params: { id: 'xxx' }\n});\nconst controller = {\n  paramType: 'number'\n};\nconst hook = getHookFunction(ValidateParamType()).bind(controller);\n\nconst response = hook(ctx, new ServiceManager());\n\nif (!isHttpResponseBadRequest(response)) {\n  throw new Error('The hook should return an HttpResponseBadRequest object.');\n}\n")),(0,a.kt)("h3",{id:"mocking-services"},"Mocking services"),(0,a.kt)("p",null,"You can mock services by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," method of the service manager."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// authenticate.hook.ts\nimport { Get, Hook, HttpResponseOK } from '@foal/core';\n\nexport class UserService {\n  private users = {\n    eh4sb: { id: 1, name: 'John' },\n    kadu5: { id: 2, name: 'Mary' }\n  };\n\n  getUser(key: string) {\n    return this.users[key];\n  }\n}\n\nexport const authenticate = Hook((ctx, services) => {\n  const users = services.get(UserService);\n  ctx.user = users.getUser(ctx.params.query.key);\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// authenticate.hook.spec.ts\nimport { strictEqual } from 'assert';\nimport { Context, getHookFunction } from '@foal/core';\nimport { authenticate, UserService } from './authenticate.hook';\n\nit('authenticate', () => {\n  const hook = getHookFunction(authenticate);\n\n  const user = { id: 3, name: 'Bob' };\n\n  const ctx = Context();\n  const services = new ServiceManager();\n  services.set(UserService, {\n    getUser() {\n      return user;\n    }\n  })\n  \n  hook(ctx, services);\n\n  strictEqual(ctx.user, user);\n});\n")),(0,a.kt)("h2",{id:"hook-factories"},"Hook factories"),(0,a.kt)("p",null,"Usually, we don't create hooks directly by hook factories. Thus it is easier to customize the hook behavior on each route."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, Hook } from '@foal/core';\n\nfunction Log(msg: string) {\n  return Hook(() => { console.log(msg); });\n}\n\nclass MyController {\n  @Get('/route1')\n  @Log('Receiving a GET /route1 request...')\n  route1() {\n    // ...\n  }\n\n  @Get('/route2')\n  @Log('Receiving a GET /route2 request...')\n  route2() {\n    // ...\n  }\n}\n")))}u.isMDXComponent=!0}}]);