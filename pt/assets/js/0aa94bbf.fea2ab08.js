"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53075"],{886323:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"ViewPro/commands/vp-add-selection","title":"VP ADD SELECTION","description":"VP ADD SELECTION ( rangeObj : Object )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-add-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-selection","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-add-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-add-selection","title":"VP ADD SELECTION"},"sidebar":"docs","previous":{"title":"VP ADD RANGE NAME","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-add-range-name"},"next":{"title":"VP ADD SHEET","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-add-sheet"}}'),c=t("785893"),i=t("250065");let d={id:"vp-add-selection",title:"VP ADD SELECTION"},o=void 0,r={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP ADD SELECTION"})," ( ",(0,c.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe2metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,c.jsx)(n.th,{})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rangeObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"Objeto intervalo"}),(0,c.jsx)(n.td,{})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,c.jsxs)(n.p,{children:["O comando ",(0,c.jsx)(n.code,{children:"VP ADD SELECTION"}),"  adiciona as c\xe9lulas especificadas \xe0s c\xe9lulas selecionadas ."]}),"\n",(0,c.jsxs)(n.p,{children:["Em ",(0,c.jsx)(n.em,{children:"rangeObj"}),", passe um objeto intervalo de c\xe9lulas a adicionar \xe0 sele\xe7\xe3o atual."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"A c\xe9lula ativa n\xe3o \xe9 modificada."}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,c.jsx)(n.p,{children:"Tem c\xe9lulas atualmente seleccionadas:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(571918).Z+"",width:"552",height:"362"})}),"\n",(0,c.jsx)(n.p,{children:"O c\xf3digo seguinte adicionar\xe1 c\xe9lulas \xe0 sua sele\xe7\xe3o:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Cells("myVPArea";3;4;2;3)\nVP ADD SELECTION($currentSelection)\n'})}),"\n",(0,c.jsx)(n.p,{children:"Resultados:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(218974).Z+"",width:"552",height:"358"})}),"\n",(0,c.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},571918:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpAddSelection1-a7868594e656fbab99c06115645b4ad1.PNG"},218974:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpAddSelection2-27e4c536e5f87f2cf3e32241e3668bf7.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let c={},i=s.createContext(c);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);