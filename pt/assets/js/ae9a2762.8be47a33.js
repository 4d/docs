"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1916"],{704446:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"Events/onVpReady","title":"On VP Ready","description":"| Code | Pode ser chamado por                                    | Defini\xe7\xe3o                                        |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onVpReady.md","sourceDirName":"Events","slug":"/Events/onVpReady","permalink":"/docs/pt/19/Events/onVpReady","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpReady.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onVpReady","title":"On VP Ready"},"sidebar":"docs","previous":{"title":"On VP Range Changed","permalink":"/docs/pt/19/Events/onVpRangeChanged"},"next":{"title":"On Window Opening Denied","permalink":"/docs/pt/19/Events/onWindowOpeningDenied"}}'),t=n("785893"),a=n("250065");let d={id:"onVpReady",title:"On VP Ready"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"9"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})}),(0,t.jsx)(o.td,{children:"O carregamento da \xe1rea 4D View Pro est\xe1 completo"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"Este evento \xe9 gerado quando o carregamento da \xe1rea 4D View Pro estiver completo."}),"\n",(0,t.jsxs)(o.p,{children:["Voc\xea precisa usar esse evento para escrever o c\xf3digo de inicializa\xe7\xe3o da \xe1rea. Qualquer c\xf3digo de inicializa\xe7\xe3o de \xe1rea 4D View Pro, para carregar ou ler valores de, ou na \xe1rea, deve estar localizado no evento formul\xe1rio ",(0,t.jsx)(o.code,{children:"On VP Ready"})," da \xe1rea. Este evento formul\xe1rio \xe9 acionado quando o carregamento da \xe1rea estiver conclu\xeddo. Testar esse evento garante que o c\xf3digo ser\xe1 executado em um contexto v\xe1lido. Um erro \xe9 retornado se um comando 4D View Pro \xe9 chamado antes do evento de formul\xe1rio ",(0,t.jsx)(o.code,{children:"On VP Ready"})," ser gerado."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["As \xe1reas 4D View Pro s\xe3o carregadas de forma ass\xedncrona em formul\xe1rios 4D. Isso significa que o evento padr\xe3o ",(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onLoad",children:"On load"})," formul\xe1rio n\xe3o pode ser usado para o c\xf3digo de inicializa\xe7\xe3o do 4D View Pro, pois ele pode ser executado antes que a \xe1rea seja completamente carregada. ",(0,t.jsx)(o.code,{children:"Em VP Ready"})," \xe9 sempre gerado ap\xf3s ",(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onLoad",children:"On load"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return d}});var r=n(667294);let t={},a=r.createContext(t);function d(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);