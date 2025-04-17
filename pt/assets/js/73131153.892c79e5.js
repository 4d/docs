"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35048"],{852823:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>t,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"REST/lock","title":"$lock","description":"Bloqueia e desbloqueia uma entidade utilizando o mecanismo pessimista.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$lock.md","sourceDirName":"REST","slug":"/REST/lock","permalink":"/docs/pt/19/REST/lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"lock","title":"$lock"},"sidebar":"docs","previous":{"title":"$imageformat","permalink":"/docs/pt/19/REST/imageformat"},"next":{"title":"$method","permalink":"/docs/pt/19/REST/method"}}'),d=n("785893"),r=n("250065");let t={id:"lock",title:"$lock"},i=void 0,a={},l=[{value:"Sintaxe",id:"sintaxe",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Resposta",id:"resposta",level:3},{value:"Exemplo",id:"exemplo",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["Bloqueia e desbloqueia uma entidade utilizando o ",(0,d.jsx)(s.a,{href:"/docs/pt/19/ORDA/entities#pessimistic-lock",children:"mecanismo pessimista"}),"."]}),"\n",(0,d.jsx)(s.h2,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,d.jsx)(s.p,{children:"Para bloquear uma entidade para outras sess\xf5es e processos 4D:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"/?$lock=true\n"})}),"\n",(0,d.jsx)(s.p,{children:"Para desbloquear a entidade para outras sess\xf5es e processos 4D:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"/?$lock=false\n"})}),"\n",(0,d.jsxs)(s.p,{children:["A propriedade ",(0,d.jsx)(s.a,{href:"/docs/pt/19/API/EntityClass#lock",children:(0,d.jsx)(s.code,{children:"lockKindText"})}),' \xe9 "Locked by session".']}),"\n",(0,d.jsx)(s.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["The locks triggered by the REST API are put at the ",(0,d.jsx)(s.a,{href:"/docs/pt/19/REST/authUsers#opening-sessions",children:"session"})," level."]}),"\n",(0,d.jsxs)(s.p,{children:["Uma entidade bloqueada \xe9 vista como ",(0,d.jsx)(s.em,{children:"bloqueada"})," (ou seja, as ac\xe7\xf5es de bloquear/desbloquear/atualizar/eliminar n\xe3o s\xe3o poss\xedveis) por:"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"outras sess\xf5es REST"}),"\n",(0,d.jsx)(s.li,{children:"Processos 4D (cliente/servidor, datastore remoto, aut\xf3nomo) em execu\xe7\xe3o no servidor REST."}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Uma entidade bloqueada pela API REST s\xf3 pode ser desbloqueada:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["pelo seu locker, ou seja, um ",(0,d.jsx)(s.code,{children:"/?$lock=false"})," na sess\xe3o REST que define ",(0,d.jsx)(s.code,{children:"/?$lock=true"})]}),"\n",(0,d.jsxs)(s.li,{children:["ou se o tempo limite de inatividade da sess\xe3o ",(0,d.jsx)(s.a,{href:"/docs/pt/19/REST/directory"})," for atingido (a sess\xe3o \xe9 encerrada)."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"resposta",children:"Resposta"}),"\n",(0,d.jsxs)(s.p,{children:["Um pedido ",(0,d.jsx)(s.code,{children:"?$lock"})," devolve um objeto JSON com ",(0,d.jsx)(s.code,{children:'"result"=true'})," se a opera\xe7\xe3o de bloqueio for bem sucedida e ",(0,d.jsx)(s.code,{children:'"result"=false'})," se falhar."]}),"\n",(0,d.jsx)(s.p,{children:'O objeto "__STATUS" devolvido tem as seguintes propriedades:'}),"\n",(0,d.jsxs)(s.p,{children:["| Propriedade  |  | Tipo    | Descri\xe7\xe3o                                                                                                                                             |\n| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |\n|              |  |         | ",(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Dispon\xedvel apenas em caso de sucesso:"})}),"                                                                                                           |\n| success      |  | boolean | true se a a\xe7\xe3o de bloqueio for bem sucedida (ou se a entidade j\xe1 estiver bloqueada na sess\xe3o atual), false caso contr\xe1rio (n\xe3o devolvido neste caso). |\n|              |  |         | ",(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Dispon\xedvel apenas em caso de erro:"})}),'                                                                                                              |\n| status       |  | number  | C\xf3digo de erro, ver abaixo                                                                                                                            |\n| statusText   |  | text    | Descri\xe7\xe3o do erro, ver abaixo                                                                                                                         |\n| lockKind     |  | number  | C\xf3digo de bloqueio                                                                                                                                    |\n| lockKindText |  | text    | "Bloqueado por sess\xe3o" se bloqueado por uma sess\xe3o REST, "Bloqueado por registo" se bloqueado por um processo 4D                                      |']}),"\n",(0,d.jsxs)(s.p,{children:["Os seguintes valores podem ser devolvidos nas propriedades ",(0,d.jsx)(s.em,{children:"status"})," e ",(0,d.jsx)(s.em,{children:"statusText"})," do objeto ",(0,d.jsx)(s.em,{children:"__STATUS"})," em caso de erro:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"status"}),(0,d.jsx)(s.th,{children:"statusText"}),(0,d.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"2"}),(0,d.jsx)(s.td,{children:'"Stamp has changed"'}),(0,d.jsx)(s.td,{children:"O valor de selo interno da entidade n\xe3o corresponde a uma da entidade armazenada nos dados (bloqueio otimista)."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"3"}),(0,d.jsx)(s.td,{children:'"Already locked"'}),(0,d.jsx)(s.td,{children:"A entidade est\xe1 fechada por uma fechadura pessimista."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"4"}),(0,d.jsx)(s.td,{children:'"Other error"'}),(0,d.jsx)(s.td,{children:"Um erro grave \xe9 um erro de banco de dados de baixo n\xedvel (por exemplo, chave duplicada), um erro de hardware, etc."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"5"}),(0,d.jsx)(s.td,{children:'"Entity does not exist anymore"'}),(0,d.jsx)(s.td,{children:"A entidade n\xe3o existe mais nos dados."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(s.p,{children:"Bloqueamos uma entidade num primeiro navegador:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Responsa:"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n'})}),"\n",(0,d.jsx)(s.p,{children:"Num segundo navegador (outra sess\xe3o), enviamos o mesmo pedido."}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Responsa:"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n'})})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return t}});var o=n(667294);let d={},r=o.createContext(d);function t(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);