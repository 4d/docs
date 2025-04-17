"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43189"],{651254:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/call-subform-container","title":"CALL SUBFORM CONTAINER","description":"CALL SUBFORM CONTAINER ( event )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/call-subform-container.md","sourceDirName":"commands-legacy","slug":"/commands/call-subform-container","permalink":"/docs/pt/commands/call-subform-container","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-subform-container.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"call-subform-container","title":"CALL SUBFORM CONTAINER","slug":"/commands/call-subform-container","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CALL FORM","permalink":"/docs/pt/commands/call-form"},"next":{"title":"Clickcount","permalink":"/docs/pt/commands/clickcount"}}'),r=o("785893"),s=o("250065");let d={id:"call-subform-container",title:"CALL SUBFORM CONTAINER",slug:"/commands/call-subform-container",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CALL SUBFORM CONTAINER"})," ( ",(0,r.jsx)(n.em,{children:"event"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"event"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Event to be sent"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"CALL SUBFORM CONTAINER"})," permite a uma inst\xe2ncia de subformul\xe1rio enviar o ",(0,r.jsx)(n.em,{children:"evento"})," ao objeto subformul\xe1rio que o contiver. O objeto subformul\xe1rio pode ent\xe3o processar o ",(0,r.jsx)(n.em,{children:"evento"})," no contexto do formul\xe1rio pai."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando deve ser localizado no m\xe9todo de formul\xe1rio do subformul\xe1rio ou no m\xe9todo de objeto de um dos objetos de subformul\xe1rio. O evento s\xf3 ser\xe1 recebido no m\xe9todo de objeto do contenedor do subformul\xe1rio."}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"evento"}),', pode passar todo evento de formul\xe1rio pr\xe9-definido de 4D (pode utilizar as constantes do tema "',(0,r.jsx)(n.em,{children:"Form event"}),'") ou todo valor correspondente a um evento personalizado. No caso de um evento personalizado, \xe9 recomendado passar um valor negativo em ',(0,r.jsx)(n.em,{children:"evento"})," para evitar o risco de interferir com os n\xfameros de eventos 4D existentes ou futuros."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Exemplo de execu\xe7\xe3o do comando"})," ",(0,r.jsx)(n.strong,{children:"CALL SUBFORM CONTAINER"})," ",(0,r.jsx)(n.em,{children:":"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(910920).Z+"",width:"537",height:"174"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/goto-object",children:"GOTO OBJECT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1086"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},910920:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/pict166755.pt-b6e9bb679601ff07255f8014c669c5f6.png"},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return d}});var t=o(667294);let r={},s=t.createContext(r);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);