(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5693],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(944),o=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,r.Z)(),g=d.tabGroupChoices,v=d.setTabGroupChoices,y=(0,a.useState)(c),b=y[0],k=y[1],h=a.Children.toArray(e.children),j=[];if(null!=m){var w=g[m];null!=w&&w!==b&&p.some((function(e){return e.value===w}))&&k(w)}var T=function(e){var t=e.currentTarget,n=j.indexOf(t),a=p[n].value;k(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,o,l,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6805:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=n(1395),i=n(8215),s=["components"],u={title:"Template Engine"},c={unversionedId:"upgrade-to-v2/template-engine",id:"upgrade-to-v2/template-engine",isDocsHomePage:!1,title:"Template Engine",description:"Starting from version 2, only Express-compatible template engines are supported (EJS, pug, Jade, Twig, etc).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/template-engine.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/template-engine",permalink:"/fr/docs/upgrade-to-v2/template-engine",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/template-engine.md",version:"current",frontMatter:{title:"Template Engine"}},p=[{value:"The <code>@foal/ejs</code> package",id:"the-foalejs-package",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting from version 2, only Express-compatible template engines are supported (",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ejs"},"EJS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pug"},"pug"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jade"},"Jade"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/twig"},"Twig"),", etc)."),(0,o.kt)("h2",{id:"the-foalejs-package"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"@foal/ejs")," package"),(0,o.kt)("p",null,"Therefore the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/ejs")," has been removed. If you used it, update your configuration file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm uninstall @foal/ejs\nnpm install ejs\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Version 1")),(0,o.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  templateEngine: '@foal/ejs'\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "templateEngine": "@foal/ejs"\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    templateEngine: "@foal/ejs"\n  }\n}\n')))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Version 2")),(0,o.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  templateEngine: ejs\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "templateEngine": "ejs"\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    templateEngine: "ejs"\n  }\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);