(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(257)),a={title:"Visual Studio Code",sidebar_label:"VSCode"},c={unversionedId:"development-environment/vscode",id:"version-1.x/development-environment/vscode",isDocsHomePage:!1,title:"Visual Studio Code",description:"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.",source:"@site/versioned_docs/version-1.x/development-environment/vscode.md",slug:"/development-environment/vscode",permalink:"/fr/docs/1.x/development-environment/vscode",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/vscode.md",version:"1.x",sidebar_label:"VSCode",sidebar:"someSidebar",previous:{title:"Linting & Code Style",permalink:"/fr/docs/1.x/development-environment/linting-and-code-style"},next:{title:"Introduction",permalink:"/fr/docs/1.x/testing/introduction"}},l=[{value:"Configuring the linting",id:"configuring-the-linting",children:[]},{value:"Debugging with VS Code",id:"debugging-with-vs-code",children:[]}],d={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.")),Object(i.b)("p",{parentName:"blockquote"},"Source:  ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs"}),"https://code.visualstudio.com/docs"))),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VS Code")," has become ",Object(i.b)("strong",{parentName:"p"},"one of the most popular code editors in the JavaScript ecosystem"),". It offers useful features (auto-completion, debugging tools, etc.) that work very well with TypeScript and Node.js. That's why it has a dedicated page in the documentation."),Object(i.b)("p",null,"But using VS Code is not mandatory to develop a FoalTS app. So feel free to use another code editor if you prefer."),Object(i.b)("h2",{id:"configuring-the-linting"},"Configuring the linting"),Object(i.b)("p",null,"In order to directly print the ESLint errors in VS Code and auto-fix the problems on save you need to install the ",Object(i.b)("inlineCode",{parentName:"p"},"ESLint")," extension."),Object(i.b)("p",null,"It can be installed by launching ",Object(i.b)("em",{parentName:"p"},"VS Code Quick Open")," (",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(i.b)("inlineCode",{parentName:"p"},"P")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Cmd"),"+",Object(i.b)("inlineCode",{parentName:"p"},"P"),"), pasting the following command, and pressing enter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"ext install dbaeumer.vscode-eslint\n")),Object(i.b)("p",null,"Then, you will need to configure it for TypeScript and make it fix the errors on save (when it is possible)."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("em",{parentName:"p"},"Command Palette")," (",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(i.b)("inlineCode",{parentName:"p"},"Shift"),"+",Object(i.b)("inlineCode",{parentName:"p"},"P")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Cmd"),"+",Object(i.b)("inlineCode",{parentName:"p"},"Shift"),"+",Object(i.b)("inlineCode",{parentName:"p"},"P"),") and type ",Object(i.b)("inlineCode",{parentName:"p"},"Open Settings (JSON)"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Open VSCode Settings",src:n(349).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Then extend the settings to add the options below."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "eslint.validate": [\n      "typescript"\n  ],\n  "editor.codeActionsOnSave": {\n      "source.fixAll.eslint": true\n  }\n}\n')))),Object(i.b)("h2",{id:"debugging-with-vs-code"},"Debugging with VS Code"),Object(i.b)("p",null,"Run the following command to create the suitable debug config files."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"foal generate vscode-config\n")),Object(i.b)("p",null,"Now you can add a breakpoint in your code and start the app in debug mode."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Debugging demo",src:n(350).default})),Object(i.b)("p",null,"The generated files also include configurations to run your unit and end-to-end tests."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Debug configurations",src:n(351).default})))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=o,m=s["".concat(a,".").concat(b)]||s[b]||u[b]||i;return n?r.a.createElement(m,c(c({ref:t},d),{},{components:n})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},349:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/open-vscode-settings-f52f059aa75d1a09e5f2f3a68577ef74.png"},350:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debugger-68784711b19481be8e7423ebde8a9cee.gif"},351:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debug-configurations-c5086b075b6c83ac55c88f5e8851cbfe.png"}}]);