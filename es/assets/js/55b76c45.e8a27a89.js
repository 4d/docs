"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16894"],{214753:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/wa-get-last-url-error","title":"WA GET LAST URL ERROR","description":"WA GET LAST URL ERROR ( { ;} objeto ; url ; descripcion ; codigoError* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-get-last-url-error.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-last-url-error","permalink":"/docs/es/commands/wa-get-last-url-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-url-error.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-last-url-error","title":"WA GET LAST URL ERROR","slug":"/commands/wa-get-last-url-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get last filtered URL","permalink":"/docs/es/commands/wa-get-last-filtered-url"},"next":{"title":"WA Get page content","permalink":"/docs/es/commands/wa-get-page-content"}}'),t=n("785893"),o=n("250065");let d={id:"wa-get-last-url-error",title:"WA GET LAST URL ERROR",slug:"/commands/wa-get-last-url-error",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let r={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WA GET LAST URL ERROR"})," ( {* ;} ",(0,t.jsx)(r.em,{children:"objeto"})," ; ",(0,t.jsx)(r.em,{children:"url"})," ; ",(0,t.jsx)(r.em,{children:"descripcion"})," ; ",(0,t.jsx)(r.em,{children:"codigoError"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe1metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Operador"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"objeto"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"url"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"URL al origen del error"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"descripcion"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Descripci\xf3n del error (Mac OS)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"codigoError"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"C\xf3digo de error"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(r.p,{children:["El comando WA GET LAST URL ERROR permite recuperar varios elementos de informaci\xf3n relacionados con el \xfaltimo error ocurrido en el \xe1rea Web designada por los par\xe1metros ",(0,t.jsx)(r.em,{children:"*"})," y ",(0,t.jsx)(r.em,{children:"objeto"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Esta informaci\xf3n se devuelve en tres variables:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"url"}),": el URL provoca el error."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"descripcion"})," (Mac OS \xfanicamente): un texto describe el error (si est\xe1 disponible). Si no es posible asociar un texto al error, se devuelve una cadena vac\xeda. Bajo Windows, este par\xe1metro siempre se devuelve vac\xedo."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"codigoError"}),": c\xf3digo del error."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"- Si el c\xf3digo es >=400, es un error relacionado con el protocolo HTTP. Para mayor informaci\xf3n sobre este tipo de error, consulte la siguiente direcci\xf3n:"}),"\n",(0,t.jsxs)(r.p,{children:["*",(0,t.jsx)(r.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.htm*l",children:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.htm*l"})]}),"\n",(0,t.jsx)(r.p,{children:"- De lo contrario, es un error devuelto por el WebKit (Mac OS) o ActiveX (Windows)."}),"\n",(0,t.jsx)(r.p,{children:"Es recomendable llamar este comando dentro del marco del evento de formulario On URL Loading Error con el fin de conocer la causa del error que acaba de ocurrir."}),"\n",(0,t.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"form-event-code.md",children:"Form event code"})}),"\n",(0,t.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero de comando"}),(0,t.jsx)(r.td,{children:"1034"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Hilo seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);