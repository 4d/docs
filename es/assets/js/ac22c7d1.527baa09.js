"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53266"],{361189:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/set-list-item-parameter","title":"SET LIST ITEM PARAMETER","description":"SET LIST ITEM PARAMETER ( { ;} lista ; refElem |  ; selector ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-list-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-parameter","permalink":"/docs/es/commands/set-list-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-parameter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-list-item-parameter","title":"SET LIST ITEM PARAMETER","slug":"/commands/set-list-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM ICON","permalink":"/docs/es/commands/set-list-item-icon"},"next":{"title":"SET LIST ITEM PROPERTIES","permalink":"/docs/es/commands/set-list-item-properties"}}'),a=s("785893"),i=s("250065");let r={id:"set-list-item-parameter",title:"SET LIST ITEM PARAMETER",slug:"/commands/set-list-item-parameter",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET LIST ITEM PARAMETER"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,a.jsx)(n.em,{children:"selector"})," ; ",(0,a.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"lista"}),(0,a.jsx)(n.td,{children:"Integer, Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refElem | *"}),(0,a.jsx)(n.td,{children:"Operador, Entero largo"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia del elemento o 0 para el \xfaltimo elemento a\xf1adido a la lista o * para el elemento actual de la lista"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"selector"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Constante de par\xe1metro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Text, Boolean, Real"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valor del par\xe1metro"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando SET LIST ITEM PARAMETER permite modificar el par\xe1metro ",(0,a.jsx)(n.em,{children:"selector"})," para el elemento ",(0,a.jsx)(n.em,{children:"refElem"})," de la lista jer\xe1rquica cuya referencia o nombre de objeto se pasa en el par\xe1metro ",(0,a.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*,"})," indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de la lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (",(0,a.jsx)(n.em,{children:"refLista"}),"). Si utiliza una sola representaci\xf3n de lista o trabaja con los elementos estructurales (se omite el segundo ",(0,a.jsx)(n.em,{children:"*"}),"), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo ",(0,a.jsx)(n.em,{children:"*"}),"), se requiere la sintaxis basada en el nombre del objeto ya que cada representaci\xf3n puede tener su propio elemento actual."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar un n\xfamero de referencia en ",(0,a.jsx)(n.em,{children:"refElem"}),". Si este n\xfamero no corresponde a ning\xfan elemento de la lista, el comando no hace nada. Puede pasar tambi\xe9n 0 en ",(0,a.jsx)(n.em,{children:"refElem"})," para indicar el \xfaltimo elemento a\xf1adido a la lista (utilizando ",(0,a.jsx)(n.em,{children:"Listas jer\xe1rquicas"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Finalmente, puede pasar ",(0,a.jsx)(n.em,{children:"*"})," en ",(0,a.jsx)(n.em,{children:"refElem: e"}),"n este caso, el comando ser\xe1 aplicado al elemento actual de la lista. Si se seleccionan varios elementos manualmente, el elemento actual es el \xfaltimo seleccionado. Si ning\xfan elemento est\xe1 seleccionado, el comando no hace nada."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"selector"}),", puede pasar:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["una de las siguientes constantes (del tema \u201C",(0,a.jsx)(n.em,{children:"Listas jer\xe1rquicas"}),"\u201D):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"}),(0,a.jsx)(n.th,{children:"Comentario"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Additional text"}),(0,a.jsx)(n.td,{children:"Cadena"}),(0,a.jsx)(n.td,{children:"4D_additional_text"}),(0,a.jsxs)(n.td,{children:["Esta constante se utiliza para agregar texto a la derecha del elemento ",(0,a.jsx)(n.em,{children:"refElem"}),". Este t\xedtulo adicional siempre se mostrar\xe1 en la parte derecha de la lista, incluso cuando el usuario mueva el cursor de desplazamiento horizontal. Cuando utilice esta constante, pase el texto que se mostrar\xe1 en ",(0,a.jsx)(n.em,{children:"valor"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Associated standard action"}),(0,a.jsx)(n.td,{children:"Cadena"}),(0,a.jsx)(n.td,{children:"4D_standard_action_name"}),(0,a.jsxs)(n.td,{children:["Asociar una acci\xf3n est\xe1ndar con el ",(0,a.jsx)(n.em,{children:"refElem"}),". En este caso, debe pasar en el par\xe1metro ",(0,a.jsx)(n.em,{children:"valor"}),' un nombre de acci\xf3n est\xe1ndar con un par\xe1metro, por ejemplo "fontSize?value=10pt". Para m\xe1s informaci\xf3n, consulte la secci\xf3n ',(0,a.jsx)(n.em,{children:"Acciones est\xe1ndar"})," del manual de ",(0,a.jsx)(n.em,{children:"Dise\xf1o"}),"."]})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["o un ",(0,a.jsx)(n.strong,{children:"selector personalizado"}),": tambi\xe9n puede pasar un texto personalizado y asociarlo con un valor de tipo texto, num\xe9rico o booleano. Este valor ser\xe1 almacenado con el elemento y podr\xe1 recuperarse utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-list-item-parameter",children:"GET LIST ITEM PARAMETER"}),". Este principio permite configurar todo tipo de interfaz asociado con las listas jer\xe1rquicas. Por ejemplo, en una lista de nombres de clientes, puede guardar la edad de cada persona y mostrarla \xfanicamente cuando el elemento correspondiente sea seleccionado."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Usted desea definir como lista de opciones de un men\xfa emergente jer\xe1rquico una lista personalizada de valores de tama\xf1o de fuente utilizando la funcionalidad de acciones est\xe1ndar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$myList:=New list\n\xa0APPEND TO LIST($myList;ak standard action title;1)\n\xa0APPEND TO LIST($myList;ak standard action title;2)\n\xa0APPEND TO LIST($myList;ak standard action title;3)\n\xa0SET LIST ITEM PARAMETER($myList;1;Associated standard action;"fontSize?value=10pt")\n\xa0SET LIST ITEM PARAMETER($myList;2;Associated standard action;"fontSize?value=12pt")\n\xa0SET LIST ITEM PARAMETER($myList;3;Associated standard action;"fontSize?value=14pt")\n\xa0OBJECT SET LIST BY REFERENCE(*;"popup";Choice list;$myList)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(203453).Z+"",width:"168",height:"79"})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/append-to-list",children:"APPEND TO LIST"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/action-info",children:"Action info"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-list-item-parameter",children:"GET LIST ITEM PARAMETER"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-list-item-parameter-arrays",children:"GET LIST ITEM PARAMETER ARRAYS"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/insert-in-list",children:"INSERT IN LIST"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"986"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},203453:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAABPCAIAAADwaBnZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAARBSURBVHhe7Zw/SyNBGMb3E9nY6NcIBwem9MgXsD+sTCGcmM7iQOMVFyy0uTSxCSeYIlhJOBAEMRi4oLG7cu+Zmd3sn2ST2TV/ZneeHw9hMvum+s07s4FNnHdiJUK88+mEKXCU6Rie+G7/H1PIULyloXhLQ/GWhuItDcVbGoq3NGnEn+86zu5x5K1gY/8+qGFyEk3x93ubjlPeLQXir/wxBlt7N2pyRjTLmBUlTccHsmW7l6/U/OX+lkbTU7xZySg+Iju0CGSk4/PDjeAgwIxPpJJZfH78+h2bQSYnlyTecTYPLzG+gX7V6HI1sOOXnPafv6XPO9++/wxP4i0mcSk8ubSO9x0fl53SeXySWV5i7qdaRzKKn3nGhx2Lu0KKX3HG7pOsI1nFiz1cjSeNYsb/jjerjFlilPsk60hW8QiaXiIbOhzhuFTeil3Fni/gzd2qAuVJ1pFU4jXD5s5BKN7SULylWYZ4JgeheEtD8ZaG4i0NxVuaOeKZAkeZjiHEfyGFRpmO4Yl3SUGheEuheEtJI75ZcZxK03uj3gq2jx68GZIfNMU/HG1DeqUSiId2NcZAR71mGVkRkNvv9weDwXA4fHt7G41GU8UrxrIjQywKDaUUbxaQ2+12e73e8/Mz3OuKj8gOLQKJdNwUe4R/EGDGJ1JJ1gbkNhqNVqsF9y8vL2j6hYj3T35xRKiRXA3+J8jagdxarQb36Hvs+YsSP3mR4s0CcqvVar1e73Q62O1fX1+1xIeHE2d82LFoeYo3EMg9ODg4Ozu7vb1NI34sdIpRzPhTs8rIOskqHgi/U2/XhONKRd3bBVe98olqshZSideEzZ0DKN5SKN5S5ojfPHGZQobiLQ3FW5o04q/F2fDVf/v1UZ4Vrvt0F6phchJd8acj131022PxF+7ptXcJk6cX3nhGNMuY1SRNx0t5444fB2uC4nOXBYifnBSOr92n0EGAGY/HSCWzrnxUPE76yTNeaB65OxhfCP2q0cVqYMcbkw+JxyY/9c4u7Bgroy3vBijeqGQXP+NoDztGGcUbmKzi8dUu+bRGmbcTyK1efYTijUpG8Tt36lbNI7bho6ztf8tX7Y543/t5c2dG0onXDJvb/FC8paF4SzNHvDyWSQGheEuheEtJI148Jxt/SFY8P83nrHKIpnjhN/prWYV8ZlpLPB/EM4s0HS/kRcRjOVSOtH4rS/Gm8QHxQntTvMaFSsf8tazZZBbvC58unr+WNZ2M4gPdSR3vT/mfoXizyCYegygRp2HHouUp3kAydnxAwlbvzY29U7xhLEk8fy1rOqnEa8LmzgEUbykUbylzxJMCkyg+Rr/f73a7jUajVqtVq1V8jOSaxL87izEYDHq9XqvVQnW9XsdiIbkm8Q8OYwyHQ+wJqMMa6XQ62CJIrkn8S9MYWBSowOrAzoBqkncS/8Q4Bq4BFAHcC5C8o1QqrZ7j9/f/7YfxWxM+R7gAAAAASUVORK5CYII="},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let a={},i=t.createContext(a);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);