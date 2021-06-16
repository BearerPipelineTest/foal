(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4978],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1207:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(2122),s=n(9756),r=(n(7294),n(3905)),i=["components"],a={title:"Session Tokens",sidebar_label:"Session Tokens (authentication)"},l={unversionedId:"authentication-and-access-control/session-tokens",id:"version-1.x/authentication-and-access-control/session-tokens",isDocsHomePage:!1,title:"Session Tokens",description:"Introduction",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/session-tokens.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/session-tokens",permalink:"/es/docs/1.x/authentication-and-access-control/session-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/session-tokens.md",version:"1.x",sidebar_label:"Session Tokens (authentication)",frontMatter:{title:"Session Tokens",sidebar_label:"Session Tokens (authentication)"},sidebar:"someSidebar",previous:{title:"Password Management",permalink:"/es/docs/1.x/authentication-and-access-control/password-management"},next:{title:"Authentication with JWT",permalink:"/es/docs/1.x/authentication-and-access-control/jwt"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Get Started",id:"get-started",children:[{value:"Provide a Secret",id:"provide-a-secret",children:[]},{value:"Choose a Session Store",id:"choose-a-session-store",children:[]},{value:"Create the Session and Get the Token (Log In)",id:"create-the-session-and-get-the-token-log-in",children:[]},{value:"Use the Session Token to Retrieve the Session",id:"use-the-session-token-to-retrieve-the-session",children:[]},{value:"Destroy the Session (Log Out)",id:"destroy-the-session-log-out",children:[]}]},{value:"Usage with Cookies",id:"usage-with-cookies",children:[]},{value:"Specify the Name of the Session Store in the Configuration",id:"specify-the-name-of-the-session-store-in-the-configuration",children:[]},{value:"Update the Session Content",id:"update-the-session-content",children:[]},{value:"Session Expiration Timeouts",id:"session-expiration-timeouts",children:[]},{value:"Revoking Sessions",id:"revoking-sessions",children:[{value:"Revoking One Session",id:"revoking-one-session",children:[]},{value:"Revoking All Sessions",id:"revoking-all-sessions",children:[]}]},{value:"Specifying Globally the Session Store",id:"specifying-globally-the-session-store",children:[]},{value:"Session Stores",id:"session-stores",children:[{value:"TypeORMStore (SQL Databases: Postgres, MySQL, SQLite, etc)",id:"typeormstore-sql-databases-postgres-mysql-sqlite-etc",children:[]},{value:"RedisStore",id:"redisstore",children:[]},{value:"MongoDBStore",id:"mongodbstore",children:[]},{value:"Custom Store",id:"custom-store",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document assumes that you have alread read the ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/authentication-and-access-control/quick-start"},"Quick Start")," page.")),(0,r.kt)("p",null,"In FoalTS, web sessions are temporary states associated with a specific user. They are identified by a token and are mainly used to keep users authenticated between several HTTP requests (the client sends the token on each request to authenticate the user)."),(0,r.kt)("p",null,"A session usually begins when the user logs in and ends after a period of inactivity or when the user logs out. By inactivity, we mean that the server no longer receives requests from the authenticated user for a certain period of time."),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("h3",{id:"provide-a-secret"},"Provide a Secret"),(0,r.kt)("p",null,"In order to use sessions, you must provide a base64-encoded secret in either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a configuration file"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    secret: xxx\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"or in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=xxx\n")))),(0,r.kt)("p",null,"You can generate such a secret with the CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,r.kt)("h3",{id:"choose-a-session-store"},"Choose a Session Store"),(0,r.kt)("p",null,"Then you have to choose where the temporary session state will be stored. FoalTS provides several ",(0,r.kt)("em",{parentName:"p"},"session stores")," for this. For example, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeORMStore")," to save the sessions in your SQL database or the ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisStore")," to save them in a redis cache."),(0,r.kt)("p",null,"These session stores are services and can therefore be injected into your controllers and services as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  // ...\n  login() {\n    // ...\n    const store = this.store;\n  }\n}\n")),(0,r.kt)("h3",{id:"create-the-session-and-get-the-token-log-in"},"Create the Session and Get the Token (Log In)"),(0,r.kt)("p",null,"Sessions are created using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"createAndSaveSessionFromUser")," of the session store. It takes one parameter: an object that must have an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute (the user id). At login time, the user is usually retrieved upstream when checking credentials."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const session = await store.createAndSaveSessionFromUser(user);\n// Alternatively, you can also call the `createAndSaveSession` method as follows:\nconst session = await store.createAndSaveSession({ userId: user.id });\n")),(0,r.kt)("p",null,"The session token then can be read with the method ",(0,r.kt)("inlineCode",{parentName:"p"},"getToken()")," to send it back to the client. This token identifies the session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const token = session.getToken();\n")),(0,r.kt)("h3",{id:"use-the-session-token-to-retrieve-the-session"},"Use the Session Token to Retrieve the Session"),(0,r.kt)("p",null,"On each subsequent request, the client must send this token in order to retrieve the session and authenticate the user. It must be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header using the bearer scheme (unless you use cookies, see section below)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Authorization: Bearer my-session-token\n")),(0,r.kt)("p",null,"The hooks ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional")," will then check the token and retrieve the associated session and user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n\n@TokenRequired({ store: TypeORMStore })\nclass ApiController {\n\n  @Get('/products')\n  readProducts(ctx: Context) {\n    // ctx.user and ctx.session are defined.\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,r.kt)("p",null,"If the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," is not found or does not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer")," scheme, the hook ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired")," returns an error ",(0,r.kt)("em",{parentName:"p"},"400 - BAD REQUEST"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional")," hook does nothing."),(0,r.kt)("p",null,"If the token is present and not valid or if the associated session has expired, both hooks return an error ",(0,r.kt)("em",{parentName:"p"},"401 - UNAUTHORIZED"),"."),(0,r.kt)("p",null,"In other cases, the hooks retrieve the session from the store and assign it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Context.session")," property. As for the session user ID, it is assigned to ",(0,r.kt)("inlineCode",{parentName:"p"},"Context.user"),"."),(0,r.kt)("p",null,"If you want the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user")," to be an object or an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class, you must pass to the hook ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," option a function whose signature is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"(id: string|number) => Promise<any|undefined>\n")),(0,r.kt)("p",null,"The hooks will assign the value it returns to ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user"),"."),(0,r.kt)("p",null,"For example, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchUser")," function to retrieve the user from the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK, TokenRequired } from '@foal/core';\nimport { fetchUser, TypeORMStore } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n@TokenRequired({\n  store: TypeORMStore,\n  user: fetchUser(User)\n})\nclass ApiController {\n\n  @Get('/products')\n  readProducts(ctx: Context) {\n    // ctx.user is an instance of User\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The hooks ",(0,r.kt)("inlineCode",{parentName:"em"},"@TokenRequired")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"@TokenOptional")," are responsible for extending the session life each time a request is received.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alternatively, you can also manually verify a session token and read its associated session. The code below shows how to do so."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const token = // ...\nconst sessionID = Session.verifyTokenAndGetId(token);\nif (!sessionID) {\n  throw new Error('Invalid session token.');\n}\nconst session = await store.read(sessionID);\nif (!session) {\n  throw new Error('Session does not exist or has expired.')\n}\nconst userId = session.get('userId');\n"))),(0,r.kt)("h3",{id:"destroy-the-session-log-out"},"Destroy the Session (Log Out)"),(0,r.kt)("p",null,"Sessions are can be destroyed (i.e users can be logged out) using the ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," method of the session store."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, HttpResponseNoContent, TokenRequired, Session } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({ store: TypeORMStore, extendLifeTimeOrUpdate: false })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,r.kt)("h2",{id:"usage-with-cookies"},"Usage with Cookies"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Be aware that if you use cookies, your application must provide a ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/security/csrf-protection"},"CSRF defense"),".")),(0,r.kt)("p",null,"FoalTS sessions can also be used with cookies. The hook ",(0,r.kt)("inlineCode",{parentName:"p"},"cookie")," option and the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSessionCookie")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeSessionCookie")," funtions are dedicated to this use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post, removeSessionCookie, setSessionCookie, TokenRequired } from '@foal/core';\n\nexport class AuthController {\n\n  @Post('/login')\n  // ...\n  login() {\n    // ...\n    const response = new HttpResponseOK();\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n\n  @Post('/logout')\n  // ...\n  logout() {\n    // ...\n    const response = new HttpResponseOK();\n    removeSessionCookie(response);\n    return response;\n  }\n\n}\n\n@TokenRequired({ store: MyStore, cookie: true })\nexport class ApiController {\n\n}\n")),(0,r.kt)("p",null,"The cookie default directives can be override in the configuration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    cookie:\n      name: xxx\n      domain: example.com\n      httpOnly: false # default: true\n      path: /foo # default: /\n      sameSite: lax\n      secure: true\n")),(0,r.kt)("p",null,"Instead of having 400 and 401 HTTP errors, you can also define redirections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({\n  store: TypeORMStore,\n  cookie: true;\n  redirectTo: '/login'\n})\nexport class PageController {\n  // ...\n}\n")),(0,r.kt)("h2",{id:"specify-the-name-of-the-session-store-in-the-configuration"},"Specify the Name of the Session Store in the Configuration"),(0,r.kt)("p",null,"In order to avoid duplicates, the name of the session package can also be provided in the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Controller {\n\n  @dependency\n  store: SessionStore;\n\n  // ...\n  login() {\n    // this.store.createAndSaveSessionFromUser(...)\n  }\n\n  // ...\n  @TokenRequired()\n  protectedRoute() {\n\n  }\n\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The configuration also supports relative paths. See ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/architecture/services-and-dependency-injection#abstract-services"},"abstract services"),".")),(0,r.kt)("h2",{id:"update-the-session-content"},"Update the Session Content"),(0,r.kt)("p",null,"When receiving an HTTP request, the hooks ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional")," convert the session token (if it exists and is valid) into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," instance retrieved from the session store. This object is assigned to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Context.session")," property and is accessible in the remaining hooks and in the controller method."),(0,r.kt)("p",null,"You can access and modify the session content with the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseNoContent, Post, Session, TokenRequired } from '@foal/core';\n\n@TokenRequired(/* ... */)\nexport class ApiController {\n\n  @Post('/subscribe')\n  purchase(ctx: Context<any, Session>) {\n    const plan = ctx.session.get<string>('plan', 'free');\n    // ...\n  }\n\n  @Post('/choose-premium-plan')\n  addToCart(ctx: Context<any, Session>) {\n    ctx.session.set('plan', 'premium');\n    return new HttpResponseNoContent();\n  }\n}\n")),(0,r.kt)("h2",{id:"session-expiration-timeouts"},"Session Expiration Timeouts"),(0,r.kt)("p",null,"Session states are by definition temporary. They have two expiration timeouts."),(0,r.kt)("p",null,"The first one is the inactivity (or idle) timeout. If the session is not updated or its lifetime is not extended, the session is destroyed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenRequired")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@TokenOptional")," take care of extending the session lifetime on each request. Its default value is 15 minutes."),(0,r.kt)("p",null,"The second is the absolute timeout. Whatever the activity is, the session will expire after a fixed period of time. The default value is one week."),(0,r.kt)("p",null,"These values can be override with the ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/deployment-and-environments/configuration"},"configuration keys")," ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.session.expirationTimeouts.inactivity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.session.expirationTimeouts.absolute"),". The time periods must be specified in seconds."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    secret: xxx\n    expirationTimeouts:\n      absolute: 2592000 # 30 days\n      inactivity: 1800 # 30 min\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example with .env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_EXPIRATION_TIMEOUTS_ABSOLUTE=2592000\nSETTINGS_SESSION_EXPIRATION_TIMEOUTS_INACTIVITY=1800\n")),(0,r.kt)("h2",{id:"revoking-sessions"},"Revoking Sessions"),(0,r.kt)("p",null,"Sessions can be revoked (i.e. destroyed) using the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clear")," of the session stores. The examples below show how to use these methods in ",(0,r.kt)("em",{parentName:"p"},"shell scripts"),"."),(0,r.kt)("h3",{id:"revoking-one-session"},"Revoking One Session"),(0,r.kt)("p",null,"Create a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts/revoke-session.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createService, Session } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport const schema = {\n  type: 'object',\n  properties: {\n    sessionID: { type: 'string' },\n    token: { type: 'string' },\n  }\n}\n\nexport async function main(args: { sessionID?: string, token?: string }) {\n  if (!args.sessionID && !args.token) {\n    console.error('You must provide the session token or session ID.');\n    return;\n  }\n  \n  await createConnection();\n\n  if (!args.sessionID) {\n    const sessionID = Session.verifyTokenAndGetId(args.token);\n    if (!sessionID) {\n      console.error('Invalid session token');\n      return;\n    }\n    args.sessionID = sessionID;\n  }\n\n  const store = createService(TypeORMStore); // OR MongoDBStore, RedisStore, etc\n  await store.destroy(args.sessionID);\n}\n")),(0,r.kt)("p",null,"Build the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:scripts\n")),(0,r.kt)("p",null,"Run the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'foal run revoke-session token="xxx.yyy"\nfoal run revoke-session sessionID="xxx"\n')),(0,r.kt)("h3",{id:"revoking-all-sessions"},"Revoking All Sessions"),(0,r.kt)("p",null,"Create a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts/revoke-all-sessions.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createService } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport async function main() {\n  await createConnection();\n\n  const store = createService(TypeORMStore); // OR MongoDBStore, RedisStore, etc\n  await store.clear();\n}\n")),(0,r.kt)("p",null,"Build the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:scripts\n")),(0,r.kt)("p",null,"Run the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal run revoke-all-sessions\n")),(0,r.kt)("h2",{id:"specifying-globally-the-session-store"},"Specifying Globally the Session Store"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Available in Foal v1.11.0 onwards.")),(0,r.kt)("p",null,"In order to avoid passing the session store to the hooks each time, you can provide it via the configuration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"default.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    store: '@foal/typeorm' # or '@foal/mongodb' or '@foal/redis'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\n@TokenRequired({ store: TypeORMStore })\nexport class ApiController {\n  // ...\n}\n\n// After\n@TokenRequired()\nexport class ApiController {\n  // ...\n}\n")),(0,r.kt)("h2",{id:"session-stores"},"Session Stores"),(0,r.kt)("p",null,"FoalTS currently offers three built-in session stores: ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeORMStore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDBStore")," ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisStore"),". Others will come in the future. If you need a specific one, you can submit a Github issue or even create your own store (see section below)."),(0,r.kt)("h3",{id:"typeormstore-sql-databases-postgres-mysql-sqlite-etc"},"TypeORMStore (SQL Databases: Postgres, MySQL, SQLite, etc)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install typeorm @foal/typeorm\n")),(0,r.kt)("p",null,"This store uses the default TypeORM connection which is usually specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"ormconfig.{json|yml|js}"),". This means that session states are saved in your SQL database (using the table ",(0,r.kt)("inlineCode",{parentName:"p"},"foal_session"),")."),(0,r.kt)("p",null,"Due to the nature of SQL databases, not all expired sessions are deleted by default (we cannot define a time period after which a SQL row must be deleted). However, the session store provides us with a ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanUpExpiredSessions")," function to manually delete all expired sessions. It is recommended to periodically call this method using, for example, a shell script."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/scripts/clean-up-expired-sessions.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createService } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport async function main() {\n  await createConnection();\n\n  const store = createService(TypeORMStore);\n  await store.cleanUpExpiredSessions();\n}\n")),(0,r.kt)("p",null,"Build the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:scripts\n")),(0,r.kt)("p",null,"Run the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal run clean-up-expired-sessions\n")),(0,r.kt)("h3",{id:"redisstore"},"RedisStore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/redis\n")),(0,r.kt)("p",null,"In order to use this store, you must provide the redis URI in either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a configuration file"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"redis:\n  uri: 'redis://localhost:6379'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"or in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"REDIS_URI=redis://localhost:6379\n")))),(0,r.kt)("h3",{id:"mongodbstore"},"MongoDBStore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/mongodb\n")),(0,r.kt)("p",null,"This store saves your session states in a MongoDB database (using the collection ",(0,r.kt)("inlineCode",{parentName:"p"},"foalSessions"),"). In order to use it, you must provide the MongoDB URI in either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a configuration file"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"Example with config/default.yml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"mongodb:\n  uri: 'mongodb://localhost:27017'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"or in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MONGODB_URI=mongodb://localhost:27017\n")))),(0,r.kt)("p",null,"Due to the nature of MongoDB databases, not all expired sessions are deleted by default (we cannot define a time period after which a document must be deleted). However, the session store provides us with a ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanUpExpiredSessions")," function to manually delete all expired sessions. It is recommended to periodically call this method using, for example, a shell script."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/scripts/clean-up-expired-sessions.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createService } from '@foal/core';\nimport { MongoDBStore } from '@foal/mongodb';\n\nexport async function main() {\n  const store = createService(MongoDBStore);\n  await store.cleanUpExpiredSessions();\n}\n")),(0,r.kt)("p",null,"Build the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:scripts\n")),(0,r.kt)("p",null,"Run the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal run clean-up-expired-sessions\n")),(0,r.kt)("h3",{id:"custom-store"},"Custom Store"),(0,r.kt)("p",null,"If necessary, you can also create your own session store. This one must inherit the abstract class ",(0,r.kt)("inlineCode",{parentName:"p"},"SessionStore"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Session, SessionOptions } from '@foal/core';\n\nclass CustomSessionStore extends SessionStore {\n  createAndSaveSession(sessionContent: any, options?: SessionOptions | undefined): Promise<Session> {\n    throw new Error('Method not implemented.');\n  }\n  update(session: Session): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  destroy(sessionID: string): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  read(sessionID: string): Promise<Session | undefined> {\n    throw new Error('Method not implemented.');\n  }\n  extendLifeTime(sessionID: string): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  clear(): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  cleanUpExpiredSessions(): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n}\n")),(0,r.kt)("p",null,"Here is the description of each method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"createAndSaveSession"),": Create and save a new session."),(0,r.kt)("p",{parentName:"li"},"  This method ",(0,r.kt)("em",{parentName:"p"},"MUST")," call the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateSessionID")," method to generate the session ID."),(0,r.kt)("p",{parentName:"li"},"  This method ",(0,r.kt)("em",{parentName:"p"},"MUST")," call the ",(0,r.kt)("inlineCode",{parentName:"p"},"applySessionOptions")," method to extend the sessionContent."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"update"),": Update and extend the lifetime of a session."),(0,r.kt)("p",{parentName:"li"},'Depending on the implementation, the internal behavior can be similar to "update" or "upsert".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"destroy"),": Delete a session, whether it exists or not.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"read"),": Read a session from its ID."),(0,r.kt)("p",{parentName:"li"},"  Return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if the session does not exist or has expired. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"extendLifeTime"),": Extend the lifetime of a session from its ID. The duration is the inactivity timeout."),(0,r.kt)("p",{parentName:"li"},"  If the session does not exist, the method does not throw an error.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"clear"),": Clear all sessions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cleanUpExpiredSessions"),": Some session stores may need to run periodically background jobs to cleanup expired sessions. This method deletes all expired sessions."))))}d.isMDXComponent=!0}}]);