"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66214"],{448944:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-add-selection","title":"VP ADD SELECTION","description":"VP ADD SELECTION ( rangeObj : Object )","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-add-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-selection","permalink":"/docs/20-R6/ViewPro/commands/vp-add-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-selection.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-add-selection","title":"VP ADD SELECTION"},"sidebar":"docs","previous":{"title":"VP ADD RANGE NAME","permalink":"/docs/20-R6/ViewPro/commands/vp-add-range-name"},"next":{"title":"VP ADD SHEET","permalink":"/docs/20-R6/ViewPro/commands/vp-add-sheet"}}'),c=t("785893"),r=t("250065");let d={id:"vp-add-selection",title:"VP ADD SELECTION"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP ADD SELECTION"})," ( ",(0,c.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rangeObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"Range object"})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"VP ADD SELECTION"})," command adds the specified cells to the currently selected cells."]}),"\n",(0,c.jsxs)(n.p,{children:["In ",(0,c.jsx)(n.em,{children:"rangeObj"}),", pass a range object of cells to add to the current selection."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"The active cell is not modified."}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:"You have cells currently selected:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(733051).Z+"",width:"552",height:"362"})}),"\n",(0,c.jsx)(n.p,{children:"The following code will add cells to your selection:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Cells("myVPArea";3;4;2;3)\nVP ADD SELECTION($currentSelection)\n'})}),"\n",(0,c.jsx)(n.p,{children:"Result:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(962383).Z+"",width:"552",height:"358"})}),"\n",(0,c.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},733051:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpAddSelection1-a7868594e656fbab99c06115645b4ad1.PNG"},962383:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpAddSelection2-27e4c536e5f87f2cf3e32241e3668bf7.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let c={},r=s.createContext(c);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);