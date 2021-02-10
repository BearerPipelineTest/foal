(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(257)),s={title:"Serializing & Deserializing"},i={unversionedId:"serializing-and-deserializing",id:"version-1.x/serializing-and-deserializing",isDocsHomePage:!1,title:"Serializing & Deserializing",description:"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the class-transformer library.",source:"@site/versioned_docs/version-1.x/serializing-and-deserializing.md",slug:"/serializing-and-deserializing",permalink:"/fr/docs/1.x/serializing-and-deserializing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/serializing-and-deserializing.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Validation & Sanitization",permalink:"/fr/docs/1.x/validation-and-sanitization"},next:{title:"REST API",permalink:"/fr/docs/1.x/api-section/rest-blueprints"}},l=[{value:"The <code>class-transformer</code> library",id:"the-class-transformer-library",children:[]},{value:"Usage with a Hook",id:"usage-with-a-hook",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," library."),Object(o.b)("p",null,"Serialization is particularly interesting if you need to transform HTTP request bodies into model instances or, inversely, convert model instances into plain objects to be returned in HTTP responses."),Object(o.b)("h2",{id:"the-class-transformer-library"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"class-transformer")," library"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install class-transformer\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," has two main functions to transform objects: ",Object(o.b)("inlineCode",{parentName:"p"},"plainToClass")," and ",Object(o.b)("inlineCode",{parentName:"p"},"classToPlain"),". Some examples of their use are given below."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Other functions also exist and can be found in the README of the ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/typestack/class-transformer"}),"library repository"),"."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"plainToClass")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { plainToClass } from 'class-transformer';\n\nclass User {\n  firstName: string;\n  lastName: string;\n\n  getFullName() {\n    return firstName +  ' ' + lastName;\n  }\n}\n\nconst user = {\n  firstName: 'John',\n  lastName: 'Doe'\n}\n\nconst user2 = plainToClass(User, user);\n// user2 is an instance of User\nconsole.log(user2.getFullName());\n// John Doe\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classToPlain")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { classToPlain, Exclude } from 'class-transformer';\n \nexport class User {\n  id: number;\n  email: string;\n  \n  @Exclude()\n  password: string;\n}\n\nconst user = new User();\nuser.id = 1;\nuser.email = 'jane.doe@foalts.org';\nuser.password = 'xxx';\n\nconst serializedUser = classToPlain(user);\nconsole.log(serializedUser instanceof User);\n// false\nconsole.log(serializedUser);\n// {\n//   id: 1,\n//   email: 'jane.doe@foalts.org'\n// }\n")),Object(o.b)("p",null,"Additional options can be provided to the ",Object(o.b)("inlineCode",{parentName:"p"},"classToPlain")," or ",Object(o.b)("inlineCode",{parentName:"p"},"plainToClass")," functions. ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," also offers other interesting features (nested objects, property renaming, etc) that can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer#readme"}),"here"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Caution: These functions do not validate data.")," They do not guarantee that all declared properties are assigned and that no additional properties are assigned to the object. They behave more or less like a call to ",Object(o.b)("inlineCode",{parentName:"p"},"Object.assign"),". Please refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/fr/docs/1.x/validation-and-sanitization"}),"validation page")," if you need to validate data.")),Object(o.b)("h2",{id:"usage-with-a-hook"},"Usage with a Hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install class-transformer @foal/typestack\n")),Object(o.b)("p",null,"If you want to use ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," within a hook to transform request bodies, you can install the package ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",Object(o.b)("inlineCode",{parentName:"p"},"@UnserializeBody")," hook that transforms the request body into an instance of a given class."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"product.entity.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\n// BaseEntity adds the method \"save\" to the class.\nexport class Product extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, HttpResponseCreated, Post, ValidateBody } from '@foal/core';\nimport { UnserializeBody } from '@foal/typestack';\nimport { Product } from '../entities';\n\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  @UnserializeBody(Product)\n  async createProduct(ctx: Context) {\n    // ctx.request.body is an instance of Product\n    const product = ctx.request.body;\n    await product.save();\n    return new HttpResponseCreated();\n  }\n\n}\n")),Object(o.b)("p",null,"The hook takes also an optional parameter to specify the options of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," library."))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);