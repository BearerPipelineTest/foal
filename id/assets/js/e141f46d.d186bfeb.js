(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6141],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<s;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4186:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(2122),r=o(9756),s=(o(7294),o(3905)),i=["components"],a={title:"Todos & Ownership"},l={unversionedId:"tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",id:"version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",isDocsHomePage:!1,title:"Todos & Ownership",description:"Currently the API returns everyone's todos to each user. This is not the expected behavior. We would like that each user has access to only his or her tasks.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership.md",version:"1.x",frontMatter:{title:"Todos & Ownership"},sidebar:"someSidebar",previous:{title:"Auth Controllers and Hooks",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks"},next:{title:"The Sign Up Page",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-7-the-signup-page"}},u=[],p={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Currently the API returns everyone's todos to each user. This is not the expected behavior. We would like that each user has access to only his or her tasks."),(0,s.kt)("p",null,"Go back to the ",(0,s.kt)("inlineCode",{parentName:"p"},"ApiController")," and update the ",(0,s.kt)("inlineCode",{parentName:"p"},"getTodos")," route."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get('/todos')\n  async getTodos(ctx: Context) {\n    const todos = await getRepository(Todo).find({ owner: ctx.user });\n    return new HttpResponseOK(todos);\n  }\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Context")," object contains four properties:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"the express ",(0,s.kt)("a",{parentName:"li",href:"https://expressjs.com/en/4x/api.html#req"},"request object"),","),(0,s.kt)("li",{parentName:"ul"},"an empty object called ",(0,s.kt)("inlineCode",{parentName:"li"},"state")," which can be used to share data between hooks, "),(0,s.kt)("li",{parentName:"ul"},"a ",(0,s.kt)("inlineCode",{parentName:"li"},"session")," object,"),(0,s.kt)("li",{parentName:"ul"},"and the ",(0,s.kt)("inlineCode",{parentName:"li"},"user")," object that is defined if a user logged in."))),(0,s.kt)("p",null,"Refresh the todo-list page. You should only see the todos of the user with whom you logged in."),(0,s.kt)("p",null,"Yet, if you try to create a new to-do, it will disappear upon page refresh. This is perfectly normal since we do not specify its owner upon creation."),(0,s.kt)("p",null,"As for the delete feature, you also need to restrict its access. Users should only be able to delete their todos."),(0,s.kt)("p",null,"Update the api controller."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Post('/todos')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      text: { type: 'string' }\n    },\n    required: [ 'text' ],\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n    // Make the current user the owner of the todo.\n    todo.owner = ctx.user;\n\n    await getRepository(Todo).save(todo);\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  @ValidatePathParam('id', { type: 'number' })\n  async deleteTodo(ctx: Context) {\n    const todo = await getRepository(Todo).findOne({\n      id: +ctx.request.params.id,\n      // Do not return the todo if it does not belong to the current user.\n      owner: ctx.user\n    });\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await getRepository(Todo).remove(todo);\n    return new HttpResponseNoContent();\n  }\n")),(0,s.kt)("p",null,"The application is now working properly."))}d.isMDXComponent=!0}}]);