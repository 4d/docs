"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73032],{446610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(474848),o=t(28453);const i={id:"atomic_$atonce",title:"$atomic/$atOnce"},r=void 0,a={id:"REST/atomic_$atonce",title:"$atomic/$atOnce",description:"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled.",source:"@site/versioned_docs/version-19/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/19/REST/atomic_$atonce",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/19/REST/asArray"},next:{title:"$attributes",permalink:"/docs/19/REST/attributes"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["When you have multiple actions together, you can use ",(0,s.jsx)(n.code,{children:"$atomic/$atOnce"})," to make sure that none of the actions are completed if one of them fails. You can use either ",(0,s.jsx)(n.code,{children:"$atomic"})," or ",(0,s.jsx)(n.code,{children:"$atOnce"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"We call the following REST request in a transaction."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST data"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"We get the following error in the second entity and therefore the first entity is not saved either:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the ",(0,s.jsx)(n.em,{children:"timestamp (__STAMP)"})," was not modified either. If we reload the entity, we will see the previous value."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(296540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);