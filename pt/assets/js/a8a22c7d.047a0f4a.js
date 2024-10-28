"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85661],{683571:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=o(474848),d=o(28453);const r={id:"ob-keys",title:"OB Keys",slug:"/commands/ob-keys",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/ob-keys",title:"OB Keys",description:"OB Keys ( objeto ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-keys.md",sourceDirName:"commands-legacy",slug:"/commands/ob-keys",permalink:"/docs/pt/commands/ob-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-keys.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ob-keys",title:"OB Keys",slug:"/commands/ob-keys",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OB Is shared",permalink:"/docs/pt/commands/ob-is-shared"},next:{title:"OB REMOVE",permalink:"/docs/pt/commands/ob-remove"}},i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB Keys"})," ( ",(0,s.jsx)(n.em,{children:"objeto"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto a retornar os nomes de propriedade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Cole\xe7\xe3o de nomes de propriedade (strings)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"OB Keys"})," retorna uma cole\xe7\xe3o de strings contendo todos os nomes de propriedade enumer\xe1veis do ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Apenas os nomes de propriedade de primeiro-n\xedvel s\xe3o retornados (nomes de propriedade de sub-objetos n\xe3o s\xe3o retornados). A ordem dos nomes dentro da cole\xe7\xe3o retornada seguem a ordem de defini\xe7\xe3o das propriedades"}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser uma cole\xe7\xe3o com todos os nomes de propriedade de primeiro-n\xedvel de um objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $col : Collection\n\n\xa0$person:=New object\n\xa0$person.lastName:="Smith"\n\xa0$person.firstName:="Jenny"\n\xa0$person.children:=New object("Mary";12;"Mark";8)\n\xa0\n\xa0$col:=OB Keys($person)\n\n\xa0//$col[0]="lastName"\n\xa0\xa0//$col[1]="firstName"\n\xa0\xa0//$col[2]="children"\n\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/ob-entries",children:"OB Entries"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/ob-values",children:"OB Values"})]})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(296540);const d={},r=s.createContext(d);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);