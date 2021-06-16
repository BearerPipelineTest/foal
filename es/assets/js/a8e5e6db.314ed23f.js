(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7965],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4780:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={title:"Templates - Server-Side Rendering",sidebar_label:"Templates (SSR)"},p={unversionedId:"utilities/templating",id:"version-1.x/utilities/templating",isDocsHomePage:!1,title:"Templates - Server-Side Rendering",description:"Regular Web Applications rely on templates to dynamically generate HTML pages on the server. These templates are text files that contain static content as well as a special syntax describing how the data should be inserted dynamically. During an HTTP request, the application loads and renders the template using the given contextual data and sends back the page to the client.",source:"@site/versioned_docs/version-1.x/utilities/templating.md",sourceDirName:"utilities",slug:"/utilities/templating",permalink:"/es/docs/1.x/utilities/templating",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/utilities/templating.md",version:"1.x",sidebar_label:"Templates (SSR)",frontMatter:{title:"Templates - Server-Side Rendering",sidebar_label:"Templates (SSR)"},sidebar:"someSidebar",previous:{title:"XSS Protection",permalink:"/es/docs/1.x/security/xss-protection"},next:{title:"Logging & Debugging",permalink:"/es/docs/1.x/utilities/logging-and-debugging"}},s=[{value:"Rendering Templates",id:"rendering-templates",children:[]},{value:"Using Another Template Engine",id:"using-another-template-engine",children:[]},{value:"Templates Location",id:"templates-location",children:[]},{value:"The Legacy Package <code>@foal/ejs</code>",id:"the-legacy-package-foalejs",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Regular Web Applications rely on ",(0,l.kt)("em",{parentName:"p"},"templates")," to dynamically generate HTML pages on the server. These templates are text files that contain static content as well as a special syntax describing how the data should be inserted dynamically. During an HTTP request, the application loads and renders the template using the given contextual data and sends back the page to the client."),(0,l.kt)("p",null,"This technique is known as ",(0,l.kt)("em",{parentName:"p"},"Server-Side Rendering (or SSR)"),"."),(0,l.kt)("p",null,"Here is an example of what a template might look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{% title %}</title>\n</head>\n<body>\n  {% for user in users %}\n    * {{ user.name }}\n  {% else %}\n      No users have been found.\n  {% endfor %}\n</body>\n</html>\n')),(0,l.kt)("h2",{id:"rendering-templates"},"Rendering Templates"),(0,l.kt)("p",null,"FoalTS provides a minimalist template engine to render templates. This engine replaces all the occurrences of ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ myVariableName }}")," with the given values."),(0,l.kt)("p",null,"Here is an example showing how to use it:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"templates/index.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>{{ title }}</title>\n</head>\n<body>\n  Hello {{ name }}!\n</body>\n</html>\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, render } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      name: 'Alix',\n      title: 'Home'\n    });\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Output (GET /)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  Hello Alix!\n</body>\n</html>\n')),(0,l.kt)("h2",{id:"using-another-template-engine"},"Using Another Template Engine"),(0,l.kt)("p",null,"External template engines, such as ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ejs"},"EJS")," or ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pug"},"pug"),", are also supported and can be configured for the current project using the configuration key ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.templateEngine"),"."),(0,l.kt)("p",null,"Here is an example showing how to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"config/default.json")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"config/default.yml"),") with ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/twig"},"twig"),", a JS implementation of the Twig PHP templating language."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install twig\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "templateEngine": "twig"\n    ...\n  }\n  ...\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  templateEngine: twig\n  ...\n...\n")),(0,l.kt)("p",null,"Then the ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," function uses this engine under the hood to render the templates."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Only ",(0,l.kt)("a",{parentName:"p",href:"https://expressjs.com/en/resources/template-engines.html"},"Express compatible")," template engines are supported (which represents the large majority of those available on npm).")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"templates/index.html (Twig example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    {% for user in users %}\n      <li>{{ user.name }}</li>\n    {% endfor %}\n  </ul>\n</body>\n</html>\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"src/app/app.controller.ts (Twig example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get } from '@foal/core';\n\nexport class AppController {\n  @Get('/')\n  index() {\n    return render('./templates/index.html', {\n      users: [\n        { name: 'John' },\n        { name: 'Mary' }\n      ]\n    });\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Output (GET /) (Twig example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Users</title>\n</head>\n<body>\n  <ul>\n    <li>John</li>\n    <li>Mary</li>\n  </ul>\n</body>\n</html>\n')),(0,l.kt)("h2",{id:"templates-location"},"Templates Location"),(0,l.kt)("p",null,"By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," function loads templates from the project root directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// |- config\n// |- src\n// '- templates\n//   '- login.html\nrender('./templates/login.html', { /* ... */ })\n")),(0,l.kt)("p",null,"But the path can also be relative to the controller file. The ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," function accepts a third parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"dirname")," for this purpose."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"/* login.controller.ts */\n\n// |- config\n// '- src\n//   '- app\n//     '- controllers\n//       |- templates\n//       | '- login.html\n//       '- login.controller.ts\nrender('./templates/login.html', { /* ... */ }, __dirname)\n")),(0,l.kt)("h2",{id:"the-legacy-package-foalejs"},"The Legacy Package ",(0,l.kt)("inlineCode",{parentName:"h2"},"@foal/ejs")),(0,l.kt)("p",null,"Previous versions of FoalTS (<v1.0.0) only accepted a certain format for template engines. The package ",(0,l.kt)("inlineCode",{parentName:"p"},"@foal/ejs")," was an adapter of EJS for the framework. Since FoalTS now supports Express-compatible template engines, prefer using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ejs")," library directly in the future."))}c.isMDXComponent=!0}}]);