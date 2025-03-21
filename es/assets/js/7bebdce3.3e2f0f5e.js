"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38550"],{939991:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-string-resource","title":"Get string resource","description":"Get string resource ( resNum {; resArchivo} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-string-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-string-resource","permalink":"/docs/es/commands/get-string-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-string-resource.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-string-resource","title":"Get string resource","slug":"/commands/get-string-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get resource properties","permalink":"/docs/es/commands/get-resource-properties"},"next":{"title":"Get text resource","permalink":"/docs/es/commands/get-text-resource"}}'),t=n("785893"),c=n("250065");let d={id:"get-string-resource",title:"Get string resource",slug:"/commands/get-string-resource",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get string resource"})," ( ",(0,t.jsx)(r.em,{children:"resNum"})," {; ",(0,t.jsx)(r.em,{children:"resArchivo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe1metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resNum"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero del recurso"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resArchivo"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Contenido del recurso STR"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(r.p,{children:["El comando Get string resource devuelve la cadena almacenada en el recurso cadena (\u201CSTR \u201D) cuyo n\xfamero de referencia se pasa en ",(0,t.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Si el recurso no se encuentra, se devuelve una cadena vac\xeda y la variable OK toma el valor 0 (cero)."}),"\n",(0,t.jsxs)(r.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en ",(0,t.jsx)(r.em,{children:"resArchivo"}),", el recurso se busca en ese archivo \xfanicamente. Si no pasa ",(0,t.jsx)(r.em,{children:"resArchivo"}),", se devuelve la primera ocurrencia del recurso encontrada en la cadena de archivos de recursos."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Nota:"})," un recurso cadena puede contener hasta 255 caracteres."]}),"\n",(0,t.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(r.p,{children:"El siguiente ejemplo muestra los contenidos del recurso cadena de ID=20911, que debe encontrar en al menos uno de los archivos de recursos abiertos:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0ALERT(Get string resource(20911))\n"})}),"\n",(0,t.jsx)(r.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(r.p,{children:"La variable sistema OK toma el valor 1 si se encuentra el recurso, de lo contrario toma el valor 0 (cero)."}),"\n",(0,t.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/es/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/es/commands/get-text-resource",children:"Get text resource"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/es/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]}),"\n",(0,t.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero de comando"}),(0,t.jsx)(r.td,{children:"506"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Hilo seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifica variables"}),(0,t.jsx)(r.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var s=n(667294);let t={},c=s.createContext(t);function d(e){let r=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);