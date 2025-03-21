"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60415"],{601987:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-text-box","title":"WP DELETE TEXT BOX","description":"WP DELETE TEXT BOX ( textBox )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-delete-text-box.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-text-box","permalink":"/docs/WritePro/commands/wp-delete-text-box","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-text-box.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-delete-text-box","title":"WP DELETE TEXT BOX","slug":"/WritePro/commands/wp-delete-text-box","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE SUBSECTION","permalink":"/docs/WritePro/commands/wp-delete-subsection"},"next":{"title":"WP EXPORT DOCUMENT","permalink":"/docs/WritePro/commands/wp-export-document"}}'),s=n("785893"),r=n("250065");let d={id:"wp-delete-text-box",title:"WP DELETE TEXT BOX",slug:"/WritePro/commands/wp-delete-text-box",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function x(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP DELETE TEXT BOX"})," ( ",(0,s.jsx)(t.em,{children:"textBox"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textBox"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Text box"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"WP DELETE TEXT BOX"})," command deletes the text box defined by the ",(0,s.jsx)(t.em,{children:"textBox"})," parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.em,{children:"textBox"})," does not exist, the command does nothing."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to delete a text box using its ID:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $myTextBox : Object\n\xa0\n\xa0\xa0// Get the text box\n\xa0$myTextBox:=WP Get element by ID(myDoc;"AddressBox")\n\xa0\n\xa0\xa0// Delete the text box\n\xa0WP DELETE TEXT BOX($myTextBox)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-new-text-box",children:"WP New text box"})})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var o=n(667294);let s={},r=o.createContext(s);function d(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);