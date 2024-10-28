"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87104],{122666:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var n=s(474848),t=s(28453);const c={id:"get-string-resource",title:"Get string resource",slug:"/commands/get-string-resource",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/get-string-resource",title:"Get string resource",description:"Get string resource ( resNum {; resArchivo} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-string-resource.md",sourceDirName:"commands-legacy",slug:"/commands/get-string-resource",permalink:"/docs/es/commands/get-string-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-string-resource.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-string-resource",title:"Get string resource",slug:"/commands/get-string-resource",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get resource properties",permalink:"/docs/es/commands/get-resource-properties"},next:{title:"Get text resource",permalink:"/docs/es/commands/get-text-resource"}},d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Get string resource"})," ( ",(0,n.jsx)(r.em,{children:"resNum"})," {; ",(0,n.jsx)(r.em,{children:"resArchivo"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe1metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resNum"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"N\xfamero del recurso"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resArchivo"}),(0,n.jsx)(r.td,{children:"Time"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"N\xfamero de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resultado"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Contenido del recurso STR"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,n.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(r.p,{children:["El comando Get string resource devuelve la cadena almacenada en el recurso cadena (\u201cSTR \u201d) cuyo n\xfamero de referencia se pasa en ",(0,n.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Si el recurso no se encuentra, se devuelve una cadena vac\xeda y la variable OK toma el valor 0 (cero)."}),"\n",(0,n.jsxs)(r.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en ",(0,n.jsx)(r.em,{children:"resArchivo"}),", el recurso se busca en ese archivo \xfanicamente. Si no pasa ",(0,n.jsx)(r.em,{children:"resArchivo"}),", se devuelve la primera ocurrencia del recurso encontrada en la cadena de archivos de recursos."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," un recurso cadena puede contener hasta 255 caracteres."]}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(r.p,{children:"El siguiente ejemplo muestra los contenidos del recurso cadena de ID=20911, que debe encontrar en al menos uno de los archivos de recursos abiertos:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0ALERT(Get string resource(20911))\n"})}),"\n",(0,n.jsx)(r.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,n.jsx)(r.p,{children:"La variable sistema OK toma el valor 1 si se encuentra el recurso, de lo contrario toma el valor 0 (cero)."}),"\n",(0,n.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/es/commands/get-indexed-string",children:"Get indexed string"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/es/commands/get-text-resource",children:"Get text resource"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/es/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>i});var n=s(296540);const t={},c=n.createContext(t);function o(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);