"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79339"],{844032:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands/theme/Sets_theme","title":"Conjuntos","description":"|                                                                                                                 |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/theme/Sets.md","sourceDirName":"commands/theme","slug":"/commands/theme/Sets","permalink":"/docs/pt/commands/theme/Sets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FSets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Sets_theme","title":"Conjuntos","slug":"/commands/theme/Sets"},"sidebar":"docs","previous":{"title":"TRUNCATE TABLE","permalink":"/docs/pt/commands/truncate-table"},"next":{"title":"ADD TO SET","permalink":"/docs/pt/commands/add-to-set"}}'),r=n("785893"),c=n("250065");let d={id:"Sets_theme",title:"Conjuntos",slug:"/commands/theme/Sets"},o=void 0,i={},l=[];function j(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/add-to-set",children:[(0,r.jsx)(s.strong,{children:"ADD TO SET"})," ( {",(0,r.jsx)(s.em,{children:"tabela"})," ;} ",(0,r.jsx)(s.em,{children:"conjunto"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/clear-set",children:[(0,r.jsx)(s.strong,{children:"CLEAR SET"})," ( ",(0,r.jsx)(s.em,{children:"conjunto"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/copy-set",children:[(0,r.jsx)(s.strong,{children:"COPY SET"})," ( ",(0,r.jsx)(s.em,{children:"comOrigem"})," ; ",(0,r.jsx)(s.em,{children:"comDestino"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/create-empty-set",children:[(0,r.jsx)(s.strong,{children:"CREATE EMPTY SET"})," ( {",(0,r.jsx)(s.em,{children:"tabela"})," ;} ",(0,r.jsx)(s.em,{children:"conjunto"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/create-set",children:[(0,r.jsx)(s.strong,{children:"CREATE SET"})," ( {",(0,r.jsx)(s.em,{children:"tabela"})," ;} ",(0,r.jsx)(s.em,{children:"conjunto"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/create-set-from-array",children:[(0,r.jsx)(s.strong,{children:"CREATE SET FROM ARRAY"})," ( ",(0,r.jsx)(s.em,{children:"tabela"})," ; ",(0,r.jsx)(s.em,{children:"arrayReg"})," {; ",(0,r.jsx)(s.em,{children:"nomConjunto"}),"} )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/difference",children:[(0,r.jsx)(s.strong,{children:"DIFFERENCE"})," ( ",(0,r.jsx)(s.em,{children:"conjunto1"})," ; ",(0,r.jsx)(s.em,{children:"conjunto2"})," ; ",(0,r.jsx)(s.em,{children:"conjuntoResultado"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/intersection",children:[(0,r.jsx)(s.strong,{children:"INTERSECTION"})," ( ",(0,r.jsx)(s.em,{children:"conjunto1"})," ; ",(0,r.jsx)(s.em,{children:"conjunto2"})," ; ",(0,r.jsx)(s.em,{children:"conjuntoResultado"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/is-in-set",children:[(0,r.jsx)(s.strong,{children:"Is in set"})," ( ",(0,r.jsx)(s.em,{children:"conjunto"})," ) : Boolean"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/load-set",children:[(0,r.jsx)(s.strong,{children:"LOAD SET"})," ( {",(0,r.jsx)(s.em,{children:"tabela"})," ;} ",(0,r.jsx)(s.em,{children:"conjunto"})," ; ",(0,r.jsx)(s.em,{children:"documento"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/records-in-set",children:[(0,r.jsx)(s.strong,{children:"Records in set"})," ( ",(0,r.jsx)(s.em,{children:"conjunto"})," ) : Integer"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/remove-from-set",children:[(0,r.jsx)(s.strong,{children:"REMOVE FROM SET"})," ( {",(0,r.jsx)(s.em,{children:"tabela"})," ;} ",(0,r.jsx)(s.em,{children:"conjunto"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/save-set",children:[(0,r.jsx)(s.strong,{children:"SAVE SET"})," ( ",(0,r.jsx)(s.em,{children:"conjunto"})," ; ",(0,r.jsx)(s.em,{children:"documento"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/union",children:[(0,r.jsx)(s.strong,{children:"UNION"})," ( ",(0,r.jsx)(s.em,{children:"conjunto1"})," ; ",(0,r.jsx)(s.em,{children:"conjunto2"})," ; ",(0,r.jsx)(s.em,{children:"conjuntoResultado"})," )"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"/docs/pt/commands/use-set",children:[(0,r.jsx)(s.strong,{children:"USE SET"})," ( ",(0,r.jsx)(s.em,{children:"conjunto"})," )"]}),(0,r.jsx)(s.br,{})]})})]})]})}function h(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return d}});var t=n(667294);let r={},c=t.createContext(r);function d(e){let s=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);