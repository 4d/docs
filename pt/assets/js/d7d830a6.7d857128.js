"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"genInfo",title:"Obter informa\xe7\xe3o do servidor"},i=void 0,l={unversionedId:"REST/genInfo",id:"version-18/REST/genInfo",title:"Obter informa\xe7\xe3o do servidor",description:"Pode obter v\xe1rias informa\xe7\xf5es do servidor REST:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/pt/18/REST/genInfo",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"genInfo",title:"Obter informa\xe7\xe3o do servidor"},sidebar:"docs",previous:{title:"Usu\xe1rios e sess\xf5es",permalink:"/docs/pt/18/REST/authUsers"},next:{title:"Manipula\xe7\xe3o de dados",permalink:"/docs/pt/18/REST/manData"}},p={},c=[{value:"Cat\xe1logo",id:"cat\xe1logo",level:2},{value:"Informa\xe7\xe3o de Cache",id:"informa\xe7\xe3o-de-cache",level:2},{value:"queryPath e queryPlan",id:"querypath-e-queryplan",level:2}],d={toc:c};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pode obter v\xe1rias informa\xe7\xf5es do servidor REST:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"os bancos expostos e seus atributos"),(0,r.kt)("li",{parentName:"ul"},"os conte\xfados de cache do servidor REST, incluindo sess\xf5es de usu\xe1rio.")),(0,r.kt)("h2",n({},{id:"cat\xe1logo"}),"Cat\xe1logo"),(0,r.kt)("p",null,"Utilize os par\xe2metros ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/catalog"}),(0,r.kt)("inlineCode",{parentName:"a"},"$catalog")),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/catalog#catalogdataclass"}),(0,r.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),", o ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/catalog#catalogall"}),(0,r.kt)("inlineCode",{parentName:"a"},"$catalog/$all"))," para obter a lista de ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/configuration#exposing-tables-and-fields"}),"as classes de dados expostas e seus atributos"),"."),(0,r.kt)("p",null,"Para obter a cole\xe7\xe3o de todas as classes de dados expostas junto com seus atributos:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/$catalog/$all")),(0,r.kt)("h2",n({},{id:"informa\xe7\xe3o-de-cache"}),"Informa\xe7\xe3o de Cache"),(0,r.kt)("p",null,"Use o par\xe2metro ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/info"}),(0,r.kt)("inlineCode",{parentName:"a"},"$info"))," para obter informa\xe7\xf5es sobre as sele\xe7\xf5es de entidade armazenadas atualmente na cache de 4D Server' assim como sobre a execu\xe7\xe3o de sess\xf5es de usu\xe1rio."),(0,r.kt)("h2",n({},{id:"querypath-e-queryplan"}),"queryPath e queryPlan"),(0,r.kt)("p",null,"As sele\xe7\xf5es de entidade que s\xe3o geradas atrav\xe9s de pesquisas podem ter duas propriedades : ",(0,r.kt)("inlineCode",{parentName:"p"},"queryPlan")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"queryPath"),". Para calcular e retornar essas propriedades, precisa apenas adicionar um ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/queryplan"}),(0,r.kt)("inlineCode",{parentName:"a"},"$queryPlan"))," ou ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/querypath"}),(0,r.kt)("inlineCode",{parentName:"a"},"$queryPath"))," na peti\xe7\xe3o REST."),(0,r.kt)("p",null,"Por exemplo:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true')),(0,r.kt)("p",null,"Essas propriedades s\xe3o objetos que cont\xe9m informa\xe7\xe3o sobre como o servidor realiza pesquisas compostas internamente atrav\xe9s de dataclasses e rela\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"queryPlan"),": objeto contendo a descri\xe7\xe3o detalhada da pesquisa logo antes de ser executada (ou seja, a pesquisa planejada)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"queryPath"),": objeto contendo a descri\xe7\xe3o detalhada da pesquisa como foi realizada.")),(0,r.kt)("p",null,"A informa\xe7\xe3o registrada inclui o tipo de pesquisa (indexada e sequencial) e cada subpesquisa necess\xe1ria junto com opera\xe7\xf5es de conjun\xe7\xe3o. Query paths also contain the number of entities found and the time required to execute each search criterion. As rotas de acesso das peti\xe7\xf5es tamb\xe9m cont\xe9m o n\xfamero de entidades encontradas e o tempo necess\xe1rio para executar cada crit\xe9rio de pesquisa. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."))}u.isMDXComponent=!0}}]);