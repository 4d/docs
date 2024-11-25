"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30628"],{823369:function(e,a,s){s.r(a),s.d(a,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>t});var o=JSON.parse('{"id":"REST/genInfo","title":"Obter informa\xe7\xe3o do servidor","description":"Pode obter v\xe1rias informa\xe7\xf5es do servidor REST:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/genInfo.md","sourceDirName":"REST","slug":"/REST/genInfo","permalink":"/docs/pt/20/REST/genInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"genInfo","title":"Obter informa\xe7\xe3o do servidor"},"sidebar":"docs","previous":{"title":"Usu\xe1rios e sess\xf5es","permalink":"/docs/pt/20/REST/authUsers"},"next":{"title":"Manipula\xe7\xe3o de dados","permalink":"/docs/pt/20/REST/manData"}}'),r=s("785893"),n=s("250065");let t={id:"genInfo",title:"Obter informa\xe7\xe3o do servidor"},d=void 0,i={},c=[{value:"Cat\xe1logo",id:"cat\xe1logo",level:2},{value:"Informa\xe7\xe3o de Cache",id:"informa\xe7\xe3o-de-cache",level:2},{value:"queryPath e queryPlan",id:"querypath-e-queryplan",level:2}];function l(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Pode obter v\xe1rias informa\xe7\xf5es do servidor REST:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"os bancos expostos e seus atributos"}),"\n",(0,r.jsx)(a.li,{children:"os conte\xfados de cache do servidor REST, incluindo sess\xf5es de usu\xe1rio."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"cat\xe1logo",children:"Cat\xe1logo"}),"\n",(0,r.jsxs)(a.p,{children:["Use o bot\xe3o ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/catalog",children:(0,r.jsx)(a.code,{children:"$catalog"})}),", ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/catalog#catalogdataclass",children:(0,r.jsx)(a.code,{children:"$catalog/\\{dataClass\\}"})}),", ou ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/catalog#catalogall",children:(0,r.jsx)(a.code,{children:"$catalog/$all"})})," para obter a lista de ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/configuration#exposing-tables-and-fields",children:"classes de dados expostas e seus atributos"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Para obter a cole\xe7\xe3o de todas as classes de dados expostas junto com seus atributos:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,r.jsx)(a.h2,{id:"informa\xe7\xe3o-de-cache",children:"Informa\xe7\xe3o de Cache"}),"\n",(0,r.jsxs)(a.p,{children:["Use o par\xe2metro ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/info",children:(0,r.jsx)(a.code,{children:"$info"})})," para obter informa\xe7\xf5es sobre as sele\xe7\xf5es de entidade armazenadas atualmente na cache de 4D Server' assim como sobre a execu\xe7\xe3o de sess\xf5es de usu\xe1rio."]}),"\n",(0,r.jsx)(a.h2,{id:"querypath-e-queryplan",children:"queryPath e queryPlan"}),"\n",(0,r.jsxs)(a.p,{children:["As sele\xe7\xf5es de entidade que s\xe3o geradas atrav\xe9s de pesquisas podem ter duas propriedades : ",(0,r.jsx)(a.code,{children:"queryPlan"})," e ",(0,r.jsx)(a.code,{children:"queryPath"}),". Para calcular e retornar essas propriedades, precisa apenas adicionar um ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/queryplan",children:(0,r.jsx)(a.code,{children:"$queryPlan"})})," ou ",(0,r.jsx)(a.a,{href:"/docs/pt/20/REST/querypath",children:(0,r.jsx)(a.code,{children:"$queryPath"})})," na peti\xe7\xe3o REST."]}),"\n",(0,r.jsx)(a.p,{children:"Por exemplo:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,r.jsx)(a.p,{children:"Essas propriedades s\xe3o objetos que cont\xe9m informa\xe7\xe3o sobre como o servidor realiza pesquisas compostas internamente atrav\xe9s de dataclasses e rela\xe7\xf5es:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"queryPlan"}),": objeto contendo a descri\xe7\xe3o detalhada da pesquisa logo antes de ser executada (ou seja, a pesquisa planejada)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"queryPath"}),": objeto contendo a descri\xe7\xe3o detalhada da pesquisa como foi realizada."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"A informa\xe7\xe3o registrada inclui o tipo de pesquisa (indexada e sequencial) e cada subpesquisa necess\xe1ria junto com opera\xe7\xf5es de conjun\xe7\xe3o. As rotas de acesso das peti\xe7\xf5es tamb\xe9m cont\xe9m o n\xfamero de entidades encontradas e o tempo necess\xe1rio para executar cada crit\xe9rio de pesquisa. As rotas de acesso das peti\xe7\xf5es tamb\xe9m cont\xe9m o n\xfamero de entidades encontradas e o tempo necess\xe1rio para executar cada crit\xe9rio de pesquisa. Geralmente a descri\xe7\xe3o do plano de pesquisa e sua rota s\xe3o id\xeanticas, mas podem diferir porque 4D pode implementar otimiza\xe7\xf5es din\xe2micas quando uma pesquisa for executada para melhorar desempenho. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais r\xe1pido. Esse caso particular pode acontecer quando o n\xfamero de entidades sendo pesquisada \xe9 baixo."})]})}function u(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return d},a:function(){return t}});var o=s(667294);let r={},n=o.createContext(r);function t(e){let a=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);