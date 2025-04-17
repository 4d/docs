"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46126"],{757510:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-set-selection","title":"QR SET SELECTION","description":"QR SET SELECTION ( area ; izquierda ; superior {; derecha {; inferior}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-selection","permalink":"/docs/es/20-R8/commands/qr-set-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-selection","title":"QR SET SELECTION","slug":"/commands/qr-set-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET REPORT TABLE","permalink":"/docs/es/20-R8/commands/qr-set-report-table"},"next":{"title":"QR SET SORTS","permalink":"/docs/es/20-R8/commands/qr-set-sorts"}}'),i=r("785893"),d=r("250065");let t={id:"qr-set-selection",title:"QR SET SELECTION",slug:"/commands/qr-set-selection",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR SET SELECTION"})," ( ",(0,i.jsx)(n.em,{children:"area"})," ; ",(0,i.jsx)(n.em,{children:"izquierda"})," ; ",(0,i.jsx)(n.em,{children:"superior"})," {; ",(0,i.jsx)(n.em,{children:"derecha"})," {; ",(0,i.jsx)(n.em,{children:"inferior"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"area"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"izquierda"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"L\xedmite izquierdo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"superior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"L\xedmite superior"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"derecha"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"L\xedmite derecho"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inferior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"L\xedmite inferior"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando QR SET SELECTION permite seleccionar una celda, una fila, una columna o toda un ",(0,i.jsx)(n.em,{children:"area"})," como lo har\xeda con un rat\xf3n. Este comando tambi\xe9n le permite deseleccionar la selecci\xf3n actual."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"izquierdo"})," es el n\xfamero del l\xedmite izquierdo. Si ",(0,i.jsx)(n.em,{children:"izquierdo"})," es igual a 0, toda la l\xednea es seleccionada.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"superior"})," es el n\xfamero del l\xedmite superior. Si ",(0,i.jsx)(n.em,{children:"superior"})," es igual a 0, toda la columna es seleccionada.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"derecho"})," es el n\xfamero del l\xedmite derecho.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"inferior e"}),"s el n\xfamero del l\xedmite inferior."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notas:"}),(0,i.jsx)(n.br,{}),"\n\u2022 Si ",(0,i.jsx)(n.em,{children:"izquierdo"})," y ",(0,i.jsx)(n.em,{children:"superior"})," son iguales a 0, toda el \xe1rea es seleccionada.",(0,i.jsx)(n.br,{}),"\n\u2022 Para deseleccionar todo, pase -1 en ",(0,i.jsx)(n.em,{children:"izquierdo"}),", ",(0,i.jsx)(n.em,{children:"derecho"}),", ",(0,i.jsx)(n.em,{children:"superior"})," e ",(0,i.jsx)(n.em,{children:"inferior"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,i.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/qr-get-selection",children:"QR GET SELECTION"})}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"794"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var s=r(667294);let i={},d=s.createContext(i);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);