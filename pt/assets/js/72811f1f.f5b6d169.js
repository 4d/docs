"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63358"],{468112:function(n,e,o){o.r(e),o.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/union","title":"UNION","description":"UNION ( conjunto1 ; conjunto2 ; conjuntoResultado )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/union.md","sourceDirName":"commands-legacy","slug":"/commands/union","permalink":"/docs/pt/20-R8/commands/union","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funion.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"union","title":"UNION","slug":"/commands/union","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE SET","permalink":"/docs/pt/20-R8/commands/save-set"},"next":{"title":"USE SET","permalink":"/docs/pt/20-R8/commands/use-set"}}'),t=o("785893"),d=o("250065");let r={id:"union",title:"UNION",slug:"/commands/union",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"UNION"})," ( ",(0,t.jsx)(e.em,{children:"conjunto1"})," ; ",(0,t.jsx)(e.em,{children:"conjunto2"})," ; ",(0,t.jsx)(e.em,{children:"conjuntoResultado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe2metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"conjunto1"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Primeiro conjunto"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"conjunto2"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Segundo conjunto"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"conjuntoResultado"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Conjunto Resultado"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(e.p,{children:["UNION cria um novo conjunto que cont\xe9m todos os registros de ",(0,t.jsx)(e.em,{children:"conjunto1 e conjunto2"}),". A seguinte tabela mostra todos os poss\xedveis resultados de uma opera\xe7\xe3o de uni\xe3o de conjuntos."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Conjunto1"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Conjunto2"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Conjunto resultante"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sim"}),(0,t.jsx)(e.td,{children:"N\xe3o"}),(0,t.jsx)(e.td,{children:"Sim"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sim"}),(0,t.jsx)(e.td,{children:"Sim"}),(0,t.jsx)(e.td,{children:"Sim"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xe3o"}),(0,t.jsx)(e.td,{children:"Sim"}),(0,t.jsx)(e.td,{children:"Sim"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xe3o"}),(0,t.jsx)(e.td,{children:"N\xe3o"}),(0,t.jsx)(e.td,{children:"N\xe3o"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"O resultado de uma opera\xe7\xe3o de uni\xe3o se mostra a continua\xe7\xe3o. A parte sombreada \xe9 o conjunto resultante."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:o(278575).Z+"",width:"149",height:"107"})}),"\n",(0,t.jsxs)(e.p,{children:["O ",(0,t.jsx)(e.em,{children:"conjuntoResultado"})," se cria por UNION. O conjunto resultado substitui todo conjunto existente que tenha o mesmo nome, incluindo ",(0,t.jsx)(e.em,{children:"conjunto1 e conjunto2"}),". Os conjuntos ",(0,t.jsx)(e.em,{children:"conjunto1 e conjunto2"})," devem ser da mesma tabela. O conjunto resultado pertence \xe0 mesma tabela que ",(0,t.jsx)(e.em,{children:"conjunto1 e conjunto2"}),". O registro atual de resultado \xe9 o registro atual de conjunto1."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"4D Server"}),': em modo cliente/Servidor, os conjuntos s\xe3o "vis\xedveis" dependendo do tipo (interprocesso, processo e local) e onde eles foram criados (servidor ou cliente). UNION exige que todos os tr\xeas conjuntos estejam na mesma m\xe1quina. Para maior informa\xe7\xe3o consulte ',(0,t.jsx)(e.em,{children:"4D Server, conjuntos e sele\xe7\xf5es temporais"})," no manual de refer\xeancia de 4D Server."]}),"\n",(0,t.jsx)(e.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(e.p,{children:"Este exemplo adiciona registros ao conjunto de melhores clientes. Os registros s\xe3o mostrados em tela com a primeira linha. Depois de mostrar os registros na tela, um conjunto dos melhores clientes \xe9 carregado a partir do disco, e todos os registros selecionados pelo usu\xe1rio (o conjunto sistema chamado \u201CUserSet\u201D) se adicionam ao conjunto. Finalmente, o novo conjunto \xe9 guardado no disco:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0ALL RECORDS([Clientes])\xa0// Seleciona todos os clientes\n\xa0DISPLAY SELECTION([Clientes])\xa0// Mostrar todos os clientes de uma lista\n\xa0LOAD SET("$Melhores";"$SalvarMelhores")\xa0// Carregar o conjunto dos melhores clientes\n\xa0UNION("$Melhores";"UserSet";"$Melhores")\xa0// Adi\xe7\xe3o da sele\xe7\xe3o ao conjunto\n\xa0SAVE SET("$Melhores";"$SalvarMelhores")\xa0// Salvar o conjunto dos melhores clientes\n'})}),"\n",(0,t.jsx)(e.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R8/commands/difference",children:"DIFFERENCE"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/pt/20-R8/commands/intersection",children:"INTERSECTION"})]}),"\n",(0,t.jsx)(e.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xfamero do comando"}),(0,t.jsx)(e.td,{children:"120"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread-seguro"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},278575:function(n,e,o){o.d(e,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAABrCAIAAADxWFdxAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFw0yJozOPx4AAAOdSURBVHic7Z3hcuMgDIRFp+//yrnLcaXUwkQhnvBpuvunzudEJdqCvUOmKSaFdbvddg/hqGJfwyqlDMcnPud79VF/0JoC5B4SdPcP2KwUnKC7f6imZOEQfQwprVk0ztHAP1qzaBylo3+0ZtE4TT/8ozWLxoH69o/WLBpnSvkvyj0kSPlvnROk/LfIIVL+W+EcfXoUfzP9VWF41tepL4nUb8+UeROt579m3u2f7JGdcw3Ne2o87+E0/ZgNT72Z+UzqH/b1PVyr/37OdHQ9/53pbF72dR6aN6+vmdf0av4rnV6p4/lwuMp/B33PlcG51eXUv9vDEtqeNqnv18+910LmvLws/3m19ZNzDbuQQ7Se/9qaadPlbniWZkZS8+yV/b/++tcTc6uof5VlNhWlY35/6s3MrwovNityjXw/p0n7f4nNM+3/xTlT2v+Lcg8J0v7fOidI+3+LHCLt/61wjvT5z8TmmT7/mdo8U/5LbZ4p/8U5U7jPmGCTFlB349qRP73F1AL72ETjwz+17ePB5T/aeOAcl/9o44Fz5b/cXPkvN1f+S8xN+S/ODXZjVaX9vyj3kDAe7f/l5sp/ubnyX26u/JebK//l5sp/ibkp/8W5wW6sqpT/otxDwniU/3Jz5b/cXPkvN1f+y82V/3Jz5b/E3JT/4txgN1ZVyn9R7iFhPMp/ubnyX26u/JebK//l5sp/ubnyX2Juyn9xbrAbqyrlvyj3kDAe5b/cXPkvN1f+y82V/3Jz5b/k3CNpIo55FX5OssUWtbHi/tJhvGp8/7JdtGYBeT0g+gdsFpYT/dvelESc6J8XpFlAnsA/TrOAnO4fqllAjvaP1iwaN7J/tGbReBXUP1qzgLweEP0DNgvLif5tb0oiPvj+cKC2N6ucf6PoWZ0S+6bRvnj/WuW/y3hzourCcdaDVrbZGa9Dn3/bzXvI/dTsYcS8V8aDnn8ck854PzVt5MqkznA2K/9dzw+L23DCxTX8veX5/7pfBV0/OeY19TcXh6d5R888vsq8Vp/oH828tWvY0NSrzGv1iesn0KSIGeVL8frL5n0/nKytW3T2PgkRotch53l+OHVm3rBsZJz1mLh+HrTdPHOu9A8noXtuhl2x0hDXz14E88gc7R+tWTRuZP9ozaLxKqh/tGYBeT0g+gdsFpYT/dvelESc6J8XpFlAnsA/TrOAnO4fqllAjvaP1iwaN7J/tGbR+P+zk3NbVF7bHf1V+uvdH6Pfxc4DeTnJAAAAAElFTkSuQmCC"},250065:function(n,e,o){o.d(e,{Z:function(){return c},a:function(){return r}});var s=o(667294);let t={},d=s.createContext(t);function r(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);