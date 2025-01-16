"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3398"],{457870:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/difference","title":"DIFFERENCE","description":"DIFFERENCE ( conjunto1 ; conjunto2 ; conjuntoResultado )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/difference.md","sourceDirName":"commands-legacy","slug":"/commands/difference","permalink":"/docs/pt/20-R7/commands/difference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdifference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"difference","title":"DIFFERENCE","slug":"/commands/difference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SET FROM ARRAY","permalink":"/docs/pt/20-R7/commands/create-set-from-array"},"next":{"title":"INTERSECTION","permalink":"/docs/pt/20-R7/commands/intersection"}}'),t=s("785893"),r=s("250065");let d={id:"difference",title:"DIFFERENCE",slug:"/commands/difference",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DIFFERENCE"})," ( ",(0,t.jsx)(n.em,{children:"conjunto1"})," ; ",(0,t.jsx)(n.em,{children:"conjunto2"})," ; ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto que ser\xe1 subtra\xeddo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjuntoResultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto Resultado"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["DIFFERENCE compara ",(0,t.jsx)(n.em,{children:"conjunto1"})," e ",(0,t.jsx)(n.em,{children:"conjunto2"})," e exclui de ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," todos os registros de ",(0,t.jsx)(n.em,{children:"conjunto2"}),". Em outras palavras, um registro \xe9 inclu\xeddo em ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," apenas se estiver em c",(0,t.jsx)(n.em,{children:"onjunto1"}),", mas n\xe3o em ",(0,t.jsx)(n.em,{children:"conjunto2"}),". A seguinte tabela mostra todos os resultados poss\xedveis de uma opera\xe7\xe3o de diferen\xe7a de conjuntos."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:[(0,t.jsx)(n.strong,{children:"Conjunto"})," ",(0,t.jsx)(n.strong,{children:"1"})]}),(0,t.jsxs)(n.th,{children:[(0,t.jsx)(n.strong,{children:"Conjunto"})," ",(0,t.jsx)(n.strong,{children:"2"})]}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto Resultado"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"Sim"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"N\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"N\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"N\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"O gr\xe1fico representa uma opera\xe7\xe3o de diferen\xe7a entre dois conjuntos. O \xe1rea sombreada \xe9 o conjunto resultante."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(229801).Z+"",width:"148",height:"107"}),(0,t.jsx)(n.br,{}),"\nO ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," \xe9 criado por DIFFERENCE O ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," substitui qualquer conjunto existente que tenha o mesmo nome, incluindo ",(0,t.jsx)(n.em,{children:"conjunto1"})," e ",(0,t.jsx)(n.em,{children:"conjunto2"}),". Os conjuntos ",(0,t.jsx)(n.em,{children:"conjunto1"})," e ",(0,t.jsx)(n.em,{children:"conjunto2"})," devem ser da mesma tabela. O conjunto resultado pertence a mesma tabela que ",(0,t.jsx)(n.em,{children:"conjunto1"})," e ",(0,t.jsx)(n.em,{children:"conjunto2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server"}),': em modo cliente/Servidor, conjuntos s\xe3o "vis\xedveis" dependendo do tipo (interprocesso, processo e local) e onde eles foram criados (servidor ou cliente). DIFFERENCE exige que todos os tr\xeas conjuntos sejam vis\xedveis na mesma m\xe1quina. Veja o par\xe1grafo ',(0,t.jsx)(n.em,{children:"4D Server, conjuntos e sele\xe7\xf5es temporais"})," no Manual de Refer\xeancia 4D Server para mais informa\xe7\xe3o."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este exemplo exclui os registros selecionados pelo usu\xe1rio. Os registros se mostran na tela com la seguinte instru\xe7\xe3o:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0DISPLAY SELECTION([Clientes])\xa0// Visualiza\xe7\xe3o dos clientes em uma lista\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ao final da lista de registros h\xe1 um bot\xe3o com um m\xe9todo de objeto. O m\xe9todo de objeto exclui os registros selecionados pelo usu\xe1rio (o conjunto sistema chamado \u201CUserSet\u201D), e mostra uma sele\xe7\xe3o reduzida:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE SET([Clientes];"$Atual")\xa0// Cria\xe7\xe3o de um conjunto a partir da sele\xe7\xe3o atual DIFFERENCE ("$Atual";"UserSet";"$Atual") ` Exclus\xe3o dos registros selecionados\n\xa0&NBSP;USE SET("$Atual")\xa0// Utiliza\xe7\xe3o do novo conjunto\n\xa0&NBSP;CLEAR SET("$Atual")\xa0// Apagar o conjunto\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/intersection",children:"INTERSECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/union",children:"UNION"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"122"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},229801:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAABrCAIAAAAemjxPAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kIEwsuNzTWFzUAAALiSURBVHic7Z3RbsMgEASh6v//cprUESXYYMCu2JVmntILcfGtD7MBxTFAN4/HY3UXPoih0qcYI/E8XmuwkK/D6PJMicdFOBBPLVNqcR1K8dQypRaX4kM8tUypxdX4E08tU2pxQd7iqWVKML4PLuclnmCmLOLLeYknlRGXuAL4vJm4CPg8V+UCPs9XuYDP81XuyXd6NTd7zufQW7P2cbb2eYPR2TnKJd7iTfue9G78Jdw3dz3sLj4v5zaft0UKLROpKNO7d/3fhfHl/IvPSyVYtEx/buOnlBJ2yoX8npfTcyabAHPjiZoSjsqFiz4v1VYxKqb2NWmllDBVLuwr78YzHDpzNYX0lQuFeENn0phb1pqNziFrx0e5jXmfl95Nr3Ofl4+Zhf8rTMVoplAu8U6i2ugkGA96W/9Yz5uPL4f1vMm4AqznzcRFYD3PVbnAep6vcoH1PF/lAvs2++OCsG+zN74PLgefNx9fDj5vMq7A8bc+jE4WHIi39hqXvdLVOvbsj7rPgwbSPg/a6Po8OEXU50EPij4POpHzedCP3HreSX8hw2A9D2rg84zB5xmDzzMGn2cMPs8YfJ4x+Dxj8HnG4POMwecZg88zBp9nDD7PGHyeMfg8Y/B5xuDzjMHnGYPPMwafZww+zxh8njH4PGPwecbg84zB5xmDzzMGn2cMs7sBpK6zKHjhC3ZJk7j/NQgwAvGMQTxjEM8YxDMG8YxBPGMQzxjEMwbxjEE8Y44fOwoFxf6Mnm9f48jzBfsPm0PlnROz5xdv+b1rr038fDLy6GGpvGGK+jgsnZg9VLxWT52l2YDKu0StdJIkDW3Sp6ah8s557B4qfvuK41wVIl4XeVo3IYvIlYNPj5+IdwNXCvHKnY973jnFmHmxWfGRcEF7uQ0jmntYGj6vcS/cz18ax2y0rHVJLlOCXdKEDUjeIJ4xiGcM4hmDeMYgnjGIZwziGYN4xiCeMYhnjNwXifwUSz8/PPbwT+A98PwAAAAASUVORK5CYII="},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let t={},r=o.createContext(t);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);