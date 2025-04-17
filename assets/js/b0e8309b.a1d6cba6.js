"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16320"],{629673:function(e,r,i){i.r(r),i.d(r,{default:()=>o,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/listbox-set-hierarchy","title":"LISTBOX SET HIERARCHY","description":"LISTBOX SET HIERARCHY ( { ;} object ; hierarchical {; hierarchy*} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-set-hierarchy.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-hierarchy","permalink":"/docs/commands/listbox-set-hierarchy","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-hierarchy.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-set-hierarchy","title":"LISTBOX SET HIERARCHY","slug":"/commands/listbox-set-hierarchy","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET HEADERS HEIGHT","permalink":"/docs/commands/listbox-set-headers-height"},"next":{"title":"LISTBOX SET LOCKED COLUMNS","permalink":"/docs/commands/listbox-set-locked-columns"}}'),s=i("785893"),t=i("250065");let a={id:"listbox-set-hierarchy",title:"LISTBOX SET HIERARCHY",slug:"/commands/listbox-set-hierarchy",displayed_sidebar:"docs"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"LISTBOX SET HIERARCHY"})," ( {* ;} ",(0,s.jsx)(r.em,{children:"object"})," ; ",(0,s.jsx)(r.em,{children:"hierarchical"})," {; ",(0,s.jsx)(r.em,{children:"hierarchy"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"*"}),(0,s.jsx)(r.td,{children:"Operator"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsxs)(r.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(r.br,{}),"If omitted, object is a variable"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"object"}),(0,s.jsx)(r.td,{children:"any"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsxs)(r.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(r.br,{}),"Variable (if * is omitted)"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hierarchical"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsxs)(r.td,{children:["True = hierarchical list box",(0,s.jsx)(r.br,{}),"False = non-hierarchical list box"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hierarchy"}),(0,s.jsx)(r.td,{children:"Pointer array"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Array of pointers"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"LISTBOX SET HIERARCHY"})," command lets you configure the list box object designated by the ",(0,s.jsx)(r.em,{children:"object"})," and ",(0,s.jsx)(r.em,{children:"*"})," parameters in hierarchical or non-hierarchical mode."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," This command only functions with list boxes based on arrays. When this command is used with a list box based on selections, it does nothing."]}),"\n",(0,s.jsxs)(r.p,{children:["If you pass the optional ",(0,s.jsx)(r.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(r.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(r.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,s.jsxs)(r.p,{children:["The Boolean ",(0,s.jsx)(r.em,{children:"hierarchical"})," parameter lets you specify the list box mode:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"if you pass True, the list box is displayed in hierarchical mode,"}),"\n",(0,s.jsx)(r.li,{children:"if you pass False, the list box is displayed in non-hierarchical mode (standard array mode)."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["When you pass a list box in hierarchical mode, certain properties are automatically restricted. For more information, please refer to the ",(0,s.jsx)(r.em,{children:"Managing Hierarchical List Boxes"})," section."]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.em,{children:"hierarchy"})," parameter is used to designate the arrays of the list box to be used to construct the hierarchy (see example). If you display the list box in hierarchical mode and omit this parameter:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"if the list box is already in hierarchical mode, the command does nothing."}),"\n",(0,s.jsx)(r.li,{children:"if the list box is in non-hierarchical mode and has never been declared hierarchical, the first array is used as the hierarchy by default."}),"\n",(0,s.jsx)(r.li,{children:"if the list box is in non-hierarchical mode but has previously been declared hierarchical, the last hierarchy is re-established."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"Definition of the aCountry, aRegion and aCity arrays as the hierarchy of a list box:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY POINTER($ArrHierarch;3)\n\xa0$ArrHierarch{1}:=->aCountry\xa0//First break level\n\xa0$ArrHierarch{2}:=->aRegion\xa0//Second break level\n\xa0$ArrHierarch{3}:=->aCity\xa0//Third break level\n\xa0LISTBOX SET HIERARCHY(*;"mylistbox";True;$ArrHierarch)\n'})}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/commands/listbox-get-hierarchy",children:"LISTBOX GET HIERARCHY"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"1098"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,r,i){i.d(r,{Z:function(){return c},a:function(){return a}});var n=i(667294);let s={},t=n.createContext(s);function a(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);