"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1725"],{40713:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>l,assets:()=>i,toc:()=>a,contentTitle:()=>o});var l=JSON.parse('{"id":"commands-legacy/dom-find-xml-element","title":"DOM Find XML element","description":"DOM Find XML element ( elementRef ; xRuta {; arrRefElement} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-find-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-find-xml-element","permalink":"/docs/es/20-R7/commands/dom-find-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-find-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-find-xml-element","title":"DOM Find XML element","slug":"/commands/dom-find-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM EXPORT TO VAR","permalink":"/docs/es/20-R7/commands/dom-export-to-var"},"next":{"title":"DOM Find XML element by ID","permalink":"/docs/es/20-R7/commands/dom-find-xml-element-by-id"}}'),s=d("785893"),r=d("250065");let t={id:"dom-find-xml-element",title:"DOM Find XML element",slug:"/commands/dom-find-xml-element",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Find XML element"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"xRuta"})," {; ",(0,s.jsx)(n.em,{children:"arrRefElement"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xRuta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta XPath del elemento a buscar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrRefElement"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Lista de referencias de los elementos encontrados (si aplica)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Referencia del elemento encontrado (si aplica)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DOM Find XML element permite buscar los elementos XML espec\xedficos en una estructura XML. La b\xfasqueda comienza por el elemento designado por el par\xe1metro ",(0,s.jsx)(n.em,{children:"refElement"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El nodo XML a buscar est\xe1 definido por el par\xe1metro ",(0,s.jsx)(n.em,{children:"xRuta"}),", expresado en notaci\xf3n XPath (para mayor informaci\xf3n, ver la secci\xf3n ",(0,s.jsx)(n.em,{children:"Uso de la notaci\xf3n XPath (DOM)"}),"). Se admiten las siguientes expresiones de ruta:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Expresi\xf3n"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Acci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"nodename"})}),(0,s.jsxs)(n.td,{children:['Selecciona todos los nodos hijos del nodo de contexto con el nombre "',(0,s.jsx)(n.em,{children:"nodename"}),'"']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/"}),(0,s.jsx)(n.td,{children:"Selecciona los nodos del nodo ra\xedz (ruta absoluta)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"//"}),(0,s.jsx)(n.td,{children:"Selecciona los nodos en el documento del nodo actual que coinciden con la selecci\xf3n sin importar d\xf3nde se encuentren"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"@"}),(0,s.jsx)(n.td,{children:"Selecciona atributos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"."}),(0,s.jsx)(n.td,{children:"Selecciona el nodo actual"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".."}),(0,s.jsx)(n.td,{children:"Selecciona el padre del nodo actual"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Selecciona todos los elementos hijos del nodo de contexto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"@*"}),(0,s.jsx)(n.td,{children:"Selecciona todos los atributos del nodo de contexto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text()"}),(0,s.jsx)(n.td,{children:"Selecciona todos los hijos del nodo texto del nodo de contexto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"node()"}),(0,s.jsx)(n.td,{children:"Selecciona todos los hijos del nodo de contexto, sin importar el tipo de nodo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"local-name()"}),(0,s.jsx)(n.td,{children:"Devuelve una cadena que representa el nombre local del primer nodo de un conjunto de nodos dado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"para[1]"}),(0,s.jsx)(n.td,{children:"Selecciona el primer hijo para del nodo de contexto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"para[last()]"}),(0,s.jsx)(n.td,{children:"Selecciona el \xfaltimo hijo para del nodo de contexto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'chapter[title="Introduction"]'}),(0,s.jsx)(n.td,{children:"Selecciona los cap\xedtulos hijos del nodo de contexto que tienen uno o m\xe1s hijos t\xedtulos con un valor de cadena igual a Introduction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"chapter[title]"}),(0,s.jsx)(n.td,{children:"Selecciona los cap\xedtulos hijo del nodo de contexto que tienen uno o m\xe1s hijos t\xedtulos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'para[@type="warning"]'}),(0,s.jsx)(n.td,{children:'Selecciona todos los hijos para del nodo de contexto que tienen un atributo "type" con el valor "warning"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'para[@type="warning"][5]'}),(0,s.jsx)(n.td,{children:'Selecciona el quinto hijo para del nodo de contexto que tiene un atributo "type" con el valor "warning"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'para[5][@type="warning"]'}),(0,s.jsx)(n.td,{children:'Selecciona el quinto hijo para del nodo de contexto si ese hijo tiene un atributo "type" con el valor "warning"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"para[contains(@type,'bg')]"}),(0,s.jsx)(n.td,{children:'Selecciona todos los hijos para del nodo de contexto que tiene un atributo "type" que contiene la cadena "bg"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"//title | //price"}),(0,s.jsx)(n.td,{children:"Selecciona todos los elementos de t\xedtulo y precio en el documento"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota de compatibilidad:"})," **a partir de la v18 R3, la implementaci\xf3n XPath es m\xe1s compatible y permite el soporte de las expresiones anteriores. Por razones de compatibilidad, la implementaci\xf3n no est\xe1ndar anterior se mantiene de forma predeterminada en las bases convertidas. Si desea beneficiarse de las funciones extendidas en sus bases convertidas, debe seleccionar la opci\xf3n de compatibilidad ",(0,s.jsx)(n.em,{children:"Utilizar XPath est\xe1ndar de P\xe1gina Compatibilidad."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," las b\xfasquedas distinguen entre may\xfasculas y min\xfasculas."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando devuelve la referencia XML de los elementos encontrados. Cuando se pasa el array de cadenas ",(0,s.jsx)(n.em,{children:"arrRefElement"}),", el comando lo llena con la lista de referencias XML encontradas. En este caso, el comando devuelve el primer elemento del array ",(0,s.jsx)(n.em,{children:"arrRefElement"})," como resultado. Este par\xe1metro es \xfatil cuando existen varios elementos con el mismo nombre en la ubicaci\xf3n especificada por el par\xe1metro ",(0,s.jsx)(n.em,{children:"xRuta"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Dada la siguiente estructura XML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-RAW",children:"\xa0 Harry Potter\xa0 29.99\xa0 Learning XML\xa0 39.95\n"})}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo permite buscar r\xe1pidamente un elemento XML y mostrar su valor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vElemRef:=DOM Parse XML source("books.xml")\n\xa0vFound:=DOM Find XML element(vElemRef;"book[2]/title")\xa0//ruta relativa del nodo actual\n\xa0DOM GET XML ELEMENT VALUE(vFound;value)\n\xa0ALERT("The value of the element is: \\""+value+"\\"")\xa0//Aprendiendo XML\n'})}),"\n",(0,s.jsx)(n.p,{children:"La misma b\xfasqueda tambi\xe9n puede efectuarse de esta forma:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vElemRef:=DOM Parse XML source("books.xml")\n\xa0vFound:=DOM Find XML element(vElemRef;"/bookstore/book[2]")\xa0//ruta absoluta de ra\xedz\n\xa0vFound:=DOM Find XML element(vFound;"title")\n\xa0DOM GET XML ELEMENT VALUE(vFound;value)\n\xa0ALERT("The value of the element is: \\""+value+"\\"")\xa0//Aprendiendo XML\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Dada la siguiente estructura XML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-RAW",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0aaa\xa0\xa0\xa0\xa0\xa0\xa0bbb\xa0\xa0\xa0\xa0\xa0\xa0ccc\xa0\xa0\xa0\n"})}),"\n",(0,s.jsx)(n.p,{children:"El siguiente c\xf3digo permite recuperar la referencia de cada elemento Elem2 en el array arrAfound:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vElemRef:=DOM Parse XML source("example.xml")\n\xa0ARRAY TEXT(arrAfound;0)\n\xa0vFound:=DOM Find XML element(vElemRef;"/Root/Elem1/Elem2";arrAfound)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:'Desea seleccionar todos los elementos "rect" con atributos "class" que contengan la cadena "bgcontainer":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$node:=DOM Find XML element($root;\"\xa0//rect[contains(@class,'bgcontainer')\")\n"})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando se ejecut\xf3 correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se genera un error."}),"\n",(0,s.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,s.jsx)(n.p,{children:"Se genera un error cuando:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La referencia del elemento no es v\xe1lida"}),"\n",(0,s.jsx)(n.li,{children:"La ruta xPath especificada no es v\xe1lida."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/dom-count-xml-elements",children:"DOM Count XML elements"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/dom-create-xml-element",children:"DOM Create XML element"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"864"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return t}});var l=d(667294);let s={},r=l.createContext(s);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);