(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1045],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5726:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],a={title:"Tests Unitaires",id:"tuto-7-unit-testing",slug:"7-unit-testing"},l={unversionedId:"tutorials/simple-todo-list/tuto-7-unit-testing",id:"tutorials/simple-todo-list/tuto-7-unit-testing",isDocsHomePage:!1,title:"Tests Unitaires",description:"La derni\xe8re \xe9tape de ce tutoriel consiste \xe0 ajouter des tests unitaires \xe0 l'ApiController.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/7-unit-testing.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/7-unit-testing",permalink:"/fr/docs/tutorials/simple-todo-list/7-unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/7-unit-testing.md",version:"current",sidebarPosition:7,frontMatter:{title:"Tests Unitaires",id:"tuto-7-unit-testing",slug:"7-unit-testing"},sidebar:"someSidebar",previous:{title:"Validation & Assainissement",permalink:"/fr/docs/tutorials/simple-todo-list/6-validation-and-sanitization"},next:{title:"Introduction",permalink:"/fr/docs/tutorials/real-world-example-with-react/1-introduction"}},c=[],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La derni\xe8re \xe9tape de ce tutoriel consiste \xe0 ajouter des tests unitaires \xe0 l'",(0,i.kt)("inlineCode",{parentName:"p"},"ApiController"),"."),(0,i.kt)("p",null,"Un fichier de test unitaire se termine par l'extension ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ts")," et est g\xe9n\xe9ralement plac\xe9 \xe0 c\xf4t\xe9 du fichier qu'il teste."),(0,i.kt)("p",null,"Ouvrez le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"api.controller.spec.ts")," et remplacez son contenu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok, strictEqual } from 'assert';\n\n// 3p\nimport { createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';\nimport { Connection, createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../entities';\nimport { ApiController } from './api.controller';\n\n// Define a group of tests.\ndescribe('ApiController', () => {\n\n  let controller: ApiController;\n  let connection: Connection;\n\n  // Create a connection to the database before running all the tests.\n  before(async () => {\n    // The connection uses the configuration defined in the file config/test.json.\n    // By default, the file has three connection options:\n    //  \"database\": \"./test_db.sqlite3\" -> Use a different database for running the tests.\n    // \"synchronize\": true ->  Auto create the database schema when the connection is established.\n    // \"dropSchema\": true -> Drop the schema when the connection is established (empty the database).\n    connection = await createConnection();\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => connection.close());\n\n  // Create or re-create the controller before each test.\n  beforeEach(() => controller = createController(ApiController));\n\n  // Define a nested group of tests.\n  describe('has a \"getTodos\" method that', () => {\n\n    // Define a unit test.\n    it('should handle requests at GET /todos.', () => {\n      // Throw an error and make the test fail if the http method of `getTodos` is not GET.\n      strictEqual(getHttpMethod(ApiController, 'getTodos'), 'GET');\n      // Throw an error and make the test fail if the path of `getTodos` is not /todos.\n      strictEqual(getPath(ApiController, 'getTodos'), '/todos');\n    });\n\n    // Define a unit test.\n    it('should return an HttpResponseOK.', async () => {\n      // Create fake todos.\n      const todo1 = new Todo();\n      todo1.text = 'Todo 1';\n\n      const todo2 = new Todo();\n      todo2.text = 'Todo 2';\n\n      // Save the todos.\n      await connection.manager.save([ todo1, todo2 ]);\n\n      const response = await controller.getTodos();\n      ok(isHttpResponseOK(response), 'response should be an instance of HttpResponseOK.');\n\n      const body = response.body;\n\n      ok(Array.isArray(body), 'The body of the response should be an array.');\n      strictEqual(body[0].text, 'Todo 1');\n      strictEqual(body[1].text, 'Todo 2');\n    });\n\n  });\n\n});\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Comme une m\xe9thode de contr\xf4le renvoie un objet ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", il est tr\xe8s facile de tester le statut et le corps de la r\xe9ponse.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Si la m\xe9thode du contr\xf4leur prend un objet ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," comme argument, vous pouvez en instancier un comme ceci : ",(0,i.kt)("inlineCode",{parentName:"p"},"new Context({ /* content of the express request object */})"),".")),(0,i.kt)("p",null,"Ex\xe9cutez les tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run test\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Cette commande surveille vos tests et vos fichiers test\xe9s dans les r\xe9pertoires ",(0,i.kt)("inlineCode",{parentName:"p"},"app/")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/"),". Lorsqu'un fichier est modifi\xe9, elle recompile et relance automatiquement vos tests.")),(0,i.kt)("p",null,"Vous devriez maintenant vous retrouver avec cette sortie :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sortie des tests unitaires",src:n(9727).Z})),(0,i.kt)("p",null,"F\xe9licitations ! Vous avez atteint la fin de ce tutoriel !"),(0,i.kt)("p",null,"Si vous avez des questions, n'h\xe9sitez pas \xe0 ouvrir une issue sur Github !"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Le code source complet est disponible ",(0,i.kt)("a",{parentName:"p",href:"https://foalts.org/simple-todo-list-source-code-v2.zip"},"ici"),".")))}p.isMDXComponent=!0},9727:function(e,t,n){"use strict";t.Z=n.p+"assets/images/unit-tests-output-92ff8a147084006f7e318c124a0f053e.png"}}]);