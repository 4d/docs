"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22956],{547960:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=r(474848),a=r(28453);const t={id:"wp-table-insert-rows",title:"WP Table insert rows",slug:"/WritePro/commands/wp-table-insert-rows",displayed_sidebar:"docs"},l=void 0,i={id:"WritePro/commands-legacy/wp-table-insert-rows",title:"WP Table insert rows",description:"WP Table insert rows ( objTarget | {refTabla ; numLinea} {; numLineas} )  -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-insert-rows.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-table-insert-rows",permalink:"/docs/es/WritePro/commands/wp-table-insert-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-insert-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-table-insert-rows",title:"WP Table insert rows",slug:"/WritePro/commands/wp-table-insert-rows",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Table insert columns",permalink:"/docs/es/WritePro/commands/wp-table-insert-columns"},next:{title:"WP TABLE MERGE CELLS",permalink:"/docs/es/WritePro/commands/wp-table-merge-cells"}},d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Table insert rows"})," ( objTarget | {",(0,s.jsx)(n.em,{children:"refTabla"})," ; ",(0,s.jsx)(n.em,{children:"numLinea"}),"} {; ",(0,s.jsx)(n.em,{children:"numLineas"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objTarget"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refTabla"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numLinea"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de \xedndice de l\xednea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numLineas"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xedneas a insertar (valor po defecto = 1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Rango de l\xedneas de tabla"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"WP Table insert rows"})," inserta una o varias l\xedneas en una tabla 4D Write Pro."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando soporta dos sintaxis:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si pasa un objTarget como primer par\xe1metro, el comando insertar\xe1 las l\xedneas en la primera tabla que intersecta el target. objTarget puede contener:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"un rango, o"}),"\n",(0,s.jsx)(n.li,{children:"un elemento (l\xednea / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,s.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\nSi objTarget no se intersecta con una tabla o un rango de texto donde se pueden insertar las l\xedneas, el comando no hace nada y devuelve Null (no se genera ning\xfan error)."]}),"\n",(0,s.jsxs)(n.li,{children:["Si pasa los par\xe1metros ",(0,s.jsx)(n.em,{children:"refTabla"})," y ",(0,s.jsx)(n.em,{children:"numLineas"}),", el comando insertar\xe1 las l\xedneas en la tabla designada y en el \xedndice de l\xednea especificado. Si ",(0,s.jsx)(n.em,{children:"numLineas"})," es mayor que el n\xfamero de l\xedneas en ",(0,s.jsx)(n.em,{children:"refTabla"}),", las l\xedneas se anexan en la tabla en lugar de insertarse."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"numLineas"})," define el n\xfamero de l\xedneas a insertar en objTarget o ",(0,s.jsx)(n.em,{children:"refTabla"}),". De manera predeterminada, si se omite este par\xe1metro, se inserta una l\xednea."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Resultado"})}),"\n",(0,s.jsx)(n.p,{children:"El comando devuelve un rango de l\xedneas que representa las l\xedneas insertadas o Null si no se insert\xf3 nada."}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Desea insertar dos l\xedneas al final de la tabla ",(0,s.jsx)(n.em,{children:"Invoice"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $row : Object\n\xa0var $table;$row : Object\n\xa0var $rowNum : Integer\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//recuperar la tabla "Invoice"\n\xa0\n\xa0If($table#Null)\n\xa0\xa0\xa0\xa0$rowNum:=$table.rowCount+1\xa0//agregue 1 a la \xfaltima l\xednea para designar d\xf3nde insertar las l\xedneas\n\xa0\xa0\xa0\xa0$row:=WP Table insert rows($table;$rowNum;2)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Insertar\xe1 las dos filas nuevas en la ubicaci\xf3n correcta:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(497188).A+"",width:"826",height:"434"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-insert-columns",children:"WP Table insert columns"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},497188:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict4680266.en-262689e127dc7b61f151a8b638b6c043.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(296540);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);