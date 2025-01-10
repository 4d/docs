"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15231"],{731621:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-selection","title":"VP SET SELECTION","description":"VP SET SELECTION ( rangeObj : Object  )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-selection","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-selection.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-selection","title":"VP SET SELECTION"},"sidebar":"docs","previous":{"title":"VP SET ROW COUNT","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-row-count"},"next":{"title":"VP SET SHEET COUNT","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-sheet-count"}}'),c=s("785893"),r=s("250065");let i={id:"vp-set-selection",title:"VP SET SELECTION"},o=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP SET SELECTION"})," ( ",(0,c.jsx)(n.em,{children:"rangeObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metros"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"}),(0,c.jsx)(n.th,{})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rangeObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"Objeto rango de celdas"}),(0,c.jsx)(n.td,{})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.code,{children:"VP SET SELECTION"})," define las celdas especificadas como la selecci\xf3n y la primera celda como la celda activa."]}),"\n",(0,c.jsxs)(n.p,{children:["En ",(0,c.jsx)(n.em,{children:"rangeObj"}),", pase un objeto rango de celdas a designar como selecci\xf3n actual."]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))\nVP SET SELECTION($currentSelection)\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(883164).Z+"",width:"623",height:"402"})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"vp-add-selection",children:"VP ADD SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},883164:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpSetSelection-29382e181886d97bd77c94a77a232cc8.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let c={},r=t.createContext(c);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);