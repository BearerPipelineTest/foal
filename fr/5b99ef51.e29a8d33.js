(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),s=n(7),r=(n(0),n(257)),a={title:"Session Tokens",sidebar_label:"Session Tokens (authentication)"},i={unversionedId:"authentication-and-access-control/session-tokens",id:"version-1.x/authentication-and-access-control/session-tokens",isDocsHomePage:!1,title:"Session Tokens",description:"Introduction",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/session-tokens.md",slug:"/authentication-and-access-control/session-tokens",permalink:"/fr/docs/1.x/authentication-and-access-control/session-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/session-tokens.md",version:"1.x",sidebar_label:"Session Tokens (authentication)",sidebar:"someSidebar",previous:{title:"Password Management",permalink:"/fr/docs/1.x/authentication-and-access-control/password-management"},next:{title:"Authentication with JWT",permalink:"/fr/docs/1.x/authentication-and-access-control/jwt"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Get Started",id:"get-started",children:[{value:"Provide a Secret",id:"provide-a-secret",children:[]},{value:"Choose a Session Store",id:"choose-a-session-store",children:[]},{value:"Create the Session and Get the Token (Log In)",id:"create-the-session-and-get-the-token-log-in",children:[]},{value:"Use the Session Token to Retrieve the Session",id:"use-the-session-token-to-retrieve-the-session",children:[]},{value:"Destroy the Session (Log Out)",id:"destroy-the-session-log-out",children:[]}]},{value:"Usage with Cookies",id:"usage-with-cookies",children:[]},{value:"Specify the Name of the Session Store in the Configuration",id:"specify-the-name-of-the-session-store-in-the-configuration",children:[]},{value:"Update the Session Content",id:"update-the-session-content",children:[]},{value:"Session Expiration Timeouts",id:"session-expiration-timeouts",children:[]},{value:"Revoking Sessions",id:"revoking-sessions",children:[{value:"Revoking One Session",id:"revoking-one-session",children:[]},{value:"Revoking All Sessions",id:"revoking-all-sessions",children:[]}]},{value:"Specifying Globally the Session Store",id:"specifying-globally-the-session-store",children:[]},{value:"Session Stores",id:"session-stores",children:[{value:"TypeORMStore (SQL Databases: Postgres, MySQL, SQLite, etc)",id:"typeormstore-sql-databases-postgres-mysql-sqlite-etc",children:[]},{value:"RedisStore",id:"redisstore",children:[]},{value:"MongoDBStore",id:"mongodbstore",children:[]},{value:"Custom Store",id:"custom-store",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This document assumes that you have alread read the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/fr/docs/1.x/authentication-and-access-control/quick-start"}),"Quick Start")," page.")),Object(r.b)("p",null,"In FoalTS, web sessions are temporary states associated with a specific user. They are identified by a token and are mainly used to keep users authenticated between several HTTP requests (the client sends the token on each request to authenticate the user)."),Object(r.b)("p",null,"A session usually begins when the user logs in and ends after a period of inactivity or when the user logs out. By inactivity, we mean that the server no longer receives requests from the authenticated user for a certain period of time."),Object(r.b)("h2",{id:"get-started"},"Get Started"),Object(r.b)("h3",{id:"provide-a-secret"},"Provide a Secret"),Object(r.b)("p",null,"In order to use sessions, you must provide a base64-encoded secret in either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"a configuration file"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    secret: xxx\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"or in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_SESSION_SECRET=xxx\n")))),Object(r.b)("p",null,"You can generate such a secret with the CLI command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(r.b)("h3",{id:"choose-a-session-store"},"Choose a Session Store"),Object(r.b)("p",null,"Then you have to choose where the temporary session state will be stored. FoalTS provides several ",Object(r.b)("em",{parentName:"p"},"session stores")," for this. For example, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"TypeORMStore")," to save the sessions in your SQL database or the ",Object(r.b)("inlineCode",{parentName:"p"},"RedisStore")," to save them in a redis cache."),Object(r.b)("p",null,"These session stores are services and can therefore be injected into your controllers and services as such:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  // ...\n  login() {\n    // ...\n    const store = this.store;\n  }\n}\n")),Object(r.b)("h3",{id:"create-the-session-and-get-the-token-log-in"},"Create the Session and Get the Token (Log In)"),Object(r.b)("p",null,"Sessions are created using the method ",Object(r.b)("inlineCode",{parentName:"p"},"createAndSaveSessionFromUser")," of the session store. It takes one parameter: an object that must have an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," attribute (the user id). At login time, the user is usually retrieved upstream when checking credentials."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const session = await store.createAndSaveSessionFromUser(user);\n// Alternatively, you can also call the `createAndSaveSession` method as follows:\nconst session = await store.createAndSaveSession({ userId: user.id });\n")),Object(r.b)("p",null,"The session token then can be read with the method ",Object(r.b)("inlineCode",{parentName:"p"},"getToken()")," to send it back to the client. This token identifies the session."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const token = session.getToken();\n")),Object(r.b)("h3",{id:"use-the-session-token-to-retrieve-the-session"},"Use the Session Token to Retrieve the Session"),Object(r.b)("p",null,"On each subsequent request, the client must send this token in order to retrieve the session and authenticate the user. It must be included in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header using the bearer scheme (unless you use cookies, see section below)."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Authorization: Bearer my-session-token\n")),Object(r.b)("p",null,"The hooks ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenRequired")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenOptional")," will then check the token and retrieve the associated session and user."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponseOK, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n\n@TokenRequired({ store: TypeORMStore })\nclass ApiController {\n\n  @Get('/products')\n  readProducts(ctx: Context) {\n    // ctx.user and ctx.session are defined.\n    return new HttpResponseOK();\n  }\n\n}\n")),Object(r.b)("p",null,"If the header ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," is not found or does not use the ",Object(r.b)("inlineCode",{parentName:"p"},"bearer")," scheme, the hook ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenRequired")," returns an error ",Object(r.b)("em",{parentName:"p"},"400 - BAD REQUEST"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenOptional")," hook does nothing."),Object(r.b)("p",null,"If the token is present and not valid or if the associated session has expired, both hooks return an error ",Object(r.b)("em",{parentName:"p"},"401 - UNAUTHORIZED"),"."),Object(r.b)("p",null,"In other cases, the hooks retrieve the session from the store and assign it to the ",Object(r.b)("inlineCode",{parentName:"p"},"Context.session")," property. As for the session user ID, it is assigned to ",Object(r.b)("inlineCode",{parentName:"p"},"Context.user"),"."),Object(r.b)("p",null,"If you want the ",Object(r.b)("inlineCode",{parentName:"p"},"ctx.user")," to be an object or an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," class, you must pass to the hook ",Object(r.b)("inlineCode",{parentName:"p"},"user")," option a function whose signature is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"(id: string|number) => Promise<any|undefined>\n")),Object(r.b)("p",null,"The hooks will assign the value it returns to ",Object(r.b)("inlineCode",{parentName:"p"},"ctx.user"),"."),Object(r.b)("p",null,"For example, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"fetchUser")," function to retrieve the user from the database:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, HttpResponseOK, TokenRequired } from '@foal/core';\nimport { fetchUser, TypeORMStore } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n@TokenRequired({\n  store: TypeORMStore,\n  user: fetchUser(User)\n})\nclass ApiController {\n\n  @Get('/products')\n  readProducts(ctx: Context) {\n    // ctx.user is an instance of User\n    return new HttpResponseOK();\n  }\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: The hooks ",Object(r.b)("inlineCode",{parentName:"em"},"@TokenRequired")," and ",Object(r.b)("inlineCode",{parentName:"em"},"@TokenOptional")," are responsible for extending the session life each time a request is received.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Alternatively, you can also manually verify a session token and read its associated session. The code below shows how to do so."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const token = // ...\nconst sessionID = Session.verifyTokenAndGetId(token);\nif (!sessionID) {\n  throw new Error('Invalid session token.');\n}\nconst session = await store.read(sessionID);\nif (!session) {\n  throw new Error('Session does not exist or has expired.')\n}\nconst userId = session.get('userId');\n"))),Object(r.b)("h3",{id:"destroy-the-session-log-out"},"Destroy the Session (Log Out)"),Object(r.b)("p",null,"Sessions are can be destroyed (i.e users can be logged out) using the ",Object(r.b)("inlineCode",{parentName:"p"},"destroy")," method of the session store."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, dependency, HttpResponseNoContent, TokenRequired, Session } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({ store: TypeORMStore, extendLifeTimeOrUpdate: false })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    return new HttpResponseNoContent();\n  }\n\n}\n")),Object(r.b)("h2",{id:"usage-with-cookies"},"Usage with Cookies"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Be aware that if you use cookies, your application must provide a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/fr/docs/1.x/security/csrf-protection"}),"CSRF defense"),".")),Object(r.b)("p",null,"FoalTS sessions can also be used with cookies. The hook ",Object(r.b)("inlineCode",{parentName:"p"},"cookie")," option and the ",Object(r.b)("inlineCode",{parentName:"p"},"setSessionCookie")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removeSessionCookie")," funtions are dedicated to this use."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseOK, Post, removeSessionCookie, setSessionCookie, TokenRequired } from '@foal/core';\n\nexport class AuthController {\n\n  @Post('/login')\n  // ...\n  login() {\n    // ...\n    const response = new HttpResponseOK();\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n\n  @Post('/logout')\n  // ...\n  logout() {\n    // ...\n    const response = new HttpResponseOK();\n    removeSessionCookie(response);\n    return response;\n  }\n\n}\n\n@TokenRequired({ store: MyStore, cookie: true })\nexport class ApiController {\n\n}\n")),Object(r.b)("p",null,"The cookie default directives can be override in the configuration."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    cookie:\n      name: xxx\n      domain: example.com\n      httpOnly: false # default: true\n      path: /foo # default: /\n      sameSite: lax\n      secure: true\n")),Object(r.b)("p",null,"Instead of having 400 and 401 HTTP errors, you can also define redirections."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@TokenRequired({\n  store: TypeORMStore,\n  cookie: true;\n  redirectTo: '/login'\n})\nexport class PageController {\n  // ...\n}\n")),Object(r.b)("h2",{id:"specify-the-name-of-the-session-store-in-the-configuration"},"Specify the Name of the Session Store in the Configuration"),Object(r.b)("p",null,"In order to avoid duplicates, the name of the session package can also be provided in the configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class Controller {\n\n  @dependency\n  store: SessionStore;\n\n  // ...\n  login() {\n    // this.store.createAndSaveSessionFromUser(...)\n  }\n\n  // ...\n  @TokenRequired()\n  protectedRoute() {\n\n  }\n\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The configuration also supports relative paths. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/fr/docs/1.x/architecture/services-and-dependency-injection#abstract-services"}),"abstract services"),".")),Object(r.b)("h2",{id:"update-the-session-content"},"Update the Session Content"),Object(r.b)("p",null,"When receiving an HTTP request, the hooks ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenRequired")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenOptional")," convert the session token (if it exists and is valid) into a ",Object(r.b)("inlineCode",{parentName:"p"},"Session")," instance retrieved from the session store. This object is assigned to the ",Object(r.b)("inlineCode",{parentName:"p"},"Context.session")," property and is accessible in the remaining hooks and in the controller method."),Object(r.b)("p",null,"You can access and modify the session content with the ",Object(r.b)("inlineCode",{parentName:"p"},"set")," and ",Object(r.b)("inlineCode",{parentName:"p"},"get")," methods."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, HttpResponseNoContent, Post, Session, TokenRequired } from '@foal/core';\n\n@TokenRequired(/* ... */)\nexport class ApiController {\n\n  @Post('/subscribe')\n  purchase(ctx: Context<any, Session>) {\n    const plan = ctx.session.get<string>('plan', 'free');\n    // ...\n  }\n\n  @Post('/choose-premium-plan')\n  addToCart(ctx: Context<any, Session>) {\n    ctx.session.set('plan', 'premium');\n    return new HttpResponseNoContent();\n  }\n}\n")),Object(r.b)("h2",{id:"session-expiration-timeouts"},"Session Expiration Timeouts"),Object(r.b)("p",null,"Session states are by definition temporary. They have two expiration timeouts."),Object(r.b)("p",null,"The first one is the inactivity (or idle) timeout. If the session is not updated or its lifetime is not extended, the session is destroyed. The ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenRequired")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@TokenOptional")," take care of extending the session lifetime on each request. Its default value is 15 minutes."),Object(r.b)("p",null,"The second is the absolute timeout. Whatever the activity is, the session will expire after a fixed period of time. The default value is one week."),Object(r.b)("p",null,"These values can be override with the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/fr/docs/1.x/deployment-and-environments/configuration"}),"configuration keys")," ",Object(r.b)("inlineCode",{parentName:"p"},"settings.session.expirationTimeouts.inactivity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"settings.session.expirationTimeouts.absolute"),". The time periods must be specified in seconds."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    secret: xxx\n    expirationTimeouts:\n      absolute: 2592000 # 30 days\n      inactivity: 1800 # 30 min\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example with .env")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_SESSION_EXPIRATION_TIMEOUTS_ABSOLUTE=2592000\nSETTINGS_SESSION_EXPIRATION_TIMEOUTS_INACTIVITY=1800\n")),Object(r.b)("h2",{id:"revoking-sessions"},"Revoking Sessions"),Object(r.b)("p",null,"Sessions can be revoked (i.e. destroyed) using the methods ",Object(r.b)("inlineCode",{parentName:"p"},"destroy")," and ",Object(r.b)("inlineCode",{parentName:"p"},"clear")," of the session stores. The examples below show how to use these methods in ",Object(r.b)("em",{parentName:"p"},"shell scripts"),"."),Object(r.b)("h3",{id:"revoking-one-session"},"Revoking One Session"),Object(r.b)("p",null,"Create a new file named ",Object(r.b)("inlineCode",{parentName:"p"},"src/scripts/revoke-session.ts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { createService, Session } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport const schema = {\n  type: 'object',\n  properties: {\n    sessionID: { type: 'string' },\n    token: { type: 'string' },\n  }\n}\n\nexport async function main(args: { sessionID?: string, token?: string }) {\n  if (!args.sessionID && !args.token) {\n    console.error('You must provide the session token or session ID.');\n    return;\n  }\n  \n  await createConnection();\n\n  if (!args.sessionID) {\n    const sessionID = Session.verifyTokenAndGetId(args.token);\n    if (!sessionID) {\n      console.error('Invalid session token');\n      return;\n    }\n    args.sessionID = sessionID;\n  }\n\n  const store = createService(TypeORMStore); // OR MongoDBStore, RedisStore, etc\n  await store.destroy(args.sessionID);\n}\n")),Object(r.b)("p",null,"Build the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm run build:scripts\n")),Object(r.b)("p",null,"Run the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'foal run revoke-session token="xxx.yyy"\nfoal run revoke-session sessionID="xxx"\n')),Object(r.b)("h3",{id:"revoking-all-sessions"},"Revoking All Sessions"),Object(r.b)("p",null,"Create a new file named ",Object(r.b)("inlineCode",{parentName:"p"},"src/scripts/revoke-all-sessions.ts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { createService } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport async function main() {\n  await createConnection();\n\n  const store = createService(TypeORMStore); // OR MongoDBStore, RedisStore, etc\n  await store.clear();\n}\n")),Object(r.b)("p",null,"Build the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm run build:scripts\n")),Object(r.b)("p",null,"Run the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal run revoke-all-sessions\n")),Object(r.b)("h2",{id:"specifying-globally-the-session-store"},"Specifying Globally the Session Store"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Available in Foal v1.11.0 onwards.")),Object(r.b)("p",null,"In order to avoid passing the session store to the hooks each time, you can provide it via the configuration."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"default.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    store: '@foal/typeorm' # or '@foal/mongodb' or '@foal/redis'\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\n@TokenRequired({ store: TypeORMStore })\nexport class ApiController {\n  // ...\n}\n\n// After\n@TokenRequired()\nexport class ApiController {\n  // ...\n}\n")),Object(r.b)("h2",{id:"session-stores"},"Session Stores"),Object(r.b)("p",null,"FoalTS currently offers three built-in session stores: ",Object(r.b)("inlineCode",{parentName:"p"},"TypeORMStore"),", ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDBStore")," ",Object(r.b)("inlineCode",{parentName:"p"},"RedisStore"),". Others will come in the future. If you need a specific one, you can submit a Github issue or even create your own store (see section below)."),Object(r.b)("h3",{id:"typeormstore-sql-databases-postgres-mysql-sqlite-etc"},"TypeORMStore (SQL Databases: Postgres, MySQL, SQLite, etc)"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install typeorm @foal/typeorm\n")),Object(r.b)("p",null,"This store uses the default TypeORM connection which is usually specified in ",Object(r.b)("inlineCode",{parentName:"p"},"ormconfig.{json|yml|js}"),". This means that session states are saved in your SQL database (using the table ",Object(r.b)("inlineCode",{parentName:"p"},"foal_session"),")."),Object(r.b)("p",null,"Due to the nature of SQL databases, not all expired sessions are deleted by default (we cannot define a time period after which a SQL row must be deleted). However, the session store provides us with a ",Object(r.b)("inlineCode",{parentName:"p"},"cleanUpExpiredSessions")," function to manually delete all expired sessions. It is recommended to periodically call this method using, for example, a shell script."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/scripts/clean-up-expired-sessions.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { createService } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport async function main() {\n  await createConnection();\n\n  const store = createService(TypeORMStore);\n  await store.cleanUpExpiredSessions();\n}\n")),Object(r.b)("p",null,"Build the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm run build:scripts\n")),Object(r.b)("p",null,"Run the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal run clean-up-expired-sessions\n")),Object(r.b)("h3",{id:"redisstore"},"RedisStore"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install @foal/redis\n")),Object(r.b)("p",null,"In order to use this store, you must provide the redis URI in either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"a configuration file"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"redis:\n  uri: 'redis://localhost:6379'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"or in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"REDIS_URI=redis://localhost:6379\n")))),Object(r.b)("h3",{id:"mongodbstore"},"MongoDBStore"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install @foal/mongodb\n")),Object(r.b)("p",null,"This store saves your session states in a MongoDB database (using the collection ",Object(r.b)("inlineCode",{parentName:"p"},"foalSessions"),"). In order to use it, you must provide the MongoDB URI in either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"a configuration file"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},"Example with config/default.yml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"mongodb:\n  uri: 'mongodb://localhost:27017'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"or in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file or in an environment variable:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"MONGODB_URI=mongodb://localhost:27017\n")))),Object(r.b)("p",null,"Due to the nature of MongoDB databases, not all expired sessions are deleted by default (we cannot define a time period after which a document must be deleted). However, the session store provides us with a ",Object(r.b)("inlineCode",{parentName:"p"},"cleanUpExpiredSessions")," function to manually delete all expired sessions. It is recommended to periodically call this method using, for example, a shell script."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"src/scripts/clean-up-expired-sessions.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { createService } from '@foal/core';\nimport { MongoDBStore } from '@foal/mongodb';\n\nexport async function main() {\n  const store = createService(MongoDBStore);\n  await store.cleanUpExpiredSessions();\n}\n")),Object(r.b)("p",null,"Build the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"npm run build:scripts\n")),Object(r.b)("p",null,"Run the script."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"foal run clean-up-expired-sessions\n")),Object(r.b)("h3",{id:"custom-store"},"Custom Store"),Object(r.b)("p",null,"If necessary, you can also create your own session store. This one must inherit the abstract class ",Object(r.b)("inlineCode",{parentName:"p"},"SessionStore"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Session, SessionOptions } from '@foal/core';\n\nclass CustomSessionStore extends SessionStore {\n  createAndSaveSession(sessionContent: any, options?: SessionOptions | undefined): Promise<Session> {\n    throw new Error('Method not implemented.');\n  }\n  update(session: Session): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  destroy(sessionID: string): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  read(sessionID: string): Promise<Session | undefined> {\n    throw new Error('Method not implemented.');\n  }\n  extendLifeTime(sessionID: string): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  clear(): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n  cleanUpExpiredSessions(): Promise<void> {\n    throw new Error('Method not implemented.');\n  }\n}\n")),Object(r.b)("p",null,"Here is the description of each method:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"createAndSaveSession"),": Create and save a new session."),Object(r.b)("p",{parentName:"li"},"  This method ",Object(r.b)("em",{parentName:"p"},"MUST")," call the ",Object(r.b)("inlineCode",{parentName:"p"},"generateSessionID")," method to generate the session ID."),Object(r.b)("p",{parentName:"li"},"  This method ",Object(r.b)("em",{parentName:"p"},"MUST")," call the ",Object(r.b)("inlineCode",{parentName:"p"},"applySessionOptions")," method to extend the sessionContent."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"update"),": Update and extend the lifetime of a session."),Object(r.b)("p",{parentName:"li"},'Depending on the implementation, the internal behavior can be similar to "update" or "upsert".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"destroy"),": Delete a session, whether it exists or not.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"read"),": Read a session from its ID."),Object(r.b)("p",{parentName:"li"},"  Return ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," if the session does not exist or has expired. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"extendLifeTime"),": Extend the lifetime of a session from its ID. The duration is the inactivity timeout."),Object(r.b)("p",{parentName:"li"},"  If the session does not exist, the method does not throw an error.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"clear"),": Clear all sessions.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"cleanUpExpiredSessions"),": Some session stores may need to run periodically background jobs to cleanup expired sessions. This method deletes all expired sessions."))))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),s=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||r;return n?s.a.createElement(m,i(i({ref:t},l),{},{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);