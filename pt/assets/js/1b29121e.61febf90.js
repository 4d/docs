"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31986],{978802:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var s=n(474848),t=n(28453);const r={id:"last-table-number",title:"Last table number",slug:"/commands/last-table-number",displayed_sidebar:"docs"},o=void 0,l={id:"commands-legacy/last-table-number",title:"Last table number",description:"Last table number  -> Resultado de fun\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/last-table-number.md",sourceDirName:"commands-legacy",slug:"/commands/last-table-number",permalink:"/docs/pt/commands/last-table-number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-table-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"last-table-number",title:"Last table number",slug:"/commands/last-table-number",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Last field number",permalink:"/docs/pt/commands/last-field-number"},next:{title:"PAUSE INDEXES",permalink:"/docs/pt/commands/pause-indexes"}},d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Example",id:"example",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Last table number"}),"  -> Resultado de fun\xe7\xe3o"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Resultado de fun\xe7\xe3o"}),(0,s.jsx)(a.td,{children:"Inteiro longo"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"N\xfamero de tabela mais alto no banco de dados"})]})})]}),"\n",(0,s.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["Last table number retorna o maior n\xfamero de tabela entre as tabelas no banco. As tabelas est\xe3o numeradas na ordem na qual foram criadas. Se nenhuma tabela tiver sido apagada do banco, o comando retorna o n\xfamero de tabelas presentes no banco. No caso de loops iterativos sobre os n\xfameros de tabelas do banco, deve utilizar o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/is-table-number-valid",children:"Is table number valid"})," para verificar que a tabela n\xe3o tenha sido apagada."]}),"\n",(0,s.jsx)(a.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(a.p,{children:["O seguinte exemplo inicializa os elementos do array ",(0,s.jsx)(a.em,{children:"arrayTabelas"}),", com os nomes das tabelas definidos no banco. Este array pode ser utilizado como lista drop down (ou abas, \xe1rea de deslocamento, etc.), para mostrar em um formul\xe1rio a lista de tabelas do banco"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrayTabelas;Last table number)\n\xa0If(Last table number>0)\xa0//Se o banco de dados n\xe3o tiver tabelas\n\xa0\xa0\xa0\xa0For($vlTabelas;Size of array(arrayTabelas);1;-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTabelas))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0arrayTabelas{$vlTabelas}:=Table name($vlTabelas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asTabelas;$vlTabelas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n"})}),"\n",(0,s.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/pt/commands/last-field-number",children:"Last field number"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/commands/is-table-number-valid",children:"Is table number valid"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/commands/table-name",children:"Table name"})]})]})}function m(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>l});var s=n(296540);const t={},r=s.createContext(t);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);