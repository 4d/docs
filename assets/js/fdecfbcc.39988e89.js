/*! For license information please see fdecfbcc.39988e89.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4307],{694328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var l=t(474848),r=t(28453);const s={id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},d=void 0,i={id:"ViewPro/commands/vp-import-from-blob",title:"VP IMPORT FROM BLOB",description:"VP IMPORT FROM BLOB ( vpAreaName 4D.blob { ; paramObj : Object} )",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-import-from-blob.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-import-from-blob",permalink:"/docs/ViewPro/commands/vp-import-from-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-from-blob.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},sidebar:"docs",previous:{title:"VP IMPORT DOCUMENT",permalink:"/docs/ViewPro/commands/vp-import-document"},next:{title:"VP IMPORT FROM OBJECT",permalink:"/docs/ViewPro/commands/vp-import-from-object"}},o={},c=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP IMPORT FROM BLOB"})," ( ",(0,l.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,l.jsx)(n.em,{children:"vpBlob"})," : 4D.blob { ; ",(0,l.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vpAreaName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vpBlob"}),(0,l.jsx)(n.td,{children:"4D.Blob"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Blob containing a 4D View Pro document"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"paramObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Import options"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"VP IMPORT FROM BLOB"})," command imports the ",(0,l.jsx)(n.em,{children:"vpBlob"})," in the 4D View Pro area ",(0,l.jsx)(n.em,{children:"vpAreaName"})," and replaces its contents. ",(0,l.jsx)(n.em,{children:"vpBlob"})," must contain a 4D View Pro document previously saved as Blob either by using the ",(0,l.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})," command or via the 4D View Pro interface."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"paramObj"}),", you can pass several properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formula"}),(0,l.jsx)(n.td,{children:"4D.Function"}),(0,l.jsxs)(n.td,{children:["Callback method to be launched when the import has completed. See ",(0,l.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"calcOnDemand"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Whether to calculate formulas only when they are demanded, default=false."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"dynamicReferences"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Whether to calculate functions with dynamic reference, default=true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fullRecalc"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Whether to calculate after loading the json data, false by default."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"includeFormulas"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Whether to include the formula when loading, default=true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"includeStyles"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Whether to include the style when loading, default=true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"includeUnusedStyles"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Whether to include the unused name style when converting excel xml to the json, default=true."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"openMode"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsxs)(n.td,{children:["can be: ",(0,l.jsx)(n.br,{}),"0: normal open mode, without lazy and incremental. When opening document, UI and UI event could be refreshed and responsive at specific time points. ",(0,l.jsx)(n.br,{}),"1: lazy open mode. When opening document, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used. ",(0,l.jsx)(n.br,{}),"2: incremental open mode. When opening document, UI and UI event could be refreshed and responsive directly."]})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"The following parameters can be used in the callback method:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(n.th,{style:{textAlign:"left"}}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"param1"}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The name of the 4D View Pro area object"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"param2"}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"4D.Blob"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"The imported blob"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"param3"}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["A reference to the command's ",(0,l.jsx)(n.em,{children:"paramObj"})," parameter"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"param4"}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"An object returned by the method with a status message"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:".success"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"True if import with success, False otherwise."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:".errorCode"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"integer"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Error code."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Error message."})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"Example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:'You want to import into the "ViewProArea" a 4D View Pro document previously saved as Blob in the first entity of the Table dataclass.'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob\nVP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)\n\n'})}),"\n",(0,l.jsx)(n.h4,{id:"See-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var l=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var l,s={},c=null,a=null;for(l in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,l)&&!o.hasOwnProperty(l)&&(s[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===s[l]&&(s[l]=n[l]);return{$$typeof:r,type:e,key:c,ref:a,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var l=t(296540);const r={},s=l.createContext(r);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);