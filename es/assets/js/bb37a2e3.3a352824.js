"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38318"],{871158:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/move-document","title":"MOVE DOCUMENT","description":"MOVE DOCUMENT ( rutaFuente ; rutaDest )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/move-document.md","sourceDirName":"commands-legacy","slug":"/commands/move-document","permalink":"/docs/es/20-R7/commands/move-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmove-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"move-document","title":"MOVE DOCUMENT","slug":"/commands/move-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Localized document path","permalink":"/docs/es/20-R7/commands/localized-document-path"},"next":{"title":"Object to path","permalink":"/docs/es/20-R7/commands/object-to-path"}}'),t=o("785893"),c=o("250065");let s={id:"move-document",title:"MOVE DOCUMENT",slug:"/commands/move-document",displayed_sidebar:"docs"},r=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MOVE DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"rutaFuente"})," ; ",(0,t.jsx)(n.em,{children:"rutaDest"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rutaFuente"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ruta de acceso completa al documento existente"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rutaDest"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ruta de acceso de destino"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando MOVE DOCUMENT mueve o renombra un documento."}),"\n",(0,t.jsxs)(n.p,{children:["Pase la ruta de acceso completa al documento existente en ",(0,t.jsx)(n.em,{children:"rutaFuente"})," y el nuevo nombre y/o ubicaci\xf3n del documento en ",(0,t.jsx)(n.em,{children:"rutaDest"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Advertencia:"})," utilizando MOVE DOCUMENT, puede mover un documento desde y hacia cualquier directorio en el mismo volumen. Si quiere mover un documento entre dos vol\xfamenes diferentes, utilice el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/copy-document",title:"COPY DOCUMENT",children:"COPY DOCUMENT"})," para \u201Cmover\u201D el documento luego borre la copia original con el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/delete-document",title:"DELETE DOCUMENT",children:"DELETE DOCUMENT"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo renombra el documento DocNombre:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\CARPETA\\\\DocNombre";"C:\\\\CARPETA\\\\NewDocNombre")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo mueve y renombre el documento DocNombre:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\CARPETA1\\\\DocNombre";"C:\\\\CARPETA2\\\\NewDocNombre")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo mueve el documento DocName:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\CARPETA1\\\\DocNombre";"C:\\\\CARPETA2\\\\DocNombre")\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," en los dos \xfaltimos ejemplos, debe existir la carpeta de destino ",(0,t.jsx)(n.em,{children:'"C:\\\\CARPETA2"'}),". El comando MOVE DOCUMENT s\xf3lo mueve un documento; no crea carpetas."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/copy-document",children:"COPY DOCUMENT"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"540"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return s}});var d=o(667294);let t={},c=d.createContext(t);function s(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);