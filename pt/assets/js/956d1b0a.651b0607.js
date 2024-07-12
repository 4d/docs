/*! For license information please see 956d1b0a.651b0607.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32955],{378709:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>u});var a=o(474848),s=o(28453);const i={id:"plug-ins",title:"Plug-ins"},r=void 0,t={id:"Concepts/plug-ins",title:"Plug-ins",description:"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando plug-ins ao seu ambiente de desenvolvimento 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/pt/20/Concepts/plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Componentes",permalink:"/docs/pt/20/Concepts/components"},next:{title:"Identificadores",permalink:"/docs/pt/20/Concepts/identifiers"}},d={},u=[{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Instala\xe7\xe3o de plug-ins",id:"instala\xe7\xe3o-de-plug-ins",level:2},{value:"Como instalar um plug-in?",id:"como-instalar-um-plug-in",level:2}];function l(e){const n={a:"a",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando ",(0,a.jsx)(n.strong,{children:"plug-ins"})," ao seu ambiente de desenvolvimento 4D."]}),"\n",(0,a.jsx)(n.h2,{id:"por-que-a-necessidade-de-um-plug-in",children:"Por que a necessidade de um plug-in?"}),"\n",(0,a.jsx)(n.p,{children:"A plug-in is a piece of code that 4D launches at start up. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade. Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."}),"\n",(0,a.jsx)(n.h2,{id:"como-criar-um-plug-in",children:"Como criar um plug-in?"}),"\n",(0,a.jsxs)(n.p,{children:["V\xe1rios plug-ins j\xe1 foram escritos pela comunidade 4D. O ",(0,a.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,a.jsx)(n.strong,{children:"4D Plugin Wizard"})})," \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo. Al\xe9m disso, pode ",(0,a.jsx)(n.a,{href:"/docs/pt/20/Extensions/develop-plug-ins",children:"desenvolver os seus pr\xf3prios plug-ins"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"instala\xe7\xe3o-de-plug-ins",children:"Instala\xe7\xe3o de plug-ins"}),"\n",(0,a.jsxs)(n.p,{children:["A sua arquitetura interna espec\xedfica permite ao Servidor 4D carregar a vers\xe3o apropriada de acordo com a plataforma onde a m\xe1quina cliente ser\xe1 executada. To install a plug-in in your environment, you just need to put the \u201cPluginName.bundle\u201d folder or package concerned into the desired ",(0,a.jsx)(n.strong,{children:"Plugins"})," folder."]}),"\n",(0,a.jsx)(n.p,{children:"Os plug-ins s\xe3o carregados por 4D quando a aplica\xe7\xe3o for lan\xe7ada, pelo que ter\xe1 de abandonar a sua aplica\xe7\xe3o 4D antes de os instalar. Se qualquer plug-in necessitar de uma licen\xe7a espec\xedfica para utiliza\xe7\xe3o, ser\xe1 carregado mas n\xe3o estar\xe1 dispon\xedvel para utiliza\xe7\xe3o."}),"\n",(0,a.jsx)(n.h2,{id:"como-instalar-um-plug-in",children:"Como instalar um plug-in?"}),"\n",(0,a.jsxs)(n.p,{children:["Os comandos de plug-ins podem ser utilizados como comandos 4D normais no seu desenvolvimento 4D. Os comandos de plug-in aparecem na p\xe1gina ",(0,a.jsx)(n.strong,{children:"Plug-ins"})," do Explorer."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var a=o(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,o){var a,i={},u=null,l=null;for(a in void 0!==o&&(u=""+o),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,a)&&!d.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:s,type:e,key:u,ref:l,props:i,_owner:t.current}}n.Fragment=i,n.jsx=u,n.jsxs=u},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var a=o(296540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);