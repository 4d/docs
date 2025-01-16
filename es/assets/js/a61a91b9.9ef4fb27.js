"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83122"],{944334:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/restore-info","title":"RESTORE INFO","description":"RESTORE INFO ( selector ; info1 ; info2 )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/restore-info.md","sourceDirName":"commands-legacy","slug":"/commands/restore-info","permalink":"/docs/es/20-R7/commands/restore-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"restore-info","title":"RESTORE INFO","slug":"/commands/restore-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/es/20-R7/commands/restore"},"next":{"title":"SELECT LOG FILE","permalink":"/docs/es/20-R7/commands/select-log-file"}}'),t=s("785893"),d=s("250065");let i={id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RESTORE INFO"})," ( ",(0,t.jsx)(n.em,{children:"selector"})," ; ",(0,t.jsx)(n.em,{children:"info1"})," ; ",(0,t.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"selector"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tipo de informaci\xf3n a recuperar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info1"}),(0,t.jsx)(n.td,{children:"Integer, Date"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor 1 del selector"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info2"}),(0,t.jsx)(n.td,{children:"Text, Time"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor 2 del selector"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando RESTORE INFO permite obtener informaci\xf3n relacionada con la \xfaltima restauraci\xf3n autom\xe1tica de la base."}),"\n",(0,t.jsxs)(n.p,{children:["Pase el tipo de informaci\xf3n a obtener en ",(0,t.jsx)(n.em,{children:"selector"}),". Puede utilizar una de las siguientes constantes, ubicadas en el tema \u201CBackup and Restore\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Last restore date"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Last restore status"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["El tipo y el contenido de los par\xe1metros ",(0,t.jsx)(n.em,{children:"info1"})," e ",(0,t.jsx)(n.em,{children:"info2"})," dependen del valor de ",(0,t.jsx)(n.em,{children:"selector"}),".",(0,t.jsx)(n.br,{}),"\n\u2022 Si ",(0,t.jsx)(n.em,{children:"selector"})," = 0 (Last Restore Date), ",(0,t.jsx)(n.em,{children:"info1"})," devuelve la fecha e ",(0,t.jsx)(n.em,{children:"info2"})," la hora de la \xfaltima restauraci\xf3n autom\xe1tica de la base.",(0,t.jsx)(n.br,{}),"\n\u2022 Si ",(0,t.jsx)(n.em,{children:"selector"})," = 2 (Last Restore Status), ",(0,t.jsx)(n.em,{children:"info1"})," devuelve el n\xfamero e ",(0,t.jsx)(n.em,{children:"info2"})," el texto del estado de la \xfaltima restauraci\xf3n autom\xe1tica de la base."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este comando no tiene en cuenta restauraciones manuales de la base."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/restore",children:"RESTORE"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"889"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);