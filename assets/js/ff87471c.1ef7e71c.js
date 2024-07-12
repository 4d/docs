/*! For license information please see ff87471c.1ef7e71c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10531],{258577:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var l=s(474848),t=s(28453);const r={id:"vp-set-values",title:"VP SET VALUES"},o=void 0,i={id:"ViewPro/commands/vp-set-values",title:"VP SET VALUES",description:"VP SET VALUES ( rangeObj Collection )",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-set-values.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-values",permalink:"/docs/20-R5/ViewPro/commands/vp-set-values",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-values.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-values",title:"VP SET VALUES"},sidebar:"docs",previous:{title:"VP SET VALUE",permalink:"/docs/20-R5/ViewPro/commands/vp-set-value"},next:{title:"VP SET WORKBOOK OPTIONS",permalink:"/docs/20-R5/ViewPro/commands/vp-set-workbook-options"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP SET VALUES"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,l.jsx)(n.em,{children:"valuesCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Range object"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valuesCol"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Collection of values"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"VP SET VALUES"})," command assigns a collection of values starting at the specified cell range."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"rangeObj"}),", pass a range for the cell (created with ",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-cell",children:(0,l.jsx)(n.code,{children:"VP Cell"})}),") whose value you want to specify. The cell defined in the ",(0,l.jsx)(n.em,{children:"rangeObj"})," is used to determine the starting point."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If ",(0,l.jsx)(n.em,{children:"rangeObj"})," is not a cell range, only the first cell of the range is used."]}),"\n",(0,l.jsxs)(n.li,{children:["If ",(0,l.jsx)(n.em,{children:"rangeObj"})," includes multiple ranges, only the first cell of the first range is used."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"valuesCol"})," parameter is two-dimensional:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row."}),"\n",(0,l.jsx)(n.li,{children:"Each subcollection defines cell values for the row. Values can be Integer, Real, Boolean, Text, Date, Null, or Object. If the value is an object, it can have the following properties:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,l.jsx)(n.td,{children:"Value in the cell (except- time)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"Time value (in seconds)"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$param:=New collection\n$param.push(New collection(1;2;3;False)) //first row, 4 values\n$param.push(New collection) //second row, untouched\n$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values\n$param.push(New collection(6;7;8;9)) // fourth row, 4 values\n$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value\n   \nVP SET VALUES(VP Cell("ViewProArea";2;1);$param)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(705244).A+"",width:"756",height:"270"})}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-values",children:"VP Get Values"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},221020:(e,n,s)=>{var l=s(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var l,r={},a=null,d=null;for(l in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,l)&&!c.hasOwnProperty(l)&&(r[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===r[l]&&(r[l]=n[l]);return{$$typeof:t,type:e,key:a,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},705244:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/cmd_vpSetValues-b67ff95f1ff17766f7646ad11eff9028.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var l=s(296540);const t={},r=l.createContext(t);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);