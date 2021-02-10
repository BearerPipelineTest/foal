(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(257)),s={title:"La Page d'Inscription"},a={unversionedId:"tutorials/multi-user-todo-list/7-the-signup-page",id:"tutorials/multi-user-todo-list/7-the-signup-page",isDocsHomePage:!1,title:"La Page d'Inscription",description:"La page d'inscription, qui est servie dans le contr\xf4leur principal de l'application, envoie une requ\xeate POST /signup lorsque le bouton Create an account est press\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/7-the-signup-page.md",slug:"/tutorials/multi-user-todo-list/7-the-signup-page",permalink:"/fr/docs/tutorials/multi-user-todo-list/7-the-signup-page",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/7-the-signup-page.md",version:"current",sidebar:"someSidebar",previous:{title:"Todos & Possession",permalink:"/fr/docs/tutorials/multi-user-todo-list/6-todos-and-ownership"},next:{title:"Tests de bout en bout & Authentication",permalink:"/fr/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication"}},u=[],c={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"La page d'inscription, qui est servie dans le contr\xf4leur principal de l'application, envoie une requ\xeate ",Object(i.b)("inlineCode",{parentName:"p"},"POST /signup")," lorsque le bouton ",Object(i.b)("inlineCode",{parentName:"p"},"Create an account")," est press\xe9."),Object(i.b)("p",null,"Cr\xe9ez un nouveau contr\xf4leur pour g\xe9rer cette route."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate controller signup --register\n")),Object(i.b)("p",null,"Ouvrez le nouveau fichier et remplacez son contenu."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { Context, HttpResponseRedirect, Post, Session, ValidateBody } from '@foal/core';\nimport { isCommon } from '@foal/password';\n\n// App\nimport { User } from '../entities';\n\nexport class SignupController {\n\n  @Post()\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async signup(ctx: Context<User, Session>) {\n    // Check that the password is not too common.\n    if (await isCommon(ctx.request.body.password)) {\n      ctx.session.set('error', 'Password too common.', { flash: true });\n      return new HttpResponseRedirect('/signup');\n    }\n\n    // Check that no user has already signed up with this email.\n    let user = await User.findOne({ email: ctx.request.body.email });\n    if (user) {\n      ctx.session.set('error', 'Email already taken.', { flash: true });\n      return new HttpResponseRedirect('/signup');\n    }\n\n    // Create the user.\n    user = new User();\n    user.email = ctx.request.body.email;\n    await user.setPassword(ctx.request.body.password);\n    await user.save();\n\n    // Log the user in.\n    ctx.session.setUser(user);\n\n    // Redirect the user to her/his to-do list.\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n")),Object(i.b)("p",null,"Vous pouvez maintenant cr\xe9er de nouveaux utilisateurs gr\xe2ce \xe0 la page d'inscription."))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(f,a(a({ref:t},c),{},{components:n})):o.a.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);