/*! For license information please see c02b8036.03e8fa17.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24717],{415694:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>u,contentTitle:()=>t,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(474848),s=o(28453);const n={id:"overview",title:"C\xf3pia de seguran\xe7a e restaura\xe7\xe3o"},t=void 0,i={id:"Backup/overview",title:"C\xf3pia de seguran\xe7a e restaura\xe7\xe3o",description:"4D inclui um m\xf3dulo completo backup e restaura\xe7\xe3o da aplica\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/pt/20/Backup/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"C\xf3pia de seguran\xe7a e restaura\xe7\xe3o"},sidebar:"docs",previous:{title:"P\xe1gina de criptografia",permalink:"/docs/pt/20/MSC/encrypt"},next:{title:"P\xe1gina de Backup",permalink:"/docs/pt/20/Backup/backup"}},u={},c=[];function d(e){const a={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"4D inclui um m\xf3dulo completo backup e restaura\xe7\xe3o da aplica\xe7\xe3o."}),"\n",(0,r.jsx)(a.p,{children:"Esse m\xf3dulo permite a c\xf3pia de seguran\xe7a da aplica\xe7\xe3o atualmente em uso sem ter que sair dela. Cada c\xf3pia de seguran\xe7a ou backup inclui a pasta de projeto, o arquivo de dados e qualquer arquivo ou pastas adicionais. Esses par\xe2metros s\xe3o primeiro estabelecidos nas configura\xe7\xf5es."}),"\n",(0,r.jsx)(a.p,{children:"C\xf3pias de seguran\xe7a ou backups podem ser come\xe7adas de forma manual ou de forma automatica em intervalores regulares sem qualquer interven\xe7\xe3o do usu\xe1rio. Comandos espec\xedficos da linguagem, assim como m\xe9todos de bancos de dados espec\xedficos, permitem integrar fun\xe7\xf5es de backup em uma interface personalizada."}),"\n",(0,r.jsx)(a.p,{children:"Aplica\xe7\xf5es podem ser restauradas automaticamente quando uma aplica\xe7\xe3o danificada for aberta."}),"\n",(0,r.jsxs)(a.p,{children:["Al\xe9m disso, o m\xf3dulo de c\xf3pia de seguran\xe7a integrada pode aproveitar o arquivo .journal (",(0,r.jsx)(a.a,{href:"/docs/pt/20/Backup/log",children:"de hist\xf3rico"}),"). Esse arquivo mant\xe9m um registro de todas as opera\xe7\xf5es realizadas nos dados e tamb\xe9m assegura a seguran\xe7a total entre dois backups. No caso de problemas com uma aplica\xe7\xe3o em uso, qualquer opera\xe7\xe3o faltando no arquivo de dados s\xe3o reintegrados automaticamente na pr\xf3xima vez que a aplica\xe7\xe3o for aberta. Pode ver os conte\xfados do arquivo journal a qualquer momento."]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"Pode implementar tamb\xe9m solu\xe7\xf5es alternativas para replicar e sincronizar dados para manter vers\xf5es id\xeanticas de aplica\xe7\xf5es por raz\xf5es de backup. These solutions can be based on the following mechanisms and technologies:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)"}),"\n",(0,r.jsx)(a.li,{children:"Synchronization using SQL - Synchronization using HTTP (/rest/url)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["Para uma vis\xe3o geral das fun\xe7\xf5es de seguran\xe7a de 4D, consulte o ",(0,r.jsx)(a.a,{href:"https://blog.4d.com/4d-security-guide/",children:"Guia de seguran\xe7a de 4D"}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,a,o)=>{var r=o(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,o){var r,n={},c=null,d=null;for(r in void 0!==o&&(c=""+o),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)t.call(a,r)&&!u.hasOwnProperty(r)&&(n[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===n[r]&&(n[r]=a[r]);return{$$typeof:s,type:e,key:c,ref:d,props:n,_owner:i.current}}a.Fragment=n,a.jsx=c,a.jsxs=c},474848:(e,a,o)=>{e.exports=o(221020)},28453:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>i});var r=o(296540);const s={},n=r.createContext(s);function t(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);