(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9662],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6624:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={title:"Firebase"},l={unversionedId:"cloud/firebase",id:"version-1.x/cloud/firebase",isDocsHomePage:!1,title:"Firebase",description:"This document explains how to create and deploy an application with Firebase. It assumes that you do not use TypeORM since Firebase does not provide SQL databases.",source:"@site/versioned_docs/version-1.x/cloud/firebase.md",sourceDirName:"cloud",slug:"/cloud/firebase",permalink:"/fr/docs/1.x/cloud/firebase",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cloud/firebase.md",version:"1.x",frontMatter:{title:"Firebase"},sidebar:"someSidebar",previous:{title:"AWS Beanstalk",permalink:"/fr/docs/1.x/cloud/aws-beanstalk"},next:{title:"HTTP Headers Protection",permalink:"/fr/docs/1.x/security/http-headers-protection"}},s=[{value:"Set Up the Firebase CLI",id:"set-up-the-firebase-cli",children:[]},{value:"Create the Firebase Project",id:"create-the-firebase-project",children:[]},{value:"Create the Foal Application",id:"create-the-foal-application",children:[]},{value:"Configure the Project to Make it Work with Firebase",id:"configure-the-project-to-make-it-work-with-firebase",children:[]},{value:"Deploy the Application",id:"deploy-the-application",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document explains how to create and deploy an application with Firebase. It assumes that you do not use TypeORM since Firebase does not provide SQL databases."),(0,o.kt)("h2",{id:"set-up-the-firebase-cli"},"Set Up the Firebase CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g firebase-tools\nfirebase login\n")),(0,o.kt)("h2",{id:"create-the-firebase-project"},"Create the Firebase Project"),(0,o.kt)("p",null,"First create an empty project on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase platform"),"."),(0,o.kt)("p",null,"Then create your project locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-app\ncd my-app\nfirebase init\n")),(0,o.kt)("p",null,"The CLI displays some prompts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hosting")," option. You may select other options as well but do not select ",(0,o.kt)("inlineCode",{parentName:"p"},"Functions")," (otherwise you will have to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions/")," directory just after).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The default static path must be changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"functions/public"),"."))),(0,o.kt)("h2",{id:"create-the-foal-application"},"Create the Foal Application"),(0,o.kt)("p",null,"Create the Foal application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foal createapp functions\ncd functions\n")),(0,o.kt)("p",null,"You can run locally your application using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run develop"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run develop")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase serve")," has the advantage to restart the development server when a file is changed.")),(0,o.kt)("h2",{id:"configure-the-project-to-make-it-work-with-firebase"},"Configure the Project to Make it Work with Firebase"),(0,o.kt)("p",null,"Install the dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install firebase-functions firebase-admin\n")),(0,o.kt)("p",null,"Update the file ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"functions/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "main": "build/index.firebase.js",\n  "engines": {\n    "node": "8"\n  }\n  ...\n}\n')),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.firebase.ts")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"functions/src/")," and export the express application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'source-map-support/register';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as functions from 'firebase-functions';\n\n// App\nimport { AppController } from './app/app.controller';\n\nexport const app = functions.https.onRequest(createApp(AppController));\n\n")),(0,o.kt)("p",null,"Add the file to ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.app.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/app/**/*.ts",\n    "src/index.firebase.ts",\n    "src/index.ts"\n  ],\n  "exclude": [\n    "src/app/**/*.spec.ts"\n  ]\n}\n')),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.json")," file to specify that the server should use the previously exported application. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hosting": {\n    "public": "functions/public",\n    "ignore": [\n      "firebase.json",\n      "**/.*",\n      "**/node_modules/**"\n    ],\n    "rewrites": [ {\n      "source": "**",\n      "function": "app"\n    } ]\n  }\n}\n\n')),(0,o.kt)("h2",{id:"deploy-the-application"},"Deploy the Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:app\nfirebase deploy\n")))}u.isMDXComponent=!0}}]);