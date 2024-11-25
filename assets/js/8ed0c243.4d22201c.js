"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18277"],{504483:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>i});var n=JSON.parse('{"id":"commands-legacy/kill-worker","title":"KILL WORKER","description":"KILL WORKER {( process )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/kill-worker.md","sourceDirName":"commands-legacy","slug":"/commands/kill-worker","permalink":"/docs/commands/kill-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fkill-worker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"kill-worker","title":"KILL WORKER","slug":"/commands/kill-worker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PROCESS VARIABLE","permalink":"/docs/commands/get-process-variable"},"next":{"title":"New signal","permalink":"/docs/commands/new-signal"}}'),o=r("785893"),t=r("250065");let i={id:"kill-worker",title:"KILL WORKER",slug:"/commands/kill-worker",displayed_sidebar:"docs"},a=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"KILL WORKER"})," {( ",(0,o.jsx)(s.em,{children:"process"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Parameter"}),(0,o.jsx)(s.th,{children:"Type"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"process"}),(0,o.jsx)(s.td,{children:"Text, Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Number or name of process to kill (kills current process if omitted)"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.strong,{children:"KILL WORKER"})," command posts a message to the worker process whose name or number you passed in ",(0,o.jsx)(s.em,{children:"process"}),", asking it to ignore any pending messages and to terminate its execution as soon as the current task ends."]}),"\n",(0,o.jsxs)(s.p,{children:["This command can only be used with worker processes. For more information, please refer to the ",(0,o.jsx)(s.em,{children:"About workers"})," section."]}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.em,{children:"process"}),", you pass either the name or number of the worker process whose execution needs to be terminated. If no worker with the specified process name or number exists, ",(0,o.jsx)(s.strong,{children:"KILL WORKER"})," does nothing.",(0,o.jsx)(s.br,{}),"\nIf you do not pass any parameter, ",(0,o.jsx)(s.strong,{children:"KILL WORKER"})," applies to the currently running worker and is therefore equivalent to ",(0,o.jsxs)(s.em,{children:[(0,o.jsx)(s.em,{children:"KILL WORKER"})," (Current process)"]}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["If ",(0,o.jsx)(s.strong,{children:"KILL WORKER"})," is applied to a worker that was not created explicitly using the ",(0,o.jsx)(s.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"})," command (for example, the main application worker), it only asks this worker to empty its message box."]}),"\n",(0,o.jsxs)(s.p,{children:["If the ",(0,o.jsx)(s.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"})," command is called to send a message to a worker that was just killed by ",(0,o.jsx)(s.strong,{children:"KILL WORKER"}),", a new process is started. To make sure that there is only one process running at a time for a worker, the new process will start after the previous one is actually terminated. Note however that if ",(0,o.jsx)(s.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"})," is called from a worker to send itself a message whereas it has just been killed by ",(0,o.jsx)(s.strong,{children:"KILL WORKER"}),", the command does nothing."]}),"\n",(0,o.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(s.p,{children:"The following code (executed from a form, for example) triggers the termination of a worker:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0CALL WORKER(vWorkerName;"theWorker";"end")\n'})}),"\n",(0,o.jsxs)(s.p,{children:["In the worker method (",(0,o.jsx)(s.em,{children:"theWorker"}),"), you add some code to handle this situation:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//theWorker method\n\xa0var $1 : Text\xa0//param\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1="call")\xa0//the worker is called\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//do something\n\xa0\xa0\xa0\xa0:($1="end")\xa0//the worker is asked to kill itself\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0KILL WORKER\n\xa0End case\n'})}),"\n",(0,o.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"About workers"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/commands/current-process-name",children:"Current process name"})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return i}});var n=r(667294);let o={},t=n.createContext(o);function i(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);