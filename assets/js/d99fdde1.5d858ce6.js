"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25329"],{510020:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/storage","title":"Storage","description":"Storage  : Object","source":"@site/versioned_docs/version-20-R7/commands-legacy/storage.md","sourceDirName":"commands-legacy","slug":"/commands/storage","permalink":"/docs/20-R7/commands/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstorage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"storage","title":"Storage","slug":"/commands/storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Values","permalink":"/docs/20-R7/commands/ob-values"},"next":{"title":"On a Series","permalink":"/docs/20-R7/commands/theme/On-a-Series"}}'),s=t("785893"),o=t("250065");let a={id:"storage",title:"Storage",slug:"/commands/storage",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Storage"}),"  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Catalog of shared objects and shared collections registered in Storage"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Storage"})," method returns the catalog of shared objects or shared collections that you have registered in the ",(0,s.jsx)(n.em,{children:"Storage"})," object on the current machine or component."]}),"\n",(0,s.jsxs)(n.p,{children:["The catalog returned by ",(0,s.jsx)(n.strong,{children:"Storage"})," is automatically created by 4D and is available to all processes of the database, including preemptive processes. There is one ",(0,s.jsx)(n.strong,{children:"Storage"})," catalog per machine and component: in a client/server application, there is one ",(0,s.jsx)(n.strong,{children:"Storage"})," shared object on the server, and one ",(0,s.jsx)(n.strong,{children:"Storage"})," shared object on each remote 4D application; if the database uses components, there is one ",(0,s.jsx)(n.strong,{children:"Storage"})," object per component."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.strong,{children:"Storage"})," catalog to reference any shared objects or shared collections that you want to be used from any preemptive or standard process. To register a shared object or a shared collection in the catalog, add its reference to the shared object returned by ",(0,s.jsx)(n.strong,{children:"Storage"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Since the catalog returned by ",(0,s.jsx)(n.strong,{children:"Storage"})," is a ",(0,s.jsx)(n.em,{children:"shared object"}),", it follows the rules described in the ",(0,s.jsx)(n.em,{children:"Shared objects and shared collections"})," section, but with some specificities:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This object can only contain shared objects and shared collections. Trying to add other kinds of values (non-shared objects or collections, null, scalar values) will generate an error."}),"\n",(0,s.jsxs)(n.li,{children:["Adding a property to this object must be surrounded by the ",(0,s.jsx)(n.em,{children:"Use...End use"})," structure, otherwise an error is returned. Reading an attribute outside of a ",(0,s.jsx)(n.em,{children:"Use...End use"})," structure is, however, possible."]}),"\n",(0,s.jsxs)(n.li,{children:["When surrounded by the ",(0,s.jsx)(n.em,{children:"Use...End use"})," structure, first-level attributes of ",(0,s.jsx)(n.strong,{children:"Storage"})," are locked for other processes."]}),"\n",(0,s.jsxs)(n.li,{children:["Unlike standard shared objects, the object returned by ",(0,s.jsx)(n.strong,{children:"Storage"})," will NOT share its ",(0,s.jsx)(n.em,{children:"locking identifier"})," with shared objects or collections added as attributes (for more information, refer to the ",(0,s.jsx)(n.em,{children:"About the locking identifier (how shared groups work)"})," section)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["A common practice could be initializing the ",(0,s.jsx)(n.strong,{children:"Storage"})," object in the :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.counters:=New shared object("customers";0;"invoices";0)\n\xa0End use\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["This example shows a standard way to set ",(0,s.jsx)(n.strong,{children:"Storage"})," values:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.mydata:=New shared object\n\xa0\xa0\xa0\xa0Use(Storage.mydata)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop1:="Smith"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop2:=100\n\xa0\xa0\xa0\xa0End use\n\xa0End use\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Storage"})," allows implementing a singleton with a ",(0,s.jsx)(n.em,{children:"lazy initialization"}),", as shown in the following example."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For more information about singleton patterns, you can refer to this ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Singleton%5Fpattern",children:"Wikipedia page"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Integer\n\xa0var $counterValue : Integer\n\xa0var counter : Object\xa0//create a reference to counter for the process\n\xa0\n\xa0If(counter=Null)\xa0//if this reference is null, get if from Storage\n\xa0\xa0\xa0\xa0Use(Storage)\xa0//Use of Storage needed only once!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Storage.counter=Null)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.counter:=New shared object("operation";0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0counter:=Storage.counter\xa0//Get the reference of the counter shared object\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n\xa0Use(counter)\xa0//directly use the shared object counter (no need to use Storage!)\n\xa0\xa0\xa0\xa0counter.operation:=counter.operation+1\n\xa0\xa0\xa0\xa0$counterValue:=counter.operation\n\xa0End use\n\xa0\n\xa0$0:=$counterValue\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Shared objects and shared collections"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1525"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);