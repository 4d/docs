"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69692"],{245766:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>a,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/hide-process","title":"HIDE PROCESS","description":"HIDE PROCESS ( proceso )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/hide-process.md","sourceDirName":"commands-legacy","slug":"/commands/hide-process","permalink":"/docs/es/commands/hide-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-process.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"hide-process","title":"HIDE PROCESS","slug":"/commands/hide-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Frontmost process","permalink":"/docs/es/commands/frontmost-process"},"next":{"title":"SHOW PROCESS","permalink":"/docs/es/commands/show-process"}}'),r=n("785893"),c=n("250065");let t={id:"hide-process",title:"HIDE PROCESS",slug:"/commands/hide-process",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"HIDE PROCESS"})," ( ",(0,r.jsx)(s.em,{children:"proceso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"proceso"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de proceso a ocultar"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["HIDE PROCESS oculta todas las ventanas que pertenecen a ",(0,r.jsx)(s.em,{children:"proceso"}),". Todos los elementos de interfaz de ",(0,r.jsx)(s.em,{children:"proceso"})," se ocultan hasta el siguiente ",(0,r.jsx)(s.a,{href:"/docs/es/commands/show-process",title:"SHOW PROCESS",children:"SHOW PROCESS"}),". La barra de men\xfas del proceso tambi\xe9n se oculta. Esto significa que la apertura de una ventana mientras el proceso est\xe1 oculto no provocar\xe1 ning\xfan cambio en la visualizaci\xf3n en pantalla. Si el proceso ya est\xe1 oculto, el comando no tiene ning\xfan efecto."]}),"\n",(0,r.jsxs)(s.p,{children:["La \xfanica excepci\xf3n a esta regla es la ventana del depurador. Si la ventana del depurador se muestra cuando ",(0,r.jsx)(s.em,{children:"proceso"})," es un proceso oculto, ",(0,r.jsx)(s.em,{children:"proceso"})," se muestra y pasa al primer plano del proceso."]}),"\n",(0,r.jsxs)(s.p,{children:["Si no quiere que un ",(0,r.jsx)(s.em,{children:"proceso"})," se muestre cuando es creado, HIDE PROCESS debe ser el primer comando en el m\xe9todo de proceso. Los procesos Usuario/Men\xfas personalizados y los procesos de gesti\xf3n de la cach\xe9 no pueden ocultarse utilizando este comando."]}),"\n",(0,r.jsx)(s.p,{children:"Aunque un proceso est\xe9 oculto, el proceso est\xe1 a\xfan en ejecuci\xf3n."}),"\n",(0,r.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(s.p,{children:"El siguiente ejemplo oculta todas las ventanas que pertenecen al proceso actual:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0HIDE PROCESS(Current process)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/commands/process-state",children:"Process state"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/show-process",children:"SHOW PROCESS"})]}),"\n",(0,r.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero de comando"}),(0,r.jsx)(s.td,{children:"324"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hilo seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return t}});var o=n(667294);let r={},c=o.createContext(r);function t(e){let s=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(c.Provider,{value:s},e.children)}}}]);