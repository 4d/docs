"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11725"],{996604:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>h});var s=JSON.parse('{"id":"commands-legacy/listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","description":"LISTBOX SET HEADERS HEIGHT ( { ;} object ; height {; unit*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-set-headers-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-headers-height","permalink":"/docs/20-R7/commands/listbox-set-headers-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-headers-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","slug":"/commands/listbox-set-headers-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID COLOR","permalink":"/docs/20-R7/commands/listbox-set-grid-color"},"next":{"title":"LISTBOX SET HIERARCHY","permalink":"/docs/20-R7/commands/listbox-set-hierarchy"}}'),i=t("785893"),r=t("250065");let d={id:"listbox-set-headers-height",title:"LISTBOX SET HEADERS HEIGHT",slug:"/commands/listbox-set-headers-height",displayed_sidebar:"docs"},h=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"height"})," {; ",(0,i.jsx)(n.em,{children:"unit"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Row height"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unit"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Unit of height value: 0 or omitted = pixels, 1 = lines"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," command modifies by programming the height of the header row in the list box designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,i.jsx)(n.p,{children:"You can designate either the list box or any header of the list box."}),"\n",(0,i.jsxs)(n.p,{children:["Pass the height to set in the ",(0,i.jsx)(n.em,{children:"height"})," parameter. By default, if you omit the ",(0,i.jsx)(n.em,{children:"unit"})," parameter, this height is expressed in pixels. To change the unit, you can pass one of the following constants (found in the ",(0,i.jsx)(n.em,{children:"List Box"})," theme), in the ",(0,i.jsx)(n.em,{children:"unit"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk lines"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Height is expressed as a number of lines. 4D calculates the height of a line according to the font."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk pixels"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Height is expressed as a number of pixels (default)."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Headers must respect the minimum height set by the system. This height is 24 pixels under Windows and 17 pixels under Mac OS. If you pass a lower value in the ",(0,i.jsx)(n.em,{children:"height"})," parameter, the minimum height is applied."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," For more information about calculation row heights, refer to the ",(0,i.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-get-headers-height",children:"LISTBOX Get headers height"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1143"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return h},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);