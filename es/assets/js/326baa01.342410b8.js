"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25883],{634807:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>A,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(474848),o=s(28453);const i={id:"vp-set-cell-style",title:"VP SET CELL STYLE"},l=void 0,c={id:"ViewPro/commands/vp-set-cell-style",title:"VP SET CELL STYLE",description:"VP SET CELL STYLE ( rangeObj Object)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-cell-style.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-cell-style",permalink:"/docs/es/ViewPro/commands/vp-set-cell-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-cell-style.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-cell-style",title:"VP SET CELL STYLE"},sidebar:"docs",previous:{title:"VP SET BORDER",permalink:"/docs/es/ViewPro/commands/vp-set-border"},next:{title:"VP SET COLUMN ATTRIBUTES",permalink:"/docs/es/ViewPro/commands/vp-set-column-attributes"}},r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET CELL STYLE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object  ; ",(0,t.jsx)(n.em,{children:"styleObj"}),"  : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto rango"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto style"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP SET CELL STYLE"})," aplica el estilo o estilos definidos en el ",(0,t.jsx)(n.em,{children:"styleObj"})," a las celdas definidas en el ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pase un rango de celdas donde se aplicar\xe1 el estilo. Si ",(0,t.jsx)(n.em,{children:"rangeObj"})," contiene m\xfaltiples celdas, el estilo se aplica a cada celda."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Los bordes aplicados con ",(0,t.jsx)(n.code,{children:"VP SET CELL STYLE"})," se aplicar\xe1n a cada celda del ",(0,t.jsx)(n.em,{children:"rangeObj"}),", a diferencia del comando ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-border",children:"VP SET BORDER"})," que aplica bordes al ",(0,t.jsx)(n.em,{children:"rangeObj"})," en su conjunto."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"styleObj"})," permite pasar un objeto que contiene propiedades de estilo. Puede utilizar una hoja de estilo existente o crear una nueva. Si ",(0,t.jsx)(n.em,{children:"styleObj"})," contiene a la vez una hoja de estilo existente y propiedades de estilo adicionales, se aplica primero la hoja de estilo existente, seguida de las propiedades adicionales."]}),"\n",(0,t.jsx)(n.p,{children:"Para eliminar un estilo y volver a la configuraci\xf3n de estilo por defecto (si la hay), pase un valor NULL:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["dar al par\xe1metro ",(0,t.jsx)(n.em,{children:"styleObj"})," un valor NULL eliminar\xe1 toda configuraci\xf3n de estilo del ",(0,t.jsx)(n.em,{children:"rangeObj"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["si se le da a un atributo un valor NULL, se eliminar\xe1 este atributo espec\xedfico de ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Para obtener m\xe1s informaci\xf3n sobre los objetos de estilo y las hojas de estilo, consulte el p\xe1rrafo ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#style-objects",children:"Objetos de estilo"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$style:=New object\n$style.font:="8pt Arial"\n$style.backColor:="Azure"\n$style.foreColor:="red"\n$style.hAlign:=1\n$style.isVerticalText:=True\n$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)\n$style.backgroundImage:=Null //eliminar un atributo espec\xedfico\n \nVP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(993847).A+"",width:"258",height:"231"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-cell-style",children:"VP Get cell style"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-border",children:"VP SET BORDER"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function A(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},993847:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(296540);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);