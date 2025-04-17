"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36820"],{690791:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/intersection","title":"INTERSECTION","description":"INTERSECTION ( conjunto1 ; conjunto2 ; conjuntoResultado )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/intersection.md","sourceDirName":"commands-legacy","slug":"/commands/intersection","permalink":"/docs/pt/20-R8/commands/intersection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fintersection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"intersection","title":"INTERSECTION","slug":"/commands/intersection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIFFERENCE","permalink":"/docs/pt/20-R8/commands/difference"},"next":{"title":"Is in set","permalink":"/docs/pt/20-R8/commands/is-in-set"}}'),t=s("785893"),r=s("250065");let d={id:"intersection",title:"INTERSECTION",slug:"/commands/intersection",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"INTERSECTION"})," ( ",(0,t.jsx)(n.em,{children:"conjunto1"})," ; ",(0,t.jsx)(n.em,{children:"conjunto2"})," ; ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Primeiro conjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Segundo conjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjuntoResultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto Resultado"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["INTERSECTION compara ",(0,t.jsx)(n.em,{children:"conjunto1 e conjunto2"})," e seleciona unicamente os registros que est\xe3o em ambos conjuntos. A seguinte tabela lista todos os resultados poss\xedveis de uma opera\xe7\xe3o de intersec\xe7\xe3o de conjuntos."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto1"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto2"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto resultante"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"N\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"Sim"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"Sim"}),(0,t.jsx)(n.td,{children:"N\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"N\xe3o"}),(0,t.jsx)(n.td,{children:"N\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"O resultado gr\xe1fico de uma opera\xe7\xe3o de intersec\xe7\xe3o \xe9 mostrado abaixo. A \xe1rea sombreada \xe9 o conjunto resultante."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(520075).Z+"",width:"148",height:"107"})}),"\n",(0,t.jsxs)(n.p,{children:["O ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," \xe9 criado por INTERSECTION.. O ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," substitui todo conjunto existente com o mesmo nome, incluindo ",(0,t.jsx)(n.em,{children:"conjunto1 e conjunto2"}),". Os conjuntos ",(0,t.jsx)(n.em,{children:"conjunto1 e conjunto2"})," devem ser da mesma tabela. O ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," pertence \xe0 mesma tabela que ",(0,t.jsx)(n.em,{children:"conjunto1 e conjunto2"}),". Se o mesmo registro atual estiver tanto em ",(0,t.jsx)(n.em,{children:"conjunto 1"})," quanto em ",(0,t.jsx)(n.em,{children:"conjunto 2"}),", ele permanece memorizado em ",(0,t.jsx)(n.em,{children:"conjuntoResultado"}),". Sen\xe3o, ",(0,t.jsx)(n.em,{children:"conjuntoResultado"})," n\xe3o possuir\xe1 um registro atual."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server"}),': em modo cliente/Servidor, conjuntos s\xe3o "vis\xedveis" dependendo do seu tipo (interprocessos, processo e local) e onde foram criados (servidor ou cliente). INTERSECTION exige que os tr\xeas conjuntos sejam vis\xedveis na mesma m\xe1quina.  Para maior informa\xe7\xe3o veja o par\xe1grafo ',(0,t.jsx)(n.em,{children:"4D Server, conjuntos e sele\xe7\xf5es temporais"})," no manual de refer\xeancia de 4D Server."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O exemplo a seguir pesquisa os clientes que s\xe3o atendidos por dois representantes de vendas, Pedro e Paulo. Cada representante de vendas tem um conjunto com seus clientes. Os clientes que est\xe3o em ambos conjuntos s\xe3o os que est\xe3o em contacto com Pedro e Paulo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0INTERSECTION("Pedro";"Paulo";"Ambos")\xa0// Coloca os clientes de ambos conjuntos em Ambos USE SET ("Ambos") ` Utiliza\xe7\xe3o do conjunto\n\xa0CLEAR SET("Ambos")\xa0// Apaga este conjunto mas salva os outros\n\xa0DISPLAY SELECTION([Clientes])\xa0// Mostra os clientes em contato com os dois representantes de vendas\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/difference",children:"DIFFERENCE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/union",children:"UNION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"121"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},520075:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAABrCAIAAAAemjxPAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFw0kGSYwp/QAAAKeSURBVHic7d3tbqMwGAVhXO3933K2EhJi+bBdDMmc7cy/pglCPH0h0CiUybp7vV6fXoV/KhNvnZiVUmgb6uvTK2DXEy848YITLzjxghMvOPGCEy848YITLzjxghMvuD8jLy6lrH/suW47v+TeZ/7ark/esnHnpp3lSDcu6j9uaPLWbUZkvfWXXy0PNv+98v1b/Zo9csxbD+W0MlvA3Bne0vXJm4fjcMLsPQ3tNtdaM+TmkZGFW7Pbjnn7HMSnG3q32TNbnU+zCw2dS1XO8yrHwv37l8rCOeML/AASawORA+J5eSw48YITLzjxghMvOPGCEy848YITLzjxgsNdHvMqdn8P/kvocod/TGeXFt/2OO3a5vf6ZOw2Py7HLABPubPoeMpVQuMpV4+Lp1wzKB5NjnkCQ8QDyjFnkYiHEsLKTUy8fcodFoCn3Fl0POUqofGUq8fFU64ZFI8m53leb0A55iwS8VBCWLmJibdPucMC8JQ7i46nXCU0nnL1uHjKNYPi0eQ8z+sNKMecRSIeSggrNzHx9il3WACecmfR8ZSrhMZTrh4XT7lmUDyanOd5vQHlmLNIxEMJYeUmJt4+5Q4LwFPuLDqecpXQeMrVI74DxoYSLcA/MeAqMSsp3wZhh4kXnHjBiReceMGJF5x4wYkXnHjBiReceMERv+kWWHnspuJl4L6tTl678thNxcvJnZE7c/J+3GY+DkendNxUvHM0Kzl5Q52NzkJSsVledTknr93r+ZuKX5tC8bpab9YZcvPIyMIv7z/Fu6GRQRw58nnMa7fZZw4+bfOSaeRu2bQPjDA/w1I5z6scC/fvXyrLrDzzbJVwWwq4Ssz8AFJ24gUnXnDiBSdecOIFJ15w4gUnXnDiBSdecLgLicyvq2H2F2tBiwee2pq5AAAAAElFTkSuQmCC"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var o=s(667294);let t={},r=o.createContext(t);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);