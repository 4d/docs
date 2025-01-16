"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26870"],{813541:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/set-document-properties","title":"SET DOCUMENT PROPERTIES","description":"SET DOCUMENT PROPERTIES ( doc ; bloqueado ; invisible ; creado el ; creado a las ; modificado el ; modificado a las )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-document-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-document-properties","permalink":"/docs/es/20-R7/commands/set-document-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-document-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-document-properties","title":"SET DOCUMENT PROPERTIES","slug":"/commands/set-document-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DOCUMENT POSITION","permalink":"/docs/es/20-R7/commands/set-document-position"},"next":{"title":"SET DOCUMENT SIZE","permalink":"/docs/es/20-R7/commands/set-document-size"}}'),i=d("785893"),r=d("250065");let c={id:"set-document-properties",title:"SET DOCUMENT PROPERTIES",slug:"/commands/set-document-properties",displayed_sidebar:"docs"},o=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET DOCUMENT PROPERTIES"})," ( ",(0,i.jsx)(n.em,{children:"doc"})," ; ",(0,i.jsx)(n.em,{children:"bloqueado"})," ; ",(0,i.jsx)(n.em,{children:"invisible"})," ; creado el ; creado a las ; modificado el ; modificado a las )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"doc"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del documento o ruta de acceso completa al documento"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bloqueado"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Bloqueado (True) o desbloqueado (False)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"invisible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Invisible (True) o Visible (False)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"creado el"}),(0,i.jsx)(n.td,{children:"Fecha"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fecha de creaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"creado a las"}),(0,i.jsx)(n.td,{children:"Hora"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Hora de creaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modificado el"}),(0,i.jsx)(n.td,{children:"Fecha"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\xdaltima fecha de modificaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modificado a las"}),(0,i.jsx)(n.td,{children:"Hora"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Hora de la \xfaltima modificaci\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando SET DOCUMENT PROPERTIES modifica la informaci\xf3n del documento cuyo nombre o ruta de acceso se pasa en ",(0,i.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Antes de llamar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pase True en ",(0,i.jsx)(n.em,{children:"bloqueado"})," para bloquear el documento. Un documento bloqueado no puede ser modificado. Pase False en ",(0,i.jsx)(n.em,{children:"bloqueado"})," para desbloquear un documento."]}),"\n",(0,i.jsxs)(n.li,{children:["Pase True en ",(0,i.jsx)(n.em,{children:"invisible"})," para ocultar el documento. Pase False en ",(0,i.jsx)(n.em,{children:"invisible"})," para volver visible el documento en las ventanas del escritorio."]}),"\n",(0,i.jsxs)(n.li,{children:["Pase la fecha y hora de creaci\xf3n del documento en ",(0,i.jsx)(n.em,{children:"creado el"})," y ",(0,i.jsx)(n.em,{children:"creado a las"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Pase la fecha y hora de la \xfaltima modificaci\xf3n del documento en ",(0,i.jsx)(n.em,{children:"modificado en"})," y ",(0,i.jsx)(n.em,{children:"modificado a las"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Las fechas y horas de creaci\xf3n y \xfaltima modificaci\xf3n son administradas por el administrador de archivos de su sistema cada vez que crea o accede a un documento. Utilizando este comando, puede cambiar estas propiedades en casos particulares. Ver el ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-document-properties",title:"GET DOCUMENT PROPERTIES",children:"GET DOCUMENT PROPERTIES"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-document-properties",children:"GET DOCUMENT PROPERTIES"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"478"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return c}});var s=d(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);