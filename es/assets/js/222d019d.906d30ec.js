"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46742"],{763145:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"REST/info","title":"$info","description":"Devuelve informaci\xf3n sobre los conjuntos de entidades almacenados actualmente en la cach\xe9 de 4D Server, as\xed como las sesiones usuario","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$info.md","sourceDirName":"REST","slug":"/REST/info","permalink":"/docs/es/18/REST/info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24info.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"info","title":"$info"},"sidebar":"docs","previous":{"title":"$directory","permalink":"/docs/es/18/REST/directory"},"next":{"title":"$upload","permalink":"/docs/es/18/REST/upload"}}'),d=s("785893"),r=s("250065");let t={id:"info",title:"$info"},c=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Ejemplo",id:"ejemplo",level:2}];function a(e){let n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Devuelve informaci\xf3n sobre los conjuntos de entidades almacenados actualmente en la cach\xe9 de 4D Server, as\xed como las sesiones usuario"}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"Cuando llama a esta petici\xf3n para su proyecto, se recupera la informaci\xf3n en las propiedades siguientes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedad"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cacheSize"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"Tama\xf1o de la cach\xe9 del servidor 4D."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"usedCache"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"Cu\xe1nto se ha utilizado de la cach\xe9 de 4D Server."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"entitySetCount"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"N\xfamero de selecciones de entidades."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"entitySet"}),(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"Una colecci\xf3n en la que cada objeto contiene informaci\xf3n sobre cada selecci\xf3n de entidades."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ProgressInfo"}),(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"Una colecci\xf3n que contiene informaci\xf3n sobre el indicador de progreso."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sessionInfo"}),(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"Una colecci\xf3n en la que cada objeto contiene informaci\xf3n sobre cada sesi\xf3n usuario."})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"entityset",children:"entitySet"}),"\n",(0,d.jsx)(n.p,{children:"Para cada selecci\xf3n de entidad almacenada actualmente en la cach\xe9 de 4D Server, se devuelve la siguiente informaci\xf3n:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedad"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"id"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Un UUID que hace referencia al conjunto de entidades."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dataClass"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Nombre de la dataclass."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"selectionSize"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"N\xfamero de entidades en la selecci\xf3n de entidades."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sorted"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["Devuelve true si el conjunto fue ordenado ( utilizando ",(0,d.jsx)(n.code,{children:"$orderby"}),") o false si no est\xe1 ordenado."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"refreshed"}),(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:"Cuando se cre\xf3 el conjunto de entidades o la \xfaltima vez que se utiliz\xf3."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"expires"}),(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsxs)(n.td,{children:["Cu\xe1ndo expirar\xe1 el conjunto de entidades (esta fecha/hora cambia cada vez que se actualiza el conjunto de entidades). La diferencia entre refrescado y vencido es el tiempo de espera de un conjunto de entidades. Este valor es de dos horas por defecto o lo que hayas definido utilizando ",(0,d.jsx)(n.code,{children:"$timeout"}),"."]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Para obtener informaci\xf3n sobre c\xf3mo crear una selecci\xf3n de entidades, consulte ",(0,d.jsx)(n.code,{children:"$method=entityset"}),". Si desea eliminar la selecci\xf3n de entidades de la cach\xe9 de 4D Server, utilice ",(0,d.jsx)(n.code,{children:"$method=release"}),"."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["4D tambi\xe9n crea sus propias selecciones de entidades con fines de optimizaci\xf3n, por lo que las que se crean con ",(0,d.jsx)(n.code,{children:"$method=entityset"})," no son las \xfanicas que se devuelven.\n",(0,d.jsx)(n.strong,{children:"IMPORTANT"})," If your project is in ",(0,d.jsx)(n.strong,{children:"Controlled Admin Access Mode"}),", you must first log into the project as a user in the Admin group."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"sessioninfo",children:"sessionInfo"}),"\n",(0,d.jsxs)(n.p,{children:["Para cada sesi\xf3n de usuario, se devuelve la siguiente informaci\xf3n en la colecci\xf3n ",(0,d.jsx)(n.em,{children:"sessionInfo"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedad"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sessionID"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Un UUID que referencia la sesi\xf3n."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"userName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"El nombre del usuario que ejecuta la sesi\xf3n."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lifeTime"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"La duraci\xf3n de una sesi\xf3n usuario en segundos (3600 por defecto)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"expiration"}),(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:"La fecha y la hora actuales de caducidad de la sesi\xf3n de usuario."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Recupera la informaci\xf3n sobre los conjuntos de entidades almacenados actualmente en la cach\xe9 de 4D Server, as\xed como las sesiones usuario:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET /rest/$info"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"La informaci\xf3n del indicador de progreso que aparece despu\xe9s de las selecciones de entidades es utilizada internamente por 4D."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var i=s(667294);let d={},r=i.createContext(d);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);