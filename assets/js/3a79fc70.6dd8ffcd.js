"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20192"],{886241:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-body","title":"WP Get body","description":"WP Get body ( wpDoc ) : Object","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-get-body.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-body","permalink":"/docs/WritePro/commands/wp-get-body","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-body.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-body","title":"WP Get body","slug":"/WritePro/commands/wp-get-body","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP GET ATTRIBUTES","permalink":"/docs/WritePro/commands/wp-get-attributes"},"next":{"title":"WP GET BOOKMARKS","permalink":"/docs/WritePro/commands/wp-get-bookmarks"}}'),o=n("785893"),d=n("250065");let s={id:"wp-get-body",title:"WP Get body",slug:"/WritePro/commands/wp-get-body",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let t={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WP Get body"})," ( ",(0,o.jsx)(t.em,{children:"wpDoc"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"wpDoc"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"4D Write Pro document"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Function result"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"4D Write Pro body"})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"WP Get body"})," command returns the body element of the ",(0,o.jsx)(t.em,{children:"wpDoc"})," 4D Write Pro document."]}),"\n",(0,o.jsx)(t.p,{children:"This element can be passed to the:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-select",children:"WP SELECT"})," command to select the body of the document."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-text-range",children:"WP Text range"})," command to define the body as a range."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," and ",(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," commands to handle the body's attributes."]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"You want to copy the body of a 4D Write Pro document to another 4D Write Pro document:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object\n\xa0\n\xa0$bodySource:=WP Get body([TEMPLATES]WPtemplate)\n\xa0$rangeSource:=WP Text range($bodySource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$bodyTarget:=WP Get body([Docs]MyWPDoc)\n\xa0$rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-text-range",children:"WP Text range"})})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(667294);let o={},d=r.createContext(o);function s(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);