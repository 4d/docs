"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70293"],{326628:function(e,t,s){s.r(t),s.d(t,{metadata:()=>a,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"commands-legacy/convert-path-system-to-posix","title":"Convert path system to POSIX","description":"Convert path system to POSIX ( rutaSistema {; *} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-path-system-to-posix.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-system-to-posix","permalink":"/docs/es/commands/convert-path-system-to-posix","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-system-to-posix.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-path-system-to-posix","title":"Convert path system to POSIX","slug":"/commands/convert-path-system-to-posix","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert path POSIX to system","permalink":"/docs/es/commands/convert-path-posix-to-system"},"next":{"title":"COPY DOCUMENT","permalink":"/docs/es/commands/copy-document"}}'),n=s("785893"),o=s("250065");let r={id:"convert-path-system-to-posix",title:"Convert path system to POSIX",slug:"/commands/convert-path-system-to-posix",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Convert path system to POSIX"})," ( ",(0,n.jsx)(t.em,{children:"rutaSistema"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Par\xe1metro"}),(0,n.jsx)(t.th,{children:"Tipo"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rutaSistema"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Ruta de acceso relativa o absoluta expresada en sintaxis sistema"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"*"}),(0,n.jsx)(t.td,{children:"Operador"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Opci\xf3n de codificaci\xf3n"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resultado"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"\u2190"}),(0,n.jsx)(t.td,{children:"Absolute pathname expressed in POSIX syntax"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(t.p,{children:"El comando Convert path system to POSIX convierte una ruta expresada con la sintaxis sistema en una ruta expresada con la sintaxis POSIX (Unix)."}),"\n",(0,n.jsxs)(t.p,{children:["Pase en el par\xe1metro ",(0,n.jsx)(t.em,{children:"rutaSistema"})," la ruta de acceso a un archivo o carpeta, expresada con la sintaxis sistema (Mac OS o Windows). Esta ruta puede ser absoluta o relativa a la carpeta de la base (carpeta que contiene el archivo de estructura de la base). No es obligatorio que los elementos de la ruta existan realmente en el disco en el momento de la ejecuci\xf3n del comando (el comando no prueba la validez de la ruta de acceso)."]}),"\n",(0,n.jsxs)(t.p,{children:["El comando devuelve la ruta de acceso completa del archivo o de la carpeta expresada en la sintaxis POSIX. El comando siempre devuelve una ruta absoluta, sin importar el tipo de la ruta pasada en ",(0,n.jsx)(t.em,{children:"rutaSistema"}),". Si pasa una ruta relativa en ",(0,n.jsx)(t.em,{children:"rutaSistema"}),", 4D completa el valor devuelto al a\xf1adir la ruta de acceso a la carpeta de la base."]}),"\n",(0,n.jsxs)(t.p,{children:["El par\xe1metro opcional ",(0,n.jsx)(t.em,{children:"*"}),' permite definir la codificaci\xf3n de la ruta POSIX. Por defecto, Convert path system to POSIX no codifica los caracteres especiales de la ruta POSIX. Si pasa el par\xe1metro *, los caracteres especiales se traducen (por ejemplo, "My folder" se convierte en "Mi%20carpeta").']}),"\n",(0,n.jsx)(t.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,n.jsx)(t.p,{children:"Ejemplos bajo Mac OS"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path system to POSIX("machd:file 2.txt")\n\xa0\xa0//machd es el disco de inicio\n\xa0\xa0//devuelve "/file 2.txt"\n\xa0$path:=Convert path system to POSIX("disk2:file 2.txt")\n\xa0\xa0//disk2 es un disco adicional (sin inicio)\n\xa0\xa0//devuelve "/Volumes/disk2/file 2.txt"\n\xa0$path:=Convert path system to POSIX("machd:file 2.txt";*)\n\xa0\xa0//devuelve "/file%202.txt"\n\xa0$path:=Convert path system to POSIX(":resources:images")\xa0//ruta relativa\n\xa0\xa0//devuelve "/User/mark/Documents/videodatabase/resources/images"\n\xa0$path:=Convert path system to POSIX("resources:images")\xa0//ruta relativa\n\xa0\xa0//devuelve "/resources/images"\n'})}),"\n",(0,n.jsx)(t.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,n.jsx)(t.p,{children:"Ejemplo bajo Windows"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path system to POSIX("c:\\docs\\file 2.txt")\n\xa0\xa0//returns "c:/docs/file 2.txt"\n\xa0$path:=Convert path system to POSIX("\\\\srv\\tempo\\file.txt")\n\xa0\xa0//returns "//srv/tempo/file.txt"\n'})}),"\n",(0,n.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/es/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/es/commands/object-to-path",children:"Object to path"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/es/commands/path-to-object",children:"Path to object "}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/es/commands/test-path-name",children:"Test path name"})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return r}});var a=s(667294);let n={},o=a.createContext(n);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);