"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90979"],{656610:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-menu-item-property","title":"GET MENU ITEM PROPERTY","description":"GET MENU ITEM PROPERTY ( menu ; menuItem ; property ; value {; process} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-menu-item-property.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-property","permalink":"/docs/commands/get-menu-item-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-property","title":"GET MENU ITEM PROPERTY","slug":"/commands/get-menu-item-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item parameter","permalink":"/docs/commands/get-menu-item-parameter"},"next":{"title":"Get menu item style","permalink":"/docs/commands/get-menu-item-style"}}'),s=t("785893"),i=t("250065");let d={id:"get-menu-item-property",title:"GET MENU ITEM PROPERTY",slug:"/commands/get-menu-item-property",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MENU ITEM PROPERTY"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuItem"})," ; ",(0,s.jsx)(n.em,{children:"property"})," ; ",(0,s.jsx)(n.em,{children:"value"})," {; ",(0,s.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuItem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of menu item or -1 for the last item added to the menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"property"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Property type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Expression"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Property value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Process number"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET MENU ITEM PROPERTY"})," command returns, in the ",(0,s.jsx)(n.em,{children:"value"})," parameter, the current value of the property of the menu item designated by the ",(0,s.jsx)(n.em,{children:"menu"})," and ",(0,s.jsx)(n.em,{children:"menuItem"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass -1 in ",(0,s.jsx)(n.em,{children:"menuItem"})," in order to specify the last item added to ",(0,s.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"menu"}),", you can pass a menu reference (",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") or a menu number. If you pass a menu reference, the ",(0,s.jsx)(n.em,{children:"process"})," parameter is unnecessary and will be ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional ",(0,s.jsx)(n.em,{children:"process"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"property"})," parameter, pass the property for which you want to get the value. You can use one of the constants of the \u201C",(0,s.jsx)(n.em,{children:"Menu Item Properties"}),"\u201D theme or a string corresponding to a custom property. For more information about menu properties and their values, please refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility Note:"})," By default, if the ",(0,s.jsx)(n.em,{children:"value"})," variable is not explicitely typed or is declared as text, the command will return a ",(0,s.jsx)(n.em,{children:"Standard Action"})," name. If you want to get a numeric value as defined in the (deprecated) ",(0,s.jsx)(n.em,{children:"Value for Associated Standard Action"})," constant theme, you need to declare the ",(0,s.jsx)(n.em,{children:"value"})," variable as longint."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"972"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);