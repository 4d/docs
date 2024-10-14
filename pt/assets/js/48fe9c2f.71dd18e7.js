"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39768],{441331:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var o=a(474848),r=a(28453);const n={id:"genInfo",title:"Obter informa\xe7\xe3o do servidor"},t=void 0,d={id:"REST/genInfo",title:"Obter informa\xe7\xe3o do servidor",description:"Pode obter v\xe1rias informa\xe7\xf5es do servidor REST:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/pt/19/REST/genInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"genInfo",title:"Obter informa\xe7\xe3o do servidor"},sidebar:"docs",previous:{title:"Usu\xe1rios e sess\xf5es",permalink:"/docs/pt/19/REST/authUsers"},next:{title:"Manipula\xe7\xe3o de dados",permalink:"/docs/pt/19/REST/manData"}},i={},c=[{value:"Cat\xe1logo",id:"cat\xe1logo",level:2},{value:"Informa\xe7\xe3o de Cache",id:"informa\xe7\xe3o-de-cache",level:2},{value:"queryPath e queryPlan",id:"querypath-e-queryplan",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Pode obter v\xe1rias informa\xe7\xf5es do servidor REST:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"os bancos expostos e seus atributos"}),"\n",(0,o.jsx)(s.li,{children:"os conte\xfados de cache do servidor REST, incluindo sess\xf5es de usu\xe1rio."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"cat\xe1logo",children:"Cat\xe1logo"}),"\n",(0,o.jsxs)(s.p,{children:["Use the ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/catalog",children:(0,o.jsx)(s.code,{children:"$catalog"})}),", ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/catalog#catalogdataclass",children:(0,o.jsx)(s.code,{children:"$catalog/\\{dataClass\\}"})}),", or ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/catalog#catalogall",children:(0,o.jsx)(s.code,{children:"$catalog/$all"})})," parameters to get the list of ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/configuration#exposing-tables-and-fields",children:"exposed dataclasses and their attributes"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Para obter a cole\xe7\xe3o de todas as classes de dados expostas junto com seus atributos:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,o.jsx)(s.h2,{id:"informa\xe7\xe3o-de-cache",children:"Informa\xe7\xe3o de Cache"}),"\n",(0,o.jsxs)(s.p,{children:["Use o par\xe2metro ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/info",children:(0,o.jsx)(s.code,{children:"$info"})})," para obter informa\xe7\xf5es sobre as sele\xe7\xf5es de entidade armazenadas atualmente na cache de 4D Server' assim como sobre a execu\xe7\xe3o de sess\xf5es de usu\xe1rio."]}),"\n",(0,o.jsx)(s.h2,{id:"querypath-e-queryplan",children:"queryPath e queryPlan"}),"\n",(0,o.jsxs)(s.p,{children:["As sele\xe7\xf5es de entidade que s\xe3o geradas atrav\xe9s de pesquisas podem ter duas propriedades : ",(0,o.jsx)(s.code,{children:"queryPlan"})," e ",(0,o.jsx)(s.code,{children:"queryPath"}),". Para calcular e retornar essas propriedades, precisa apenas adicionar um ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/queryplan",children:(0,o.jsx)(s.code,{children:"$queryPlan"})})," ou ",(0,o.jsx)(s.a,{href:"/docs/pt/19/REST/querypath",children:(0,o.jsx)(s.code,{children:"$queryPath"})})," na peti\xe7\xe3o REST."]}),"\n",(0,o.jsx)(s.p,{children:"Por exemplo:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,o.jsx)(s.p,{children:"Essas propriedades s\xe3o objetos que cont\xe9m informa\xe7\xe3o sobre como o servidor realiza pesquisas compostas internamente atrav\xe9s de dataclasses e rela\xe7\xf5es:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"queryPlan"}),": objeto contendo a descri\xe7\xe3o detalhada da pesquisa logo antes de ser executada (ou seja, a pesquisa planejada)."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"queryPath"}),": objeto contendo a descri\xe7\xe3o detalhada da pesquisa como foi realizada."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"A informa\xe7\xe3o registrada inclui o tipo de pesquisa (indexada e sequencial) e cada subpesquisa necess\xe1ria junto com opera\xe7\xf5es de conjun\xe7\xe3o. As rotas de acesso das peti\xe7\xf5es tamb\xe9m cont\xe9m o n\xfamero de entidades encontradas e o tempo necess\xe1rio para executar cada crit\xe9rio de pesquisa. As rotas de acesso das peti\xe7\xf5es tamb\xe9m cont\xe9m o n\xfamero de entidades encontradas e o tempo necess\xe1rio para executar cada crit\xe9rio de pesquisa. Geralmente a descri\xe7\xe3o do plano de pesquisa e sua rota s\xe3o id\xeanticas, mas podem diferir porque 4D pode implementar otimiza\xe7\xf5es din\xe2micas quando uma pesquisa for executada para melhorar desempenho. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais r\xe1pido. Esse caso particular pode acontecer quando o n\xfamero de entidades sendo pesquisada \xe9 baixo."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>d});var o=a(296540);const r={},n=o.createContext(r);function t(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);