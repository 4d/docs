"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71004"],{537755:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"settings/compatibility","title":"Compatibility page","description":"The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D.","source":"@site/versioned_docs/version-20-R7/settings/compatibility.md","sourceDirName":"settings","slug":"/settings/compatibility","permalink":"/docs/settings/compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fcompatibility.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compatibility","title":"Compatibility page"},"sidebar":"docs","previous":{"title":"Security page","permalink":"/docs/settings/security"},"next":{"title":"Components","permalink":"/docs/Project/components"}}'),o=n("785893"),r=n("250065");let s={id:"compatibility",title:"Compatibility page"},a=void 0,c={},d=[];function l(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.",(0,o.jsx)(t.br,{}),"\nThis page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html",children:"Compatibility page"})," on ",(0,o.jsx)(t.strong,{children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Use legacy network layer"}),": Starting with 4D v15, 4D applications propose a new network layer, named ",(0,o.jsx)(t.em,{children:"ServerNet"}),", to handle communications between 4D Server and remote 4D machines (clients). The former network layer has become obsolete, but it is kept to ensure compatibility with existing databases. Using this option, you can enable the former network layer at any time in your 4D Server applications depending on your needs. ",(0,o.jsx)(t.em,{children:"ServerNet"})," is used automatically for new databases and databases converted from a v15 release or later. Note that in case of a modification, you need to restart the application for the change to be taken into account. Any client applications that were logged must also be restarted to be able to connect with the new network layer.\n",(0,o.jsx)(t.strong,{children:"Note:"})," This option can also be managed by programming using the ",(0,o.jsx)(t.code,{children:"SET DATABASE PARAMETER"})," command."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Use standard XPath:"})," By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. Starting with v18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. As a consequence, non-standard features of the previous implementation no longer work. They include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node'}),"\n",(0,o.jsx)(t.li,{children:"no implicit current node - the current node has to be included in the XPath expression"}),"\n",(0,o.jsx)(t.li,{children:"no recursive searches in repeated structures - only the first element is parsed.\\"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option ",(0,o.jsx)(t.em,{children:"unchecked"}),". On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page864.html",children:(0,o.jsx)(t.code,{children:"DOM Find XML element"})})," command), make sure the ",(0,o.jsx)(t.strong,{children:"Use standard XPath"})," option is ",(0,o.jsx)(t.em,{children:"checked"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Use LF for end of line on macOS:"})," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1237.html",children:(0,o.jsx)(t.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1236.html",children:(0,o.jsx)(t.code,{children:"Document to text"})}),", and ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1090.html",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Don't add a BOM when writing a unicode text file by default:"})," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. In previous versions, text files were written with a BOM by default. Select this option if you want to enable the new behavior in converted projects. See ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1237.html",children:(0,o.jsx)(t.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1236.html",children:(0,o.jsx)(t.code,{children:"Document to text"})}),", and ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1090.html",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Map NULL values to blank values unchecked by default a field creation"}),": For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the ",(0,o.jsx)(t.strong,{children:"Map NULL values to blank values"})," field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by ",(0,o.jsx)(t.a,{href:"/docs/ORDA/overview",children:"ORDA"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Non-blocking printing"}),": Starting with 4D v20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or databases converted from binary mode to project mode. ",(0,o.jsx)(t.strong,{children:"When left unchecked"}),', the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call ',(0,o.jsx)(t.code,{children:"CLOSE PRINTING JOB"})," for the printer to be available for the next print job (check previous 4D documentations for more information)."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Save structure color and coordinates in separate catalog_editor.json file"}),": Starting with 4D v20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are saved in a separate file named ",(0,o.jsx)(t.code,{children:"catalog_editor.json"}),", stored in the project's ",(0,o.jsx)(t.a,{href:"/docs/Project/architecture#sources",children:"Sources folder"}),". This new file architecture makes it easier to manage merge conflicts in VCS applications since the ",(0,o.jsx)(t.code,{children:"catalog.4DCatalog"})," file now contains only crucial database structure changes. For compatibility reasons, this feature is not enabled by default in projects converted from previous 4D versions, you need to check this option. When the feature is enabled, the ",(0,o.jsx)(t.code,{children:"catalog_editor.json"})," file is created at the first modification in the Structure editor."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(667294);let o={},r=i.createContext(o);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);