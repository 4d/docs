"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34913"],{971962:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/st-get-text","title":"ST Get text","description":"ST Get text ( { ;} objeto {; inicioSel {; finSel*}} )  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/st-get-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-text","permalink":"/docs/es/commands/st-get-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-text.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-get-text","title":"ST Get text","slug":"/commands/st-get-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get plain text","permalink":"/docs/es/commands/st-get-plain-text"},"next":{"title":"ST GET URL","permalink":"/docs/es/commands/st-get-url"}}'),i=t("785893"),r=t("250065");let l={id:"st-get-text",title:"ST Get text",slug:"/commands/st-get-text",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ST Get text"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," {; ",(0,i.jsx)(n.em,{children:"inicioSel"})," {; ",(0,i.jsx)(n.em,{children:"finSel"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o campo o variable texto (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inicioSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Inicio de la selecci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"finSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fin de la selecci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Texto incluyendo las etiquetas de estilo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ST Get text devuelve el texto con estilo encontrado en el campo o variable de texto designado por el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:""}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Durante la ejecuci\xf3n, si el objeto tiene el foco, el comando devuelve informaci\xf3n sobre el objeto que est\xe1 siendo editado, sin embargo, cuando el objeto no tiene el foco, el comando devuelve informaci\xf3n sobre la fuente de datos (campo o variable) del objeto.",(0,i.jsx)(n.br,{}),"\nSi omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, pase una referencia campo o variable en lugar de una cadena y durante la ejecuci\xf3n, el comando devuelve informaci\xf3n sobre este campo o variable."]}),"\n",(0,i.jsx)(n.h3,{id:"-1"}),"\n",(0,i.jsx)(n.p,{children:"El comando devuelve el texto con las etiquetas de estilo asociadas a \xe9l, lo que significa, por ejemplo, que puede copiar y pegar texto mientras conserva su estilo."}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," permiten designar una selecci\xf3n de texto en ",(0,i.jsx)(n.em,{children:"objeto"}),". Los valores de ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," ofrecen una selecci\xf3n de texto sin formato, sin tener en cuenta ning\xfan tipo de etiquetas de estilo en el texto."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si se omite ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"endSel"}),", ST Get text devuelve todo el texto en el objeto,"]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", ST Get text devuelve la selecci\xf3n de texto definida por estos l\xedmites."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de la selecci\xf3n en los par\xe1metros ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"endSel"}),'. Estas constantes se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1001"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"(*) Debe pasar un nombre de objeto en objeto para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."}),"\n",(0,i.jsxs)(n.p,{children:["Si los valores de ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," son iguales o si ",(0,i.jsx)(n.em,{children:"inicioSel"})," es mayor que ",(0,i.jsx)(n.em,{children:"finSel"}),", se devuelve un error."]}),"\n",(0,i.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Despu\xe9s de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ning\xfan error; de lo contrario, toma el valor 0. Este es el caso particularmente cuando las etiquetas de estilo no se eval\xfaan correctamente (etiquetas incorrectas o faltantes)."}),"\n",(0,i.jsx)(n.p,{children:"En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se est\xe1 evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/st-get-plain-text",children:"ST Get plain text"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/st-set-text",children:"ST SET TEXT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/text-to-array",children:"TEXT TO ARRAY"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1116"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);