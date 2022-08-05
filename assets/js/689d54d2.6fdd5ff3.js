(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1532],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68273:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(74034),i=n(79973),o=(n(67294),n(3905)),a={id:"environment-variables",title:"Environment variables"},l={unversionedId:"administrator/environment-variables",id:"administrator/environment-variables",isDocsHomePage:!1,title:"Environment variables",description:"On this page you can see how to configure the work environment. It is very important to follow the steps as indicated.",source:"@site/docs/administrator/environment-variables.md",sourceDirName:"administrator",slug:"/administrator/environment-variables",permalink:"/administrator/environment-variables",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/administrator/environment-variables.md",version:"current",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590116873,formattedLastUpdatedAt:"5/22/2020",frontMatter:{id:"environment-variables",title:"Environment variables"},sidebar:"docs",previous:{title:"Creating first user",permalink:"/administrator/creating-first-user"},next:{title:"System config",permalink:"/administrator/system-config"}},s=[{value:"MongoDB",id:"mongodb",children:[]},{value:"Redis",id:"redis",children:[]},{value:"General configs",id:"general-configs",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On this page you can see how to configure the work environment. It is very important to follow the steps as indicated."),(0,o.kt)("h2",{id:"mongodb"},"MongoDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MONGO_URL=mongodb://localhost/erxes\nTEST_MONGO_URL=mongodb://localhost/test\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"MONGO_URL")," is your application's database URL.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"TEST_MONGO_URL")," is when you run testing."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn test\n")),(0,o.kt)("h2",{id:"redis"},"Redis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REDIS_HOST=localhost\nREDIS_PORT=6379\nREDIS_PASSWORD=\n")),(0,o.kt)("p",null,"Redis is necessary for reactive subscriptions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REDIS_HOST")," is your redis server's URL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REDIST_PORT")," defines which port is redis running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REDIS_PASSWORD")," fill this if you have password on your redis server.")),(0,o.kt)("h2",{id:"general-configs"},"General configs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTPS=false\nMAIN_APP_DOMAIN=http://localhost:3000\nWIDGETS_DOMAIN=http://localhost:3200\nDOMAIN=http://localhost:3300\nNODE_ENV=development\nPORT=3300\n\nERXES_PATH=''\nAPI_PATH=''\nWIDGET_PATH=''\nWIDGET_API_PATH=''\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTPS"),"this is boolean variables, set true if you are using secure ssl."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MAIN_APP_DOMAIN")," this is your main application's domain where is erxes/erxes repository is running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WIDGETS_DOMAIN")," your widget application's domain where is erxes/widgets repository is running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DOMAIN")," this is your erxes-api application's domain where is erxes/erxes-api repository is running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," set to production on live mode, set to development on development mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PORT")," this option will define which port is your application running, you can change to any port you want.")))}c.isMDXComponent=!0}}]);