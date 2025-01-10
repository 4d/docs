"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98802"],{887213:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/convert-path-posix-to-system","title":"Convert path POSIX to system","description":"Convert path POSIX to system ( rutaPosix {; *} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-path-posix-to-system.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-posix-to-system","permalink":"/docs/es/commands/convert-path-posix-to-system","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-posix-to-system.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-path-posix-to-system","title":"Convert path POSIX to system","slug":"/commands/convert-path-posix-to-system","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE DOCUMENT","permalink":"/docs/es/commands/close-document"},"next":{"title":"Convert path system to POSIX","permalink":"/docs/es/commands/convert-path-system-to-posix"}}'),o=s("785893"),a=s("250065");let r={id:"convert-path-posix-to-system",title:"Convert path POSIX to system",slug:"/commands/convert-path-posix-to-system",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Convert path POSIX to system"})," ( ",(0,o.jsx)(t.em,{children:"rutaPosix"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe1metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"rutaPosix"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Ruta de acceso POSIX"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operador"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Opci\xf3n de codificaci\xf3n"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultado"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Ruta de acceso expresada en sintaxis sistema"})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(t.p,{children:"El comando Convert path POSIX to system convierte una ruta de acceso expresada con la sintaxis POSIX (Unix) en una ruta expresada con la sintaxis sistema."}),"\n",(0,o.jsxs)(t.p,{children:["Pase en el par\xe1metro ",(0,o.jsx)(t.em,{children:"rutaPosix"}),' la ruta de acceso completa a un archivo o carpeta, expresada con la sintaxis POSIX. Esta ruta debe ser absoluta (debe comenzar con el car\xe1cter "/"). Debe pasar una ruta disco; no es posible pasar una ruta red (comenzando, por ejemplo con ftp://ftp.mysite.fr).']}),"\n",(0,o.jsx)(t.p,{children:"El comando devuelve la ruta de acceso completa del archivo o del archivo expresada en la sintaxis del sistema actual."}),"\n",(0,o.jsxs)(t.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(t.em,{children:"*"})," permite indicar si el par\xe1metro ",(0,o.jsx)(t.em,{children:"rutaPosix"})," est\xe1 codificado. Si este es el caso, debe pasar este par\xe1metro, de lo contrario la conversi\xf3n no ser\xe1 v\xe1lida. El comando devuelve la ruta de acceso sin codificaci\xf3n."]}),"\n",(0,o.jsx)(t.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(t.p,{children:"Ejemplos bajo Mac OS:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")\n\xa0\xa0//devuelve "machd:file 2.txt"\n\xa0$path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)\n\xa0\xa0//devuelve "machd:file 2.txt"\n\xa0$path:=Convert path POSIX to system("/file 2.txt")\n\xa0\xa0//devuelve "machd:file 2.txt" si machd es el disco de inicio\n'})}),"\n",(0,o.jsx)(t.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(t.p,{children:"Ejemplos bajo Windows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path POSIX to system("c:/docs/file 2.txt")\n\xa0\xa0//devuelve "c:\\\\docs\\\\file 2.txt"\n\xa0$path:=Convert path POSIX to system("c:/docs/file%202.txt";*)\n\xa0\xa0//devuelve "c:\\\\docs\\\\file 2.txt"\n'})}),"\n",(0,o.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/es/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/es/commands/object-to-path",children:"Object to path"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/es/commands/path-to-object",children:"Path to object "})]}),"\n",(0,o.jsx)(t.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"N\xfamero de comando"}),(0,o.jsx)(t.td,{children:"1107"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Hilo seguro"}),(0,o.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return r}});var n=s(667294);let o={},a=n.createContext(o);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);