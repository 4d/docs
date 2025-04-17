"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66429"],{53367:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/export-structure-file","title":"Export structure file","description":"Export structure file ( folderPath {; options} ) : Object","source":"@site/versioned_docs/version-20-R9/commands-legacy/export-structure-file.md","sourceDirName":"commands-legacy","slug":"/commands/export-structure-file","permalink":"/docs/commands/export-structure-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-structure-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"export-structure-file","title":"Export structure file","slug":"/commands/export-structure-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ds","permalink":"/docs/commands/ds"},"next":{"title":"Get 4D file","permalink":"/docs/commands/get-4d-file"}}'),s=t("785893"),d=t("250065");let o={id:"export-structure-file",title:"Export structure file",slug:"/commands/export-structure-file",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Result",id:"result",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Export structure file"})," ( ",(0,s.jsx)(n.em,{children:"folderPath"})," {; ",(0,s.jsx)(n.em,{children:"options"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"folderPath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Path of the destination folder for project files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Export options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Validation status and messages (if any)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Export structure file"})," command breaks down the current 4D database structure into a set of text-based files or native picture files and stores them in the specified ",(0,s.jsx)(n.em,{children:"folderPath"}),". By default, the entirety of the database structure (methods, forms, catalog, etc.) is exported. You can filter the contents to export using the ",(0,s.jsx)(n.em,{children:"options"})," parameter (see below)."]}),"\n",(0,s.jsxs)(n.p,{children:["This command allows you to store database structure files in a source control repository (",(0,s.jsx)(n.em,{children:"i.e."}),", ",(0,s.jsx)(n.em,{children:"Git, Perforce"}),", etc.). Successive changes or changes from several sources can then be compared using standard source control tools."]}),"\n",(0,s.jsx)(n.p,{children:"This command can be used in the following contexts only:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4D in local mode or 4D Server (an error is returned if it is called from 4D in remote mode),"}),"\n",(0,s.jsx)(n.li,{children:"Interpreted database (the command does nothing if it is called from a .4DC database)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note also that when it is called from a component, the command always exports the host database structure."}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"folderPath"}),", pass the system path of the folder where the export files must be saved."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"options"})," parameter allows you to customize the conversion process. The ",(0,s.jsx)(n.em,{children:"options"})," object can contain the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Value type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"withLog"}),(0,s.jsx)(n.td,{children:"boolean or string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:'true or "always": create a conversion log file the destination Logs folder.'})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:'"ifNotEmpty": create a conversion log file only if it contains some messages'})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"false or omitted (default): do not create a conversion log file"})})]})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"makeProject"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:'true to generate a .4DProject file in the "Project" folder'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filter"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Contents to export. If omitted (default), everything is exported"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"projectMethods"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export project methods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"databaseMethods"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export database methods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"triggerMethods"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export trigger methods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forms"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export forms"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pageFormat"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:'true to include the forms page format as "pageFormat" property of each form json file'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catalog"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export table and field definitions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"folders"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export Explorer folders definitions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"settings"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export structure settings"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menus"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export menus"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tips"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export tips"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lists"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export lists"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filters"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export filters"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pictures"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export pictures from picture library"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resources"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export Resources folder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"trash"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export trashed methods and forms (*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"windowPositions"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export window positions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodPreferences"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export method editor preferences"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"buildSettings"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export the buildApp.xml file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataPath"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to copy the last open data file path into the project user preferences file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"directory"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export 4D users and groups"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"styleSheets"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export style sheets as CSS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documentation"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true to export Explorer comments as markdown files"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'(*) The "trash" filter is useful only if "projectMethods" or "forms" filters are also selected.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," When the ",(0,s.jsx)(n.em,{children:"options"}),' parameter is passed and the "filter" object is used, you must explicitly declare each property to export with the ',(0,s.jsx)(n.strong,{children:"true"})," value. When this object is passed, 4D assumes all properties are set to ",(0,s.jsx)(n.strong,{children:"false"})," by default."]}),"\n",(0,s.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,s.jsx)(n.p,{children:"The command returns an object providing the final status of the export as well as information on encountered issues or errors, if any. The following properties are returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Value type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"True if export operation was successful, false otherwise."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"messages"}),(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsx)(n.td,{children:"Collection of objects describing issues encountered during the export operation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].severity"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'Level of issue. Possible values: "info", "error". Only "error" level sets the "success" property to false.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].message"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'Description of the issue or error, for example "Unsupported for object type"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].errors"}),(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsx)(n.td,{children:"Error stack (if any)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Issue objects can include additional properties depending on the context."]}),"\n",(0,s.jsx)(n.p,{children:"Possible errors include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"duplicated elements"}),"\n",(0,s.jsx)(n.li,{children:"file management errors (file already exists, file locked, disk full, etc.)"}),"\n",(0,s.jsx)(n.li,{children:"unsupported form object or property (see also )."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:'You want to export the database structure file in an "Export" folder with the default settings:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Object\n\xa0$result:=Export structure file("Export")\n\xa0If($result.success=True)\n\xa0\xa0\xa0\xa0ALERT("Export successful")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Error during export")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to export only project and database methods, and a log file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $option;$result : Object\n\xa0$option:=New object("filter";New object)\n\xa0$option.filter.projectMethods:=True\n\xa0$option.filter.databaseMethods:=True\n\xa0$option.withLog:="always"\n\xa0$result:=Export structure file("exportWithLog";$option)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/form-convert-to-dynamic",children:"FORM Convert to dynamic"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1565"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);