(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9075],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),o=t(944),a=t(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,d=e.values,f=e.groupId,p=e.className,m=(0,o.Z)(),v=m.tabGroupChoices,g=m.setTabGroupChoices,h=(0,r.useState)(u),b=h[0],k=h[1],y=r.Children.toArray(e.children),C=[];if(null!=f){var N=v[f];null!=N&&N!==b&&d.some((function(e){return e.value===N}))&&k(N)}var T=function(e){var n=e.currentTarget,t=C.indexOf(n),r=d[t].value;k(r),null!=f&&(g(f,r),setTimeout((function(){var e,t,r,o,a,i,s,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,c=i.innerWidth,t>=0&&a<=c&&o<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},w=function(e){var n,t;switch(e.keyCode){case c:var r=C.indexOf(e.target)+1;t=C[r]||C[0];break;case s:var o=C.indexOf(e.target)-1;t=C[o]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":b===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:T,onClick:T},t)}))),n?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},944:function(e,n,t){"use strict";var r=t(7294),o=t(9443);n.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9777:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=t(1395),l=t(8215),s=["components"],c={title:"New Configuration System"},u={unversionedId:"upgrade-to-v2/config-system",id:"upgrade-to-v2/config-system",isDocsHomePage:!1,title:"New Configuration System",description:"The Config.get Method",source:"@site/docs/upgrade-to-v2/config-system.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/config-system",permalink:"/docs/upgrade-to-v2/config-system",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/config-system.md",version:"current",frontMatter:{title:"New Configuration System"}},d=[{value:"The <code>Config.get</code> Method",id:"the-configget-method",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"The <code>Config</code> and <code>ConfigMock</code> services",id:"the-config-and-configmock-services",children:[]},{value:"New features",id:"new-features",children:[{value:"Multiple <code>.env</code> files for each environment",id:"multiple-env-files-for-each-environment",children:[]},{value:"Read an environment variable from <code>.env</code>",id:"read-an-environment-variable-from-env",children:[]},{value:"Comments and quotes in <code>.env</code> files",id:"comments-and-quotes-in-env-files",children:[]},{value:"JS configuration files",id:"js-configuration-files",children:[]},{value:"Cloud PaaS providers",id:"cloud-paas-providers",children:[]}]}],f={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-configget-method"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Config.get")," Method"),(0,a.kt)("p",null,"The legacy ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get")," method has been removed and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get2")," method has been renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get"),"."),(0,a.kt)("p",null,"If you were still using the old method, update your code as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 1\nconst foobar = Config.get('hello.world');\nconst debug = Config.get<boolean>('settings.debug');\nconst port = Config.get('port', 3001);\nconst port = Config.get<number>('port', 3001);\n\n// Version 2\nconst foobar = Config.get('hello.world');\nconst debug = Config.getOrThrow('settings.debug', 'boolean');\nconst port = Config.get('port', 'number', 3001);\nconst port = Config.get('port', 'number', 3001);\n")),(0,a.kt)("p",null,"More details can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/architecture/configuration"},"here"),"."),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Environment variables are no longer loaded by default. You must specify them explicitly."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get('settings.jwt.secret')")," will not return the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SETTINGS_JWT_SECRET")," by default. To do this, you must specify it explicitly in a configuration file:"),(0,a.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),(0,a.kt)("h2",{id:"the-config-and-configmock-services"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Config")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"ConfigMock")," services"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," class can no longer be used as a service. You must use its static methods instead. Therefore, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMock")," class has also been removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nexport class Controller {\n  @dependency\n  config: Config;\n\n  foo() {\n    const foobar = this.config.get('foobar');\n  }\n}\n\n// After\nexport class Controller {\n  foo() {\n    const foobar = Config.get('foobar');\n  }\n}\n\n")),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("h3",{id:"multiple-env-files-for-each-environment"},"Multiple ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," files for each environment"),(0,a.kt)("p",null,"Just like the JSON and YAML configuration files, it is now possible to have a separate ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file for each environment: ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production"),", etc."),(0,a.kt)("p",null,"The values provided in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.{environment}")," file override those defined in the default ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("h3",{id:"read-an-environment-variable-from-env"},"Read an environment variable from ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")),(0,a.kt)("p",null,"Environment variables defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file can be accessed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Env.get")," method."),(0,a.kt)("h3",{id:"comments-and-quotes-in-env-files"},"Comments and quotes in ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," files"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files now support the use of comments and quotes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# This a comment\nHELLO=\"hello world\"\nHELLO='hello world'\n")),(0,a.kt)("h3",{id:"js-configuration-files"},"JS configuration files"),(0,a.kt)("p",null,"In addition to the JSON and YAML formats, configuration files can now also be written in JS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    debug: false,\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"cloud-paas-providers"},"Cloud PaaS providers"),(0,a.kt)("p",null,"Since the configuration keys are no longer linked to a specific environment variable, deployment with PaaS providers is facilitated."),(0,a.kt)("p",null,"For example, in version 1, the URI of MongoDB had to be passed with the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_URI"),". If the cloud provider were giving the URI using the name ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGO_URI"),", things were becoming more difficult. This problem is now solved with the ",(0,a.kt)("inlineCode",{parentName:"p"},"env(*)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Env.get")," features."))}p.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);