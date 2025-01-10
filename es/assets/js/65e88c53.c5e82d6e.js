"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18911"],{259781:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/process-state","title":"Process state","description":"Process state ( proceso ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/process-state.md","sourceDirName":"commands-legacy","slug":"/commands/process-state","permalink":"/docs/es/commands/process-state","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-state.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-state","title":"Process state","slug":"/commands/process-state","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process number","permalink":"/docs/es/commands/process-number"},"next":{"title":"REGISTER CLIENT","permalink":"/docs/es/commands/register-client"}}'),t=s("785893"),d=s("250065");let o={id:"process-state",title:"Process state",slug:"/commands/process-state",displayed_sidebar:"docs"},c=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Process state"})," ( ",(0,t.jsx)(n.em,{children:"proceso"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"proceso"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de proceso"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Estado del proceso"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando Process state devuelve el estado del proceso cuyo n\xfamero se pas\xf3 en ",(0,t.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"El resultado de la funci\xf3n puede ser uno de los valores de las siguientes constantes predefinidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Does not exist"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-100"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Aborted"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Executing"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Delayed"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Waiting for user event"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Waiting for input output"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Waiting for internal flag"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Paused"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_o_Hidden modal dialog"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Compatibilidad"}),": este estado de proceso ya no existe a partir de 4D v16. El comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/process-info",children:"Process info"})," ",(0,t.jsx)(n.br,{}),"devuelve un estado equivalente cuando ",(0,t.jsx)(n.em,{children:"procState"}),"=Waiting for user event y ",(0,t.jsx)(n.em,{children:"procMode"}),"=False."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si el proceso no existe (lo cual significa que no pas\xf3 un n\xfamero en el rango de 1 a ",(0,t.jsx)(n.a,{href:"/docs/es/commands/count-tasks",title:"Count tasks",children:"Count tasks"}),"), Process state devuelve Does not exist (-100)."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo coloca el nombre y n\xfamero de referencia para cada proceso en los arrays ",(0,t.jsx)(n.em,{children:"asProcName"})," y ",(0,t.jsx)(n.em,{children:"aiProcNum"}),". El m\xe9todo prueba si el proceso ha sido abortado. En este caso, el nombre y el n\xfamero del proceso no son a\xf1adidos a los arrays:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$vlNbTareas:=Count tasks\n\xa0ARRAY TEXT(asProcNombre;$vlNbTareas)\n\xa0ARRAY INTEGER(aiProcNum;$vlNbTareas)\n\xa0$vlActualCont:=0\n\xa0For($vlProcess;1;$vlNbTareas)\n\xa0\xa0\xa0\xa0If(Process state($vlProcess)>=Executing)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlActualCont:=$vlActualCont+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PROCESS PROPERTIES($vlProcess;asProcNombre{$vlActualCont};$vlStado;$vlHora)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0aiProcNum{$vlActualCont}:=$vlProcess\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0\xa0// Eliminar los elementos extras superfluos\n\xa0ARRAY TEXT(asProcNombre;$vlActualCont)\n\xa0ARRAY INTEGER(aiProcNum;$vlActualCont)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/count-tasks",children:"Count tasks"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/process-info",children:"Process info"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"330"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);