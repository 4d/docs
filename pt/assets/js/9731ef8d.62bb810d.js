"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4319],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},838980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"info",title:"$info"},i=void 0,s={unversionedId:"REST/info",id:"version-20-R4/REST/info",title:"$info",description:"Devolve informa\xe7\xe3o sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sess\xf5es utilizador",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/REST/$info.md",sourceDirName:"REST",slug:"/REST/info",permalink:"/docs/pt/REST/info",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24info.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"info",title:"$info"},sidebar:"docs",previous:{title:"$directory",permalink:"/docs/pt/REST/directory"},next:{title:"$upload",permalink:"/docs/pt/REST/upload"}},d={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Exemplo",id:"exemplo",level:2}],p={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Devolve informa\xe7\xe3o sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sess\xf5es utilizador"),(0,a.kt)("h2",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,a.kt)("p",null,"Ao chamar este pedido para o seu projeto, recupera informa\xe7\xf5es nas seguintes propriedades:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"cacheSize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tamanho da cache do servidor 4D.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"usedCache"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Quanto do cache do 4D Server foi usado.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"entitySetCount"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de selec\xe7\xf5es de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"entitySet"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Uma cole\xe7\xe3o em que cada objeto cont\xe9m informa\xe7\xf5es sobre cada sele\xe7\xe3o de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ProgressInfo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Uma cole\xe7\xe3o que cont\xe9m informa\xe7\xf5es sobre os indicadores de progresso.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sessionInfo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Uma cole\xe7\xe3o em que cada objeto cont\xe9m informa\xe7\xf5es sobre cada sess\xe3o de usu\xe1rio.")))),(0,a.kt)("h3",r({},{id:"entityset"}),"entitySet"),(0,a.kt)("p",null,"Para cada sele\xe7\xe3o de entidades atualmente armazenada no cache do 4D Server, a seguinte informa\xe7\xe3o \xe9 retornada:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Um UUID que faz refer\xeancia ao conjunto de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"dataClass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nome da dataclass.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"selectionSize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de entidades na sele\xe7\xe3o de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sorted"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Devolve true se o conjunto foi ordenado (utilizando ",(0,a.kt)("inlineCode",{parentName:"td"},"$orderby"),") ou false se n\xe3o foi ordenado.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"refreshed"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Quando o conjunto de entidades foi criado ou utilizado a \xfaltima vez.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"expires"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Quando o conjunto de entidades expirar\xe1 (esta data/hora muda sempre que o conjunto de entidades \xe9 atualizado). A diferen\xe7a entre refreshed e expires \xe9 o tempo limite para um conjunto de entidades. Este valor \xe9 de duas horas por defeito ou o valor que definiu utilizando ",(0,a.kt)("inlineCode",{parentName:"td"},"$timeout"),".")))),(0,a.kt)("p",null,"Para obter informa\xe7\xf5es sobre como criar uma sele\xe7\xe3o de entidades, consultar ",(0,a.kt)("inlineCode",{parentName:"p"},"$method=entityset"),". Se quiser remover a sele\xe7\xe3o de entidades da cache de 4D Server, use ",(0,a.kt)("inlineCode",{parentName:"p"},"$method=release"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"4D tamb\xe9m cria suas pr\xf3prias sele\xe7\xf5es de entidades para fins de otimiza\xe7\xe3o, ent\xe3o as que voc\xea cria com ",(0,a.kt)("inlineCode",{parentName:"p"},"$method=entityset")," n\xe3o s\xe3o as \xfanicas retornadas.\n",(0,a.kt)("strong",{parentName:"p"},"IMPORTANTE")," Se o seu projeto estiver no ",(0,a.kt)("strong",{parentName:"p"},"Modo Controlled Admin Access"),", tem de iniciar sess\xe3o no projeto como usu\xe1rio do grupo Admin.")),(0,a.kt)("h3",r({},{id:"sessioninfo"}),"sessionInfo"),(0,a.kt)("p",null,"Para cada sess\xe3o usu\xe1rio, s\xe3o devolvidas as seguintes informa\xe7\xf5es na cole\xe7\xe3o ",(0,a.kt)("em",{parentName:"p"},"sessionInfo"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sessionID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Um UUID que faz refer\xeancia \xe0 sess\xe3o.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"userName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"O nome do usu\xe1rio que executa a sess\xe3o.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"lifeTime"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"O tempo de vida de uma sess\xe3o usu\xe1rio em segundos (3600 por predefini\xe7\xe3o).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"expiration"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A data e hora de expira\xe7\xe3o atuais da sess\xe3o do usu\xe1rio.")))),(0,a.kt)("h2",r({},{id:"exemplo"}),"Exemplo"),(0,a.kt)("p",null,"Recupera informa\xe7\xe3o sobre os conjuntos de entidades atualmente armazenados na cache de 4D Server assim como sess\xf5es usu\xe1rio:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/$info")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n], ProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A informa\xe7\xe3o do indicador de progresso listada ap\xf3s as sele\xe7\xf5es de entidades \xe9 usada internamente por 4D.")))}m.isMDXComponent=!0}}]);