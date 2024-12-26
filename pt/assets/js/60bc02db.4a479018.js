"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78201"],{871655:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/relate-one-selection","title":"RELATE ONE SELECTION","description":"RELATE ONE SELECTION ( tabelaN ; tabela1 )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/relate-one-selection.md","sourceDirName":"commands-legacy","slug":"/commands/relate-one-selection","permalink":"/docs/pt/commands/relate-one-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-one-selection","title":"RELATE ONE SELECTION","slug":"/commands/relate-one-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE ONE","permalink":"/docs/pt/commands/relate-one"},"next":{"title":"SAVE RELATED ONE","permalink":"/docs/pt/commands/save-related-one"}}'),t=a("785893"),r=a("250065");let d={id:"relate-one-selection",title:"RELATE ONE SELECTION",slug:"/commands/relate-one-selection",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," ( ",(0,t.jsx)(n.em,{children:"tabelaN"})," ; ",(0,t.jsx)(n.em,{children:"tabela1"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabelaN"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome da tabela Muitos (onde inicia a rela\xe7\xe3o)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabela1"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome da Tabela Um (onde termina a rela\xe7\xe3o)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando RELATE ONE SELECTION cria uma nova sele\xe7\xe3o de registros em ",(0,t.jsx)(n.em,{children:"tabela1"})," a partir da sele\xe7\xe3o de registros da ",(0,t.jsx)(n.em,{children:"tabelaN"})," relacionada e carrega o primeiro registro da nova sele\xe7\xe3o como o registro atual."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando s\xf3 pode ser utilizado se h\xe1 uma rela\xe7\xe3o de Muitos a Um. RELATE ONE SELECTION pode funcionar atrav\xe9s de v\xe1rios n\xedveis de rela\xe7\xf5es. Pode haver v\xe1rias tabelas relacionadas entre a tabela Muitos e a tabela 1. As rela\xe7\xf5es podem ser manuais ou autom\xe1ticas."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RELATE ONE SELECTION"}),' utiliza a "via mais curta" para passar da taba de in\xedcio \xe0 tabela de destino. Se as vias existentes s\xe3o de tamanho equivalente, e voc\xea precisar controlar o caminho utilizado, pode usar o comando ',(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-field-relation",children:"SET FIELD RELATION"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O seguinte exemplo procura os clientes cujas faturas vencem hoje."}),"\n",(0,t.jsxs)(n.p,{children:["Esta \xe9 uma maneira de criar uma sele\xe7\xe3o na tabela ",(0,t.jsx)(n.em,{children:"[Clientes]"}),", a partir de uma sele\xe7\xe3o de registros da tabela ",(0,t.jsx)(n.em,{children:"[Faturas]"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE EMPTY SET([Clientes];"Data de vencimento do pagamento")\n\xa0QUERY([Faturas];[Faturas]DataVenc=Current date)\n\xa0While(Not(End selection([Faturas])))\n\xa0\xa0\xa0\xa0RELATE ONE([Faturas]ClienteID)\n\xa0\xa0\xa0\xa0ADD TO SET([Clientes];"Data de vencimento do pagamento")\n\xa0\xa0\xa0\xa0NEXT RECORD([Faturas])\n\xa0End while\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A seguinte t\xe9cnica utiliza ",(0,t.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," para obter o mesmo resultado:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Faturas];[Faturas]DataVence=Current date)\n\xa0RELATE ONE SELECTION([Faturas];[Clientes])\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Observe:"})," A partir da vers\xe3o 11, este c\xf3digo pode ser inscrito desta maneira sem perder o rendimento:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Clientes];[Faturas]DataVence=Current date)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Conjuntos"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/relate-many-selection",children:"RELATE MANY SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/relate-one",children:"RELATE ONE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"349"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar o registro atual"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return d}});var s=a(667294);let t={},r=s.createContext(t);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);