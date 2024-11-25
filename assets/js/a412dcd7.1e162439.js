"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50754"],{1571:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-field-titles","title":"GET FIELD TITLES","description":"GET FIELD TITLES ( aTable ; fieldTitles ; fieldNums )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-field-titles.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-titles","permalink":"/docs/commands/get-field-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-titles","title":"GET FIELD TITLES","slug":"/commands/get-field-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get application color scheme","permalink":"/docs/commands/get-application-color-scheme"},"next":{"title":"GET TABLE TITLES","permalink":"/docs/commands/get-table-titles"}}'),i=t("785893"),d=t("250065");let l={id:"get-field-titles",title:"GET FIELD TITLES",slug:"/commands/get-field-titles",displayed_sidebar:"docs"},r=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET FIELD TITLES"})," ( ",(0,i.jsx)(n.em,{children:"aTable"})," ; ",(0,i.jsx)(n.em,{children:"fieldTitles"})," ; ",(0,i.jsx)(n.em,{children:"fieldNums"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table for which you want to find out the field names"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldTitles"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Current field names"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNums"}),(0,i.jsx)(n.td,{children:"Array integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Field numbers"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"GET FIELD TITLES"})," command fills the ",(0,i.jsx)(n.em,{children:"fieldTitles"})," and ",(0,i.jsx)(n.em,{children:"fieldNums"})," arrays with the names and numbers of database fields for the desired ",(0,i.jsx)(n.em,{children:"aTable"}),". The contents of these two arrays are synchronized."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.a,{href:"/docs/commands/set-field-titles",children:"SET FIELD TITLES"})," command is called during the session, ",(0,i.jsx)(n.strong,{children:"GET FIELD TITLES"})," only returns the \u201Cmodified\u201D names and field numbers defined using this command."]}),"\n",(0,i.jsxs)(n.p,{children:["Otherwise, ",(0,i.jsx)(n.strong,{children:"GET FIELD TITLES"})," returns the names of all database fields as defined in the Structure window."]}),"\n",(0,i.jsx)(n.p,{children:"In both cases, the command does not return invisible fields."}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/set-field-titles",children:"SET FIELD TITLES"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},d=s.createContext(i);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);