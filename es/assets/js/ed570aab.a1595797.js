"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89393"],{734620:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-text-to-pasteboard","title":"SET TEXT TO PASTEBOARD","description":"SET TEXT TO PASTEBOARD ( texto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-text-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/set-text-to-pasteboard","permalink":"/docs/es/20-R7/commands/set-text-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-text-to-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-text-to-pasteboard","title":"SET TEXT TO PASTEBOARD","slug":"/commands/set-text-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE TO PASTEBOARD","permalink":"/docs/es/20-R7/commands/set-picture-to-pasteboard"},"next":{"title":"Pictures","permalink":"/docs/es/20-R7/category/pictures"}}'),o=n("785893"),r=n("250065");let a={id:"set-text-to-pasteboard",title:"SET TEXT TO PASTEBOARD",slug:"/commands/set-text-to-pasteboard",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"SET TEXT TO PASTEBOARD"})," ( ",(0,o.jsx)(t.em,{children:"texto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe1metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"texto"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Texto a copiar en el portapapeles"})]})})]}),"\n",(0,o.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(t.p,{children:["SET TEXT TO PASTEBOARD limpia el portapapeles y luego coloca una copia del texto en ",(0,o.jsx)(t.em,{children:"texto"})," en el portapapeles."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Nota:"})," en el caso de las operaciones copiar/pegar, pasteboard es equivalente a clipboard."]}),"\n",(0,o.jsxs)(t.p,{children:["Despu\xe9s de colocar texto en el portapapeles, puede recuperarlo utilizando el comando ",(0,o.jsx)(t.a,{href:"/docs/es/20-R7/commands/get-text-from-pasteboard",title:"Get text from pasteboard",children:"Get text from pasteboard"}),' o llamando GET PASTEBOARD DATA("com.4d.text.native";...).']}),"\n",(0,o.jsx)(t.p,{children:"4D pueden contener hasta 2 GB de texto"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Nota:"})," el contenedor de datos est\xe1 en modo s\xf3lo lectura durante el evento de formulario On Drag Over. No es posible utilizar este comando en este contexto."]}),"\n",(0,o.jsx)(t.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(t.p,{children:["Ver el ejemplo del comando ",(0,o.jsx)(t.a,{href:"/docs/es/20-R7/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(t.p,{children:"Si el texto se coloca correctamente en el portapapeles, la variable OK toma el valor 1. Si no hay suficiente memoria para colocar una copia del texto en el portapapeles, la variable OK toma el valor 0, pero no se genera error."}),"\n",(0,o.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/es/20-R7/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/es/20-R7/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,o.jsx)(t.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"N\xfamero de comando"}),(0,o.jsx)(t.td,{children:"523"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Hilo seguro"}),(0,o.jsx)(t.td,{children:"\u2717"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Modifica variables"}),(0,o.jsx)(t.td,{children:"OK"})]})]})]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let o={},r=s.createContext(o);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);