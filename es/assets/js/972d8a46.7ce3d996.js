"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46574],{730509:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>t,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(474848),n=r(28453);const o={id:"savedorderby",title:"$savedorderby"},s=void 0,i={id:"REST/savedorderby",title:"$savedorderby",description:'Guarda el filtro definido por $orderby al crear un conjunto de entidades (por ejemplo, $savedorderby="")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/docs/es/REST/savedorderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedorderby.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/docs/es/REST/savedfilter"},next:{title:"$skip",permalink:"/docs/es/REST/skip"}},t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){const d={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.p,{children:["Guarda el filtro definido por ",(0,a.jsx)(d.code,{children:"$orderby"})," al crear un conjunto de entidades (",(0,a.jsx)(d.em,{children:"por ejemplo"}),", ",(0,a.jsx)(d.code,{children:'$savedorderby="{orderby}"'}),")"]}),"\n",(0,a.jsx)(d.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(d.p,{children:["Cuando se crea un conjunto de entidades, se puede guardar el sentido de la ordenaci\xf3n junto con el filtro utilizado para su creaci\xf3n como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la cach\xe9 de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor, o a que lo ha eliminado llamando a ",(0,a.jsx)(d.a,{href:"/docs/es/REST/method#methodrelease",children:(0,a.jsx)(d.code,{children:"$method=release"})}),")."]}),"\n",(0,a.jsxs)(d.p,{children:["Utilice ",(0,a.jsx)(d.code,{children:"$savedorderby"})," para guardar el orden que defini\xf3 al crear su conjunto de entidades, luego pase ",(0,a.jsx)(d.code,{children:"$savedorderby"})," junto con su llamada para recuperar cada vez el conjunto de entidades."]}),"\n",(0,a.jsxs)(d.p,{children:["Si el conjunto de entidades ya no est\xe1 en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera de 10 minutos por defecto. Si has usado ambos [",(0,a.jsx)(d.code,{children:"$savedfilter"}),"]($savedfilter. d) y ",(0,a.jsx)(d.code,{children:"$savedorderby"})," en su llamada cuando crea una entidad definida y luego omite una de ellas, la nueva entidad definida, teniendo el mismo n\xfamero de referencia, lo reflejar\xe1."]}),"\n",(0,a.jsx)(d.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(d.p,{children:["Primero se llama a ",(0,a.jsx)(d.code,{children:"$savedorderby"})," con la llamada inicial para crear un conjunto de entidades:"]}),"\n",(0,a.jsx)(d.p,{children:(0,a.jsx)(d.code,{children:'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset'})}),"\n",(0,a.jsx)(d.p,{children:"Luego, cuando acceda a su conjunto de entidades, escriba lo siguiente (utilizando tanto $savedfilter como $savedorderby) para asegurarse de que el filtro y su orden de clasificaci\xf3n siempre existen:"}),"\n",(0,a.jsx)(d.p,{children:(0,a.jsx)(d.code,{children:' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"'})})]})}function u(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>s,x:()=>i});var a=r(296540);const n={},o=a.createContext(n);function s(e){const d=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:d},e.children)}}}]);