/*! For license information please see 54170fb7.c1171d3a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86415],{498717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=t(474848),s=t(28453);const c={id:"vp-get-active-cell",title:"VP Get active cell"},i=void 0,l={id:"ViewPro/commands/vp-get-active-cell",title:"VP Get active cell",description:"VP Get active cell (  vpAreaName Integer } ) : Object",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-active-cell.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-active-cell",permalink:"/docs/ja/ViewPro/commands/vp-get-active-cell",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-active-cell.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-active-cell",title:"VP Get active cell"},sidebar:"docs",previous:{title:"G",permalink:"/docs/ja/commands/G"},next:{title:"VP Get binding path",permalink:"/docs/ja/ViewPro/commands/vp-get-binding-path"}},d={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get active cell"})," (  ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30b7\u30fc\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 (\u7701\u7565\u3057\u305f\u5834\u5408\u306f\u30ab\u30ec\u30f3\u30c8\u30b7\u30fc\u30c8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"\u5358\u4e00\u30bb\u30eb\u306e\u30ec\u30f3\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP Get active cell"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u30d5\u30a9\u30fc\u30ab\u30b9\u3092\u6301\u3061\u3001\u30c7\u30fc\u30bf\u5165\u529b\u3055\u308c\u3088\u3046\u3068\u3057\u3066\u308b\u30bb\u30eb (\u30a2\u30af\u30c6\u30a3\u30d6\u30bb\u30eb) \u3092\u53c2\u7167\u3059\u308b\u65b0\u3057\u3044\u30ec\u30f3\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"vpAreaName"})," \u306b\u306f\u30014D View Pro \u30a8\u30ea\u30a2\u306e\u540d\u524d\u3092\u6e21\u3057\u307e\u3059\u3002 \u5b58\u5728\u3057\u306a\u3044\u540d\u524d\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4efb\u610f\u306e ",(0,r.jsx)(n.em,{children:"sheet"})," \u5f15\u6570\u3068\u3057\u3066\u3001\u30b7\u30fc\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 (0 \u8d77\u70b9) \u3092\u6e21\u3059\u3053\u3068\u3067\u3001\u5b9a\u7fa9\u3055\u308c\u308b\u30ec\u30f3\u30b8\u304c\u5c5e\u3059\u308b\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u7701\u7565\u3055\u308c\u305f\u5834\u5408\u3001\u307e\u305f\u306f ",(0,r.jsx)(n.code,{children:"vk current sheet"})," \u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30ab\u30ec\u30f3\u30c8\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(300201).A+"",width:"548",height:"359"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u30a2\u30af\u30c6\u30a3\u30d6\u30bb\u30eb\u306e\u5ea7\u6a19\u304c\u53d6\u5f97\u3067\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$activeCell:=VP Get active cell("myVPArea")\n\n  // \u8fd4\u3055\u308c\u308b\u30ec\u30f3\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u4ee5\u4e0b\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059:\n  //$activeCell.ranges[0].column=3\n  //$activeCell.ranges[0].row=4\n  //$activeCell.ranges[0].sheet=0\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,c={},o=null,a=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:c,_owner:l.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},300201:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpGetActiveCell-8ebb4e93425aab7ecfcd2a337e26e6a9.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(296540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);