(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9754],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6353:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],o={title:"Groups & Permissions"},p={unversionedId:"authentication-and-access-control/groups-and-permissions",id:"version-1.x/authentication-and-access-control/groups-and-permissions",isDocsHomePage:!1,title:"Groups & Permissions",description:"In advanced applications, access control can be managed through permissions and groups.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/groups-and-permissions.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/groups-and-permissions",permalink:"/docs/1.x/authentication-and-access-control/groups-and-permissions",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/groups-and-permissions.md",version:"1.x",frontMatter:{title:"Groups & Permissions"},sidebar:"someSidebar",previous:{title:"Administrators & Roles",permalink:"/docs/1.x/authentication-and-access-control/administrators-and-roles"},next:{title:"Validation & Sanitization",permalink:"/docs/1.x/validation-and-sanitization"}},l=[{value:"Permissions",id:"permissions",children:[{value:"The <code>Permission</code> Entity",id:"the-permission-entity",children:[]},{value:"Creating Permissions Programmatically",id:"creating-permissions-programmatically",children:[]},{value:"Creating Permissions with a Shell Script (CLI)",id:"creating-permissions-with-a-shell-script-cli",children:[]}]},{value:"Groups",id:"groups",children:[{value:"The Group Entity",id:"the-group-entity",children:[]},{value:"Creating Groups Programmatically",id:"creating-groups-programmatically",children:[]},{value:"Creating Groups with a Shell Script (CLI)",id:"creating-groups-with-a-shell-script-cli",children:[]}]},{value:"Users",id:"users",children:[{value:"The <code>UserWithPermissions</code> Entity",id:"the-userwithpermissions-entity",children:[]},{value:"The <code>hasPerm</code> Method",id:"the-hasperm-method",children:[]},{value:"Creating Users with Groups and Permissions with a Shell Script (CLI)",id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli",children:[]}]},{value:"Fetching a User with their Permissions",id:"fetching-a-user-with-their-permissions",children:[]},{value:"The PermissionRequired Hook",id:"the-permissionrequired-hook",children:[]},{value:"BaseEntity Inheritance",id:"baseentity-inheritance",children:[]},{value:"Get All Users with a Given Permission",id:"get-all-users-with-a-given-permission",children:[]}],m={toc:l};function c(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In advanced applications, access control can be managed through permissions and groups."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"permission")," gives a user the right to perform a given action (such as accessing a route)."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"group")," brings together a set of users (a user can belong to more than one group)."),(0,i.kt)("p",null,"Permissions can be attached to a user or a group. Attaching a permission to a group is equivalent to attaching the permission to each of its users."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Examples of ",(0,i.kt)("em",{parentName:"p"},"groups"),' are the "Free", "Pro" and "Enterprise" plans of a SaaS application. Depending of the price paid by the customers, they have access to certain features whose access are managed by ',(0,i.kt)("em",{parentName:"p"},"permissions"),".")),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"the-permission-entity"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Permission")," Entity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Database Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary auto generated key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"codeName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique, Length: 100")))),(0,i.kt)("h3",{id:"creating-permissions-programmatically"},"Creating Permissions Programmatically"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getManager, getRepository } from 'typeorm';\n\nimport { Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'secret-perm';\n  perm.name = 'Permission to access the secret';\n  await getManager().save(perm);\n  // OR\n  await getManager().save(Permission, {\n    codeName: 'secret-perm',\n    name: 'Permission to access the secret'\n  });\n  // OR\n  await getRepository(Permission).save({\n    codeName: 'secret-perm',\n    name: 'Permission to access the secret'\n  });\n}\n")),(0,i.kt)("h3",{id:"creating-permissions-with-a-shell-script-cli"},"Creating Permissions with a Shell Script (CLI)"),(0,i.kt)("p",null,"Create a new script with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foal generate script create-perm\n")),(0,i.kt)("p",null,"Replace the content of the new created file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/scripts/create-perm.ts")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Permission } from '@foal/typeorm';\nimport { createConnection, getConnection, getManager } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string' },\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string }) {\n  const permission = new Permission();\n  permission.codeName = args.codeName;\n  permission.name = args.name;\n\n  await createConnection();\n\n  try {\n    console.log(\n      await getManager().save(permission)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n")),(0,i.kt)("p",null,"Then you can create a permission through the command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build:scripts\nfoal run create-perm name="Permission to access the secret" codeName="access-secret"\n')),(0,i.kt)("h2",{id:"groups"},"Groups"),(0,i.kt)("p",null,"Groups are used to categorize users. A user can belong to several groups and a group can have several users."),(0,i.kt)("p",null,"A group can have permissions. They then apply to all its users."),(0,i.kt)("h3",{id:"the-group-entity"},"The Group Entity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Database Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary auto generated key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Length: 80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"codeName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique, Length: 100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permissions"),(0,i.kt)("td",{parentName:"tr",align:null},"Permission[]"),(0,i.kt)("td",{parentName:"tr",align:null},"A many-to-many relation with the table permission")))),(0,i.kt)("h3",{id:"creating-groups-programmatically"},"Creating Groups Programmatically"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getManager, getRepository } from 'typeorm';\n\nimport { Group, Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'delete-users';\n  perm.name = 'Permission to delete users';\n  await getManager().save(perm);\n\n  const group = new Group();\n  group.codeName = 'admin';\n  group.name = 'Administrators';\n  group.permissions = [ perm ];\n  await getManager().save(group);\n  // OR\n  await getManager().save(Group, {\n    codeName: 'admin',\n    name: 'Administrators',\n    permissions: [ perm ],\n  });\n  // OR\n  await getRepository(Group).save({\n    codeName: 'admin',\n    name: 'Administrators',\n    permissions: [ perm ],\n  });\n}\n")),(0,i.kt)("h3",{id:"creating-groups-with-a-shell-script-cli"},"Creating Groups with a Shell Script (CLI)"),(0,i.kt)("p",null,"Create a new script with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foal generate script create-group\n")),(0,i.kt)("p",null,"Replace the content of the new created file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/scripts/create-group.ts")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Group, Permission } from '@foal/typeorm';\nimport { createConnection, getManager, getRepository } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string', maxLength: 80 },\n    permissions: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] }\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string, permissions: string[] }) {\n  const group = new Group();\n  group.permissions = [];\n  group.codeName = args.codeName;\n  group.name = args.name;\n\n  const connection = await createConnection();\n  try {\n    for (const codeName of args.permissions) {\n      const permission = await getRepository(Permission).findOne({ codeName });\n      if (!permission) {\n        console.log(\n          `No permission with the code name \"${codeName}\" was found.`\n        );\n        return;\n      }\n      group.permissions.push(permission);\n    }\n\n    console.log(\n      await getManager().save(group)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),(0,i.kt)("p",null,"Then you can create a group through the command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build:scripts\nfoal run create-perm name="Permission to delete users" codeName="delete-users"\nfoal run create-group name="Administrators" codeName="admin" permissions="[ \\"delete-users\\" ]"\n')),(0,i.kt)("h2",{id:"users"},"Users"),(0,i.kt)("h3",{id:"the-userwithpermissions-entity"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"UserWithPermissions")," Entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UserWithPermissions } from '@foal/typeorm';\nimport { Entity } from 'typeorm';\n\n@Entity()\nexport class User extends UserWithPermissions {\n\n}\n\n// You MUST export Group and Permission so that TypeORM can generate migrations.\nexport { Group, Permission } from '@foal/typeorm';\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," is an abstract class that has useful features to handle access control through permissions and groups. You must extend your ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entity from this class to use permissions and groups."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Database Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary auto generated key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"groups"),(0,i.kt)("td",{parentName:"tr",align:null},"Group[]"),(0,i.kt)("td",{parentName:"tr",align:null},"A many-to-many relation with the table group")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userPermissions"),(0,i.kt)("td",{parentName:"tr",align:null},"Permission[]"),(0,i.kt)("td",{parentName:"tr",align:null},"A many-to-many relation with the table permission")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Relations between Users, Groups and Permissions",src:n(3260).Z})),(0,i.kt)("h3",{id:"the-hasperm-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"hasPerm")," Method"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hasPerm(permissionCodeName: string)")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," class returns true if one of these conditions is true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user has the required permission."),(0,i.kt)("li",{parentName:"ul"},"The user belongs to a group that has the required permission.")),(0,i.kt)("h3",{id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli"},"Creating Users with Groups and Permissions with a Shell Script (CLI)"),(0,i.kt)("p",null,"Uncomment the code in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts"),"."),(0,i.kt)("p",null,"Then you can create a user with their permissions and groups through the command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build:scripts\nfoal run create-user userPermissions="[ \\"my-first-perm\\" ]" groups="[ \\"my-group\\" ]"\n')),(0,i.kt)("h2",{id:"fetching-a-user-with-their-permissions"},"Fetching a User with their Permissions"),(0,i.kt)("p",null,"If you want the ",(0,i.kt)("inlineCode",{parentName:"p"},"hasPerm")," method to work on the context ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," property, you must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUserWithPermissions")," function in the authentication hook."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example with JSON Web Tokens")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUserWithPermissions } from '@foal/typeorm';\n\n@JWTRequired({\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example with Sessions Tokens")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, TokenRequired } from '@foal/core';\nimport { fetchUserWithPermissions, TypeORMStore } from '@foal/typeorm';\n\n@TokenRequired({\n  store: TypeORMStore,\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,i.kt)("h2",{id:"the-permissionrequired-hook"},"The PermissionRequired Hook"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This requires the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUserWithPermissions"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@PermissionRequired('perm')\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Context"),(0,i.kt)("th",{parentName:"tr",align:null},"Response"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ctx.user")," is undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"401 - UNAUTHORIZED")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ctx.user.hasPerm('perm')")," is false"),(0,i.kt)("td",{parentName:"tr",align:null},"403 - FORBIDDEN")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@PermissionRequired('perm', { redirect: '/login' })\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Context"),(0,i.kt)("th",{parentName:"tr",align:null},"Response"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ctx.user")," is undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"Redirects to ",(0,i.kt)("inlineCode",{parentName:"td"},"/login")," (302 - FOUND)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ctx.user.hasPerm('perm')")," is false"),(0,i.kt)("td",{parentName:"tr",align:null},"403 - FORBIDDEN")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { fetchUserWithPermissions, PermissionRequired } from '@foal/typeorm';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ user: fetchUserWithPermissions(User) })\nexport class ProductController {\n  @Get('/products')\n  @PermissionRequired('read-products')\n  readProduct(ctx: Context) {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,i.kt)("h2",{id:"baseentity-inheritance"},"BaseEntity Inheritance"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available in Foal v1.8.0 onwards.")),(0,i.kt)("p",null,"The classes ",(0,i.kt)("inlineCode",{parentName:"p"},"Permission"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," all extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseEntity")," class so you can access its static and instance methods."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const perm = await Permission.findOneOrFail({ codeName: 'perm1' });\nperm.name = 'Permission1';\nawait perm.save();\n")),(0,i.kt)("h2",{id:"get-all-users-with-a-given-permission"},"Get All Users with a Given Permission"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available in Foal v1.8.0 onwards.")),(0,i.kt)("p",null,"The class ",(0,i.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," provides a static method ",(0,i.kt)("inlineCode",{parentName:"p"},"withPerm")," to get all users with a given permission. It returns all users that have this permission on their own or through the groups they belong to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nclass User extends UserWithPermissions {}\n  \nconst users = await User.withPerm<User>('perm1');\n")))}c.isMDXComponent=!0},3260:function(e,t,n){"use strict";t.Z=n.p+"assets/images/permissions-groups-and-users-ec7a479e022323aca7ea069ba9622d31.png"}}]);