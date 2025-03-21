"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12599"],{237297:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/listbox-get-row-font-style","title":"LISTBOX Get row font style","description":"LISTBOX Get row font style ( { ;} objeto ; linea* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-row-font-style.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-font-style","permalink":"/docs/es/20-R7/commands/listbox-get-row-font-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-font-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-row-font-style","title":"LISTBOX Get row font style","slug":"/commands/listbox-get-row-font-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row color as number","permalink":"/docs/es/20-R7/commands/listbox-get-row-color-as-number"},"next":{"title":"LISTBOX Get row height","permalink":"/docs/es/20-R7/commands/listbox-get-row-height"}}'),o=s("785893"),l=s("250065");let d={id:"listbox-get-row-font-style",title:"LISTBOX Get row font style",slug:"/commands/listbox-get-row-font-style",displayed_sidebar:"docs"},r=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get row font style"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"linea"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,o.jsx)(n.br,{}),"Si se omite, objeto es una variable"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Nombre del objeto(si se especifica *) o",(0,o.jsx)(n.br,{}),"Variable (si se omite *)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"linea"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de l\xednea"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Valor de estilo"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona con los list box de tipo array."]}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"LISTBOX Get row font style"})," devuelve el estilo de fuente de una l\xednea o de una celda del list box designado por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,o.jsxs)(n.p,{children:["Al pasar el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar como par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," un list box o una columna de list box:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["si ",(0,o.jsx)(n.em,{children:"objeto"})," designa un list box, el comando devuelve el estilo de la l\xednea."]}),"\n",(0,o.jsxs)(n.li,{children:["si ",(0,o.jsx)(n.em,{children:"objeto"})," designa una columna, el comando devuelve el estilo de la celda."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"linea"}),", pase el n\xfamero de la l\xednea cuyo estilo desea obtener."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," el comando no tiene en cuenta los estados oculto/visible de las l\xedneas del list box."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Atenci\xf3n:"})," un estilo asignado a una l\xednea no se muestra necesariamente en todas las celdas de l\xednea (ver el ejemplo). Si se definen valores de estilo contradictorios usando las propiedades del list box o de la columna, se aplica un orden de prioridad. Para obtener m\xe1s informaci\xf3n, consulte el Manual de ",(0,o.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Dado el siguiente list box:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(54297).Z+"",width:"361",height:"122"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vStyle:=LISTBOX Get row font style(*;"Col5";3)\n\xa0vStyle2:=LISTBOX Get row font style(*;"List Box";3)\n\xa0\xa0// vStyle contiene 1 (Bold)\n\xa0\xa0// vStyle2 contiene 6 (Italic + Underline)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1269"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},54297:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var t=s(667294);let o={},l=t.createContext(o);function d(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);