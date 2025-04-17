"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83516"],{867262:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/qr-get-info-row","title":"QR Get info row","description":"QR Get info row ( area ; linea ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-get-info-row.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-info-row","permalink":"/docs/es/commands/qr-get-info-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-info-row.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-get-info-row","title":"QR Get info row","slug":"/commands/qr-get-info-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET INFO COLUMN","permalink":"/docs/es/commands/qr-get-info-column"},"next":{"title":"QR Get report kind","permalink":"/docs/es/commands/qr-get-report-kind"}}'),s=r("785893"),t=r("250065");let l={id:"qr-get-info-row",title:"QR Get info row",slug:"/commands/qr-get-info-row",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR Get info row"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"linea"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del \xe1rea creada"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"linea"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"L\xednea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"0 = visible, 1 = oculta"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando QR Get info row indica si ",(0,s.jsx)(n.em,{children:"linea"})," se muestra o se oculta en ",(0,s.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"linea"})," designa la l\xednea a verificar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["si ",(0,s.jsx)(n.em,{children:"linea"})," es igual a -1, verifica el t\xedtulo del informe"]}),"\n",(0,s.jsxs)(n.li,{children:["si ",(0,s.jsx)(n.em,{children:"linea"})," es igual a -2, verifica el \xe1rea de detalle del informe"]}),"\n",(0,s.jsxs)(n.li,{children:["si ",(0,s.jsx)(n.em,{children:"linea"})," es igual a -3, verifica el \xe1rea del total general"]}),"\n",(0,s.jsxs)(n.li,{children:["si ",(0,s.jsx)(n.em,{children:"linea"})," es un entero positivo, designa la l\xednea de subtotal correspondiente."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Puede utilizar las constantes del tema para designar el elemento de la l\xednea (",(0,s.jsx)(n.em,{children:"qr title"}),"= -1, ",(0,s.jsx)(n.em,{children:"qr detail"}),"=-2, ",(0,s.jsx)(n.em,{children:"qr grand total"}),"=-3)"]}),"\n",(0,s.jsx)(n.p,{children:"El resultado de la funci\xf3n especifica si la l\xednea est\xe1 visible u oculta. Si es igual a 1, la l\xednea est\xe1 oculta; si es igual a 0, la l\xednea es visible."}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"linea"})," es incorrecto, se genera el error -9852."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-get-info-column",children:"QR GET INFO COLUMN"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-set-info-column",children:"QR SET INFO COLUMN"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-set-info-row",children:"QR SET INFO ROW"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"769"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var i=r(667294);let s={},t=i.createContext(s);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);