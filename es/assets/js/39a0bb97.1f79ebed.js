"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31713"],{291727:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>i,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/use-character-set","title":"USE CHARACTER SET","description":"USE CHARACTER SET ( mapa {; mapaImpExp} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/use-character-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-character-set","permalink":"/docs/es/20-R7/commands/use-character-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-character-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-character-set","title":"USE CHARACTER SET","slug":"/commands/use-character-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TIMEOUT","permalink":"/docs/es/20-R7/commands/set-timeout"},"next":{"title":"Compiler","permalink":"/docs/es/20-R7/category/compiler"}}'),r=n("785893"),c=n("250065");let o={id:"use-character-set",title:"USE CHARACTER SET",slug:"/commands/use-character-set",displayed_sidebar:"docs"},t=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"USE CHARACTER SET"})," ( ",(0,r.jsx)(s.em,{children:"mapa"})," {; ",(0,r.jsx)(s.em,{children:"mapaImpExp"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mapa"}),(0,r.jsx)(s.td,{children:"Text, *"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nombre del conjunto de caracteres a a utilizar (Modo Unicode) o nombre del documento del mapa ASCII a utilizar (Modo ASCII) o * para restaurar el mapa ASCII/conjunto de caracteres por defecto"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mapaImpExp"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"0 = Mapa de exportaci\xf3n 1 = Mapa de importaci\xf3n Si se omite, mapa de exportaci\xf3n"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["USE CHARACTER SET modifica el conjunto de caracteres utilizado por 4D para todas las operaciones de transferencia de datos entre la base y un documento o puerto serial para el proceso actual. Las operaciones de transferencia incluyen la importaci\xf3n y exportaci\xf3n de texto, DIF y SYLK. Un mapa de caracteres tambi\xe9n funciona con los datos enviados por los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"}),", ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-packet",children:"RECEIVE PACKET"})," (para paquetes de tipo texto), y ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),". No tiene efecto en transferencias de datos realizadas con ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/send-record",children:"SEND RECORD"}),", ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-record",children:"RECEIVE RECORD"}),", ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"}),", ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-packet",children:"RECEIVE PACKET"})," (para paquetes tipo BLOB) y ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["El par\xe1metro ",(0,r.jsx)(s.em,{children:"mapa"}),' debe corresponder al nombre "IANA" del conjunto de caracteres a utilizar, o a uno de sus alias. Por ejemplo, los nombres "iso-8859-1" o "utf-8" son ambos nombres v\xe1lidos, as\xed como los alias "latin1" u "11". Para mayor informaci\xf3n sobre estos nombres, por favor consulte la siguiente direcci\xf3n: ',(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"})}),". Tambi\xe9n se presentan ejemplos de nombres IANA en la descripci\xf3n del comando ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si ",(0,r.jsx)(s.em,{children:"mapaImpExp"})," es 0, el mapa est\xe1 definido para la exportaci\xf3n. Si ",(0,r.jsx)(s.em,{children:"mapaImpExp"})," es 1, el mapa es para importaci\xf3n. Si no pasa el par\xe1metro ",(0,r.jsx)(s.em,{children:"mapaImpExp"}),", se utiliza el mapa de exportaci\xf3n por defecto."]}),"\n",(0,r.jsxs)(s.p,{children:["Cuando se pasa el par\xe1metro *, el conjunto de caracteres por defecto se restablece (mapa de importaci\xf3n o exportaci\xf3n dependiendo del valor de ",(0,r.jsx)(s.em,{children:"mapaImpExp."})]}),"\n",(0,r.jsx)(s.p,{children:"En 4D, el conjunto de caracteres por defecto es UTF-8."}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(s.p,{children:"El siguiente ejemplo (modo Unicode) utiliza el conjunto de caracteres UTF-16 para exportar un texto, luego restablece el conjunto de caracteres por defecto:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0USE CHARACTER SET("UTF-16LE";0)\xa0// Utilizar el conjunto de caracteres UTF-16 "Litttle Endian"\n\xa0EXPORT TEXT([MiTabla];"MiTexto")\xa0// Exportar los datos con el mapa\n\xa0USE CHARACTER SET(*;0)\xa0// Restablecer el conjunto de caracteres por defecto\n'})}),"\n",(0,r.jsx)(s.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(s.p,{children:"La variable sistema OK toma el valor 1 si el mapa se carga correctamente, de lo contrario toma el valor 0."}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/export-dif",children:"EXPORT DIF"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/export-sylk",children:"EXPORT SYLK"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/export-text",children:"EXPORT TEXT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/import-dif",children:"IMPORT DIF"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/import-sylk",children:"IMPORT SYLK"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/import-text",children:"IMPORT TEXT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,r.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero de comando"}),(0,r.jsx)(s.td,{children:"205"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hilo seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifica variables"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return o}});var a=n(667294);let r={},c=a.createContext(r);function o(e){let s=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(c.Provider,{value:s},e.children)}}}]);