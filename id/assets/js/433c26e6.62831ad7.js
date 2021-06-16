(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2184],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9615:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=["components"],l={title:"Configuration"},s={unversionedId:"deployment-and-environments/configuration",id:"version-1.x/deployment-and-environments/configuration",isDocsHomePage:!1,title:"Configuration",description:"In FoalTS, configuration refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port.",source:"@site/versioned_docs/version-1.x/deployment-and-environments/configuration.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/configuration",permalink:"/id/docs/1.x/deployment-and-environments/configuration",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/deployment-and-environments/configuration.md",version:"1.x",frontMatter:{title:"Configuration"},sidebar:"someSidebar",previous:{title:"Limit Repeated Requests",permalink:"/id/docs/1.x/cookbook/limit-repeated-requests"},next:{title:"Ship to Production",permalink:"/id/docs/1.x/deployment-and-environments/ship-to-production"}},p=[{value:"Architecture of a Configuration File",id:"architecture-of-a-configuration-file",children:[]},{value:"Accessing Configuration Values",id:"accessing-configuration-values",children:[{value:"The <code>Config.get2</code> method",id:"the-configget2-method",children:[]},{value:"The <code>Config.getOrThrow</code> method",id:"the-configgetorthrow-method",children:[]},{value:"The deprecated <code>Config.get</code> method",id:"the-deprecated-configget-method",children:[]}]},{value:"Configuration &amp; FoalTS Components",id:"configuration--foalts-components",children:[]},{value:"Precedence of the Configuration",id:"precedence-of-the-configuration",children:[]},{value:"Database Configuration (TypeORM)",id:"database-configuration-typeorm",children:[]},{value:"Advanced",id:"advanced",children:[{value:"Using <code>Config</code> as a Service",id:"using-config-as-a-service",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In FoalTS, ",(0,i.kt)("em",{parentName:"p"},"configuration")," refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port."),(0,i.kt)("p",null,"The framework encourages a ",(0,i.kt)("strong",{parentName:"p"},"strict separation between configuration and code")," and allows you to define your configuration in environment variables, in an ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file or in files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," directory. You can choose one of these techniques or use them all simultaneously."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Config directory structure")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|- config/\n| |- e2e.json\n| |- default.json\n| |- development.json\n| |- production.json\n| |- ...\n| '- test.json\n|- src/\n'- .env\n")),(0,i.kt)("h2",{id:"architecture-of-a-configuration-file"},"Architecture of a Configuration File"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of ",(0,i.kt)("inlineCode",{parentName:"em"},".env")," file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DATABASE_USERNAME=postgres\nDATABASE_PASSWORD=password\nSETTINGS_CSRF_SECRET=YKvV281Z8nbkPowDLkMTTIrg\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of a file in the ",(0,i.kt)("inlineCode",{parentName:"em"},"config/")," directory")),(0,i.kt)("p",null,"Both formats, JSON and YAML, are supported. Choose the one that suits you the best."),(0,i.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="JSON" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": 3001,\n  "settings": {\n    "csrf": false,\n    "debug": false,\n    "loggerFormat": "tiny",\n    "staticPath": "public/",\n    "session": {\n      "cookie": {\n        "path": "/"\n      },\n      "secret": "my-secret"\n    }\n  },\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n')),(0,i.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="YAML" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"port: 3001\n\nsettings:\n  csrf: false\n  debug: false\n  loggerFormat: tiny\n  staticPath: public/\n  session:\n    cookie:\n      path: /\n    secret: my-secret\n\ndatabase:\n  database: './db.sqlite3'\n")),(0,i.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"YAML support")),(0,i.kt)("p",{parentName:"blockquote"},"The use of YAML for configuration requires the installation of the package ",(0,i.kt)("inlineCode",{parentName:"p"},"yamljs"),"."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"npm install yamljs\n")),(0,i.kt)("p",{parentName:"blockquote"},"When creating a new project, you can also add the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--yaml")," to have all the configuration directly generated in YAML."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"foal createapp my-app --yaml\n")),(0,i.kt)("p",{parentName:"blockquote"},"The extension of the YAML files must be ",(0,i.kt)("inlineCode",{parentName:"p"},".yml"),".")),(0,i.kt)("h2",{id:"accessing-configuration-values"},"Accessing Configuration Values"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Config")," class provides two static methods for accessing configuration values: ",(0,i.kt)("inlineCode",{parentName:"p"},"get2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getOrThrow"),". Use of ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.get")," is also possible, but is deprecated."),(0,i.kt)("h3",{id:"the-configget2-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Config.get2")," method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available since v1.7")),(0,i.kt)("p",null,"This function takes the configuration key as parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\n\nconst secret = Config.get2('settings.jwt.secretOrPublicKey');\n")),(0,i.kt)("p",null,"In this example, FoalTS will try to retrieve the configuration value via:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY"),","),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file with the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY"),","),(0,i.kt)("li",{parentName:"ul"},"the JSON file ",(0,i.kt)("inlineCode",{parentName:"li"},"config/development.json")," with the path ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),","),(0,i.kt)("li",{parentName:"ul"},"the YAML file ",(0,i.kt)("inlineCode",{parentName:"li"},"config/development.yml")," with the path ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),","),(0,i.kt)("li",{parentName:"ul"},"the JSON file ",(0,i.kt)("inlineCode",{parentName:"li"},"config/default.json")," with the path ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),","),(0,i.kt)("li",{parentName:"ul"},"or the YAML file ",(0,i.kt)("inlineCode",{parentName:"li"},"config/default.yml")," with the path ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.jwt.secretOrPublicKey"),".")),(0,i.kt)("p",null,"If no value is found, the method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set, Foal will look at ",(0,i.kt)("inlineCode",{parentName:"p"},"${NODE_ENV}.json")," (resp. ",(0,i.kt)("inlineCode",{parentName:"p"},"${NODE_ENV}.yml"),") instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"development.json")," (resp. ",(0,i.kt)("inlineCode",{parentName:"p"},"development.yml"),")."),(0,i.kt)("h4",{id:"specifying-a-type"},"Specifying a type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\n\nconst foobar = Config.get2('settings.foobar', 'boolean|string');\n// foobar is of type boolean|string|undefined\n")),(0,i.kt)("p",null,"The method also accepts a second optional parameter to define the type of the returned value. When it is set, Foal checks that the configuration value has the correct type and if it does not, it throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigTypeError"),". In case the value is provided via an environment variable or the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, the method will try to convert it to the desired type (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'"true"')," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"). If it does not succeed, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigTypeError")," is also thrown."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Allowed types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean","|","string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number","|","string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"any")))),(0,i.kt)("h4",{id:"specifying-a-default-value"},"Specifying a default value"),(0,i.kt)("p",null,"The third optional parameter of the method allows you to define a default value if none is found in the configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const foobar = Config.get2('settings.foobar', 'boolean', false);\n// foobar is of type boolean\n")),(0,i.kt)("h3",{id:"the-configgetorthrow-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Config.getOrThrow")," method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available since v1.7")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const foobar = Config.getOrThrow('settings.foobar', 'boolean');\n// foobar is of type boolean\n")),(0,i.kt)("p",null,"This method has the same behavior as ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.get2")," except that it does not accept a default value. If no value is found in the configuration files or in an environment variable, the method will throw a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigNotFoundError"),"."),(0,i.kt)("h3",{id:"the-deprecated-configget-method"},"The deprecated ",(0,i.kt)("inlineCode",{parentName:"h3"},"Config.get")," method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Deprecated since v1.7")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\n\nconst debug = Config.get('settings.debug');\n")),(0,i.kt)("h4",{id:"type-coercion-and-type-variable"},"Type coercion and type variable"),(0,i.kt)("p",null,"You can force the TypeScript type returned by the variable this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const debug = Config.get<boolean>('settings.debug');\n")),(0,i.kt)("p",null,"But this is considered unsafe because the method does not check whether the returned value is of the desired type."),(0,i.kt)("p",null,"The method always attempts to convert values to a boolean or a number, regardless of the TypeScript type provided.. The value ",(0,i.kt)("inlineCode",{parentName:"p"},'"36"')," will always be returned as ",(0,i.kt)("inlineCode",{parentName:"p"},"36"),"."),(0,i.kt)("h4",{id:"specifying-a-default-value-1"},"Specifying a default value"),(0,i.kt)("p",null,"A default variable can be provided as second argument of the method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const debug = Config.get('settings.debug', false);\n")),(0,i.kt)("h2",{id:"configuration--foalts-components"},"Configuration & FoalTS Components"),(0,i.kt)("p",null,"As mentioned before, FoalTS encourages a strict separation between configuration and code. This is why most FoalTS components (services, controller, hooks) retreive their configuration directly from the config files or environment variables. They use the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," for this purpose."),(0,i.kt)("p",null,"For example, FoalTS uses the configuration key ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.debug")," to determine if error tracebacks should be returned in the ",(0,i.kt)("em",{parentName:"p"},"INTERNAL SERVER ERROR")," responses."),(0,i.kt)("p",null,"You should not create new configuration keys in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," namespace as this may conflict with future versions of the framework."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"default.yml (default)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"port: 3001\n\nsettings:\n  // You should not define your own configuration keys in this section.\n  // Use only those specified in the documentation.\n  debug: true\n\n// Custom configuration\nmy_custom_config:\n  config1: 'foobar'\n\n// Custom configuration\nmy_custom_config2:\n  age: 32\n\n")),(0,i.kt)("h2",{id:"precedence-of-the-configuration"},"Precedence of the Configuration"),(0,i.kt)("p",null,"Configuration specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file overrides the one defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," directory files. And configuration specified in environment variables overrides the one defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Use case")),(0,i.kt)("p",{parentName:"blockquote"},"PaaS providers often require that web applications be served on a specific port (",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"80"),", etc.) that may be different from the one you use locally. Usually, the value of this port is specified in an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT"),". With FoalTS configuration system, the port is automatically replaced when your project is deployed and the application works as expected.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," directory files also have a precedence system inside the directory. If your node environment is ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," (defined with the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"), then the ",(0,i.kt)("inlineCode",{parentName:"p"},"production.json")," file (if it exists) overrides the file ",(0,i.kt)("inlineCode",{parentName:"p"},"default.json"),"."),(0,i.kt)("h2",{id:"database-configuration-typeorm"},"Database Configuration (TypeORM)"),(0,i.kt)("p",null,"TypeORM uses a ",(0,i.kt)("a",{parentName:"p",href:"http://typeorm.io/#/using-ormconfig"},"different system")," for its configuration based on the file ",(0,i.kt)("inlineCode",{parentName:"p"},"ormconfig.js")," located at the root of the project directory."),(0,i.kt)("p",null,"You can however customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"ormconfig.js")," file to make it work with FoalTS configuration system."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ormconfig.js (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'sqlite',\n  database: Config.get('database.database'),\n  dropSchema: Config.get('database.dropSchema', false),\n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n  synchronize: Config.get('database.synchronize', false)\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"default.yml (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"port: 3001\n\nsettings:\n  ...\n\ndatabase:\n  database: './db.sqlite3'\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"test.yml (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  database: './test_db.sqlite3'\n  dropSchema: true\n  synchronize: true\n")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("h3",{id:"using-config-as-a-service"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"Config")," as a Service"),(0,i.kt)("p",null,"In order to mock the configuration during the tests, you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"Config")," as a service. This is particularly useful for testing reusable components (hook, service) whose behavior varies according to the configuration."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"app.controller.ts (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { Config, dependency, Get } from '@foal/core';\n\nexport class AppController {\n  @dependency\n  config: Config;\n\n  @Get('/')\n  get() {\n    const debug = this.config.get<boolean>('debug');\n    // Do something.\n  }\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"app.controller.spec.ts (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createController, ConfigMock } from '@foal/core';\n\nimport { AppController } from './app.controller';\n\ndescribe('AppController', () => {\n\n  let config: ConfigMock;\n  let controller: AppController;\n\n  before(() => {\n    config = new ConfigMock();\n    controller = createController(AppController, { config });\n  });\n\n  beforeEach(() => config.reset());\n\n  it('should do something (debug=true).', () => {\n    config.set(debug, true);\n    // ...\n  })\n\n  it('should do another something (debug=false).', () => {\n    config.set(debug, false);\n    // ...\n  })\n\n})\n")))}d.isMDXComponent=!0}}]);