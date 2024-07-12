/*! For license information please see 1d7fb488.f35d9753.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79309],{52462:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var d=s(474848),r=s(28453);const t={id:"lock",title:"$lock"},o=void 0,i={id:"REST/lock",title:"$lock",description:"Bloqueia e desbloqueia uma entidade utilizando o mecanismo pessimista.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/pt/20/REST/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/pt/20/REST/imageformat"},next:{title:"$method",permalink:"/docs/pt/20/REST/method"}},l={},c=[{value:"Sintaxe",id:"sintaxe",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Resposta",id:"resposta",level:3},{value:"Exemplo",id:"exemplo",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Bloqueia e desbloqueia uma entidade utilizando o ",(0,d.jsx)(n.a,{href:"/docs/pt/20/ORDA/entities#pessimistic-lock",children:"mecanismo pessimista"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,d.jsx)(n.p,{children:"Para bloquear uma entidade para outras sess\xf5es e processos 4D:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"/?$lock=true\n"})}),"\n",(0,d.jsx)(n.p,{children:"Para desbloquear a entidade para outras sess\xf5es e processos 4D:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"/?$lock=false\n"})}),"\n",(0,d.jsxs)(n.p,{children:["A propriedade ",(0,d.jsx)(n.a,{href:"/docs/pt/20/API/EntityClass#lock",children:(0,d.jsx)(n.code,{children:"lockKindText"})}),' \xe9 "Locked by session".']}),"\n",(0,d.jsx)(n.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["Os bloqueios accionados pela API REST s\xe3o colocados ao n\xedvel da  ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/authUsers#opening-sessions",children:"sess\xe3o"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Uma entidade bloqueada \xe9 vista como ",(0,d.jsx)(n.em,{children:"bloqueada"})," (ou seja, as ac\xe7\xf5es de bloquear/desbloquear/atualizar/eliminar n\xe3o s\xe3o poss\xedveis) por:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"outras sess\xf5es REST"}),"\n",(0,d.jsx)(n.li,{children:"Processos 4D (cliente/servidor, datastore remoto, aut\xf3nomo) em execu\xe7\xe3o no servidor REST."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Uma entidade bloqueada pela API REST s\xf3 pode ser desbloqueada:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["pelo seu locker, ou seja, um ",(0,d.jsx)(n.code,{children:"/?$lock=false"})," na sess\xe3o REST que define ",(0,d.jsx)(n.code,{children:"/?$lock=true"})]}),"\n",(0,d.jsxs)(n.li,{children:["ou se o tempo limite de inatividade da sess\xe3o ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/directory"})," for atingido (a sess\xe3o \xe9 encerrada)."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"resposta",children:"Resposta"}),"\n",(0,d.jsxs)(n.p,{children:["Um pedido ",(0,d.jsx)(n.code,{children:"?$lock"})," devolve um objeto JSON com ",(0,d.jsx)(n.code,{children:'"result"=true'})," se a opera\xe7\xe3o de bloqueio for bem sucedida e ",(0,d.jsx)(n.code,{children:'"result"=false'})," se falhar."]}),"\n",(0,d.jsx)(n.p,{children:'O objeto "__STATUS" devolvido tem as seguintes propriedades:'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propriedade"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Dispon\xedvel apenas em caso de sucesso:"})})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"success"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"true se a a\xe7\xe3o de bloqueio for bem sucedida (ou se a entidade j\xe1 estiver bloqueada na sess\xe3o atual), false caso contr\xe1rio (n\xe3o devolvido neste caso)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Dispon\xedvel apenas em caso de erro:"})})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"status"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"C\xf3digo de erro, ver abaixo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"statusText"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Descri\xe7\xe3o do erro, ver abaixo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lockKind"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"C\xf3digo de bloqueio"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lockKindText"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:'"Bloqueado por sess\xe3o" se bloqueado por uma sess\xe3o REST, "Bloqueado por registo" se bloqueado por um processo 4D'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lockInfo"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"Informa\xe7\xf5es sobre a origem do bloqueio. Retorna propriedades dependendo da origem da trava (processo 4D ou sess\xe3o REST)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Dispon\xedvel s\xf3 para um processo trava 4D:"})})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"task_id"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Process ID"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"user_name"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Nome de usu\xe1rio de sess\xe3o na m\xe1quina"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"user4d_alias"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Nome ou apelido do usu\xe1rio 4D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"user4d_id"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Id do usu\xe1rio no diret\xf3rio do banco de dados 4D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"host_name"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Nome da m\xe1quina"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"task_name"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Nome de processo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"client_version"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Libera\xe7\xe3o do cliente"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Dispon\xedvel s\xf3 para um processo trava REST:"})})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"host"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:'URL que bloqueou a entidade (por exemplo, "127.0.0.1:8043")'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"IPAddr"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:'Endere\xe7o IP da trava (por exemplo. "127.0.0.1")'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"recordNumber"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"N\xfamero de registo do registo bloqueado"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"userAgent"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:'userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Os seguintes valores podem ser devolvidos nas propriedades ",(0,d.jsx)(n.em,{children:"status"})," e ",(0,d.jsx)(n.em,{children:"statusText"})," do objeto ",(0,d.jsx)(n.em,{children:"__STATUS"})," em caso de erro:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"status"}),(0,d.jsx)(n.th,{children:"statusText"}),(0,d.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:'"Stamp has changed"'}),(0,d.jsx)(n.td,{children:"O valor de selo interno da entidade n\xe3o corresponde a uma da entidade armazenada nos dados (bloqueio otimista)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:'"Already locked"'}),(0,d.jsx)(n.td,{children:"A entidade est\xe1 fechada por uma fechadura pessimista."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:'"Other error"'}),(0,d.jsx)(n.td,{children:"Um erro grave \xe9 um erro de banco de dados de baixo n\xedvel (por exemplo, chave duplicada), um erro de hardware, etc."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"5"}),(0,d.jsx)(n.td,{children:'"Entity does not exist anymore"'}),(0,d.jsx)(n.td,{children:"A entidade n\xe3o existe mais nos dados."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Bloqueamos uma entidade num primeiro navegador:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Responsa:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"Num segundo navegador (outra sess\xe3o), enviamos o mesmo pedido."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Responsa:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n        }\n    }\n}\n'})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var d=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var d,t={},c=null,a=null;for(d in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,d)&&!l.hasOwnProperty(d)&&(t[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===t[d]&&(t[d]=n[d]);return{$$typeof:r,type:e,key:c,ref:a,props:t,_owner:i.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var d=s(296540);const r={},t=d.createContext(r);function o(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);