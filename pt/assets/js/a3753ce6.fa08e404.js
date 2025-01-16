"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69031"],{496861:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/set-print-preview","title":"SET PRINT PREVIEW","description":"SET PRINT PREVIEW ( vistaprevia )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-print-preview.md","sourceDirName":"commands-legacy","slug":"/commands/set-print-preview","permalink":"/docs/pt/20-R7/commands/set-print-preview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-print-preview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-print-preview","title":"SET PRINT PREVIEW","slug":"/commands/set-print-preview","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PRINT OPTION","permalink":"/docs/pt/20-R7/commands/set-print-option"},"next":{"title":"SET PRINTABLE MARGIN","permalink":"/docs/pt/20-R7/commands/set-printable-margin"}}'),t=s("785893"),i=s("250065");let o={id:"set-print-preview",title:"SET PRINT PREVIEW",slug:"/commands/set-print-preview",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET PRINT PREVIEW"})," ( ",(0,t.jsx)(n.em,{children:"vistaprevia"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vistaprevia"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Pr\xe9-visualiza\xe7\xe3o em tela (TRUE), ou sem vista pr\xe9via (FALSE)"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["SET PRINT PREVIEW lhe permite selecionar ou desmarcar por programa\xe7\xe3o a op\xe7\xe3o de pr\xe9-visualiza\xe7\xe3o em tela. Se passar TRUE em ",(0,t.jsx)(n.em,{children:"vistaprevia"}),", se selecionar Pr\xe9-visualiza\xe7\xe3o em tela, se passar FALSE, ser\xe1 desmarcado. Este par\xe2metro \xe9 local para um processo e n\xe3o afeta a impress\xe3o de outros processos ou usu\xe1rios."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," em Windows, \xe9 poss\xedvel definir o formato da vista pr\xe9via de impress\xe3o utilizando o comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-print-option",children:"SET PRINT OPTION"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O exemplo a seguir seleciona a op\xe7\xe3o Pr\xe9-visualiza\xe7\xe3o em tela para mostrar os resultados de uma pesquisa em tela, e depois a desmarca."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Clientes])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET PRINT PREVIEW(True)\n\xa0\xa0\xa0\xa0PRINT SELECTION([Clientes];*)\n\xa0\xa0\xa0\xa0SET PRINT PREVIEW(False)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-print-preview",children:"Get print preview"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/is-in-print-preview",children:"Is in print preview"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"364"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);