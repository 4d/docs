"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25498"],{430093:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/st-insert-expression","title":"ST INSERT EXPRESSION","description":"ST INSERT EXPRESSION ( { ;} objeto ; expresion {; inicioSel {; finSel*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-insert-expression.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-expression","permalink":"/docs/es/commands/st-insert-expression","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-expression.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-insert-expression","title":"ST INSERT EXPRESSION","slug":"/commands/st-insert-expression","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET URL","permalink":"/docs/es/commands/st-get-url"},"next":{"title":"ST INSERT URL","permalink":"/docs/es/commands/st-insert-url"}}'),i=s("785893"),t=s("250065");let l={id:"st-insert-expression",title:"ST INSERT EXPRESSION",slug:"/commands/st-insert-expression",displayed_sidebar:"docs"},o=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"expresion"})," {; ",(0,i.jsx)(n.em,{children:"inicioSel"})," {; ",(0,i.jsx)(n.em,{children:"finSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,i.jsx)(n.br,{}),"Si se omite, objeto es un campo o variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o ",(0,i.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expresion"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Expresi\xf3n y (opcional) formato a insertar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inicioSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Inicio de la selecci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"finSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fin de la selecci\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," inserta una referencia a la expresi\xf3n en el campo o la variable de texto multiestilo designada por el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (variable o campo objeto \xfanicamente)."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"expresi\xf3n"}),", se pasa la expresi\xf3n 4D a evaluar en el ",(0,i.jsx)(n.em,{children:"objeto"}),". Una expresi\xf3n v\xe1lida 4D es una cadena que devuelve un valor. La ",(0,i.jsx)(n.em,{children:"expresi\xf3n"})," puede ser una campo, una variable, un comando 4D, una instrucci\xf3n que retorne un valor, un m\xe9todo de proyecto, una expresi\xf3n especial 4D Write Pro (ver ",(0,i.jsx)(n.em,{children:"Gesti\xf3n de f\xf3rmulas"}),"), etc."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Insertar expresiones imagen (por ejemplo variables de tipo imagen) se soporta en \xe1reas 4D Write Pro (ver ",(0,i.jsx)(n.em,{children:"Expresiones Imagen"}),") pero no se soporta en \xe1reas de texto multi estilo."]}),"\n",(0,i.jsxs)(n.li,{children:['Este comando espera nombres "reales" para los campos y las tablas, incluso si se ha definido una estructura "virtual" utilizando los comandos ',(0,i.jsx)(n.a,{href:"/docs/es/commands/set-table-titles",children:"SET TABLE TITLES"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-field-titles",children:"SET FIELD TITLES"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"expresi\xf3n"})," retorna un valor que contiene retornos de carro y tabulaciones, 4D formatea el texto de acuerdo al objeto que alberga la expresi\xf3n; caracteres de retorno de carro se interpretan como rupturas de l\xednea."]}),"\n",(0,i.jsx)(n.p,{children:"Puede dar formato a la expresi\xf3n mediante la inclusi\xf3n de informaci\xf3n de formato en el par\xe1metro de expresi\xf3n. En este caso, el par\xe1metro debe ser en la forma:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-RAW",children:' "String(valor;formato)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["... donde ",(0,i.jsx)(n.em,{children:"valor"})," contiene a la expresi\xf3n misma y ",(0,i.jsx)(n.em,{children:"formato"})," contiene el formato a aplicar. El par\xe1metro ",(0,i.jsx)(n.em,{children:"formato"})," puede tener los siguientes valores:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'para los n\xfameros: por ejemplo "###,##" cualquier formato de visualizaci\xf3n del n\xfamero (existente o no).'}),"\n",(0,i.jsxs)(n.li,{children:['para fechas: un n\xfamero que designa un formato de fecha existente. Puede utilizar las constantes del tema "',(0,i.jsx)(n.em,{children:"Formatos de salida de fechas"}),'" , por ejemplo, System date short .']}),"\n",(0,i.jsxs)(n.li,{children:['para los tiempos: un n\xfamero que designa un formato de hora existente. Puede utilizar las constantes del tema "',(0,i.jsx)(n.em,{children:"Formatos de salida de hora"}),'" , por ejemplo, System time short .']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Por ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0"String ([tabla_1]Campo_1;System date short)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, los ",(0,i.jsx)(n.strong,{children:"valores"})," de expresi\xf3n se muestran en las \xe1reas de texto multiestilo. Puede forzar la visualizaci\xf3n de las ",(0,i.jsx)(n.strong,{children:"referencias"})," utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/st-set-options",children:"ST SET OPTIONS"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," designan una selecci\xf3n de texto en ",(0,i.jsx)(n.em,{children:"objeto"}),". Los valores ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," expresan una selecci\xf3n de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si pasa \xfanicamente ",(0,i.jsx)(n.em,{children:"inicioSel"}),", el resultado de la expresi\xf3n se inserta en la ubicaci\xf3n especificada."]}),"\n",(0,i.jsxs)(n.li,{children:["Si omite ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", el resultado de la expresi\xf3n se inserta en la ubicaci\xf3n del cursor."]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", ",(0,i.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," remplaza el texto en esta selecci\xf3n con el resultado de la ",(0,i.jsx)(n.em,{children:"expresion"}),". Si el valor de ",(0,i.jsx)(n.em,{children:"finSel"})," es mayor que el n\xfamero total de caracteres en el objeto, todos los caracteres entre ",(0,i.jsx)(n.em,{children:"inicioSel"})," y el final del texto son remplazados por el resultado de la ",(0,i.jsx)(n.em,{children:"expresion"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),'. Estas constantes se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1001"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,i.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": si ",(0,i.jsx)(n.em,{children:"inicioSel"})," es mayor que ",(0,i.jsx)(n.em,{children:"finSel"})," (excepto cuando ",(0,i.jsx)(n.em,{children:"finSel"})," es 0) , el comando no hace nada y la variable OK toma el valor 0."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Desea reemplazar el texto seleccionado con el resultado de un m\xe9todo proyecto:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ST INSERT EXPRESSION(*;"miTexto";"miMetodo";ST Start highlight;ST End highlight)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/st-get-expression",children:"ST Get expression"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/st-insert-url",children:"ST INSERT URL"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1281"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var r=s(667294);let i={},t=r.createContext(i);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);