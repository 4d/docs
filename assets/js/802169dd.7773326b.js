"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65082"],{69504:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>l});var t=JSON.parse('{"id":"commands/folder","title":"Folder","description":"History","source":"@site/versioned_docs/version-20-R7/commands/folder.md","sourceDirName":"commands","slug":"/commands/folder","permalink":"/docs/commands/folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ffolder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"folder","title":"Folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"File","permalink":"/docs/commands/file"},"next":{"title":"ZIP Create archive","permalink":"/docs/commands/zip-create-archive"}}'),d=s("785893"),r=s("250065");let l={id:"folder",title:"Folder",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Release"}),(0,d.jsx)(n.th,{children:"Changes"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19 R8"}),(0,d.jsxs)(n.td,{children:["Support of ",(0,d.jsx)(n.code,{children:"fk home folder"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"17 R5"}),(0,d.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Folder"})," ( ",(0,d.jsx)(n.em,{children:"path"})," : Text { ; ",(0,d.jsx)(n.em,{children:"pathType"})," : Integer }{ ; * } ) : 4D.Folder",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"Folder"})," ( ",(0,d.jsx)(n.em,{children:"folderConstant"})," : Integer { ; * } ) : 4D.Folder"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{style:{textAlign:"center"}}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"path"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"Folder path"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"folderConstant"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"4D folder constant"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pathType"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"fk posix path"})," (default) or ",(0,d.jsx)(n.code,{children:"fk platform path"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"operator"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"* to return folder of host database"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Result"}),(0,d.jsx)(n.td,{children:"4D.Folder"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,d.jsx)(n.td,{children:"New folder object"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"Folder"})," command creates and returns a new object of the ",(0,d.jsx)(n.code,{children:"4D.Folder"})," type. The command accepts two syntaxes:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Folder ( path { ; pathType } { ; * } )"})}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"path"})," parameter, pass a folder path string. You can use a custom string or a ",(0,d.jsx)(n.a,{href:"/docs/Concepts/paths#filesystem-pathnames",children:"filesystem"}),' (e.g., "/DATA").']}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Only absolute pathnames are supported with the ",(0,d.jsx)(n.code,{children:"Folder"})," command."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the ",(0,d.jsx)(n.em,{children:"pathType"})," parameter. The following constants are available:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk platform path"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Path expressed with a platform-specific syntax (mandatory in case of platform pathname)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk posix path"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Path expressed with POSIX syntax (default)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Folder ( folderConstant { ; * } )"})}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"folderConstant"})," parameter, pass a 4D built-in or system folder, using one of the following constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk applications folder"}),(0,d.jsx)(n.td,{children:"116"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk data folder"}),(0,d.jsx)(n.td,{children:"9"}),(0,d.jsx)(n.td,{children:'Associated filesystem: "/DATA"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk database folder"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:'Associated filesystem: "/PACKAGE"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk desktop folder"}),(0,d.jsx)(n.td,{children:"115"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk documents folder"}),(0,d.jsx)(n.td,{children:"117"}),(0,d.jsx)(n.td,{children:"Document folder of the user"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk home folder"}),(0,d.jsx)(n.td,{children:"118"}),(0,d.jsxs)(n.td,{children:["Current home folder of the user (usually ",(0,d.jsx)(n.code,{children:"/Users/<username>/"}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk licenses folder"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Folder containing the machine's 4D license files"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk logs folder"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{children:'Associated filesystem: "/LOGS"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk mobileApps folder"}),(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk remote database folder"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"4D database folder created on each 4D remote machine"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk resources folder"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{children:'Associated filesystem: "/RESOURCES"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk system folder"}),(0,d.jsx)(n.td,{children:"100"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk user preferences folder"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"4D folder that stores user preference files within the user home folder"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk web root folder"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:'Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["If the command is called from a component, pass the optional ",(0,d.jsx)(n.code,{children:"*"})," parameter to get the path of the host database. Otherwise, if you omit the ",(0,d.jsx)(n.code,{children:"*"})," parameter, a null object is always returned."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["On Windows, in merged clients, the location of built-in folders is modified if the ",(0,d.jsx)(n.code,{children:"ShareLocalResourcesOnWindowsClient"})," ",(0,d.jsx)(n.a,{href:"/docs/Desktop/building#buildapp4dsettings",children:"BuildApp key"})," is used."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/file",children:"File"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/object-to-path",children:"Object to path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/path-to-object",children:"Path to object"})]}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"1567"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let d={},r=t.createContext(d);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);