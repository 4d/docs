"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69575"],{81760:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>o,default:()=>u,assets:()=>s,toc:()=>l,frontMatter:()=>t});var d=JSON.parse('{"id":"REST/savedfilter","title":"$savedfilter","description":"Guarda el filtro definido por $filter al crear un conjunto de entidades (por ejemplo, $savedfilter=\\"\\")","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/$savedfilter.md","sourceDirName":"REST","slug":"/REST/savedfilter","permalink":"/docs/es/20/REST/savedfilter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"savedfilter","title":"$savedfilter"},"sidebar":"docs","previous":{"title":"$queryplan","permalink":"/docs/es/20/REST/queryplan"},"next":{"title":"$savedorderby","permalink":"/docs/es/20/REST/savedorderby"}}'),a=r("785893"),i=r("250065");let t={id:"savedfilter",title:"$savedfilter"},o=void 0,s={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Guarda el filtro definido por $filter al crear un conjunto de entidades (",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se crea un conjunto de entidades, se puede guardar el filtro que se ha utilizado para crearlo como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la cach\xe9 de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor o a que lo ha eliminado llamando a ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/method#methodrelease",children:(0,a.jsx)(n.code,{children:"$method=release"})}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Utilice ",(0,a.jsx)(n.code,{children:"$savedfilter"})," para guardar el filtro que defini\xf3 al crear su conjunto de entidades y luego pase ",(0,a.jsx)(n.code,{children:"$savedfilter"})," junto con su llamada para recuperar cada vez el conjunto de entidades."]}),"\n",(0,a.jsx)(n.p,{children:"Si el conjunto de entidades ya no est\xe1 en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera de 10 minutos por defecto. El conjunto de entidades se refrescar\xe1 (pueden incluirse ciertas entidades y eliminarse otras) desde la \xfaltima vez que se cre\xf3, si ya no exist\xeda antes de recrearlo."}),"\n",(0,a.jsxs)(n.p,{children:["Si ha utilizado a la vez ",(0,a.jsx)(n.code,{children:"$savedfilter"})," y ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/savedorderby",children:(0,a.jsx)(n.code,{children:"$savedorderby"})})," en su llamada al crear un conjunto de entidades y luego omite uno de ellos, el nuevo conjunto de entidades, que tendr\xe1 el mismo n\xfamero de referencia, lo reflejar\xe1."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"En nuestro ejemplo, primero llamamos a ``$savedfilter` con la llamada inicial para crear un conjunto de entidades como se muestra a continuaci\xf3n:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, cuando se accede al conjunto de entidades, se escribe lo siguiente para garantizar que el conjunto de entidades sea siempre v\xe1lido:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var d=r(667294);let a={},i=d.createContext(a);function t(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);