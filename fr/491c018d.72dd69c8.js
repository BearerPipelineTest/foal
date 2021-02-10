(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),c=(n(0),n(257)),a={title:"Scheduling Jobs"},s={unversionedId:"cookbook/scheduling-jobs",id:"version-1.x/cookbook/scheduling-jobs",isDocsHomePage:!1,title:"Scheduling Jobs",description:"You can schedule jobs using shell scripts and the node-schedule library.",source:"@site/versioned_docs/version-1.x/cookbook/scheduling-jobs.md",slug:"/cookbook/scheduling-jobs",permalink:"/fr/docs/1.x/cookbook/scheduling-jobs",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/scheduling-jobs.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Generate Tokens",permalink:"/fr/docs/1.x/cookbook/generate-tokens"},next:{title:"404 Page",permalink:"/fr/docs/1.x/cookbook/404-page"}},l=[{value:"Example",id:"example",children:[]},{value:"Background Jobs with pm2",id:"background-jobs-with-pm2",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can schedule jobs using ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/1.x/development-environment/create-and-run-scripts"}),"shell scripts")," and the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/node-schedule"}),"node-schedule")," library."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"scripts/fetch-metrics.ts")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export function main(args: any) {\n  // Do some stuff\n}\n\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"scripts/schedule-jobs.ts")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { scheduleJob } from 'node-schedule';\nimport { main as fetchMetrics } from './fetch-metrics';\n\nexport async function main(args: any) {\n  console.log('Scheduling the job...');\n\n  // Run the fetch-metrics script every day at 10:00 AM.\n  scheduleJob(\n    { hour: 10, minute: 0 },\n    () => fetchMetrics(args)\n  );\n\n  console.log('Job scheduled!');\n}\n\n")),Object(c.b)("p",null,"Schedule the job(s):"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build:scripts\nfoal run schedule-jobs arg1=value1\n")),Object(c.b)("h2",{id:"background-jobs-with-pm2"},"Background Jobs with pm2"),Object(c.b)("p",null,"While the above command works, it does not run the scheduler and the jobs in the background. To do this, you can use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://pm2.keymetrics.io/"}),"pm2"),", a popular process manager for Node.js."),Object(c.b)("p",null,"First you need to install ",Object(c.b)("em",{parentName:"p"},"locally")," the Foal CLI:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @foal/cli\n")),Object(c.b)("p",null,"Then you can run the scheduler like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"pm2 start ./node_modules/.bin/foal --name scheduler -- run schedule-jobs arg1=value1\n")),Object(c.b)("p",null,"If everything works fine, you should see your scheduler running with this command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"pm2 ls\n")),Object(c.b)("p",null,"To display the logs of the scheduler and the jobs, use this one:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"pm2 logs scheduler\n")),Object(c.b)("p",null,"Eventually, to stop the scheduler and the jobs, you can use this command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"pm2 delete scheduler\n")))}b.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=b(n),d=r,m=i["".concat(a,".").concat(d)]||i[d]||p[d]||c;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);