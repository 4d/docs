"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96232"],{947183:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/license-usage","title":"License usage","description":"License usage : Collection","source":"@site/versioned_docs/version-20-R8/commands-legacy/license-usage.md","sourceDirName":"commands-legacy","slug":"/commands/license-usage","permalink":"/docs/commands/license-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flicense-usage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"license-usage","title":"License usage","slug":"/commands/license-usage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"License info","permalink":"/docs/commands/license-info"},"next":{"title":"Refresh license","permalink":"/docs/commands/refresh-license"}}'),r=s("785893"),i=s("250065");let d={id:"license-usage",title:"License usage",slug:"/commands/license-usage",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"session object for 4D client sessions",id:"session-object-for-4d-client-sessions",level:2},{value:"session object for SQL sessions",id:"session-object-for-sql-sessions",level:2},{value:"session object for REST sessions",id:"session-object-for-rest-sessions",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"License usage"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"A collection of objects with information on the retained licenses."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"License usage"})," command returns a collection of objects containing information on the retained licenses."]}),"\n",(0,r.jsx)(n.p,{children:"Each object in the returned collection has the following attributes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property name"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productId"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"ID of the license type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Name of the license type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productUsedCount"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Number of retained licenses (including this one) when the license was retained"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"productBalance"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Number of remaining licenses for the product (just after the action)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"globalProductUsedCount"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"When several servers are running on the same machine, shows the retained count for all of them"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Operation's unique ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Timestamp that indicates when the license was retained, in ISO 8601 format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reason"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"The reason/caller of this license usage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"session"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"Contains specific information about the retained license's session"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Depending on the type of session (4D client or REST for example), the contents of the ",(0,r.jsx)(n.em,{children:"session"})," object in the above table will vary. See below for details."]}),"\n",(0,r.jsx)(n.h2,{id:"session-object-for-4d-client-sessions",children:"session object for 4D client sessions"}),"\n",(0,r.jsxs)(n.p,{children:["Inside the returned collection for 4D sessions, each element contains a session object identical to the one returned by the ",(0,r.jsx)(n.a,{href:"/docs/commands/process-activity",children:"Process activity"})," command:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property name"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Text (enum)"}),(0,r.jsx)(n.td,{children:'Session type. Possible values: "remote", "storedProcedure", "web", "rest"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"machineName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Name of the remote machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"systemUserName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Name of the system session opened on the remote machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IPAddress"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"IP address of the remote machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hostType"}),(0,r.jsx)(n.td,{children:"Text (enum)"}),(0,r.jsx)(n.td,{children:'Host type. Possible values: "windows", "mac", "browser"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"creationDateTime"}),(0,r.jsx)(n.td,{children:"Date ISO 8601"}),(0,r.jsx)(n.td,{children:"Date and time of connection of the remote machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"Text (enum)"}),(0,r.jsx)(n.td,{children:'Session state. Possible values: "active", "postponed", "sleeping"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Session UUID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"persistentID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Session's persistent ID"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"session-object-for-sql-sessions",children:"session object for SQL sessions"}),"\n",(0,r.jsx)(n.p,{children:"This table details the contents of the session object for SQL sessions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property name"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IPAddress"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"IP address of the session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userAgent"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User Agent"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User Name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userId"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"User ID"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"session-object-for-rest-sessions",children:"session object for REST sessions"}),"\n",(0,r.jsx)(n.p,{children:"This table details the contents of the session object for REST sessions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property name"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User Name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"REST session ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IPAddress"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"ID of the client that initiated the REST session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isDatastore"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"True if the REST request comes from a datastore"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1782"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);