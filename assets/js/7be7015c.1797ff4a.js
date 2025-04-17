"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43691"],{839741:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/hide-menu-bar","title":"HIDE MENU BAR","description":"HIDE MENU BAR","source":"@site/versioned_docs/version-20-R9/commands-legacy/hide-menu-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-menu-bar","permalink":"/docs/commands/hide-menu-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-menu-bar.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"hide-menu-bar","title":"HIDE MENU BAR","slug":"/commands/hide-menu-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE TITLES","permalink":"/docs/commands/get-table-titles"},"next":{"title":"Macintosh command down","permalink":"/docs/commands/macintosh-command-down"}}'),d=t("785893"),r=t("250065");let i={id:"hide-menu-bar",title:"HIDE MENU BAR",slug:"/commands/hide-menu-bar",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"HIDE MENU BAR"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Does not require any parameters"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"The HIDE MENU BAR command makes the menu bar invisible."}),"\n",(0,d.jsx)(n.p,{children:"If the menu bar was already hidden, the command does nothing."}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"The following method displays a record in full-screen display (Macintosh) until you click the mouse button:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0HIDE TOOL BAR\n\xa0HIDE MENU BAR\n\xa0Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)\n\xa0FORM SET INPUT([Paintings];"Full Screen 800")\n\xa0DISPLAY RECORD([Paintings])\n\xa0Repeat\n\xa0\xa0\xa0\xa0MOUSE POSITION($vlX;$vlY;$vlButton)\n\xa0Until($vlButton#0)\n\xa0CLOSE WINDOW\n\xa0SHOW MENU BAR\n\xa0SHOW TOOL BAR\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," On Windows, the window will be limited to the bounds of the application window."]}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/hide-tool-bar",children:"HIDE TOOL BAR"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/show-menu-bar",children:"SHOW MENU BAR"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/show-tool-bar",children:"SHOW TOOL BAR"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"432"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Forbidden on the server"}),(0,d.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);