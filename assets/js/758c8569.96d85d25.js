/*! For license information please see 758c8569.96d85d25.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28586],{450453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(474848),s=t(28453);const o={id:"querypath",title:"$querypath"},i=void 0,d={id:"REST/querypath",title:"$querypath",description:"Returns the query as it was executed by 4D Server (e.g., $querypath=true)",source:"@site/versioned_docs/version-20/REST/$querypath.md",sourceDirName:"REST",slug:"/REST/querypath",permalink:"/docs/20/REST/querypath",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"querypath",title:"$querypath"},sidebar:"docs",previous:{title:"$orderby",permalink:"/docs/20/REST/orderby"},next:{title:"$queryplan",permalink:"/docs/20/REST/queryplan"}},c={},l=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Returns the query as it was executed by 4D Server (",(0,r.jsx)(n.em,{children:"e.g."}),", ",(0,r.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$querypath"})," returns the query as it was executed by 4D Server. If, for example, a part of the query passed returns no entities, the rest of the query is not executed. The query requested is optimized as you can see in this ",(0,r.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about query paths, refer to ",(0,r.jsx)(n.a,{href:"/docs/20/REST/genInfo#querypath-and-queryplan",children:"queryPlan and queryPath"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In the steps collection, there is an object with the following properties defining the query executed:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'Actual query executed or "AND" when there are multiple steps'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Number of milliseconds needed to execute the query"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recordsfounds"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Number of records found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"steps"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"An collection with an object defining the subsequent step of the query path"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"Example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"If you passed the following query:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"And no entities were found, the following query path would be returned, if you write the following:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:" GET  /rest/$querypath"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"If, on the other hand, the first query returns more than one entity, the second one will be executed. If we execute the following query:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"If at least one entity was found, the following query path would be returned, if you write the following:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Respose"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,h=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:h,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(296540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);