"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44704],{992484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(474848),d=t(28453);const s={id:"onVpRangeChanged",title:"On VP Range Changed"},o=void 0,i={id:"Events/onVpRangeChanged",title:"On VP Range Changed",description:"| Code | Pode ser chamado por                                    | Defini\xe7\xe3o                                                                                                                                                                |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onVpRangeChanged.md",sourceDirName:"Events",slug:"/Events/onVpRangeChanged",permalink:"/docs/pt/Events/onVpRangeChanged",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onVpRangeChanged",title:"On VP Range Changed"},sidebar:"docs",previous:{title:"On Validate",permalink:"/docs/pt/Events/onValidate"},next:{title:"On VP Ready",permalink:"/docs/pt/Events/onVpReady"}},a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Pode ser chamado por"}),(0,r.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"61"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})}),(0,r.jsx)(n.td,{children:"The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"This event is generated when a change occurs within a cell range in the 4D View Pro document."}),"\n",(0,r.jsx)(n.p,{children:"O objeto devolvido pelo comando FORM Event cont\xe9m:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"inteiro longo"}),(0,r.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Intervalo de c\xe9lulas da altera\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changedCells"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Intervalo que cont\xe9m apenas as c\xe9lulas alteradas. Pode ser um intervalo combinado."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["O tipo de opera\xe7\xe3o que gera o evento:",(0,r.jsx)(n.li,{children:'"clear" - Uma opera\xe7\xe3o de limpar o valor do intervalo'}),(0,r.jsx)(n.li,{children:'"dragDrop" - Uma opera\xe7\xe3o de arrastar e soltar'}),(0,r.jsx)(n.li,{children:'"dragFill" - Uma opera\xe7\xe3o de arrastar'}),(0,r.jsx)(n.li,{children:" e"}),(0,r.jsx)(n.li,{children:" preencher"}),(0,r.jsx)(n.li,{children:'"evaluateFormula" - Defini\xe7\xe3o de uma f\xf3rmula em um intervalo de c\xe9lulas especificado'}),(0,r.jsx)(n.li,{children:'"paste" - Uma opera\xe7\xe3o de colar'}),(0,r.jsx)(n.li,{children:'"setArrayFormula" - Defini\xe7\xe3o de uma f\xf3rmula em um intervalo de c\xe9lulas especificado</0>'}),(0,r.jsx)(n.li,{children:'"sort" - Classifica\xe7\xe3o de um intervalo de c\xe9lulas</0>'})]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Consulte tamb\xe9m [On After Edit] (onAfterEdit.md)."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const d={},s=r.createContext(d);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);