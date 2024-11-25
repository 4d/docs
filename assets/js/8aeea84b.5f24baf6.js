"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46009"],{546326:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"WebServer/from-qodlyscript-to-4d","title":"From QodlyScript to 4D Language","description":"4D developers use the Qodly Studio documentation to learn how to design their Qodly forms in Qodly Studio.","source":"@site/versioned_docs/version-20-R6/WebServer/from-qodlyscript-to-4d.md","sourceDirName":"WebServer","slug":"/WebServer/from-qodlyscript-to-4d","permalink":"/docs/20-R6/WebServer/from-qodlyscript-to-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ffrom-qodlyscript-to-4d.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"from-qodlyscript-to-4d","title":"From QodlyScript to 4D Language"},"sidebar":"docs","previous":{"title":"Qodly Studio for 4D","permalink":"/docs/20-R6/WebServer/qodly-studio"},"next":{"title":"REST API","permalink":"/docs/20-R6/category/rest-api"}}'),d=t("785893"),r=t("250065");let i={id:"from-qodlyscript-to-4d",title:"From QodlyScript to 4D Language"},a=void 0,o={},l=[{value:"Variable names",id:"variable-names",level:2},{value:"Symbols and keywords",id:"symbols-and-keywords",level:2},{value:"Command and Constant names",id:"command-and-constant-names",level:2},{value:"Example",id:"example",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["4D developers use the ",(0,d.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/overview",children:"Qodly Studio documentation"})," to learn how to design their Qodly forms in Qodly Studio."]}),"\n",(0,d.jsxs)(n.p,{children:["Code examples are provided in ",(0,d.jsx)(n.a,{href:"https://developer.qodly.com/docs/category/qodlyscript",children:"QodlyScript"}),", but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations."]}),"\n",(0,d.jsx)(n.h2,{id:"variable-names",children:"Variable names"}),"\n",(0,d.jsxs)(n.p,{children:["QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with ",(0,d.jsx)(n.code,{children:"$"}),". In the 4D code, make sure to ",(0,d.jsxs)(n.strong,{children:["prefix variable names with ",(0,d.jsx)(n.code,{children:"$"})]})," so that they are identifed as local variables by 4D."]}),"\n",(0,d.jsx)(n.h2,{id:"symbols-and-keywords",children:"Symbols and keywords"}),"\n",(0,d.jsx)(n.p,{children:"Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. They are listed below:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"QodlyScript"}),(0,d.jsx)(n.th,{children:"4D Language"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:","}),(0,d.jsx)(n.td,{children:";"}),(0,d.jsx)(n.td,{children:"argument separator"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"="}),(0,d.jsx)(n.td,{children:":="}),(0,d.jsx)(n.td,{children:"assignment operator"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"=="}),(0,d.jsx)(n.td,{children:"="}),(0,d.jsx)(n.td,{children:"comparison operator"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"declare"}),(0,d.jsx)(n.td,{children:"#Declare"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"switch"}),(0,d.jsx)(n.td,{children:"Case of"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"constructor"}),(0,d.jsx)(n.td,{children:"Class constructor"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"extends"}),(0,d.jsx)(n.td,{children:"Class extends"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"end"}),(0,d.jsx)(n.td,{children:"End for, End For each, End if, End case, End use, End while"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"forEach"}),(0,d.jsx)(n.td,{children:"For each"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"var type"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"var type"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Some other items have a different case (ex: ",(0,d.jsx)(n.code,{children:"this"})," vs ",(0,d.jsx)(n.code,{children:"This"}),") but can be pasted directly in 4D code."]}),"\n",(0,d.jsx)(n.h2,{id:"command-and-constant-names",children:"Command and Constant names"}),"\n",(0,d.jsxs)(n.p,{children:["QodlyScript command and constant names are written in camel case without spaces. In addition, QodlyScript constant names start with a ",(0,d.jsx)(n.code,{children:"k"})," letter. You might need to adapt these QodlyScript items to the 4D Language."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Usually, you will only have to simply convert names. For example, ",(0,d.jsx)(n.code,{children:"newCollection"})," in QodlyScript is ",(0,d.jsx)(n.code,{children:"New collection"})," in 4D Language."]}),"\n",(0,d.jsxs)(n.li,{children:["However, some commands have been renamed for a better compliance, for example ",(0,d.jsx)(n.code,{children:"atan"})," and ",(0,d.jsx)(n.code,{children:"sqrt"})," are QodlyScript names for ",(0,d.jsx)(n.code,{children:"Arctan"})," and ",(0,d.jsx)(n.code,{children:"Square root"})," commands in 4D Language."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"QodlyScript code:"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-qs",children:" declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"4D Language equivalent code:"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:" #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);