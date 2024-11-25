"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56234"],{446306:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/get-edited-text","title":"Get edited text","description":"Get edited text  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-edited-text.md","sourceDirName":"commands-legacy","slug":"/commands/get-edited-text","permalink":"/docs/es/commands/get-edited-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-edited-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-edited-text","title":"Get edited text","slug":"/commands/get-edited-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FILTER KEYSTROKE","permalink":"/docs/es/commands/filter-keystroke"},"next":{"title":"GET HIGHLIGHT","permalink":"/docs/es/commands/get-highlight"}}'),s=t("785893"),r=t("250065");let d={id:"get-edited-text",title:"Get edited text",slug:"/commands/get-edited-text",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get edited text"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Texto en proceso de introducci\xf3n"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"Get edited text"})," se utiliza principalmente con el evento formulario On After Edit para recuperar el texto a medida que es introducido. Tambi\xe9n puede utilizarse con los eventos formulario On Before Keystroke y On After Keystroke. Para mayor informaci\xf3n sobre estos eventos formulario, por favor consulte la descripci\xf3n del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"La combinaci\xf3n de este comando con los eventos formulario On Before Keystroke y On After Keystroke funciona de la siguiente manera:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tan pronto como un car\xe1cter se escribe en el teclado, se genera el evento On Before Keystroke. En este caso, la funci\xf3n ",(0,s.jsx)(n.strong,{children:"Get edited text"}),' devuelve el contenido del \xe1rea antes de que ocurriera la \xfaltima pulsaci\xf3n de tecla. Por ejemplo, si el \xe1rea contiene "PA" y el usuario digita una "R", ',(0,s.jsx)(n.strong,{children:"Get edited text"}),' devuelve "PA" en el evento On Before Keystroke. Si el \xe1rea est\xe1 vac\xeda inicialmente, ',(0,s.jsx)(n.strong,{children:"Get edited text"})," rdevuelve una cadena vac\xeda."]}),"\n",(0,s.jsxs)(n.li,{children:["A continuaci\xf3n, se genera el evento formulario On After Keystroke. En este caso, ",(0,s.jsx)(n.strong,{children:"Get edited text"}),' devuelve el contenido del \xe1rea, incluyendo el \xfaltimo car\xe1cter introducido en el teclado. Por ejemplo, cuando el \xe1rea contiene "PA" y el usuario digita una "R", ',(0,s.jsx)(n.strong,{children:"Get edited text"}),' devuelve "PAR" en el evento On After Keystroke.']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Tenga en cuenta que el evento On After Keystroke generalmente puede ser reemplazado por el evento On After Edit, que soporta m\xe1s m\xe9todos de entrada (como IME)."}),"\n",(0,s.jsx)(n.p,{children:"Estos dos eventos s\xf3lo se generan en los m\xe9todos objeto en cuesti\xf3n."}),"\n",(0,s.jsx)(n.p,{children:"Cuando se utiliza en un contexto diferente a la entrada de datos en un objeto de formulario, esta funci\xf3n devuelve una cadena vac\xeda."}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente m\xe9todo convierte autom\xe1ticamente los caracteres introducidos en may\xfasculas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On After Edit)\n\xa0\xa0\xa0\xa0[Trips]Agencies:=Uppercase(Get edited text)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este es un ejemplo de c\xf3mo procesar inmediatamente los caracteres introducidos en un campo tipo texto. La idea consiste en ubicar en otro campo texto (llamado \u201CWords\u201D) todas las palabras de la frase que est\xe1n siendo escritas. Para hacerlo, escriba el siguiente c\xf3digo en el m\xe9todo objeto del campo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On After Keystroke)\n\xa0\xa0\xa0\xa0$RealTimeEntry:=Get edited text\n\xa0\xa0\xa0\xa0PLATFORM PROPERTIES($platform)\n\xa0\xa0\xa0\xa0If($platform#3)\xa0// Mac OS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(Position(" ";$DecomposedSentence)=0)\n\xa0\xa0\xa0\xa0Else\xa0// Windows\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13)+Char(10))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(Position(" ";$DecomposedSentence)=0)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0[Example]Words:=$DecomposedSentence\n\xa0End if\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": este ejemplo no es exhaustivo porque hemos asumido que las palabras se separan \xfanicamente por espacios (Char (32)). Para una soluci\xf3n completa necesitar\xe1 a\xf1adir otros filtros para extraer todas las palabras (comas, punto y comas, ap\xf3strofes, etc.)."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/is-editing-text",children:"Is editing text"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var o=t(667294);let s={},r=o.createContext(s);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);