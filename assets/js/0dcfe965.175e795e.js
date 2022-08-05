(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2653],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85505:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(74034),a=n(79973),r=(n(67294),n(3905)),i={id:"aws-ses",title:"AWS SES integration"},l={unversionedId:"developer/integrations-overview/aws-ses",id:"developer/integrations-overview/aws-ses",isDocsHomePage:!1,title:"AWS SES integration",description:"Amazon Simple Email Service enables you to send and receive email using a reliable and scalable email platform. Set up your custom Amazon simple email service account.",source:"@site/docs/developer/integrations-overview/AWS-SES.md",sourceDirName:"developer/integrations-overview",slug:"/developer/integrations-overview/aws-ses",permalink:"/developer/integrations-overview/aws-ses",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/developer/integrations-overview/AWS-SES.md",version:"current",lastUpdatedBy:"M. Munkhsaihan",lastUpdatedAt:1621341581,formattedLastUpdatedAt:"5/18/2021",frontMatter:{id:"aws-ses",title:"AWS SES integration"},sidebar:"docs",previous:{title:"AWS S3 integration",permalink:"/developer/integrations-overview/aws-s3"},next:{title:"Nylas integrations",permalink:"/developer/integrations-overview/nylas-integrations"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Amazon Simple Email Service enables you to send and receive email using a reliable and scalable email platform. Set up your custom Amazon simple email service account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuration:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to Erxes Settings => System config => General System Config => AWS SES.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AWS_SES_ACCESS_KEY_ID='your aws account access key id'\nAWS_SES_SECRET_ACCESS_KEY='your aws account secret key'\nAWS_REGION='region of your account'\nAWS_SES_CONFIG_SET=''\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AWS_SES_CONFIG_SET")," is detect bounce, complaints, click and open events which you can be use this option. This name can be anything."),(0,r.kt)("h4",{id:"configure-amazon-ses-and-amazon-sns-to-track-each-email-responses"},"Configure Amazon SES and Amazon SNS to track each email responses."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com"}," Log in to your AWS Management Console. ")),(0,r.kt)("li",{parentName:"ol"},"Click on your user name at the top right of the page."),(0,r.kt)("li",{parentName:"ol"},"Click on the My Security Credentials link from the drop-down menu."),(0,r.kt)("li",{parentName:"ol"},"Click on the Users menu from left Sidebar."),(0,r.kt)("li",{parentName:"ol"},"Click on the Add user."),(0,r.kt)("li",{parentName:"ol"},"Then create your username and check Programmatic access type and click next."),(0,r.kt)("li",{parentName:"ol"},"Click on the Create group then write group name and check amazonSesFullAccess and amazonSNSFullAccess."),(0,r.kt)("li",{parentName:"ol"},"Then check your created group and click on the Next button."),(0,r.kt)("li",{parentName:"ol"},"Finally click on the create user and copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_SES_ACCESS_KEY_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_SES_SECRET_ACCESS_KEY"),".")),(0,r.kt)("h4",{id:"to-find-your-aws_region"},"To find your ",(0,r.kt)("inlineCode",{parentName:"h4"},"AWS_REGION"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com"}," Log in to your AWS Management Console.")),(0,r.kt)("li",{parentName:"ol"},"Click on services menu at the top left of the page."),(0,r.kt)("li",{parentName:"ol"},"Find Simple Email Service and Copy region code from url.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you choose not available region")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your region at the top right of the menu."),(0,r.kt)("li",{parentName:"ol"},"Select any active region from list."),(0,r.kt)("li",{parentName:"ol"},"Copy the selected Region code.\n",(0,r.kt)("em",{parentName:"li"},"(example: us-east-1, us-west-2, ap-south-1, ap-southeast-2, eu-central-1, eu-west-1)"))),(0,r.kt)("h4",{id:"determine-whether-your-account-is-in-the-sandbox-or-not"},"Determine whether your account is in the sandbox or not."),(0,r.kt)("p",null,"Amazon places all new accounts in the Amazon SES sandbox. While your account is in the sandbox, you can use all of the features of Amazon SES. However, when your account is in the sandbox, Amazon have applied the following restrictions to your account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can only send mail to verified email addresses and domains, or to the Amazon SES mailbox simulator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can only send mail from verified email addresses and domains."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Verify it for following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ses/"},"Open the Amazon SES console at https://console.aws.amazon.com/ses/")),(0,r.kt)("li",{parentName:"ol"},"Use the Region selector to choose an AWS Region."),(0,r.kt)("li",{parentName:"ol"},"If your account is in the sandbox in the AWS Region that you selected, you see a banner at the top of the page that resembles the example in the following figure.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/amazon.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If the banner doesn't appear on this page, then your account is no longer in the sandbox in the current Region.")),(0,r.kt)("p",null,"You can also determine whether your account is in the sandbox by sending email to an address that you haven't verified. If your account is in the sandbox, you receive an error message stating that the destination address isn't verified."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"If you move out of the Sandbox,")," follow the instructions described ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html"},"here")," to move out of the Amazon SES Sandbox.")))}u.isMDXComponent=!0}}]);