/*! For license information please see f82bddf8.cdc7ba3d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16287],{304024:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var r=s(474848),t=s(28453);const d={id:"vp-add-stylesheet",title:"VP ADD STYLESHEET"},l=void 0,o={id:"ViewPro/commands/vp-add-stylesheet",title:"VP ADD STYLESHEET",description:"VP ADD STYLESHEET ( vpAreaName Text ; styleObj Integer } )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-add-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-stylesheet",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-add-stylesheet",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-stylesheet.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-add-stylesheet",title:"VP ADD STYLESHEET"},sidebar:"docs",previous:{title:"VP ADD SPAN",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-add-span"},next:{title:"VP All",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-all"}},c={},i=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD STYLESHEET"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"styleName"})," : Text ; ",(0,r.jsx)(n.em,{children:"styleObj"})," : Object { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30b9\u30bf\u30a4\u30eb\u306e\u540d\u524d"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u5c5e\u6027\u8a2d\u5b9a\u3092\u5b9a\u7fa9\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30b7\u30fc\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 (\u7701\u7565\u3057\u305f\u5834\u5408\u306f\u30ab\u30ec\u30f3\u30c8\u30b7\u30fc\u30c8)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP ADD STYLESHEET"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u958b\u3044\u3066\u3044\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306b\u3066\u3001",(0,r.jsx)(n.em,{children:"styleName"})," \u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3092\u3001",(0,r.jsx)(n.em,{children:"styleObj"})," \u5f15\u6570\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u57fa\u3065\u3044\u3066\u4f5c\u6210\u307e\u305f\u306f\u5909\u66f4\u3057\u307e\u3059\u3002 \u540c\u3058\u540d\u524d\u3068\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u6301\u3064\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u304c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306b\u3059\u3067\u306b\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u305d\u308c\u3092\u65b0\u3057\u3044\u5024\u3067\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3067\u4f5c\u6210\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3068\u3068\u3082\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"vpAreaName"})," \u306b\u306f\u30014D View Pro \u30a8\u30ea\u30a2\u306e\u540d\u524d\u3092\u6e21\u3057\u307e\u3059\u3002 \u5b58\u5728\u3057\u306a\u3044\u540d\u524d\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"styleName"})," \u5f15\u6570\u306b\u306f\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u306e\u540d\u524d\u3092\u6e21\u3057\u307e\u3059\u3002 \u540c\u3058\u30b9\u30b3\u30fc\u30d7\u5185\u3067\u540d\u524d\u304c\u65e2\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u65b0\u3057\u3044\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u306f\u65e2\u5b58\u306e\u3082\u306e\u3092\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002 \u305f\u3060\u3057\u7570\u306a\u308b\u30b9\u30b3\u30fc\u30d7\u3067\u3042\u308c\u3070\u540c\u3058\u540d\u524d\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059 (\u4ee5\u4e0b\u53c2\u7167)\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"styleObj"})," \u306b\u306f\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u306e\u8a2d\u5b9a (\u4f8b: \u30d5\u30a9\u30f3\u30c8\u3001\u30c6\u30ad\u30b9\u30c8\u88c5\u98fe\u3001\u6587\u5b57\u63c3\u3048\u3001\u5883\u754c\u7dda\u3001\u306a\u3069) \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30b9\u30bf\u30a4\u30eb\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5b8c\u5168\u306a\u4e00\u89a7\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/configuring#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3",children:"\u30b9\u30bf\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4efb\u610f\u306e ",(0,r.jsx)(n.em,{children:"sheet"})," \u5f15\u6570\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3092\u3069\u3053\u306b\u5b9a\u7fa9\u3059\u308b\u304b\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b7\u30fc\u30c8\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 (0 \u8d77\u70b9) \u304b\u3001\u4ee5\u4e0b\u306e\u5b9a\u6570\u306e\u3044\u305a\u308c\u304b\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u3058 ",(0,r.jsx)(n.em,{children:"styleName"})," \u306e\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u304c\u3001\u30ef\u30fc\u30af\u30d6\u30c3\u30af\u30ec\u30d9\u30eb\u3068\u30b7\u30fc\u30c8\u30ec\u30d9\u30eb\u3068\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b7\u30fc\u30c8\u30ec\u30d9\u30eb\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3092\u9069\u7528\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})," \u307e\u305f\u306f ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306f:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$styles:=New object\n$styles.backColor:="green"\n \n// \u5883\u754c\u7dda\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\n$borders:=New object("color";"green";"style";vk line style medium dash dot)\n \n$styles.borderBottom:=$borders\n$styles.borderLeft:=$borders\n$styles.borderRight:=$borders\n$styles.borderTop:=$borders\n \nVP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)\n \n// \u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\nVP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"GreenDashDotStyle"})," \u3068\u3044\u3046\u540d\u524d\u306e\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b9\u30bf\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"{\n backColor:green,\n borderBottom:{color:green,style:10},\n borderLeft:{color:green,style:10},\n borderRight:{color:green,style:10},\n borderTop:{color:green,style:10}\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/configuring#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88",children:"4D View Pro \u30b9\u30bf\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var r,d={},i=null,h=null;for(r in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:t,type:e,key:i,ref:h,props:d,_owner:o.current}}n.Fragment=d,n.jsx=i,n.jsxs=i},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(296540);const t={},d=r.createContext(t);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);