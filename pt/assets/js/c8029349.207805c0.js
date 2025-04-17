"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3319"],{438551:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/records-in-set","title":"Records in set","description":"Records in set ( conjunto ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/records-in-set.md","sourceDirName":"commands-legacy","slug":"/commands/records-in-set","permalink":"/docs/pt/20-R8/commands/records-in-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frecords-in-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"records-in-set","title":"Records in set","slug":"/commands/records-in-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOAD SET","permalink":"/docs/pt/20-R8/commands/load-set"},"next":{"title":"REMOVE FROM SET","permalink":"/docs/pt/20-R8/commands/remove-from-set"}}'),t=s("785893"),o=s("250065");let d={id:"records-in-set",title:"Records in set",slug:"/commands/records-in-set",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Records in set"})," ( ",(0,t.jsx)(n.em,{children:"conjunto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome do conjunto a testar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado Fun\xe7\xe3o"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de registros em conjunto"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["Records in set retorna o n\xfamero de registros em ",(0,t.jsx)(n.em,{children:"conjunto"}),". Se ",(0,t.jsx)(n.em,{children:"conjunto"})," n\xe3o existir, ou se n\xe3o houver registros em ",(0,t.jsx)(n.em,{children:"conjunto"}),", o comando retorna 0."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O seguinte exemplo mostra um alerta indicando a porcentagem de clientes classificados como sendo os melhores:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Calcular primero a porcentagem\n\xa0$Porcentagem :=(Records in set("Melhores")/Records in table([Clientes]))*100\n\xa0\xa0// Mostrar um alerta com a porcentagem\n\xa0ALERT(String($Porcentagem ;"##0%")+" de nossos clientes s\xe3o os melhores.")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/records-in-selection",children:"Records in selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/records-in-table",children:"Records in table"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"195"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);