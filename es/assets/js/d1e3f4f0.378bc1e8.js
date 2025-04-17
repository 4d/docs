"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16683"],{257749:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/wa-get-preference","title":"WA GET PREFERENCE","description":"WA GET PREFERENCE ( { ;} objeto ; selector ; valor* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-get-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-preference","permalink":"/docs/es/commands/wa-get-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-preference.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-get-preference","title":"WA GET PREFERENCE","slug":"/commands/wa-get-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get page title","permalink":"/docs/es/commands/wa-get-page-title"},"next":{"title":"WA GET URL FILTERS","permalink":"/docs/es/commands/wa-get-url-filters"}}'),t=r("785893"),d=r("250065");let i={id:"wa-get-preference",title:"WA GET PREFERENCE",slug:"/commands/wa-get-preference",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA GET PREFERENCE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"selector"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"selector"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Preferencia a leer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor actual de la preferencia"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando WA GET PREFERENCE permite obtener el valor actual de una preferencia en el \xe1rea web designada por los par\xe1metros ",(0,t.jsx)(n.em,{children:"*"})," y ",(0,t.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,t.jsx)(n.em,{children:"selector"})," la preferencia a leer. Puede pasar una de las siguientes constantes, que se encuentran en el tema ",(0,t.jsx)(n.em,{children:"Web Area"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable contextual menu"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Autoriza la visualizaci\xf3n del men\xfa contextual est\xe1ndar en el \xe1rea web. Por defecto (cualquier m\xe1quina) = False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable URL drop"}),(0,t.jsx)(n.td,{children:"101"}),(0,t.jsxs)(n.td,{children:["Cambia el icono de soltar y llama al evento ",(0,t.jsx)(n.em,{children:"On Window Opening Denied"})," cuando se sueltan las URLs o los archivos en el \xe1rea web. Por defecto (toda m\xe1quina) = False"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable Web inspector"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"Permite la visualizaci\xf3n del inspector web en el \xe1rea. Por defecto (todo m\xe1quina) = False."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,t.jsx)(n.em,{children:"valor"})," una variable que recibir\xe1 el valor actual de la preferencia. La variable ",(0,t.jsx)(n.em,{children:"valor"})," siempre es de tipo Booleano: contiene ",(0,t.jsx)(n.strong,{children:"True"})," si la preferencia est\xe1 activa y si no ",(0,t.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/wa-set-preference",children:"WA SET PREFERENCE"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1042"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);