"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9650],{208047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(474848),d=t(28453);const r={id:"from-qodlyscript-to-4d",title:"De QodlyScript \xe0 linguagem 4D"},o=void 0,i={id:"WebServer/from-qodlyscript-to-4d",title:"De QodlyScript \xe0 linguagem 4D",description:"4D developers use the Qodly Studio documentation to learn how to design their Qodly forms in Qodly Studio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/WebServer/from-qodlyscript-to-4d.md",sourceDirName:"WebServer",slug:"/WebServer/from-qodlyscript-to-4d",permalink:"/docs/pt/20-R6/WebServer/from-qodlyscript-to-4d",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ffrom-qodlyscript-to-4d.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"from-qodlyscript-to-4d",title:"De QodlyScript \xe0 linguagem 4D"},sidebar:"docs",previous:{title:"Qodly Studio for 4D",permalink:"/docs/pt/20-R6/WebServer/qodly-studio"},next:{title:"REST API",permalink:"/docs/pt/20-R6/category/rest-api"}},l={},c=[{value:"Nomes de vari\xe1veis",id:"nomes-de-vari\xe1veis",level:2},{value:"S\xedmbolos e palavras-chave",id:"s\xedmbolos-e-palavras-chave",level:2},{value:"Nomes de comandos e constantes",id:"nomes-de-comandos-e-constantes",level:2},{value:"Exemplo",id:"exemplo",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["4D developers use the ",(0,s.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/overview",children:"Qodly Studio documentation"})," to learn how to design their Qodly forms in Qodly Studio."]}),"\n",(0,s.jsxs)(n.p,{children:["Code examples are provided in ",(0,s.jsx)(n.a,{href:"https://developer.qodly.com/docs/category/qodlyscript",children:"QodlyScript"}),", but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations."]}),"\n",(0,s.jsx)(n.h2,{id:"nomes-de-vari\xe1veis",children:"Nomes de vari\xe1veis"}),"\n",(0,s.jsxs)(n.p,{children:["QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with ",(0,s.jsx)(n.code,{children:"$"}),". No c\xf3digo 4D, certifique-se de ",(0,s.jsxs)(n.strong,{children:["prefixar os nomes das vari\xe1veis com ",(0,s.jsx)(n.code,{children:"$"})]})," para elas serem identificadas como vari\xe1veis locais pelo 4D."]}),"\n",(0,s.jsx)(n.h2,{id:"s\xedmbolos-e-palavras-chave",children:"S\xedmbolos e palavras-chave"}),"\n",(0,s.jsx)(n.p,{children:"Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. Eles est\xe3o listados abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"QodlyScript"}),(0,s.jsx)(n.th,{children:"L\xednguagem 4D"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:","}),(0,s.jsx)(n.td,{children:";"}),(0,s.jsx)(n.td,{children:"separador de argumentos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"="}),(0,s.jsx)(n.td,{children:":="}),(0,s.jsx)(n.td,{children:"operador de atribui\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"=="}),(0,s.jsx)(n.td,{children:"="}),(0,s.jsx)(n.td,{children:"operador de compara\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"declare"}),(0,s.jsx)(n.td,{children:"#Declare"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"switch"}),(0,s.jsx)(n.td,{children:"Case of"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"constructor"}),(0,s.jsx)(n.td,{children:"Class constructor"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"extends"}),(0,s.jsx)(n.td,{children:"Class extends"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"end"}),(0,s.jsx)(n.td,{children:"End for, End For each, End if, End case, End use, End while"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forEach"}),(0,s.jsx)(n.td,{children:"For each"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"var type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"var type"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Some other items have a different case (ex: ",(0,s.jsx)(n.code,{children:"this"})," vs ",(0,s.jsx)(n.code,{children:"This"}),") but can be pasted directly in 4D code."]}),"\n",(0,s.jsx)(n.h2,{id:"nomes-de-comandos-e-constantes",children:"Nomes de comandos e constantes"}),"\n",(0,s.jsxs)(n.p,{children:["QodlyScript command and constant names are written in camel case without spaces. Al\xe9m disso, os nomes das constantes QodlyScript come\xe7am com a letra ",(0,s.jsx)(n.code,{children:"k"}),". You might need to adapt these QodlyScript items to the 4D Language."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Normalmente, voc\xea s\xf3 precisar\xe1 converter os nomes. Por exemplo, ",(0,s.jsx)(n.code,{children:"newCollection"})," em QodlyScript \xe9 ",(0,s.jsx)(n.code,{children:"New collection"})," em Linguagem 4D."]}),"\n",(0,s.jsxs)(n.li,{children:["However, some commands have been renamed for a better compliance, for example ",(0,s.jsx)(n.code,{children:"atan"})," and ",(0,s.jsx)(n.code,{children:"sqrt"})," are QodlyScript names for ",(0,s.jsx)(n.code,{children:"Arctan"})," and ",(0,s.jsx)(n.code,{children:"Square root"})," commands in 4D Language."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"C\xf3digo QodlyScript:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-qs",children:" declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"C\xf3digo 4D equivalente no linguajem:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(296540);const d={},r=s.createContext(d);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);