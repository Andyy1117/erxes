(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1710],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83050:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"mac",title:"Mac",sidebar_label:"Mac"},l={unversionedId:"developer/mac",id:"developer/mac",isDocsHomePage:!1,title:"Mac",description:"---",source:"@site/docs/developer/mac.md",sourceDirName:"developer",slug:"/developer/mac",permalink:"/developer/mac",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/developer/mac.md",version:"current",lastUpdatedBy:"Ariunbold Bayanmunkh",lastUpdatedAt:1659969125,formattedLastUpdatedAt:"8/8/2022",sidebar_label:"Mac",frontMatter:{id:"mac",title:"Mac",sidebar_label:"Mac"},sidebar:"docs",previous:{title:"Ubuntu",permalink:"/developer/ubuntu"},next:{title:"Choose your plugins",permalink:"/plugins/choose-your-plugins"}},s=[{value:"Preparing the installation",id:"preparing-the-installation",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Installing erxes",id:"installing-erxes",children:[]}]},{value:"Installing dependencies using docker",id:"installing-dependencies-using-docker",children:[{value:"Running erxes",id:"running-erxes",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The following documentation will guide you through the installation of an erxes project using ",(0,o.kt)("a",{href:"https://www.docker.com/",target:"_blank"},"Docker")," on ",(0,o.kt)("a",{href:"https://www.apple.com/macos/monterey/",target:"_blank"},"MacOs"),"."),(0,o.kt)("p",null,"Docker is an open platform that allows to develop, ship and run applications by using containers (i.e. packages containing all the parts an application needs to function, such as libraries and dependencies)."),(0,o.kt)("h3",{id:"preparing-the-installation"},"Preparing the installation"),(0,o.kt)("p",null,"erxes installation requires at least four software prerequisites to be already installed on your computer:"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Erxes code takes approximately 12GB storage space, make sure you have enough space in your device before going forward. "))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://github.com/git-guides/install-git",target:"_blank"},"Git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js"),": only LTS versions are supported (v14 and v16). Other versions of Node.js may not be compatible with the latest release of erxes. The 14.x version is most recommended by erxes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v6/commands/npm-install"},"npm")," and ",(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable"},"yarn"),"  (latest version) to run the erxes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04"},"Docker")," (v20.10.14 and higher) The 20.10.14 version is most recommended by erxes. Docker compose (v2.5.0 and higher)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")," latest version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/install-xcode-command-line-tools/"},"Xcode")," latest version")),(0,o.kt)("h3",{id:"installing-erxes"},"Installing erxes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an empty folder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir example\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In your empty folder, where the new erxes project will be created, and it defines the database and erxes plugins to use.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd example\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run following command in the folder. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/erxes/erxes.git\n")),(0,o.kt)("h2",{id:"installing-dependencies-using-docker"},"Installing dependencies using docker"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In the folder, create dock directory using following command. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir dock\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Go to the dock folder using following command.  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd dock\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Run sudo nano or sudo vim command to create .yml file. "))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create a docker-compose.yaml file, then copy the following script in the newly created file. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'version: \'3.6\'\nservices:\n  mongo:\n    hostname: mongo\n    image: mongo:4.0.10\n    # container_name: mongo\n    ports:\n      - "27017:27017"\n    networks:\n      - erxes-net\n    healthcheck:\n      test: test $$(echo "rs.initiate().ok || rs.status().ok" | mongo --quiet) -eq 1\n      interval: 2s\n      timeout: 2s\n      retries: 200\n    command: ["--replSet", "rs0", "--bind_ip_all"]\n    extra_hosts:\n      - "mongo:127.0.0.1"\n    volumes:\n      - ./data/db:/data/db\n\n  redis:\n    image: \'redis\'\n    # container_name: redis\n    # command: redis-server --requirepass pass\n    ports:\n      - "6379:6379"\n    networks:\n      - erxes-net\n\n  rabbitmq:\n    image: rabbitmq:3.7.17-management\n    # container_name: rabbitmq\n    restart: unless-stopped\n    hostname: rabbitmq\n    ports:\n      - "15672:15672"\n      - "5672:5672"\n    networks:\n      - erxes-net\n    # RabbitMQ data will be saved into ./rabbitmq-data folder.\n    volumes:\n      - ./rabbitmq-data:/var/lib/rabbitmq\n\nnetworks:\n  erxes-net:\n    driver: bridge\n\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Run the following command in the folder where above file exists.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo docker-compose up -d \n")),(0,o.kt)("h3",{id:"running-erxes"},"Running erxes"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please make sure you have to change your directory to erxes/cli. "))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Go back to erxes folder using following command. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ../erxes\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Switch a federation branch by using following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout federation\n")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"In erxes folder, Install node modules by using following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Install pm2 by using following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo npm install -g pm2\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Frequently used ",(0,o.kt)("strong",{parentName:"p"},"pm2")," commands on erxes:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"pm2 list - Display all processes status"),(0,o.kt)("li",{parentName:"ul"},"pm2 kill - Will remove all processes from pm2 list"),(0,o.kt)("li",{parentName:"ul"},"pm2 logs -f - Display all processes logs in streaming (gateway, plugin-name etc.)"),(0,o.kt)("li",{parentName:"ul"},"pm2 restart all - Restart all processes")))),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Run following command to change the folder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd cli\n")),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Install node modules in the erxes/cli directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Copy configs.json.sample, then convert it to configs.json.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp configs.json.sample configs.json\n")),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Run following command to start your erxes project. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/erxes.js dev\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you see this screen, you have successfully install erxes XOS. Congratulations")," \ud83c\udf89\ud83c\udf89\ud83c\udf89"))}c.isMDXComponent=!0}}]);