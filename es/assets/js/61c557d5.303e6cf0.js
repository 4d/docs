"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["146"],{375132:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-insert-columns","title":"WP Table insert columns","description":"WP Table insert columns ( objRango | {refTabla ; numCol} {; numColumns} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-insert-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-insert-columns","permalink":"/docs/es/20-R7/WritePro/commands/wp-table-insert-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-insert-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-insert-columns","title":"WP Table insert columns","slug":"/WritePro/commands/wp-table-insert-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table get rows","permalink":"/docs/es/20-R7/WritePro/commands/wp-table-get-rows"},"next":{"title":"WP Table insert rows","permalink":"/docs/es/20-R7/WritePro/commands/wp-table-insert-rows"}}'),t=s("785893"),l=s("250065");let a={id:"wp-table-insert-columns",title:"WP Table insert columns",slug:"/WritePro/commands/wp-table-insert-columns",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Table insert columns"})," ( objRango | {",(0,t.jsx)(n.em,{children:"refTabla"})," ; ",(0,t.jsx)(n.em,{children:"numCol"}),"} {; ",(0,t.jsx)(n.em,{children:"numColumns"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objRango"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refTabla"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCol"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numColumns"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columnas a insertar (valor predeterminado = 1)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Rango de columnas de la tabla"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WP Table insert columns"})," inserta una o varias columnas en una tabla 4D Write Pro.."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando admite dos sintaxis:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si pasa objTarget como primer par\xe1metro, el comando insertar\xe1 la(s) columna(s) en la primera tabla que intersecta el target. objTarget puede contener:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un rango, o"}),"\n",(0,t.jsx)(n.li,{children:"un elemento (l\xednea / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,t.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\nSi objTarget no intersecta una tabla o rango de texto donde se pueden insertar columnas, el comando no hace nada y devuelve Null (no se genera ning\xfan error)."]}),"\n",(0,t.jsxs)(n.li,{children:["Si pasa los par\xe1metros ",(0,t.jsx)(n.em,{children:"refTabla"})," y ",(0,t.jsx)(n.em,{children:"numCol"}),", el comando insertar\xe1 las columnas en la tabla designada y en el \xedndice de columna especificado. Si ",(0,t.jsx)(n.em,{children:"numCol"})," es mayor que el n\xfamero de columnas en ",(0,t.jsx)(n.em,{children:"refTabla"}),", las columnas se agregan a la tabla en lugar de insertarse."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"numColumns"})," define el n\xfamero de columnas a insertar en objTarget o ",(0,t.jsx)(n.em,{children:"refTabla"}),". Por defecto, si se omite este par\xe1metro, se inserta una columna."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Resultado"})}),"\n",(0,t.jsx)(n.p,{children:"El comando devuelve un rango de columnas que representa las columnas insertadas, o Null si no se insert\xf3 nada."}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Desea insertar tres columnas despu\xe9s de la primera columna en la tabla ",(0,t.jsx)(n.em,{children:"Invoice"}),". Este c\xf3digo:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $column : Object\n\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//recuperar la tabla "Invoice"\n\xa0\n\xa0$column:=WP Table insert columns($table;2;3)\xa0//posici\xf3n 2, agregue 3 columnas\n'})}),"\n",(0,t.jsx)(n.p,{children:"Insertar\xe1 las nuevas columnas en la ubicaci\xf3n correcta:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(657485).Z+"",width:"1386",height:"516"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-table-insert-rows",children:"WP Table insert rows"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},657485:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict4680283.en-8fcd2007c68477c82d08d6325a2913a3.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},l=r.createContext(t);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);