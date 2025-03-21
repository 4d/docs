"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19890"],{578977:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands/ds","title":"ds","description":"ds { ( localID cs.DataStore","source":"@site/versioned_docs/version-20-R8/commands/ds.md","sourceDirName":"commands","slug":"/commands/ds","permalink":"/docs/commands/ds","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fds.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ds","title":"ds","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DROP REMOTE USER","permalink":"/docs/commands/drop-remote-user"},"next":{"title":"Export structure file","permalink":"/docs/commands/export-structure-file"}}'),r=t("785893"),a=t("250065");let d={id:"ds",title:"ds",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function i(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ds"})," { ( ",(0,r.jsx)(n.em,{children:"localID"})," : Text ) } : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"localID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Local ID of the remote datastore to return"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"cs.DataStore"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Reference to the datastore"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ds"})," command returns a reference to the datastore matching the current 4D database or the database designated by ",(0,r.jsx)(n.em,{children:"localID"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"localID"}),' parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through ',(0,r.jsx)(n.code,{children:"ds"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also get a reference on an open remote datastore by passing its local id in the ",(0,r.jsx)(n.em,{children:"localID"})," parameter. The datastore must have been previously opened with the ",(0,r.jsx)(n.a,{href:"/docs/commands/open-datastore",children:(0,r.jsx)(n.code,{children:"Open datastore"})})," command by the current database (host or component). The local id is defined when using this command."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The scope of the local id is the database where the datastore has been opened."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.em,{children:"localID"})," datastore is found, the command returns ",(0,r.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Objects available in the ",(0,r.jsx)(n.code,{children:"cs.Datastore"})," are mapped from the target database with respect to the ",(0,r.jsx)(n.a,{href:"/docs/ORDA/dsmapping#general-rules",children:"ORDA general rules"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Using the main datastore on the 4D database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $result : cs.EmployeeSelection\n$result:=ds.Employee.query("firstName = :1";"S@")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo; $firstFrench; $firstForeign : Object\n\n var $frenchStudents; $foreignStudents : cs.DataStore\n\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n  //...\n  //...\n $firstFrench:=getFirst("french";"Students")\n $firstForeign:=getFirst("foreign";"Students")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  //getFirst method\n  //getFirst(localID;dataclass) -> entity\n #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity\n\n $entity:=ds($localId)[$dataClassName].all().first()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/open-datastore",children:"Open datastore"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1482"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},a=s.createContext(r);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);