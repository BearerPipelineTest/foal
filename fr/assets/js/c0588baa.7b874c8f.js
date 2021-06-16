(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2888],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5644:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={title:"Authentification des utilisateurs dans React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},l={unversionedId:"tutorials/real-world-example-with-react/tuto-10-auth-with-react",id:"tutorials/real-world-example-with-react/tuto-10-auth-with-react",isDocsHomePage:!1,title:"Authentification des utilisateurs dans React",description:"L'API backend est pr\xeate \xe0 \xeatre utilis\xe9e. Maintenant, ajoutons l'authentification dans la partie frontend.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/10-auth-with-react.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/10-auth-with-react",permalink:"/fr/docs/tutorials/real-world-example-with-react/10-auth-with-react",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/10-auth-with-react.md",version:"current",sidebarPosition:10,frontMatter:{title:"Authentification des utilisateurs dans React",id:"tuto-10-auth-with-react",slug:"10-auth-with-react"},sidebar:"someSidebar",previous:{title:"Authentification des Utilisateurs dans l'API",permalink:"/fr/docs/tutorials/real-world-example-with-react/9-authenticated-api"},next:{title:"Ajout de la Page d'Inscription",permalink:"/fr/docs/tutorials/real-world-example-with-react/11-sign-up"}},u=[],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"L'API backend est pr\xeate \xe0 \xeatre utilis\xe9e. Maintenant, ajoutons l'authentification dans la partie frontend."),(0,a.kt)("p",null,"Voici comment l'application React est organis\xe9e :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En cliquant sur le bouton ",(0,a.kt)("em",{parentName:"li"},"Log in")," ou ",(0,a.kt)("em",{parentName:"li"},"Log out"),", l'application appelle les fonctions d\xe9finies dans ",(0,a.kt)("inlineCode",{parentName:"li"},"requests/auth.ts")," pour faire des requ\xeates au serveur."),(0,a.kt)("li",{parentName:"ul"},"Les informations sur l'utilisateur actuel sont stock\xe9es dans le composant racine ",(0,a.kt)("inlineCode",{parentName:"li"},"App.tsx")," sous le nom ",(0,a.kt)("inlineCode",{parentName:"li"},"currentUser"),". Si l'utilisateur s'est connect\xe9, cet \xe9tat est de type ",(0,a.kt)("inlineCode",{parentName:"li"},"{ id: number, name: string }"),". Sinon, sa valeur est ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},"Lors de la connexion, le serveur renvoie des informations sur l'utilisateur qui sont utilis\xe9es pour d\xe9finir l'\xe9tat ",(0,a.kt)("inlineCode",{parentName:"li"},"currentUser"),". Lors de la d\xe9connexion, l'application donne \xe0 cet \xe9tat la valeur ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Savoir, c\xf4t\xe9 client, si un utilisateur est connect\xe9 et qui il est est utile pour g\xe9rer l'affichage des \xe9l\xe9ments de l'interface utilisateur. Cela nous permet, par exemple, de savoir quels boutons de navigation doivent \xeatre visibles.")),(0,a.kt)("p",null,"Ouvrez le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"requests/auth.ts")," et impl\xe9mentez les fonctions vides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\nimport { ICredentials, IUser } from '../interfaces';\n\nexport async function logIn(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/login', credentials);\n  return response.data;\n}\n\nexport async function logOut(): Promise<void> {\n  await axios.post('/api/auth/logout');\n}\n\nexport async function signUp(credentials: ICredentials): Promise<IUser> {\n  const response = await axios.post<IUser>('/api/auth/signup', credentials);\n  return response.data;\n}\n\n")),(0,a.kt)("p",null,"Allez sur ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/login"},"http://localhost:3000/login")," et connectez-vous. Vous devriez \xeatre redirig\xe9 vers la page d'accueil. Si vous cliquez sur le bouton ",(0,a.kt)("em",{parentName:"p"},"Profile")," dans la barre de navigation, vous devriez \xeatre dirig\xe9 vers votre page personnelle. Vous pouvez ajouter ou supprimer des posts si vous le souhaitez."),(0,a.kt)("p",null,"Maintenant, rafra\xeechissons la page. Vous \xeates redirig\xe9 vers la page de connexion comme si vous \xe9tiez d\xe9connect\xe9. A\xefe !"),(0,a.kt)("p",null,"La raison en est que l'application frontend ne sait plus que vous \xeates connect\xe9. Si vous regardez le composant ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),", vous verrez que l'\xe9tat ",(0,a.kt)("inlineCode",{parentName:"p"},"currentUser")," est initialis\xe9 \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," lorsque l'application est charg\xe9e. Nous devons donc trouver un moyen de garder la trace de l'\xe9tat de connexion de l'utilisateur m\xeame si la page est rafra\xeechie."),(0,a.kt)("p",null,"Pour ce faire, vous utiliserez un cookie suppl\xe9mentaire pour stocker cette information qui sera lisible par l'application React."),(0,a.kt)("p",null,"Ouvrez le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," et ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"userCookie"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@foal/core';\n\n// ...\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n  userCookie: (ctx: Context<User|undefined>) => ctx.user ? JSON.stringify({ id: ctx.user.id, name: ctx.user.name }) : '',\n})\n")),(0,a.kt)("p",null,"Cette option d\xe9finit un cookie ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," suppl\xe9mentaire sur l'h\xf4te client avec des informations sur l'utilisateur actuel."),(0,a.kt)("p",null,"Retournez maintenant au fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," et ajoutez la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentUserFromCookie")," ci-dessous."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as cookie from 'cookie';\n\nfunction getCurrentUserFromCookie(): IUser | null {\n  const userCookie = cookie.parse(document.cookie).user as string|undefined;\n  if (!userCookie) {\n    return null;\n  }\n  try {\n    return JSON.parse(userCookie);\n  } catch (error) {\n    return null;\n  }\n}\n\nexport default function App() {\n  const [currentUser, setCurrentUser] = useState(getCurrentUserFromCookie());\n\n  // ...\n\n}\n")),(0,a.kt)("p",null,"Au chargement de l'application, cette fonction v\xe9rifiera si un cookie ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," existe avec des informations sur l'utilisateur actuel. Si c'est le cas, son contenu sera utilis\xe9 pour d\xe9finir la valeur de ",(0,a.kt)("inlineCode",{parentName:"p"},"currentUser"),"."),(0,a.kt)("p",null,"Rafra\xeechissez la page. L'application fonctionne maintenant comme pr\xe9vu."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Vous auriez \xe9galement pu d\xe9finir un cookie c\xf4t\xe9 client dans la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"logIn")," et le supprimer dans la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"logOut"),". Mais cette solution ne fonctionne pas bien lorsque l'utilisateur est automatiquement d\xe9connect\xe9 apr\xe8s une p\xe9riode d'inactivit\xe9 (expiration de la session).")))}p.isMDXComponent=!0}}]);