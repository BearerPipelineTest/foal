(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8616],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(944),l=n(6010),o="tabItem_1uMI",i="tabItemActive_2DSg";var d=37,s=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,c=e.groupId,m=e.className,f=(0,r.Z)(),k=f.tabGroupChoices,g=f.setTabGroupChoices,y=(0,a.useState)(p),h=y[0],b=y[1],v=a.Children.toArray(e.children),N=[];if(null!=c){var w=k[c];null!=w&&w!==h&&u.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;b(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,r,l,o,d,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,o=window,d=o.innerHeight,s=o.innerWidth,n>=0&&l<=s&&r<=d&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case s:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case d:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},643:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=n(1395),i=n(8215),d=["components"],s={title:"File Upload and Download"},p={unversionedId:"upgrade-to-v2/file-upload-and-download",id:"upgrade-to-v2/file-upload-and-download",isDocsHomePage:!1,title:"File Upload and Download",description:"In version 2, file uploads and download are managed by a single package: @foal/storage.",source:"@site/docs/upgrade-to-v2/file-upload-and-download.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/file-upload-and-download",permalink:"/docs/upgrade-to-v2/file-upload-and-download",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/file-upload-and-download.md",version:"current",frontMatter:{title:"File Upload and Download"}},u=[{value:"The <code>@foal/formidable</code> Package",id:"the-foalformidable-package",children:[]},{value:"The <code>createHttpResponseFile</code> Function",id:"the-createhttpresponsefile-function",children:[]},{value:"Usage with Buffers",id:"usage-with-buffers",children:[]},{value:"The <code>AbstractDisk</code>/<code>Disk</code> Service",id:"the-abstractdiskdisk-service",children:[]},{value:"New features",id:"new-features",children:[{value:"Accessing File Metadata",id:"accessing-file-metadata",children:[]}]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In version 2, file uploads and download are managed by a single package: ",(0,l.kt)("inlineCode",{parentName:"p"},"@foal/storage"),"."),(0,l.kt)("h2",{id:"the-foalformidable-package"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"@foal/formidable")," Package"),(0,l.kt)("p",null,"This package has been removed. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm uninstall formidable @foal/formidable @types/formidable\nnpm install @foal/storage\n")),(0,l.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Before")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export class AppController {\n\n  @Post(\'/upload\')\n  async upload(ctx: Context) {\n    const form = new IncomingForm();\n    form.uploadDir = \'uploaded\';\n    form.keepExtensions = true;\n    const { fields, files } = await parseForm(form, ctx);\n\n    console.log(files.file1);\n    // {\n    //   "size": 14911887,\n    //   "path": "uploaded/upload_de9cb95c.pdf",\n    //   "name": "example.pdf",\n    //   "type": "application/pdf",\n    //   "mtime": "2019-03-25T13:58:27.988Z"\n    // }\n\n    // ...\n  }\n\n}\n\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"After")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ValidateMultipartFormDataBody } from \'@foal/storage\';\n\nexport class AppController {\n\n  @Post(\'/upload\')\n  @ValidateMultipartFormDataBody({\n    files: {\n      file1: { required: true, saveTo: \'.\' },\n    }\n  })\n  async upload(ctx: Context) {\n    const { fields, files } = ctx.request.body;\n\n    console.log(files.file1);\n    // {\n    //   "path": "de9cb95cde9cb95cde9cb95c.pdf",\n    //   "filename": "example.pdf"\n    //   "mimeType": "application/pdf",\n    // }\n\n    // ...\n  }\n\n}\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Warning:")," the file path generated by ",(0,l.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," does not start with ",(0,l.kt)("inlineCode",{parentName:"p"},"uploaded/"),". If you save your file paths in your database, you will need to update them to remove this at the beginning (for example using a shell script)."),(0,l.kt)("h2",{id:"the-createhttpresponsefile-function"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"createHttpResponseFile")," Function"),(0,l.kt)("p",null,"The function ",(0,l.kt)("inlineCode",{parentName:"p"},"createHttpResponseFile")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"@foal/core")," has been removed. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"Disk.createHttpResponseFile")," hook instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @foal/storage\n")),(0,l.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Before")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"class AppController {\n\n  @Get('/download')\n  download() {\n    return createHttpResponseFile({\n      directory: 'uploaded/',\n      file: 'my-pdf.pdf'\n    });\n  }\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"After")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Disk } from '@foal/storage';\n\nclass AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('my-pdf.pdf');\n  }\n  \n} \n")),(0,l.kt)("h2",{id:"usage-with-buffers"},"Usage with Buffers"),(0,l.kt)("p",null,"If you use ",(0,l.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," with buffers, update your code as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nconst buffer = ctx.request.body.files.foobar;\n\n// After\nconst { buffer } = ctx.request.body.files.foobar;\n")),(0,l.kt)("h2",{id:"the-abstractdiskdisk-service"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"AbstractDisk"),"/",(0,l.kt)("inlineCode",{parentName:"h2"},"Disk")," Service"),(0,l.kt)("p",null,"If you extend the abstract class ",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractDisk"),", you must add a ",(0,l.kt)("inlineCode",{parentName:"p"},"readSize")," method which returns the size of the file."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AbstractDisk")," has been renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"Disk"),"."),(0,l.kt)("h2",{id:"new-features"},"New features"),(0,l.kt)("h3",{id:"accessing-file-metadata"},"Accessing File Metadata"),(0,l.kt)("p",null,"When uploading files, the browser sends additional metadata. This can be accessed in version 2 in the controller method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const file = ctx.request.body.files.profile;\n// file.mimeType, ...\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encoding")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Encoding type of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filename")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string\\|undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file on the user's computer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Mime type of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path where the file has been saved. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buffer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,l.kt)("td",{parentName:"tr",align:null},"Buffer containing the entire file. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);