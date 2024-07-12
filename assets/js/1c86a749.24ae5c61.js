/*! For license information please see 1c86a749.24ae5c61.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2484],{597338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=r(474848),s=r(28453);const o={id:"vp-row",title:"VP Row"},i=void 0,d={id:"ViewPro/commands/vp-row",title:"VP Row",description:"VP Row ( vpAreaName Integer { ; rowCount Integer } } ) : Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-row.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-row",permalink:"/docs/20-R5/ViewPro/commands/vp-row",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-row.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-row",title:"VP Row"},sidebar:"docs",previous:{title:"VP RESUME COMPUTING",permalink:"/docs/20-R5/ViewPro/commands/vp-resume-computing"},next:{title:"VP ROW AUTOFIT",permalink:"/docs/20-R5/ViewPro/commands/vp-row-autofit"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Row"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,t.jsx)(n.em,{children:"row"})," : Integer { ; ",(0,t.jsx)(n.em,{children:"rowCount"})," : Integer { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"row"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Row index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Number of rows"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"|sheet  |Integer|->|Sheet index (current sheet if omitted)|\n|Result |Object|<-|Range object of row(s)|"}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Row"})," command returns a new range object referencing a specific row or rows."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"row"})," parameter defines the first row of the row range. Pass the row index (counting begins at 0) in this parameter. If the range contains multiple rows, you should also use the optional ",(0,t.jsx)(n.em,{children:"rowCount"})," parameter."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"rowCount"})," parameter allows you to define the total number of rows of the range. ",(0,t.jsx)(n.em,{children:"rowCount"})," must be greater than 0. If omitted, the value will be set to 1 by default."]}),"\n",(0,t.jsxs)(n.p,{children:["In the optional ",(0,t.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If not specified, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to define a range object for the row shown below (on the current spreadsheet):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(404342).A+"",width:"517",height:"317"})}),"\n",(0,t.jsx)(n.p,{children:"You can write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$row:=VP Row("ViewProArea";9) // row 10\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-all",children:"VP All"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-column",children:"VP Column"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,o={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:d.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},404342:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cmd_vpRow-17d159502d78c7ebad52f5f796faa8db.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);