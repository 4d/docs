"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28503],{493863:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=o(474848),t=o(28453);const r={id:"object-set-events",title:"OBJECT SET EVENTS",slug:"/commands/object-set-events",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/object-set-events",title:"OBJECT SET EVENTS",description:"OBJECT SET EVENTS ( { ;} objeto ; arrEventos ; modo* )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-events.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-events",permalink:"/docs/pt/commands/object-set-events",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-events.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-events",title:"OBJECT SET EVENTS",slug:"/commands/object-set-events",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET ENTERABLE",permalink:"/docs/pt/commands/object-set-enterable"},next:{title:"OBJECT SET FILTER",permalink:"/docs/pt/commands/object-set-filter"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"arrEventos"})," ; ",(0,s.jsx)(n.em,{children:"modo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se for especificado, objeto \xe9 um nome de objeto (cadeia) Se for omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:['Nome de objeto ou "" para designar o formul\xe1rio (se * for especificado) ou',(0,s.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrEventos"}),(0,s.jsx)(n.td,{children:"Integer array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array de eventos a definir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Modo de ativa\xe7\xe3o dos eventos definidos em arrEventos"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," modifica, para o processo atual, a configura\xe7\xe3o dos eventos formul\xe1rio do formul\xe1rio, dos objetos designados pelos par\xe2metros ",(0,s.jsx)(n.em,{children:"objeto"})," e ",(0,s.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"})," se indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de campo ou vari\xe1vel em vez de uma cadeia (campo ou vari\xe1vel objeto unicamente).",(0,s.jsx)(n.br,{}),"\nPara definir a configura\xe7\xe3o de eventos para o formul\xe1rio, passe o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"}),' e uma cadeia vazia "" em ',(0,s.jsx)(n.em,{children:"objeto"}),", neste caso, voc\xea designa o formul\xe1rio atual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," Se deseja modificar os eventos de um sub formul\xe1rio relacionado com uma tabela, s\xf3 pode utilizar a sintaxe baseada no nome do objeto."]}),"\n",(0,s.jsxs)(n.p,{children:["No par\xe2metro ",(0,s.jsx)(n.em,{children:"arrEventos"}),", passe um array inteiro longo que contenha a lista de eventos de formul\xe1rios pr\xe9 definidos ou personalizados que deseja modificar (se pode utilizar o par\xe2metro ",(0,s.jsx)(n.em,{children:"modo"})," para especificar se a modifica\xe7\xe3o consiste na ativa\xe7\xe3o ou desativa\xe7\xe3o dos eventos) . Para designar um evento pr\xe9 definido a modificar, pode passar em cada elemento do array ",(0,s.jsx)(n.em,{children:"arrEventos"}),', uma das seguintes constantes, que se encontram no tema "',(0,s.jsx)(n.em,{children:"Form event"}),'":']}),"\n",(0,s.jsx)(n.p,{children:"\xc9 importante levar em conta que o evento On Load n\xe3o est\xe1 inclu\xeddo nesta lista: este evento n\xe3o pode ser definido porque j\xe1 foi gerado durante a execu\xe7\xe3o do comando."}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"arrEventos"}),", tamb\xe9m pode passar todo valor correspondente a um evento personalizado. Neste caso, recomendamos utilizar valores negativos (ver o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"modo"}),' se utiliza para definir o tratamento global a realizar para os elementos do array. Para isso, pode passar uma das seguintes constantes, que se encontra no tema "',(0,s.jsx)(n.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Disable events others unchanged"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["Todos os eventos listados no array ",(0,s.jsx)(n.em,{children:"arrEvents"})," se desativam; o estado de todos os outros eventos n\xe3o muda"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enable events disable others"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["Todos os eventos listados no array ",(0,s.jsx)(n.em,{children:"arrEvents"})," se ativam; todos os outros eventos se desativam"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enable events others unchanged"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Todos os eventos listados no array ",(0,s.jsx)(n.em,{children:"arrEvents"})," se ativam; o estado de todos os outros eventos n\xe3o muda"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," pode dar lugar a ativa\xe7\xe3o de eventos que n\xe3o s\xe3o compat\xedveis com o ",(0,s.jsx)(n.em,{children:"objeto"})," (dependendo do tipo). Neste caso, simplesmente se ignoram os eventos."]}),"\n",(0,s.jsxs)(n.p,{children:["Se um ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 duplicado depois de uma chamada ao comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"}),", a configura\xe7\xe3o resultante de ativa\xe7\xe3o/desativa\xe7\xe3o tamb\xe9m \xe9 duplicada."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Ativa\xe7\xe3o de tr\xeas eventos formulario para um conjunto de objetos list box e desativa\xe7\xe3o de outros eventos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)\n\xa0\xa0// Ativa 3 eventos e desativa todos os outros\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Desativa\xe7\xe3o de tr\xeas eventos formul\xe1rio para um conjunto de objetos list box, sem modificar os outros eventos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)\n\xa0\xa0// Desativa s\xf3 3 eventos\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Ativa\xe7\xe3o de um evento formul\xe1rio para um objeto, sem modificar os outros eventos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;1)\n\xa0$MyEventsOnLB {1}:=On Column Moved\n\xa0OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)\n\xa0\xa0// Ativa unicamente o evento\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Desativa\xe7\xe3o de todos os eventos do formul\xe1rio:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;0)\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)\n\xa0\xa0// Desativa todos os eventos\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Desativa\xe7\xe3o de um s\xf3 evento do formul\xe1rio sem modificar os outros:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;1)\n\xa0$MyFormEvents{1}:=On Timer\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)\n\xa0\xa0// S\xf3 desativa o evento\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Form event"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/object-get-events",children:"OBJECT GET EVENTS"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var s=o(296540);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);