"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98558"],{566079:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/object-get-scrollbar","title":"OBJECT GET SCROLLBAR","description":"OBJECT GET SCROLLBAR ( { ;} object ; horizontal ; vertical* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scrollbar","permalink":"/docs/20-R7/commands/object-get-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-scrollbar","title":"OBJECT GET SCROLLBAR","slug":"/commands/object-get-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SCROLL POSITION","permalink":"/docs/20-R7/commands/object-get-scroll-position"},"next":{"title":"OBJECT GET SHORTCUT","permalink":"/docs/20-R7/commands/object-get-shortcut"}}'),s=t("785893"),i=t("250065");let l={id:"object-get-scrollbar",title:"OBJECT GET SCROLLBAR",slug:"/commands/object-get-scrollbar",displayed_sidebar:"docs"},o=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT GET SCROLLBAR"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"horizontal"})," ; ",(0,s.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(n.br,{}),"If omitted, object is a variable or a field"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(n.br,{}),"Variable or field (if * is omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"horizontal"}),(0,s.jsx)(n.td,{children:"Boolean, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Visibility of horizontal scrollbar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vertical"}),(0,s.jsx)(n.td,{children:"Boolean, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Visibility of vertical scrollbar"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The OBJECT GET SCROLLBAR command is used to find out the displayed/hidden status of the horizontal and vertical scrollbars of the object or group of objects designated by ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"horizontal"})," and ",(0,s.jsx)(n.em,{children:"vertical"})," parameters, you can pass Boolean or longint type variables:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When you pass Boolean variables, the value returned reflects the ",(0,s.jsx)(n.strong,{children:"current"})," state of the scrollbar:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the scrollbar has been defined as hidden, the parameter receives False,"}),"\n",(0,s.jsx)(n.li,{children:"If the scrollbar has been defined as displayed, the parameter receives True,"}),"\n",(0,s.jsx)(n.li,{children:"If the scrollbar has been set to automatic mode, the parameter receives either True or False depending on the current display state of the object."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["When you pass longint variables, the value returned reflects the visibility defined for the scrollbar:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the scrollbar has been defined as hidden, the parameter receives 0,"}),"\n",(0,s.jsx)(n.li,{children:"If the scrollbar has been defined as displayed, the parameter receives 1,"}),"\n",(0,s.jsx)(n.li,{children:"If the scrollbar has been set to automatic mode, the parameter receives 2."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This command can be used with the following form objects:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Picture or text object fields and variables"}),"\n",(0,s.jsx)(n.li,{children:"List boxes,"}),"\n",(0,s.jsx)(n.li,{children:"Hierarchical lists,"}),"\n",(0,s.jsx)(n.li,{children:"Subforms."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1076"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);