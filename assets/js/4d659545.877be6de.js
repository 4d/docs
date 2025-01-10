"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31166"],{838715:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/reload-external-data","title":"RELOAD EXTERNAL DATA","description":"RELOAD EXTERNAL DATA ( aField )","source":"@site/versioned_docs/version-20-R7/commands-legacy/reload-external-data.md","sourceDirName":"commands-legacy","slug":"/commands/reload-external-data","permalink":"/docs/commands/reload-external-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freload-external-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"reload-external-data","title":"RELOAD EXTERNAL DATA","slug":"/commands/reload-external-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REGENERATE MISSING TABLE","permalink":"/docs/commands/regenerate-missing-table"},"next":{"title":"RESUME INDEXES","permalink":"/docs/commands/resume-indexes"}}'),d=t("785893"),s=t("250065");let a={id:"reload-external-data",title:"RELOAD EXTERNAL DATA",slug:"/commands/reload-external-data",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," ( ",(0,d.jsx)(n.em,{children:"aField"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aField"}),(0,d.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Field for which to set the storage location"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," command reloads the contents in memory of an external storage file associated with a BLOB, Picture, or Text type field."]}),"\n",(0,d.jsx)(n.p,{children:"This command is useful when the field of a record already loaded in memory is modified on the disk by another application (external storage files for fields are always writable). For example, a picture used in a Picture field can be modified by a graphic editor then saved on disk."}),"\n",(0,d.jsxs)(n.p,{children:["You then need to reload the data using the ",(0,d.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," command to update the contents of the field if it displayed in a form."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," The ",(0,d.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," command only works on a local 4D or on 4D Server. You cannot reload a field individually with 4D in remote mode. In this context, you have to reload all the records (using the ",(0,d.jsx)(n.a,{href:"/docs/commands/load-record",children:"LOAD RECORD"})," command for example)."]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/set-external-data-path",children:"SET EXTERNAL DATA PATH"})}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"1135"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(667294);let d={},s=r.createContext(d);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);