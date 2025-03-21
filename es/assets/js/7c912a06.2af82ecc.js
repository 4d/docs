"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58593"],{4322:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>t,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/copy-named-selection","title":"COPY NAMED SELECTION","description":"COPY NAMED SELECTION ( {tabla ;} nombre )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/copy-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/copy-named-selection","permalink":"/docs/es/commands/copy-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-named-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"copy-named-selection","title":"COPY NAMED SELECTION","slug":"/commands/copy-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR NAMED SELECTION","permalink":"/docs/es/commands/clear-named-selection"},"next":{"title":"CUT NAMED SELECTION","permalink":"/docs/es/commands/cut-named-selection"}}'),r=s("785893"),c=s("250065");let i={id:"copy-named-selection",title:"COPY NAMED SELECTION",slug:"/commands/copy-named-selection",displayed_sidebar:"docs"},o=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COPY NAMED SELECTION"})," ( {",(0,r.jsx)(n.em,{children:"tabla"})," ;} ",(0,r.jsx)(n.em,{children:"nombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla de la cual copiar selecci\xf3n, o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nombre"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de la selecci\xf3n temporal a crear"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["COPY NAMED SELECTION copia la selecci\xf3n actual de ",(0,r.jsx)(n.em,{children:"tabla"})," en una selecci\xf3n temporal ",(0,r.jsx)(n.em,{children:"temp"}),". La tabla por defecto del proceso se utiliza si el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"tabla"})," no se especifica. El par\xe1metro ",(0,r.jsx)(n.em,{children:"temp"})," contiene una copia de la selecci\xf3n. La selecci\xf3n actual y el registro actual de ",(0,r.jsx)(n.em,{children:"tabla"})," para el proceso no cambian."]}),"\n",(0,r.jsx)(n.p,{children:"Una selecci\xf3n temporal no contiene en realidad registros, sino una lista ordenada de referencias a registros. Cada referencia a un registro ocupa 4 bytes en memoria. Esto significa que cuando una selecci\xf3n se copia utilizando el comando COPY NAMED SELECTION, la cantidad de memoria necesaria es de 4 bytes multiplicado por el n\xfamero de registros en la selecci\xf3n. Como las selecciones temporales residen en memoria, usted debe tener suficiente memoria para la selecci\xf3n temporal as\xed como la selecci\xf3n actual de la tabla en el proceso."}),"\n",(0,r.jsxs)(n.p,{children:["Utilice el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-named-selection",title:"CLEAR NAMED SELECTION",children:"CLEAR NAMED SELECTION"})," para liberar la memoria utilizada por ",(0,r.jsx)(n.em,{children:"temp"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo permite verificar si hay otras facturas vencidas en la tabla ",(0,r.jsx)(n.em,{children:"[Personas"}),"]. La selecci\xf3n se ordena y luego se guarda. Nosotros buscamos todos los registros donde las facturas est\xe1n vencidas. Luego reutilizamos la selecci\xf3n y borramos la selecci\xf3n temporal en memoria. Borrar la selecci\xf3n temporal en memoria es opcional, en caso que el dise\xf1ador de la base quiera conservar la selecci\xf3n ordenada para uso futuro:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Personas])\n\xa0\xa0//Permitir al usuario ordenar la selecci\xf3n\n\xa0ORDER BY([Personas])\n\xa0\xa0// Guardar la selecci\xf3n ordenada como una selecci\xf3n temporal\n\xa0COPY NAMED SELECTION([Personas];"OrdenUsuario")\n\xa0\xa0// Buscar los registros donde las facturas est\xe9n vac\xedas\n\xa0QUERY([Personas];[Personas]FacturaVence=True)\n\xa0\xa0//Si se encuentran registros\n\xa0If(Records in selection([Personas])>0)\n\xa0\xa0// Informar al usuario\n\xa0\xa0\xa0\xa0ALERT("S\xed, hay facturas vencidas en la tabla.")\n\xa0End if\n\xa0\xa0// Reutilizar la selecci\xf3n temporal ordenada\n\xa0USE NAMED SELECTION("OrdenUsuario")\n\xa0\xa0// Borrar la selecci\xf3n de la memoria\n\xa0CLEAR NAMED SELECTION("OrdenUsuario")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/cut-named-selection",children:"CUT NAMED SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"331"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var a=s(667294);let r={},c=a.createContext(r);function i(e){let n=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);