"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77962],{614663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(474848),r=s(28453);const i={id:"lock",title:"$lock"},d=void 0,c={id:"REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/versioned_docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/19/REST/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/19/REST/imageformat"},next:{title:"$method",permalink:"/docs/19/REST/method"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Locks and unlocks an entity using the ",(0,t.jsx)(n.a,{href:"/docs/19/ORDA/entities#pessimistic-lock",children:"pessimistic mechanism"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:"To lock an entity for other sessions and 4D processes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/?$lock=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"To unlock the entity for other sessions and 4D processes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/?$lock=false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsxs)(n.a,{href:"/docs/19/API/EntityClass#lock",children:[(0,t.jsx)(n.code,{children:"lockKindText"})," property"]}),' is "Locked by session".']}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The locks triggered by the REST API are put at the ",(0,t.jsx)(n.a,{href:"/docs/19/REST/authUsers#opening-sessions",children:"session"})," level."]}),"\n",(0,t.jsxs)(n.p,{children:["A locked entity is seen as ",(0,t.jsx)(n.em,{children:"locked"})," (i.e. lock / unlock / update / delete actions are not possible) by:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"other REST sessions"}),"\n",(0,t.jsx)(n.li,{children:"4D processes (client/server, remote datastore, standalone) running on the REST server."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An entity locked by the REST API can only be unlocked:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["by its locker, i.e. a ",(0,t.jsx)(n.code,{children:"/?$lock=false"})," in the REST session that sets ",(0,t.jsx)(n.code,{children:"/?$lock=true"})]}),"\n",(0,t.jsxs)(n.li,{children:["or if the session's ",(0,t.jsx)(n.a,{href:"/docs/19/REST/directory",children:"inactivity timeout"})," is reached (the session is closed)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"?$lock"})," request returns a JSON object with ",(0,t.jsx)(n.code,{children:'"result"=true'})," if the lock operation was successful and ",(0,t.jsx)(n.code,{children:'"result"=false'})," if it failed."]}),"\n",(0,t.jsx)(n.p,{children:'The returned "__STATUS" object has the following properties:'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Available only in case of success:"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Available only in case of error:"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Error code, see below"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Description of the error, see below"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lockKind"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Lock code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lockKindText"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process'})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The following values can be returned in the ",(0,t.jsx)(n.em,{children:"status"})," and ",(0,t.jsx)(n.em,{children:"statusText"})," properties of the ",(0,t.jsx)(n.em,{children:"__STATUS"})," object in case of error:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"status"}),(0,t.jsx)(n.th,{children:"statusText"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:'"Stamp has changed"'}),(0,t.jsx)(n.td,{children:"The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:'"Already locked"'}),(0,t.jsx)(n.td,{children:"The entity is locked by a pessimistic lock."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:'"Other error"'}),(0,t.jsx)(n.td,{children:"A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:'"Entity does not exist anymore"'}),(0,t.jsx)(n.td,{children:"The entity no longer exists in the data."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"We lock an entity in a first browser:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n\t"result": true,\n\t"__STATUS": {\n\t\t"success": true\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In a second browser (other session), we send the same request."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n\t"result":false,\n\t"__STATUS":{\n\t\t"status":3,\n\t\t"statusText":"Already Locked",\n\t\t"lockKind":7,\n\t\t"lockKindText":"Locked By Session",\n\t}\n}\n'})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);