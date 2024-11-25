"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12495"],{920692:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>x,assets:()=>c,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"commands-legacy/st-freeze-expressions","title":"ST FREEZE EXPRESSIONS","description":"ST FREEZE EXPRESSIONS ( { ;} objeto {; inicioSel {; finSel}}{; } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-freeze-expressions.md","sourceDirName":"commands-legacy","slug":"/commands/st-freeze-expressions","permalink":"/docs/es/commands/st-freeze-expressions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-freeze-expressions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-freeze-expressions","title":"ST FREEZE EXPRESSIONS","slug":"/commands/st-freeze-expressions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST COMPUTE EXPRESSIONS","permalink":"/docs/es/commands/st-compute-expressions"},"next":{"title":"ST GET ATTRIBUTES","permalink":"/docs/es/commands/st-get-attributes"}}'),r=s("785893"),t=s("250065");let l={id:"st-freeze-expressions",title:"ST FREEZE EXPRESSIONS",slug:"/commands/st-freeze-expressions",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"inicioSel"})," {; ",(0,r.jsx)(n.em,{children:"finSel"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,r.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o ",(0,r.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inicioSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Inicio de la selecci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la selecci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se pasa = actualizar las expresiones antes de congelarlas"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"}),' "congela" el contenido de las expresiones encontradas en un campo o variable ya sea 4D Write Pro o multiestilo designado por el par\xe1metro ',(0,r.jsx)(n.em,{children:"objeto"}),". Esta acci\xf3n convierte expresiones din\xe1micas en texto est\xe1tico o im\xe1genes (\xe1reas 4D Write Pro \xfanicamente) y elimina las referencias asociadas al ",(0,r.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n acerca de expresiones 4D usadas en \xe1reas de texto multiestilo o 4D Write Pro, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/st-insert-expression",children:"ST INSERT EXPRESSION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," almacena el valor calculado de una expresi\xf3n en un momento dado. Esta operaci\xf3n es necesaria particularmente antes de cada uso del ",(0,r.jsx)(n.em,{children:"objeto"})," fuera del \xe1rea estilo (exportaciones, almacenamiento en un archivo de disco, impresi\xf3n, etc.) ya que solo la referencia de la expresi\xf3n se mantiene en el \xe1rea."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (variable o campo objeto \xfanicamente)."]}),"\n",(0,r.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,r.jsx)(n.em,{children:"inicioSel"})," y ",(0,r.jsx)(n.em,{children:"finSel"})," designan una selecci\xf3n de texto en ",(0,r.jsx)(n.em,{children:"objeto"}),". Los valores ",(0,r.jsx)(n.em,{children:"inicioSel"})," y ",(0,r.jsx)(n.em,{children:"finSel"})," expresan una selecci\xf3n de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si pasa ",(0,r.jsx)(n.em,{children:"inicioSel"})," y ",(0,r.jsx)(n.em,{children:"finSel"}),", ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," busca la URL dentro de esta selecci\xf3n."]}),"\n",(0,r.jsxs)(n.li,{children:["Si pasa \xfanicamente ",(0,r.jsx)(n.em,{children:"inicioSel"})," o si el valor de ",(0,r.jsx)(n.em,{children:"finSel"})," es mayor que el n\xfamero total de caracteres en el ",(0,r.jsx)(n.em,{children:"objeto"}),", el comando busca la URL entre ",(0,r.jsx)(n.em,{children:"inicioSel"})," y el final del texto ."]}),"\n",(0,r.jsxs)(n.li,{children:["Si omite ",(0,r.jsx)(n.em,{children:"inicioSel"})," y ",(0,r.jsx)(n.em,{children:"finSel"}),", el comando busca la URL dentro de la selecci\xf3n de texto actual."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,r.jsx)(n.em,{children:"inicioSel"})," y ",(0,r.jsx)(n.em,{children:"finSel"}),".",(0,r.jsx)(n.br,{}),'\nEstas constantes se encuentran en el tema "',(0,r.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,r.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": si ",(0,r.jsx)(n.em,{children:"inicioSel"})," es mayor que ",(0,r.jsx)(n.em,{children:"finSel"})," (excepto cuando ",(0,r.jsx)(n.em,{children:"finSel"})," es 0) , el comando no hace nada y la variable OK toma el valor 0."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, las expresiones no son recalculadas antes de ser congenladas. Si quiere que la expresi\xf3n se recalcule y luego se congele, debe pasar el segundo par\xe1metro ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.strong,{children:"ST FREEZE EXPRESSIONS"})," no congela las expresiones 4D Write Pro que contienen ",(0,r.jsx)(n.em,{children:"$wp_pageNumber"})," o ",(0,r.jsx)(n.em,{children:"$wp_pageCount"}),". Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Gesti\xf3n de f\xf3rmulas"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Usted quiere insertar la hora actual al inicio del texto y luego congelarla antes de guardar el registro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Insertar la hora al inicio del texto\n\xa0ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)\n\xa0\xa0//Congelamos la expresi\xf3n\n\xa0ST FREEZE EXPRESSIONS(*;"StyledText_t";1)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);