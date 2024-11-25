"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91837"],{373686:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>a,assets:()=>d,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"REST/querypath","title":"$querypath","description":"Retourne la requ\xeate telle qu\'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server (par exemple, $querypath=true)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/$querypath.md","sourceDirName":"REST","slug":"/REST/querypath","permalink":"/docs/fr/REST/querypath","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"querypath","title":"$querypath"},"sidebar":"docs","previous":{"title":"$orderby","permalink":"/docs/fr/REST/orderby"},"next":{"title":"$queryplan","permalink":"/docs/fr/REST/queryplan"}}'),s=t("785893"),i=t("250065");let o={id:"querypath",title:"$querypath"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server (par exemple, ",(0,s.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$querypath"})," retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server. Si, par exemple, une partie de la requ\xeate pass\xe9e ne retourne aucune entit\xe9, le reste de la requ\xeate n'est pas ex\xe9cut\xe9. La requ\xeate lanc\xe9e est optimis\xe9e, comme vous pouvez le voir dans ce $ ",(0,s.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour plus d'informations sur les chemins de requ\xeate, reportez-vous \xe0 ",(0,s.jsx)(n.a,{href:"/docs/fr/REST/genInfo#querypath-and-queryplan",children:"queryPlan ete queryPath"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Dans la collection d'\xe9tapes, il existe un objet avec les propri\xe9t\xe9s suivantes qui d\xe9finissent la requ\xeate ex\xe9cut\xe9e :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:'Requ\xeate ex\xe9cut\xe9e ou "AND" lorsqu\'il existe plusieurs \xe9tapes'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Nombre de millisecondes n\xe9cessaires pour ex\xe9cuter la requ\xeate"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordsfounds"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Nombre d'enregistrements trouv\xe9s"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"steps"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"Une collection avec un objet d\xe9finissant l'\xe9tape suivante du chemin de la requ\xeate"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Si vous ex\xe9cutez la requ\xeate suivante :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"Et si aucune entit\xe9 n'a \xe9t\xe9 trouv\xe9e, le chemin de la requ\xeate suivant sera retourn\xe9 si vous saisissez ce qui suit :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" GET  /rest/$querypath"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"En revanche, si la premi\xe8re requ\xeate retourne plus d'une entit\xe9, la seconde sera ex\xe9cut\xe9e. Si nous ex\xe9cutons la requ\xeate suivante :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"Si au moins une entit\xe9 a \xe9t\xe9 trouv\xe9e, le chemin de la requ\xeate suivant sera retourn\xe9 si vous saisissez ce qui suit :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);