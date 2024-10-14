"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17186],{215909:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=n(474848),r=n(28453);const s={id:"onLongClick",title:"On Long Click"},i=void 0,d={id:"Events/onLongClick",title:"On Long Click",description:"| Code | Pode ser chamado por                    | Defini\xe7\xe3o                                                                                       |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Events/onLongClick.md",sourceDirName:"Events",slug:"/Events/onLongClick",permalink:"/docs/pt/20-R5/Events/onLongClick",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLongClick.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onLongClick",title:"On Long Click"},sidebar:"docs",previous:{title:"On Load Record",permalink:"/docs/pt/20-R5/Events/onLoadRecord"},next:{title:"On Losing focus",permalink:"/docs/pt/20-R5/Events/onLosingFocus"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function a(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"39"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview",children:"Bot\xe3o"})}),(0,t.jsx)(o.td,{children:"Um bot\xe3o \xe9 clicado e o bot\xe3o do mouse permanece pressionado por um determinado per\xedodo de tempo"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"Esse evento \xe9 gerado quando um bot\xe3o recebe um clique e o bot\xe3o do mouse \xe9 mantido pressionado por um determinado per\xedodo de tempo. Em teoria, o per\xedodo de tempo pelo qual esse evento \xe9 gerado \xe9 igual ao per\xedodo m\xe1ximo de tempo que separa um clique duplo, conforme definido nas prefer\xeancias do sistema."}),"\n",(0,t.jsx)(o.p,{children:"Este evento pode ser gerado para os seguintes estilos de bot\xe3o:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#toolbar",children:"Barra de ferramentas"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#bevel",children:"Bevel"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#rounded-bevel",children:"Rounded Bevel"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#os-x-gradient",children:"Gradiente OSX"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#os-x-textured",children:"OS X Textured"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#office-xp",children:"Office XP"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#help",children:"Ajuda"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#circle",children:"C\xedrculo"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/buttonOverview#custom",children:"Personalizado"})}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Este evento \xe9 geralmente usado para exibir menus pop-up em caso de clique longo no bot\xe3o. O evento ",(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/Events/onClicked",children:(0,t.jsx)(o.code,{children:"No Clicked"})}),', se ativado, \xe9 gerado se o usu\xe1rio liberar o bot\xe3o do mouse antes do limite de tempo de "clique longo".']}),"\n",(0,t.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/20-R5/Events/onAlternativeClick",children:(0,t.jsx)(o.code,{children:"On Alternative Click"})})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var t=n(296540);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);