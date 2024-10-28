"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43039],{890760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var o=t(474848),s=t(28453);const d={id:"ds",title:"ds",displayed_sidebar:"docs"},a=void 0,r={id:"commands/ds",title:"ds",description:"ds { ( localID cs.DataStore",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/ds.md",sourceDirName:"commands",slug:"/commands/ds",permalink:"/docs/pt/commands/ds",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fds.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ds",title:"ds",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DROP REMOTE USER",permalink:"/docs/pt/commands/drop-remote-user"},next:{title:"Export structure file",permalink:"/docs/pt/commands/export-structure-file"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ds"})," { ( ",(0,o.jsx)(n.em,{children:"localID"})," : Text ) } : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"localID"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"ID local del armaz\xe9m de dados remoto a devolver"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultados"}),(0,o.jsx)(n.td,{children:"DataStore"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Referencia ao armaz\xe9m de dados"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.code,{children:"ds"})," retorna uma refer\xeancia ao datastore que corresponde ao banco de dados 4D atual ou ao banco de dados designado por ",(0,o.jsx)(n.em,{children:"localID"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Se omitir o par\xe2metro localID (ou se passa uma string vazia ""), o comando devolve uma refer\xeancia ao armaz\xe9m de dados que coincide com a base de dados local de 4D (ou  a base de datos de 4D Server em caso de abrir uma base de dados remota em 4D Server). O reposit\xf3rio de dados \xe9 aberto automaticamente e est\xe1 dispon\xedvel diretamente por meio do ',(0,o.jsx)(n.code,{children:"ds"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea tamb\xe9m pode obter uma refer\xeancia em um datastore remoto aberto passando seu ID local no par\xe2metro ",(0,o.jsx)(n.em,{children:"localID"}),". The datastore must have been previously opened with the ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/open-datastore",children:(0,o.jsx)(n.code,{children:"Open datastore"})})," command by the current database (host or component). A identifica\xe7\xe3o local se define quando se utilizar este comando."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"O escopo do id local do banco de dados no qual o armazen de dados foi aberto."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Se nenhum datastore ",(0,o.jsx)(n.em,{children:"localID"})," for encontrado, o comando retornar\xe1 ",(0,o.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Objects available in the ",(0,o.jsx)(n.code,{children:"cs.Datastore"})," are mapped from the target database with respect to the ",(0,o.jsx)(n.a,{href:"/docs/pt/ORDA/dsmapping#general-rules",children:"ORDA general rules"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Usar a datastore principal do banco de dados 4D:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $result : cs.EmployeeSelection\n$result:=ds.Employee.query("firstName = :1";"S@")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $connectTo; $firstFrench; $firstForeign : Object\n\n var $frenchStudents; $foreignStudents : cs.DataStore\n\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n  //...\n  //...\n $firstFrench:=getFirst("french";"Students")\n $firstForeign:=getFirst("foreign";"Students")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"  //getFirst method\n  //getFirst(localID;dataclass) -> entity\n #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity\n\n $entity:=ds($localId)[$dataClassName].all().first()\n"})}),"\n",(0,o.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/open-datastore",children:"Open datastore"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(296540);const s={},d=o.createContext(s);function a(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);