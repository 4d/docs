"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61299"],{759960:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-get-selection","title":"QR GET SELECTION","description":"QR GET SELECTION ( area ; izquierda ; superior {; derecha {; inferior}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-get-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-selection","permalink":"/docs/es/commands/qr-get-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-selection","title":"QR GET SELECTION","slug":"/commands/qr-get-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get report table","permalink":"/docs/es/commands/qr-get-report-table"},"next":{"title":"QR GET SORTS","permalink":"/docs/es/commands/qr-get-sorts"}}'),i=r("785893"),d=r("250065");let t={id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR GET SELECTION"})," ( ",(0,i.jsx)(n.em,{children:"area"})," ; ",(0,i.jsx)(n.em,{children:"izquierda"})," ; ",(0,i.jsx)(n.em,{children:"superior"})," {; ",(0,i.jsx)(n.em,{children:"derecha"})," {; ",(0,i.jsx)(n.em,{children:"inferior"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"area"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"izquierda"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"L\xedmite izquierdo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"superior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"L\xedmite superior"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"derecha"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"L\xedmite derecho"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inferior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"L\xedmite inferior"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando QR GET SELECTION devuelve las coordenadas de la selecci\xf3n actual de ",(0,i.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"izquierdo"})," devuelve el n\xfamero de la columna que es el l\xedmite izquierdo de la selecci\xf3n. Si ",(0,i.jsx)(n.em,{children:"izquierdo"})," es igual a 0, toda la l\xednea es seleccionada."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"superior"})," devuelve el n\xfamero de la l\xednea que es el l\xedmite superior de la selecci\xf3n. Si ",(0,i.jsx)(n.em,{children:"superior"})," es igual a 0, toda la columna es seleccionada."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si ",(0,i.jsx)(n.em,{children:"izquierdo"})," y ",(0,i.jsx)(n.em,{children:"superior"})," son iguales a 0, toda el \xe1rea es selecionada."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"derecho"})," es el n\xfamero de la columna que es el l\xedmite derecho de la selecci\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"inferior"})," es el n\xfamero de la fila que es el l\xedmite superior de la selecci\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si no hay selecci\xf3n, los par\xe1metros ",(0,i.jsx)(n.em,{children:"izquierdo"}),", ",(0,i.jsx)(n.em,{children:"superior"}),", ",(0,i.jsx)(n.em,{children:"derecho"})," e ",(0,i.jsx)(n.em,{children:"inferior"})," toman el valor -1."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,i.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/qr-set-selection",children:"QR SET SELECTION"})}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"793"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let i={},d=s.createContext(i);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);