"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60804"],{527371:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"API/HTTPAgentClass","title":"HTTPAgent","description":"A classe HTTPAgent permite que voc\xea manipule [objetos HTTPAgent] (#httpagent-object) que podem ser usados para gerenciar a persist\xeancia e a reutiliza\xe7\xe3o de conex\xf5es com servidores usando a classe [HTTPRequest] (HTTPRequestClass.md).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/API/HTTPAgentClass.md","sourceDirName":"API","slug":"/API/HTTPAgentClass","permalink":"/docs/pt/20-R8/API/HTTPAgentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FHTTPAgentClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"HTTPAgentClass","title":"HTTPAgent"},"sidebar":"docs","previous":{"title":"Function","permalink":"/docs/pt/20-R8/API/FunctionClass"},"next":{"title":"HTTPRequest","permalink":"/docs/pt/20-R8/API/HTTPRequestClass"}}'),o=s("785893"),r=s("250065");let d={id:"HTTPAgentClass",title:"HTTPAgent"},i=void 0,a={},c=[{value:"Objeto HTTPAgent",id:"objeto-httpagent",level:3},{value:"4D.HTTPAgent.new()",id:"4dhttpagentnew",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"<code>options</code> parameter",id:"options-parameter",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:".params",id:"params",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".requestsCount",id:"requestscount",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".freeSocketsCount",id:"freesocketscount",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["A classe ",(0,o.jsx)(n.code,{children:"HTTPAgent"})," permite que voc\xea manipule [objetos ",(0,o.jsx)(n.code,{children:"HTTPAgent"}),"] (#httpagent-object) que podem ser usados para gerenciar a persist\xeancia e a reutiliza\xe7\xe3o de conex\xf5es com servidores usando a classe [HTTPRequest] (HTTPRequestClass.md)."]}),"\n",(0,o.jsxs)(n.p,{children:["A classe ",(0,o.jsx)(n.code,{children:"HTTPAgent"})," est\xe1 dispon\xedvel no reposit\xf3rio de classes ",(0,o.jsx)(n.code,{children:"4D"}),". Voc\xea pode criar um novo objeto [",(0,o.jsx)(n.code,{children:"HTTPAgent"}),"] (#httpagent-object) usando a fun\xe7\xe3o [4D.HTTPAgent.new()] (#4dhttpagentnew)."]}),"\n",(0,o.jsx)(n.p,{children:"Quando nenhum agente est\xe1 associado a uma solicita\xe7\xe3o HTTP, \xe9 usado um agente global com valores padr\xe3o. O agente padr\xe3o \xe9 a forma mais simples de agente HTTP, adequado para casos de uso b\xe1sicos. Recomenda-se o uso de agentes personalizados para obter mais controle, no n\xedvel do agente e n\xe3o para cada solicita\xe7\xe3o HTTP, sobre aspectos espec\xedficos da conex\xe3o, como configura\xe7\xf5es de keep-alive, tempos limite ou configura\xe7\xf5es de TLS/SSL."}),"\n",(0,o.jsxs)(n.details,{children:[(0,o.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Release"}),(0,o.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"20 R6"}),(0,o.jsx)(n.td,{children:"Classe adicionada"})]})})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"objeto-httpagent",children:"Objeto HTTPAgent"}),"\n",(0,o.jsx)(n.p,{children:"Um objeto HTTPAgent \xe9 um objeto compartilh\xe1vel."}),"\n",(0,o.jsx)(n.p,{children:"Os objetos HTTPAgent fornecem as seguintes propriedades e fun\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{})})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsx)(n.tr,{children:(0,o.jsxs)(n.td,{children:[(0,o.jsxs)(n.a,{href:"#options",children:[(0,o.jsx)(n.strong,{children:"options"})," : Object"]}),(0,o.jsx)(n.br,{}),"the current used options of the HTTPAgent"]})}),(0,o.jsx)(n.tr,{children:(0,o.jsxs)(n.td,{children:[(0,o.jsxs)(n.a,{href:"#requestscount",children:[(0,o.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),(0,o.jsx)(n.br,{}),"o n\xfamero de solicita\xe7\xf5es atualmente tratadas pelo HTTPAgent"]})}),(0,o.jsx)(n.tr,{children:(0,o.jsxs)(n.td,{children:[(0,o.jsxs)(n.a,{href:"#freesocketscount",children:[(0,o.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),(0,o.jsx)(n.br,{}),"o n\xfamero de sockets livres de ",(0,o.jsx)(n.code,{children:"maxSockets"})," associados ao HTTPAgent"]})})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Como o HTTPAgent \xe9 um objeto compartilh\xe1vel, voc\xea pode adicion\xe1-lo a uma classe singleton para poder usar o mesmo agente em todas as solicita\xe7\xf5es ao mesmo servidor."})}),"\n",(0,o.jsx)(n.h2,{id:"4dhttpagentnew",children:"4D.HTTPAgent.new()"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4D.HTTPAgent.new"}),"( { ",(0,o.jsx)(n.em,{children:"options"})," : Object } ) : 4D.HTTPAgent"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{style:{textAlign:"center"}}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,o.jsx)(n.td,{children:"op\xe7\xf5es padr\xe3o para o HTTPAgent"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultados"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#httpagent-object",children:"4D.HTTPAgent"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Novo objeto HTTPAgent"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,o.jsx)(n.code,{children:"4D.HTTPAgent.new()"})," cria um objeto HTTPAgent compartilh\xe1vel com as ",(0,o.jsx)(n.em,{children:"op\xe7\xf5es"})," definidas e retorna um objeto ",(0,o.jsx)(n.code,{children:"4D.HTTPAgent"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["O [objeto ",(0,o.jsx)(n.code,{children:"HTTPAgent"}),"] (#httpagent-object) retornado \xe9 usado para personalizar as conex\xf5es com os servidores HTTP."]}),"\n",(0,o.jsxs)(n.h4,{id:"options-parameter",children:[(0,o.jsx)(n.code,{children:"options"})," parameter"]}),"\n",(0,o.jsxs)(n.p,{children:["No par\xe2metro ",(0,o.jsx)(n.em,{children:"options"}),", passe um objeto que possa conter as seguintes propriedades (todas as propriedades s\xe3o opcionais):"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["As op\xe7\xf5es do HTTPAgent ser\xe3o mescladas com as ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/API/HTTPRequestClass#4dhttprequestnew",children:"op\xe7\xf5es HTTPRequest"})," (as op\xe7\xf5es HTTPRequest t\xeam prioridade); se nenhum agente espec\xedfico for definido, ser\xe1 utilizado um agente global."]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propriedade"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Por padr\xe3o"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"keepAlive"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:"Ativa o keep alive para o agente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"maxSockets"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"65535"}),(0,o.jsx)(n.td,{children:"N\xfamero m\xe1ximo de sockets por servidor"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"maxTotalSockets"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"65535"}),(0,o.jsx)(n.td,{children:"N\xfamero m\xe1ximo de sockets para o agente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"timeout"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"indefinido"}),(0,o.jsx)(n.td,{children:"Se definido, o tempo limite ap\xf3s o qual um soquete n\xe3o utilizado \xe9 fechado"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"certificatesFolder"}),(0,o.jsx)(n.td,{children:"Folder"}),(0,o.jsxs)(n.td,{children:["singleton (consulte o valor padr\xe3o em ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,o.jsx)(n.td,{children:"Define a pasta de certificados do cliente ativo para as solicita\xe7\xf5es que usam o agente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"minTLSVersion"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["singleton (consulte o valor padr\xe3o em ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,o.jsx)(n.td,{children:"Define a vers\xe3o m\xednima de TLS para as solicita\xe7\xf5es que usam esse agente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"protocol"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsxs)(n.td,{children:["singleton (consulte o valor padr\xe3o em ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,o.jsx)(n.td,{children:"Protocolo usado para as solicita\xe7\xf5es que usam o agente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"validateTLSCertificate"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsxs)(n.td,{children:["singleton (consulte o valor padr\xe3o em ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,o.jsx)(n.td,{children:"validateTLSCertificate para as solicita\xe7\xf5es que usam o agente"})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Voc\xea pode solicitar v\xe1rios servidores usando o mesmo agente. Nesse caso, cada servidor ter\xe1 seu pr\xf3prio pool de conex\xf5es usando as mesmas op\xe7\xf5es de agente."})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Criando o HTTPAgent:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.maxSockets:=5 //5 \xe9 o n\xfamero m\xe1ximo de sockets por servidor\n$options.maxTotalSockets:=10 //10 \xe9 o n\xfamero m\xe1ximo de sockets para o agente\n$options.validateTLSCertificate:=True //Para validar o certificado do servidor\n\nvar $myAgent:=4D.HTTPAgent.new($options)\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Envio de uma solicita\xe7\xe3o para verificar a hora local de qualquer cidade:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $options:={}\n$options.method:="GET"\n$options.agent:=$myAgent\nvar $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) \n\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Quando nenhum agente est\xe1 associado a um HTTPRequest, \xe9 usado um agente global com valores padr\xe3o."})}),"\n",(0,o.jsx)(n.h2,{id:"params",children:".params"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"options"})," : Object"]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".params"})," property object contains the current used options of the HTTPAgent."]}),"\n",(0,o.jsx)(n.h2,{id:"requestscount",children:".requestsCount"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["A propriedade ",(0,o.jsx)(n.code,{children:".requestsCount"})," cont\xe9m o n\xfamero de solicita\xe7\xf5es atualmente tratadas pelo HTTPAgent."]}),"\n",(0,o.jsx)(n.h2,{id:"freesocketscount",children:".freeSocketsCount"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["A propriedade ",(0,o.jsx)(n.code,{children:".freeSocketsCount"})," cont\xe9m o n\xfamero de sockets livres de ",(0,o.jsx)(n.code,{children:"maxSockets"})," associados ao HTTPAgent."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let o={},r=t.createContext(o);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);