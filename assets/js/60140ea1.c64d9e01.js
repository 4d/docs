"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64442"],{392884:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"ServerWindow/real-time-monitor","title":"Real Time Monitor Page","description":"The Real Time Monitor page monitors the progress of \\"long\\" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.","source":"@site/versioned_docs/version-20-R7/ServerWindow/real-time-monitor.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/real-time-monitor","permalink":"/docs/ServerWindow/real-time-monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Freal-time-monitor.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"real-time-monitor","title":"Real Time Monitor Page"},"sidebar":"docs","previous":{"title":"HTTP Server Page","permalink":"/docs/ServerWindow/http-server"},"next":{"title":"Administration from Remote Machines","permalink":"/docs/ServerWindow/remote-admin"}}'),t=o("785893"),r=o("250065");let s={id:"real-time-monitor",title:"Real Time Monitor Page"},a=void 0,l={},d=[{value:"Advanced mode",id:"advanced-mode",level:2},{value:"Snapshot button",id:"snapshot-button",level:2},{value:"Display operations at least 5 seconds",id:"display-operations-at-least-5-seconds",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(837846).Z+"",width:"700",height:"472"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A line is added for each long operation performed on the data. This line automatically disappears when the operation is complete (you can check the ",(0,t.jsx)(n.strong,{children:"Display operations at least 5 seconds"})," option to keep quick operations on screen for 5 seconds, see below)."]}),"\n",(0,t.jsx)(n.p,{children:"The following information is provided for each line:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Start Time"}),': starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Duration"})," (ms): duration in milliseconds of operation in progress"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Information"}),": title of operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Details"}),": this area displays detailed information which will vary according to the type of operation selected. More specifically:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Created on"}),': indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operation Details"}),": Operation type and (for query operations) query plan."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sub-operations"})," (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Process Details"}),": Additional information concerning the table, field, process or client, depending on the type of operation"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Real-time monitoring page uses the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1277.html",children:(0,t.jsx)(n.code,{children:"ACTIVITY SNAPSHOT"})})," command internally. More information can be found in this command description."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The page is active and updated permanently as soon as it is displayed. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["clicking on the ",(0,t.jsx)(n.strong,{children:"Pause"})," button,"]}),"\n",(0,t.jsx)(n.li,{children:"clicking in the list,"}),"\n",(0,t.jsx)(n.li,{children:"pressing the space bar."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['When you pause the page, a "PAUSED" message appears and the button label changes to ',(0,t.jsx)(n.strong,{children:"Resume"}),".\nYou can resume monitoring of the operations by performing the same action as for pausing."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-mode",children:"Advanced mode"}),"\n",(0,t.jsx)(n.p,{children:"The RTM page can display additional information, if necessary, for each listed operation."}),"\n",(0,t.jsxs)(n.p,{children:["To access the advanced mode for an operation, press ",(0,t.jsx)(n.strong,{children:"Shift"}),' and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the ',(0,t.jsx)(n.code,{children:"ACTIVITY SNAPSHOT"})," command). Available information depends on the operation selected."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of information displayed in standard mode:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(644565).Z+"",width:"998",height:"293"})}),"\n",(0,t.jsxs)(n.p,{children:["In advanced mode (",(0,t.jsx)(n.strong,{children:"Shift+Click"})," on the operation), additional information is displayed:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(498218).Z+"",width:"999",height:"288"})}),"\n",(0,t.jsx)(n.h2,{id:"snapshot-button",children:"Snapshot button"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Snapshot"})," button allows you to copy to the clipboard all the operations displayed in the RTM panel, as well as their related details (process and sub-operation info):"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(865428).Z+"",width:"140",height:"40"})}),"\n",(0,t.jsx)(n.h2,{id:"display-operations-at-least-5-seconds",children:"Display operations at least 5 seconds"}),"\n",(0,t.jsxs)(n.p,{children:["If you check the ",(0,t.jsx)(n.strong,{children:"Display operations at least 5 seconds"})," option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. Retained operations appear dimmed in the operation list. This feature is useful for getting information about operations that execute very quickly."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},644565:function(e,n,o){o.d(n,{Z:function(){return i}});let i=o.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},498218:function(e,n,o){o.d(n,{Z:function(){return i}});let i=o.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},837846:function(e,n,o){o.d(n,{Z:function(){return i}});let i=o.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},865428:function(e,n,o){o.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var i=o(667294);let t={},r=i.createContext(t);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);