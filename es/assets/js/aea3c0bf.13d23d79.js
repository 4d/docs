"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1264"],{351778:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/display-record","title":"DISPLAY RECORD","description":"DISPLAY RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/display-record.md","sourceDirName":"commands-legacy","slug":"/commands/display-record","permalink":"/docs/es/20-R7/commands/display-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"display-record","title":"DISPLAY RECORD","slug":"/commands/display-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE RECORD","permalink":"/docs/es/20-R7/commands/delete-record"},"next":{"title":"DUPLICATE RECORD","permalink":"/docs/es/20-R7/commands/duplicate-record"}}'),d=r("785893"),o=r("250065");let a={id:"display-record",title:"DISPLAY RECORD",slug:"/commands/display-record",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DISPLAY RECORD"})," {( ",(0,d.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla de la cual mostrar el registro actual o Tabla por defecto, si se omite"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando DISPLAY RECORD muestra el registro actual de ",(0,d.jsx)(n.em,{children:"tabla"}),", utilizando el formulario de entrada actual. El registro se muestra hasta que un evento provoque un redise\xf1o de la ventana. Tal evento puede ser la ejecuci\xf3n de un comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/add-record",title:"ADD RECORD",children:"ADD RECORD"}),", el regreso al formulario de entrada, o a la barra de men\xfas. DISPLAY RECORD no hace nada si no hay registro actual."]}),"\n",(0,d.jsx)(n.p,{children:"DISPLAY RECORD se utiliza con frecuencia para mostrar mensajes de progreso personalizados. Tambi\xe9n puede utilizarse para generar un presentaci\xf3n de diapositivas."}),"\n",(0,d.jsx)(n.p,{children:"Si existe un m\xe9todo de formulario, se generar\xe1 un evento On Load."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Advertencia:"})," no llame DISPLAY RECORD desde un proceso de conexi\xf3n Web, porque el comando ser\xe1 ejecutado en el equipo del servidor Web de 4D y no en el equipo del cliente del navegador Web."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo muestra una serie de registros como una presentaci\xf3n de diapositivas:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Demo])\xa0// Selecci\xf3n de todos los registros\n\xa0FORM SET INPUT([Demo];"Mostrar")\xa0// Designaci\xf3n del formulario a utilizar\n\xa0For($vlRecord;1;Records in selection([Demo]))\xa0// Bucle a trav\xe9s de todos los registros\n\xa0\xa0\xa0\xa0DISPLAY RECORD([Demo])\xa0// Mostrar un registro\n\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;180)\xa0// 3 segundos de pausa\n\xa0\xa0\xa0\xa0NEXT RECORD([Demo])\xa0// Pasar al siguiente registro\n\xa0End for\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/message",children:"MESSAGE"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"105"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var s=r(667294);let d={},o=s.createContext(d);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);