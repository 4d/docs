"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72652"],{355755:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>c});var n=JSON.parse('{"id":"commands-legacy/convert-to-text","title":"Convert to text","description":"Convert to text ( BLOB ; conjuntoCaracteres ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/convert-to-text","permalink":"/docs/pt/commands/convert-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-to-text","title":"Convert to text","slug":"/commands/convert-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONVERT FROM TEXT","permalink":"/docs/pt/commands/convert-from-text"},"next":{"title":"Delete string","permalink":"/docs/pt/commands/delete-string"}}'),r=o("785893"),s=o("250065");let c={id:"convert-to-text",title:"Convert to text",slug:"/commands/convert-to-text",displayed_sidebar:"docs"},d=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Convert to text"})," ( ",(0,r.jsx)(t.em,{children:"BLOB"})," ; ",(0,r.jsx)(t.em,{children:"conjuntoCaracteres"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Blob"}),(0,r.jsx)(t.td,{children:"Blob"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Blob que cont\xe9m texto expresso num conjunto de caracteres espec\xedfico"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"conjuntoCaracteres"}),(0,r.jsx)(t.td,{children:"Text, Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Nome ou n\xfamero do conjunto de caracteres do BLOB"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Conte\xfados do BLOB expressos em conjunto de caracteres 4D"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando Convert to text converte o texto contido no par\xe2metro ",(0,r.jsx)(t.em,{children:"blob"})," e o devolve em texto expresso no conjunto de caracteres de 4D. 4D utiliza como padr\xe3o o conjunto de caracteres UTF-16."]}),"\n",(0,r.jsxs)(t.p,{children:["Em",(0,r.jsx)(t.em,{children:"conjunto"})," ",(0,r.jsx)(t.em,{children:"Caracteres"}),", passe o conjunto de caracteres do texto contido no ",(0,r.jsx)(t.em,{children:"blob"}),", o qual ser\xe1 utilizado para a convers\xe3o.",(0,r.jsx)(t.br,{}),"\nSe o BLOB cont\xe9m texto copiado desde 4D, o texto do BLOB ser\xe1 provavelmente UTF-16. Pode passar uma cadeia com o nome padr\xe3o do conjunto de caracteres, ou com seus apelidos (por exemplo, \u201CISO-8859-1\u201D ou \u201CUTF-8\u201D), ou seu identificador (inteiro longo). Para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(t.a,{href:"/docs/pt/commands/convert-from-text",title:"CONVERT FROM TEXT",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Convert to text \xe9 compat\xedvel com BOMs (Byte Order Marks). Se o conjunto de caracteres especificado \xe9 de tipo Unicode (UTF-8, UTF-16 ou UTF-32), 4D tenta identificar um BOM entre os primeiros bytes recebidos. Se o detectar, ele \xe9 filtrado do resultado e 4D utiliza o conjunto de caracteres definido ao inv\xe9s do conjunto de caracteres especificado."}),"\n",(0,r.jsx)(t.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(t.p,{children:"Se o comando for executado corretamente, a vari\xe1vel OK assume o valor 1. Do contr\xe1rio, assume o valor 0."}),"\n",(0,r.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/pt/commands/convert-from-text",children:"CONVERT FROM TEXT"})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return d},a:function(){return c}});var n=o(667294);let r={},s=n.createContext(r);function c(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);