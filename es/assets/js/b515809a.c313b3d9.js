(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1589],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),o=n(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,k=(0,a.Z)(),f=k.tabGroupChoices,h=k.setTabGroupChoices,g=(0,r.useState)(p),y=g[0],b=g[1],v=r.Children.toArray(e.children),w=[];if(null!=d){var S=f[d];null!=S&&S!==y&&u.some((function(e){return e.value===S}))&&b(S)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=u[n].value;b(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,s,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4735:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=n(1395),i=n(8215),l=["components"],c={title:"Protecci\xf3n CSRF"},p={unversionedId:"security/csrf-protection",id:"security/csrf-protection",isDocsHomePage:!1,title:"Protecci\xf3n CSRF",description:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/security/csrf-protection.md",sourceDirName:"security",slug:"/security/csrf-protection",permalink:"/es/docs/security/csrf-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/security/csrf-protection.md",version:"current",frontMatter:{title:"Protecci\xf3n CSRF"},sidebar:"someSidebar",previous:{title:"Cabeceras HTTP de Protecci\xf3n",permalink:"/es/docs/security/http-headers-protection"},next:{title:"Protecci\xf3n XSS",permalink:"/es/docs/security/xss-protection"}},u=[{value:"Defense Principle",id:"defense-principle",children:[{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",children:[]},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Single-Page Applications (session tokens)",id:"single-page-applications-session-tokens",children:[]},{value:"Single-Page Applications (JWTs)",id:"single-page-applications-jwts",children:[]},{value:"Regular Web Applications (session tokens)",id:"regular-web-applications-session-tokens",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Increase stateless protection (JWT)",id:"increase-stateless-protection-jwt",children:[]},{value:"Custom CSRF cookie name",id:"custom-csrf-cookie-name",children:[]},{value:"Disable CSRF protection on a specific route",id:"disable-csrf-protection-on-a-specific-route",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Source: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md"},"OWASP")))),(0,o.kt)("h2",{id:"defense-principle"},"Defense Principle"),(0,o.kt)("p",null,"FoalTS combines two defenses to protect your application against a CSRF attack. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite")," cookie directive and a token-based technique to have in-depth protection."),(0,o.kt)("p",null,"When enabled, authentication cookies have their ",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lax")," in order to prevent third-party websites from sending authenticated requests to your server. When they make a POST, PUT, PATCH or DELETE request to your application, the authentication cookie is not sent. As of August 2020, this protection is supported by 92% of modern browsers."),(0,o.kt)("p",null,"In addition, the framework provides token-based mitigation that works with either state (session tokens) or stateless (JWT). The client can read the ",(0,o.kt)("em",{parentName:"p"},"CSRF token")," either from the HTML page (using a template) or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie. Then, the token must be included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the body with the ",(0,o.kt)("inlineCode",{parentName:"p"},"_csrf")," field in any POST, PUT, PATCH or DELETE request sent to the server (see examples)."),(0,o.kt)("h3",{id:"authentication-with-session-tokens"},"Authentication with Session Tokens"),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    csrf:\n      enabled: true\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    session: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,o.kt)("h3",{id:"authentication-with-json-web-tokens"},"Authentication with JSON Web Tokens"),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"single-page-applications-session-tokens"},"Single-Page Applications (session tokens)"),(0,o.kt)("h4",{id:"server"},"Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseNoContent();\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,o.kt)("h4",{id:"client"},"Client"),(0,o.kt)("p",null,"The client must retrieve the ",(0,o.kt)("em",{parentName:"p"},"CSRF token")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie and then send it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the request body with the ",(0,o.kt)("inlineCode",{parentName:"p"},"_csrf")," field."),(0,o.kt)("p",null,"Most modern request libraries already handle it automatically for you using the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header."),(0,o.kt)(s.Z,{defaultValue:"angular",values:[{label:"Angular HttpClient",value:"angular"},{label:"Axios",value:"axios"},{label:"Native JavaScript",value:"native"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("p",null,"No additional configuration required.")),(0,o.kt)(i.Z,{value:"axios",mdxType:"TabItem"},(0,o.kt)("p",null,"No additional configuration required.")),(0,o.kt)(i.Z,{value:"native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function postData(url = '', data = {}) {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      // Assuming you use this library: https://www.npmjs.com/package/js-cookie.\n      'X-XSRF-TOKEN': Cookies.get('XSRF-Token')\n    },\n    body: JSON.stringify(data),\n  });\n  return response.json();\n}\n")))),(0,o.kt)("h3",{id:"single-page-applications-jwts"},"Single-Page Applications (JWTs)"),(0,o.kt)("h4",{id:"server-1"},"Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n    async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const token: string = await new Promise((resolve, reject) => {\n      sign(\n        { email: user.email },\n        getSecretOrPrivateKey(),\n        { subject: user.id.toString() },\n        (err, encoded) => {\n          if (err) {\n            return reject(err);\n          }\n          resolve(encoded);\n        }\n      );\n    });\n\n    const response = new HttpResponseNoContent();\n    // Do not forget the \"await\" keyword.\n    await setAuthCookie(response, token);\n    return response;\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  cookie: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,o.kt)("h4",{id:"client-1"},"Client"),(0,o.kt)("p",null,"Same as session tokens."),(0,o.kt)("h3",{id:"regular-web-applications-session-tokens"},"Regular Web Applications (session tokens)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Regular Web Applications")," use ",(0,o.kt)("em",{parentName:"p"},"Server-Side Rendering")," to generate their HTML pages. "),(0,o.kt)("h4",{id:"server-2"},"Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseRedirect,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"view.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  dependency,\n  Get,\n  render,\n  Session,\n  Store,\n  UseSessions,\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nexport class ViewController {\n  @dependency\n  store: Store;\n\n  @Get('/login')\n  async login(ctx: Context) {\n    return render('./templates/login.html');\n  }\n\n  @Get('/products')\n  @UseSessions({\n    cookie: true,\n    required: true,\n    redirectTo: '/login'\n  })\n  async index(ctx: Context<User, Session>) {\n    return render(\n      './templates/products.html',\n      { csrfToken: ctx.session.get('csrfToken') },\n    );\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseRedirect, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n  redirectTo: '/login'\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),(0,o.kt)("h4",{id:"client-2"},"Client"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"login.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Log in</title>\n  </head>\n  <body>\n    <form method="POST" action="/login">\n      <input name="email" type="email" >\n      <input name="password" type="password" >\n      <button type="submit">Log in</button>\n    </form>\n  </body>\n</html>\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"products.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Add a product</title>\n  </head>\n  <body>\n    <form method="POST" action="/api/products">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      <input name="name" type="text">\n      <button type="submit">Add product</button>\n    </form>\n  </body>\n</html>\n')),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("h3",{id:"increase-stateless-protection-jwt"},"Increase stateless protection (JWT)"),(0,o.kt)("p",null,"In FoalTS, stateless CSRF protection is based on the double submit technique. CSRF tokens are generated randomly and signed with the JWT secret or RSA private key."),(0,o.kt)("p",null,"To increase the effectiveness of protection against sub-domain attacks, your auth JWT must include a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," per user (usually the user ID) and an expiration date. The framework will then use these to create and sign the ",(0,o.kt)("em",{parentName:"p"},"CSRF token"),"."),(0,o.kt)("h3",{id:"custom-csrf-cookie-name"},"Custom CSRF cookie name"),(0,o.kt)("p",null,"The name of the CSRF cookie can be changed in the configuration."),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n      cookie:\n        name: CSRF-Token # Default: XSRF-TOKEN\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true,\n        "cookie": {\n          "name": "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true,\n        cookie: {\n          name: "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n')))),(0,o.kt)("h3",{id:"disable-csrf-protection-on-a-specific-route"},"Disable CSRF protection on a specific route"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"This feature is available from version 2.1 onwards."))),(0,o.kt)("p",null,"In case the CSRF protection is enabled globally and you want to disable it for a specific route, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"csrf")," option for that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post, UseSessions } from '@foal/core';\n\nexport class ApiController {\n  @Post('/foo')\n  @UseSessions({ cookie: true })\n  foo() {\n    // This method has the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n\n  @Post('/bar')\n  @UseSessions({ cookie: true, csrf: false })\n  bar() {\n    // This method does not have the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n}\n\n")))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);