"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96730],{4665:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=o(474848),r=o(28453);const t={id:"listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",slug:"/commands/listbox-get-grid-colors",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",description:"LISTBOX GET GRID COLORS ( { ;} objeto ; colorH ; colorV* )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-grid-colors.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-get-grid-colors",permalink:"/docs/es/commands/listbox-get-grid-colors",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-grid-colors.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",slug:"/commands/listbox-get-grid-colors",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX GET GRID",permalink:"/docs/es/commands/listbox-get-grid"},next:{title:"LISTBOX Get headers height",permalink:"/docs/es/commands/listbox-get-headers-height"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX GET GRID COLORS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"colorH"})," ; ",(0,s.jsx)(n.em,{children:"colorV"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colorH"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor de color RGB para las l\xedneas horizontales"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colorV"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor de color RGB para las l\xedneas verticales"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"LISTBOX GET GRID COLORS"})," devuelve el color de las l\xedneas horizontales y verticales que componen la rejilla del objeto list box object designado por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, pase una referencia de variable en lugar de una cadena."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"colorH"})," y ",(0,s.jsx)(n.em,{children:"colorV"}),", el comando devuelve los valores de los colores RGB. El formato de color depende del tipo de par\xe1metro que pas\xf3 en ",(0,s.jsx)(n.em,{children:"hColor"})," y ",(0,s.jsx)(n.em,{children:"vColor"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Si pasa un texto, el color se expresar\xe1 como un texto CSS (formato "#rrggbb")'}),"\n",(0,s.jsx)(n.li,{children:"Si pasa un entero largo, el color se expresar\xe1 como un entero largo de 4 bytes (formato 0x00rrggbb)."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/listbox-set-grid-color",children:"LISTBOX SET GRID COLOR"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var s=o(296540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);