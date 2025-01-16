"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39018"],{53860:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>s,toc:()=>r,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/call-chain","title":"Call chain","description":"Call chain : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/call-chain.md","sourceDirName":"commands-legacy","slug":"/commands/call-chain","permalink":"/docs/es/commands/call-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-chain.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"call-chain","title":"Call chain","slug":"/commands/call-chain","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Action info","permalink":"/docs/es/commands/action-info"},"next":{"title":"Command name","permalink":"/docs/es/commands/command-name"}}'),l=a("785893"),o=a("250065");let t={id:"call-chain",title:"Call chain",slug:"/commands/call-chain",displayed_sidebar:"docs"},c=void 0,s={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Call chain"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Colecci\xf3n de objetos que describen la cadena de llamadas a m\xe9todos dentro de un proceso"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"Call chain"})," devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas al m\xe9todo dentro del proceso actual. Ofrece la misma informaci\xf3n que la ventana del Depurador. Tiene la ventaja adicional de poder ejecutarse desde cualquier entorno 4D, incluido el modo compilado."]}),"\n",(0,l.jsx)(n.p,{children:"El comando facilita la depuraci\xf3n al permitir la identificaci\xf3n del m\xe9todo llamado, el componente que lo llam\xf3 y el n\xfamero de l\xednea donde se realiz\xf3 la llamada. Cada objeto en la colecci\xf3n devuelta contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Propiedad"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Tipo"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Descripci\xf3n"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Ejemplo"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"database"}),(0,l.jsx)(n.td,{children:"texto"}),(0,l.jsx)(n.td,{children:"Nombre de la base que llama al m\xe9todo (para distinguir m\xe9todos locales y m\xe9todos componentes)"}),(0,l.jsx)(n.td,{children:'"database":"contactInfo"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"line"}),(0,l.jsx)(n.td,{children:"entero largo"}),(0,l.jsx)(n.td,{children:"N\xfamero de l\xednea de la llamada al m\xe9todo"}),(0,l.jsx)(n.td,{children:'"line":6'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"name"}),(0,l.jsx)(n.td,{children:"texto"}),(0,l.jsx)(n.td,{children:"Nombre del m\xe9todo llamado"}),(0,l.jsx)(n.td,{children:'"name":"On Load"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"type"}),(0,l.jsx)(n.td,{children:"texto"}),(0,l.jsxs)(n.td,{children:["Tipo de m\xe9todo: ",(0,l.jsx)(n.br,{}),'"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (cuando se llama a un m\xe9todo proyecto con ',(0,l.jsx)(n.em,{children:"Atributo Ejecutar en servidor"}),'.), "executeFormula" (cuando se ejecuta una f\xf3rmula a trav\xe9s de ',(0,l.jsx)(n.a,{href:"/docs/es/commands/process-4d-tags",children:"PROCESS 4D TAGS"}),' o la evaluaci\xf3n de una f\xf3rmula en un documento 4D Write Pro.)</li<"formmethod",<>']}),(0,l.jsx)(n.td,{children:'"type":"formMethod"'})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota:"})," para que este comando pueda operar en modo compilado, la verificaci\xf3n de Rango no debe estar deshabilitada. Ver ",(0,l.jsx)(n.em,{children:"Control de ejecuci\xf3n"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:"El siguiente c\xf3digo devuelve una colecci\xf3n de objetos que contienen informaci\xf3n sobre la cadena de llamadas al m\xe9todo:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $currentCallChain : Collection\n\xa0$currentCallChain:=Call chain\n"})}),"\n",(0,l.jsx)(n.p,{children:"Si se ejecuta un m\xe9todo proyecto, la cadena de llamadas podr\xeda contener (por ejemplo):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\xa0 \xa0{\xa0 \xa0 "type":"projectMethod",\xa0 \xa0 "name":"detailForm",\xa0 \xa0 "line":1,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0}]\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si se ejecuta un m\xe9todo de objeto de formulario, la cadena de llamadas podr\xeda contener (por ejemplo):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\xa0 \xa0{\xa0 \xa0 "type":"formObjectMethod",\xa0 \xa0 "name":"detailForm.Button",\xa0 \xa0 "line":1,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0},\xa0 \xa0{\xa0 \xa0 "type":"formMethod",\xa0 \xa0 "name\u201D:"detailForm",\xa0 \xa0 "line":2,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0},\xa0 \xa0{\xa0 \xa0 "type":"projectMethod",\xa0 \xa0 "name\u201D:"showDetailForm",\xa0 \xa0 "line":2,\xa0 \xa0 "database":"myDatabase\u201D\xa0 \xa0}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1662"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return t}});var d=a(667294);let l={},o=d.createContext(l);function t(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);