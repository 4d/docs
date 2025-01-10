"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95422"],{943859:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/change-string","title":"Change string","description":"Change string ( fonte ; novo ; posi\xe7ao ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/change-string.md","sourceDirName":"commands-legacy","slug":"/commands/change-string","permalink":"/docs/pt/commands/change-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"change-string","title":"Change string","slug":"/commands/change-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/pt/category/string"},"next":{"title":"Char","permalink":"/docs/pt/commands/char"}}'),r=s("785893"),d=s("250065");let i={id:"change-string",title:"Change string",slug:"/commands/change-string",displayed_sidebar:"docs"},c=void 0,a={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Change string"})," ( ",(0,r.jsx)(n.em,{children:"fonte"})," ; ",(0,r.jsx)(n.em,{children:"novo"})," ; ",(0,r.jsx)(n.em,{children:"posi\xe7ao"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fonte"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadeia original"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"novo"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Novos caracteres"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"posi\xe7ao"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Onde come\xe7ar as mudan\xe7as"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Cadeia resultado"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["Change string devolve uma string resultante de modificar os caracteres, na cadeia",(0,r.jsx)(n.em,{children:"fonte"}),", a partir de posi\xe7\xe3o com os caracteres em novo."]}),"\n",(0,r.jsxs)(n.p,{children:["Se ",(0,r.jsx)(n.em,{children:"novo"}),' \xe9 uma cadeia vazia (""), Change string devolve ',(0,r.jsx)(n.em,{children:"fonte"})," sem mudan\xe7as. Change string sempre devolve uma cadeia do mesmo tamanho que ",(0,r.jsx)(n.em,{children:"fonte"}),". Se ",(0,r.jsx)(n.em,{children:"posi\xe7ao"})," \xe9 inferior ou superior \xe0 longitude de ",(0,r.jsx)(n.em,{children:"fonte"}),", Change string devolve ",(0,r.jsx)(n.em,{children:"fonte"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Change string \xe9 diferente de ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/insert-string",children:"Insert string"})," em que substitui os caracteres em lugar de inseri-los."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["O seguinte exemplo ilustra o uso de Change string. Os resultados s\xe3o atribu\xeddos \xe0 vari\xe1vel ",(0,r.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vtResult:=Change string("Acme";"CME";2)\xa0// vtResult \xe9 igual a "ACME"\n\xa0vtResult:=Change string("novembro";"dic";1)\xa0// vtResult \xe9 igual a "dezembro"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/delete-string",children:"Delete string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/insert-string",children:"Insert string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/replace-string",children:"Replace string"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"234"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);