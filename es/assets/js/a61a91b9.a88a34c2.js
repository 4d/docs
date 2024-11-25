"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83122"],{944334:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/restore-info","title":"RESTORE INFO","description":"RESTORE INFO ( selector ; info1 ; info2 )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/restore-info.md","sourceDirName":"commands-legacy","slug":"/commands/restore-info","permalink":"/docs/es/commands/restore-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"restore-info","title":"RESTORE INFO","slug":"/commands/restore-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/es/commands/restore"},"next":{"title":"SELECT LOG FILE","permalink":"/docs/es/commands/select-log-file"}}'),r=t("785893"),i=t("250065");let d={id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESTORE INFO"})," ( ",(0,r.jsx)(n.em,{children:"selector"})," ; ",(0,r.jsx)(n.em,{children:"info1"})," ; ",(0,r.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de informaci\xf3n a recuperar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info1"}),(0,r.jsx)(n.td,{children:"Integer, Date"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor 1 del selector"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info2"}),(0,r.jsx)(n.td,{children:"Text, Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor 2 del selector"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"El comando RESTORE INFO permite obtener informaci\xf3n relacionada con la \xfaltima restauraci\xf3n autom\xe1tica de la base."}),"\n",(0,r.jsxs)(n.p,{children:["Pase el tipo de informaci\xf3n a obtener en ",(0,r.jsx)(n.em,{children:"selector"}),". Puede utilizar una de las siguientes constantes, ubicadas en el tema \u201CBackup and Restore\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore date"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore status"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["El tipo y el contenido de los par\xe1metros ",(0,r.jsx)(n.em,{children:"info1"})," e ",(0,r.jsx)(n.em,{children:"info2"})," dependen del valor de ",(0,r.jsx)(n.em,{children:"selector"}),".",(0,r.jsx)(n.br,{}),"\n\u2022 Si ",(0,r.jsx)(n.em,{children:"selector"})," = 0 (Last Restore Date), ",(0,r.jsx)(n.em,{children:"info1"})," devuelve la fecha e ",(0,r.jsx)(n.em,{children:"info2"})," la hora de la \xfaltima restauraci\xf3n autom\xe1tica de la base.",(0,r.jsx)(n.br,{}),"\n\u2022 Si ",(0,r.jsx)(n.em,{children:"selector"})," = 2 (Last Restore Status), ",(0,r.jsx)(n.em,{children:"info1"})," devuelve el n\xfamero e ",(0,r.jsx)(n.em,{children:"info2"})," el texto del estado de la \xfaltima restauraci\xf3n autom\xe1tica de la base."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando no tiene en cuenta restauraciones manuales de la base."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/restore",children:"RESTORE"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);