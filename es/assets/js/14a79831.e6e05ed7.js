/*! For license information please see 14a79831.e6e05ed7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56179],{803472:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var d=n(474848),o=n(28453);const a={id:"savedfilter",title:"$savedfilter"},t=void 0,s={id:"REST/savedfilter",title:"$savedfilter",description:'Guarda el filtro definido por $filter al crear un conjunto de entidades (por ejemplo, $savedfilter="")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/es/19/REST/savedfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/es/19/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/es/19/REST/savedorderby"}},i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:["Guarda el filtro definido por $filter al crear un conjunto de entidades (",(0,d.jsx)(r.em,{children:"por ejemplo"}),", ",(0,d.jsx)(r.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,d.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(r.p,{children:["Cuando se crea un conjunto de entidades, se puede guardar el filtro que se ha utilizado para crearlo como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la cach\xe9 de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor o a que lo ha eliminado llamando a ",(0,d.jsx)(r.a,{href:"/docs/es/19/REST/method#methodrelease",children:(0,d.jsx)(r.code,{children:"$method=release"})}),")."]}),"\n",(0,d.jsxs)(r.p,{children:["Utilice ",(0,d.jsx)(r.code,{children:"$savedfilter"})," para guardar el filtro que defini\xf3 al crear su conjunto de entidades y luego pase ",(0,d.jsx)(r.code,{children:"$savedfilter"})," junto con su llamada para recuperar cada vez el conjunto de entidades."]}),"\n",(0,d.jsx)(r.p,{children:"Si el conjunto de entidades ya no est\xe1 en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera de 10 minutos por defecto. El conjunto de entidades se refrescar\xe1 (pueden incluirse ciertas entidades y eliminarse otras) desde la \xfaltima vez que se cre\xf3, si ya no exist\xeda antes de recrearlo."}),"\n",(0,d.jsxs)(r.p,{children:["Si ha utilizado a la vez ",(0,d.jsx)(r.code,{children:"$savedfilter"})," y ",(0,d.jsx)(r.a,{href:"/docs/es/19/REST/savedorderby",children:(0,d.jsx)(r.code,{children:"$savedorderby"})})," en su llamada al crear un conjunto de entidades y luego omite uno de ellos, el nuevo conjunto de entidades, que tendr\xe1 el mismo n\xfamero de referencia, lo reflejar\xe1."]}),"\n",(0,d.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(r.p,{children:"En nuestro ejemplo, primero llamamos a ``$savedfilter` con la llamada inicial para crear un conjunto de entidades como se muestra a continuaci\xf3n:"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,d.jsx)(r.p,{children:"A continuaci\xf3n, cuando se accede al conjunto de entidades, se escribe lo siguiente para garantizar que el conjunto de entidades sea siempre v\xe1lido:"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},221020:(e,r,n)=>{var d=n(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,s=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var d,a={},l=null,c=null;for(d in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)t.call(r,d)&&!i.hasOwnProperty(d)&&(a[d]=r[d]);if(e&&e.defaultProps)for(d in r=e.defaultProps)void 0===a[d]&&(a[d]=r[d]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:s.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>s});var d=n(296540);const o={},a=d.createContext(o);function t(e){const r=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(a.Provider,{value:r},e.children)}}}]);