"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97903"],{89804:function(e,n,r){r.r(n),r.d(n,{default:()=>A,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-merge-cells","title":"WP TABLE MERGE CELLS","description":"WP TABLE MERGE CELLS ( targetObj ) | ( tableRef ; startColumn ; startRow {; columnCount{; rowCount}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-table-merge-cells.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-merge-cells","permalink":"/docs/es/WritePro/commands/wp-table-merge-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-merge-cells.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-table-merge-cells","title":"WP TABLE MERGE CELLS","slug":"/WritePro/commands/wp-table-merge-cells","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table insert rows","permalink":"/docs/es/WritePro/commands/wp-table-insert-rows"},"next":{"title":"WP Table range","permalink":"/docs/es/WritePro/commands/wp-table-range"}}'),s=r("785893"),l=r("250065");let d={id:"wp-table-merge-cells",title:"WP TABLE MERGE CELLS",slug:"/WritePro/commands/wp-table-merge-cells",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,s.jsx)(n.em,{children:"tableRef"})," ; ",(0,s.jsx)(n.em,{children:"startColumn"})," ; ",(0,s.jsx)(n.em,{children:"startRow"})," {; ",(0,s.jsx)(n.em,{children:"columnCount"}),"{; ",(0,s.jsx)(n.em,{children:"rowCount"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableRef"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia de la tabla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startColumn"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Posici\xf3n de la primera columna de celdas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startRow"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Posici\xf3n de la primera l\xednea de columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas a fusionar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xedneas a fusionar"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," fusiona la selecci\xf3n de celdas en el ",(0,s.jsx)(n.em,{children:"targetObj"})," o ",(0,s.jsx)(n.em,{children:"tableRef"})," (definido por ",(0,s.jsx)(n.em,{children:"startColumn"}),", ",(0,s.jsx)(n.em,{children:"startRow"}),", ",(0,s.jsx)(n.em,{children:"columnCount"})," y ",(0,s.jsx)(n.em,{children:"rowCount"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Pase cualquiera de los dos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"targetObj:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"un rango, o"}),"\n",(0,s.jsx)(n.li,{children:"un elemento (tabla / l\xednea / cuerpo / p\xe1rrafo / imagen anclada / encabezado / pie / secci\xf3n / subsecci\xf3n), o bien"}),"\n",(0,s.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"targetObj"})," no se intersecta con una tabla o rango de texto donde se pueda recuperar una selecci\xf3n de celdas, el comando no hace nada."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"targetObj"})," intersecta s\xf3lo una celda, el comando ",(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," no hace nada."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"O"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["startColumn y ",(0,s.jsx)(n.em,{children:"startRow"})," - definen las coordenadas superior izquierda de la primera celda a combinar."]}),"\n",(0,s.jsx)(n.li,{children:"columnCount y rowCount - (opcionales) - especifican respectivamente el n\xfamero de columnas y el n\xfamero de l\xedneas a fusionar."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si se omite rowCount, equivale a pasar 1 (valor por defecto). Si se omiten tanto columnCount como rowCount, equivale a interseptar una \xfanica celda, por lo que no ocurre nada."}),"\n",(0,s.jsxs)(n.p,{children:["Si startColumn m\xe1s ColumnCount o ",(0,s.jsx)(n.em,{children:"startRow"})," m\xe1s rowCount excede el n\xfamero de columnas/l\xedneas en ",(0,s.jsx)(n.em,{children:"tableRef"}),", o si startColumn o ",(0,s.jsx)(n.em,{children:"startRow"})," es mayor que el n\xfamero de columnas/l\xedneas en ",(0,s.jsx)(n.em,{children:"tableRef"}),", el rango devuelto contiene el m\xe1ximo posible de columnas/l\xedneas lo que significa que toda la tabla se fusiona en una gran celda."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Desea designar un rango de celdas y fusionarlo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0WP TABLE MERGE CELLS($table;3;2;2;4)\n\xa0\xa0//o\n\xa0$cells:=WP Table get cells($table;3;2;2;4)\n\xa0WP TABLE MERGE CELLS($cells)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(196873).Z+"",width:"599",height:"100"})}),"\n",(0,s.jsx)(n.p,{children:"Los datos existentes de las celdas originales se concatenan en la celda fusionada resultante."}),"\n",(0,s.jsxs)(n.p,{children:["Para m\xe1s detalles, consulte ",(0,s.jsx)(n.em,{children:"Fusi\xf3n y divisi\xf3n de celdas"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Manejo de tablas"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-split-cells",children:"WP TABLE SPLIT CELLS"})]})]})}function A(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},196873:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlcAAABkCAYAAACrShWuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowNjoyMCAwNjozNDoxNXY95RgAABF9SURBVHhe7d37b1V1usfxp9ArCBShIpdSoOUm0FIKKorACBEVmXOiycyJJwJGjYkmZoiJ/iI/nT/A+ckEIeEi/jTanDEzCZdw0dJSbiL3i0ARFZSLcim3tsjZn+93re5u965YXWe3uN+vZNlhbSeYp9+11metvffzZN2OMQAAAESiW/ATAAAAESBcAQAARIhwBQAAECHCFQAAQIQIVwAAABEiXAEAAESIcAUAABAhwhUAAECECFcAAAARIlwBAABEKGH8za1bt6yxsdF++umnYA+ysrKse/furibUJU51yc7OdmuGusSF60V1YbJUXLdu3Sw/P9/y8vKCPemj30NTUxPrtA39PrSxThOpJqKaUJe48BpITeK0VnJyclrXzM+1hqurV6/arl27bPfu3VZUVORehNnNmzftxx9/tN69e1uPHj2Cvbhx44b98MMP1q9fv065YHZV169ft3Pnztl9993nwgQ8rRfV4/nnnw/2pM/Bgwft/Pnz7iSo8AtzYVPBSsduexeHTHTt2jV306iLJmvFU6i6cuWKu/6pLvC0VgYOHGilpaVWUFAQ7I1rDVe6UNbU1LiT4OTJk0mogQsXLrjQOWbMGCspKaEugbNnz9qOHTtsypQpLkjAO3PmjNXW1trjjz/ugifrxTt9+rTt37/fXn31VXcXnE7Lly93F0zdNKb77+6qvv32W/vmm2/cea1Pnz7BXmzfvt369u3rzvW5ubnB3symIL5582arqKiwAQMGBHtx5MgRd8M4b968lHVpDVcKEVu3brVevXrZjBkz3IvwF8tPP/3ULayxY8cGe6GT88aNG2369OnuRATvq6++sjVr1rgDbtCgQcFenDx50q2XBQsWpD3gfPDBB+6GcdSoUYSrwOHDh23Pnj3uXH///fcHe1FdXe2eRuh8zzsVnh64rFixwp544gkbMWJEsBfbtm2zo0eP2uzZs92a+bnW58F6BKqNO+1kqgmf10ikmlCX1KhL16LzWktLC7+TNsLPWmlDnOqhtUJd4qhH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"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let s={},l=t.createContext(s);function d(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);