"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88419"],{976274:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>x,assets:()=>l,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"REST/lock","title":"$lock","description":"Locks and unlocks an entity using the pessimistic mechanism.","source":"@site/versioned_docs/version-20-R7/REST/$lock.md","sourceDirName":"REST","slug":"/REST/lock","permalink":"/docs/REST/lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"lock","title":"$lock"},"sidebar":"docs","previous":{"title":"$imageformat","permalink":"/docs/REST/imageformat"},"next":{"title":"$method","permalink":"/docs/REST/method"}}'),r=s("785893"),d=s("250065");let i={id:"lock",title:"$lock"},c=void 0,l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Locks and unlocks an entity using the ",(0,r.jsx)(n.a,{href:"/docs/ORDA/entities#pessimistic-lock",children:"pessimistic mechanism"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:"To lock an entity for other sessions and 4D processes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/?$lock=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"To unlock the entity for other sessions and 4D processes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/?$lock=false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsxs)(n.a,{href:"/docs/API/EntityClass#lock",children:[(0,r.jsx)(n.code,{children:"lockKindText"})," property"]}),' is "Locked by session".']}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The locks triggered by the REST API are put at the ",(0,r.jsx)(n.a,{href:"/docs/REST/authUsers#opening-sessions",children:"session"})," level."]}),"\n",(0,r.jsxs)(n.p,{children:["A locked entity is seen as ",(0,r.jsx)(n.em,{children:"locked"})," (i.e. lock / unlock / update / delete actions are not possible) by:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"other REST sessions"}),"\n",(0,r.jsx)(n.li,{children:"4D processes (client/server, remote datastore, standalone) running on the REST server."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"An entity locked by the REST API can only be unlocked:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["by its locker, i.e. a ",(0,r.jsx)(n.code,{children:"/?$lock=false"})," in the REST session that sets ",(0,r.jsx)(n.code,{children:"/?$lock=true"})]}),"\n",(0,r.jsxs)(n.li,{children:["or if the session's ",(0,r.jsx)(n.a,{href:"/docs/REST/directory",children:"inactivity timeout"})," is reached (the session is closed)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"?$lock"})," request returns a JSON object with ",(0,r.jsx)(n.code,{children:'"result"=true'})," if the lock operation was successful and ",(0,r.jsx)(n.code,{children:'"result"=false'})," if it failed."]}),"\n",(0,r.jsx)(n.p,{children:'The returned "__STATUS" object has the following properties:'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Available only in case of success:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Available only in case of error:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Error code, see below"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Description of the error, see below"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockKind"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Lock code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockKindText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockInfo"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Available only for a 4D process lock:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"task_id"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Process ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Session user name on the machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user4d_alias"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Name or alias of the 4D user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user4d_id"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"User id in the 4D database directory"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"host_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Machine name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"task_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Process name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"client_version"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Version of the client"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Available only for a REST session lock:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"host"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'URL that locked the entity (e.g. "127.0.0.1:8043")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"IPAddr"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'IP address of the locker (e.g. "127.0.0.1")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"recordNumber"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Record number of the locked record"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"userAgent"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The following values can be returned in the ",(0,r.jsx)(n.em,{children:"status"})," and ",(0,r.jsx)(n.em,{children:"statusText"})," properties of the ",(0,r.jsx)(n.em,{children:"__STATUS"})," object in case of error:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"status"}),(0,r.jsx)(n.th,{children:"statusText"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Stamp has changed"'}),(0,r.jsx)(n.td,{children:"The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Already locked"'}),(0,r.jsx)(n.td,{children:"The entity is locked by a pessimistic lock."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Other error"'}),(0,r.jsx)(n.td,{children:"A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Entity does not exist anymore"'}),(0,r.jsx)(n.td,{children:"The entity no longer exists in the data."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"We lock an entity in a first browser:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"result": true,\n	"__STATUS": {\n		"success": true\n	}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In a second browser (other session), we send the same request."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"result":false,\n	"__STATUS":{\n		"status":3,\n		"statusText":"Already Locked",\n		"lockKind":7,\n		"lockKindText":"Locked By Session",\n		"lockInfo":{\n			"host":"127.0.0.1:8043",\n			"IPAddr":"127.0.0.1",\n			"recordNumber": 7,\n			"userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."\n		}\n	}\n}\n'})})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);