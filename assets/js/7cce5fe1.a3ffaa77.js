/*! For license information please see 7cce5fe1.a3ffaa77.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76042],{668598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(474848),i=n(28453);const r={id:"vp-get-default-style",title:"VP Get default style"},o=void 0,d={id:"ViewPro/commands/vp-get-default-style",title:"VP Get default style",description:"VP Get default style ( vpAreaName  Integer } ) : Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-default-style.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-default-style",permalink:"/docs/ViewPro/commands/vp-get-default-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-default-style.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-default-style",title:"VP Get default style"},sidebar:"docs",previous:{title:"VP Get data context",permalink:"/docs/ViewPro/commands/vp-get-data-context"},next:{title:"VP Get formula",permalink:"/docs/ViewPro/commands/vp-get-formula"}},l={},h=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get default style"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text { ; ",(0,s.jsx)(t.em,{children:"sheet"})," :  Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"4D View Pro area from object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Default style settings"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"Description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get default style"})," command returns a default style object for a sheet. The returned object contains basic document rendering properties as well as the default style settings (if any) previously set by the ",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})," method. For more information about style properties, see ",(0,s.jsx)(t.a,{href:"/docs/ViewPro/configuring#style-objects--style-sheets",children:"Style Objects & Style Sheets"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"vpAreaName"}),", pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(t.p,{children:["You can define where to get the column count in the optional ",(0,s.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0). If omitted or if you pass ",(0,s.jsx)(t.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,s.jsx)(t.h4,{id:"Example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"To get the details about the default style for this document:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(764104).A+"",width:"354",height:"223"})}),"\n",(0,s.jsx)(t.p,{children:"This code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$defaultStyle:=VP Get default style("myDoc")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["will return this information in the ",(0,s.jsx)(t.em,{children:"$defaultStyle"})," object:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"{\n backColor:#E6E6FA,\n hAlign:0,\n vAlign:0,\n font:12pt papyrus\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-cell-style",children:"VP Get cell style"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var s=n(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var s,r={},h=null,c=null;for(s in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:h,ref:c,props:r,_owner:d.current}}t.Fragment=r,t.jsx=h,t.jsxs=h},474848:(e,t,n)=>{e.exports=n(221020)},764104:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(296540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);