"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99077"],{919314:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/web-send-text","title":"WEB SEND TEXT","description":"WEB SEND TEXT ( textoHTML {; tipo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-text.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-text","permalink":"/docs/es/commands/web-send-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-text","title":"WEB SEND TEXT","slug":"/commands/web-send-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND RAW DATA","permalink":"/docs/es/commands/web-send-raw-data"},"next":{"title":"WEB Server","permalink":"/docs/es/commands/web-server"}}'),d=t("785893"),r=t("250065");let o={id:"web-send-text",title:"WEB SEND TEXT",slug:"/commands/web-send-text",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB SEND TEXT"})," ( ",(0,d.jsx)(n.em,{children:"textoHTML"})," {; ",(0,d.jsx)(n.em,{children:"tipo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"textoHTML"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Campo o variable de tipo texto con formato HTML a enviar al navegador web"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"True = Ir al modo contextual False o si se omite = Permanecer en el modo actual"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"WEB SEND TEXT"})," envia directamente los datos de texto con formato HTML."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"textoHTML"})," contiene los datos a enviar. Como 4D no efect\xfaa ning\xfan control sobre el contenido de este par\xe1metro, aseg\xfarese de que la codificaci\xf3n HTML sea correcta."]}),"\n",(0,d.jsxs)(n.p,{children:["Las eventuales referencias a las variables 4D y etiquetas de tipo ",(0,d.jsx)(n.em,{children:"4DSCRIPT"})," en el texto siempre se analizan."]}),"\n",(0,d.jsxs)(n.p,{children:["Por defecto, si omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"tipo"}),', 4D asume que los datos enviados son de tipo "text/html". El comando equivale exactamente al env\xedo de un BLOB de tipo "text/html" utilizando el comando ',(0,d.jsx)(n.a,{href:"/docs/es/commands/web-send-blob",children:"WEB SEND BLOB"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Tambi\xe9n puede utilizar el par\xe1metro ",(0,d.jsx)(n.em,{children:"tipo"})," para especificar el tipo MIME del texto a enviar. Para mayor informaci\xf3n sobre los tipos MIME soportados, consulte la descripci\xf3n del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/web-send-blob",children:"WEB SEND BLOB"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente m\xe9todo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0TEXT TO BLOB(""+String(Current time)+"";$blob;UTF8 Text without length)\n\xa0WEB SEND BLOB($blob;"text/html")\n'})}),"\n",(0,d.jsx)(n.p,{children:"... puede reemplazarse por una sola l\xednea:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0WEB SEND TEXT(""+String(Current time)+"")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"677"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let d={},r=s.createContext(d);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);