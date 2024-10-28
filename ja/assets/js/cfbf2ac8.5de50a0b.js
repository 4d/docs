"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30726],{641466:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=s(474848),t=s(28453);const d={id:"open-url",title:"OPEN URL",slug:"/commands/open-url",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/open-url",title:"OPEN URL",description:"OPEN URL ( path {; appName}{; *} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-url.md",sourceDirName:"commands-legacy",slug:"/commands/open-url",permalink:"/docs/ja/commands/open-url",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"open-url",title:"OPEN URL",slug:"/commands/open-url",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Monitored activity",permalink:"/docs/ja/commands/monitored-activity"},next:{title:"PROCESS 4D TAGS",permalink:"/docs/ja/commands/process-4d-tags"}},c={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"\u4f8b\u984c 3",id:"\u4f8b\u984c-3",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OPEN URL"})," ( ",(0,r.jsx)(n.em,{children:"path"})," {; ",(0,r.jsx)(n.em,{children:"appName"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u958b\u304f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u307e\u305f\u306fURL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"appName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6307\u5b9a\u3057\u305f\u5834\u5408 = URL\u3092\u30a8\u30f3\u30b3\u30fc\u30c9\u3057\u306a\u3044, \u7701\u7565\u3057\u305f\u5834\u5408 = URL\u3092\u30a8\u30f3\u30b3\u30fc\u30c9\u3059\u308b"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OPEN URL"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,r.jsx)(n.em,{children:"appName"})," \u3067\u6307\u5b9a\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,r.jsx)(n.em,{children:"path"})," \u5f15\u6570\u306b\u6e21\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3084URL\u3092\u958b\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"path"})," \u5f15\u6570\u306b\u306f\u6a19\u6e96\u306eURL\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u540d\u306e\u3069\u3061\u3089\u304b\u3092\u6e21\u3059\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002\u30b3\u30de\u30f3\u30c9\u306f\u3001OS X\u74b0\u5883\u4e0b\u3067\u306f\u30b3\u30ed\u30f3 (':')\u3001Windows\u74b0\u5883\u4e0b\u3067\u306f\u30b9\u30e9\u30c3\u30b7\u30e5('\\')\u3001\u307e\u305f\u306ffile://\u3067\u59cb\u307e\u308bPosix URL\u3092\u53d7\u3051\u53d6\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"appName"})," \u5f15\u6570\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u30014D\u306f\u307e\u305a\u5f15\u6570\u3092\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u540d\u3068\u3057\u3066\u89e3\u91c8\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u54084D\u306f\u30b7\u30b9\u30c6\u30e0\u306b\u3001\u3082\u3063\u3068\u3082\u9069\u5207\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u3088\u3046\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059 (\u4f8b\u3048\u3070\u3001.html\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u3001.doc\u30d5\u30a1\u30a4\u30eb\u306b\u306fMS Word\u3092\u4f7f\u7528\u3057\u307e\u3059)\u3002\u3053\u306e\u5834\u5408 * \u5f15\u6570\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"path"})," \u5f15\u6570\u306b\u6a19\u6e96\u306eURL (mailto:, news:, http:\u306a\u3069\u306e\u30d7\u30ed\u30c8\u30b3\u30eb) \u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u30014D \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eWeb\u30d6\u30e9\u30a6\u30b6\u3092\u958b\u59cb\u3057\u3001URL\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306b\u63a5\u7d9a\u3055\u308c\u305f\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u30d6\u30e9\u30a6\u30b6\u304c\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u4f55\u3082\u884c\u3044\u307e\u305b\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"appName"})," parameter\u5f15\u6570\u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u307e\u305a\u30b7\u30b9\u30c6\u30e0\u306b\u554f\u3044\u5408\u308f\u305b\u3092\u3057\u307e\u3059\u3002\u305d\u306e\u540d\u524d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001\u305d\u308c\u304c\u8d77\u52d5\u3057\u3001\u30b3\u30de\u30f3\u30c9\u306f\u305d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6307\u5b9a\u3055\u308c\u305fURL\u307e\u305f\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u958b\u304f\u3088\u3046\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059\u3002",(0,r.jsx)(n.br,{}),"\nWindows\u74b0\u5883\u4e0b\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u3092\u8a8d\u8b58\u3059\u308b\u30e1\u30ab\u30cb\u30ba\u30e0\u306f\u3001\u30b9\u30bf\u30fc\u30c8\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u6307\u5b9a\u3057\u3066\u5b9f\u884c\u300d\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3068\u540c\u3058\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u69d8\u306a\u3082\u306e\u3092\u6e21\u3059\u4e8b\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"iexplore" \u3067 Internet Explorer \u3092\u8d77\u52d5'}),"\n",(0,r.jsx)(n.li,{children:'"chrome" \u3067 Chrome \u3092\u8d77\u52d5(\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308c\u3070)'}),"\n",(0,r.jsx)(n.li,{children:'"winword" \u3067 MS Word \u3092\u8d77\u52d5(\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308c\u3070)'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8:"})," \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u89a7\u306f\u3001\u4ee5\u4e0b\u306e\u30ad\u30fc\u306e",(0,r.jsx)(n.em,{children:"registry"})," \u306b\u3042\u308a\u307e\u3059: HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths"]}),"\n",(0,r.jsx)(n.p,{children:"OS X \u74b0\u5883\u4e0b\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u63a2\u3059\u306e\u306b\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5168\u3066\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3057\u3066\u304f\u308c\u308bFinder\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067.app\u5f62\u5f0f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3069\u308c\u3082\u8a8d\u8b58\u3059\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"safari"'}),"\n",(0,r.jsx)(n.li,{children:'"FireFox"'}),"\n",(0,r.jsx)(n.li,{children:'"TextEdit"'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"appName"})," \u5f15\u6570\u3067\u6307\u5b9a\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u30a8\u30e9\u30fc\u306f\u8fd4\u3055\u308c\u307e\u305b\u3093\u3002\u30b3\u30de\u30f3\u30c9\u306f\u305d\u306e\u5f15\u6570\u304c\u6307\u5b9a\u3055\u308c\u306a\u304b\u3063\u305f\u3082\u306e\u3068\u3057\u3066\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:['4D\u306f\u81ea\u52d5\u3067URL\u306e\u7279\u5225\u6587\u5b57\u3092\u30a8\u30f3\u30b3\u30fc\u30c9\u3057\u307e\u3059\u3002\u5f15\u6570\u306b***\u3092\u6e21\u3059\u3068\u30014D\u306fURL\u7279\u5225\u6587\u5b57\u306e\u30a8\u30f3\u30b3\u30fc\u30c9\u3092\u884c\u3044\u307e\u305b\u3093\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306aURL\u306e\u9001\u4fe1\u304c\u53ef\u80fd\u3067\u3059: "',(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"http://www.server.net/page.htm?q=something",children:"http://www.server.net/page.htm?q=something"})}),'"']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8:"})," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306fWeb\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u547c\u3070\u308c\u305f\u6642\u306f\u52d5\u4f5c\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c 1"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u3067\u306f\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u304cURL\u5f15\u6570\u3068\u3057\u3066\u53d7\u3051\u5165\u308c\u308b\u7570\u306a\u308b\u30bf\u30a4\u30d7\u306e\u6587\u5b57\u5217\u3092\u4f8b\u793a\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN URL("http://www.4d.com")\n\xa0OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")\n\xa0OPEN URL("C:\\\\Users\\\\Laurent\\\\Documents\\\\pending.htm")\n\xa0OPEN URL("mailto:jean_martin@4d.fr")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c 2"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u306f\u6700\u9069\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$file:=Select document("";"";0)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN URL(Document)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c-3",children:"\u4f8b\u984c 3"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"appName"})," \u5f15\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u540c\u3058\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u7570\u306a\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u958b\u304f\u4e8b\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN URL("C:\\\\temp\\\\cookies.txt")\xa0//\u30d5\u30a1\u30a4\u30eb\u3092\u30e1\u30e2\u5e33\u3067\u958b\u304f\n\xa0OPEN URL("C:\\\\temp\\\\cookies.txt";"winword")\xa0//\u30d5\u30a1\u30a4\u30eb\u3092MS Word\u3067\u958b\u304f(\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308c\u3070)\n\xa0OPEN URL("C:\\\\temp\\\\cookies.txt";"excel")\xa0//\u30d5\u30a1\u30a4\u30eb\u3092MS Excel\u3067\u958b\u304f(\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308c\u3070)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(296540);const t={},d=r.createContext(t);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);