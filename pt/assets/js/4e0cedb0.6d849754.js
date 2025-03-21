"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66358"],{376825:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-selection","title":"VP Get selection","description":"VP Get selection ( vpAreaName Integer } ) ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-selection","permalink":"/docs/pt/ViewPro/commands/vp-get-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-selection","title":"VP Get selection"},"sidebar":"docs","previous":{"title":"VP Get row count","permalink":"/docs/pt/ViewPro/commands/vp-get-row-count"},"next":{"title":"VP Get sheet count","permalink":"/docs/pt/ViewPro/commands/vp-get-sheet-count"}}'),r=t("785893"),o=t("250065");let c={id:"vp-get-selection",title:"VP Get selection"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get selection"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro no formul\xe1rio"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto intervalo de c\xe9lulas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get selection"})," command returns a new range object referencing the current selected cells."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se omitido ou se voc\xea passar ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(531566).Z+"",width:"553",height:"365"})}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo seguinte recuperar\xe1 as coordenadas de todas as c\xe9lulas na sele\xe7\xe3o atual:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Get selection("myVPArea")\n\n \n//returns a range object containing:  \n//$currentSelection.ranges[0].column=5\n//$currentSelection.ranges[0].columnCount=2\n//$currentSelection.ranges[0].row=8\n//$currentSelection.ranges[0].rowCount=6\n'})}),"\n",(0,r.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},531566:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpGetSelection-f6160840f42a7d437018fd26a4a1c6c4.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},o=s.createContext(r);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);