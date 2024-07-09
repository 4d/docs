/*! For license information please see c2beb65f.c38b98c4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36358],{159710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(474848),r=t(28453);const s={id:"atomic_$atonce",title:"$atomic/$atOnce"},a=void 0,i={id:"REST/atomic_$atonce",title:"$atomic/$atOnce",description:"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled.",source:"@site/versioned_docs/version-20-R5/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/REST/atomic_$atonce",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/REST/asArray"},next:{title:"$attributes",permalink:"/docs/REST/attributes"}},c={},l=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled."}),"\n",(0,o.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["When you have multiple actions together, you can use ",(0,o.jsx)(n.code,{children:"$atomic/$atOnce"})," to make sure that none of the actions are completed if one of them fails. You can use either ",(0,o.jsx)(n.code,{children:"$atomic"})," or ",(0,o.jsx)(n.code,{children:"$atOnce"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"Example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"We call the following REST request in a transaction."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"POST data"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"We get the following error in the second entity and therefore the first entity is not saved either:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the ",(0,o.jsx)(n.em,{children:"timestamp (__STAMP)"})," was not modified either. If we reload the entity, we will see the previous value."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var o=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,s={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(296540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);