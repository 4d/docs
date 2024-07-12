/*! For license information please see 241ed2c9.c4ab633a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49749],{166002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(474848),r=t(28453);const o={id:"vp-reset-selection",title:"VP RESET SELECTION"},c=void 0,i={id:"ViewPro/commands/vp-reset-selection",title:"VP RESET SELECTION",description:"VP RESET SELECTION ( vpAreaName Integer } )",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-reset-selection.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-reset-selection",permalink:"/docs/20-R5/ViewPro/commands/vp-reset-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-reset-selection.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-reset-selection",title:"VP RESET SELECTION"},sidebar:"docs",previous:{title:"VP REMOVE TABLE ROWS",permalink:"/docs/20-R5/ViewPro/commands/vp-remove-table-rows"},next:{title:"VP RESIZE TABLE",permalink:"/docs/20-R5/ViewPro/commands/vp-resize-table"}},l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP RESET SELECTION"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP RESET SELECTION"})," command deselects all cells, resulting in no current selection or visible active cell."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A default active cell (cell A1) remains defined for 4D View Pro commands."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to deselect all cells (the active cell and any selected cells):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP RESET SELECTION("myVPArea")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,o={},d=null,a=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,s)&&!l.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(296540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);