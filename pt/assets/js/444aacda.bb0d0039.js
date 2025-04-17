"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2022"],{2856:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-cell-style","title":"VP SET CELL STYLE","description":"VP SET CELL STYLE ( rangeObj Object)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-set-cell-style.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-cell-style","permalink":"/docs/pt/ViewPro/commands/vp-set-cell-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-cell-style.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-set-cell-style","title":"VP SET CELL STYLE"},"sidebar":"docs","previous":{"title":"VP SET BORDER","permalink":"/docs/pt/ViewPro/commands/vp-set-border"},"next":{"title":"VP SET COLUMN ATTRIBUTES","permalink":"/docs/pt/ViewPro/commands/vp-set-column-attributes"}}'),o=n("785893"),i=n("250065");let l={id:"vp-set-cell-style",title:"VP SET CELL STYLE"},r=void 0,c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"VP SET CELL STYLE"})," ( ",(0,o.jsx)(t.em,{children:"rangeObj"})," : Object  ; ",(0,o.jsx)(t.em,{children:"styleObj"}),"  : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"rangeObj"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"->"}),(0,o.jsx)(t.td,{children:"Objeto intervalo"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"styleObj"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"->"}),(0,o.jsx)(t.td,{children:"Objecto estilo"}),(0,o.jsx)(t.td,{})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"VP SET CELL STYLE"})," command applies the style(s) defined in the ",(0,o.jsx)(t.em,{children:"styleObj"})," to the cells defined in the ",(0,o.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Em ",(0,o.jsx)(t.em,{children:"rangeObj"}),", passe um intervalo de c\xe9lulas em que o estilo ser\xe1 aplicado. If the ",(0,o.jsx)(t.em,{children:"rangeObj"})," contains multiple cells, the style is applied to each cell."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Borders applied with ",(0,o.jsx)(t.code,{children:"VP SET CELL STYLE"})," will be applied to each cell of the ",(0,o.jsx)(t.em,{children:"rangeObj"}),", as opposed to the ",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-border",children:"VP SET BORDER"})," command which applies borders to the ",(0,o.jsx)(t.em,{children:"rangeObj"})," as a whole."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"styleObj"})," parameter lets you pass an object containing style settings. Pode utilizar uma folha de estilos existente ou criar um novo estilo. If the ",(0,o.jsx)(t.em,{children:"styleObj"})," contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings."]}),"\n",(0,o.jsx)(t.p,{children:"Para remover um estilo e reverter para as configura\xe7\xf5es de estilo padr\xe3o (se houver), passe um valor NULL:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["giving the ",(0,o.jsx)(t.em,{children:"styleObj"})," parameter a NULL value will remove any style settings from the ",(0,o.jsx)(t.em,{children:"rangeObj"}),","]}),"\n",(0,o.jsxs)(t.li,{children:["giving an attribute a NULL value will remove this specific attribute from the ",(0,o.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Para obter mais informa\xe7\xf5es sobre objetos de estilo e folhas de estilo, consulte o par\xe1grafo ",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/configuring#style-objects",children:"Objetos de estilo"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'$style:=New object\n$style.font:="8pt Arial"\n$style.backColor:="Azure"\n$style.foreColor:="red"\n$style.hAlign:=1\n$style.isVerticalText:=True\n$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)\n$style.backgroundImage:=Null //remover um atributo espec\xedfico\n \nVP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(162281).Z+"",width:"258",height:"231"})}),"\n",(0,o.jsx)(t.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-get-cell-style",children:"VP Get cell style"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-border",children:"VP SET BORDER"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},162281:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let o={},i=s.createContext(o);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);