"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89343"],{376692:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sql-get-last-error","title":"SQL GET LAST ERROR","description":"SQL GET LAST ERROR ( errCode ; errText ; errODBC ; errSQLServer )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-get-last-error.md","sourceDirName":"commands-legacy","slug":"/commands/sql-get-last-error","permalink":"/docs/es/commands/sql-get-last-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-last-error.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-get-last-error","title":"SQL GET LAST ERROR","slug":"/commands/sql-get-last-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET DATA SOURCE LIST","permalink":"/docs/es/commands/sql-get-data-source-list"},"next":{"title":"SQL GET OPTION","permalink":"/docs/es/commands/sql-get-option"}}'),d=n("785893"),t=n("250065");let l={id:"sql-get-last-error",title:"SQL GET LAST ERROR",slug:"/commands/sql-get-last-error",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"SQL GET LAST ERROR"})," ( ",(0,d.jsx)(r.em,{children:"errCode"})," ; ",(0,d.jsx)(r.em,{children:"errText"})," ; ",(0,d.jsx)(r.em,{children:"errODBC"})," ; ",(0,d.jsx)(r.em,{children:"errSQLServer"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe1metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"errCode"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"C\xf3digo del error"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"errText"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"Texto del error"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"errODBC"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"C\xf3digo del error ODBC"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"errSQLServer"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"C\xf3digo del error nativo servidor SQL"})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(r.p,{children:"El comando SQL GET LAST ERROR devuelve la informaci\xf3n relacionada con el \xfaltimo error encontrado durante la ejecuci\xf3n de un comando ODBC. El error puede venir de la aplicaci\xf3n 4D, la red, la fuente ODBC, etc."}),"\n",(0,d.jsxs)(r.p,{children:["Este comando generalmente debe llamarse en el contexto de un m\xe9todo de gesti\xf3n de errores instalado utilizando el comando ",(0,d.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["El par\xe1metro ",(0,d.jsx)(r.em,{children:"errCode"})," devuelve el c\xf3digo del error."]}),"\n",(0,d.jsxs)(r.li,{children:["El par\xe1metro ",(0,d.jsx)(r.em,{children:"errText"})," devuelve el texto del error."]}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Los dos \xfaltimos par\xe1metros s\xf3lo se llenan cuando el error viene de la fuente ODBC; de lo contrario, se devuelven vac\xedos."}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["El par\xe1metro ",(0,d.jsx)(r.em,{children:"errODBC"})," devuelve el c\xf3digo del error ODBC (estado SQL)."]}),"\n",(0,d.jsxs)(r.li,{children:["El par\xe1metro ",(0,d.jsx)(r.em,{children:"errSQLServer"})," devuelve el c\xf3digo del error nativo servidor SQL."]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,d.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero de comando"}),(0,d.jsx)(r.td,{children:"825"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Hilo seguro"}),(0,d.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return l}});var s=n(667294);let d={},t=s.createContext(d);function l(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);