"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11047],{542559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(474848),o=n(28453);const s={id:"compute",title:"$compute"},i=void 0,c={id:"REST/compute",title:"$compute",description:"Calculate on specific attributes (e.g., Employee/salary/?$compute=sum) or in the case of an Object attribute (e.g., Employee/objectAtt.property1/?$compute=sum)",source:"@site/versioned_docs/version-20/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/20/REST/compute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/20/REST/binary"},next:{title:"$distinct",permalink:"/docs/20/REST/distinct"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Calculate on specific attributes (",(0,r.jsx)(t.em,{children:"e.g."}),", ",(0,r.jsx)(t.code,{children:"Employee/salary/?$compute=sum)"})," or in the case of an Object attribute (",(0,r.jsx)(t.em,{children:"e.g."}),", Employee/objectAtt.property1/?$compute=sum)"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"This parameter allows you to do calculations on your data."}),"\n",(0,r.jsx)(t.p,{children:"If you want to perform a calculation on an attribute, you write the following:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to pass an Object attribute, you must pass one of its property. For example:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,r.jsx)(t.p,{children:"You can use any of the following keywords:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Keyword"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$all"}),(0,r.jsx)(t.td,{children:"A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"average"}),(0,r.jsx)(t.td,{children:"Get the average on a numerical attribute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"count"}),(0,r.jsx)(t.td,{children:"Get the total number in the collection or dataclass (in both cases you must specify an attribute)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"Get the minimum value on a numerical attribute or the lowest value in an attribute of type String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"Get the maximum value on a numerical attribute or the highest value in an attribute of type String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sum"}),(0,r.jsx)(t.td,{children:"Get the sum on a numerical attribute"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"If you want to get all the computations for an attribute of type Number, you can write:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get all the computations for an attribute of type String, you can write:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If you want to just get one calculation on an attribute, you can write the following:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"235000"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to perform a calculation on an Object attribute, you can write the following:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,r.jsx)(t.p,{children:"Response:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"45"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);