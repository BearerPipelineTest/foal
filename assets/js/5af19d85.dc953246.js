(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5205],{3905:function(t,e,o){"use strict";o.d(e,{Zo:function(){return c},kt:function(){return f}});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(o),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(m,a(a({ref:e},c),{},{components:o})):n.createElement(m,a({ref:e},c))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6542:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],l={title:"Introduction"},s={unversionedId:"tutorials/multi-user-todo-list/tuto-1-Introduction",id:"version-1.x/tutorials/multi-user-todo-list/tuto-1-Introduction",isDocsHomePage:!1,title:"Introduction",description:"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-1-Introduction.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-1-Introduction",permalink:"/docs/1.x/tutorials/multi-user-todo-list/tuto-1-Introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-1-Introduction.md",version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/docs/1.x/tutorials/simple-todo-list/tuto-7-unit-testing"},next:{title:"The User & Todo Models",permalink:"/docs/1.x/tutorials/multi-user-todo-list/tuto-2-the-user-and-todo-models"}},u=[],c={toc:u};function p(t){var e=t.components,l=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing."),(0,i.kt)("p",null,"For that, you are going to create a multi-user to-do list. It will extend the application created in the previous tutorial ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/tutorials/simple-todo-list/tuto-1-installation"},"Simple To-Do List")," that you must follow before going through this one."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The source code of the first tutorial is available ",(0,i.kt)("a",{parentName:"p",href:"https://foalts.org/simple-todo-list-source-code-v1.zip"},"here"),".")),(0,i.kt)("p",null,"The application will have three pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a sign up page where users can create a new account with an email and a password,"),(0,i.kt)("li",{parentName:"ul"},"a login page that expects an email and a password to sign in,"),(0,i.kt)("li",{parentName:"ul"},"and the todo-list page where the tasks are listed, created and deleted.")),(0,i.kt)("p",null,"Each user will have her/his own todos and will not be able to view, create or delete other people's todos."),(0,i.kt)("p",null,"The pages look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign up page",src:o(719).Z}),"\n",(0,i.kt)("img",{alt:"Login page",src:o(2325).Z}),"\n",(0,i.kt)("img",{alt:"To-do list page",src:o(8867).Z})),(0,i.kt)("p",null,"Let's get started!"))}p.isMDXComponent=!0},2325:function(t,e,o){"use strict";e.Z=o.p+"assets/images/signin-d9b7a51ae39f660381153f16f7735a7f.png"},719:function(t,e,o){"use strict";e.Z=o.p+"assets/images/signup-24e5a30a94173658dc445232caddae9b.png"},8867:function(t,e,o){"use strict";e.Z=o.p+"assets/images/todo-list-f4c43484fae484238862186d723f3934.png"}}]);