"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56915"],{155193:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-page-count","title":"WP Get page count","description":"WP Get page count ( docWP ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-page-count.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-page-count","permalink":"/docs/pt/WritePro/commands/wp-get-page-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-page-count.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-page-count","title":"WP Get page count","slug":"/WritePro/commands/wp-get-page-count","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get links","permalink":"/docs/pt/WritePro/commands/wp-get-links"},"next":{"title":"WP Get position","permalink":"/docs/pt/WritePro/commands/wp-get-position"}}'),s=o("785893"),r=o("250065");let a={id:"wp-get-page-count",title:"WP Get page count",slug:"/WritePro/commands/wp-get-page-count",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get page count"})," ( ",(0,s.jsx)(n.em,{children:"docWP"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docWP"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de p\xe1ginas em documento"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"WP Get page count"})," devolve o n\xfamero total de p\xe1ginas definidas no documento 4D Write Pro ",(0,s.jsx)(n.em,{children:"docWP"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"objAlvo"}),", \xe9 poss\xedvel passar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uma se\xe7\xe3o/subse\xe7\xe3o ou"}),"\n",(0,s.jsx)(n.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["O comando retorna o n\xfamero de p\xe1ginas de ",(0,s.jsx)(n.em,{children:"objAlvo"}),". Se passar uma subse\xe7\xe3o, o n\xfamero de p\xe1ginas da se\xe7\xe3o pai \xe9 retornada."]}),"\n",(0,s.jsxs)(n.p,{children:["As mesmas configura\xe7\xf5es de vis\xe3o, como para o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-print",children:"WP PRINT"}),", s\xe3o usadas com ",(0,s.jsx)(n.strong,{children:"WP Get page count"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"cabe\xe7alhos: vis\xedveis"}),"\n",(0,s.jsx)(n.li,{children:"rodap\xe9s: vis\xedveis"}),"\n",(0,s.jsx)(n.li,{children:"express\xf5es: computadas e exibidas"}),"\n",(0,s.jsx)(n.li,{children:"modo p\xe1gina: p\xe1gina ou rascunho"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"targetObj"}),' for exibido em uma \xe1rea de formul\xe1rio 4D Write Pro, tenha certeza que as configura\xe7\xf5es de vista da \xe1rea correspondem com as configura\xe7\xf5es de vista do comando para informa\xe7\xf5es consistentes. Note tamb\xe9m que se essas configura\xe7\xf5es forem diferentes na \xe1rea, 4D Write Pro vai "clonar" o documento para calcular o layout para cada chamada do comando, o que pode consumir muito tempo. Por raz\xf5es de performance, \xe9 recomendado nesse caso que se construa o documento offline e que o copie para a \xe1rea de formul\xe1rio objeto quando estiver completo.']}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:'Se quiser saber o n\xfamero total de p\xe1ginas de documentos 4D Write Pro armazenados no campo "Manual" dentro da sele\xe7\xe3o atual de elementos. Pode escrever:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $pageCount : Integer\n\xa0var $totalCount : Integer\n\xa0FIRST RECORD([Items])\n\xa0While(Not(End selection([Items]))\n\xa0\xa0\xa0\xa0$pageCount:=WP Get page count([Items]Manual)\n\xa0\xa0\xa0\xa0$totalCount:=$totalCount+$pageCount\n\xa0\xa0\xa0\xa0NEXT RECORD([Items])\n\xa0End while\n\xa0ALERT("N\xfamero total de p\xe1ginas de manual: "+String($totalCount))\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return a}});var t=o(667294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);