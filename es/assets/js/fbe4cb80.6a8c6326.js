"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15490"],{281599:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>c});var n=JSON.parse('{"id":"commands-legacy/get-text-resource","title":"Get text resource","description":"Get text resource ( resNum {; resArchivo} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-text-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-resource","permalink":"/docs/es/commands/get-text-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-resource.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-text-resource","title":"Get text resource","slug":"/commands/get-text-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get string resource","permalink":"/docs/es/commands/get-string-resource"},"next":{"title":"Open resource file","permalink":"/docs/es/commands/open-resource-file"}}'),t=s("785893"),o=s("250065");let c={id:"get-text-resource",title:"Get text resource",slug:"/commands/get-text-resource",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get text resource"})," ( ",(0,t.jsx)(r.em,{children:"resNum"})," {; ",(0,t.jsx)(r.em,{children:"resArchivo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe1metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resNum"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de recurso"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resArchivo"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de referencia del archivo de recursos o todos los archivos de recursos abiertos, si se omite"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Contenido del recurso TEXT"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(r.p,{children:["El comando Get text resource devuelve el texto guardado en el recurso texto (\u201CTEXT\u201D) cuyo n\xfamero de identificaci\xf3n se pasa en ",(0,t.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Si no se encuentra el recurso, se devuelve un texto vac\xedo y la variable sistema OK toma el valor 0 (cero)."}),"\n",(0,t.jsxs)(r.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en ",(0,t.jsx)(r.em,{children:"resArchivo"}),", el recurso se busca en ese archivo \xfanicamente. Si no pasa ",(0,t.jsx)(r.em,{children:"resArchivo"}),", ser\xe1 devuelta la primera ocurrencia del recurso encontrado en la cadena de archivos de recursos."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Nota:"})," un recurso texto puede contener hasta 32 000 caracteres."]}),"\n",(0,t.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(r.p,{children:"El siguiente ejemplo muestra el contenido del recurso texto de ID=20800, que debe estar ubicado en al menos uno de los archivos de recursos abiertos:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0ALERT(Get text resource(20800))\n"})}),"\n",(0,t.jsx)(r.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(r.p,{children:"Si se encuentra el recurso, OK toma el valor 1. De lo contrario, toma el valor 0 (cero)."}),"\n",(0,t.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/es/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/es/commands/get-string-resource",children:"Get string resource"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/es/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return c}});var n=s(667294);let t={},o=n.createContext(t);function c(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);