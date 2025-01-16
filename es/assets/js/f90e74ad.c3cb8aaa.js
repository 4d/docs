"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53320"],{343073:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/qr-set-report-table","title":"QR SET REPORT TABLE","description":"QR SET REPORT TABLE ( area ; tabla )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-report-table.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-report-table","permalink":"/docs/es/20-R7/commands/qr-set-report-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-report-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-report-table","title":"QR SET REPORT TABLE","slug":"/commands/qr-set-report-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET REPORT KIND","permalink":"/docs/es/20-R7/commands/qr-set-report-kind"},"next":{"title":"QR SET SELECTION","permalink":"/docs/es/20-R7/commands/qr-set-selection"}}'),s=r("785893"),a=r("250065");let d={id:"qr-set-report-table",title:"QR SET REPORT TABLE",slug:"/commands/qr-set-report-table",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR SET REPORT TABLE"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"tabla"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de tabla"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando QR SET REPORT TABLE define la tabla actual para el \xe1rea del informe referenciada por el par\xe1metro ",(0,s.jsx)(n.em,{children:"area"})," a la tabla n\xfamero ",(0,s.jsx)(n.em,{children:"tabla"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Es necesario que una tabla sea asignada al informe ya que el editor de informes utilizar\xe1 la selecci\xf3n actual de esta tabla para mostrar los datos, efectuar los c\xe1lculos y propagar relaciones, si es necesario."}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"tabla"})," es incorrecto, se genera el error -9852."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/qr-get-report-table",children:"QR Get report table"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"757"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},a=t.createContext(s);function d(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);