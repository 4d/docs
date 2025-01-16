"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53486"],{865730:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-delete-rows","title":"WP TABLE DELETE ROWS","description":"WP TABLE DELETE ROWS ( objTarget ) | ( refTabla ; numLinea {; nbLineas} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-delete-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-delete-rows","permalink":"/docs/es/WritePro/commands/wp-table-delete-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-rows.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-delete-rows","title":"WP TABLE DELETE ROWS","slug":"/WritePro/commands/wp-table-delete-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE DELETE COLUMNS","permalink":"/docs/es/WritePro/commands/wp-table-delete-columns"},"next":{"title":"WP Table get cells","permalink":"/docs/es/WritePro/commands/wp-table-get-cells"}}'),r=a("785893"),t=a("250065");let i={id:"wp-table-delete-rows",title:"WP TABLE DELETE ROWS",slug:"/WritePro/commands/wp-table-delete-rows",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP TABLE DELETE ROWS"})," ( ",(0,r.jsx)(n.em,{children:"objTarget"})," ) | ( ",(0,r.jsx)(n.em,{children:"refTabla"})," ; ",(0,r.jsx)(n.em,{children:"numLinea"})," {; ",(0,r.jsx)(n.em,{children:"nbLineas"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objTarget"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refTabla"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numLinea"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de \xedndice de la l\xednea"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nbLineas"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de l\xedneas a eliminar (valor por defecto = 1)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"WP TABLE DELETE ROWS"})," elimina una o varias l\xedneas de una tabla 4D Write Pro."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando admite dos sintaxis:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si pasa un objTarget como primer par\xe1metro, el comando eliminar\xe1 todas las l\xedneas en las tablas que se intersecta con el target. objTarget puede contener:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"un rango, o"}),"\n",(0,r.jsx)(n.li,{children:"un elemento (fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,r.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\nSi objTarget se intersecta con varias tablas, se eliminan las filas tocadas en todas las tablas. Si objTarget no se intersecta con una tabla, el comando no hace nada (no se genera ning\xfan error).",(0,r.jsx)(n.br,{}),"\nCon esta sintaxis, se ignora el par\xe1metro ",(0,r.jsx)(n.em,{children:"nbLineas"})," (si se pasa)."]}),"\n",(0,r.jsxs)(n.li,{children:["Si pasa los par\xe1metros ",(0,r.jsx)(n.em,{children:"refTabla"})," y ",(0,r.jsx)(n.em,{children:"numLinea"}),", el comando eliminar\xe1 las l\xedneas de la tabla designada, comenzando en el n\xfamero de \xedndice de l\xednea especificada.",(0,r.jsx)(n.br,{}),"\nCon esta sintaxis, el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"nbLineas"})," define el n\xfamero de l\xedneas a eliminar de ",(0,r.jsx)(n.em,{children:"refTabla"}),". De forma predeterminada, si se omite este par\xe1metro, se elimina una l\xednea."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Eliminar todas las l\xedneas de una tabla eliminar\xe1 toda la tabla."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Desea eliminar dos l\xedneas de la tabla ",(0,r.jsx)(n.em,{children:"Invoice"}),". Este c\xf3digo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//recupera la tabla "Invoice"\n\xa0\n\xa0WP TABLE DELETE ROWS($table;3;2)\xa0//elimina 2 l\xedneas despu\xe9s de la 2da l\xednea (3ra posici\xf3n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Eliminar\xe1 las dos l\xedneas de la ubicaci\xf3n inicial:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(15730).Z+"",width:"756",height:"338"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-delete-columns",children:"WP TABLE DELETE COLUMNS"})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},15730:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict4680306.en-118b136b14ce3f07f9e9923676db4cf2.png"},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var s=a(667294);let r={},t=s.createContext(r);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);