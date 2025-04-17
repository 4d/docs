"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73718"],{33383:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-table-properties","title":"GET TABLE PROPERTIES","description":"GET TABLE PROPERTIES ( PtrTabla ; invisible {; trigGuardarNuevo {; trigGuardaReg {; trigBorrarReg {; trigCargReg}}}} )GET TABLE PROPERTIES ( numTabla ; invisible {; trigGuardarNuevo {; trigGuardaReg {; trigBorrarReg {; trigCargReg}}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-table-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-table-properties","permalink":"/docs/es/commands/get-table-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-table-properties.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-table-properties","title":"GET TABLE PROPERTIES","slug":"/commands/get-table-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET RELATION PROPERTIES","permalink":"/docs/es/commands/get-relation-properties"},"next":{"title":"IMPORT STRUCTURE","permalink":"/docs/es/commands/import-structure"}}'),i=n("785893"),s=n("250065");let d={id:"get-table-properties",title:"GET TABLE PROPERTIES",slug:"/commands/get-table-properties",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"GET TABLE PROPERTIES"})," ( ",(0,i.jsx)(r.em,{children:"PtrTabla"})," ; ",(0,i.jsx)(r.em,{children:"invisible"})," {; ",(0,i.jsx)(r.em,{children:"trigGuardarNuevo"})," {; ",(0,i.jsx)(r.em,{children:"trigGuardaReg"})," {; ",(0,i.jsx)(r.em,{children:"trigBorrarReg"})," {; ",(0,i.jsx)(r.em,{children:"trigCargReg"}),"}}}} )",(0,i.jsx)(r.br,{}),(0,i.jsx)(r.strong,{children:"GET TABLE PROPERTIES"})," ( ",(0,i.jsx)(r.em,{children:"numTabla"})," ; ",(0,i.jsx)(r.em,{children:"invisible"})," {; ",(0,i.jsx)(r.em,{children:"trigGuardarNuevo"})," {; ",(0,i.jsx)(r.em,{children:"trigGuardaReg"})," {; ",(0,i.jsx)(r.em,{children:"trigBorrarReg"})," {; ",(0,i.jsx)(r.em,{children:"trigCargReg"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Par\xe1metro"}),(0,i.jsx)(r.th,{children:"Tipo"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"PtrTabla|numTabla"}),(0,i.jsx)(r.td,{children:"Puntero, Entero largo"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Puntero de tabla o n\xfamero de tabla"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"invisible"}),(0,i.jsx)(r.td,{children:"Boolean"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"True = Invisible, False = Visible"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trigGuardarNuevo"}),(0,i.jsx)(r.td,{children:"Boolean"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"True = Trigger \u201COn saving new record\u201D activado; de lo contrario, False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trigGuardaReg"}),(0,i.jsx)(r.td,{children:"Boolean"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"True = Trigger \u201COn saving an existing record\u201D activado; de lo contrario, False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trigBorrarReg"}),(0,i.jsx)(r.td,{children:"Boolean"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"True = Trigger \u201COn deleting a record\u201D activado; de lo contrario, False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"trigCargReg"}),(0,i.jsx)(r.td,{children:"Boolean"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"*** No usado (obsoleto) ***"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(r.p,{children:["El comando GET TABLE PROPERTIES devuelve las propiedades de la tabla pasada por ",(0,i.jsx)(r.em,{children:"ptrTabla"})," o ",(0,i.jsx)(r.em,{children:"numTabl"})," ",(0,i.jsx)(r.em,{children:"a"}),". Puede pasar en el primer par\xe1metro el n\xfamero de tabla o puntero de la tabla."]}),"\n",(0,i.jsx)(r.p,{children:"Una vez ejecutado el comando:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["El par\xe1metro ",(0,i.jsx)(r.em,{children:"invisible"})," devuelve True si el atributo \u201CInvisible\u201D ha sido definido para la tabla, de lo contrario False. El atributo invisible permite ocultar la tabla en los editores est\xe1ndar de 4D (etiquetas, gr\xe1ficos...)."]}),"\n",(0,i.jsxs)(r.li,{children:["El par\xe1metro ",(0,i.jsx)(r.em,{children:"trigGuardarNuevo"})," devuelve True si el trigger \u201CAl guardar un registro nuevo\u201D se ha activado para la tabla, de lo contrario False."]}),"\n",(0,i.jsxs)(r.li,{children:["El par\xe1metro ",(0,i.jsx)(r.em,{children:"trigGuardaReg"})," devuelve True si el trigger \u201CAl guardar un registro existente\u201D se ha activado para la tabla, de lo contrario False."]}),"\n",(0,i.jsxs)(r.li,{children:["El par\xe1metro ",(0,i.jsx)(r.em,{children:"trigBorrarReg"})," devuelve True si el trigger \u201CAl borrar un registro\u201D se ha activado para esta tabla, de lo contrario False."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/es/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/get-relation-properties",children:"GET RELATION PROPERTIES"})]}),"\n",(0,i.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"N\xfamero de comando"}),(0,i.jsx)(r.td,{children:"687"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Hilo seguro"}),(0,i.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return d}});var t=n(667294);let i={},s=t.createContext(i);function d(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);