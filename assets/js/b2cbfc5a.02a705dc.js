"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53255"],{833328:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/sql-export-database","title":"SQL EXPORT DATABASE","description":"SQL EXPORT DATABASE ( folderPath {; numFiles {; fileLimitSize {; fieldLimitSize}}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sql-export-database.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-database","permalink":"/docs/20-R7/commands/sql-export-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-export-database","title":"SQL EXPORT DATABASE","slug":"/commands/sql-export-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/20-R7/commands/sql-execute-script"},"next":{"title":"SQL EXPORT SELECTION","permalink":"/docs/20-R7/commands/sql-export-selection"}}'),s=n("785893"),r=n("250065");let a={id:"sql-export-database",title:"SQL EXPORT DATABASE",slug:"/commands/sql-export-database",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SQL EXPORT DATABASE"})," ( ",(0,s.jsx)(t.em,{children:"folderPath"})," {; ",(0,s.jsx)(t.em,{children:"numFiles"})," {; ",(0,s.jsx)(t.em,{children:"fileLimitSize"})," {; ",(0,s.jsx)(t.em,{children:"fieldLimitSize"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"folderPath"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:'Pathname of export folder or "" to display folder selection dialog box'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numFiles"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Maximum number of files per folder"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fileLimitSize"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Size limit value of export files (in KB)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fieldLimitSize"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Size limit (in bytes) below which the contents of a Text, BLOB or Picture field is embedded into the main file"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:'The SQL EXPORT DATABASE command exports in SQL format all the records of all the tables in the database. In SQL, this global export operation is called "Dump".'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," This command cannot be used with an external connection that has been opened directly or via ODBC."]}),"\n",(0,s.jsxs)(t.p,{children:["For each table, the command generates a text file containing the SQL statements necessary for importing data into another database. This file can be used directly by the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/sql-execute-script",children:"SQL EXECUTE SCRIPT"})," command in order to import data into another 4D database."]}),"\n",(0,s.jsxs)(t.p,{children:['The export files will be placed in a folder named "SQLExport" that is created in the destination folder designated by the ',(0,s.jsx)(t.em,{children:"folderPath"}),' parameter. Please note that if an "SQLExport" folder already exists at the location specified, the command will replace it without any warning message being displayed.',(0,s.jsx)(t.br,{}),'\nIf you pass an empty string in this parameter, 4D displays a standard dialog box which lets the user designate the destination folder. By default, the dialog box displays the current folder of the user that opened the session ("My Documents" under Windows or "Documents" under Mac OS).']}),"\n",(0,s.jsx)(t.p,{children:"For each exported table, the command carries out the following actions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a subfolder with the table name is created in the destination folder."}),"\n",(0,s.jsxs)(t.li,{children:['a text file named "Export.sql" is created in the subfolder. This file is encoded in UTF-8 with a BOM (byte-order mark). It contains SQL ',(0,s.jsx)(t.em,{children:"INSERT"})," orders corresponding to the exported data. The field values are separated by colons. There may be fewer values than there are fields in the table. In this case, the remaining fields will be considered NULL."]}),"\n",(0,s.jsxs)(t.li,{children:['if the table contains BLOB, picture or text fields (texts stored externally, in other words, outside of records), by default the command creates an additional subfolder named "BLOBS" next to the "Export.sql" file and creates as many subfolders named "BlobsX" as necessary. These subfolders will store as separate files the contents of all the BLOB, picture or external text fields of the table records. The BLOB files are named "BlobXXXXX.BLOB", the text files are named "TEXTXXXXX.TXT"(where XXXXX is a unique number generated by the application). The picture files are named PICTXXXXX.ZZZZ (where XXXXX is a unique number generated by the application and ZZZZ is the extension). When possible, pictures are exported in their original native format with the extension corresponding to the picture type (.jpg, .png, etc.). If the export is not possible in the native format, the pictures are exported in the internal 4D format 4D with the .4PCT extension.',(0,s.jsx)(t.br,{}),"\nThis default behavior can be adjusted according to the size of the data contained in the field using the optional ",(0,s.jsx)(t.em,{children:"fieldLimitSize"})," parameter (see below).",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Note:"})," This behavior differs when you execute ",(0,s.jsx)(t.strong,{children:"SQL EXPORT DATABASE"}),' from a 4D in remote mode. In this context, the data to be stored externally are included automatically in the "Export.sql" file.']}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the ",(0,s.jsx)(t.em,{children:"numFiles"}),' parameter, the command will create as many "BlobsX" subfolders as necessary so that each one of them does not contain more than ',(0,s.jsx)(t.em,{children:"numFiles"})," BLOB, picture or external text files. By default, if the ",(0,s.jsx)(t.em,{children:"numFiles"})," parameter is omitted, the command limits the number of files to 200. If you pass 0, each subfolder will contain at least one file."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"fileLimitSize"}),' parameter lets you set a size limit (in KB) for each "Export.sql" created on disk. Once the size of the export file being created reaches the value set in ',(0,s.jsx)(t.em,{children:"fileLimitSize"}),', 4D stops writing records, closes the file and creates a new file named "ExportX.sql" (where X represents the sequence number) next to the previous one. Note that this is a theoretical limit: the actual size of the "ExportX.sql" files exceeds the value set by ',(0,s.jsx)(t.em,{children:"fileLimitSize"})," because the file is only closed after the record that was being exported when the limit was reached has been completely written (the contents of the records is not divided). The minimum value accepted is 100 and the maximum value (default value) is 100,000 (100 MB)."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"fieldLimitSize"}),' parameter sets a size limit below which the contents of an external BLOB, Picture or Text field will be embedded in the main "Export.sql" file rather than saved as a separate file. This purpose of this parameter is to optimize export operations by limiting the number of subfolders and files created on disk.',(0,s.jsx)(t.br,{}),"\nThis parameter must be expressed in bytes. For example, if you pass 1000, any external BLOB, Picture or Text fields that contain data with a size less than or equal to 1000 bytes are embedded into the main export file.",(0,s.jsx)(t.br,{}),"\nNote that binary field data (BLOB and Picture) that are embedded into the export file are written in hexadecimal format, in the form of X'0f20' (standard SQL hexadecimal notation, see ",(0,s.jsx)(t.em,{children:"literal"}),"). This format is automatically supported by the 4D SQL engine.",(0,s.jsx)(t.br,{}),"\nBy default, if the ",(0,s.jsx)(t.em,{children:"fieldLimitSize"})," parameter is omitted, external BLOB, Picture and Text fields are always exported as external files regardless of their size."]}),"\n",(0,s.jsx)(t.p,{children:"In the export file, there may be fewer values than there are fields in the table. In this case, the empty fields will be considered as NULL. You can also pass the NULL value in a field."}),"\n",(0,s.jsx)(t.p,{children:"If the export has been carried out correctly, the OK variable is set to 1. Otherwise, it is set to 0."}),"\n",(0,s.jsx)(t.h3,{id:""}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," This command does not support Object type fields."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1065"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(667294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);