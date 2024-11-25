"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5495"],{836994:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/screen-coordinates","title":"SCREEN COORDINATES","description":"SCREEN COORDINATES ( left ; top ; right ; bottom {; screenID {; screenArea}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/screen-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/screen-coordinates","permalink":"/docs/commands/screen-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"screen-coordinates","title":"SCREEN COORDINATES","slug":"/commands/screen-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN FONT PICKER","permalink":"/docs/commands/open-font-picker"},"next":{"title":"SCREEN DEPTH","permalink":"/docs/commands/screen-depth"}}'),t=r("785893"),c=r("250065");let d={id:"screen-coordinates",title:"SCREEN COORDINATES",slug:"/commands/screen-coordinates",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCREEN COORDINATES"})," ( ",(0,t.jsx)(n.em,{children:"left"})," ; ",(0,t.jsx)(n.em,{children:"top"})," ; ",(0,t.jsx)(n.em,{children:"right"})," ; ",(0,t.jsx)(n.em,{children:"bottom"})," {; ",(0,t.jsx)(n.em,{children:"screenID"})," {; ",(0,t.jsx)(n.em,{children:"screenArea"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"left"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Global left coordinate of screen area"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"top"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Global top coordinate of screen area"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"right"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Global right coordinate of screen area"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bottom"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Global bottom coordinate of screen area"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"screenID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Screen number, or main screen if omitted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"screenArea"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Entire screen (default) or working area"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The SCREEN COORDINATES command returns in ",(0,t.jsx)(n.em,{children:"left"}),", ",(0,t.jsx)(n.em,{children:"top"}),", ",(0,t.jsx)(n.em,{children:"right,"})," and ",(0,t.jsx)(n.em,{children:"bottom"})," the global coordinates of the screen specified by ",(0,t.jsx)(n.em,{children:"screenID"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you omit the ",(0,t.jsx)(n.em,{children:"screenID"})," parameter, the command returns the coordinates of the main screen."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"screenArea"})," parameter lets you specify if you want the coordinates for the entire screen area (default) or only for the available usable area. Two selectors are available:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Screen size"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"The coordinates of the entire screen. (default value)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Screen work area"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["The coordinates of the available screen area that can be used ",(0,t.jsx)(n.em,{children:"(i.e."}),", they are not occupied by Windows taskbar or macOS menu bar and Dock)."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The following images demonstrate the differences between the screen size and the work area:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(807877).Z+"",width:"730",height:"201"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the taskbar or dock is automatically hidden, ",(0,t.jsx)(n.strong,{children:"SCREEN COORDINATES"})," always returns the entire screen size."]}),"\n",(0,t.jsxs)(n.li,{children:["If an invalid value is given in ",(0,t.jsx)(n.em,{children:"screenID"})," or ",(0,t.jsx)(n.em,{children:"screenArea"}),", a zero is returned for all of the coordinates."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/count-screens",children:"Count screens"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/menu-bar-screen",children:"Menu bar screen"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/screen-depth",children:"SCREEN DEPTH"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},807877:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4800387.en-09828b7fbc78891e9652bec39c1f7008.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let t={},c=s.createContext(t);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);