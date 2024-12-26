"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54492"],{36301:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>x,assets:()=>o,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/st-get-expression","title":"ST Get expression","description":"ST Get expression ( { ;} objeto {; inicioSel {; finSel*}} )  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-get-expression.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-expression","permalink":"/docs/es/commands/st-get-expression","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-expression.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-get-expression","title":"ST Get expression","slug":"/commands/st-get-expression","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get content type","permalink":"/docs/es/commands/st-get-content-type"},"next":{"title":"ST GET OPTIONS","permalink":"/docs/es/commands/st-get-options"}}'),i=s("785893"),l=s("250065");let r={id:"st-get-expression",title:"ST Get expression",slug:"/commands/st-get-expression",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ST Get expression"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," {; ",(0,i.jsx)(n.em,{children:"inicioSel"})," {; ",(0,i.jsx)(n.em,{children:"finSel"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,i.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nombre del objeto (si se especifica *) o",(0,i.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inicioSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Inicio de la selecci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"finSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fin de la selecci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Etiqueta de la expresi\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"ST Get expression"})," devuelve la primera expresi\xf3n que se encuentra en la selecci\xf3n actual del campo o de la variable de texto con estilo designada por el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'El comando devuelve la etiqueta de la expresi\xf3n, como fue insertada en el objeto (por ejemplo, "mymethod" o "[tabla1]campo1"). No se devuelve el valor actual de la expresi\xf3n.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),': este comando devuelve nombres "reales" para los campos y las tablas, incluso si se ha definido una estructura "virtual" utilizando los comandos ',(0,i.jsx)(n.a,{href:"/docs/es/commands/set-table-titles",children:"SET TABLE TITLES"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-field-titles",children:"SET FIELD TITLES"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Durante la ejecuci\xf3n, si el objeto tiene el foco, el comando devuelve la informaci\xf3n del objeto que se est\xe1 editando, y si el objeto no tiene el foco, el comando devuelve la informaci\xf3n de la fuente de datos del objeto (variable o campo).",(0,i.jsx)(n.br,{}),"\nSi omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena. Durante la ejecuci\xf3n, el comando devuelve la informaci\xf3n de la variable o del campo."]}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," designan una selecci\xf3n de texto en ",(0,i.jsx)(n.em,{children:"objeto"}),". Los valores ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," expresan una selecci\xf3n de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes en el texto."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si pasa ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", ",(0,i.jsx)(n.strong,{children:"ST Get expression"})," busca la expresi\xf3n al interior de esta selecci\xf3n."]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa \xfanicamente ",(0,i.jsx)(n.em,{children:"inicioSel"})," o si el valor de ",(0,i.jsx)(n.em,{children:"finSel"})," es mayor que el n\xfamero total de caracteres en el ",(0,i.jsx)(n.em,{children:"objeto"}),", el comando busca la expresi\xf3n entre ",(0,i.jsx)(n.em,{children:"inicioSel"})," y el final del texto ."]}),"\n",(0,i.jsxs)(n.li,{children:["Si omite ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", el comando busca la expresi\xf3n dentro de la selecci\xf3n de texto actual."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),'. Estas constantes se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1001"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,i.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": si ",(0,i.jsx)(n.em,{children:"inicioSel"})," es mayor que ",(0,i.jsx)(n.em,{children:"finSel"})," (excepto cuando ",(0,i.jsx)(n.em,{children:"finSel"})," es 0) , el comando no hace nada y la variable OK toma el valor 0."]}),"\n",(0,i.jsx)(n.p,{children:"Si no se encuentra una expresi\xf3n en la selecci\xf3n, el comando devuelve una cadena vac\xeda."}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Cuando hay un evento doble clic, usted comprueba que existe una expresi\xf3n, y si es as\xed, se muestra un di\xe1logo en el que han recuperado sus valores para que el usuario puede modificarlos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Double Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$winRef:=Open form window("Dial_InsertExpr";Movable form dialog box;Horizontally centered;Vertically centered;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DIALOG("Dial_InsertExpr")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Usted quiere ejecutar un m\xe9todo 4D cuando se hace clic en un enlace de usuario:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0//recuperamos la selecci\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(*;"myText";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(startSel#endSel)\xa0//hay contenido seleccionado\n\xa0\xa0//obtenemos el tipo del contenido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$CT_type:=ST Get content type(*;"myText";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($CT_type=ST User type)\xa0//this is a user link\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MyMethod\xa0//ejecutamos un m\xe9todo 4D\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1287"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);