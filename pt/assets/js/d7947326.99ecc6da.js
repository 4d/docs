"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12789"],{573999:function(e,o,t){t.r(o),t.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/get-allowed-methods","title":"GET ALLOWED METHODS","description":"GET ALLOWED METHODS ( arrMetodos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-allowed-methods.md","sourceDirName":"commands-legacy","slug":"/commands/get-allowed-methods","permalink":"/docs/pt/commands/get-allowed-methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-allowed-methods.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-allowed-methods","title":"GET ALLOWED METHODS","slug":"/commands/get-allowed-methods","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formula from string","permalink":"/docs/pt/commands/formula-from-string"},"next":{"title":"Parse formula","permalink":"/docs/pt/commands/parse-formula"}}'),n=t("785893"),r=t("250065");let d={id:"get-allowed-methods",title:"GET ALLOWED METHODS",slug:"/commands/get-allowed-methods",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"GET ALLOWED METHODS"})," ( ",(0,n.jsx)(o.em,{children:"arrMetodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"arrMetodos"}),(0,n.jsx)(o.td,{children:"Text array"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Array de nomes de m\xe9todos"})]})})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando GET ALLOWED METHODS retorna, em ",(0,n.jsx)(o.em,{children:"arrMetodos"}),", os nomes dos m\xe9todos que possam ser utilizados para escrever f\xf3rmulas. Estes m\xe9todos est\xe3o listados ao final da lista de comandos no editor."]}),"\n",(0,n.jsxs)(o.p,{children:["Automaticamente, os m\xe9todos n\xe3o podem ser utilizados no editor de f\xf3rmulas. Os m\xe9todos devem ser autorizados explicitamente utilizando o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/set-allowed-methods",title:"SET ALLOWED METHODS",children:"SET ALLOWED METHODS"}),". Se este comando n\xe3o tiver sido executado, GET ALLOWED METHODS retorna um array vazio."]}),"\n",(0,n.jsxs)(o.p,{children:["GET ALLOWED METHODS retorna exatamente o que se lhe passou a ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/set-allowed-methods",title:"SET ALLOWED METHODS",children:"SET ALLOWED METHODS"}),", ou seja um array alfa (o comando cria e dimensiona o array). Igualmente, se o caractere arroba (@) \xe9 utilizado para definir um grupo de m\xe9todos, \xe9 retornada a cadeia que contenha o caractere @ (e n\xe3o os nomes dos m\xe9todos do grupo)."]}),"\n",(0,n.jsx)(o.p,{children:"Este comando \xe9 \xfatil para conservar os par\xe2metros do conjunto atual de m\xe9todos autorizados antes da execu\xe7\xe3o de uma f\xf3rmula em um contexto espec\xedfico (por exemplo, um relat\xf3rio r\xe1pido)."}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:"Este exemplo autoriza um conjunto de m\xe9todos espec\xedficos para criar um relat\xf3rio:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//Armacenamento dos par\xe2metros atuais\n\xa0GET ALLOWED METHODS(metodosArray)\n\xa0\n\xa0\xa0//Defini\xe7\xe3o dos m\xe9todos para o relat\xf3rio r\xe1pido\n\xa0arrMetodos_Reports{1}:="Reports_@"\n\xa0SET ALLOWED METHODS(arrMetodos_Reports)\n\xa0QR REPORT([Pessoas];"MeuRelatorio")\n\xa0\n\xa0\xa0//Reestabelecimento dos par\xe2metros atuais\n\xa0SET ALLOWED METHODS(arrMetodos)\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"908"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,t){t.d(o,{Z:function(){return a},a:function(){return d}});var s=t(667294);let n={},r=s.createContext(n);function d(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);