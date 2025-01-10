"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96155"],{349950:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>r});var t=JSON.parse('{"id":"ViewPro/commands/vp-add-selection","title":"VP ADD SELECTION","description":"VP ADD SELECTION ( rangeObj : Object )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-add-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-selection","permalink":"/docs/es/ViewPro/commands/vp-add-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-add-selection","title":"VP ADD SELECTION"},"sidebar":"docs","previous":{"title":"VP ADD RANGE NAME","permalink":"/docs/es/ViewPro/commands/vp-add-range-name"},"next":{"title":"VP ADD SHEET","permalink":"/docs/es/ViewPro/commands/vp-add-sheet"}}'),c=s("785893"),i=s("250065");let d={id:"vp-add-selection",title:"VP ADD SELECTION"},r=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP ADD SELECTION"})," ( ",(0,c.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metros"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"}),(0,c.jsx)(n.th,{})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rangeObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"Objeto rango"}),(0,c.jsx)(n.td,{})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.code,{children:"VP ADD SELECTION"})," a\xf1ade las celdas especificadas a las celdas actualmente seleccionadas."]}),"\n",(0,c.jsxs)(n.p,{children:["En ",(0,c.jsx)(n.em,{children:"rangeObj"}),", pase un objeto rango de varias celdas para a\xf1adir a la selecci\xf3n actual."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"La celda activa no se modifica."}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.p,{children:"Actualmente tienes celdas seleccionadas:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(704021).Z+"",width:"552",height:"362"})}),"\n",(0,c.jsx)(n.p,{children:"El siguiente c\xf3digo a\xf1adir\xe1 celdas a su selecci\xf3n:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Cells("myVPArea";3;4;2;3)\nVP ADD SELECTION($currentSelection)\n'})}),"\n",(0,c.jsx)(n.p,{children:"Resultado:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(719626).Z+"",width:"552",height:"358"})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},704021:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpAddSelection1-a7868594e656fbab99c06115645b4ad1.PNG"},719626:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpAddSelection2-27e4c536e5f87f2cf3e32241e3668bf7.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var t=s(667294);let c={},i=t.createContext(c);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);