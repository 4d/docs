"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15758"],{451615:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/wa-create-url-history-menu","title":"WA Create URL history menu","description":"WA Create URL history menu ( { ;} objeto {; direccion*} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-create-url-history-menu.md","sourceDirName":"commands-legacy","slug":"/commands/wa-create-url-history-menu","permalink":"/docs/es/commands/wa-create-url-history-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-create-url-history-menu.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-create-url-history-menu","title":"WA Create URL history menu","slug":"/commands/wa-create-url-history-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Back URL available","permalink":"/docs/es/commands/wa-back-url-available"},"next":{"title":"WA Evaluate JavaScript","permalink":"/docs/es/commands/wa-evaluate-javascript"}}'),a=r("785893"),i=r("250065");let d={id:"wa-create-url-history-menu",title:"WA Create URL history menu",slug:"/commands/wa-create-url-history-menu",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA Create URL history menu"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," {; ",(0,a.jsx)(n.em,{children:"direccion"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"direccion"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"0 \xf3 si se omite=Lista de los URLs anteriores, 1=Lista de los URLs siguientes"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Referencia de men\xfa"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WA Create URL history menu"})," crea y llena un men\xfa que puede utilizarse directamente para la navegaci\xf3n entre los URLs visitados durante la sesi\xf3n en el \xe1rea web designada por los par\xe1metros ",(0,a.jsx)(n.em,{children:"*"})," y ",(0,a.jsx)(n.em,{children:"objeto"}),". Puede utilizarse para crear una interfaz de navegaci\xf3n personalizada."]}),"\n",(0,a.jsx)(n.p,{children:"La informaci\xf3n suminstrada concierne a la sesi\xf3n; en otras palabras, la navegaci\xf3n se lleva a cabo en la misma \xe1rea web siempre y cuando el formulario no se haya cerrado."}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"direccion"})," un valor que indique la lista a recuperar. Puede utilizar una de las siguientes constantes, ubicadas en el tema ",(0,a.jsx)(n.em,{children:"Web Area"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"WA next URLs"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"WA previous URLs"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,a.jsx)(n.em,{children:"direccion"}),", se utiliza el valor 0."]}),"\n",(0,a.jsxs)(n.p,{children:["Una vez generado el men\xfa, puede mostrarlo v\xeda el comando de 4D ",(0,a.jsx)(n.a,{href:"/docs/es/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"})," y puede trabajar con \xe9l utilizando los comandos est\xe1ndar de gesti\xf3n de men\xfas de 4D. La cadena devuelta por este comando contiene el URL de la p\xe1gina visitada (ver ejemplo)."]}),"\n",(0,a.jsxs)(n.p,{children:["Llame el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/release-menu",children:"RELEASE MENU"})," para borrar un men\xfa de historial del URL cuando ya no sea \xfatil."]}),"\n",(0,a.jsxs)(n.p,{children:["*",(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.em,{children:"Nota de compatibilidad:"})," a partir de 4D v19 R5, este comando llena un men\xfa s\xf3lo con la URL actual de las \xe1reas web que utilizan el motor de renderizado del sistema Windows."]})]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:'El siguiente c\xf3digo puede estar asociado con un bot\xf3n 3D con men\xfa pop up llamado "Anterior":'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0//Single click\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WA OPEN BACK URL(WA_area)\n\xa0\xa0//Click on arrow -> display of pop up\n\xa0\xa0\xa0\xa0:(Form event code=On Alternative Click)\n\xa0\xa0//Crear un men\xfa de historial previo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Menu:=WA Create URL history menu(WA_area;WA previous URLs)\n\xa0\xa0//Mostrar este men\xfa en un pop-up\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$URL:=Dynamic pop up menu($Menu)\n\xa0\xa0//Si un elemento est\xe1 seleccionado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($URL#"")\n\xa0\xa0//Abrir la p\xe1gina Web\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0WA OPEN URL(WA_area;$URL)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0//Borrar el men\xfa para liberar la memoria\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELEASE MENU($Menu)\n\xa0End case\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/release-menu",children:"RELEASE MENU"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-get-url-history",children:"WA GET URL HISTORY"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1049"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var s=r(667294);let a={},i=s.createContext(a);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);