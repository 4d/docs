"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76156"],{634226:function(e,s,a){a.r(s),a.d(s,{metadata:()=>n,contentTitle:()=>i,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>t});var n=JSON.parse('{"id":"commands-legacy/clear-list","title":"CLEAR LIST","description":"CLEAR LIST ( lista {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/clear-list.md","sourceDirName":"commands-legacy","slug":"/commands/clear-list","permalink":"/docs/es/commands/clear-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clear-list","title":"CLEAR LIST","slug":"/commands/clear-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND TO LIST","permalink":"/docs/es/commands/append-to-list"},"next":{"title":"Copy list","permalink":"/docs/es/commands/copy-list"}}'),l=a("785893"),r=a("250065");let t={id:"clear-list",title:"CLEAR LIST",slug:"/commands/clear-list",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"CLEAR LIST"})," ( ",(0,l.jsx)(s.em,{children:"lista"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Par\xe1metro"}),(0,l.jsx)(s.th,{children:"Tipo"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"lista"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"N\xfamero de referencia de la lista"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"*"}),(0,l.jsx)(s.td,{children:"Operator"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Si se especifica, si hay sublistas las borra de la memoria, Si se omite, las sublistas no son borradas"})]})]})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,l.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["El comando CLEAR LIST borra de la memoria la lista jer\xe1rquica cuyo n\xfamero de referencia se pasa en ",(0,l.jsx)(s.em,{children:"lista"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Generalmente debe pasar el par\xe1metro opcional ",(0,l.jsx)(s.em,{children:"*,"})," de manera que todas las sublistas, si las hay, asociadas a los elementos o subelementos de la lista tambi\xe9n sean borradas."]}),"\n",(0,l.jsx)(s.p,{children:"No es necesario borrar una lista asociada a un objeto de formulario por medio de la ventana de la Lista de propiedades. 4D carga y borra la lista por usted. Por otra parte, cada vez que usted carga, copia, extrae de un BLOB, o crea una lista por programaci\xf3n, llama al comando CLEAR LIST cuando usted no necesita m\xe1s la lista."}),"\n",(0,l.jsx)(s.p,{children:"Para borrar un sublista asociada a un elemento (en cualquier nivel) de otra lista mostrada actualmente en un formulario, proceda de la siguiente forma:"}),"\n",(0,l.jsxs)(s.p,{children:["1. Llame ",(0,l.jsx)(s.a,{href:"/docs/es/commands/get-list-item",title:"GET LIST ITEM",children:"GET LIST ITEM"})," con el elemento padre para obtener el n\xfamero de referencia de la sublista.",(0,l.jsx)(s.br,{}),"\n2. Llame ",(0,l.jsx)(s.a,{href:"/docs/es/commands/set-list-item",title:"SET LIST ITEM",children:"SET LIST ITEM"})," con el elemento padre para separar la sublista del elemento de la lista antes de borrarlos.",(0,l.jsx)(s.br,{}),"\n3. Llame CLEAR LIST para borrar la sublista cuyo n\xfamero de referencia obtuvo con ",(0,l.jsx)(s.a,{href:"/docs/es/commands/get-list-item",title:"GET LIST ITEM",children:"GET LIST ITEM"}),".",(0,l.jsx)(s.br,{}),"\n4. Llame ",(0,l.jsx)(s.em,{children:"REDRAW LIST"})," para la lista mostrada en el formulario, para recalcular sus elementos y sublistas."]}),"\n",(0,l.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsxs)(s.p,{children:["Dentro de una rutina de limpieza que borra todos los objetos y datos que ya no necesita (por ejemplo, cuando se cierra una ventana o un formulario), usted podr\xeda terminar borrando una lista jer\xe1rquica que ya haya sido borrada, dependiendo de las acciones del usuario en el formulario. Utilice ",(0,l.jsx)(s.a,{href:"/docs/es/commands/is-a-list",title:"Is a list",children:"Is a list"})," para borrar la lista s\xf3lo si es necesario:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// Extraer de la rutina de limpieza\n\xa0If(Is a list(hlList))\n\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0End if\n"})}),"\n",(0,l.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsxs)(s.p,{children:["Ver el ejemplo del comando ",(0,l.jsx)(s.a,{href:"/docs/es/commands/load-list",title:"Load list",children:"Load list"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsxs)(s.p,{children:["Ver el ejemplo del comando ",(0,l.jsx)(s.a,{href:"/docs/es/commands/blob-to-list",title:"BLOB to list",children:"BLOB to list"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"/docs/es/commands/blob-to-list",children:"BLOB to list"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/es/commands/load-list",children:"Load list"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/es/commands/new-list",children:"New list"})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,s,a){a.d(s,{Z:function(){return i},a:function(){return t}});var n=a(667294);let l={},r=n.createContext(l);function t(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);