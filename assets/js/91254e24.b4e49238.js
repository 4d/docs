"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62557"],{358836:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-recent-fonts","title":"SET RECENT FONTS","description":"SET RECENT FONTS ( fontsArray )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-recent-fonts.md","sourceDirName":"commands-legacy","slug":"/commands/set-recent-fonts","permalink":"/docs/20-R7/commands/set-recent-fonts","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-recent-fonts.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-recent-fonts","title":"SET RECENT FONTS","slug":"/commands/set-recent-fonts","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select RGB Color","permalink":"/docs/20-R7/commands/select-rgb-color"},"next":{"title":"System folder","permalink":"/docs/20-R7/commands/system-folder"}}'),r=t("785893"),c=t("250065");let d={id:"set-recent-fonts",title:"SET RECENT FONTS",slug:"/commands/set-recent-fonts",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET RECENT FONTS"})," ( ",(0,r.jsx)(n.em,{children:"fontsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fontsArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Array of font names"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SET RECENT FONTS"}),' command modifies the list of fonts displayed in the context menu of the "recent fonts".']}),"\n",(0,r.jsxs)(n.p,{children:["This menu contains the names of the last fonts selected during the session. It is used in particular by ",(0,r.jsx)(n.em,{children:"Programming Notes"})," areas."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to add a font to the menu of recent fonts:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(245868).Z+"",width:"433",height:"244"})}),"\n",(0,r.jsx)(n.p,{children:"You execute the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrRecent;0)\n\xa0FONT LIST($arrRecent;2)\n\xa0APPEND TO ARRAY($arrRecent;"Segoe Script")\n\xa0APPEND TO ARRAY($arrRecent)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then the menu contains:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(540410).Z+"",width:"467",height:"243"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/font-list",children:"FONT LIST"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1305"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},245868:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict1202029.en-40cd8bff9ed6120af29a90c5dad795ee.png"},540410:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict1202031.en-14c405c9da34d8facbfc30dc88ce7157.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},c=s.createContext(r);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);