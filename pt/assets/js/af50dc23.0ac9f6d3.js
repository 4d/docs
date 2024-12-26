"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35990"],{744179:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/get-query-destination","title":"GET QUERY DESTINATION","description":"GET QUERY DESTINATION ( destinoTipo ; destinoObjeto ; destinoPont )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/get-query-destination","permalink":"/docs/pt/commands/get-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-query-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-query-destination","title":"GET QUERY DESTINATION","slug":"/commands/get-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in field","permalink":"/docs/pt/commands/find-in-field"},"next":{"title":"Get query limit","permalink":"/docs/pt/commands/get-query-limit"}}'),d=s("785893"),o=s("250065");let r={id:"get-query-destination",title:"GET QUERY DESTINATION",slug:"/commands/get-query-destination",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," ( ",(0,d.jsx)(n.em,{children:"destinoTipo"})," ; ",(0,d.jsx)(n.em,{children:"destinoObjeto"})," ; ",(0,d.jsx)(n.em,{children:"destinoPont"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"destinoTipo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"0=sele\xe7\xe3o atual, 1=conjunto, 2=sele\xe7\xe3o temporal, 3=vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"destinoObjeto"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nome do conjunto ou Nome da sele\xe7\xe3o temporal ou Cadeia vazia"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"destinoPont"}),(0,d.jsx)(n.td,{children:"Pointer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Ponteiro \xe0 vari\xe1vel local se destinoTipo=3"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," devolve o destino atual dos resultados das pesquisas para o processo em curso. Por defeito, os resultados das pesquisas modificam a sele\xe7\xe3o atual, mas pode modificar este funcionamento com a ajuda do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-query-destination",children:"SET QUERY DESTINATION"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["No par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoTipo"}),", 4D devolve um valor indicando o destino atual das pesquisas e no par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoObjeto"})," devolve o nome do destino (se aplicado). Pode comparar o valor do par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoTipo"})," com as constantes do tema ",(0,d.jsx)(n.em,{children:"Destinos de pesquisa"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into current selection"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into named selection"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into set"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into variable"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["O valor devolvido no par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoObjeto"})," depende do valor do par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoTipo"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Par\xe2metro destinoTipo"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Par\xe2metro destinoObjeto"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0 (sele\xe7\xe3o atual)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," \xe9 una cadeia vazia"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1 (conjunto)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," cont\xe9m o nome do conjunto"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2 (sele\xe7\xe3o temporal)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," cont\xe9m o nome da sele\xe7\xe3o"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3 (vari\xe1vel)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," \xe9 uma cadeia vazia (utilizar o par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoPont"}),")"]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Quando o destino das pesquisas \xe9 uma vari\xe1vel local (",(0,d.jsx)(n.em,{children:"destinoTipo"})," devolve 3), 4D devolve no par\xe2metro ",(0,d.jsx)(n.em,{children:"destinoPont"})," um ponteiro a esta vari\xe1vel."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Queremos modificar temporariamente o destino de pesquisa e restabelecer os par\xe2metros pr\xe9vios:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0GET QUERY DESTINATION($vType;$vName;$ptr)\n\xa0\xa0//recupera\xe7\xe3o dos par\xe2metros atuais\n\xa0SET QUERY DESTINATION(Into set;"$temp")\n\xa0\xa0//modifica\xe7\xe3o temporal do destino\n\xa0QUERY(...)\xa0//pesquisa\n\xa0SET QUERY DESTINATION($vType;$vName;$ptr)\n\xa0\xa0//restaura\xe7\xe3o dos par\xe2metros\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-query-destination",children:"SET QUERY DESTINATION"})}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1155"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let d={},o=t.createContext(d);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);