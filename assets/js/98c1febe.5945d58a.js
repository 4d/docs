"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49193"],{597759:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/blob-to-print-settings","title":"BLOB to print settings","description":"BLOB to print settings ( printSettings {; params} ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/blob-to-print-settings.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-print-settings","permalink":"/docs/commands/blob-to-print-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-print-settings.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-print-settings","title":"BLOB to print settings","slug":"/commands/blob-to-print-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCUMULATE","permalink":"/docs/commands/accumulate"},"next":{"title":"BREAK LEVEL","permalink":"/docs/commands/break-level"}}'),r=t("785893"),i=t("250065");let o={id:"blob-to-print-settings",title:"BLOB to print settings",slug:"/commands/blob-to-print-settings",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Windows / macOS",id:"windows--macos",level:3},{value:"Compatibility with 4D Pack commands",id:"compatibility-with-4d-pack-commands",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB to print settings"})," ( ",(0,r.jsx)(n.em,{children:"printSettings"})," {; ",(0,r.jsx)(n.em,{children:"params"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"printSettings"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB containing print settings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"params"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0=Restore saved values for number of copies and page range, 1=Reset to default values"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Status code: 1=Operation successful, 0=No current printer, -1=Incorrect parameters, 2=Printer changed"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"BLOB to print settings"})," command replaces the current 4D print settings with the parameters stored in the ",(0,r.jsx)(n.em,{children:"printSettings"})," BLOB. This BLOB must have been generated by the ",(0,r.jsx)(n.a,{href:"/docs/commands/print-settings-to-blob",children:"Print settings to BLOB"})," command or the  4D Pack command (see below)."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"params"}),' parameter allows you to define how to handle the basic "number of copies" and "page range" settings:']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you pass 0 or omit this parameter, the values stored in the BLOB are restored,"}),"\n",(0,r.jsx)(n.li,{children:'If you pass 1, the values are reset to default: the number of copies is set to 1 and the page range is set to "all pages".'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The parameters are applied to the ",(0,r.jsx)(n.a,{href:"/docs/settings/compatibility",children:"current 4D printing settings"})," as long as no command such as ",(0,r.jsx)(n.em,{children:"_o_PAGE SETUP"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})," without the > parameter modifies them. The parameters set are used more particularly by the ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/print-label",children:"PRINT LABEL"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/print-record",children:"PRINT RECORD"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-report",children:"QR REPORT"})," commands, as well as by the menu commands of 4D, including those of the Design environment."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/print-label",children:"PRINT LABEL"}),", and ",(0,r.jsx)(n.a,{href:"/docs/commands/print-record",children:"PRINT RECORD"})," commands must be called with the ",(0,r.jsx)(n.em,{children:">"})," parameter (if applicable) in order for the settings defined by ",(0,r.jsx)(n.strong,{children:"BLOB to print settings"})," to be kept."]}),"\n",(0,r.jsx)(n.p,{children:"The command returns one of the following status codes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"-1: the BLOB is incorrect,"}),"\n",(0,r.jsx)(n.li,{children:"0: no current printer is selected (in this case the command does nothing),"}),"\n",(0,r.jsx)(n.li,{children:"1: the BLOB has been correctly loaded,"}),"\n",(0,r.jsxs)(n.li,{children:["2: the BLOB has been correctly loaded but the current printer name has changed(*).",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Note:"})," Code (2) is always returned if the BLOB was created by the  4D Pack command, even if the printer name did not actually change, since this information was not included in the 4D Pack BLOBs."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"(*) Settings depend on the currently selected printer at the moment the BLOB was saved. Applying these settings to a another printer is supported if both printers are of the same model. If the printers are different, only common parameters will be restored."}),"\n",(0,r.jsx)(n.h3,{id:"windows--macos",children:"Windows / macOS"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"printSettings"})," BLOB can be saved and read on both platforms. However, even if some print settings are common, some others are platform-specific and depend on the drivers and system versions. If the same ",(0,r.jsx)(n.em,{children:"printSettings"})," BLOB is shared between both platforms, you may lose parts of the information.",(0,r.jsx)(n.br,{}),"\nWhen used in a heterogeneous environment, in order to restore the maximum settings available for each platform (and not only the common part), it is recommended that you work with two ",(0,r.jsx)(n.em,{children:"printSettings"})," BLOBs, one for each platform."]}),"\n",(0,r.jsx)(n.h3,{id:"compatibility-with-4d-pack-commands",children:"Compatibility with 4D Pack commands"}),"\n",(0,r.jsxs)(n.p,{children:["The print settings BLOBs generated by the legacy  command from 4D Pack can be loaded and used by the ",(0,r.jsx)(n.strong,{children:"BLOB to print settings"})," command. Note however that if they are saved using ",(0,r.jsx)(n.a,{href:"/docs/commands/print-settings-to-blob",children:"Print settings to BLOB"}),", they are converted and can no longer be opened using . The ",(0,r.jsx)(n.strong,{children:"BLOB to print settings"})," command stores much more printing information than ."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to apply print settings previously saved to disk to the current 4D printing context:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var curSettings : Blob\n\xa0DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)\n\xa0\xa0//current4Dsettings has been created by Print settings to BLOB\n\xa0$err:=BLOB to print settings(curSettings;0)\n\xa0Case of\n\xa0\xa0\xa0\xa0:($err=1)\n\xa0\xa0//everything is OK\n\xa0\xa0\xa0\xa0:($err=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Printer has changed!\\n\\nCheck the print settings?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PRINT SETTINGS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:($err=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("There is no current printer.")\n\xa0\xa0\xa0\xa0:($err=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Invalid settings file.")\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/print-settings-to-blob",children:"Print settings to BLOB"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1434"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);