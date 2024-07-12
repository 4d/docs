/*! For license information please see 209a6fe0.35609f03.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48860],{77795:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var t=r(474848),o=r(28453);const s={id:"vp-get-formula-by-name",title:"VP Get formula by name"},a=void 0,d={id:"ViewPro/commands/vp-get-formula-by-name",title:"VP Get formula by name",description:"VP Get formula by name ( vpAreaName Text { ; scope Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-formula-by-name.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-formula-by-name",permalink:"/docs/20-R5/ViewPro/commands/vp-get-formula-by-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula-by-name.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-formula-by-name",title:"VP Get formula by name"},sidebar:"docs",previous:{title:"VP Get formula",permalink:"/docs/20-R5/ViewPro/commands/vp-get-formula"},next:{title:"VP Get formulas",permalink:"/docs/20-R5/ViewPro/commands/vp-get-formulas"}},l={},i=[{value:"Description",id:"description",level:4},{value:"Returned Object",id:"returned-object",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get formula by name"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"name"})," : Text { ; ",(0,t.jsx)(n.em,{children:"scope"})," : Number } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Name of the named range"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Target scope (default=current sheet)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Named formula or named range definition"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get formula by name"})," command  returns the formula and comment corresponding to the named range or named formula passed in the ",(0,t.jsx)(n.em,{children:"name"})," parameter, or ",(0,t.jsx)(n.strong,{children:"null"})," if it does not exist in the defined scope."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass the named range or named formula that you want to get in ",(0,t.jsx)(n.em,{children:"name"}),". Note that named ranges are returned as formulas containing absolute cell references."]}),"\n",(0,t.jsxs)(n.p,{children:["You can define where to get the formula in ",(0,t.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"returned-object",children:"Returned Object"}),"\n",(0,t.jsx)(n.p,{children:"The returned object contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Text of the formula corresponding to the named formula or named range. For named ranges, the formula is a sequence of absolute coordinates."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Comment corresponding to the named formula or named range"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n \n$formula:=VP Get formula by name("ViewProArea";"Total1")\n  //$formula.formula=Sheet1!$A$1\n \n$formula:=VP Get formula by name("ViewProArea";"Total")\n  //$formula=null (if not existing)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-names",children:"VP Get names"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,s={},i=null,c=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:c,props:s,_owner:d.current}}n.Fragment=s,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(296540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);