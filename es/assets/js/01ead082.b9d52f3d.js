(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4473],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4602:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={title:"Angular, React & Vue"},l={unversionedId:"frontend-integration/angular-react-vue",id:"frontend-integration/angular-react-vue",isDocsHomePage:!1,title:"Angular, React & Vue",description:"`",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/frontend-integration/angular-react-vue.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/angular-react-vue",permalink:"/es/docs/frontend-integration/angular-react-vue",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend-integration/angular-react-vue.md",version:"current",frontMatter:{title:"Angular, React & Vue"},sidebar:"someSidebar",previous:{title:"Single Page Applications (SPA)",permalink:"/es/docs/frontend-integration/single-page-applications"},next:{title:"JSX Server-Side Rendering",permalink:"/es/docs/frontend-integration/jsx-server-side-rendering"}},d=[{value:"Creating a new Application",id:"creating-a-new-application",children:[{value:"Angular",id:"angular",children:[]},{value:"React",id:"react",children:[]},{value:"Vue",id:"vue",children:[]}]},{value:"Problems Solved by the <code>connect</code> Command",id:"problems-solved-by-the-connect-command",children:[{value:"Origins that Do not Match",id:"origins-that-do-not-match",children:[]},{value:"Build Outpath",id:"build-outpath",children:[]}]}],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foal connect angular ../frontend\nfoal connect react ../frontend\nfoal connect vue ../frontend\n")),(0,o.kt)("p",null,"Angular, React and Vue all provide powerful CLIs for creating frontend applications. These tools are widely used, regularly improved and extensively documented. That's why Foal CLI do not provide ready-made features to build the frontend in their place."),(0,o.kt)("p",null,"Instead, FoalTS offers a convenient command, named ",(0,o.kt)("inlineCode",{parentName:"p"},"connect"),", to configure your frontend CLI so that it interacts smoothly with your Foal application. This way, you do not have to worry about the details of the configuration when starting a new project. You can leave this until later if you need it."),(0,o.kt)("h2",{id:"creating-a-new-application"},"Creating a new Application"),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir my-app\ncd my-app\n\nfoal createapp backend\nng new frontend\n\ncd backend\nfoal connect angular ../frontend\n")),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir my-app\ncd my-app\n\nfoal createapp backend\nnpx create-react-app frontend --template typescript\n\ncd backend\nfoal connect react ../frontend\n")),(0,o.kt)("h3",{id:"vue"},"Vue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir my-app\ncd my-app\n\nfoal createapp backend\nvue create frontend\n\ncd backend\nfoal connect vue ../frontend\n")),(0,o.kt)("h2",{id:"problems-solved-by-the-connect-command"},"Problems Solved by the ",(0,o.kt)("inlineCode",{parentName:"h2"},"connect")," Command"),(0,o.kt)("h3",{id:"origins-that-do-not-match"},"Origins that Do not Match"),(0,o.kt)("p",null,"When building a web application with a Angular / React / Vue, it is very common in development to have two servers serving on different ports. For example, with an application written in Foal and Angular, the backend server serves the port ",(0,o.kt)("inlineCode",{parentName:"p"},"3001")," and the frontend one servers the ",(0,o.kt)("inlineCode",{parentName:"p"},"4200"),"."),(0,o.kt)("p",null,"Consequently requests made by the frontend do not reach the backend as they have a different origin. One hacky solution is to replace the URL path to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," in development and to enable CORS requests."),(0,o.kt)("p",null,"This technique has some drawbacks however:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It may introduce a different codebase between the environments (dev and prod)."),(0,o.kt)("li",{parentName:"ul"},"And it disables a browser protection (the ",(0,o.kt)("inlineCode",{parentName:"li"},"Same-Origin policy"),").")),(0,o.kt)("p",null,"One way to get around this, keeping the policy and the same codebase, is to configure a proxy to redirect ",(0,o.kt)("inlineCode",{parentName:"p"},"4200")," requests to the port ",(0,o.kt)("inlineCode",{parentName:"p"},"3001"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," command does it for you."),(0,o.kt)("h3",{id:"build-outpath"},"Build Outpath"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"This feature only works with Angular and Vue."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," command also modifies the build output path of your front so that its bundles are saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"public/")," directory. This way, you can run the frontend and the backend build commands and directly ship the application to production."))}u.isMDXComponent=!0}}]);