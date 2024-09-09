/*! For license information please see 00fd7450.e5a9447f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26955],{723464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(474848),i=t(28453);const s={id:"onSelectionChange",title:"On Selection Change"},d=void 0,l={id:"Events/onSelectionChange",title:"On Selection Change",description:"| \u30b3\u30fc\u30c9 | \u547c\u3073\u51fa\u3057\u5143                                                                                                                                                                                                                                            | \u5b9a\u7fa9               |",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Events/onSelectionChange.md",sourceDirName:"Events",slug:"/Events/onSelectionChange",permalink:"/docs/ja/19/Events/onSelectionChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonSelectionChange.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onSelectionChange",title:"On Selection Change"},sidebar:"docs",previous:{title:"On Scroll",permalink:"/docs/ja/19/Events/onScroll"},next:{title:"On Timer",permalink:"/docs/ja/19/Events/onTimer"}},c={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0",id:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0",level:3},{value:"\u968e\u5c64\u30ea\u30b9\u30c8",id:"\u968e\u5c64\u30ea\u30b9\u30c8",level:3},{value:"\u5165\u529b &amp; 4D Write Pro",id:"\u5165\u529b--4d-write-pro",level:3},{value:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",id:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,r.jsx)(n.th,{children:"\u547c\u3073\u51fa\u3057\u5143"}),(0,r.jsx)(n.th,{children:"\u5b9a\u7fa9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"31"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/19/FormObjects/viewProAreaOverview",children:"4D View Pro \u30a8\u30ea\u30a2"})," - ",(0,r.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro \u30a8\u30ea\u30a2"})," - \u30d5\u30a9\u30fc\u30e0 - ",(0,r.jsx)(n.a,{href:"/docs/ja/19/FormObjects/listOverview",children:"\u968e\u5c64\u30ea\u30b9\u30c8"})," - ",(0,r.jsx)(n.a,{href:"/docs/ja/19/FormObjects/inputOverview",children:"\u5165\u529b"})," - ",(0,r.jsx)(n.a,{href:"/docs/ja/19/FormObjects/listboxOverview",children:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"})]}),(0,r.jsx)(n.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5185\u3067\u9078\u629e\u304c\u5909\u66f4\u3055\u308c\u305f"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u69d8\u3005\u306a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u767a\u751f\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["\u73fe\u5728\u306e\u884c\u3084\u5217\u306e\u9078\u629e\u304c\u5909\u66f4\u3055\u308c\u305f\u3002 \u3053\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066\u3001",(0,r.jsx)(n.code,{children:"FORM Event"})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u308b ",(0,r.jsx)(n.a,{href:"/docs/ja/19/Events/overview#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"\u30a4\u30d9\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u306b\u306f\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsx)(n.td,{children:"31"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Selection Change"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30a8\u30ea\u30a2\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u305f\u30b7\u30fc\u30c8\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oldSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"\u5909\u66f4\u524d\u306e\u30bb\u30eb\u30ec\u30f3\u30b8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"newSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"\u5909\u66f4\u5f8c\u306e\u30bb\u30eb\u30ec\u30f3\u30b8"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0",children:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0"}),"\n",(0,r.jsx)(n.p,{children:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u304a\u3044\u3066\u3001\u30ab\u30ec\u30f3\u30c8\u30ec\u30b3\u30fc\u30c9\u3042\u308b\u3044\u306f\u30ab\u30ec\u30f3\u30c8\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u884c\u9078\u629e\u304c\u5909\u66f4\u3055\u308c\u305f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u968e\u5c64\u30ea\u30b9\u30c8",children:"\u968e\u5c64\u30ea\u30b9\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u968e\u5c64\u30ea\u30b9\u30c8\u4e2d\u306e\u9078\u629e\u304c\u30af\u30ea\u30c3\u30af\u3084\u30ad\u30fc\u30b9\u30c8\u30ed\u30fc\u30af\u306a\u3069\u3067\u5909\u66f4\u3055\u308c\u305f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5165\u529b--4d-write-pro",children:"\u5165\u529b & 4D Write Pro"}),"\n",(0,r.jsx)(n.p,{children:"\u30af\u30ea\u30c3\u30af\u3084\u30ad\u30fc\u30b9\u30c8\u30ed\u30fc\u30af\u306b\u3088\u308a\u3001\u9078\u629e\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u3084\u30ab\u30fc\u30bd\u30eb\u306e\u4f4d\u7f6e\u304c\u30a8\u30ea\u30a2\u5185\u3067\u5909\u66f4\u3055\u308c\u305f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",children:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u5185\u3067\u73fe\u5728\u306e\u884c\u3084\u5217\u306e\u9078\u629e\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,h=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:o,ref:h,props:s,_owner:l.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(296540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);