"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59076"],{692873:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>t,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/string-list-to-array","title":"STRING LIST TO ARRAY","description":"STRING LIST TO ARRAY ( resNum ; cadenas {; resArchivo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/string-list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/string-list-to-array","permalink":"/docs/es/commands/string-list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstring-list-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"string-list-to-array","title":"STRING LIST TO ARRAY","slug":"/commands/string-list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE TYPE LIST","permalink":"/docs/es/commands/resource-type-list"},"next":{"title":"SQL","permalink":"/docs/es/category/sql"}}'),a=n("785893"),i=n("250065");let o={id:"string-list-to-array",title:"STRING LIST TO ARRAY",slug:"/commands/string-list-to-array",displayed_sidebar:"docs"},t=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Compatibilidad con la arquitectura XLIFF",id:"compatibilidad-con-la-arquitectura-xliff",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"STRING LIST TO ARRAY"})," ( ",(0,a.jsx)(r.em,{children:"resNum"})," ; ",(0,a.jsx)(r.em,{children:"cadenas"})," {; ",(0,a.jsx)(r.em,{children:"resArchivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"resNum"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:'N\xfamero de referencia del recurso o Atributo "id" del elemento "group" (XLIFF)'})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"cadenas"}),(0,a.jsx)(r.td,{children:"Text array"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:'Cadenas del elemento "group" (XLIFF)'})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"resArchivo"}),(0,a.jsx)(r.td,{children:"Time"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"N\xfamero de referencia del archivo de recursos o Todos los archivos XLIFF o los archivos de recursos abiertos, si se omite"})]})]})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,a.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:["El comando STRING LIST TO ARRAY llena el array ",(0,a.jsx)(r.em,{children:"cadenas"})," con:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:['las cadenas almacenadas en el recurso de tipo lista de cadenas ("STR#") cuyo n\xfamero se pasa en ',(0,a.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:['o con una cadena almacenada en un archivo XLIFF abierto cuyo atributo "id" del elemento "group" se pasa en ',(0,a.jsx)(r.em,{children:"resNum"}),' (ver a continuaci\xf3n "Compatibilidad con la arquitectura XLIFF").']}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Si el recurso no se encuentra, el array ",(0,a.jsx)(r.em,{children:"cadenas"})," no cambia y la variable OK toma el valor 0 (cero)."]}),"\n",(0,a.jsxs)(r.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en ",(0,a.jsx)(r.em,{children:"resArchivo"}),", el recurso se busca en ese archivo \xfanicamente. Si no pasa ",(0,a.jsx)(r.em,{children:"resArchivo"}),", se devolver\xe1 la primera ocurrencia del recurso encontrado en la cadena de archivos de recursos. Antes de llamar STRING LIST TO ARRAY, puede predeclarar el array ",(0,a.jsx)(r.em,{children:"cadenas"})," como una array de tipo cadena o texto. Si no predeclara el array, el comando crea ",(0,a.jsx)(r.em,{children:"cadenas"})," como un array de tipo Texto."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," cada cadena de un recurso lista de cadenas puede contener hasta 255 caracteres."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Tip:"})," cuando utilice los recursos listas de cadenas, lim\xedtese a recursos de 32K, y a un m\xe1ximo de unas centenas de cadenas por recurso."]}),"\n",(0,a.jsx)(r.h4,{id:"compatibilidad-con-la-arquitectura-xliff",children:"Compatibilidad con la arquitectura XLIFF"}),"\n",(0,a.jsxs)(r.p,{children:["El comando STRING LIST TO ARRAY es compatible con la arquitectura XLIFF de 4D a partir de la versi\xf3n 11: el comando busca primero por los valores correspondientes a ",(0,a.jsx)(r.em,{children:"resNum"})," y ",(0,a.jsx)(r.em,{children:"strNum"})," en todos los archivos XLIFF abiertos (si el par\xe1metro ",(0,a.jsx)(r.em,{children:"resArchivo"})," se omite) y llena el array ",(0,a.jsx)(r.em,{children:"cadenas"})," con los valores correspondientes. En este caso, ",(0,a.jsx)(r.em,{children:"resNum"})," espec\xedfica el atributo ",(0,a.jsx)(r.strong,{children:"id"})," del elemento ",(0,a.jsx)(r.strong,{children:"group"})," y el array ",(0,a.jsx)(r.em,{children:"cadenas"})," contiene todas las cadenas del elemento. Si no se encuentra el valor, el comando continua la b\xfasqueda en los archivos de recursos abiertos. Para mayor informaci\xf3n sobre la arquitectura XLIFF en 4D, consulte el Manual de Dise\xf1o."]}),"\n",(0,a.jsx)(r.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(r.p,{children:"Si se encuentra el recurso, la variable sistema OK toma el valor 1, de lo contrario toma el valor 0 (cero)."}),"\n",(0,a.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/commands/get-indexed-string",children:"Get indexed string"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-string-resource",children:"Get string resource"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-text-resource",children:"Get text resource"})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return o}});var s=n(667294);let a={},i=s.createContext(a);function o(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);