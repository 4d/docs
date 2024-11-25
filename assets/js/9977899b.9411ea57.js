"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3935"],{223267:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-table-titles","title":"GET TABLE TITLES","description":"GET TABLE TITLES ( tableTitles ; tableNums )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/get-table-titles","permalink":"/docs/commands/get-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-table-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-table-titles","title":"GET TABLE TITLES","slug":"/commands/get-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD TITLES","permalink":"/docs/commands/get-field-titles"},"next":{"title":"HIDE MENU BAR","permalink":"/docs/commands/hide-menu-bar"}}'),i=n("785893"),r=n("250065");let d={id:"get-table-titles",title:"GET TABLE TITLES",slug:"/commands/get-table-titles",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GET TABLE TITLES"})," ( ",(0,i.jsx)(t.em,{children:"tableTitles"})," ; ",(0,i.jsx)(t.em,{children:"tableNums"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tableTitles"}),(0,i.jsx)(t.td,{children:"Text array"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Current table names"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tableNums"}),(0,i.jsx)(t.td,{children:"Array integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Table numbers"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"GET TABLE TITLES"})," command fills the ",(0,i.jsx)(t.em,{children:"tableTitles"})," and ",(0,i.jsx)(t.em,{children:"tableNums"})," arrays with the names and numbers of database tables defined in the Structure window or using the ",(0,i.jsx)(t.a,{href:"/docs/commands/set-table-titles",children:"SET TABLE TITLES"})," command. The contents of these two arrays are synchronized."]}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.a,{href:"/docs/commands/set-table-titles",children:"SET TABLE TITLES"})," command is called during the session, ",(0,i.jsx)(t.strong,{children:"GET TABLE TITLES"})," only returns the \u201Cmodified\u201D names and table numbers defined using this command."]}),"\n",(0,i.jsxs)(t.p,{children:["Otherwise, ",(0,i.jsx)(t.strong,{children:"GET TABLE TITLES"})," returns the names of all database tables as defined in the Structure window."]}),"\n",(0,i.jsx)(t.p,{children:"In both cases, the command does not return invisible tables."}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/set-table-titles",children:"SET TABLE TITLES"})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);