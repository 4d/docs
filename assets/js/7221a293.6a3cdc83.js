/*! For license information please see 7221a293.6a3cdc83.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25918],{853808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"info",title:"$info"},o=void 0,d={id:"REST/info",title:"$info",description:"Returns information about the entity sets currently stored in 4D Server's cache as well as user sessions",source:"@site/versioned_docs/version-20/REST/$info.md",sourceDirName:"REST",slug:"/REST/info",permalink:"/docs/20/REST/info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24info.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"info",title:"$info"},sidebar:"docs",previous:{title:"$directory",permalink:"/docs/20/REST/directory"},next:{title:"$upload",permalink:"/docs/20/REST/upload"}},c={},l=[{value:"Description",id:"description",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Example",id:"example",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Returns information about the entity sets currently stored in 4D Server's cache as well as user sessions"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"When you call this request for your project, you retrieve information in the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cacheSize"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"4D Server's cache size."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"usedCache"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"How much of 4D Server's cache has been used."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"entitySetCount"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of entity selections."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"entitySet"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"A collection in which each object contains information about each entity selection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ProgressInfo"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"A collection containing information about progress indicator information."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sessionInfo"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"A collection in which each object contains information about each user session."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"entityset",children:"entitySet"}),"\n",(0,s.jsx)(n.p,{children:"For each entity selection currently stored in 4D Server's cache, the following information is returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"A UUID that references the entity set."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataClass"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Name of the dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selectionSize"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of entities in the entity selection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sorted"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["Returns true if the set was sorted (using ",(0,s.jsx)(n.code,{children:"$orderby"}),") or false if it's not sorted."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refreshed"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"When the entity set was created or the last time it was used."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expires"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsxs)(n.td,{children:["When the entity set will expire (this date/time changes each time when the entity set is refreshed). The difference between refreshed and expires is the timeout for an entity set. This value is either two hours by default or what you defined using ",(0,s.jsx)(n.code,{children:"$timeout"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For information about how to create an entity selection, refer to ",(0,s.jsx)(n.code,{children:"$method=entityset"}),". If you want to remove the entity selection from 4D Server's cache, use ",(0,s.jsx)(n.code,{children:"$method=release"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["4D also creates its own entity selections for optimization purposes, so the ones you create with ",(0,s.jsx)(n.code,{children:"$method=entityset"})," are not the only ones returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IMPORTANT"}),"\nIf your project is in ",(0,s.jsx)(n.strong,{children:"Controlled Admin Access Mode"}),", you must first log into the project as a user in the Admin group."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sessioninfo",children:"sessionInfo"}),"\n",(0,s.jsxs)(n.p,{children:["For each user session, the following information is returned in the ",(0,s.jsx)(n.em,{children:"sessionInfo"})," collection:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sessionID"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"A UUID that references the session."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"userName"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"The name of the user who runs the session."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lifeTime"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"The lifetime of a user session in seconds (3600 by default)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expiration"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"The current expiration date and time of the user session."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Retrieve information about the entity sets currently stored in 4D Server's cache as well as user sessions:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/$info"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The progress indicator information listed after the entity selections is used internally by 4D."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,i={},l=null,h=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:h,props:i,_owner:d.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);