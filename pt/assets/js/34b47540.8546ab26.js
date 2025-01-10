"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32627"],{78391:function(e,n,o){o.r(n),o.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>d,assets:()=>a,toc:()=>i,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/close-document","title":"CLOSE DOCUMENT","description":"CLOSE DOCUMENT ( docRef )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/close-document.md","sourceDirName":"commands-legacy","slug":"/commands/close-document","permalink":"/docs/pt/commands/close-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"close-document","title":"CLOSE DOCUMENT","slug":"/commands/close-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Append document","permalink":"/docs/pt/commands/append-document"},"next":{"title":"Convert path POSIX to system","permalink":"/docs/pt/commands/convert-path-posix-to-system"}}'),t=o("785893"),c=o("250065");let s={id:"close-document",title:"CLOSE DOCUMENT",slug:"/commands/close-document",displayed_sidebar:"docs"},r=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"docRef"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docRef"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de refer\xeancia de documento"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["CLOSE DOCUMENT fecha o documento especificado por ",(0,t.jsx)(n.em,{children:"docRef"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Fechar um documento \xe9 a \xfanica forma de garantir que os dados escritos no arquivo sejam guardados. Deve fechar todos os documentos abertos com os comandos ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),", ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/create-document",children:"Create document"})," ou ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/append-document",children:"Append document"}),".."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:'O exemplo abaixo permite ao usu\xe1rio criar um novo documento, escreva a string "Ol\xe1" e fecha o documento:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDocRef : Time\n\xa0vhDocRef:=Create document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDocRef;"Hola")\xa0// Escreva uma palavra no documento\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDocRef)\xa0// Fecha o documento\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/append-document",children:"Append document"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/create-document",children:"Create document"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/open-document",children:"Open document"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"267"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return s}});var d=o(667294);let t={},c=d.createContext(t);function s(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);