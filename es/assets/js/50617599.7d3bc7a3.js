"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13601"],{936702:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>t});var i=JSON.parse('{"id":"commands-legacy/find-in-list","title":"Find in list","description":"Find in list ( { ;} lista ; valor ; alcance {; arrayElem {; }} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/find-in-list.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-list","permalink":"/docs/es/20-R7/commands/find-in-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"find-in-list","title":"Find in list","slug":"/commands/find-in-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM LIST","permalink":"/docs/es/20-R7/commands/delete-from-list"},"next":{"title":"GET LIST ITEM","permalink":"/docs/es/20-R7/commands/get-list-item"}}'),a=s("785893"),r=s("250065");let l={id:"find-in-list",title:"Find in list",slug:"/commands/find-in-list",displayed_sidebar:"docs"},t=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Find in list"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"lista"})," ; ",(0,a.jsx)(n.em,{children:"valor"})," ; ",(0,a.jsx)(n.em,{children:"alcance"})," {; ",(0,a.jsx)(n.em,{children:"arrayElem"})," {; *}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"lista"}),(0,a.jsx)(n.td,{children:"Integer, Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia de la lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valor a buscar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"alcance"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"0=Lista principal, 1=Sublista"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrayElem"}),(0,a.jsx)(n.td,{children:"Integer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"- Si se omite el 2do *: array de posiciones de los elementos encontrados - Si se pasa el segundo *: array de n\xfameros de referencia de  los elementos encontrados"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"- Si se omite: utiliza la posici\xf3n de los elementos - Si se pasa: utiliza el n\xfamero de referencia de los elementos"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"- Si se omite el 2do *: posici\xf3n del elemento encontrado - Si se pasa 2do *: n\xfamero de referencia del elemento encontrado"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando Find in list devuelve la posici\xf3n o referencia del primer elemento de la ",(0,a.jsx)(n.em,{children:"lista"})," que es equivalente a la cadena pasada en ",(0,a.jsx)(n.em,{children:"valor"}),". Si se encuentran varios elementos, la funci\xf3n tambi\xe9n puede llenar un array ",(0,a.jsx)(n.em,{children:"arrayElem"})," con la posici\xf3n o la referencia de cada elemento."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional *, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de la lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza una sola representaci\xf3n de lista o trabaja con n\xfameros de referencia de elementos (se omite el segundo *), puede utilizar indiferentemente una u otra sintaxis. En cambio, si utiliza varias representaciones de la misma lista y trabaja con posiciones de elementos (se pasa el segundo *), la sintaxis basada en el nombre del objeto es necesaria ya que la posici\xf3n de los elementos puede variar de una representaci\xf3n a otra."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," si utiliza el car\xe1cter @ en el nombre del objeto de la lista y el formulario contiene varias listas que corresponden a este nombre, el comando Find in list se aplicar\xe1 al primer objeto cuyo nombre corresponda."]}),"\n",(0,a.jsx)(n.p,{children:"El segundo par\xe1metro * permite indicar si quiere trabajar con las posiciones actuales de los elementos (en ese caso, este par\xe1metro se omite) o con las referencias absolutas de los elementos (en ese caso, debe pasarse)."}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"valor"})," la cadena de caracteres a buscar. La b\xfasqueda ser\xe1 del tipo \u201Cexacta\u201D; en otras palabras, la b\xfasqueda de \u201Cpiedra\u201D no encontrar\xe1 \u201Cpiedras\u201D. Sin embargo, puede utilizar el car\xe1cter arroba (@) para definir las b\xfasquedas de tipo \u201Ccomienza por,\u201D \u201Ctermina en\u201D o \u201Ccontiene\u201D."]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"alcance"})," se utiliza para definir si la b\xfasqueda debe ser llevada a cabo \xfanicamente en el primer nivel de la ",(0,a.jsx)(n.em,{children:"list"}),"a o si debe incluir todas las sublistas. Pase 0 para limitar la b\xfasqueda al primer nivel de la lista y 1 para extenderla b\xfasqueda a todas las sublistas."]}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere conocer la posici\xf3n o el n\xfamero de todos los elementos correspondientes a ",(0,a.jsx)(n.em,{children:"valor"}),", pase un array entero largo en el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"arrayElem"}),". Si es necesario, el array ser\xe1 creado y redimensionado por el comando. El comando llenar\xe1 el array con las posiciones (si se omite el segundo *) o los n\xfameros de referencia (si se pasa el segundo *) de los elementos encontrados."]}),"\n",(0,a.jsx)(n.p,{children:"Las posiciones se expresan en relaci\xf3n al elemento superior de la lista principal, teniendo en cuenta el estado actual desplegado/contra\xeddo de la lista y de las sublistas."}),"\n",(0,a.jsxs)(n.p,{children:["Si ning\xfan elemento corresponde al ",(0,a.jsx)(n.em,{children:"valor"})," buscado, la funci\xf3n devuelve 0 y el array ",(0,a.jsx)(n.em,{children:"arrayElem"})," se devuelve vac\xedo."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Dada la siguiente lista jer\xe1rquica:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(109199).Z+"",width:"211",height:"465"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$vlItemPos:=Find in list(hList;"I@";1;$arrPos)\n\xa0\xa0//$vlItemPos igual a 6\n\xa0\xa0//$arrPos{1} igual a 6 y $arrPos{2} igual a 11\n\xa0$vlItemRef:=Find in list(hList;"I@";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef igual a 7\n\xa0\xa0//$arrRefs{1} igual a 7 y $arrRefs{2} igual a 18\n\xa0$vlItemPos:=Find in list(hList;"Fecha";1;$arrPos)\n\xa0\xa0//$vlItemPos igual a 9\n\xa0\xa0//$arrPos{1} igual a 9 y $arrPos{2} igual a 16\n\xa0$vlItemRefFind in list(hList;"Fecha";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef igual a11\n\xa0\xa0//$arrRefs{1} igual a 11 and $arrRefs{2} igual a 23\n\xa0$vlItemPos:=Find in list(hList;"Fecha";0;*)\n\xa0\xa0//$vlItemPos igual a 0\n'})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"952"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},109199:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pict22420.es-092b6601fc2dbf4b29746646f7ea6883.png"},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var i=s(667294);let a={},r=i.createContext(a);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);