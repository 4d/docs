"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7563"],{589705:function(e,a,n){n.r(a),n.d(a,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/flush-cache","title":"FLUSH CACHE","description":"FLUSH CACHE {( tam | *  )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/flush-cache.md","sourceDirName":"commands-legacy","slug":"/commands/flush-cache","permalink":"/docs/es/commands/flush-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fflush-cache.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"flush-cache","title":"FLUSH CACHE","slug":"/commands/flush-cache","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cache info","permalink":"/docs/es/commands/cache-info"},"next":{"title":"Get adjusted blobs cache priority","permalink":"/docs/es/commands/get-adjusted-blobs-cache-priority"}}'),r=n("785893"),t=n("250065");let c={id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},d=void 0,o={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let a={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"FLUSH CACHE"})," {( tam | *  )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tam | *"}),(0,r.jsx)(a.td,{children:"Real, Operador"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"* para liberar la memoria cach\xe9 completamente, o n\xfamero de bytes a liberar en la cach\xe9"})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(a.p,{children:"El comando FLUSH CACHE guarda inmediatamente los buffers de datos en el disco. Todos los cambios realizados a la base se guardan en el disco."}),"\n",(0,r.jsx)(a.p,{children:"Por defecto, este comando no afecta el contenido actual de la cach\xe9, esto significa que los datos se siguen utilizando en acceso en lectura posteriores. Opcionalmente, se puede pasar un par\xe1metro a modificar su contenido:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["pase ",(0,r.jsx)(a.em,{children:"*"})," para guardar la cach\xe9 y liberar toda la memoria cach\xe9."]}),"\n",(0,r.jsxs)(a.li,{children:["pase un valor ",(0,r.jsx)(a.em,{children:"tam"})," para guardar la cach\xe9 y liberar s\xf3lo el n\xfamero ",(0,r.jsx)(a.em,{children:"tam"})," de bytes de la cach\xe9."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," pasar un par\xe1metro a este comando es para prop\xf3sitos de prueba. Por motivos de rendimiento, no se recomienda liberar la cach\xe9 en el entorno de producci\xf3n."]}),"\n",(0,r.jsxs)(a.p,{children:["Normalmente, no es necesario llamar a este comando, ya que 4D guarda las modificaciones de datos regularmente. La opci\xf3n ",(0,r.jsx)(a.strong,{children:"Vaciar la cach\xe9 cada X segundos (minutos)"})," en ",(0,r.jsx)(a.a,{href:"/docs/es/settings/database",children:"P\xe1gina Base de datos"})," de las Propiedades de la base, que especifica con qu\xe9 frecuencia guardar, se suele utilizar para controlar el vaciado de la cach\xe9. Recomendamos utilizar el valor por defecto de 20 segundos. Tenga en cuenta tambi\xe9n que el par\xe1metro Cache flush periodicity se puede ajustar y leer utilizando los comandos ",(0,r.jsx)(a.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," y ",(0,r.jsx)(a.a,{href:"/docs/es/commands/get-database-parameter",children:"Get database parameter"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/get-database-parameter",children:"Get database parameter"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,r.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"297"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return d},a:function(){return c}});var s=n(667294);let r={},t=s.createContext(r);function c(e){let a=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);