(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(257)),c={title:"Le Script Shell create-todo"},s={unversionedId:"tutorials/simple-todo-list/4-the-shell-script-create-todo",id:"tutorials/simple-todo-list/4-the-shell-script-create-todo",isDocsHomePage:!1,title:"Le Script Shell create-todo",description:"Il est maintenant temps de remplir la base de donn\xe9es avec quelques t\xe2ches.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",slug:"/tutorials/simple-todo-list/4-the-shell-script-create-todo",permalink:"/fr/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",version:"current",sidebar:"someSidebar",previous:{title:"Le Mod\xe8le Todo",permalink:"/fr/docs/tutorials/simple-todo-list/3-the-todo-model"},next:{title:"L'API REST",permalink:"/fr/docs/tutorials/simple-todo-list/5-the-rest-api"}},i=[],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Il est maintenant temps de remplir la base de donn\xe9es avec quelques t\xe2ches."),Object(a.b)("p",null,"Vous pouvez ex\xe9cuter l'interface en ligne de commande de votre base de donn\xe9es (dans ce cas ",Object(a.b)("em",{parentName:"p"},"SQLite"),") et entrer quelques requ\xeates SQL. Mais c'est risqu\xe9 et ce n'est pas tr\xe8s pratique. Cela devient particuli\xe8rement vrai lorsque la complexit\xe9 de vos mod\xe8les augmente (relations ",Object(a.b)("em",{parentName:"p"},"many-to-many"),", etc.)."),Object(a.b)("p",null,"C'est pourquoi vous allez cr\xe9er et utiliser un script shell \xe0 la place."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"foal generate script create-todo\n")),Object(a.b)("p",null,"Un ",Object(a.b)("em",{parentName:"p"},"script shell")," est un morceau de code destin\xe9 \xe0 \xeatre appel\xe9 depuis la ligne de commande. Il a acc\xe8s \xe0 tous les composants de votre application, y compris vos mod\xe8les. Un script shell est divis\xe9 en deux parties :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"un objet ",Object(a.b)("inlineCode",{parentName:"li"},"schema")," qui d\xe9finit la sp\xe9cification des arguments de la ligne de commande,"),Object(a.b)("li",{parentName:"ul"},"et une fonction ",Object(a.b)("inlineCode",{parentName:"li"},"main")," qui re\xe7oit ces arguments sous forme d'objet et ex\xe9cute du code.")),Object(a.b)("p",null,"Ouvrez le nouveau fichier g\xe9n\xe9r\xe9 dans le r\xe9pertoire ",Object(a.b)("inlineCode",{parentName:"p"},"src/scripts")," et mettez \xe0 jour son contenu."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../app/entities';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const connection = await createConnection();\n\n  try {\n    // Create a new task with the text given in the command line.\n    const todo = new Todo();\n    todo.text = args.text;\n\n    // Save the task in the database and then display it in the console.\n    console.log(await todo.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    await connection.close();\n  }\n}\n\n")),Object(a.b)("p",null,"Construisez le script."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build\n")),Object(a.b)("p",null,"Ensuite, lancez le script pour cr\xe9er des t\xe2ches dans la base de donn\xe9es."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Notez que si vous essayez de cr\xe9er une nouvelle t\xe2che sans sp\xe9cifier l'argument texte, vous obtiendrez l'erreur ci-dessous."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"Error: The command line arguments should have required property 'text'."))))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);