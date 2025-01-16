"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["102"],{708953:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/open-color-picker","title":"OPEN COLOR PICKER","description":"OPEN COLOR PICKER {( textOrBackground )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-color-picker.md","sourceDirName":"commands-legacy","slug":"/commands/open-color-picker","permalink":"/docs/20-R7/commands/open-color-picker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-color-picker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-color-picker","title":"OPEN COLOR PICKER","slug":"/commands/open-color-picker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menu bar screen","permalink":"/docs/20-R7/commands/menu-bar-screen"},"next":{"title":"OPEN FONT PICKER","permalink":"/docs/20-R7/commands/open-font-picker"}}'),o=t("785893"),s=t("250065");let c={id:"open-color-picker",title:"OPEN COLOR PICKER",slug:"/commands/open-color-picker",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OPEN COLOR PICKER"})," {( ",(0,o.jsx)(n.em,{children:"textOrBackground"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"textOrBackground"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"0 or omitted = text color, 1 = text background color"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"OPEN COLOR PICKER"})," command displays the system color picker dialog box."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," This is a modal dialog box under Windows but not under OS X."]}),"\n",(0,o.jsxs)(n.p,{children:['When the user selects a color and validates the dialog box, this color is applied to the current text selection in the object with the focus, if the "Allow Font/Color Picker" property is checked for this object (see the ',(0,o.jsx)(n.em,{children:"Design Reference"})," manual)."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass 0 in the ",(0,o.jsx)(n.em,{children:"textOrBackground"})," parameter or omit this parameter, the selected color is applied to the text. If you pass 1 in ",(0,o.jsx)(n.em,{children:"textOrBackground"}),", this color is applied to the text background."]}),"\n",(0,o.jsx)(n.p,{children:"If the color was changed, the On After Edit form event is generated for the object."}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/open-font-picker",children:"OPEN FONT PICKER"})}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1304"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var r=t(667294);let o={},s=r.createContext(o);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);