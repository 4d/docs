"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94242"],{781950:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-set-scrollbar","title":"OBJECT SET SCROLLBAR","description":"OBJECT SET SCROLLBAR ( { ;} object ; horizontal ; vertical* )","source":"@site/versioned_docs/version-20-R9/commands-legacy/object-set-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-scrollbar","permalink":"/docs/commands/object-set-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-scrollbar.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-scrollbar","title":"OBJECT SET SCROLLBAR","slug":"/commands/object-set-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/commands/object-set-scroll-position"},"next":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/commands/object-set-shortcut"}}'),t=s("785893"),i=s("250065");let l={id:"object-set-scrollbar",title:"OBJECT SET SCROLLBAR",slug:"/commands/object-set-scrollbar",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET SCROLLBAR"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"object"})," ; ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Visibility of horizontal scrollbar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Visibility of vertical scrollbar"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The OBJECT SET SCROLLBAR command allows you to display or hide the horizontal and/or vertical scrollbars in the object set using the ",(0,t.jsx)(n.em,{children:"object"})," and ",(0,t.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass the optional ",(0,t.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,t.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,t.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you do not pass a string, but a variable reference. For more information about object names, refer to the ",(0,t.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"horizontal"})," and ",(0,t.jsx)(n.em,{children:"vertical"})," parameters, you pass values indicating whether the corresponding scrollbars should be displayed. You can pass either Boolean values (True=displayed, False=hidden), or numeric values (0=hidden, 1=displayed, 2=automatic mode). Using numeric values gives you access to the automatic mode, where scrollbars are only displayed when necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["The following table indicates the values you can pass in the ",(0,t.jsx)(n.em,{children:"horizontal"})," and ",(0,t.jsx)(n.em,{children:"vertical"})," parameters for objects that accept scrollbars (automatic mode is not available for all objects):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Objects with scrollbars"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Hide scrollbar"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Show scrollbar"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Automatic mode"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text object fields and variables"}),(0,t.jsx)(n.td,{children:"False or 0"}),(0,t.jsx)(n.td,{children:"True or 1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"not available"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Picture object fields and variables"}),(0,t.jsx)(n.td,{children:"False or 0"}),(0,t.jsx)(n.td,{children:"True or 1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"List boxes"}),(0,t.jsx)(n.td,{children:"False or 0"}),(0,t.jsx)(n.td,{children:"True or 1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hierarchical lists"}),(0,t.jsx)(n.td,{children:"False or 0"}),(0,t.jsx)(n.td,{children:"True or 1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Subforms"}),(0,t.jsx)(n.td,{children:"False or 0"}),(0,t.jsx)(n.td,{children:"True or 1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"not available"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"By default, scrollbars are displayed."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," For more information about the automatic mode, refer to ",(0,t.jsx)(n.em,{children:"Scroll bars"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/object-set-visible",children:"OBJECT SET VISIBLE"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"843"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);