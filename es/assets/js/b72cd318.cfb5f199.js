"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69504"],{370621:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>t});var l=JSON.parse('{"id":"commands-legacy/listbox-set-footer-calculation","title":"LISTBOX SET FOOTER CALCULATION","description":"LISTBOX SET FOOTER CALCULATION ( { ;} objeto ; calculo* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-footer-calculation.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-footer-calculation","permalink":"/docs/es/commands/listbox-set-footer-calculation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-footer-calculation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-footer-calculation","title":"LISTBOX SET FOOTER CALCULATION","slug":"/commands/listbox-set-footer-calculation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET COLUMN WIDTH","permalink":"/docs/es/commands/listbox-set-column-width"},"next":{"title":"LISTBOX SET FOOTERS HEIGHT","permalink":"/docs/es/commands/listbox-set-footers-height"}}'),s=o("785893"),r=o("250065");let i={id:"listbox-set-footer-calculation",title:"LISTBOX SET FOOTER CALCULATION",slug:"/commands/listbox-set-footer-calculation",displayed_sidebar:"docs"},t=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"calculo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"calculo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"C\xe1lculo para el \xe1rea de pie"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," permite definir el c\xe1lculo autom\xe1tico asociado al \xe1rea de pie del list box designado por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.",(0,s.jsx)(n.br,{}),"\nEl par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," puede designar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"la variable o el nombre de un \xe1rea de pie de p\xe1gina. En este caso, el comando aplica a esta \xe1rea."}),"\n",(0,s.jsx)(n.li,{children:"la variable o el nombre de una columna de list box. En este caso, el comando aplica al \xe1rea de pie de esta columna."}),"\n",(0,s.jsx)(n.li,{children:"la variable o el nombre de un list box. En este caso, el comando aplica a las \xe1reas de pie del listbox."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"calculo"}),", pase una de las siguientes constantes del tema ",(0,s.jsx)(n.em,{children:"List box c\xe1lculo pie"})," , con el fin de definir el c\xe1lculo a efectuar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Listbox footer std deviation"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico u hora (list boxes de tipo array \xfanicamente)",(0,s.jsx)(n.br,{})," Tipo de resultado por defecto: Real"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer average"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, hora",(0,s.jsx)(n.br,{})," Tipo de resultado por defecto:Real"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer count"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, texto, fecha, hora, booleano, imagen",(0,s.jsx)(n.br,{})," Tipo de resultado por defecto: Entero largo"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer custom"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Ning\xfan c\xe1lculo es efectuado por 4D. La variable del pie debe calcularse por programaci\xf3n. T\xedpo por defecto del resultado del c\xe1lculo: tipo de la variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer max"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, fecha, hora, booleano",(0,s.jsx)(n.br,{}),"Tipo de resultado por defecto: tipo del array o campo de la columna"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer min"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, fecha, hora, booleano",(0,s.jsx)(n.br,{}),"Tipo por defecto del resultado: tipo del array o campo de la columna"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer sum"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, hora, booleano",(0,s.jsx)(n.br,{}),"Tipo de resultado por defecto: tipo del array o campo de la columna"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer sum squares"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, hora (listbox de tipo array \xfanicamente)",(0,s.jsx)(n.br,{}),"Tipo por defecto del resultado: Real"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk footer variance"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["Utilizable con las columnas de tipo num\xe9rico, hora (listbox de tipo array \xfanicamente)",(0,s.jsx)(n.br,{}),"Tipo por defecto del resultado: Real"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Note que los c\xe1lculos predefinidos tiene en cuenta todos los valores de la columna del list box, incluyendo los valores de las posibles l\xedneas ocultas. Si desea restringir un c\xe1lculo a las l\xedneas visibles, debe utilizar la constante lk footer custom y efectuar un c\xe1lculo personalizado."}),"\n",(0,s.jsxs)(n.p,{children:["Si el tipo de datos de la columna o de al menos una columna del list box (si objeto designa un list box) no es compatible con el ",(0,s.jsx)(n.em,{children:"calculo"})," definido, el pie no se modifica y se genera el error 18. Si una columna contiene una f\xf3rmula (list box de tipo selecci\xf3n), se genera el error 10."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," las variables del \xe1rea pie se definen autom\xe1ticamente (cuando no se definen por programaci\xf3n) en funci\xf3n del tipo de c\xe1lculo definido en la Lista de propiedades (",(0,s.jsx)(n.em,{children:"Propiedades espec\xedficas de los pies de list box"}),"). Si el tipo de la variable no corresponde al resultado esperado por el comando ",(0,s.jsx)(n.strong,{children:"LISTBOX SET FOOTER CALCULATION"}),", se genera un error. Por ejemplo, para una columna que muestra fechas, si el pie hace un c\xe1lculo 'Maximum', la variable ",(0,s.jsx)(n.em,{children:"pie"})," ser\xe1 definida en fecha. Si ejecuta la instrucci\xf3n ",(0,s.jsx)(n.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," (pie;lk footer count), se genera un error por el tipo del resultado esperado (entero largo) difiere del tipo de la variable."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/listbox-get-footer-calculation",children:"LISTBOX Get footer calculation"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1140"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return i}});var l=o(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);