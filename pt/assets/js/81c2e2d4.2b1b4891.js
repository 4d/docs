/*! For license information please see 81c2e2d4.2b1b4891.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90904],{950212:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=n(474848),r=n(28453);const i={id:"analysis",title:"P\xe1gina an\xe1lise de atividades",sidebar_label:"P\xe1gina an\xe1lise de atividades"},s=void 0,t={id:"MSC/analysis",title:"P\xe1gina an\xe1lise de atividades",description:"A p\xe1gina An\xe1lise da atividade permite visualizar o conte\xfado do ficheiro de registo atual. Esta fun\xe7\xe3o \xe9 \xfatil para analisar o uso de um banco de dados ou detectar as opera\xe7\xf5es que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as opera\xe7\xf5es realizadas por cada m\xe1quina cliente.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/pt/20/MSC/analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fanalysis.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"analysis",title:"P\xe1gina an\xe1lise de atividades",sidebar_label:"P\xe1gina an\xe1lise de atividades"},sidebar:"docs",previous:{title:"P\xe1gina de informa\xe7\xe3o",permalink:"/docs/pt/20/MSC/information"},next:{title:"P\xe1gina Verifica\xe7\xe3o",permalink:"/docs/pt/20/MSC/verify"}},d={},c=[];function l(e){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"A p\xe1gina An\xe1lise da atividade permite visualizar o conte\xfado do ficheiro de registo atual. Esta fun\xe7\xe3o \xe9 \xfatil para analisar o uso de um banco de dados ou detectar as opera\xe7\xf5es que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as opera\xe7\xf5es realizadas por cada m\xe1quina cliente."}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["It is also possible to rollback the operations carried out on the data of the database. Para mais informa\xe7\xf5es, consulte ",(0,a.jsx)(o.a,{href:"/docs/pt/20/MSC/rollback",children:"p\xe1gina Retornar"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:n(144229).A+"",width:"882",height:"666"})}),"\n",(0,a.jsx)(o.p,{children:"Cada opera\xe7\xe3o registada no ficheiro de registo aparece como uma linha. As colunas fornecem v\xe1rias informa\xe7\xf5es sobre a opera\xe7\xe3o. Pode reorganizar as colunas conforme pretendido, clicando nos respectivos cabe\xe7alhos."}),"\n",(0,a.jsx)(o.p,{children:"This information allows you to identify the source and context of each operation:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Operation"}),": Sequence number of operation in the log file."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"A\xe7\xe3o"}),": tipo de opera\xe7\xe3o efetuada sobre os dados. Esta coluna pode conter uma das seguintes opera\xe7\xf5es:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Abertura de ficheiro de dados: Abertura de um ficheiro de dados."}),"\n",(0,a.jsx)(o.li,{children:"Encerramento do ficheiro de dados: encerramento de um ficheiro de dados aberto."}),"\n",(0,a.jsx)(o.li,{children:"Cria\xe7\xe3o de um contexto: cria\xe7\xe3o de um processo que especifica um contexto de execu\xe7\xe3o."}),"\n",(0,a.jsx)(o.li,{children:"Encerramento de um contexto: encerramento de um processo."}),"\n",(0,a.jsx)(o.li,{children:"Adi\xe7\xe3o: Cria\xe7\xe3o e armazenamento de um registo."}),"\n",(0,a.jsx)(o.li,{children:"Adicionar um BLOB: armazenamento de um BLOB num campo BLOB."}),"\n",(0,a.jsx)(o.li,{children:"Elimina\xe7\xe3o: Elimina\xe7\xe3o de um registo."}),"\n",(0,a.jsx)(o.li,{children:"Modifica\xe7\xe3o: modifica\xe7\xe3o de um registo."}),"\n",(0,a.jsx)(o.li,{children:"In\xedcio da transa\xe7\xe3o: A transa\xe7\xe3o foi iniciada."}),"\n",(0,a.jsx)(o.li,{children:"Valida\xe7\xe3o da transa\xe7\xe3o: transa\xe7\xe3o validada."}),"\n",(0,a.jsx)(o.li,{children:"Cancelamento da transa\xe7\xe3o: transa\xe7\xe3o cancelada."}),"\n",(0,a.jsxs)(o.li,{children:["Update context: Change in extra data (e.g. a call to ",(0,a.jsx)(o.code,{children:"CHANGE CURRENT USER"})," or ",(0,a.jsx)(o.code,{children:"SET USER ALIAS"}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Table"}),": Table to which the added/deleted/modified record or BLOB belongs."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Primary Key/BLOB"}),": contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Process"}),": Internal number of process in which the operation was carried out. Este n\xfamero interno corresponde ao contexto da opera\xe7\xe3o."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Size"}),": Size (in bytes) of data processed by the operation."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Date and Hour"}),": Date and hour when the operation was performed."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Usuario"}),": nome de usu\xe1rio que realizou a opera\xe7\xe3o. Em modo cliente-servidor, o nome da m\xe1quina do lado do cliente \xe9 exibido; em modo monousu\xe1rio, a ID do usu\xe1rio \xe9 exibida."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"4D User"}),": 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Values"}),': Values of fields for the record in the case of addition or modification. Os valores s\xe3o separados por ";". Only values represented in alphanumeric form are displayed.',(0,a.jsx)(o.br,{}),"\n",(0,a.jsxs)(o.em,{children:[(0,a.jsx)(o.strong,{children:"Note:"})," If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column."]})]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Registos"}),": n\xfamero de registo."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Clique em ",(0,a.jsx)(o.strong,{children:"Analisar"})," para atualizar o conte\xfado do arquivo de hist\xf3rico atual do banco selecionada (chamado como padr\xe3o dataname.journal). O bot\xe3o Navegar pode ser usado para selecionar e abrir outro arquivo de hist\xf3rico para o banco de dados. The ",(0,a.jsx)(o.strong,{children:"Export..."})," button can be used to export the contents of the file as text."]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,o,n)=>{var a=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var a,i={},c=null,l=null;for(a in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)s.call(o,a)&&!d.hasOwnProperty(a)&&(i[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===i[a]&&(i[a]=o[a]);return{$$typeof:r,type:e,key:c,ref:l,props:i,_owner:t.current}}o.Fragment=i,o.jsx=c,o.jsxs=c},474848:(e,o,n)=>{e.exports=n(221020)},144229:(e,o,n)=>{n.d(o,{A:()=>a});const a=n.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>t});var a=n(296540);const r={},i=a.createContext(r);function s(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);