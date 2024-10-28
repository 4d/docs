"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90390],{53600:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var r=s(474848),n=s(28453);const t={id:"listbox-get-row-color",title:"LISTBOX Get row color",slug:"/commands/listbox-get-row-color",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/listbox-get-row-color",title:"LISTBOX Get row color",description:"LISTBOX Get row color ( { ;} objeto ; fila {; tipoCor*} )  -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-row-color.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-get-row-color",permalink:"/docs/pt/commands/listbox-get-row-color",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-color.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-get-row-color",title:"LISTBOX Get row color",slug:"/commands/listbox-get-row-color",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX Get property",permalink:"/docs/pt/commands/listbox-get-property"},next:{title:"LISTBOX Get row color as number",permalink:"/docs/pt/commands/listbox-get-row-color-as-number"}},l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const o={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"LISTBOX Get row color"})," ( {* ;} ",(0,r.jsx)(o.em,{children:"objeto"})," ; ",(0,r.jsx)(o.em,{children:"fila"})," {; ",(0,r.jsx)(o.em,{children:"tipoCor"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome objeto (string) Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"objeto"}),(0,r.jsx)(o.td,{children:"any"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome de objeto (se * for especificado) ou  Vari\xe1vel (se * for omitido)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"fila"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"N\xfamero de Fila"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tipoCor"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Cor de Fonte de list box (padr\xe3o) ou cor de fundo de list box"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Valor da cor"})]})]})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," este comando s\xf3 funciona com list boxes de tipo array."]}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"LISTBOX Get row color"})," devolve a cor de uma fila ou c\xe9lula na list box designada pelos par\xe2metros ",(0,r.jsx)(o.em,{children:"objeto e"})," ",(0,r.jsx)(o.em,{children:"*"})," como uma string CSS."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," se quiser obter a cor como um formato inteiro longo de 4 bytes, deve utilizar o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),". Para saber mais sobre os formatos de cor, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Passar o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto \xe9"})," um nome de objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de vari\xe1vel ao inv\xe9s de uma string. Pode designar uma list box ou uma coluna de list box no par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["quando ",(0,r.jsx)(o.em,{children:"objeto"})," designar um list box, o comando devolve a cor da fila."]}),"\n",(0,r.jsxs)(o.li,{children:["quando ",(0,r.jsx)(o.em,{children:"objeto"})," designar uma coluna de list box, o comando devolve a cor da c\xe9lula."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"fila"}),", passe o n\xfamero da fila cuja cor quiser obter."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," o comando n\xe3o leva em considera\xe7\xe3o nenhum estado oculto/vis\xedvel das filas de list box."]}),"\n",(0,r.jsxs)(o.p,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"tipoCor"}),', pode passar a constante lk background color ou lk font color (tema "',(0,r.jsx)(o.em,{children:"List box"}),'") para averiguar a cor de fundo ou fonte da fila. Se omitir este par\xe2metro, se devolve a cor da fonte.']}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Advert\xeancia"}),": a cor atribu\xedda a uma fila n\xe3o \xe9 mostrada necessariamente em cada c\xe9lula da fila (ver exemplo). Se os valores de cor em conflito s\xe3 estabelecidas utilizando as propriedades dos list boxes ou colunas de list box, se aplica uma ordem de prioridade. Para saber mais, consulte o manual de ",(0,r.jsx)(o.em,{children:"Desenho"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Dado a list box abaixo:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:s(614419).A+"",width:"363",height:"122"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $vtColor;$vtColor2;$vtColor3 : Text\n\xa0$vtColor:=LISTBOX Get row color(*;"Col5";3)\n\xa0$vtColor2:=LISTBOX Get row color(*;"List Box";3)\n\xa0$vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)\n\xa0\xa0// $vtColor contains "#FFFF00" (yellow)\n\xa0\xa0// $vtColor2 contains "#0000FF" (blue)\n\xa0\xa0// $vtColor3 contains "#FF0000" (red)\n'})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},614419:(e,o,s)=>{s.d(o,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>a});var r=s(296540);const n={},t=r.createContext(n);function d(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);