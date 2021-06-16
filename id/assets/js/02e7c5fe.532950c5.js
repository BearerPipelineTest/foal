(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[284],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6388:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"The Todo Model",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},u={unversionedId:"tutorials/simple-todo-list/tuto-3-the-todo-model",id:"tutorials/simple-todo-list/tuto-3-the-todo-model",isDocsHomePage:!1,title:"The Todo Model",description:"Let&#8217;s create your first model. The CLI provides a useful command to generate a new file with an empty model.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/3-the-todo-model.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/3-the-todo-model",permalink:"/id/docs/tutorials/simple-todo-list/3-the-todo-model",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/3-the-todo-model.md",version:"current",sidebarPosition:3,frontMatter:{title:"The Todo Model",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/id/docs/tutorials/simple-todo-list/2-introduction"},next:{title:"The Shell Script create-todo",permalink:"/id/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let","\u2019","s create your first model. The CLI provides a useful command to generate a new file with an empty model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate entity todo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"FoalTS uses ",(0,a.kt)("a",{parentName:"p",href:"http://typeorm.io"},"TypeORM"),", a complete ",(0,a.kt)("em",{parentName:"p"},"Object-Relational Mapper"),", to communicate with the database(s). In TypeORM, simple models are called ",(0,a.kt)("em",{parentName:"p"},"entities")," and are classes decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," decorator.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Every new project in FoalTS uses an ",(0,a.kt)("inlineCode",{parentName:"p"},"SQLite")," database as it does not require any additional installation. But TypeORM supports many other databases. We will keep this one in this tutorial for simplicity.")),(0,a.kt)("p",null,"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"todo.entity.ts")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/entities")," directory and add a ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Todo extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n\n")),(0,a.kt)("p",null,"This class is the representation of the SQL table ",(0,a.kt)("inlineCode",{parentName:"p"},"todo"),". Currently, this table does not exist in the database. You will have to create it."),(0,a.kt)("p",null,"You can do this manually, using a database software for example, or use migrations, a programmatic way to update a database schema. The advantage of using migrations is that you can create, update and delete your tables directly from the definition of your entities. They also ensure that all your environments (prod, dev) and co-developers have the same table definitions."),(0,a.kt)("p",null,"Let","\u2019","s see how to use them."),(0,a.kt)("p",null,"First run the following command to generate your migration file. TypeORM will compare your current database schema with the definition of your entities and generate the appropriate SQL queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run makemigrations\n")),(0,a.kt)("p",null,"A new file appears in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/migrations/")," directory. Open it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1562755564200 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`, undefined);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`DROP TABLE "user"`, undefined);\n        await queryRunner.query(`DROP TABLE "todo"`, undefined);\n    }\n\n}\n\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"up")," method contains all the SQL queries that will be executed during the migration."),(0,a.kt)("p",null,"Then run the migration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run migrations\n")),(0,a.kt)("p",null,"TypeORM examines all the migrations that have been run previously (none in this case) and executes the new ones."),(0,a.kt)("p",null,"Your database (",(0,a.kt)("inlineCode",{parentName:"p"},"db.sqlite3"),") now contains a new table named ",(0,a.kt)("inlineCode",{parentName:"p"},"todo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             todo                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| text       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alternatively, you can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronize")," option in your configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"config/default.json"),". When set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the database schema is auto created from the entities definition on every application launch. You do not need migrations in this case. However, although this behavior may be useful during debug and development, it is not suitable for a production environment (you could lose production data).")))}d.isMDXComponent=!0}}]);