(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5044],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},270:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={title:"Utilizar Otro ORM o Generador de Consultas",sidebar_label:"Utilizar Otro ORM"},s={unversionedId:"databases/using-another-orm",id:"databases/using-another-orm",isDocsHomePage:!1,title:"Utilizar Otro ORM o Generador de Consultas",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/databases/using-another-orm.md",sourceDirName:"databases",slug:"/databases/using-another-orm",permalink:"/es/docs/databases/using-another-orm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/using-another-orm.md",version:"current",sidebar_label:"Utilizar Otro ORM",frontMatter:{title:"Utilizar Otro ORM o Generador de Consultas",sidebar_label:"Utilizar Otro ORM"},sidebar:"someSidebar",previous:{title:"MongoDB (noSQL)",permalink:"/es/docs/databases/mongodb"},next:{title:"Comenzar",permalink:"/es/docs/authentication-and-access-control/quick-start"}},p=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",children:[]},{value:"Functions to Be Added",id:"functions-to-be-added",children:[{value:"The <code>fetchUser</code> function",id:"the-fetchuser-function",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Prisma",id:"prisma",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."),(0,i.kt)("p",null,"To do so, you will have to remove TypeORM and all its utilities and implement some functions yourself like the authentication function ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUser"),"."),(0,i.kt)("h2",{id:"uninstall-typeorm"},"Uninstall TypeORM"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First uninstall the dependencies."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall typeorm @foal/typeorm\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then remove the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/entities"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove or replace the script ",(0,i.kt)("inlineCode",{parentName:"p"},"create-user")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/scripts"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the file ",(0,i.kt)("inlineCode",{parentName:"p"},"app.controller.ts"),", delete the connection creation call ",(0,i.kt)("inlineCode",{parentName:"p"},"createConnection"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, remove in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," the scripts to manage migrations."))),(0,i.kt)("h2",{id:"functions-to-be-added"},"Functions to Be Added"),(0,i.kt)("h3",{id:"the-fetchuser-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"fetchUser")," function"),(0,i.kt)("p",null,"If you wish to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," option of ",(0,i.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@UseSessions")," to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.user")," property, then you will need to implement your own ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUser")," function."),(0,i.kt)("p",null,"This utility returns a function that takes an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," as parameter which might be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," and returns a promise. The promise value must be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," is no user matches the given ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and the ",(0,i.kt)("em",{parentName:"p"},"user object")," otherwise."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FetchUser, ServiceManager } from '@foal/core';\n\nexport function fetchUser(userModel: any): FetchUser {\n  return async (id: number|string, services: ServiceManager) => {\n    if (typeof id === 'string') {\n      throw new Error('The user ID must be a number.');\n    }\n    const user = await userModel.findOne({ id });\n    if (user === null) {\n      return undefined;\n    }\n    return user;\n  };\n}\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"prisma"},"Prisma"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"This example uses an SQLite database."))),(0,i.kt)("h4",{id:"warning-on-configuration"},"Warning on Configuration"),(0,i.kt)("p",null,"Prisma uses the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv library")," under the hood which handles ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files and environment variables differently."),(0,i.kt)("p",null,"Therefore, when using Prisma, you can only use one single ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. Using other files such as ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," will lead to unexpected variable values."),(0,i.kt)("h4",{id:"basic-set-up"},"Basic Set Up"),(0,i.kt)("p",null,"Install the latest version of TypeScript (Prisma v2.21 requires at least v4.1)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript@latest\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"If you get compile-time errors referencing the file ",(0,i.kt)("inlineCode",{parentName:"em"},"node_modules/.prisma/client/index.d.ts"),", it is likely that your version of TypeScript is too old."))),(0,i.kt)("p",null,"Install the Prisma dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install prisma --save-dev\nnpm install @prisma/client\n")),(0,i.kt)("p",null,"Init the project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma init\n")),(0,i.kt)("p",null,"Set up the database configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n')),(0,i.kt)("p",null,"Specify the database URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'DATABASE_URL="file:./db.sqlite3"\n')),(0,i.kt)("p",null,"Generate and run the migration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name init\n")),(0,i.kt)("p",null,"Generate the TypeScript interfaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma generate\n")),(0,i.kt)("p",null,"Update your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," to create the prisma connection and pass it to the service manager."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"src/index.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\n// App\nimport { AppController } from './app/app.controller';\n\nconst prisma = new PrismaClient();\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  serviceManager.set(PrismaClient, prisma);\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); })\n  .finally(() => prisma.$disconnect());\n")),(0,i.kt)("p",null,"Finally, inject the prisma client into your controllers and start using it."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"app.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK, IAppController } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport class AppController implements IAppController {\n  @dependency\n  prisma: PrismaClient;\n\n  @Get('/users')\n  async getAllUsers() {\n    const allUsers = await this.prisma.user.findMany();\n    return new HttpResponseOK(allUsers);\n  }\n}\n")),(0,i.kt)("h4",{id:"the-fetchuser-function-1"},"The ",(0,i.kt)("inlineCode",{parentName:"h4"},"fetchUser")," function"),(0,i.kt)("p",null,"In case your application uses the hooks ",(0,i.kt)("inlineCode",{parentName:"p"},"@UseSessions")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," and you want to assign a value to ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.user"),", then you will need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUser")," function."),(0,i.kt)("p",null,"First, make sure your have a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," model defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.prisma"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma"},"// ...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n")),(0,i.kt)("p",null,"If you haven't already done so, generate and run the migration and generate the TypeScript interfaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name add-user\nnpx prisma generate\n")),(0,i.kt)("p",null,"Then create the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchPrismaUser")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport async function fetchPrismaUser(id: number|string, services: ServiceManager) {\n  if (typeof id === 'string') {\n    throw new Error('The user ID must be a number.');\n  }\n\n  const user = await services.get(PrismaClient).user.findFirst({\n    where: { id }\n  });\n\n  if (user === null) {\n    return undefined;\n  }\n  \n  return user;\n}\n")),(0,i.kt)("p",null,"You're now ready to use it in your hooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({ user: fetchPrismaUser })\n// OR\n@UseSessions({ user: fetchPrismaUser })\n")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"When using another ORM than TypeORM some features, are not available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("em",{parentName:"li"},"Groups & Permissions")," system,"),(0,i.kt)("li",{parentName:"ul"},"and the ",(0,i.kt)("inlineCode",{parentName:"li"},"foal g rest-api")," command.")))}c.isMDXComponent=!0}}]);