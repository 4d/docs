/*! For license information please see 8a207f8f.b0a4bb81.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56749],{166866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"onColumnResize",title:"On Column Resize"},d=void 0,o={id:"Events/onColumnResize",title:"On Column Resize",description:"| \u30b3\u30fc\u30c9 | \u547c\u3073\u51fa\u3057\u5143                                                                                                                                                               | \u5b9a\u7fa9                                               |",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Events/onColumnResize.md",sourceDirName:"Events",slug:"/Events/onColumnResize",permalink:"/docs/ja/20/Events/onColumnResize",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonColumnResize.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onColumnResize",title:"On Column Resize"},sidebar:"docs",previous:{title:"On Column Moved",permalink:"/docs/ja/20/Events/onColumnMoved"},next:{title:"On Data Change",permalink:"/docs/ja/20/Events/onDataChange"}},l={},c=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",id:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,r.jsx)(n.th,{children:"\u547c\u3073\u51fa\u3057\u5143"}),(0,r.jsx)(n.th,{children:"\u5b9a\u7fa9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"33"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20/FormObjects/viewProAreaOverview",children:"4D View Pro \u30a8\u30ea\u30a2"})," - ",(0,r.jsx)(n.a,{href:"/docs/ja/20/FormObjects/listboxOverview",children:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"})," - ",(0,r.jsx)(n.a,{href:"/docs/ja/20/FormObjects/listboxOverview#%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%88%97",children:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u5217"})]}),(0,r.jsx)(n.td,{children:"\u30e6\u30fc\u30b6\u30fc\u306e\u30de\u30a6\u30b9\u64cd\u4f5c\u306b\u3088\u3063\u3066\u3001\u307e\u305f\u306f\u30d5\u30a9\u30fc\u30e0\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30ea\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u3001\u30ab\u30e9\u30e0\u306e\u5e45\u304c\u5909\u66f4\u3055\u308c\u305f"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(n.h3,{id:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",children:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"}),"\n",(0,r.jsxs)(n.p,{children:['\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u3063\u3066\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u5217\u5e45\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f "\u30e9\u30a4\u30d6" \u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u5bfe\u8c61\u3068\u306a\u308b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3042\u308b\u3044\u306f\u30ab\u30e9\u30e0\u304c\u30ea\u30b5\u30a4\u30ba\u3055\u308c\u3066\u3044\u308b\u9593\u306f\u305a\u3063\u3068\u7d99\u7d9a\u3057\u3066\u9001\u4fe1\u3055\u308c\u3064\u3065\u3051\u307e\u3059\u3002 \u30ea\u30b5\u30a4\u30ba\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u3063\u3066\u624b\u52d5\u3067\u304a\u3053\u306a\u308f\u308c\u308b\u304b\u3001\u3042\u308b\u3044\u306f\u30d5\u30a9\u30fc\u30e0\u30a6\u30a3\u30f3\u30c9\u30a6\u81ea\u8eab\u306e\u30ea\u30b5\u30a4\u30ba\u306e\u7d50\u679c\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3068\u305d\u306e\u30ab\u30e9\u30e0\u304c\u30ea\u30b5\u30a4\u30ba\u3055\u308c\u308b\u5834\u5408\u3082\u542b\u307f\u307e\u3059 (\u624b\u52d5\u306b\u3088\u308b\u30d5\u30a9\u30fc\u30e0\u306e\u30ea\u30b5\u30a4\u30ba\u304a\u3088\u3073 ',(0,r.jsx)(n.code,{children:"RESIZE FORM WINDOW"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u305f\u30ea\u30b5\u30a4\u30ba)\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../FormObjects/propertiesResizingOptions.html#%E4%BD%99%E7%99%BD%E3%82%AB%E3%83%A9%E3%83%A0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",children:"\u4f59\u767d\u30ab\u30e9\u30e0"})," \u304c\u30ea\u30b5\u30a4\u30ba\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"On Column Resize"})," \u30a4\u30d9\u30f3\u30c8\u306f\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u305b\u3093"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u30ab\u30e9\u30e0\u306e\u5e45\u304c\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066\u3001",(0,r.jsx)(n.code,{children:"FORM Event"})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u308b ",(0,r.jsx)(n.a,{href:"/docs/ja/20/Events/overview#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"\u30a4\u30d9\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u306b\u306f\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsx)(n.td,{children:"On Column Resize"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Column Resize"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30a8\u30ea\u30a2\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u305f\u30b7\u30fc\u30c8\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"\u5e45\u304c\u5909\u66f4\u3055\u308c\u305f\u30ab\u30e9\u30e0\u306e\u30bb\u30eb\u30ec\u30f3\u30b8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"\u884c\u30d8\u30c3\u30c0\u30fc\u30ab\u30e9\u30e0 (\u6700\u521d\u306e\u30ab\u30e9\u30e0) \u304c\u30ea\u30b5\u30a4\u30ba\u3055\u308c\u305f\u5834\u5408\u306b\u306f true\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306b\u306f false"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,h=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:h,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);