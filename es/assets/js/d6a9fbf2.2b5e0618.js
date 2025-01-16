"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70263"],{160234:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/get-highlight","title":"GET HIGHLIGHT","description":"GET HIGHLIGHT ( { ;} objeto ; inicioSel ; finSel* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-highlight.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlight","permalink":"/docs/es/20-R7/commands/get-highlight","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlight.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-highlight","title":"GET HIGHLIGHT","slug":"/commands/get-highlight","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get edited text","permalink":"/docs/es/20-R7/commands/get-edited-text"},"next":{"title":"GOTO OBJECT","permalink":"/docs/es/20-R7/commands/goto-object"}}'),t=i("785893"),l=i("250065");let d={id:"get-highlight",title:"GET HIGHLIGHT",slug:"/commands/get-highlight",displayed_sidebar:"docs"},o=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET HIGHLIGHT"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"inicioSel"})," ; ",(0,t.jsx)(n.em,{children:"finSel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"Field, Variable, any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o campo o variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"inicioSel"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Posici\xf3n del inicio de la selecci\xf3n de texto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"finSel"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Posici\xf3n del fin de la selecci\xf3n de texto"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando GET HIGHLIGHT permite determinar el texto seleccionado actualmente en ",(0,t.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un campo o variable. En este caso, pase la referencia del campo o variable (campos o variables de formulario \xfanicamente) en lugar de una cadena."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este comando no puede utilizarse con campos ubicados en el formulario listado de un subformulario."]}),"\n",(0,t.jsxs)(n.p,{children:["El texto puede ser seleccionado por el usuario o por el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/highlight-text",children:"HIGHLIGHT TEXT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"inicioSel"})," devuelve la posici\xf3n del primer car\xe1cter seleccionado.",(0,t.jsx)(n.br,{}),"\nEl par\xe1metro ",(0,t.jsx)(n.em,{children:"finSel"})," devuelve la posici\xf3n del \xfaltimo car\xe1cter seleccionado m\xe1s uno."]}),"\n",(0,t.jsxs)(n.p,{children:["Si los valores devueltos de ",(0,t.jsx)(n.em,{children:"inicioSel"})," y ",(0,t.jsx)(n.em,{children:"finSel"})," son iguales, el usuario no ha seleccionado ning\xfan texto, y el punto de inserci\xf3n est\xe1 ubicado antes del car\xe1cter especificado por ",(0,t.jsx)(n.em,{children:"inicioSel"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si el objeto designado por el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," no se encuentra en el formulario, el comando devuelve -1 en ",(0,t.jsx)(n.em,{children:"inicioSel"})," y -2 en ",(0,t.jsx)(n.em,{children:"finSel"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo obtiene el texto seleccionado en el campo ",(0,t.jsx)(n.em,{children:"[Productos]Comentarios"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'GET HIGHLIGHT([Products]Comments;vFirst;vLast)\nIf(vFirst < vlast)\n    ALERT("The selected text is:"+Substring([Products]Comments;vFirst;vLast-vFirst))\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/filter-keystroke",title:"FILTER KEYSTROKE",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Modificaci\xf3n del estilo del texto resaltado:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT(*;"miTexto";$startsel,$endsel)\n\xa0ST SET ATTRIBUTES(*;"miTexto";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/highlight-text",children:"HIGHLIGHT TEXT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/keystroke",children:"Keystroke"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"209"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var s=i(667294);let t={},l=s.createContext(t);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);