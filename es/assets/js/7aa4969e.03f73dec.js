"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11499"],{644460:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-document-size","title":"Get document size","description":"Get document size ( document {; *} ) : Real","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-document-size.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-size","permalink":"/docs/es/20-R8/commands/get-document-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-size.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-document-size","title":"Get document size","slug":"/commands/get-document-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET DOCUMENT PROPERTIES","permalink":"/docs/es/20-R8/commands/get-document-properties"},"next":{"title":"Localized document path","permalink":"/docs/es/20-R8/commands/localized-document-path"}}'),d=t("785893"),o=t("250065");let r={id:"get-document-size",title:"Get document size",slug:"/commands/get-document-size",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get document size"})," ( ",(0,d.jsx)(n.em,{children:"document"})," {; *} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Text, Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de referencia del documento o Nombre del documento"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"En Mac OS \xfanicamente: -si se omite, tama\xf1o del data fork - si se especifica, tama\xf1o del resource fork"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tama\xf1o (expresado en bytes) del documento"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando Get document size devuelve el tama\xf1o de un documento, expresado en bytes."}),"\n",(0,d.jsxs)(n.p,{children:["Si el documento est\xe1 abierto, pase su n\xfamero de referencia en ",(0,d.jsx)(n.em,{children:"documento"}),".",(0,d.jsx)(n.br,{}),"\nSi el documento no est\xe1 abierto, pase su nombre o ruta en ",(0,d.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["En Macintosh, si no pasa el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"*"}),", se devuelve el tama\xf1o del data fork. Si no pasa el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"}),", se devuelve el tama\xf1o del resource fork."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-document-position",children:"Get document position"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-document-position",children:"SET DOCUMENT POSITION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-document-size",children:"SET DOCUMENT SIZE"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"479"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let d={},o=s.createContext(d);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);