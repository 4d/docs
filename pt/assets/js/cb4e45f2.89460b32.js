"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99136"],{483287:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>s,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"REST/savedfilter","title":"$savedfilter","description":"Guarda el filtro definido por $filter al crear un conjunto de entidades (por ejemplo, $savedfilter=\\"\\")","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/REST/$savedfilter.md","sourceDirName":"REST","slug":"/REST/savedfilter","permalink":"/docs/pt/20-R8/REST/savedfilter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"savedfilter","title":"$savedfilter"},"sidebar":"docs","previous":{"title":"$queryplan","permalink":"/docs/pt/20-R8/REST/queryplan"},"next":{"title":"$savedorderby","permalink":"/docs/pt/20-R8/REST/savedorderby"}}'),n=r("785893"),d=r("250065");let i={id:"savedfilter",title:"$savedfilter"},a=void 0,s={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Guarda el filtro definido por $filter al crear un conjunto de entidades (",(0,n.jsx)(t.em,{children:"por ejemplo"}),", ",(0,n.jsx)(t.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:["Ao criar um conjunto de entidades, voc\xea pode salvar o filtro usado para cri\xe1-lo por motivos de seguran\xe7a. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R8/REST/method#methodrelease",children:(0,n.jsx)(t.code,{children:"$method=release"})}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Utilice ",(0,n.jsx)(t.code,{children:"$savedfilter"})," para guardar el filtro que defini\xf3 al crear su conjunto de entidades y luego pase ",(0,n.jsx)(t.code,{children:"$savedfilter"})," junto con su llamada para recuperar cada vez el conjunto de entidades."]}),"\n",(0,n.jsx)(t.p,{children:"Se o conjunto de entidades n\xe3o est\xe1 mais no cache do 4D Server, ele ser\xe1 recriado com um novo timeout padr\xe3o de 10 minutos. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."}),"\n",(0,n.jsxs)(t.p,{children:["If you have used both ",(0,n.jsx)(t.code,{children:"$savedfilter"})," and ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R8/REST/savedorderby",children:(0,n.jsx)(t.code,{children:"$savedorderby"})})," in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that."]}),"\n",(0,n.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(t.p,{children:"No nosso exemplo, chamamos primeiro ``$savedfilter` com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:' GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,n.jsx)(t.p,{children:"Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades \xe9 sempre v\xe1lido:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function u(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var o=r(667294);let n={},d=o.createContext(n);function i(e){let t=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);