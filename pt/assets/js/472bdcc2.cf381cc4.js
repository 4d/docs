/*! For license information please see 472bdcc2.cf381cc4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23712],{478261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=s(474848),d=s(28453);const o={id:"info",title:"$info"},t=void 0,i={id:"REST/info",title:"$info",description:"Devolve informa\xe7\xe3o sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sess\xf5es utilizador",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$info.md",sourceDirName:"REST",slug:"/REST/info",permalink:"/docs/pt/20/REST/info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24info.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"info",title:"$info"},sidebar:"docs",previous:{title:"$directory",permalink:"/docs/pt/20/REST/directory"},next:{title:"$upload",permalink:"/docs/pt/20/REST/upload"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Exemplo",id:"exemplo",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Devolve informa\xe7\xe3o sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sess\xf5es utilizador"}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"Ao chamar este pedido para o seu projeto, recupera informa\xe7\xf5es nas seguintes propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheSize"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Tamanho da cache do servidor 4D."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"usedCache"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Quanto do cache do 4D Server foi usado."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"entitySetCount"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de selec\xe7\xf5es de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"entitySet"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o em que cada objeto cont\xe9m informa\xe7\xf5es sobre cada sele\xe7\xe3o de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ProgressInfo"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o que cont\xe9m informa\xe7\xf5es sobre os indicadores de progresso."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionInfo"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o em que cada objeto cont\xe9m informa\xe7\xf5es sobre cada sess\xe3o de usu\xe1rio."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"entityset",children:"entitySet"}),"\n",(0,r.jsx)(n.p,{children:"Para cada sele\xe7\xe3o de entidades atualmente armazenada no cache do 4D Server, a seguinte informa\xe7\xe3o \xe9 retornada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Um UUID que faz refer\xeancia ao conjunto de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataClass"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Nome da dataclass."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selectionSize"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de entidades na sele\xe7\xe3o de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sorted"}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["Devolve true se o conjunto foi ordenado (utilizando ",(0,r.jsx)(n.code,{children:"$orderby"}),") ou false se n\xe3o foi ordenado."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshed"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"Quando o conjunto de entidades foi criado ou utilizado a \xfaltima vez."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expires"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsxs)(n.td,{children:["Quando o conjunto de entidades expirar\xe1 (esta data/hora muda sempre que o conjunto de entidades \xe9 atualizado). A diferen\xe7a entre refreshed e expires \xe9 o tempo limite para um conjunto de entidades. Este valor \xe9 de duas horas por defeito ou o valor que definiu utilizando ",(0,r.jsx)(n.code,{children:"$timeout"}),"."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Para obter informa\xe7\xf5es sobre como criar uma sele\xe7\xe3o de entidades, consultar ",(0,r.jsx)(n.code,{children:"$method=entityset"}),". Se quiser remover a sele\xe7\xe3o de entidades da cache de 4D Server, use ",(0,r.jsx)(n.code,{children:"$method=release"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["4D tamb\xe9m cria suas pr\xf3prias sele\xe7\xf5es de entidades para fins de otimiza\xe7\xe3o, ent\xe3o as que voc\xea cria com ",(0,r.jsx)(n.code,{children:"$method=entityset"})," n\xe3o s\xe3o as \xfanicas retornadas.\n",(0,r.jsx)(n.strong,{children:"IMPORTANTE"})," Se o seu projeto estiver no ",(0,r.jsx)(n.strong,{children:"Modo Controlled Admin Access"}),", tem de iniciar sess\xe3o no projeto como usu\xe1rio do grupo Admin."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sessioninfo",children:"sessionInfo"}),"\n",(0,r.jsxs)(n.p,{children:["Para cada sess\xe3o usu\xe1rio, s\xe3o devolvidas as seguintes informa\xe7\xf5es na cole\xe7\xe3o ",(0,r.jsx)(n.em,{children:"sessionInfo"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionID"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Um UUID que faz refer\xeancia \xe0 sess\xe3o."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"O nome do usu\xe1rio que executa a sess\xe3o."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lifeTime"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"O tempo de vida de uma sess\xe3o usu\xe1rio em segundos (3600 por predefini\xe7\xe3o)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiration"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"A data e hora de expira\xe7\xe3o atuais da sess\xe3o do usu\xe1rio."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Recupera informa\xe7\xe3o sobre os conjuntos de entidades atualmente armazenados na cache de 4D Server assim como sess\xf5es usu\xe1rio:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/$info"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n], ProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"A informa\xe7\xe3o do indicador de progresso listada ap\xf3s as sele\xe7\xf5es de entidades \xe9 usada internamente por 4D."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var r=s(296540),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,o={},c=null,l=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:d,type:e,key:c,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(296540);const d={},o=r.createContext(d);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);