"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46677"],{443642:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/reload-external-data","title":"RELOAD EXTERNAL DATA","description":"RELOAD EXTERNAL DATA ( elCampo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/reload-external-data.md","sourceDirName":"commands-legacy","slug":"/commands/reload-external-data","permalink":"/docs/es/20-R8/commands/reload-external-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freload-external-data.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reload-external-data","title":"RELOAD EXTERNAL DATA","slug":"/commands/reload-external-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REGENERATE MISSING TABLE","permalink":"/docs/es/20-R8/commands/regenerate-missing-table"},"next":{"title":"RESUME INDEXES","permalink":"/docs/es/20-R8/commands/resume-indexes"}}'),o=a("785893"),t=a("250065");let s={id:"reload-external-data",title:"RELOAD EXTERNAL DATA",slug:"/commands/reload-external-data",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," ( ",(0,o.jsx)(n.em,{children:"elCampo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"elCampo"}),(0,o.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Campo para el cual recargar los datos"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," permite recargar en memoria el contenido en memoria de un archivo de almacenamiento externo asociado a un campo de tipo BLOB, Imagen o Texto."]}),"\n",(0,o.jsx)(n.p,{children:"Este comando es \xfatil cuando el campo de un registro ya cargado en memoria es modificado en el disco por otra aplicaci\xf3n (los archivos de almacenamiento externo de los campos siempre son accesibles en escritura). Por ejemplo, una imagen utilizada en un campo Imagen puede ser modificada por un editor gr\xe1fico y luego de guardarse en el disco."}),"\n",(0,o.jsxs)(n.p,{children:["A continuaci\xf3n debe recargar los datos utilizando el comando ",(0,o.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," para actualizar los contenidos del campo si se muestra en un formulario."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": el comando ",(0,o.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," s\xf3lo funciona 4D local o 4D Server. No es posible recargar individualmente un campo con 4D en modo remoto. En este contexto, es necesario recargar todos los registros (utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/load-record",children:"LOAD RECORD"})," por ejemplo)."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-external-data-path",children:"SET EXTERNAL DATA PATH"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1135"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var r=a(667294);let o={},t=r.createContext(o);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);