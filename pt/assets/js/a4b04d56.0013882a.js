"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98127"],{9567:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/qr-set-selection","title":"QR SET SELECTION","description":"QR SET SELECTION ( area ; esquerda ; superior {; direita {; inferior }} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-selection","permalink":"/docs/pt/commands/qr-set-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-selection","title":"QR SET SELECTION","slug":"/commands/qr-set-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET REPORT TABLE","permalink":"/docs/pt/commands/qr-set-report-table"},"next":{"title":"QR SET SORTS","permalink":"/docs/pt/commands/qr-set-sorts"}}'),i=r("785893"),d=r("250065");let t={id:"qr-set-selection",title:"QR SET SELECTION",slug:"/commands/qr-set-selection",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR SET SELECTION"})," ( ",(0,i.jsx)(n.em,{children:"area"})," ; ",(0,i.jsx)(n.em,{children:"esquerda"})," ; ",(0,i.jsx)(n.em,{children:"superior"})," {; ",(0,i.jsx)(n.em,{children:"direita"})," {; ",(0,i.jsx)(n.em,{children:"inferior"})," }} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"area"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"esquerda"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Borda esquerda"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"superior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"margem superiro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"direita"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"limite direita"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inferior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"limite inferior"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando QR SET SELECTION permite selecionar uma c\xe9lula, uma fila, uma coluna ou toda uma ",(0,i.jsx)(n.em,{children:"area"})," como seria feito com um mouse. Este comando tamb\xe9m lhe permite desmarcar a sele\xe7\xe3o atual."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"esquerdo"})," \xe9 o n\xfamero do limite esquerdo. Se ",(0,i.jsx)(n.em,{children:"esquerdo"})," \xe9 igual a 0, toda a linha \xe9 selecionada.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"superior"})," \xe9 o n\xfamero do limite superior. Se ",(0,i.jsx)(n.em,{children:"superior"})," \xe9 igual a 0, toda a coluna \xe9 selecionada.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"direito"})," \xe9 o n\xfamero do limite direito.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"inferior"})," \xe9 o n\xfamero do limite inferior."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notas:"}),(0,i.jsx)(n.br,{}),"\n\u2022 Se ",(0,i.jsx)(n.em,{children:"esquerdo"})," e ",(0,i.jsx)(n.em,{children:"superior"})," s\xe3o iguais a 0, toda a \xe1rea \xe9 selecionada.",(0,i.jsx)(n.br,{}),"\n\u2022 Para desmarcar tudo, passe -1 em ",(0,i.jsx)(n.em,{children:"esquerdo, direito, superior"})," e ",(0,i.jsx)(n.em,{children:"inferior"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,i.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/pt/commands/qr-get-selection",children:"QR GET SELECTION"})}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"794"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var s=r(667294);let i={},d=s.createContext(i);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);