"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["250"],{136494:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"WebServer/from-qodlyscript-to-4d","title":"De QodlyScript au langage 4D","description":"Les d\xe9veloppeurs 4D utilisent la documentation de Qodly Studio pour savoir comment concevoir leurs pages Qodly dans Qodly Studio.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/WebServer/from-qodlyscript-to-4d.md","sourceDirName":"WebServer","slug":"/WebServer/from-qodlyscript-to-4d","permalink":"/docs/fr/WebServer/from-qodlyscript-to-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ffrom-qodlyscript-to-4d.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"from-qodlyscript-to-4d","title":"De QodlyScript au langage 4D"},"sidebar":"docs","previous":{"title":"Qodly Studio for 4D","permalink":"/docs/fr/WebServer/qodly-studio"},"next":{"title":"REST API","permalink":"/docs/fr/category/rest-api"}}'),d=s("785893"),r=s("250065");let l={id:"from-qodlyscript-to-4d",title:"De QodlyScript au langage 4D"},i=void 0,o={},c=[{value:"Noms des variables",id:"noms-des-variables",level:2},{value:"Symboles et mots-cl\xe9s",id:"symboles-et-mots-cl\xe9s",level:2},{value:"Noms de commandes et de constantes",id:"noms-de-commandes-et-de-constantes",level:2},{value:"Exemple",id:"exemple",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Les d\xe9veloppeurs 4D utilisent la ",(0,d.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/overview",children:"documentation de Qodly Studio"})," pour savoir comment concevoir leurs pages Qodly dans Qodly Studio."]}),"\n",(0,d.jsxs)(n.p,{children:["Les exemples de code sont fournis en ",(0,d.jsx)(n.a,{href:"https://developer.qodly.com/docs/category/qodlyscript",children:"QodlyScript"}),", mais \xe9tant donn\xe9 que QodlyScript h\xe9rite du langage 4D, vous ne serez pas perdu. Convertir du code QodlyScript en langage 4D est facile, cela ne n\xe9cessite que quelques adaptations."]}),"\n",(0,d.jsx)(n.h2,{id:"noms-des-variables",children:"Noms des variables"}),"\n",(0,d.jsxs)(n.p,{children:["QodlyScript ne prend en charge que des variables locales, donc les variables dans les exemples QodlyScript ne sont pas pr\xe9fix\xe9es par ",(0,d.jsx)(n.code,{children:"$"}),". Dans le code 4D, assurez-vous de ",(0,d.jsxs)(n.strong,{children:["pr\xe9fixer les noms des variables avec ",(0,d.jsx)(n.code,{children:"$"})]})," afin qu'elles soient identifi\xe9es comme des variables locales par 4D."]}),"\n",(0,d.jsx)(n.h2,{id:"symboles-et-mots-cl\xe9s",children:"Symboles et mots-cl\xe9s"}),"\n",(0,d.jsx)(n.p,{children:"Certains symboles, op\xe9rateurs et mots-cl\xe9s de base diff\xe8rent dans QodlyScript et doivent \xeatre adapt\xe9s au langage 4D. Ils sont list\xe9s ci-dessous:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"QodlyScript"}),(0,d.jsx)(n.th,{children:"Langage 4D"}),(0,d.jsx)(n.th,{children:"Commentaire"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:","}),(0,d.jsx)(n.td,{children:";"}),(0,d.jsx)(n.td,{children:"s\xe9parateur d'argument"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"="}),(0,d.jsx)(n.td,{children:":="}),(0,d.jsx)(n.td,{children:"op\xe9rateur d'assignation"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"=="}),(0,d.jsx)(n.td,{children:"="}),(0,d.jsx)(n.td,{children:"op\xe9rateur de comparaison"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"declare"}),(0,d.jsx)(n.td,{children:"#Declare"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"switch"}),(0,d.jsx)(n.td,{children:"Case of"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"constructor"}),(0,d.jsx)(n.td,{children:"Class constructor"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"extends"}),(0,d.jsx)(n.td,{children:"Class extends"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"end"}),(0,d.jsx)(n.td,{children:"End for, End For each, End if, End case, End use, End while"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"forEach"}),(0,d.jsx)(n.td,{children:"For each"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"type de var"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"type de var"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Certains autres \xe9l\xe9ments ont une casse diff\xe9rente (par exemple : ",(0,d.jsx)(n.code,{children:"this"})," vs ",(0,d.jsx)(n.code,{children:"This"}),") mais peuvent \xeatre coll\xe9s directement dans le code 4D."]}),"\n",(0,d.jsx)(n.h2,{id:"noms-de-commandes-et-de-constantes",children:"Noms de commandes et de constantes"}),"\n",(0,d.jsxs)(n.p,{children:["Les noms des commandes et des constantes QodlyScript sont \xe9crits en camel case sans espaces. De plus, les noms de constantes de QodlyScript commencent par la lettre ",(0,d.jsx)(n.code,{children:"k"}),". Vous devrez peut-\xeatre adapter ces \xe9l\xe9ments QodlyScript au langage 4D."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["G\xe9n\xe9ralement, vous devrez simplement convertir les noms. Par exemple, ",(0,d.jsx)(n.code,{children:"newCollection"})," dans QodlyScript est ",(0,d.jsx)(n.code,{children:"New collection"})," dans le langage 4D."]}),"\n",(0,d.jsxs)(n.li,{children:["Cependant, certaines commandes ont \xe9t\xe9 renomm\xe9es pour une meilleure conformit\xe9, par exemple ",(0,d.jsx)(n.code,{children:"atan"})," et ",(0,d.jsx)(n.code,{children:"sqrt"})," sont les noms en QodlyScript des commandes ",(0,d.jsx)(n.code,{children:"Arctan"})," et ",(0,d.jsx)(n.code,{children:"Square root"})," en langage 4D."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Code QodlyScript :"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-qs",children:" declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Code \xe9quivalent en langage 4D :"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:" #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let d={},r=t.createContext(d);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);