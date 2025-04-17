"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3317"],{109724:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>r,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/play","title":"PLAY","description":"PLAY ( objectName {; async} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/play.md","sourceDirName":"commands-legacy","slug":"/commands/play","permalink":"/docs/20-R8/commands/play","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fplay.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"play","title":"PLAY","slug":"/commands/play","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOUSE POSITION","permalink":"/docs/20-R8/commands/mouse-position"},"next":{"title":"Pop up menu","permalink":"/docs/20-R8/commands/pop-up-menu"}}'),a=s("785893"),o=s("250065");let l={id:"play",title:"PLAY",slug:"/commands/play",displayed_sidebar:"docs"},d=void 0,r={},i=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"PLAY"})," ( ",(0,a.jsx)(n.em,{children:"objectName"})," {; ",(0,a.jsx)(n.em,{children:"async"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objectName"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name or path of sound file or system soundEmpty string for stopping asynchronous play"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"async"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"(Windows) If specified, asynchronous execution; If omitted, synchronous execution"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"PLAY"})," command plays sound or multimedia files. You pass the full pathname of the file you want to play in ",(0,a.jsx)(n.em,{children:"objectName"}),". On macOS, the command can also be used to play a system sound."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["To play a file, pass its name and pathname in ",(0,a.jsx)(n.em,{children:"objectName"}),". You can pass a full pathname or a pathname relative to the database structure file.",(0,a.jsx)(n.br,{}),"\nThe main sound and multimedia file formats are supported: .WAV, .MP3, .AIFF (macOS), etc. Under macOS, the command supports more particularly the Core Audio formats."]}),"\n",(0,a.jsxs)(n.li,{children:["(macOS only) To play a system sound, pass its name directly in the ",(0,a.jsx)(n.em,{children:"objectName"})," parameter."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," 'snd' resources, as used on Mac OS 9 and older, are no longer supported."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.em,{children:"async"})," parameter specifies that the sound will play asynchronously on Windows. Synchronous play means that all processing stops until the sound has finished playing; asynchronous means that processing does not stop and the sound plays in the background. If ",(0,a.jsx)(n.em,{children:"async"})," is passed and contains 0 (or any longint value), the sound is played asynchronously. If omitted, the sound is played synchronously.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Note:"})," On macOS, the sound is always played asynchronously, with or without the ",(0,a.jsx)(n.em,{children:"async"})," parameter."]}),"\n",(0,a.jsx)(n.p,{children:"To stop playing an asynchronous sound, use the following statement:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0PLAY("";0)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"The following example shows how to play a WAV file on Windows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$DocRef :=Open document("";"WAV";Read Mode)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($DocRef)\n\xa0\xa0\xa0\xa0PLAY(Document;0)\xa0//play asynchronously\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(n.p,{children:"The following example code plays a system sound on macOS:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0PLAY("Submarine.aiff")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/beep",children:"BEEP"})}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"290"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let a={},o=t.createContext(a);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);