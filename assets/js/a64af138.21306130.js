(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{61088:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Z},frontMatter:function(){return E},metadata:function(){return z},toc:function(){return j}});var o=e(74034),r=e(79973),i=e(67294),a=e(3905),l=e(92524),c=e(29163),p=e(45428),d=e(89816),s=e(45949),u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},b=function(){return(b=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},m=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]])}return e},f=c.ZP.li(h||(h=u(["\n  display: inline-block;\n  color: ",";\n  text-transform: capitalize;\n  padding-right: 40px;\n\n  > a {\n    text-decoration: none;\n    color: ",";\n    padding: 14px 0;\n    display: block;\n    position: relative;\n\n    &.active::after {\n      content: '';\n      background: ",";\n      width: 100%;\n      height: 2px;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding-right: 10px;\n  }\n"],["\n  display: inline-block;\n  color: ",";\n  text-transform: capitalize;\n  padding-right: 40px;\n\n  > a {\n    text-decoration: none;\n    color: ",";\n    padding: 14px 0;\n    display: block;\n    position: relative;\n\n    &.active::after {\n      content: '';\n      background: ",";\n      width: 100%;\n      height: 2px;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding-right: 10px;\n  }\n"])),(0,s.m4)(d.O9.colorCoreDarkGray,.9),d.O9.colorCoreDarkGray,d.O9.colorSecondary);var h,g=function(n){var t=n.to,e=n.title,o=n.children,r=m(n,["to","title","children"]),a={to:t,title:e};return i.createElement(f,null,i.createElement(p.OL,b({},r,a,{exact:!0}),o))},x=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},y=c.ZP.ul(w||(w=x(["\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-size: 14px;\n\n  > span {\n    padding: 14px 40px 14px 0;\n    cursor: pointer;\n  }\n"],["\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-size: 14px;\n\n  > span {\n    padding: 14px 40px 14px 0;\n    cursor: pointer;\n  }\n"])));var w,k=function(n){var t=n.items,e=n.additionalMenuItem,o=function(t){var e,o=window.localStorage.getItem("pagination:perPage");try{e=JSON.parse(o||"")}catch(n){e={}}if(t.includes("?")){var r=t.split("?")[0];return!t.includes("perPage")&&e[r]?t+"&perPage="+e[r]:t}return e[t]?t+"?perPage="+e[t]:t};return t?i.createElement(y,null,t.map((function(n){return i.createElement(g,{to:o(n.link)||"",key:n.title},(0,l.__)(n.title))})),e):null},v=e(45612),O=e(50210),S=e(69713),P=e(60641);function _(n){var t,e,o,r=n.type,a=n.add,l=[{title:"Submenu 1",link:""},{title:"Submenu 2",link:""},{title:"Submenu 3",link:""}],c=function(n){return{items:l,additionalMenuItem:a&&n}};return"undefined"==typeof window?null:"api"===r?i.createElement(i.Fragment,null,i.createElement(O.Z,{className:"language-javascript"},'import Submenu from "erxes-ui/lib/components/subMenu/Submenu";'),i.createElement("p",null,"required prop - ",i.createElement("span",{className:P.Z.required},"*")),i.createElement(S.Z,null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",{colSpan:"2"},"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Defualt"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",{rowSpan:"2"},"items (array)"),i.createElement("td",null,"title",i.createElement("span",{className:P.Z.required},"*")),i.createElement("td",null,"string"),i.createElement("td",null),i.createElement("td",null,"Defines submenu title")),i.createElement("tr",null,i.createElement("td",null,"link"),i.createElement("td",null,"string"),i.createElement("td",null),i.createElement("td",null,"Define the path of where to go when clicked")),i.createElement("tr",null,i.createElement("td",{colSpan:"2"},"additionalMenuItem"),i.createElement("td",null,"React.ReactNode"),i.createElement("td",null),i.createElement("td",null,"Define additional sub menu item that will be displayed right side of sub menu"))))):(t=i.createElement(v.Z,null,"Additional item"),e="<Button>Additional item</Button>",i.createElement(i.Fragment,null,i.createElement(k,c(t)),i.createElement(O.Z,{className:"language-jsx"},"<>\n\t<Submenu "+(o=c(e),JSON.stringify(o).replace(/}],"additionalMenuItem":"/g,"}]} additionalMenuItem={").replace(/{"items":/g,"items={").replace(/":/g,":").replace(/Additional item"}/g,'Additional item"').replace(/}}/g,"}").replace(/"title/g,"title").replace(/"link/g," link").replace(/>"/g,">")+" />\n</>"))))}var E={id:"submenu",title:"SubMenu"},z={unversionedId:"components/SubMenu/submenu",id:"components/SubMenu/submenu",isDocsHomePage:!1,title:"SubMenu",description:"Example",source:"@site/docs/components/SubMenu/submenu.md",sourceDirName:"components/SubMenu",slug:"/components/SubMenu/submenu",permalink:"/components/SubMenu/submenu",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/components/SubMenu/submenu.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1640576378,formattedLastUpdatedAt:"12/27/2021",frontMatter:{id:"submenu",title:"SubMenu"},sidebar:"components",previous:{title:"Spinner",permalink:"/components/Spinner/spinner"},next:{title:"Table",permalink:"/components/Table/table"}},j=[{value:"Example",id:"example",children:[]},{value:"Additional item",id:"additional-item",children:[]},{value:"API",id:"api",children:[]}],M={toc:j};function Z(n){var t=n.components,e=(0,r.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},M,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Add multiple sub menu by adding arrays to ",(0,a.kt)("code",null,"items")," prop. "),(0,a.kt)(_,{mdxType:"SubMenuComponent"}),(0,a.kt)("h2",{id:"additional-item"},"Additional item"),(0,a.kt)("p",null,"Add additional item by ",(0,a.kt)("code",null,"additionalMenuItem")," prop. "),(0,a.kt)(_,{add:!0,mdxType:"SubMenuComponent"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)(_,{type:"api",mdxType:"SubMenuComponent"}))}Z.isMDXComponent=!0},45612:function(n,t,e){"use strict";var o,r,i,a,l,c,p,d=e(92524),s=e(67294),u=e(29163),b=e(131),m=e.n(b),f=e(89816),h=e(45949),g=e(54656),x=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},y=(o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),w=function(){return(w=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},k=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]])}return e},v={default:{background:f.O9.colorPrimary},primary:{background:f.O9.colorSecondary,border:(0,h._j)(f.O9.colorSecondary,20)},success:{background:f.O9.colorCoreGreen},danger:{background:f.O9.colorCoreRed},warning:{background:f.O9.colorCoreYellow,border:(0,h._j)(f.O9.colorCoreYellow,25)},simple:{background:"rgba(0,0,0,0.05)",color:f.O9.colorCoreGray,border:f.O9.colorCoreGray},link:{background:"transparent",color:f.O9.colorCoreGray}},O={large:{padding:"10px 30px",fontSize:"13px"},medium:{padding:"7px 20px",fontSize:"12px"},small:{padding:"5px 15px",fontSize:"10px"}},S=m()(u.ZP.button)(i||(i=x(["\n  border-radius: 30px;\n  position: relative;\n  transition: all 0.3s ease;\n  outline: 0;\n\n  ",";\n\n  a {\n    color: ",";\n  }\n\n  & + button,\n  + a,\n  + span {\n    margin-left: 10px;\n  }\n\n  > i + span,\n  > span + i,\n  > span i {\n    margin-left: 5px;\n  }\n"],["\n  border-radius: 30px;\n  position: relative;\n  transition: all 0.3s ease;\n  outline: 0;\n\n  ",";\n\n  a {\n    color: ",";\n  }\n\n  & + button,\n  + a,\n  + span {\n    margin-left: 10px;\n  }\n\n  > i + span,\n  > span + i,\n  > span i {\n    margin-left: 5px;\n  }\n"])),(function(n){return(0,u.iv)(r||(r=x(["\n    padding: ",";\n    background: ",";\n    font-size: ",";\n    text-transform: ",";\n    color: "," !important;\n    border: none;\n    display: ",";\n    width: ",";\n    font-weight: ",";\n\n    &:hover {\n      cursor: pointer;\n      text-decoration: none;\n      color: ",";\n      background: ",";\n    }\n\n    &:active,\n    &:focus {\n      box-shadow: ",";\n      box-shadow: ",";\n    }\n\n    &:disabled {\n      cursor: not-allowed !important;\n      opacity: 0.75;\n    }\n  "],["\n    padding: ",";\n    background: ",";\n    font-size: ",";\n    text-transform: ",";\n    color: "," !important;\n    border: none;\n    display: ",";\n    width: ",";\n    font-weight: ",";\n\n    &:hover {\n      cursor: pointer;\n      text-decoration: none;\n      color: ",";\n      background: ",";\n    }\n\n    &:active,\n    &:focus {\n      box-shadow: ",";\n      box-shadow: ",";\n    }\n\n    &:disabled {\n      cursor: not-allowed !important;\n      opacity: 0.75;\n    }\n  "])),O[n.hugeness].padding,v[n.btnStyle].background,n.uppercase?O[n.hugeness].fontSize:"calc("+O[n.hugeness].fontSize+" + 1px)",n.uppercase?"uppercase":"none",v[n.btnStyle].color?v[n.btnStyle].color:f.O9.colorWhite,n.block&&"block",n.block&&"100%",!n.uppercase&&"500",v[n.btnStyle].color&&(0,h._j)(v[n.btnStyle].color,35),"link"!==n.btnStyle&&""+(0,h._j)(v[n.btnStyle].background,20),v[n.btnStyle].border?"0 0 0 0.2rem "+(0,h.$n)(v[n.btnStyle].border,65):"0 0 0 0.2rem "+(0,h.$n)(v[n.btnStyle].background,65),"link"===n.btnStyle&&"none")}),f.O9.colorWhite),P=m()((0,u.ZP)(S.withComponent("a")))(l||(l=x(["\n  text-decoration: inherit;\n  text-align: center;\n\n  ",";\n"],["\n  text-decoration: inherit;\n  text-align: center;\n\n  ",";\n"])),(function(n){return n.disabled&&(0,u.iv)(a||(a=x(["\n      cursor: not-allowed !important;\n      opacity: 0.75;\n\n      &:focus {\n        text-decoration: none;\n      }\n    "],["\n      cursor: not-allowed !important;\n      opacity: 0.75;\n\n      &:focus {\n        text-decoration: none;\n      }\n    "])))})),_=m()(u.ZP.div)(p||(p=x(["\n  position: relative;\n\n  button + a,\n  a + button {\n    margin-left: ",";\n  }\n\n  ",";\n"],["\n  position: relative;\n\n  button + a,\n  a + button {\n    margin-left: ",";\n  }\n\n  ",";\n"])),(function(n){return n.hasGap&&"10px"}),(function(n){return!n.hasGap&&(0,u.iv)(c||(c=x(["\n      button,\n      a {\n        margin: 0;\n      }\n\n      > button:not(:last-child),\n      > a:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-right: 1px solid rgba(0, 0, 0, 0.13);\n      }\n\n      > button:not(:first-child),\n      > a:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    "],["\n      button,\n      a {\n        margin: 0;\n      }\n\n      > button:not(:last-child),\n      > a:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-right: 1px solid rgba(0, 0, 0, 0.13);\n      }\n\n      > button:not(:first-child),\n      > a:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    "])))})),E=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return y(t,n),t.prototype.render=function(){var n=this.props,t=n.size,e=k(n,["size"]),o=e.href,r=e.children,i=e.ignoreTrans,a=e.icon,l=w(w({},e),{hugeness:t}),c=o?P:S,p=r;return!i&&"string"==typeof p&&d.__&&(p=(0,d.__)(p)),a?s.createElement(c,w({},l),s.createElement(g.Z,{icon:a}),p&&s.createElement("span",null,p)):s.createElement(c,w({},l),p)},t.Group=z,t.defaultProps={btnStyle:"default",size:"medium",block:!1,type:"button",uppercase:!1},t}(s.Component);function z(n){var t=n.children,e=n.hasGap,o=void 0===e||e;return s.createElement(_,{hasGap:o},t)}t.Z=E},54656:function(n,t,e){"use strict";var o,r=e(67294),i=e(29163),a=e(131),l=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},c=function(){return(c=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},p=e.n(a)()(i.ZP.i)(o||(o=l(["\n  font-size: ",";\n  color: ",";\n"],["\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.size?n.size+"px":"inherit"}),(function(n){return n.color&&n.color}));t.Z=function(n){var t=n.isActive,e=n.color||"";return t&&(e="black"),r.createElement(p,c({},n,{className:"icon-"+n.icon,color:e}))}},65634:function(n,t,e){"use strict";e.d(t,{II:function(){return z},bL:function(){return j},Ph:function(){return M},Kx:function(){return Z},Y8:function(){return G},XZ:function(){return I},lX:function(){return C},__:function(){return _},wX:function(){return E},A0:function(){return D},jj:function(){return A},Ex:function(){return W}});var o,r,i,a,l,c,p,d,s,u,b,m,f,h,g=e(45949),x=e(29163),y=e(131),w=e.n(y),k=e(89816),v=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},O="15px",S="12px",P="34px",_=w()(x.ZP.label)(o||(o=v(["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"],["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"])),(function(n){return n.uppercase?"uppercase":"none"}),k.cp.fontWeightMedium,k.O9.textPrimary,k.cp.fontSizeUppercase,k.O9.colorCoreRed),E=w()(x.ZP.div)(i||(i=v(["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"],["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.horizontal&&(0,x.iv)(r||(r=v(["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "],["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "])))}),k.MB.unitSpacing,k.O9.colorCoreGray),z=w()(x.ZP.input)(a||(a=v(["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"],["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"])),P,k.MB.unitSpacing,k.O9.textPrimary,(function(n){return n.hasError?k.O9.colorCoreRed:k.O9.colorShadowGray}),(function(n){return n.round?"\n        font-size: 13px;\n        border: 1px solid "+k.O9.borderDarker+";\n        border-radius: 20px;\n        padding: 5px 20px;\n      ":""}),k.O9.colorLightGray,k.O9.colorSecondary),j=w()(x.ZP.div)(l||(l=v(["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"],["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"])),(function(n){return n.hasError?k.O9.colorCoreRed:k.O9.colorShadowGray}),P,k.O9.colorCoreGray),M=(0,x.ZP)(z.withComponent("select"))(c||(c=v(["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"],["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"])),P,k.MB.coreSpacing),Z=w()((0,x.ZP)(z.withComponent("textarea")))(p||(p=v(["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"],["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"])),(function(n){return n.maxHeight&&n.maxHeight+"px"})),C=x.ZP.label(d||(d=v(["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"]))),B=w()(x.ZP.input)(s||(s=v(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"],["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"])),(function(n){return n.disabled&&"not-allowed"}),(function(n){return n.color?n.color:k.O9.colorLightGray}),"0px",k.O9.colorWhite,"2px",(function(n){return n.color?(0,g.m4)(n.color,.7):k.O9.colorShadowGray}),k.O9.colorWhite,O,O,O,(function(n){return n.disabled&&"not-allowed"}),k.O9.colorWhite,"0px","2px",S,O,S,O,S,O,S),G=(0,x.ZP)(B)(u||(u=v(["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"],["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"])),k.O9.colorSecondary),I=w()((0,x.ZP)(B))(b||(b=v(["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"],["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"])),O,O,O,O,k.O9.colorWhite,(function(n){return n.color?n.color:k.O9.colorSecondary})),A=x.ZP.label(m||(m=v(["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"],["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"])),k.O9.colorCoreRed,k.MB.unitSpacing-3),D=x.ZP.span(f||(f=v(["\n  flex: 1;\n"],["\n  flex: 1;\n"]))),W=x.ZP.div(h||(h=v(["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"],["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"])),k.MB.unitSpacing,k.MB.unitSpacing,k.MB.unitSpacing)},69713:function(n,t,e){"use strict";e.d(t,{Z:function(){return h}});var o,r,i,a=e(67294),l=e(29163),c=e(131),p=e.n(c),d=e(89816),s=e(65634),u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},b=p()(l.ZP.table)(r||(r=u(["\n  ",";\n"],["\n  ",";\n"])),(function(n){return(0,l.iv)(o||(o=u(["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "],["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "])),n.whiteSpace||"",d.O9.borderPrimary,d.O9.textPrimary,d.MB.unitSpacing-2,n.alignTop&&"top",s.lX,s.II,d.O9.colorCoreGray,d.cp.fontSizeUppercase,d.O9.bgLight,n.hover?"tr:hover td { background-color: #f5f5f5; }":null,n.bordered?"th, td { border-bottom: 1px solid "+d.O9.borderPrimary+"; }":null,n.striped?"tr:nth-of-type(odd) td { background-color: "+d.O9.bgLightPurple+"; }":null,d.O9.borderDarker,d.MB.unitSpacing-2,d.MB.coreSpacing-2,d.MB.coreSpacing,d.MB.coreSpacing)})),m=(i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),f=function(){return(f=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return m(t,n),t.prototype.render=function(){return a.createElement(b,f({},this.props))},t.defaultProps={required:!1,striped:!1,bordered:!1,condensed:!1,hover:!1,responsive:!1,alignTop:!1},t}(a.Component)},60641:function(n,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);