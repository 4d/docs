"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61274"],{297971:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/call-worker","title":"CALL WORKER","description":"CALL WORKER ( process ; formula {; param}{; param2 ; ... ; paramN} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/call-worker.md","sourceDirName":"commands-legacy","slug":"/commands/call-worker","permalink":"/docs/20-R8/commands/call-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-worker.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"call-worker","title":"CALL WORKER","slug":"/commands/call-worker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process (Communications)","permalink":"/docs/20-R8/commands/theme/Process-Communications"},"next":{"title":"CLEAR SEMAPHORE","permalink":"/docs/20-R8/commands/clear-semaphore"}}'),t=r("785893"),o=r("250065");let a={id:"call-worker",title:"CALL WORKER",slug:"/commands/call-worker",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"CALL WORKER"})," ( ",(0,t.jsx)(s.em,{children:"process"})," ; ",(0,t.jsx)(s.em,{children:"formula"})," {; ",(0,t.jsx)(s.em,{children:"param"}),"}{; ",(0,t.jsx)(s.em,{children:"param2"})," ; ... ; ",(0,t.jsx)(s.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Text, Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Name or number of worker process"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"formula"}),(0,t.jsx)(s.td,{children:"Object, Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Formula object or Name of project method"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"param"}),(0,t.jsx)(s.td,{children:"Expression"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Parameter(s) passed to formula"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"CALL WORKER"})," command creates or calls the worker process whose name or ID you passed in ",(0,t.jsx)(s.em,{children:"process"}),", and requests the execution of the code designated by ",(0,t.jsx)(s.em,{children:"formula"})," in its context with the optional ",(0,t.jsx)(s.em,{children:"param"})," parameter(s)."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"CALL WORKER"})," command encapsulates the ",(0,t.jsx)(s.em,{children:"param"})," parameters into a message and posts it in the worker's message box. For more information on worker processes, please refer to the ",(0,t.jsx)(s.em,{children:"About workers"})," section."]}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.em,{children:"process"})," parameter, you can specify the worker using its process name or its process number:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If you pass the number of a process that does not exist, or if the process specified was not created by ",(0,t.jsx)(s.strong,{children:"CALL WORKER"})," nor by 4D itself (such as the main application process), ",(0,t.jsx)(s.strong,{children:"CALL WORKER"})," does nothing."]}),"\n",(0,t.jsx)(s.li,{children:"If you pass the name of a process that does not exist, a new worker process is created."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The ",(0,t.jsx)(s.strong,{children:"main process"}),", created by 4D for the user interface and the application mode when a database is opened, is a worker process and can be called by ",(0,t.jsx)(s.strong,{children:"CALL WORKER"}),". However, since its name can vary depending on the 4D language, it is preferable to designate this process using its number (always 1) when you use ",(0,t.jsx)(s.strong,{children:"CALL WORKER"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The worker process appears in the list of processes of the Runtime Explorer and is returned by the ",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/process-info",children:"Process info"})," command when applied to this process."]}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.em,{children:"formula"}),", you designate the 4D code to execute in the context of the worker process. You can pass either:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["a ",(0,t.jsx)(s.strong,{children:"formula object"})," (see ",(0,t.jsx)(s.em,{children:"Formula Objects"}),"). Formula objects can encapsulate any executable expressions, including functions and project methods;"]}),"\n",(0,t.jsxs)(s.li,{children:["a ",(0,t.jsx)(s.strong,{children:"string"})," containing the name of a project method. You can pass an empty string; in this case, the worker executes the method that was originally used to start its process, if any (i.e., the startup method of the worker).",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Note:"})," It is not possible to pass an empty string in ",(0,t.jsx)(s.em,{children:"formula"})," when the command calls the main process (process number 1) since it was not started using a project method. As a result, ",(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.em,{children:"CALL WORKER"}),' (1;"")']})," does nothing."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You can also pass parameters to the ",(0,t.jsx)(s.em,{children:"formula"})," using one or more optional ",(0,t.jsx)(s.em,{children:"param"})," parameters. You can use sequential parameters ($1, $2...) (../Concepts/parameters.md#sequential-parameters) or, if the formula expression is a function or a project method, ",(0,t.jsx)(s.a,{href:"/docs/20-R8/Concepts/parameters",children:"named parameters"}),". Upon starting execution in the context of the process, the process formula receives the parameter values either in the named parameters, or in ",(0,t.jsx)(s.em,{children:"$1"}),", ",(0,t.jsx)(s.em,{children:"$2"}),", and so on. Remember that arrays cannot be passed as parameters. Furthermore, in the context of the ",(0,t.jsx)(s.strong,{children:"CALL WORKER"})," command, the following additional considerations need to be taken into account:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Pointers to tables or fields are allowed."}),"\n",(0,t.jsx)(s.li,{children:"Pointers to variables, particularly local and process variables, are not recommended since these variables may be undefined at the moment they are being accessed by the process method."}),"\n",(0,t.jsxs)(s.li,{children:["Standard object or collection type parameters are passed ",(0,t.jsx)(s.strong,{children:"by copy"}),", ",(0,t.jsx)(s.em,{children:"i.e."})," 4D will create a copy of the object or the collection in the destination process if the worker is in a process different from the one calling the ",(0,t.jsx)(s.strong,{children:"CALL WORKER"})," command. In this context, if you want to pass an object or collection parameter ",(0,t.jsx)(s.strong,{children:"by reference"}),", you must use a shared object or collection (see ",(0,t.jsx)(s.em,{children:"Shared objects and shared collections"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["A worker process remains alive until the application is closed or the ",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/kill-worker",children:"KILL WORKER"})," command is explicitly called for it. To free up memory, do not forget to call this command once a worker process is no longer needed."]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"In a form, a button starts a computation: for example, statistics for the selected year. The button creates or calls a worker process that computes the data while the user can continue to work in the form."}),"\n",(0,t.jsx)(s.p,{children:"The method of the button is:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//call the worker myWorker with the parameter\n\xa0var $vYear: Integer\n\xa0$vYear:=2015\xa0// could have been selected by the user in the form\n\xa0CALL WORKER("myWorker";Formula(workerMethod);$vYear;Current form window)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The code of ",(0,t.jsx)(s.em,{children:"workerMethod"})," is:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// this is the method of the worker\n\xa0\xa0// it can be preemptive or cooperative\n\xa0#DECLARE($vYearInteger;$windowInteger)\xa0//year and window reference\n\xa0var $vStatResults : Object\xa0//to store statistical results\n\xa0...\xa0//compute statistics\n\xa0\xa0//once finished, calls the form back with calculated values\n\xa0\xa0//$vStatResults can display results in the form\n\xa0CALL FORM($window;Formula(displayStats);$vStatResults)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"About workers"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/call-form",children:"CALL FORM"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/current-process-name",children:"Current process name"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R8/commands/kill-worker",children:"KILL WORKER"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"1389"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return a}});var n=r(667294);let t={},o=n.createContext(t);function a(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);