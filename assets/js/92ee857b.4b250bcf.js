"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87619"],{631800:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/print-settings-to-blob","title":"Print settings to BLOB","description":"Print settings to BLOB ( printSettings ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/print-settings-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/print-settings-to-blob","permalink":"/docs/20-R8/commands/print-settings-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-settings-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print-settings-to-blob","title":"Print settings to BLOB","slug":"/commands/print-settings-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT SETTINGS","permalink":"/docs/20-R8/commands/print-settings"},"next":{"title":"PRINTERS LIST","permalink":"/docs/20-R8/commands/printers-list"}}'),r=n("785893"),i=n("250065");let o={id:"print-settings-to-blob",title:"Print settings to BLOB",slug:"/commands/print-settings-to-blob",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Windows / macOS",id:"windows--macos",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Print settings to BLOB"})," ( ",(0,r.jsx)(t.em,{children:"printSettings"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"printSettings"}),(0,r.jsx)(t.td,{children:"Blob"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Current print settings"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Status code: 1=Operation successful, 0=No current printer"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Print settings to BLOB"})," command saves the current 4D print settings in the ",(0,r.jsx)(t.em,{children:"printSettings"})," BLOB. The ",(0,r.jsx)(t.em,{children:"printSettings"})," parameter stores all the settings used for printing:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Layout parameters such as paper, orientation, scale, etc."}),"\n",(0,r.jsx)(t.li,{children:"Print parameters such as number of copies, paper source, etc."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This command must be used in conjunction with the ",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/blob-to-print-settings",children:"BLOB to print settings"}),' command. These commands allow you to save a user\'s current print settings and reload them subsequently so that users will not need to specify their parameters each time they start a print job. In addition, it allows you to save "private" printer settings (specific to the printer driver) that are not available as standard printing parameters.']}),"\n",(0,r.jsxs)(t.p,{children:["The BLOB generated must not be modified by programming; it can only be used by the ",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/blob-to-print-settings",children:"BLOB to print settings"})," command."]}),"\n",(0,r.jsx)(t.p,{children:"The command returns 1 if the BLOB has been generated correctly, and 0 if no current printer is selected."}),"\n",(0,r.jsx)(t.h3,{id:"windows--macos",children:"Windows / macOS"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"printSettings"})," BLOB can be saved and read on both platforms. However, even if some print settings are common, some others are platform-specific and depend on the drivers and system versions. If the same ",(0,r.jsx)(t.em,{children:"printSettings"})," BLOB is shared between both platforms, you may lost information parts.",(0,r.jsx)(t.br,{}),"\nWhen used in an heterogeneous environment, in order to restore the maximum settings available for each platform (and not only the common part), it is recommended that you handle two ",(0,r.jsx)(t.em,{children:"printSettings"})," BLOBs, one for each platform."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"You want to store the current print settings to disk:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var curSettings : Blob\n\xa0PRINT SETTINGS\xa0//displays print settings dialog to the user\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$err:=Print settings to BLOB(curSettings)\n\xa0\xa0\xa0\xa0If($err=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Get 4D folder+"current4Dsettings.blob";curSettings)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("No selected printer")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/blob-to-print-settings",children:"BLOB to print settings"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1433"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);