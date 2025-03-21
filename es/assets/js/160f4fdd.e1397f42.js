"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5137"],{977204:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/dom-create-xml-element","title":"DOM Create XML element","description":"DOM Create XML element ( elementRef ; xRuta {; nomAtrib ; valorAtrib} {; nomAtrib2 ; valorAtrib2 ; ... ; nomAtribN ; valorAtribN} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-create-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-create-xml-element","permalink":"/docs/es/commands/dom-create-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-create-xml-element.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-create-xml-element","title":"DOM Create XML element","slug":"/commands/dom-create-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Count XML elements","permalink":"/docs/es/commands/dom-count-xml-elements"},"next":{"title":"DOM Create XML element arrays","permalink":"/docs/es/commands/dom-create-xml-element-arrays"}}'),l=r("785893"),s=r("250065");let a={id:"dom-create-xml-element",title:"DOM Create XML element",slug:"/commands/dom-create-xml-element",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",elem1:"elem1",elem2:"elem2",elem3:"elem3",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",rootelement:"rootelement",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Create XML element"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," ; ",(0,l.jsx)(n.em,{children:"xRuta"})," {; ",(0,l.jsx)(n.em,{children:"nomAtrib"})," ; ",(0,l.jsx)(n.em,{children:"valorAtrib"}),"} {; ",(0,l.jsx)(n.em,{children:"nomAtrib2"})," ; ",(0,l.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"nomAtribN"})," ; ",(0,l.jsx)(n.em,{children:"valorAtribN"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Referencia del elemento XML ra\xedz"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"xRuta"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Ruta XPath del elemento XML a crear"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomAtrib"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Atributo a definir"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valorAtrib"}),(0,l.jsx)(n.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nuevo valor del atributo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Referencia del elemento XML creado"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"DOM Create XML element"})," permite crear un nuevo elemento en el elemento XML ",(0,l.jsx)(n.em,{children:"refElement"})," en la ubicaci\xf3n definida por el par\xe1metro ",(0,l.jsx)(n.em,{children:"xRuta"})," y a\xf1adirle atributos si es necesario."]}),"\n",(0,l.jsxs)(n.p,{children:["Pase en ",(0,l.jsx)(n.em,{children:"refElement"})," la referencia del elemento ra\xedz (creado, por ejemplo utilizando el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),")."]}),"\n",(0,l.jsxs)(n.p,{children:["En ",(0,l.jsx)(n.em,{children:"xRuta"}),", pase la ruta de acceso del elemento a crear en notaci\xf3n XPath (para mayor informaci\xf3n, ver la secci\xf3n ",(0,l.jsx)(n.em,{children:"Uso de la notaci\xf3n XPath (DOM)"}),"). Se admiten las siguientes expresiones de ruta:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Expresi\xf3n"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Acci\xf3n"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"/"}),(0,l.jsx)(n.td,{children:"Designa el nodo ra\xedz (ruta absoluta)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"para[1]"}),(0,l.jsx)(n.td,{children:"Designa el primer hijo para del nodo de contexto"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"para[last()]"}),(0,l.jsx)(n.td,{children:"Designa el \xfaltimo hijo para del nodo de contexto"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota de compatibilidad:"})," **a partir de la v18 R3, la implementaci\xf3n de XPath en 4D es m\xe1s compatible. Por razones de compatibilidad, la implementaci\xf3n no est\xe1ndar anterior se mantiene de forma predeterminada en las bases convertidas. Si desea beneficiarse de las funcionalidades extendidas en sus bases convertidas, debe seleccionar la opci\xf3n de compatibilidad ",(0,l.jsx)(n.em,{children:"Utilizar XPath est\xe1ndar de P\xe1gina Compatibilidad."})]}),"\n",(0,l.jsxs)(n.p,{children:["Es posible pasar directamente en ",(0,l.jsx)(n.em,{children:"xRuta"})," un nombre de elemento simple con el fin de crear un subelemento a partir del elemento actual (ver el ejemplo 3)."]}),"\n",(0,l.jsx)(n.p,{children:"Si los elementos de la ruta de acceso no existen, son creados. Si ya existen los elementos de ruta, se agrega un nuevo nodo."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota:"})," si defini\xf3 uno o m\xe1s espacios de nombre (namespaces) para el \xe1rbol designado por ",(0,l.jsx)(n.em,{children:"refElement"})," (ver el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),"), debe preceder el par\xe1metro ",(0,l.jsx)(n.em,{children:"xRuta"})," del nombre de espacio a utilizar (por ejemplo, \u201CMiNombreEspacio:MiElemento\u201D)."]}),"\n",(0,l.jsxs)(n.p,{children:["Puede pasar pares de valor atributo/atributo (en forma de variables, campos o valores literales) en los par\xe1metros opcionales ",(0,l.jsx)(n.em,{children:"nomAtributo"})," y ",(0,l.jsx)(n.em,{children:"valorAtributo"}),". Puede pasar tantos pares como quiera."]}),"\n",(0,l.jsxs)(n.p,{children:["El par\xe1metro ",(0,l.jsx)(n.em,{children:"valorAtributo"})," puede ser de tipo texto o de otro tipo (Booleano, entero, real, hora o fecha). Si pasa un valor de un tipo diferente al tipo texto, 4D se encarga de la conversi\xf3n a texto, de acuerdo a los siguientes principios:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Tipo"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Ejemplo de valor convertido"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Booleano"}),(0,l.jsx)(n.td,{children:'"true" o "false"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Entero"}),(0,l.jsx)(n.td,{children:'"123456"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:'"12.34" (el separador decimal siempre es ".")'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Fecha"}),(0,l.jsx)(n.td,{children:'"2006-12-04T00:00:00Z" (est\xe1ndar RFC 3339)'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hora"}),(0,l.jsx)(n.td,{children:'"5233" (N\xfamero de segundos)'})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"El comando devuelve en resultado la referencia XML del elemento creado."}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsx)(n.p,{children:"Queremos crear el siguiente elemento:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n"})}),"\n",(0,l.jsx)(n.p,{children:"Para hacerlo, simplemente escribimos:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var vRootRef;vElemRef : Text\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsxs)(n.p,{children:["Queremos crear el siguiente elemento (contiene los atributos): [#codeXML]",(0,l.jsx)(n.br,{}),"\n",(0,l.jsxs)(n.rootelement,{children:[(0,l.jsx)(n.br,{}),"\n",(0,l.jsxs)(n.elem1,{children:[(0,l.jsx)(n.br,{}),"\n",(0,l.jsxs)(n.elem2,{children:[(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.elem3,{font:"Verdana",size:"10",children:" "}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.elem3,{font:"Verdana",size:"8",children:" "}),(0,l.jsx)(n.br,{}),"\n"]}),(0,l.jsx)(n.br,{}),"\n"]}),(0,l.jsx)(n.br,{}),"\n"]}),"[#/codeRAW]"]}),"\n",(0,l.jsx)(n.p,{children:"Para hacerlo, simplemente escribimos:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var vRootRef;vElemRef : Text\n\xa0var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text\n\n$aAttrName1:="Font"\n\xa0$aAttrName2:="Size"\n\xa0$aAttrVal1:="Verdana"\n\xa0$aAttrVal2:="10"\n\xa0$aAttrVal3:="8"\n\xa0\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)\n\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si desea insertar un elemento despu\xe9s, puede escribir:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")\n'})}),"\n",(0,l.jsx)(n.p,{children:"Tiene entonces:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsx)(n.p,{children:"Queremos crear y exportar la siguiente estructura:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<Root>\n\xa0\xa0\xa0<Elem1>Hola</Elem1>\n</Root>\n'})}),"\n",(0,l.jsx)(n.p,{children:"Queremos utilizar la sintaxis basada en un nombre de elemento simple. Para hacerlo, simplemente escribimos:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $root : Text\n\xa0var $ref1 : Text\n\xa0\n\xa0$root:=DOM Create XML Ref("Ra\xedz")\n\xa0$ref1:=DOM Create XML element($root;"Elem1")\n\xa0DOM SET XML ELEMENT VALUE($ref1;"Hola")\n\xa0DOM EXPORT TO FILE($root;"midoc.xml")\n\xa0DOM CLOSE XML($root)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,l.jsx)(n.p,{children:"Si el comando se ejecut\xf3 correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se genera un error."}),"\n",(0,l.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,l.jsx)(n.p,{children:"Se genera un error cuando:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La referencia del elemento ra\xedz no es v\xe1lida."}),"\n",(0,l.jsx)(n.li,{children:"El nombre del elemento a crear es inv\xe1lido (por ejemplo, si comienza por un n\xfamero)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/dom-create-xml-element-arrays",children:"DOM Create XML element arrays"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/dom-remove-xml-element",children:"DOM REMOVE XML ELEMENT"})]}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"865"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifica variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let l={},s=t.createContext(l);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);