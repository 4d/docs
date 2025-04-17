"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44158"],{608670:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-document-position","title":"SET DOCUMENT POSITION","description":"SET DOCUMENT POSITION ( docRef ; offset {; ancora} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-document-position.md","sourceDirName":"commands-legacy","slug":"/commands/set-document-position","permalink":"/docs/pt/20-R8/commands/set-document-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-document-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-document-position","title":"SET DOCUMENT POSITION","slug":"/commands/set-document-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select folder","permalink":"/docs/pt/20-R8/commands/select-folder"},"next":{"title":"SET DOCUMENT PROPERTIES","permalink":"/docs/pt/20-R8/commands/set-document-properties"}}'),o=s("785893"),d=s("250065");let r={id:"set-document-position",title:"SET DOCUMENT POSITION",slug:"/commands/set-document-position",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET DOCUMENT POSITION"})," ( ",(0,o.jsx)(n.em,{children:"docRef"})," ; ",(0,o.jsx)(n.em,{children:"offset"})," {; ",(0,o.jsx)(n.em,{children:"ancora"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"docRef"}),(0,o.jsx)(n.td,{children:"Time"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de refer\xeancia de documento"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"offset"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Posi\xe7\xe3o de arquivo (expresso em bytes)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ancora"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"1 = em rela\xe7\xe3o ao come\xe7o do arquivo 2= em rela\xe7\xe3o ao final do arquivo 3= em rela\xe7\xe3o a posi\xe7\xe3o atual"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Este comando funciona apenas em um documento aberto cujo n\xfamero de refer\xeancia \xe9 passado em ",(0,o.jsx)(n.em,{children:"docRef"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["SET DOCUMENT POSITION define a posi\xe7\xe3o que se passa em ",(0,o.jsx)(n.em,{children:"offset"})," onde ocorrer\xe1 a pr\xf3xima leitura (",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/receive-packet",children:"RECEIVE PACKET"}),") ou escrita (",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/send-packet",children:"SEND PACKET"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["Se omite o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"ancora"}),", a posi\xe7\xe3o \xe9 relativa ao in\xedcio do documento. Se especificar o par\xe2metro ",(0,o.jsx)(n.em,{children:"ancora"}),", passe um dos valores listados anteriormente."]}),"\n",(0,o.jsx)(n.p,{children:"Dependendo da \xe2ncora pode passar valores positivos ou negativos em offset."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-document-position",children:"Get document position"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/receive-packet",children:"RECEIVE PACKET"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"482"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let o={},d=t.createContext(o);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);