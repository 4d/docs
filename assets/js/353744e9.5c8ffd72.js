/*! For license information please see 353744e9.5c8ffd72.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87807],{748171:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(474848),o=n(28453);const a={id:"asArray",title:"$asArray"},s=void 0,l={id:"REST/asArray",title:"$asArray",description:"Returns the result of a query in an array (i.e. a collection) instead of a JSON object.",source:"@site/versioned_docs/version-20/REST/$asArray.md",sourceDirName:"REST",slug:"/REST/asArray",permalink:"/docs/20/REST/asArray",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"asArray",title:"$asArray"},sidebar:"docs",previous:{title:"dataClass",permalink:"/docs/20/REST/dataClass"},next:{title:"$atomic/$atOnce",permalink:"/docs/20/REST/atomic_$atonce"}},i={},c=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function d(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Returns the result of a query in an array (i.e. a collection) instead of a JSON object."}),"\n",(0,r.jsx)(e.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["If you want to receive the response in an array, you just have to add ",(0,r.jsx)(e.code,{children:"$asArray"})," to your REST request (",(0,r.jsx)(e.em,{children:"e.g."}),", ",(0,r.jsx)(e.code,{children:"$asArray=true"}),")."]}),"\n",(0,r.jsx)(e.h2,{id:"Example",children:"Example"}),"\n",(0,r.jsx)(e.p,{children:"Here is an example or how to receive the response in an array."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'[\n\t{\n\t\t"__KEY": 15,\n\t\t"__STAMP": 0,\n\t\t"ID": 15,\n\t\t"name": "Alpha North Yellow",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 82000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t},\n\t{\n\t\t"__KEY": 34,\n\t\t"__STAMP": 0,\n\t\t"ID": 34,\n\t\t"name": "Astral Partner November",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 90000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t},\n\t{\n\t\t"__KEY": 47,\n\t\t"__STAMP": 0,\n\t\t"ID": 47,\n\t\t"name": "Audio Production Uniform",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 28000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t}\n]\n'})}),"\n",(0,r.jsx)(e.p,{children:"The same data in its default JSON format:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n\t"__entityModel": "Company",\n\t"__GlobalStamp": 50,\n\t"__COUNT": 52,\n\t"__FIRST": 0,\n\t"__ENTITIES": [\n\t\t{\n\t\t\t"__KEY": "15",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 15,\n\t\t\t"name": "Alpha North Yellow",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 82000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(15)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"__KEY": "34",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 34,\n\t\t\t"name": "Astral Partner November",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 90000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(34)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"__KEY": "47",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 47,\n\t\t\t"name": "Audio Production Uniform",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 28000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(47)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n"__SENT": 3\n}\n'})})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},221020:(t,e,n)=>{var r=n(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(d=e.ref),e)s.call(e,r)&&!i.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===a[r]&&(a[r]=e[r]);return{$$typeof:o,type:t,key:c,ref:d,props:a,_owner:l.current}}e.Fragment=a,e.jsx=c,e.jsxs=c},474848:(t,e,n)=>{t.exports=n(221020)},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>l});var r=n(296540);const o={},a=r.createContext(o);function s(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);