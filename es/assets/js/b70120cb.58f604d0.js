"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5176"],{129170:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>t,toc:()=>o,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/listbox-set-row-height","title":"LISTBOX SET ROW HEIGHT","description":"LISTBOX SET ROW HEIGHT ( { ;} objeto ; linea ; altura* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-height","permalink":"/docs/es/commands/listbox-set-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-row-height","title":"LISTBOX SET ROW HEIGHT","slug":"/commands/listbox-set-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW FONT STYLE","permalink":"/docs/es/commands/listbox-set-row-font-style"},"next":{"title":"LISTBOX SET ROWS HEIGHT","permalink":"/docs/es/commands/listbox-set-rows-height"}}'),i=s("785893"),l=s("250065");let r={id:"listbox-set-row-height",title:"LISTBOX SET ROW HEIGHT",slug:"/commands/listbox-set-row-height",displayed_sidebar:"docs"},d=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"linea"})," ; ",(0,i.jsx)(n.em,{children:"altura"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre objeto (si * se especifica) o Variable (si * se omite)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"linea"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"L\xednea de list box cuya altura desea definir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"altura"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Altura de l\xednea de list box"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," le permite modificar la altura de la ",(0,i.jsx)(n.em,{children:"fila"})," especificada en el objeto list box designado utilizando los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia variable en lugar de una cadena. Para m\xe1s informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si la ",(0,i.jsx)(n.em,{children:"fila"})," especificada no existe en el list box, el comando no hace nada."]}),"\n",(0,i.jsxs)(n.p,{children:["La unidad utilizada para la ",(0,i.jsx)(n.em,{children:"altura"})," especificada corresponde a la definida globalmente para las filas del list box, ya sea en la lista de propiedades o por una llamada anterior al comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": para m\xe1s informaci\xf3n sobre el c\xe1lculo de la altura de las filas, consulte el Manual de ",(0,i.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si no hay un array de altura de fila asociado al list box, este comando crea uno din\xe1mico; de lo contrario, se utiliza el array existente especificado en la propiedad ",(0,i.jsx)(n.strong,{children:"Array de altura de fila"}),". El uso de este comando para establecer el alto de fila individual produce el mismo resultado visual que la asociaci\xf3n de un array de altura de fila; Sin embargo, llenar un array con valores de altura de la fila es mucho m\xe1s r\xe1pido que llamar a este comando en un bucle para ajustar la altura de las filas de una en una para el list box."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota importante:"})," si el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," se llama posteriormente con una unidad diferente a la que se defini\xf3 previamente, este valor predeterminado reemplazar\xe1 e reinicializar\xe1 el array de altura de las filas existentes definidas utilizando ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," (ver el ejemplo)."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea cambiar la altura de unas pocas l\xedneas en el siguiente list box:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(861852).Z+"",width:"364",height:"237"})}),"\n",(0,i.jsx)(n.p,{children:"Si ejecuta este c\xf3digo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//la unidad actual es p\xedxeles\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";3;40)\xa0//Kuwait\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";7;14)\xa0//Serbia\n'})}),"\n",(0,i.jsx)(n.p,{children:"... obtiene el siguiente resultado:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(499692).Z+"",width:"365",height:"255"})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Ha definido una altura de fila predeterminada y luego define varios valores de altura de fila individuales utilizando el comando ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";25;lk pixels)\xa0// altura global definida en p\xedxeles\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";1;30)\xa0// l\xednea 1: 30 p\xedxeles\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";5;40)\xa0// l\xednea 5: 40 p\xedxeles\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";11;50)\xa0//\xa0 l\xednea 11: 50 p\xedxeles\n'})}),"\n",(0,i.jsx)(n.p,{children:"M\xe1s tarde, si se ejecuta el c\xf3digo siguiente..."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";18;lk pixels)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u2026Entonces la altura global de fila se establece en 18 p\xedxeles; Sin embargo, puesto que la unidad no ha cambiado, las filas 1, 5 y 11 mantendr\xe1n sus valores de altura espec\xedficos, es decir, 30, 40 y 50 p\xedxeles como se defini\xf3 anteriormente por el comando ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Por otro lado, si el c\xf3digo siguiente se ejecuta posteriormente..."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";2;lk lines)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["... Entonces las filas 1, 5 y 11 se ponen a la altura global de fila predeterminada establecida por ",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," (es decir, 2 l\xedneas) ya que la unidad ha cambiado de p\xedxeles a l\xedneas. Puesto que no hay conversi\xf3n autom\xe1tica aplicada, el cambio de unidades siempre resulta en altos de fila reinicializados en el nuevo valor por defecto definido."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-height",children:"LISTBOX Get row height "}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1409"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},861852:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict3071133.en-e78628dcc538f55089829111cb2916e3.png"},499692:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict3071135.en-eff2870c9485b09ce7d9e5526af4895b.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var a=s(667294);let i={},l=a.createContext(i);function r(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);