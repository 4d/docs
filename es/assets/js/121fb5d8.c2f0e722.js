"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11668"],{195582:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"commands-legacy/st-get-url","title":"ST GET URL","description":"ST GET URL ( { ;} objeto ; textoURL ; direccionURL {; inicioSel {; finSel*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-get-url.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-url","permalink":"/docs/es/commands/st-get-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-get-url","title":"ST GET URL","slug":"/commands/st-get-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get text","permalink":"/docs/es/commands/st-get-text"},"next":{"title":"ST INSERT EXPRESSION","permalink":"/docs/es/commands/st-insert-expression"}}'),s=t("785893"),l=t("250065");let d={id:"st-get-url",title:"ST GET URL",slug:"/commands/st-get-url",displayed_sidebar:"docs"},r=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ST GET URL"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"textoURL"})," ; ",(0,s.jsx)(n.em,{children:"direccionURL"})," {; ",(0,s.jsx)(n.em,{children:"inicioSel"})," {; ",(0,s.jsx)(n.em,{children:"finSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,s.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nombre del objeto (si se especifica *) o",(0,s.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"textoURL"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Texto visible de la URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"direccionURL"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Direcci\xf3n de la URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inicioSel"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Inicio de la selecci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"finSel"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Fin de la selecci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"ST GET URL"})," devuelve la etiqueta y la direcci\xf3n de la primera URL detectada en el campo o la variable de texto multiestilo designado por el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["La etiqueta y la direcci\xf3n se devuelven en los par\xe1metros ",(0,s.jsx)(n.em,{children:"textoURL"})," y ",(0,s.jsx)(n.em,{children:"direccionURL"}),". Si la selecci\xf3n no contiene una URL, se devuelven cadenas vac\xedas en estos par\xe1metros."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Durante la ejecuci\xf3n, si el objeto tiene el foco, el comando devuelve la informaci\xf3n del objeto que se est\xe1 editando, y si el objeto no tiene el foco, el comando devuelve la informaci\xf3n de la fuente de datos del objeto (variable o campo).",(0,s.jsx)(n.br,{}),"\nSi omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena. Durante la ejecuci\xf3n, el comando devuelve la informaci\xf3n de la variable o del campo."]}),"\n",(0,s.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"})," designan una selecci\xf3n de texto en ",(0,s.jsx)(n.em,{children:"objeto"}),". Los valores ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"})," expresan una selecci\xf3n de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si pasa ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"}),", ",(0,s.jsx)(n.strong,{children:"ST GET URL"})," busca la URL dentro de esta selecci\xf3n."]}),"\n",(0,s.jsxs)(n.li,{children:["Si pasa \xfanicamente ",(0,s.jsx)(n.em,{children:"inicioSel"})," o si el valor de ",(0,s.jsx)(n.em,{children:"finSel"})," es mayor que el n\xfamero total de caracteres en el ",(0,s.jsx)(n.em,{children:"objeto"}),", el comando busca la URL entre ",(0,s.jsx)(n.em,{children:"inicioSel"})," y el final del texto ."]}),"\n",(0,s.jsxs)(n.li,{children:["Si omite ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"}),", el comando busca la URL dentro de la selecci\xf3n de texto actual."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"}),'. Estas constantes se encuentran en el tema "',(0,s.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST End highlight"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-1001"}),(0,s.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST End text"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST Start highlight"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-1000"}),(0,s.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST Start text"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,s.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": si ",(0,s.jsx)(n.em,{children:"inicioSel"})," es mayor que ",(0,s.jsx)(n.em,{children:"finSel"})," (excepto cuando ",(0,s.jsx)(n.em,{children:"finSel"})," es 0) , el comando no hace nada y la variable OK toma el valor 0."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Cuando hay un evento de doble clic, se comprueba que no existe en realidad una URL, y si es as\xed, se muestra un di\xe1logo en el que ha recuperado sus valores para que el usuario puede modificarlos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Double Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST URL type)\xa0//URL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ST GET URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$winRef:=Open form window("Dial_InsertURL";Movable form dialog box;Horizontally centered;Vertically centered;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE("URL settings")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DIALOG("Dial_InsertURL")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ST INSERT URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(*;"StyledText_t";startSel;startSel+1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/st-insert-url",children:"ST INSERT URL"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1288"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var i=t(667294);let s={},l=i.createContext(s);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);