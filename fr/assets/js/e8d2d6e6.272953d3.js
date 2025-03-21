"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7472"],{33620:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-cell-style","title":"VP SET CELL STYLE","description":"VP SET CELL STYLE ( rangeObj Object)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-cell-style.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-cell-style","permalink":"/docs/fr/ViewPro/commands/vp-set-cell-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-cell-style.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-cell-style","title":"VP SET CELL STYLE"},"sidebar":"docs","previous":{"title":"VP SET BORDER","permalink":"/docs/fr/ViewPro/commands/vp-set-border"},"next":{"title":"VP SET COLUMN ATTRIBUTES","permalink":"/docs/fr/ViewPro/commands/vp-set-column-attributes"}}'),l=n("785893"),i=n("250065");let r={id:"vp-set-cell-style",title:"VP SET CELL STYLE"},o=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"VP SET CELL STYLE"})," ( ",(0,l.jsx)(t.em,{children:"rangeObj"})," : Object  ; ",(0,l.jsx)(t.em,{children:"styleObj"}),"  : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Param\xe8tres"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"rangeObj"}),(0,l.jsx)(t.td,{children:"Object"}),(0,l.jsx)(t.td,{children:"->"}),(0,l.jsx)(t.td,{children:"Objet plage"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"styleObj"}),(0,l.jsx)(t.td,{children:"Object"}),(0,l.jsx)(t.td,{children:"->"}),(0,l.jsx)(t.td,{children:"Objet style"}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"VP SET CELL STYLE"})," command applies the style(s) defined in the ",(0,l.jsx)(t.em,{children:"styleObj"})," to the cells defined in the ",(0,l.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["In ",(0,l.jsx)(t.em,{children:"rangeObj"}),", pass a range of cells where the style will be applied. If the ",(0,l.jsx)(t.em,{children:"rangeObj"})," contains multiple cells, the style is applied to each cell."]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:["Borders applied with ",(0,l.jsx)(t.code,{children:"VP SET CELL STYLE"})," will be applied to each cell of the ",(0,l.jsx)(t.em,{children:"rangeObj"}),", as opposed to the ",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-border",children:"VP SET BORDER"})," command which applies borders to the ",(0,l.jsx)(t.em,{children:"rangeObj"})," as a whole."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.em,{children:"styleObj"})," parameter lets you pass an object containing style settings. Vous pouvez utiliser une feuille de style existante ou cr\xe9er un nouveau style. If the ",(0,l.jsx)(t.em,{children:"styleObj"})," contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings."]}),"\n",(0,l.jsx)(t.p,{children:"Attribuez la valeur NULL pour supprimer un style et r\xe9tablir les param\xe8tres de style par d\xe9faut (le cas \xe9ch\xe9ant) :"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["giving the ",(0,l.jsx)(t.em,{children:"styleObj"})," parameter a NULL value will remove any style settings from the ",(0,l.jsx)(t.em,{children:"rangeObj"}),","]}),"\n",(0,l.jsxs)(t.li,{children:["giving an attribute a NULL value will remove this specific attribute from the ",(0,l.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["For more information about style objects and style sheets, see the ",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/configuring#style-objects",children:"Style Objects"})," paragraph."]}),"\n",(0,l.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-4d",children:'$style:=New object\n$style.font:="8pt Arial"\n$style.backColor:="Azure"\n$style.foreColor:="red"\n$style.hAlign:=1\n$style.isVerticalText:=True\n$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)\n$style.backgroundImage:=Null //remove a specific attribute\n \nVP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)\n'})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(825004).Z+"",width:"258",height:"231"})}),"\n",(0,l.jsx)(t.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-get-cell-style",children:"VP Get cell style"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-border",children:"VP SET BORDER"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},825004:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var s=n(667294);let l={},i=s.createContext(l);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);