"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10194"],{771575:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-external-data-path","title":"SET EXTERNAL DATA PATH","description":"SET EXTERNAL DATA PATH ( aField ; path )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-external-data-path.md","sourceDirName":"commands-legacy","slug":"/commands/set-external-data-path","permalink":"/docs/commands/set-external-data-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-external-data-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-external-data-path","title":"SET EXTERNAL DATA PATH","slug":"/commands/set-external-data-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME INDEXES","permalink":"/docs/commands/resume-indexes"},"next":{"title":"SET INDEX","permalink":"/docs/commands/set-index"}}'),a=n("785893"),i=n("250065");let r={id:"set-external-data-path",title:"SET EXTERNAL DATA PATH",slug:"/commands/set-external-data-path",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"SET EXTERNAL DATA PATH"})," ( ",(0,a.jsx)(t.em,{children:"aField"})," ; ",(0,a.jsx)(t.em,{children:"path"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"aField"}),(0,a.jsx)(t.td,{children:"Text, Blob, Picture"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Field for which to set the storage location"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"path"}),(0,a.jsx)(t.td,{children:"Text, Integer"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Pathname and file name of external storage or0 = use structure definition 1 = use default folder"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"SET EXTERNAL DATA PATH"})," command sets or modifies, for the current record, the external storage location for the ",(0,a.jsx)(t.em,{children:"aField"})," field passed as parameter."]}),"\n",(0,a.jsxs)(t.p,{children:["With 4D, it is possible to store Text, BLOB, and Picture type fields ",(0,a.jsx)(t.em,{children:"outside"})," of the data file. For a complete description of this functionality, refer to the ",(0,a.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,a.jsx)(t.p,{children:"The setting defined by this command is only applied when the current record is saved on the disk. If the current record is canceled, the command does nothing. Storage parameters set in the application structure are not changed."}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.em,{children:"path"}),", you can pass either a custom pathname, or a constant designating an automatic location:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"custom pathname to file"}),(0,a.jsx)(t.br,{}),'\nIn this case, you use external storage in "custom mode." Certain 4D database functions are not available automatically in this mode (see the Design Reference manual). In particular, you must manage the creation or modification of the files yourself.']}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:['You can pass either a path relative to the data file or an absolute path, which must include the name and extension of the storage file. You must use the system syntax. To set a path relative to the data file, pass "../" (Windows) or "..:" (OS X) at the start of the string. You can designate any folder, including the default folder of database external files (',(0,a.jsx)(t.em,{children:"databaseName"}),".ExternalData) - in this case, these files are included when the database is saved."]}),"\n",(0,a.jsxs)(t.p,{children:["The file designated by the ",(0,a.jsx)(t.em,{children:"path"})," parameter must exist and be accessible when the command is executed. Note that if the path is invalid (file or folder missing), an error is returned only in cases where the ",(0,a.jsx)(t.em,{children:"path"})," was defined as absolute. When a relative ",(0,a.jsx)(t.em,{children:"path"})," has been specified, you must ensure its validity since no error is generated if the file is not found."]}),"\n",(0,a.jsx)(t.p,{children:"If you save the external file in the same folder as the data file or one of its subfolders, 4D considers that the path specified is relative to the data file and maintains the link even when the data file folder is moved or renamed."}),"\n",(0,a.jsx)(t.p,{children:'Note that this means it is possible to "share" the same external file between several records. Any changes made to this external file are available in all the records. In this case, if several processes can write the same fields simultaneously, you must be careful to prevent concurrent accesses through semaphores, so as not to risk damaging the external files.'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"automatic location"}),(0,a.jsx)(t.br,{}),"\nYou can designate two automatic locations using the following constants, found in the ",(0,a.jsx)(t.em,{children:"Data File Maintenance"})," theme:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Constant"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Value"}),(0,a.jsx)(t.th,{children:"Comment"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Use default folder"}),(0,a.jsx)(t.td,{children:"Integer"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsxs)(t.td,{children:["The data of the field passed as parameter are saved in the default folder, named ",(0,a.jsx)(t.em,{children:"databaseName"}),".ExternalData and placed next to the data file. In this mode, external data are managed by 4D as if they were inside the data file."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Use structure definition"}),(0,a.jsx)(t.td,{children:"Integer"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsxs)(t.td,{children:["4D uses the parameters set in the structure for field storage (see the ",(0,a.jsx)(t.em,{children:"Design Reference"})," manual). If you change from external storage to internal storage, the external file is not deleted."]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Once this command is executed, 4D automatically maintains the link between the field of the record and the file on disk. You do not need to execute the command again (except if you need to change the ",(0,a.jsx)(t.em,{children:"path"}),"). If 4D can no longer access the data of the field (storage file renamed or deleted, path modified, etc.), the field is empty but no error is generated."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The ",(0,a.jsx)(t.strong,{children:"SET EXTERNAL DATA PATH"})," command can only be executed on a local 4D or on 4D Server. It does nothing when it is executed on a remote 4D."]}),"\n",(0,a.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"You want to save an existing file in the picture field, stored outside of the data, in the database folder:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0CREATE RECORD([Photos])\n\xa0[Photos]Name:="Paris.png"\n\xa0SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)\n\xa0\xa0//"/custom/Paris.png" must exist next to structure file\n\xa0SAVE RECORD([Photos])\n'})}),"\n",(0,a.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/commands/get-external-data-path",children:"Get external data path"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/commands/reload-external-data",children:"RELOAD EXTERNAL DATA"})]}),"\n",(0,a.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Command number"}),(0,a.jsx)(t.td,{children:"1134"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread safe"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var s=n(667294);let a={},i=s.createContext(a);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);