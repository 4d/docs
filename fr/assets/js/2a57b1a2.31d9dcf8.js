/*! For license information please see 2a57b1a2.31d9dcf8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22218],{703871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=t(474848),s=t(28453);const d={id:"from-qodlyscript-to-4d",title:"From QodlyScript to 4D Language"},o=void 0,i={id:"WebServer/from-qodlyscript-to-4d",title:"From QodlyScript to 4D Language",description:"4D developers use the Qodly Studio documentation to learn how to design their Qodly forms in Qodly Studio.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/WebServer/from-qodlyscript-to-4d.md",sourceDirName:"WebServer",slug:"/WebServer/from-qodlyscript-to-4d",permalink:"/docs/fr/WebServer/from-qodlyscript-to-4d",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ffrom-qodlyscript-to-4d.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"from-qodlyscript-to-4d",title:"From QodlyScript to 4D Language"},sidebar:"docs",previous:{title:"Qodly Studio for 4D",permalink:"/docs/fr/WebServer/qodly-studio"},next:{title:"REST API",permalink:"/docs/fr/category/rest-api"}},a={},l=[{value:"Variable names",id:"variable-names",level:2},{value:"Symbols and keywords",id:"symbols-and-keywords",level:2},{value:"Command and Constant names",id:"command-and-constant-names",level:2},{value:"Exemple",id:"exemple",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["4D developers use the ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/overview",children:"Qodly Studio documentation"})," to learn how to design their Qodly forms in Qodly Studio."]}),"\n",(0,r.jsxs)(n.p,{children:["Code examples are provided in ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/category/qodlyscript",children:"QodlyScript"}),", but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations."]}),"\n",(0,r.jsx)(n.h2,{id:"variable-names",children:"Variable names"}),"\n",(0,r.jsxs)(n.p,{children:["QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with ",(0,r.jsx)(n.code,{children:"$"}),". In the 4D code, make sure to ",(0,r.jsxs)(n.strong,{children:["prefix variable names with ",(0,r.jsx)(n.code,{children:"$"})]})," so that they are identifed as local variables by 4D."]}),"\n",(0,r.jsx)(n.h2,{id:"symbols-and-keywords",children:"Symbols and keywords"}),"\n",(0,r.jsx)(n.p,{children:"Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. They are listed below:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"QodlyScript"}),(0,r.jsx)(n.th,{children:"4D Language"}),(0,r.jsx)(n.th,{children:"Commentaire"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:","}),(0,r.jsx)(n.td,{children:";"}),(0,r.jsx)(n.td,{children:"argument separator"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"="}),(0,r.jsx)(n.td,{children:":="}),(0,r.jsx)(n.td,{children:"op\xe9rateur d'assignation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"=="}),(0,r.jsx)(n.td,{children:"="}),(0,r.jsx)(n.td,{children:"comparison operator"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"declare"}),(0,r.jsx)(n.td,{children:"#Declare"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"switch"}),(0,r.jsx)(n.td,{children:"Case of"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"constructor"}),(0,r.jsx)(n.td,{children:"Class constructor"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"extends"}),(0,r.jsx)(n.td,{children:"Class extends"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"end"}),(0,r.jsx)(n.td,{children:"End for, End For each, End if, End case, End use, End while"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"forEach"}),(0,r.jsx)(n.td,{children:"For each"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"var type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"var type"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Some other items have a different case (ex: ",(0,r.jsx)(n.code,{children:"this"})," vs ",(0,r.jsx)(n.code,{children:"This"}),") but can be pasted directly in 4D code."]}),"\n",(0,r.jsx)(n.h2,{id:"command-and-constant-names",children:"Command and Constant names"}),"\n",(0,r.jsxs)(n.p,{children:["QodlyScript command and constant names are written in camel case without spaces. In addition, QodlyScript constant names start with a ",(0,r.jsx)(n.code,{children:"k"})," letter. You might need to adapt these QodlyScript items to the 4D Language."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usually, you will only have to simply convert names. For example, ",(0,r.jsx)(n.code,{children:"newCollection"})," in QodlyScript is ",(0,r.jsx)(n.code,{children:"New collection"})," in 4D Language."]}),"\n",(0,r.jsxs)(n.li,{children:["However, some commands have been renamed for a better compliance, for example ",(0,r.jsx)(n.code,{children:"atan"})," and ",(0,r.jsx)(n.code,{children:"sqrt"})," are QodlyScript names for ",(0,r.jsx)(n.code,{children:"Arctan"})," and ",(0,r.jsx)(n.code,{children:"Square root"})," commands in 4D Language."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"QodlyScript code:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-qs",children:" declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"4D Language equivalent code:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,d={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:c,props:d,_owner:i.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);