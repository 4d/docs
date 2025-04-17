"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57395"],{72640:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>c,toc:()=>a,contentTitle:()=>o});var d=JSON.parse('{"id":"REST/info","title":"$info","description":"Devolve informa\xe7\xe3o sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sess\xf5es utilizador","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/REST/$info.md","sourceDirName":"REST","slug":"/REST/info","permalink":"/docs/pt/20-R8/REST/info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"info","title":"$info"},"sidebar":"docs","previous":{"title":"$catalog","permalink":"/docs/pt/20-R8/REST/catalog"},"next":{"title":"$singleton","permalink":"/docs/pt/20-R8/REST/singleton"}}'),r=s("785893"),i=s("250065");let t={id:"info",title:"$info"},o=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Exemplo",id:"exemplo",level:2}];function l(e){let n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Devolve informa\xe7\xe3o sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sess\xf5es utilizador"}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"Ao chamar este pedido para o seu projeto, recupera informa\xe7\xf5es nas seguintes propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cacheSize"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Tamanho da cache do servidor 4D."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"usedCache"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Quanto do cache do 4D Server foi usado."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"entitySetCount"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de selec\xe7\xf5es de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"entitySet"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o em que cada objeto cont\xe9m informa\xe7\xf5es sobre cada sele\xe7\xe3o de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ProgressInfo"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o que cont\xe9m informa\xe7\xf5es sobre os indicadores de progresso."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionInfo"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o em que cada objeto cont\xe9m informa\xe7\xf5es sobre cada sess\xe3o de usu\xe1rio."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"privileges"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:'An object with a "privileges" property (collection of objects). Each object of the collection has a "privilege" property with a privilege name of the user session as value.'})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"entityset",children:"entitySet"}),"\n",(0,r.jsx)(n.p,{children:"Para cada sele\xe7\xe3o de entidades atualmente armazenada no cache do 4D Server, a seguinte informa\xe7\xe3o \xe9 retornada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Um UUID que faz refer\xeancia ao conjunto de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataClass"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Nome da dataclass."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selectionSize"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de entidades na sele\xe7\xe3o de entidades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sorted"}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["Devuelve true si el conjunto fue ordenado ( utilizando ",(0,r.jsx)(n.code,{children:"$orderby"}),") o false si no est\xe1 ordenado."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshed"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"Quando o conjunto de entidades foi criado ou utilizado a \xfaltima vez."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expires"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsxs)(n.td,{children:["Quando o conjunto de entidades expirar\xe1 (esta data/hora muda sempre que o conjunto de entidades \xe9 atualizado). A diferen\xe7a entre refreshed e expires \xe9 o tempo limite para um conjunto de entidades. Este valor es de dos horas por defecto o lo que hayas definido utilizando ",(0,r.jsx)(n.code,{children:"$timeout"}),"."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Para obtener informaci\xf3n sobre c\xf3mo crear una selecci\xf3n de entidades, consulte ",(0,r.jsx)(n.code,{children:"$method=entityset"}),". Si desea eliminar la selecci\xf3n de entidades de la cach\xe9 de 4D Server, utilice ",(0,r.jsx)(n.code,{children:"$method=release"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["4D tambi\xe9n crea sus propias selecciones de entidades con fines de optimizaci\xf3n, por lo que las que se crean con ",(0,r.jsx)(n.code,{children:"$method=entityset"})," no son las \xfanicas que se devuelven."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"IMPORTANT"}),"\nIf your project is in ",(0,r.jsx)(n.strong,{children:"Controlled Admin Access Mode"}),", you must first log into the project as a user in the Admin group."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sessioninfo",children:"sessionInfo"}),"\n",(0,r.jsxs)(n.p,{children:["Para cada sesi\xf3n de usuario, se devuelve la siguiente informaci\xf3n en la colecci\xf3n ",(0,r.jsx)(n.em,{children:"sessionInfo"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Um UUID que faz refer\xeancia \xe0 sess\xe3o."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"O nome do usu\xe1rio que executa a sess\xe3o."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lifeTime"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"O tempo de vida de uma sess\xe3o usu\xe1rio em segundos (3600 por predefini\xe7\xe3o)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiration"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"A data e hora de expira\xe7\xe3o atuais da sess\xe3o do usu\xe1rio."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Recupera informa\xe7\xe3o sobre os conjuntos de entidades atualmente armazenados na cache de 4D Server assim como sess\xf5es usu\xe1rio:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/$info"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [\n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"A informa\xe7\xe3o do indicador de progresso listada ap\xf3s as sele\xe7\xf5es de entidades \xe9 usada internamente por 4D."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var d=s(667294);let r={},i=d.createContext(r);function t(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);