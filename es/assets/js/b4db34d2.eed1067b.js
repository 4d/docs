"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58574"],{310319:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-delete-columns","title":"WP TABLE DELETE COLUMNS","description":"WP TABLE DELETE COLUMNS ( objTarget ) | ( refTabla ; numCol {; numColumns} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-delete-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-delete-columns","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-delete-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-delete-columns","title":"WP TABLE DELETE COLUMNS","slug":"/WritePro/commands/wp-table-delete-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table append row","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-append-row"},"next":{"title":"WP TABLE DELETE ROWS","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-delete-rows"}}'),t=a("785893"),r=a("250065");let s={id:"wp-table-delete-columns",title:"WP TABLE DELETE COLUMNS",slug:"/WritePro/commands/wp-table-delete-columns",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," ( ",(0,t.jsx)(n.em,{children:"objTarget"})," ) | ( ",(0,t.jsx)(n.em,{children:"refTabla"})," ; ",(0,t.jsx)(n.em,{children:"numCol"})," {; ",(0,t.jsx)(n.em,{children:"numColumns"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objTarget"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refTabla"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCol"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numColumns"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columnas a eliminar (valor por defecto = 1)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," elimina una o varias columnas de una tabla 4D Write."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando admite dos sintaxis:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si pasa objTarget como primer par\xe1metro, el comando eliminar\xe1 todas las columnas en las tablas que se intersectan con el target. objTarget puede contener:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un rango, o"}),"\n",(0,t.jsx)(n.li,{children:"un elemento (fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,t.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\nSi objTarget varias tablas, las columnas intersectadas en todas las tablas se eliminan. Si objTarget no intersecta una tabla, el comando no hace nada (no se genera ning\xfan error).",(0,t.jsx)(n.br,{}),"\nCon esta sintaxis, se ignora el par\xe1metro ",(0,t.jsx)(n.em,{children:"numColumns"})," (si se pasa)."]}),"\n",(0,t.jsxs)(n.li,{children:["Si pasa los par\xe1metros ",(0,t.jsx)(n.em,{children:"refTabla"})," y ",(0,t.jsx)(n.em,{children:"numCol"}),", el comando eliminar\xe1 las columnas en la tabla designada, comenzando por el \xedndice de columna especificado.",(0,t.jsx)(n.br,{}),"\nCon esta sintaxis, el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"numColumns"})," define el n\xfamero de columnas a eliminar de ",(0,t.jsx)(n.em,{children:"refTabla"}),". De forma predeterminada, si se omite este par\xe1metro, se elimina una columna."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Eliminar todas las columnas de una tabla eliminar\xe1 toda la tabla."}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Desea eliminar una columna de la tabla ",(0,t.jsx)(n.em,{children:"Invoice"}),". Este c\xf3digo:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//recupera la tabla "Invoice"\n\xa0\n\xa0WP TABLE DELETE COLUMNS($table;2;1)\xa0//elimina la segunda columna\n'})}),"\n",(0,t.jsx)(n.p,{children:"Eliminar\xe1 la columna de la ubicaci\xf3n correcta:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(619393).Z+"",width:"637",height:"340"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-table-delete-rows",children:"WP TABLE DELETE ROWS"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},619393:function(e,n,a){a.d(n,{Z:function(){return l}});let l=a.p+"assets/images/pict4680318.en-a7679717d9892311e032589745bc010d.png"},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var l=a(667294);let t={},r=l.createContext(t);function s(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);