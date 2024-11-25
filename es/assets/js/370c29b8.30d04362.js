"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["715"],{670133:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/php-get-full-response","title":"PHP GET FULL RESPONSE","description":"PHP GET FULL RESPONSE ( stdOut {; etiquetasErr ; valoresErr} {; camposEncHttp {; valoresEncHttp}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-get-full-response.md","sourceDirName":"commands-legacy","slug":"/commands/php-get-full-response","permalink":"/docs/es/commands/php-get-full-response","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-get-full-response.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-get-full-response","title":"PHP GET FULL RESPONSE","slug":"/commands/php-get-full-response","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP Execute","permalink":"/docs/es/commands/php-execute"},"next":{"title":"PHP GET OPTION","permalink":"/docs/es/commands/php-get-option"}}'),t=s("785893"),o=s("250065");let d={id:"php-get-full-response",title:"PHP GET FULL RESPONSE",slug:"/commands/php-get-full-response",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PHP GET FULL RESPONSE"})," ( ",(0,t.jsx)(n.em,{children:"stdOut"})," {; ",(0,t.jsx)(n.em,{children:"etiquetasErr"})," ; ",(0,t.jsx)(n.em,{children:"valoresErr"}),"} {; ",(0,t.jsx)(n.em,{children:"camposEncHttp"})," {; ",(0,t.jsx)(n.em,{children:"valoresEncHttp"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stdOut"}),(0,t.jsx)(n.td,{children:"Text, Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Contenido del buffer stdOut"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"etiquetasErr"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Etiquetas de los errores"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valoresErr"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valores de los errores"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"camposEncHttp"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombres de los encabezados HTTP"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valoresEncHttp"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valores de los encabezados HTTP"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(n.admonition,{title:"Compatibilidad",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PHP es obsoleto en 4D"}),". Se recomienda utilizar la clase ",(0,t.jsx)(n.a,{href:"/docs/es/API/SystemWorkerClass",children:(0,t.jsx)(n.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando PHP GET FULL RESPONSE permite obtener informaci\xf3n adicional sobre la respuesta devuelta por el int\xe9rprete PHP. Este comando es especialmente \xfatil en el caso de que ocurra un error durante la ejecuci\xf3n del script."}),"\n",(0,t.jsxs)(n.p,{children:["El script PHP puede escribir datos en el buffer stdOut (eco, print, etc.) El comando devuelve directamente los datos en la variable ",(0,t.jsx)(n.em,{children:"stdOut"})," y aplica los mismos principios de conversi\xf3n descritos en el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/php-execute",title:"PHP Execute",children:"PHP Execute"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Los arrays texto sincronizados ",(0,t.jsx)(n.em,{children:"etiquetasErr"})," y ",(0,t.jsx)(n.em,{children:"valoresErrV"})," se llenan cuando la ejecuci\xf3n de los scripts PHP provoca errores. Estos arrays, en particular, proporcionan informaci\xf3n sobre el origen, el script y la l\xednea de error. Estas dos arrays son inseparables: si se pasa ",(0,t.jsx)(n.em,{children:"etiquetasErr"}),", se debe pasar tambi\xe9n ",(0,t.jsx)(n.em,{children:"valoresErr"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dado que los intercambios entre 4D y el int\xe9rprete PHP se efect\xfaan a trav\xe9s de FastCGI, el int\xe9rprete PHP funciona como si fuera llamado por un servidor HTTP y por tanto, env\xeda encabezados HTTP. Puede recuperar estos encabezados y sus valores en los arrays ",(0,t.jsx)(n.em,{children:"camposEncHttp"})," y ",(0,t.jsx)(n.em,{children:"valoresEncHttp"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/php-execute",children:"PHP Execute"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/php-get-option",children:"PHP GET OPTION"})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);