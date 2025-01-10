"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92215"],{393249:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-group-list","title":"GET GROUP LIST","description":"GET GROUP LIST ( nomGrupos ; numGrupos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-group-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-list","permalink":"/docs/es/commands/get-group-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-group-list","title":"GET GROUP LIST","slug":"/commands/get-group-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get group access","permalink":"/docs/es/commands/get-group-access"},"next":{"title":"GET GROUP PROPERTIES","permalink":"/docs/es/commands/get-group-properties"}}'),o=s("785893"),t=s("250065");let i={id:"get-group-list",title:"GET GROUP LIST",slug:"/commands/get-group-list",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"GET GROUP LIST"})," ( ",(0,o.jsx)(n.em,{children:"nomGrupos"})," ; ",(0,o.jsx)(n.em,{children:"numGrupos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomGrupos"}),(0,o.jsx)(n.td,{children:"Text array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombres de los grupos tal como aparecen en el editor de contrase\xf1as"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numGrupos"}),(0,o.jsx)(n.td,{children:"Integer array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfameros de referencia \xfanicos para cada grupo"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["GET GROUP LIST llena los arrays ",(0,o.jsx)(n.em,{children:"nomGrupos y"})," ",(0,o.jsx)(n.em,{children:"numGrupos"})," con los nombres y los n\xfameros de referencia \xfanicos de los grupos tal como aparecen en la ventana del editor de contrase\xf1as."]}),"\n",(0,o.jsxs)(n.p,{children:["El array ",(0,o.jsx)(n.em,{children:"numGrupos"}),", sincronizado con el array ",(0,o.jsx)(n.em,{children:"nomGrupos"}),", se llena con los n\xfameros de referencia \xfanicos de los grupos."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"En las bases proyecto, estos n\xfameros comienzan en 15001 y se asignan din\xe1micamente al inicio y se mantienen durante la sesi\xf3n."}),"\n",(0,o.jsxs)(n.li,{children:["En las bases de datos binarias, estos n\xfameros se almacenan y pertenecen a un rango espec\xedfico, seg\xfan el creador del grupo. Para m\xe1s informaci\xf3n, consulte el p\xe1rrafo ",(0,o.jsx)(n.em,{children:"Rangos de identificaciones de usuarios y grupos"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,o.jsxs)(n.p,{children:["Si no tiene privilegios de acceso para llamar al comando GET GROUP LIST o si otro proceso abri\xf3 en el sistema de contrase\xf1as, se genera un error de privilegios de acceso. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,o.jsx)(n.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/get-user-list",children:"GET USER LIST"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"610"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let o={},t=r.createContext(o);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);