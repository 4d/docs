/*! For license information please see 1aad65b0.1c9f3d6c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66563],{858814:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=r(474848),l=r(28453);const s={id:"queryplan",title:"$queryplan"},o=void 0,i={id:"REST/queryplan",title:"$queryplan",description:"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 pass\xe9e au 4D Server (par exemple, $queryplan=true)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/fr/20/REST/queryplan",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24queryplan.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/fr/20/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/fr/20/REST/savedfilter"}},a={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"R\xe9ponse :",id:"r\xe9ponse-",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Retourne la requ\xeate telle qu'elle a \xe9t\xe9 pass\xe9e au 4D Server (par exemple, ",(0,t.jsx)(n.code,{children:"$queryplan=true"}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"$queryplan retourne le plan de la requ\xeate telle qu'il a \xe9t\xe9 ex\xe9cut\xe9 par 4D Server."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"item"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Requ\xeate ex\xe9cut\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subquery"}),(0,t.jsx)(n.td,{children:"Tableau"}),(0,t.jsx)(n.td,{children:"S'il existe une sous-requ\xeate, un objet suppl\xe9mentaire contenant une propri\xe9t\xe9 d'\xe9l\xe9ment (comme celle indiqu\xe9e ci-dessus)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations sur les plans de requ\xeate, reportez-vous \xe0 ",(0,t.jsx)(n.a,{href:"/docs/fr/20/REST/genInfo#querypath-and-queryplan",children:"queryPlan ete queryPath"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Si vous passez la requ\xeate suivante :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true'})}),"\n",(0,t.jsx)(n.h4,{id:"r\xe9ponse-",children:"R\xe9ponse :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,s={},u=null,d=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:l,type:e,key:u,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=u,n.jsxs=u},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(296540);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);