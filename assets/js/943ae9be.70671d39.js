"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2309],{644280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=n(474848),s=n(28453);const c={id:"distinct",title:"$distinct"},o=void 0,r={id:"REST/distinct",title:"$distinct",description:'Returns the distinct values for a specific attribute in a collection (e.g., Company/name?$filter="name=a*"&$distinct=true)',source:"@site/versioned_docs/version-19/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/19/REST/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/19/REST/compute"},next:{title:"$entityset",permalink:"/docs/19/REST/entityset"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Returns the distinct values for a specific attribute in a collection (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$distinct"})," allows you to return a collection containing the distinct values for a query on a specific attribute. Only one attribute in the dataclass can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also use ",(0,i.jsx)(t.code,{children:"$skip"})," and ",(0,i.jsx)(t.code,{children:"$top/$limit"})," as well, if you'd like to navigate the selection before it's placed in an array."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:'In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(296540);const s={},c=i.createContext(s);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);