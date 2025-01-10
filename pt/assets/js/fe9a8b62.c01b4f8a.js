"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1254"],{859826:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"Events/onBeforeDataEntry","title":"On Before Data Entry","description":"| Code | Pode ser chamado por                                                                                                  | Defini\xe7\xe3o                                                            |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onBeforeDataEntry.md","sourceDirName":"Events","slug":"/Events/onBeforeDataEntry","permalink":"/docs/pt/Events/onBeforeDataEntry","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeDataEntry.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onBeforeDataEntry","title":"On Before Data Entry"},"sidebar":"docs","previous":{"title":"On Alternative Click","permalink":"/docs/pt/Events/onAlternativeClick"},"next":{"title":"On Before Keystroke","permalink":"/docs/pt/Events/onBeforeKeystroke"}}'),r=n("785893"),s=n("250065");let a={id:"onBeforeDataEntry",title:"On Before Data Entry"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Pode ser chamado por"}),(0,r.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"41"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"Columna de List Box"})]}),(0,r.jsx)(t.td,{children:"Uma c\xe9lula de um list box est\xe1 prestes a mudar para o modo de edi\xe7\xe3o"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(t.p,{children:"Esse evento \xe9 gerado imediatamente antes de uma c\xe9lula da caixa de listagem ser editada (antes de o cursor de entrada ser exibido). Esse evento permite que o desenvolvedor, por exemplo, exiba um texto diferente, dependendo de o usu\xe1rio estar no modo de exibi\xe7\xe3o ou de edi\xe7\xe3o."}),"\n",(0,r.jsxs)(t.p,{children:["Cuando el cursor llega a la celda, se genera el evento ",(0,r.jsx)(t.code,{children:"On Before Data Entry"})," en el list box o m\xe9todo de la columna."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Se, no contexto desse evento, $0 for estabelecido a -1, a c\xe9lula \xe9 considerada como n\xe3o edit\xe1vel. Si el evento se gener\xf3 despu\xe9s de presionar ",(0,r.jsx)(t.strong,{children:"Tab"})," o ",(0,r.jsx)(t.strong,{children:"May\xfas+Tab"}),", el foco pasa a la siguiente celda o a la anterior, respectivamente."]}),"\n",(0,r.jsx)(t.li,{children:"Se $0 n\xe3o for -1 (como padr\xe3o $0 \xe9 0), a c\xe9lula for edit\xe1vel e trocar para o modo edi\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Ver tambi\xe9n la secci\xf3n ",(0,r.jsx)(t.a,{href:"/docs/pt/FormObjects/listboxOverview#managing-entry",children:"Gesti\xf3n de entradas"}),"."]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var o=n(667294);let r={},s=o.createContext(r);function a(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);