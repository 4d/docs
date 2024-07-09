/*! For license information please see 9f58026c.647d8e86.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96454],{591250:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(474848),s=r(28453);const i={id:"querypath",title:"$querypath"},o=void 0,l={id:"REST/querypath",title:"$querypath",description:"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server (par exemple, $querypath=true)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$querypath.md",sourceDirName:"REST",slug:"/REST/querypath",permalink:"/docs/fr/19/REST/querypath",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"querypath",title:"$querypath"},sidebar:"docs",previous:{title:"$orderby",permalink:"/docs/fr/19/REST/orderby"},next:{title:"$queryplan",permalink:"/docs/fr/19/REST/queryplan"}},c={},d=[{value:"Description",id:"Description",level:2},{value:"Exemple",id:"Exemple",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server (par exemple, ",(0,t.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$querypath"})," retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server. Si, par exemple, une partie de la requ\xeate pass\xe9e ne retourne aucune entit\xe9, le reste de la requ\xeate n'est pas ex\xe9cut\xe9. La requ\xeate lanc\xe9e est optimis\xe9e, comme vous pouvez le voir dans ce $ ",(0,t.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations sur les chemins de requ\xeate, reportez-vous \xe0 ",(0,t.jsx)(n.a,{href:"/docs/fr/19/REST/genInfo#querypath-and-queryplan",children:"queryPlan ete queryPath"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Dans la collection d'\xe9tapes, il existe un objet avec les propri\xe9t\xe9s suivantes qui d\xe9finissent la requ\xeate ex\xe9cut\xe9e :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:'Requ\xeate ex\xe9cut\xe9e ou "AND" lorsqu\'il existe plusieurs \xe9tapes'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre de millisecondes n\xe9cessaires pour ex\xe9cuter la requ\xeate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recordsfounds"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre d'enregistrements trouv\xe9s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"steps"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Une collection avec un objet d\xe9finissant l'\xe9tape suivante du chemin de la requ\xeate"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"Exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Si vous ex\xe9cutez la requ\xeate suivante :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,t.jsx)(n.p,{children:"Et si aucune entit\xe9 n'a \xe9t\xe9 trouv\xe9e, le chemin de la requ\xeate suivant sera retourn\xe9 si vous saisissez ce qui suit :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'__queryPath: {\n\n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"En revanche, si la premi\xe8re requ\xeate retourne plus d'une entit\xe9, la seconde sera ex\xe9cut\xe9e. Si nous ex\xe9cutons la requ\xeate suivante :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,t.jsx)(n.p,{children:"Si au moins une entit\xe9 a \xe9t\xe9 trouv\xe9e, le chemin de la requ\xeate suivant sera retourn\xe9 si vous saisissez ce qui suit :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,u=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:u,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(296540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);