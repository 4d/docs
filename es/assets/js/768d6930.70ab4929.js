"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42859"],{896994:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>c,assets:()=>l,toc:()=>d,contentTitle:()=>t});var c=JSON.parse('{"id":"commands-legacy/use-named-selection","title":"USE NAMED SELECTION","description":"USE NAMED SELECTION ( nombre )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/use-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/use-named-selection","permalink":"/docs/es/commands/use-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-named-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-named-selection","title":"USE NAMED SELECTION","slug":"/commands/use-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CUT NAMED SELECTION","permalink":"/docs/es/commands/cut-named-selection"},"next":{"title":"Objects (Forms)","permalink":"/docs/es/category/objects-forms"}}'),r=s("785893"),a=s("250065");let i={id:"use-named-selection",title:"USE NAMED SELECTION",slug:"/commands/use-named-selection",displayed_sidebar:"docs"},t=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"USE NAMED SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"nombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nombre"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de la selecci\xf3n temporal a utilizar"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"USE NAMED SELECTION utiliza el nombre de la selecci\xf3n temporal como selecci\xf3n actual para la tabla a la cual pertenece."}),"\n",(0,r.jsxs)(n.p,{children:["Cuando crea una selecci\xf3n temporal, el registro actual es \u201Crecordado\u201D por la selecci\xf3n temporal. USE NAMED SELECTION recupera la posici\xf3n de este registro y lo vuelve el nuevo registro actual; este comando carga el registro actual. Si el registro actual fue modificado despu\xe9s de la creaci\xf3n de ",(0,r.jsx)(n.em,{children:"temp"}),", el registro debe guardarse antes de ejecutar USE NAMED SELECTION, para evitar perder la informaci\xf3n modificada."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.a,{href:"/docs/es/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"})," se utiliz\xf3 para crear ",(0,r.jsx)(n.em,{children:"temp"}),", la selecci\xf3n temporal ",(0,r.jsx)(n.em,{children:"temp"})," se copia a la selecci\xf3n actual de la tabla a la cual pertenece ",(0,r.jsx)(n.em,{children:"temp"}),". La selecci\xf3n temporal ",(0,r.jsx)(n.em,{children:"temp"})," existe en memoria hasta que se borra. Utilice el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-named-selection",title:"CLEAR NAMED SELECTION",children:"CLEAR NAMED SELECTION"})," para borrar la selecci\xf3n temporal y liberar la memoria utilizada por ",(0,r.jsx)(n.em,{children:"temp"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.a,{href:"/docs/es/commands/cut-named-selection",title:"CUT NAMED SELECTION",children:"CUT NAMED SELECTION"})," fue utilizado para crear ",(0,r.jsx)(n.em,{children:"temp"}),", ",(0,r.jsx)(n.em,{children:"temp"})," se utiliza como selecci\xf3n actual de la tabla y ",(0,r.jsx)(n.em,{children:"temp"})," no existe m\xe1s en memoria."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Recuerde que una selecci\xf3n temporal es una representaci\xf3n de una selecci\xf3n de registros en el momento que se crea la selecci\xf3n temporal. Si los registros que la selecci\xf3n temporal representa son modificados, la selecci\xf3n temporal podr\xeda ser obsoleta. Por lo tanto, una selecci\xf3n temporal representa un grupo de registros que no cambian con frecuencia. Diferentes cosas pueden invalidar una selecci\xf3n temporal: la modificaci\xf3n o eliminaci\xf3n de un registro de la selecci\xf3n temporal, o la modificaci\xf3n de los criterios de creaci\xf3n de la selecci\xf3n temporal."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/cut-named-selection",children:"CUT NAMED SELECTION"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"332"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica el registro actual"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica la selecci\xf3n actual"}),(0,r.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return i}});var c=s(667294);let r={},a=c.createContext(r);function i(e){let n=c.useContext(a);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);