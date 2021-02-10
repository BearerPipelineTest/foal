(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(257)),l={title:"Code Generation"},c={unversionedId:"development-environment/code-generation",id:"version-1.x/development-environment/code-generation",isDocsHomePage:!1,title:"Code Generation",description:"Create a project",source:"@site/versioned_docs/version-1.x/development-environment/code-generation.md",slug:"/development-environment/code-generation",permalink:"/fr/docs/1.x/development-environment/code-generation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/code-generation.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Create & Run Scripts",permalink:"/fr/docs/1.x/development-environment/create-and-run-scripts"},next:{title:"Linting & Code Style",permalink:"/fr/docs/1.x/development-environment/linting-and-code-style"}},i=[{value:"Create a project",id:"create-a-project",children:[]},{value:"Create a controller",id:"create-a-controller",children:[{value:"The <code>--register</code> flag",id:"the---register-flag",children:[]}]},{value:"Create an entity (simple model)",id:"create-an-entity-simple-model",children:[]},{value:"Create a model (only for Mongoose)",id:"create-a-model-only-for-mongoose",children:[]},{value:"Create REST API",id:"create-rest-api",children:[]},{value:"Create a hook",id:"create-a-hook",children:[]},{value:"Create a script",id:"create-a-script",children:[]},{value:"Create a sub-app",id:"create-a-sub-app",children:[]},{value:"Create a service",id:"create-a-service",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-project"},"Create a project"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal createapp my-app\n")),Object(o.b)("p",null,"Create a new directory with all the required files to get started."),Object(o.b)("p",null,"If you specify the flag ",Object(o.b)("inlineCode",{parentName:"p"},"--mongodb"),", the new project will use ",Object(o.b)("inlineCode",{parentName:"p"},"mongoose")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/mongoose")," in place of ",Object(o.b)("inlineCode",{parentName:"p"},"typeorm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/typeorm"),". You can find more information ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/databases/using-another-orm"}),"here"),"."),Object(o.b)("p",null,"If you specify the flag ",Object(o.b)("inlineCode",{parentName:"p"},"--yaml"),", the new project will use YAML format for its configuration files. You can find more information ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/deployment-and-environments/configuration"}),"here"),"."),Object(o.b)("h2",{id:"create-a-controller"},"Create a controller"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller <name>\n")),Object(o.b)("p",null,"Create a new controller in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/controllers"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./controllers")," or in the current directory depending on which folders are found."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller auth\nfoal g controller api/product\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  '- controllers/\n   |- api/\n   | |- product.controller.ts\n   | '- index.ts\n   |- auth.controller.ts\n   '- index.ts\n")),Object(o.b)("h3",{id:"the---register-flag"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"--register")," flag"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller <name> --register\n")),Object(o.b)("p",null,"If you wish to automatically create a new route attached to this controller, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--register")," flag to do so."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g controller api --register\nfoal g controller api/product --register\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | '- index.ts\n  | |- api.controller.ts\n  | '- index.ts\n  '- app.controller.ts\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class ApiController {\n  subControllers = [\n    controller('/product', ProductController)\n  ]\n}\n")),Object(o.b)("h2",{id:"create-an-entity-simple-model"},"Create an entity (simple model)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g entity <name>\n")),Object(o.b)("p",null,"Create a new entity in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/entities"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./entities")," or in the current directory depending on which folders are found."),Object(o.b)("h2",{id:"create-a-model-only-for-mongoose"},"Create a model (only for Mongoose)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g model <name>\n")),Object(o.b)("p",null,"Create a new model in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/models"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./models")," or in the current directory depending on which folders are found."),Object(o.b)("h2",{id:"create-rest-api"},"Create REST API"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g rest-api <name>\n")),Object(o.b)("p",null,"Create a new controller and a new entity to build a basic REST API. Depending on which directories are found, they will be generated in ",Object(o.b)("inlineCode",{parentName:"p"},"src/app/{entities}|{controllers}/"),", ",Object(o.b)("inlineCode",{parentName:"p"},"{entities}|{controllers}/")," or in the current directory."),Object(o.b)("p",null,"If you are in the root directory and you want to automatically register the controller within the app controller you can add the ",Object(o.b)("inlineCode",{parentName:"p"},"--register")," flag."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g rest-api <name> --register\n")),Object(o.b)("p",null,"See the page ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/api-section/rest-blueprints"}),"REST Blueprints")," for more details."),Object(o.b)("h2",{id:"create-a-hook"},"Create a hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g hook <name>\n")),Object(o.b)("p",null,"Create a new hook in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/hooks"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./hooks")," or in the current directory depending on which folders are found."),Object(o.b)("h2",{id:"create-a-script"},"Create a script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g script <name>\n")),Object(o.b)("p",null,"Create a new shell script in ",Object(o.b)("inlineCode",{parentName:"p"},"src/scripts")," regardless of where you run the command."),Object(o.b)("h2",{id:"create-a-sub-app"},"Create a sub-app"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g sub-app <name>\n")),Object(o.b)("p",null,"Create a new sub-app with all its files in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/sub-apps"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./sub-apps")," or in the current directory depending on which folders are found."),Object(o.b)("h2",{id:"create-a-service"},"Create a service"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g service <name>\n")),Object(o.b)("p",null,"Create a new service in ",Object(o.b)("inlineCode",{parentName:"p"},"./src/app/services"),", in ",Object(o.b)("inlineCode",{parentName:"p"},"./services")," or in the current directory depending on which folders are found."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal g service auth\nfoal g service apis/github\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src/\n '- app/\n  '- services/\n   |- apis/\n   | '- github.service.ts\n   | '- index.ts\n   |- auth.service.ts\n   '- index.ts\n")))}b.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);