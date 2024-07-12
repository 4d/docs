/*! For license information please see 19b0ff27.bcfab41a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68618],{876328:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var d=r(474848),t=r(28453);const n={id:"savedfilter",title:"$savedfilter"},a=void 0,s={id:"REST/savedfilter",title:"$savedfilter",description:'Guarda o filtro definido por $filter aquando da cria\xe7\xe3o de um conjunto de entidades (e.g., $savedfilter="")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/pt/19/REST/savedfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/pt/19/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/pt/19/REST/savedorderby"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:["Guarda o filtro definido por $filter aquando da cria\xe7\xe3o de um conjunto de entidades (",(0,d.jsx)(o.em,{children:"e.g."}),", ",(0,d.jsx)(o.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,d.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["Ao criar um conjunto de entidades, voc\xea pode salvar o filtro usado para cri\xe1-lo por motivos de seguran\xe7a. Se o conjunto de entidades que criou for removido da cache do 4D Server (devido ao tempo limite, \xe0 necessidade de espa\xe7o do servidor, ou ao facto de o remover chamando ",(0,d.jsx)(o.a,{href:"/docs/pt/19/REST/method#methodrelease",children:(0,d.jsx)(o.code,{children:"$method=release"})}),")."]}),"\n",(0,d.jsxs)(o.p,{children:["Utiliza-se ",(0,d.jsx)(o.code,{children:"$savedfilter"})," para guardar o filtro definido ao criar o conjunto de entidades e, em seguida, passa-se ",(0,d.jsx)(o.code,{children:"$savedfilter"})," com a chamada para recuperar o conjunto de entidades de cada vez."]}),"\n",(0,d.jsx)(o.p,{children:"Se o conjunto de entidades n\xe3o est\xe1 mais no cache do 4D Server, ele ser\xe1 recriado com um novo timeout padr\xe3o de 10 minutos. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."}),"\n",(0,d.jsxs)(o.p,{children:["Se tiver utilizado tanto ",(0,d.jsx)(o.code,{children:"$savedfilter"})," como ",(0,d.jsx)(o.a,{href:"/docs/pt/19/REST/savedorderby",children:(0,d.jsx)(o.code,{children:"$savedorderby"})})," na sua chamada ao criar um conjunto de entidades e depois omitir um deles, o novo conjunto de entidades, que ter\xe1 o mesmo n\xfamero de refer\xeancia, refletir\xe1 esse facto."]}),"\n",(0,d.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(o.p,{children:"No nosso exemplo, chamamos primeiro ``$savedfilter` com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.code,{children:'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,d.jsx)(o.p,{children:"Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades \xe9 sempre v\xe1lido:"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var d=r(296540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,r){var d,n={},c=null,l=null;for(d in void 0!==r&&(c=""+r),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)a.call(o,d)&&!i.hasOwnProperty(d)&&(n[d]=o[d]);if(e&&e.defaultProps)for(d in o=e.defaultProps)void 0===n[d]&&(n[d]=o[d]);return{$$typeof:t,type:e,key:c,ref:l,props:n,_owner:s.current}}o.Fragment=n,o.jsx=c,o.jsxs=c},474848:(e,o,r)=>{e.exports=r(221020)},28453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>s});var d=r(296540);const t={},n=d.createContext(t);function a(e){const o=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),d.createElement(n.Provider,{value:o},e.children)}}}]);