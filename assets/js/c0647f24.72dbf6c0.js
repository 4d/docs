"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22558"],{992628:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"REST/querypath","title":"$querypath","description":"Returns the query as it was executed by 4D Server (e.g., $querypath=true)","source":"@site/versioned_docs/version-18/REST/$querypath.md","sourceDirName":"REST","slug":"/REST/querypath","permalink":"/docs/18/REST/querypath","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"querypath","title":"$querypath"},"sidebar":"docs","previous":{"title":"$orderby","permalink":"/docs/18/REST/orderby"},"next":{"title":"$queryplan","permalink":"/docs/18/REST/queryplan"}}'),s=t("785893"),o=t("250065");let i={id:"querypath",title:"$querypath"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Returns the query as it was executed by 4D Server (",(0,s.jsx)(n.em,{children:"e.g."}),", ",(0,s.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$querypath"})," returns the query as it was executed by 4D Server. If, for example, a part of the query passed returns no entities, the rest of the query is not executed. The query requested is optimized as you can see in this ",(0,s.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about query paths, refer to ",(0,s.jsx)(n.a,{href:"/docs/18/REST/genInfo#querypath-and-queryplan",children:"queryPlan and queryPath"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In the steps collection, there is an object with the following properties defining the query executed:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:'Actual query executed or "AND" when there are multiple steps'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of milliseconds needed to execute the query"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordsfounds"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of records found"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"steps"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"An collection with an object defining the subsequent step of the query path"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"If you passed the following query:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"And no entities were found, the following query path would be returned, if you write the following:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" GET  /rest/$querypath"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If, on the other hand, the first query returns more than one entity, the second one will be executed. If we execute the following query:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"If at least one entity was found, the following query path would be returned, if you write the following:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Respose"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);