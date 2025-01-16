"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97198"],{640651:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/next-record","title":"NEXT RECORD","description":"NEXT RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/next-record.md","sourceDirName":"commands-legacy","slug":"/commands/next-record","permalink":"/docs/es/20-R7/commands/next-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnext-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"next-record","title":"NEXT RECORD","slug":"/commands/next-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MODIFY SELECTION","permalink":"/docs/es/20-R7/commands/modify-selection"},"next":{"title":"ONE RECORD SELECT","permalink":"/docs/es/20-R7/commands/one-record-select"}}'),t=s("785893"),c=s("250065");let d={id:"next-record",title:"NEXT RECORD",slug:"/commands/next-record",displayed_sidebar:"docs"},o=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NEXT RECORD"})," {( ",(0,t.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla en la cual mover el siguiente registro  seleccionado o Tabla por defecto, si se omite"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["NEXT RECORD mueve el puntero del registro actual al siguiente registro en la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"})," para el proceso actual. Si la selecci\xf3n actual est\xe1 vac\xeda, o si ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/before-selection",title:"Before selection",children:"Before selection"})," o ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/end-selection",title:"End selection",children:"End selection"})," es TRUE, NEXT RECORD no tiene ning\xfan efecto."]}),"\n",(0,t.jsxs)(n.p,{children:["Si NEXT RECORD mueve el puntero del registro actual al final de la selecci\xf3n actual, ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/end-selection",title:"End selection",children:"End selection"})," devuelve TRUE, y no hay registro actual. Si ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/end-selection",title:"End selection",children:"End selection"})," devuelve TRUE, utilice ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/first-record",title:"FIRST RECORD",children:"FIRST RECORD"}),", ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-record",title:"LAST RECORD",children:"LAST RECORD"}),", o ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/goto-selected-record",title:"GOTO SELECTED RECORD",children:"GOTO SELECTED RECORD"})," para mover el puntero del registro actual de regreso a la selecci\xf3n actual."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/display-record",title:"DISPLAY RECORD",children:"DISPLAY RECORD"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/before-selection",children:"Before selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/end-selection",children:"End selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/first-record",children:"FIRST RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-record",children:"LAST RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/previous-record",children:"PREVIOUS RECORD"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"51"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica el registro actual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},c=r.createContext(t);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);