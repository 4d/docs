"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7129"],{639357:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-get-scroll-position","title":"OBJECT GET SCROLL POSITION","description":"OBJECT GET SCROLL POSITION ( { ;} object ; vPosition {; hPosition*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-scroll-position.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scroll-position","permalink":"/docs/commands/object-get-scroll-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scroll-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-scroll-position","title":"OBJECT GET SCROLL POSITION","slug":"/commands/object-get-scroll-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET RGB COLORS","permalink":"/docs/commands/object-get-rgb-colors"},"next":{"title":"OBJECT GET SCROLLBAR","permalink":"/docs/commands/object-get-scrollbar"}}'),i=n("785893"),r=n("250065");let o={id:"object-get-scroll-position",title:"OBJECT GET SCROLL POSITION",slug:"/commands/object-get-scroll-position",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT GET SCROLL POSITION"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"vPosition"})," {; ",(0,i.jsx)(t.em,{children:"hPosition"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,i.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(t.br,{}),"Variable or field or table (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vPosition"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Number of first line displayed or Vertical scrolling in pixels (pictures)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hPosition"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsxs)(t.td,{children:["Number of first column displayed or",(0,i.jsx)(t.br,{}),"Horizonal scrolling in pixels (pictures)"]})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The OBJECT GET SCROLL POSITION returns, in the ",(0,i.jsx)(t.em,{children:"vPosition"})," and ",(0,i.jsx)(t.em,{children:"hPosition"})," parameters, information related to the position of the scroll bars of the form object designated by the ",(0,i.jsx)(t.em,{children:"*"})," and ",(0,i.jsx)(t.em,{children:"object"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is the name of an object of the subform, hierarchical list, scrollable area, list box or picture type (in this case, pass a string in object). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a variable (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"})," of hierarchical list, picture or list box variable) or a field."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," With subform type objects, only the syntax using an ",(0,i.jsx)(t.em,{children:"*"})," is supported."]}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.em,{children:"object"})," designates a list type object (subform, list form, hierarchical list, scrollable area or list box), ",(0,i.jsx)(t.em,{children:"vPosition"})," returns the number of the first line displayed in the object. ",(0,i.jsx)(t.em,{children:"hPosition"})," (list box only) returns the number of the first column that is completely visible in the left part of the list box. With other types of objects, this parameter returns 0."]}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.em,{children:"object"})," designates a picture (variable or field), ",(0,i.jsx)(t.em,{children:"vPosition"})," returns the vertical movement and ",(0,i.jsx)(t.em,{children:"hPosition"})," the horizontal movement of the picture. These values are expressed in pixels with respect to the origin of the picture in the local coordinate system."]}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1114"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var s=n(667294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);