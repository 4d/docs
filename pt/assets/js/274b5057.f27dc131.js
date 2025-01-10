"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55185"],{763021:function(e,o,d){d.r(o),d.d(o,{default:()=>u,frontMatter:()=>n,metadata:()=>r,assets:()=>s,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"REST/savedfilter","title":"$savedfilter","description":"Guarda o filtro definido por $filter aquando da cria\xe7\xe3o de um conjunto de entidades (e.g., $savedfilter=\\"\\")","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$savedfilter.md","sourceDirName":"REST","slug":"/REST/savedfilter","permalink":"/docs/pt/20/REST/savedfilter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"savedfilter","title":"$savedfilter"},"sidebar":"docs","previous":{"title":"$queryplan","permalink":"/docs/pt/20/REST/queryplan"},"next":{"title":"$savedorderby","permalink":"/docs/pt/20/REST/savedorderby"}}'),t=d("785893"),a=d("250065");let n={id:"savedfilter",title:"$savedfilter"},i=void 0,s={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Guarda o filtro definido por $filter aquando da cria\xe7\xe3o de um conjunto de entidades (",(0,t.jsx)(o.em,{children:"e.g."}),", ",(0,t.jsx)(o.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["Ao criar um conjunto de entidades, voc\xea pode salvar o filtro usado para cri\xe1-lo por motivos de seguran\xe7a. Se o conjunto de entidades que criou for removido da cache do 4D Server (devido ao tempo limite, \xe0 necessidade de espa\xe7o do servidor, ou ao facto de o remover chamando ",(0,t.jsx)(o.a,{href:"/docs/pt/20/REST/method#methodrelease",children:(0,t.jsx)(o.code,{children:"$method=release"})}),")."]}),"\n",(0,t.jsxs)(o.p,{children:["Utiliza-se ",(0,t.jsx)(o.code,{children:"$savedfilter"})," para guardar o filtro definido ao criar o conjunto de entidades e, em seguida, passa-se ",(0,t.jsx)(o.code,{children:"$savedfilter"})," com a chamada para recuperar o conjunto de entidades de cada vez."]}),"\n",(0,t.jsx)(o.p,{children:"Se o conjunto de entidades n\xe3o est\xe1 mais no cache do 4D Server, ele ser\xe1 recriado com um novo timeout padr\xe3o de 10 minutos. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."}),"\n",(0,t.jsxs)(o.p,{children:["Se tiver utilizado tanto ",(0,t.jsx)(o.code,{children:"$savedfilter"})," como ",(0,t.jsx)(o.a,{href:"/docs/pt/20/REST/savedorderby",children:(0,t.jsx)(o.code,{children:"$savedorderby"})})," na sua chamada ao criar um conjunto de entidades e depois omitir um deles, o novo conjunto de entidades, que ter\xe1 o mesmo n\xfamero de refer\xeancia, refletir\xe1 esse facto."]}),"\n",(0,t.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"No nosso exemplo, chamamos primeiro ``$savedfilter` com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.code,{children:'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,t.jsx)(o.p,{children:"Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades \xe9 sempre v\xe1lido:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function u(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,d){d.d(o,{Z:function(){return i},a:function(){return n}});var r=d(667294);let t={},a=r.createContext(t);function n(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);