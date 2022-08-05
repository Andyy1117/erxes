(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56],{82964:function(n,t,e){"use strict";e.d(t,{u:function(){return c},P:function(){return l}});var o=e(67294),r=e(60641),i=e(69713).Z,a=e(50210);function c(n,t){return o.createElement(o.Fragment,null,n&&o.createElement(a.Z,{className:"language-javascript"},"import "+n+' from "erxes-ui/lib/components/'+n+'";'),t&&o.createElement(o.Fragment,null,o.createElement("p",null,"required prop - ",o.createElement("span",{className:r.Z.required},"*")),o.createElement(i,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,t.map((function(n,t){return o.createElement("tr",{key:t},n.map((function(n,t){return o.createElement("td",{key:t},"*"===n[n.length-1]?o.createElement(o.Fragment,null,n.slice(0,-1),o.createElement("span",{className:r.Z.required},"*")):o.createElement(o.Fragment,null,n))})))}))))))}function l(n){var t=JSON.stringify(n);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},75222:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var o=e(74034),r=e(79973),i=e(67294),a=e(3905),c=e(68027),l=e(60641),p=e(50210),s=e(82964);function d(n){var t=n.counter,e=n.text,o=n.image,r=n.sizes,a=n.type,d=n.table,u=void 0===d?[]:d,m=function(n,i,a,c,l){var p;return(p={data:"This is data",loading:!!n})[i]="emptyText"!==i&&"emptyContent"!==i&&"loadingContent"!==i||e,p[a]="emptyIcon"!==a&&"emptyImage"!==a||o,p[c]=c&&t,p[l]=l&&r,p},f=function(n,t,e,o,r){return i.createElement(i.Fragment,null,i.createElement("div",{className:l.Z.styled},i.createElement(c.Z,m(n,t,e,o,r))),i.createElement(p.Z,{className:"language-jsx"},"<>\n\t<DataWithLoader "+(a=m(n,t,e,o,r),(s=(s=(s=(s=(s=(s=(s=JSON.stringify(a)).replace(/0/g,"{0}")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/=true/g,"")).replace(/false/g,"{false}")).slice(0,s.length-1)+" />\n</>")));var a,s};return"loadtrue"===a?f("loading","objective"):"loadingcontent"===a?f("loading","loadingContent"):"loadfalse"===a?f(""):"count"===a?f("","emptyContent","","count"):"emptystateicon"===a?f("","emptyText","emptyIcon","count","size"):"emptystateimage"===a?f("","emptyText","emptyImage","count","size"):"APIdatewithloader"===a?(0,s.u)("DataWithLoader",u):null}var u={id:"datawithloader",title:"Data with loader"},m={unversionedId:"components/DatawithLoader/datawithloader",id:"components/DatawithLoader/datawithloader",isDocsHomePage:!1,title:"Data with loader",description:"Loading",source:"@site/docs/components/DatawithLoader/datawithloader.md",sourceDirName:"components/DatawithLoader",slug:"/components/DatawithLoader/datawithloader",permalink:"/components/DatawithLoader/datawithloader",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/components/DatawithLoader/datawithloader.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1638773199,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"datawithloader",title:"Data with loader"},sidebar:"components",previous:{title:"Chip",permalink:"/components/Chip/chip"},next:{title:"Empty content",permalink:"/components/EmptyContent/emptycontent"}},f=[{value:"Loading",id:"loading",children:[]},{value:"Count",id:"count",children:[{value:"Empty content",id:"empty-content",children:[]},{value:"Empty state",id:"empty-state",children:[]}]},{value:"API",id:"api",children:[]}],g={toc:f};function h(n){var t=n.components,e=(0,r.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"loading"},"Loading"),(0,a.kt)("p",null,'When loading is "true" it shows spinner or loading content, and when it\'s "false" it shows data. '),(0,a.kt)(d,{type:"loadtrue",mdxType:"DatawithLoaderComponent"}),(0,a.kt)(d,{type:"loadingcontent",text:"Loading...",mdxType:"DatawithLoaderComponent"}),(0,a.kt)(d,{type:"loadfalse",mdxType:"DatawithLoaderComponent"}),(0,a.kt)("h2",{id:"count"},"Count"),(0,a.kt)("p",null,'When count is "0" it shows empty content or empty state. '),(0,a.kt)("h3",{id:"empty-content"},"Empty content"),(0,a.kt)(d,{type:"count",counter:0,image:"info-circle",text:"This is empty content",mdxType:"DatawithLoaderComponent"}),(0,a.kt)("h3",{id:"empty-state"},"Empty state"),(0,a.kt)("h4",{id:"icon"},"Icon"),(0,a.kt)("p",null,"You can costumize the empty state by giving text (with ",(0,a.kt)("code",null,"emptyText"),"), icon (with ",(0,a.kt)("code",null,"emptyIcon"),"). And also change the icon size with ",(0,a.kt)("code",null,"size")," prop."),(0,a.kt)(d,{type:"emptystateicon",counter:0,image:"info-circle",text:"Empty state",sizes:"small",mdxType:"DatawithLoaderComponent"}),(0,a.kt)("h4",{id:"image"},"Image"),(0,a.kt)("p",null,"You can costumize the empty state by giving text (with ",(0,a.kt)("code",null,"emptyText"),"), image (with ",(0,a.kt)("code",null,"emptyImage"),").  "),(0,a.kt)(d,{type:"emptystateimage",counter:0,image:"https://erxes.io/static/images/logo/logo_dark.svg",text:"Empty state",mdxType:"DatawithLoaderComponent"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)(d,{type:"APIdatewithloader",table:[["data*","any","","Define data"],["count","any","","Define count"],["loading*","boolean","","Loading state"],["emptyText","string","There is no data","Define text of emptyState"],["emptyIcon","string","","Define icon of emptyState"],["emptyImage","string","","Define image of emptyState"],["size","string","full","Define size of icon in emptyState"],["objective","boolean","false","Make the spinner objective"],["emptyContent","React.ReactNode","",'Define content when count is "0"'],["loadingContent","React.ReactNode","",'Define content when loading is "true"']],mdxType:"DatawithLoaderComponent"}))}h.isMDXComponent=!0},68027:function(n,t,e){"use strict";var o,r=e(69061),i=e(16719),a=e(67294),c=(o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return c(t,n),t.prototype.showData=function(){var n=this.props,t=n.loading,e=n.count,o=n.data,c=n.emptyIcon,l=n.emptyImage,p=n.emptyText,s=n.size,d=n.objective,u=n.emptyContent,m=n.loadingContent;return t?m||a.createElement(i.Z,{objective:d}):0===e?u||a.createElement(r.Z,{text:p||"There is no data",size:s,icon:c,image:l}):o},t.prototype.render=function(){return this.showData()},t.defaultProps={emptyText:"There is no data",emptyIcon:"",emptyImage:"",size:"full",objective:!1},t}(a.Component);t.Z=l},69061:function(n,t,e){"use strict";var o,r,i=e(92524),a=e(67294),c=e(29163),l=e(131),p=e.n(l),s=e(89816),d=e(54656),u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},m=p()(c.ZP.div)(o||(o=u(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 14px;\n  padding: 20px;\n  color: ",";\n\n  img {\n    max-height: 260px;\n    margin: 0 auto 20px auto;\n    max-width: 60%;\n    width: fit-content;\n  }\n\n  span {\n    max-width: 600px;\n    color: ",";\n  }\n\n  ",";\n\n  > i {\n    font-size: ",";\n    line-height: ",";\n    color: ",";\n  }\n\n  a, button {\n    align-self: center;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 14px;\n  padding: 20px;\n  color: ",";\n\n  img {\n    max-height: 260px;\n    margin: 0 auto 20px auto;\n    max-width: 60%;\n    width: fit-content;\n  }\n\n  span {\n    max-width: 600px;\n    color: ",";\n  }\n\n  ",";\n\n  > i {\n    font-size: ",";\n    line-height: ",";\n    color: ",";\n  }\n\n  a, button {\n    align-self: center;\n  }\n"])),s.O9.colorCoreGray,(function(n){return n.light&&s.O9.colorWhite}),(function(n){return"small"===n.hugeness?"\n        min-height: 100px;\n        font-size: 12px;\n        padding: 10px 20px;\n      ":"\n        bottom: 0;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 0;\n      "}),(function(n){return"small"===n.hugeness?"28px":"12vh"}),(function(n){return"small"===n.hugeness?"40px":"18vh"}),s.O9.colorCoreLightGray),f=c.ZP.div(r||(r=u(["\n  margin-top: 15px;\n\n  > a {\n    margin-right: 10px;\n\n    &:last-child {\n      margin: 0;\n    }\n  }\n"],["\n  margin-top: 15px;\n\n  > a {\n    margin-right: 10px;\n\n    &:last-child {\n      margin: 0;\n    }\n  }\n"])));t.Z=function(n){var t=n.text,e=n.icon,o=n.image,r=n.size,c=void 0===r?"small":r,l=n.extra,p=n.light;return a.createElement(m,{hugeness:c,light:p},e?a.createElement(d.Z,{icon:e}):a.createElement("img",{src:o,alt:t}),a.createElement("span",null,(0,i.__)(t)),l&&a.createElement(f,null,l))}},54656:function(n,t,e){"use strict";var o,r=e(67294),i=e(29163),a=e(131),c=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},l=function(){return(l=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},p=e.n(a)()(i.ZP.i)(o||(o=c(["\n  font-size: ",";\n  color: ",";\n"],["\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.size?n.size+"px":"inherit"}),(function(n){return n.color&&n.color}));t.Z=function(n){var t=n.isActive,e=n.color||"";return t&&(e="black"),r.createElement(p,l({},n,{className:"icon-"+n.icon,color:e}))}},16719:function(n,t,e){"use strict";var o,r,i=e(30783),a=e(67294),c=e(29163),l=e(131),p=e.n(l),s=e(89816),d=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},u=p()(c.ZP.div)(o||(o=d(["\n  height: ",";\n  position: ",";\n"],["\n  height: ",";\n  position: ",";\n"])),(function(n){return n.objective&&"100px"}),(function(n){return n.objective&&"relative"})),m=p()(c.ZP.div)(r||(r=d(["\n  position: absolute;\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  width: ","px;\n  height: ","px;\n  margin-left: -","px;\n  margin-top: -","px;\n  animation: "," 0.75s linear infinite;\n  border: 2px solid ",";\n  border-top-color: ",";\n  border-right-color: ",";\n  border-radius: 100%;\n"],["\n  position: absolute;\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  width: ","px;\n  height: ","px;\n  margin-left: -","px;\n  margin-top: -","px;\n  animation: "," 0.75s linear infinite;\n  border: 2px solid ",";\n  border-top-color: ",";\n  border-right-color: ",";\n  border-radius: 100%;\n"])),(function(n){return n.left}),(function(n){return n.right}),(function(n){return n.top}),(function(n){return n.bottom}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size&&n.size/2}),i.U1,s.O9.borderDarker,s.O9.colorSecondary,s.O9.colorSecondary);t.Z=function(n){var t=n.objective,e=void 0!==t&&t,o=n.size,r=void 0===o?26:o,i=n.top,c=void 0===i?"50%":i,l=n.bottom,p=void 0===l?"auto":l,s=n.left,d=void 0===s?"50%":s,f=n.right,g=void 0===f?"auto":f;return a.createElement(u,{objective:e},a.createElement(m,{size:r,top:c,bottom:p,right:g,left:d}))}},65634:function(n,t,e){"use strict";e.d(t,{II:function(){return E},bL:function(){return C},Ph:function(){return Z},Kx:function(){return j},Y8:function(){return I},XZ:function(){return T},lX:function(){return L},__:function(){return D},wX:function(){return _},A0:function(){return M},jj:function(){return B},Ex:function(){return W}});var o,r,i,a,c,l,p,s,d,u,m,f,g,h,x=e(45949),b=e(29163),y=e(131),w=e.n(y),v=e(89816),k=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},O="15px",z="12px",P="34px",D=w()(b.ZP.label)(o||(o=k(["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"],["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"])),(function(n){return n.uppercase?"uppercase":"none"}),v.cp.fontWeightMedium,v.O9.textPrimary,v.cp.fontSizeUppercase,v.O9.colorCoreRed),_=w()(b.ZP.div)(i||(i=k(["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"],["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.horizontal&&(0,b.iv)(r||(r=k(["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "],["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "])))}),v.MB.unitSpacing,v.O9.colorCoreGray),E=w()(b.ZP.input)(a||(a=k(["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"],["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"])),P,v.MB.unitSpacing,v.O9.textPrimary,(function(n){return n.hasError?v.O9.colorCoreRed:v.O9.colorShadowGray}),(function(n){return n.round?"\n        font-size: 13px;\n        border: 1px solid "+v.O9.borderDarker+";\n        border-radius: 20px;\n        padding: 5px 20px;\n      ":""}),v.O9.colorLightGray,v.O9.colorSecondary),C=w()(b.ZP.div)(c||(c=k(["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"],["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"])),(function(n){return n.hasError?v.O9.colorCoreRed:v.O9.colorShadowGray}),P,v.O9.colorCoreGray),Z=(0,b.ZP)(E.withComponent("select"))(l||(l=k(["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"],["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"])),P,v.MB.coreSpacing),j=w()((0,b.ZP)(E.withComponent("textarea")))(p||(p=k(["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"],["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"])),(function(n){return n.maxHeight&&n.maxHeight+"px"})),L=b.ZP.label(s||(s=k(["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"]))),S=w()(b.ZP.input)(d||(d=k(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"],["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"])),(function(n){return n.disabled&&"not-allowed"}),(function(n){return n.color?n.color:v.O9.colorLightGray}),"0px",v.O9.colorWhite,"2px",(function(n){return n.color?(0,x.m4)(n.color,.7):v.O9.colorShadowGray}),v.O9.colorWhite,O,O,O,(function(n){return n.disabled&&"not-allowed"}),v.O9.colorWhite,"0px","2px",z,O,z,O,z,O,z),I=(0,b.ZP)(S)(u||(u=k(["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"],["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"])),v.O9.colorSecondary),T=w()((0,b.ZP)(S))(m||(m=k(["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"],["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"])),O,O,O,O,v.O9.colorWhite,(function(n){return n.color?n.color:v.O9.colorSecondary})),B=b.ZP.label(f||(f=k(["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"],["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"])),v.O9.colorCoreRed,v.MB.unitSpacing-3),M=b.ZP.span(g||(g=k(["\n  flex: 1;\n"],["\n  flex: 1;\n"]))),W=b.ZP.div(h||(h=k(["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"],["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"])),v.MB.unitSpacing,v.MB.unitSpacing,v.MB.unitSpacing)},69713:function(n,t,e){"use strict";e.d(t,{Z:function(){return h}});var o,r,i,a=e(67294),c=e(29163),l=e(131),p=e.n(l),s=e(89816),d=e(65634),u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},m=p()(c.ZP.table)(r||(r=u(["\n  ",";\n"],["\n  ",";\n"])),(function(n){return(0,c.iv)(o||(o=u(["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "],["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "])),n.whiteSpace||"",s.O9.borderPrimary,s.O9.textPrimary,s.MB.unitSpacing-2,n.alignTop&&"top",d.lX,d.II,s.O9.colorCoreGray,s.cp.fontSizeUppercase,s.O9.bgLight,n.hover?"tr:hover td { background-color: #f5f5f5; }":null,n.bordered?"th, td { border-bottom: 1px solid "+s.O9.borderPrimary+"; }":null,n.striped?"tr:nth-of-type(odd) td { background-color: "+s.O9.bgLightPurple+"; }":null,s.O9.borderDarker,s.MB.unitSpacing-2,s.MB.coreSpacing-2,s.MB.coreSpacing,s.MB.coreSpacing)})),f=(i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),g=function(){return(g=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return f(t,n),t.prototype.render=function(){return a.createElement(m,g({},this.props))},t.defaultProps={required:!1,striped:!1,bordered:!1,condensed:!1,hover:!1,responsive:!1,alignTop:!1},t}(a.Component)},30783:function(n,t,e){"use strict";e.d(t,{U1:function(){return h},Ji:function(){return x},qw:function(){return b},lL:function(){return y},Ag:function(){return w}});var o,r,i,a,c,l,p,s,d,u,m,f=e(29163),g=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},h=(0,f.F4)(o||(o=g(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"],["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),x=((0,f.F4)(r||(r=g(["\n  0%{\n    transform:translateY(0px)\n  }\n  28%{\n    transform:translateY(-5px)\n  }\n  44%{\n    transform:translateY(0px)\n  }\n"],["\n  0%{\n    transform:translateY(0px)\n  }\n  28%{\n    transform:translateY(-5px)\n  }\n  44%{\n    transform:translateY(0px)\n  }\n"]))),(0,f.F4)(i||(i=g(["\n  0% {\n    opacity: 0;\n\t}\n\t\n  100% {\n    opacity: 1;\n  }\n"],["\n  0% {\n    opacity: 0;\n\t}\n\t\n  100% {\n    opacity: 1;\n  }\n"])))),b=(0,f.F4)(a||(a=g(["\n  0% {\n    transform: translateY(-20px);\n    opacity: 0.7;\n\t}\n\t\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateY(-20px);\n    opacity: 0.7;\n\t}\n\t\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),y=((0,f.F4)(c||(c=g(["\n  0% {\n    transform: translateX(20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateX(20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(l||(l=g(["\n  0% {\n    transform: translateX(-20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateX(-20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(p||(p=g(["\n  0%{transform:rotate(-10deg)}\n  28%{transform:rotate(10deg)}\n  10%{transform:rotate(20deg)}\n  18%{transform:rotate(-20deg)}\n  28%{transform:rotate(20deg)}\n  30%,100%{transform:rotate(0deg)}\n"],["\n  0%{transform:rotate(-10deg)}\n  28%{transform:rotate(10deg)}\n  10%{transform:rotate(20deg)}\n  18%{transform:rotate(-20deg)}\n  28%{transform:rotate(20deg)}\n  30%,100%{transform:rotate(0deg)}\n"])))),w=((0,f.F4)(s||(s=g(["\n  from {\n    background-position:0 0;\n  }\n\n  to {\n    background-position:-10000px 5000px;\n  }\n"],["\n  from {\n    background-position:0 0;\n  }\n\n  to {\n    background-position:-10000px 5000px;\n  }\n"]))),(0,f.F4)(d||(d=g(["\n  from {\n    background-position: 16px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n"],["\n  from {\n    background-position: 16px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n"]))));(0,f.F4)(u||(u=g(["\n  0% { box-shadow: 0 0 -5px 0 #63D2D6; }\n  40% { box-shadow: 0 0 10px 0 #63D2D6; }\n  60% { box-shadow: 0 0 10px 0 #63D2D6; }\n  100% { box-shadow: 0 0 -5px 0 #63D2D6; }\n"],["\n  0% { box-shadow: 0 0 -5px 0 #63D2D6; }\n  40% { box-shadow: 0 0 10px 0 #63D2D6; }\n  60% { box-shadow: 0 0 10px 0 #63D2D6; }\n  100% { box-shadow: 0 0 -5px 0 #63D2D6; }\n"]))),(0,f.F4)(m||(m=g(["\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"],["\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"])))},60641:function(n,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);