"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59086"],{910427:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-section","title":"WP Get section","description":"WP Get section ( alvoObj ) | (wpDoc ; \xedndiceSe\xe7\xe3o ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-section.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-section","permalink":"/docs/pt/WritePro/commands/wp-get-section","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-section.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-section","title":"WP Get section","slug":"/WritePro/commands/wp-get-section","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get position","permalink":"/docs/pt/WritePro/commands/wp-get-position"},"next":{"title":"WP Get sections","permalink":"/docs/pt/WritePro/commands/wp-get-sections"}}'),s=o("785893"),r=o("250065");let i={id:"wp-get-section",title:"WP Get section",slug:"/WritePro/commands/wp-get-section",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get section"})," ( ",(0,s.jsx)(n.em,{children:"alvoObj"})," ) | (",(0,s.jsx)(n.em,{children:"wpDoc"})," ; \xedndiceSe\xe7\xe3o ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"alvoObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range ou elemento de refer\xeancia"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpDoc"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Documento 4D Write pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xedndiceSe\xe7\xe3o"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\xcdndice da se\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Se\xe7\xe3o 4D Write Pro"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"WP Get section"})," devolve a primeira se\xe7\xe3o intersectada pela range ",(0,s.jsx)(n.em,{children:"alvoObj"})," ou elemento, ou ao ",(0,s.jsx)(n.em,{children:"indiceSe\xe7\xe3o"}),"  especificado do documento ",(0,s.jsx)(n.em,{children:"wpDoc"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Com a primeira sintaxe (utilizando o par\xe2metro ",(0,s.jsx)(n.em,{children:"alvoObj"}),"), o comando devolve a primeira se\xe7\xe3o intersectada pela range ou o elemento. Pode passar em ",(0,s.jsx)(n.em,{children:"targetObj"}),":\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uma range (gama ou faixa de sele\xe7\xe3o de elementos) ou"}),"\n",(0,s.jsxs)(n.li,{children:["uma refer\xeancia de elemento (tabela / fila / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9). N\xe3o se pode passar uma refer\xeancia de subse\xe7\xe3o, nem uma imagem ancorada (se devolve um erro nesse caso).",(0,s.jsx)(n.br,{}),"\nSe a range ou a refer\xeancia do elemento pertencer a uma caixa de texto, ",(0,s.jsx)(n.strong,{children:"WP Get section"})," sempre devolve a primeira se\xe7\xe3o, exceto se estiver ancorado a uma se\xe7\xe3o (nesse caso a se\xe7\xe3o \xe9 devolvida)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Com a segunda sintaxe (utilizando o par\xe2metro ",(0,s.jsx)(n.em,{children:"wpDoc"}),"), o comando devolve a se\xe7\xe3o correspondente \xe0 se\xe7\xe3o ",(0,s.jsx)(n.em,{children:"indiceSe\xe7\xe3o"})," (o valor de ",(0,s.jsx)(n.em,{children:"indiceSe\xe7\xe3o"})," deve ser >=1).",(0,s.jsx)(n.br,{}),"\nSe n\xe3o for definida nenhuma se\xe7\xe3o para o ",(0,s.jsx)(n.em,{children:"indiceSe\xe7\xe3o"})," especificado, o comando devolve um objeto indefinido (n\xe3o se devolve nenhum erro)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," utilize o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})," para obter uma subse\xe7\xe3o de uma se\xe7\xe3o ou de uma range."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser obtera primeira se\xe7\xe3o:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $section : Object\n\xa0\xa0// obt\xe9m a primeira se\xe7\xe3o\n\xa0$section:=WP Get section(wpDoc;1)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-sections",children:"WP Get sections"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var t=o(667294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);