/*! For license information please see c798bf00.900d03d8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72949],{464903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(474848),s=t(28453);const o={id:"onHeaderClick",title:"On Header Click"},i=void 0,d={id:"Events/onHeaderClick",title:"On Header Click",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onHeaderClick.md",sourceDirName:"Events",slug:"/Events/onHeaderClick",permalink:"/docs/19/Events/onHeaderClick",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeaderClick.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onHeaderClick",title:"On Header Click"},sidebar:"docs",previous:{title:"On Header",permalink:"/docs/19/Events/onHeader"},next:{title:"On Load",permalink:"/docs/19/Events/onLoad"}},c={},l=[{value:"Description",id:"description",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Can be called by"}),(0,r.jsx)(n.th,{children:"Definition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"42"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,r.jsx)(n.td,{children:"A click occurs in a column header"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,r.jsxs)(n.p,{children:["This event is generated when a click occurs on the header of a column in the list box. In this case, the ",(0,r.jsx)(n.code,{children:"Self"})," command lets you find out the header of the column that was clicked."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/propertiesAction#sortable",children:"Sortable"})," property was selected for the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the ",(0,r.jsx)(n.code,{children:"$0"})," variable:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"$0"})," equals 0, a standard sort is performed."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"$0"})," equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D language."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/propertiesAction#sortable",children:"Sortable"})," property is not selected for the list box, the ",(0,r.jsx)(n.code,{children:"$0"})," variable is not used."]}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["This event is generated when the user clicks on a column or row header in a 4D View Pro document. In this context, the ",(0,r.jsx)(n.a,{href:"/docs/19/Events/overview#event-object",children:"event object"})," returned by the ",(0,r.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Header Click"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Cell range"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetArea"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsxs)(n.td,{children:["The sheet location where the event took place:",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.li,{children:"0: The crossing area between column number/letter headers (top left of the sheet)"}),(0,r.jsx)(n.li,{children:"1: The column headers (area indicating the column numbers/letters)"}),(0,r.jsx)(n.li,{children:"2: The row headers (area indicating the row numbers)"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Header Click)\n    Case of\n       :(FORM Event.sheetArea=1)\n          $values:=VP Get values(FORM Event.range)\n       :(FORM Event.sheetArea=2)\n          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))\n       :(FORM Event.sheetArea=0)\n          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\\\n          New object("color";"#800080";"style";vk line style thick)))\n    End case\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(296540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);