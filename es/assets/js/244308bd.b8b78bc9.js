"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40750"],{960642:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/trigger-properties","title":"TRIGGER PROPERTIES","description":"TRIGGER PROPERTIES ( nivelTrigger ; eventoBase ; numTabla ; regNum )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-properties.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-properties","permalink":"/docs/es/commands/trigger-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trigger-properties","title":"TRIGGER PROPERTIES","slug":"/commands/trigger-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Trigger level","permalink":"/docs/es/commands/trigger-level"},"next":{"title":"User Interface","permalink":"/docs/es/category/user-interface"}}'),t=r("785893"),i=r("250065");let d={id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"nivelTrigger"})," ; ",(0,t.jsx)(n.em,{children:"eventoBase"})," ; ",(0,t.jsx)(n.em,{children:"numTabla"})," ; ",(0,t.jsx)(n.em,{children:"regNum"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nivelTrigger"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nivel de ejecuci\xf3n del trigger"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventoBase"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Evento de base de datos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numTabla"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de la tabla"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"regNum"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero del registro"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," devuelve la informaci\xf3n sobre el nivel de ejecuci\xf3n del trigger que se pasa en ",(0,t.jsx)(n.em,{children:"nivelTrigger"}),". Puede utilizar ",(0,t.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," junto con ",(0,t.jsx)(n.a,{href:"/docs/es/commands/trigger-level",children:"Trigger level"})," para efectuar diferentes acciones en funci\xf3n de la cascada del trigger. Para mayor informaci\xf3n, consulte la descripci\xf3n de triggers en cascada en la secci\xf3n ",(0,t.jsx)(n.em,{children:"Triggers"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si pasa un nivel de ejecuci\xf3n de trigger inexistente, el comando devuelve 0 (cero) en todos los par\xe1metros."}),"\n",(0,t.jsxs)(n.p,{children:["La naturaleza del evento de base de datos para el nivel de ejecuci\xf3n del trigger se devuelve en ",(0,t.jsx)(n.em,{children:"dbEvent"}),". En el tema ",(0,t.jsx)(n.em,{children:"Eventos trigger"})," se ofrecen las siguientes constantes predefinidas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Deleting Record Event"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Saving New Record Event"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["El n\xfamero de tabla y de registro para el registro relacionado por el evento de base de datos para el nivel de ejecuci\xf3n del trigger se devuelven en ",(0,t.jsx)(n.em,{children:"tablaNum"})," y ",(0,t.jsx)(n.em,{children:"regNum"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Acerca de n\xfameros de registros"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/trigger-event",children:"Trigger event"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/trigger-level",children:"Trigger level"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Triggers"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"399"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);