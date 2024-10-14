"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71469],{651956:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=o(474848),i=o(28453);const s={id:"analysis",title:"P\xe1gina an\xe1lise de atividades",sidebar_label:"P\xe1gina an\xe1lise de atividades"},r=void 0,d={id:"MSC/analysis",title:"P\xe1gina an\xe1lise de atividades",description:"A p\xe1gina An\xe1lise da atividade permite visualizar o conte\xfado do ficheiro de registo atual. Esta fun\xe7\xe3o \xe9 \xfatil para analisar o uso de um banco de dados ou detectar as opera\xe7\xf5es que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as opera\xe7\xf5es realizadas por cada m\xe1quina cliente.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/pt/19/MSC/analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fanalysis.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"analysis",title:"P\xe1gina an\xe1lise de atividades",sidebar_label:"P\xe1gina an\xe1lise de atividades"},sidebar:"docs",previous:{title:"P\xe1gina de informa\xe7\xe3o",permalink:"/docs/pt/19/MSC/information"},next:{title:"P\xe1gina Verifica\xe7\xe3o",permalink:"/docs/pt/19/MSC/verify"}},t={},c=[];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A p\xe1gina An\xe1lise da atividade permite visualizar o conte\xfado do ficheiro de registo atual. Esta fun\xe7\xe3o \xe9 \xfatil para analisar o uso de um banco de dados ou detectar as opera\xe7\xf5es que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as opera\xe7\xf5es realizadas por cada m\xe1quina cliente."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["It is also possible to rollback the operations carried out on the data of the database. Para mais informa\xe7\xf5es, consulte ",(0,a.jsx)(n.a,{href:"/docs/pt/19/MSC/rollback",children:"p\xe1gina Retornar"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(727657).A+"",width:"882",height:"666"})}),"\n",(0,a.jsx)(n.p,{children:"Cada opera\xe7\xe3o registada no ficheiro de registo aparece como uma linha. As colunas fornecem v\xe1rias informa\xe7\xf5es sobre a opera\xe7\xe3o. Pode reorganizar as colunas conforme pretendido, clicando nos respectivos cabe\xe7alhos."}),"\n",(0,a.jsx)(n.p,{children:"This information allows you to identify the source and context of each operation:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Operation"}),": Sequence number of operation in the log file."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"A\xe7\xe3o"}),": tipo de opera\xe7\xe3o efetuada sobre os dados. Esta coluna pode conter uma das seguintes opera\xe7\xf5es:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Abertura de ficheiro de dados: Abertura de um ficheiro de dados."}),"\n",(0,a.jsx)(n.li,{children:"Encerramento do ficheiro de dados: encerramento de um ficheiro de dados aberto."}),"\n",(0,a.jsx)(n.li,{children:"Cria\xe7\xe3o de um contexto: cria\xe7\xe3o de um processo que especifica um contexto de execu\xe7\xe3o."}),"\n",(0,a.jsx)(n.li,{children:"Encerramento de um contexto: encerramento de um processo."}),"\n",(0,a.jsx)(n.li,{children:"Adi\xe7\xe3o: Cria\xe7\xe3o e armazenamento de um registo."}),"\n",(0,a.jsx)(n.li,{children:"Adicionar um BLOB: armazenamento de um BLOB num campo BLOB."}),"\n",(0,a.jsx)(n.li,{children:"Elimina\xe7\xe3o: Elimina\xe7\xe3o de um registo."}),"\n",(0,a.jsx)(n.li,{children:"Modifica\xe7\xe3o: modifica\xe7\xe3o de um registo."}),"\n",(0,a.jsx)(n.li,{children:"In\xedcio da transa\xe7\xe3o: A transa\xe7\xe3o foi iniciada."}),"\n",(0,a.jsx)(n.li,{children:"Valida\xe7\xe3o da transa\xe7\xe3o: transa\xe7\xe3o validada."}),"\n",(0,a.jsx)(n.li,{children:"Cancelamento da transa\xe7\xe3o: transa\xe7\xe3o cancelada."}),"\n",(0,a.jsxs)(n.li,{children:["Update context: Change in extra data (e.g. a call to ",(0,a.jsx)(n.code,{children:"CHANGE CURRENT USER"})," or ",(0,a.jsx)(n.code,{children:"SET USER ALIAS"}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Table"}),": Table to which the added/deleted/modified record or BLOB belongs."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Primary Key/BLOB"}),": contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Process"}),": Internal number of process in which the operation was carried out. Este n\xfamero interno corresponde ao contexto da opera\xe7\xe3o."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Size"}),": Size (in bytes) of data processed by the operation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Date and Hour"}),": Date and hour when the operation was performed."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Usuario"}),": nome de usu\xe1rio que realizou a opera\xe7\xe3o. Em modo cliente-servidor, o nome da m\xe1quina do lado do cliente \xe9 exibido; em modo monousu\xe1rio, a ID do usu\xe1rio \xe9 exibida."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"4D User"}),": 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Values"}),': Values of fields for the record in the case of addition or modification. Os valores s\xe3o separados por ";". Only values represented in alphanumeric form are displayed.',(0,a.jsx)(n.br,{}),"\n",(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column."]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Registos"}),": n\xfamero de registo."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Clique em ",(0,a.jsx)(n.strong,{children:"Analisar"})," para atualizar o conte\xfado do arquivo de hist\xf3rico atual do banco selecionada (chamado como padr\xe3o dataname.journal). O bot\xe3o Navegar pode ser usado para selecionar e abrir outro arquivo de hist\xf3rico para o banco de dados. The ",(0,a.jsx)(n.strong,{children:"Export..."})," button can be used to export the contents of the file as text."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},727657:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var a=o(296540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);