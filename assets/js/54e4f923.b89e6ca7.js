"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67330"],{964024:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-table-titles","title":"SET TABLE TITLES","description":"SET TABLE TITLES {( tableTitles ; tableNumbers {; *})}","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-table-titles","permalink":"/docs/commands/set-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-table-titles","title":"SET TABLE TITLES","slug":"/commands/set-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD TITLES","permalink":"/docs/commands/set-field-titles"},"next":{"title":"Shift down","permalink":"/docs/commands/shift-down"}}'),s=a("785893"),l=a("250065");let i={id:"set-table-titles",title:"SET TABLE TITLES",slug:"/commands/set-table-titles",displayed_sidebar:"docs"},r=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," {( ",(0,s.jsx)(n.em,{children:"tableTitles"})," ; ",(0,s.jsx)(n.em,{children:"tableNumbers"})," {; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableTitles"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table names as they must appear in dialog boxes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNumbers"}),(0,s.jsx)(n.td,{children:"Array integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Actual table numbers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Use the custom names in the formula editor"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," lets you mask, rename, and reorder the tables of your database that appear in standard 4D dialog boxes within the Application environment (i.e. when the startup mode is ",(0,s.jsx)(n.strong,{children:"Application"}),", or after you select ",(0,s.jsx)(n.strong,{children:"Test application"})," in the ",(0,s.jsx)(n.strong,{children:"Run"})," menu). For example, this command can modify the display of tables in the Query editor in Application mode."]}),"\n",(0,s.jsxs)(n.p,{children:["Using this command, you can also rename the table labels in your forms on the fly, if you used dynamic names. For more information about inserting dynamic field and table names in forms, refer to ",(0,s.jsx)(n.em,{children:"Using references in static text"})," in the ",(0,s.jsx)(n.em,{children:"4D Design Reference"})," manual."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"tableTitles"})," and ",(0,s.jsx)(n.em,{children:"tableNumbers"})," arrays must be synchronized. In the ",(0,s.jsx)(n.em,{children:"tableTitles"})," array, you pass the names of the tables as you would like them to appear. If you do not want to show a particular table, do not include its name or new title in the array. The tables appear in the order you specify in this array. In each element of the ",(0,s.jsx)(n.em,{children:"tableNumbers"})," array, you pass the actual table number corresponding to the table name or new title passed in the same element number in the ",(0,s.jsx)(n.em,{children:"tableTitles"})," array."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, you have a database composed of the tables A, B, and C, created in that order. You want these tables to appear as X, Y, and Z. In addition you do not want to show table B. Finally, you want to show Z and X, in that order. To do so, you pass Z and X in a two-element ",(0,s.jsx)(n.em,{children:"tableTitles"})," array, and you pass 3 and 1 in a two-element ",(0,s.jsx)(n.em,{children:"tableNumbers"})," array."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"*"}),' parameter indicates whether or not custom names ("virtual" structures) defined using this command can be used in 4D formulas. By default, when this parameter is omitted, formulas executed in 4D cannot use these custom names; it is necessary to use the real table names. You need to pass this parameter if you want to control information provided to users and ensure interface consistency wherever formulas or expressions are used, i.e.:']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"if your application provides access to the formula editor (for example via the Quick report editor),"}),"\n",(0,s.jsx)(n.li,{children:"if your application displays expression references, such as in 4D Write Pro documents."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the ",(0,s.jsx)(n.em,{children:"*"})," parameter is passed, the names defined by this command are used in the formulas executed by 4D. ",(0,s.jsx)(n.strong,{children:"Be careful in this case"}),', the custom names must not contain characters that are \u201Cforbidden\u201D by the 4D language interpreter, like -?*%! For example, the name "Rate_in_%" could not be used in a formula (for more information, refer to the ',(0,s.jsx)(n.em,{children:"Identifiers"})," section)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," does NOT change the actual structure of your database. It is designed to affect subsequent uses of the standard 4D editors and forms using dynamic names when they are used in Application environment. The scope of the ",(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," command is the worksession. One benefit in Client/Server is that several 4D Client stations can simultaneously \u201Csee\u201D your database in different ways. You can call ",(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," as many times as you want."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," command for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dynamically localizing a database."}),"\n",(0,s.jsx)(n.li,{children:"Showing tables the way you want, independent from the actual definition of your database."}),"\n",(0,s.jsx)(n.li,{children:"Showing tables in a way that depends on the identity or custom privileges of a user."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"WARNING:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," does NOT override the Invisible property of a table. When a table is set to be invisible at the structure level of your database, even though it is included in a call to ",(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"}),", it will not appear in Application mode."]}),"\n",(0,s.jsx)(n.li,{children:'Plug-ins always access the "virtual" structure as specified by this command.'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Executing ",(0,s.jsx)(n.strong,{children:"SET TABLE TITLES"})," without any parameters will reset the whole database virtual structure for the session (custom table and field names)."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You are building a 4D application that you plan to sell internationally. Therefore, you must carefully consider localization issues. Regarding the standard 4D dialog boxes that can appear in the Application environment and your forms that use dynamic names, you can address localization needs by using a [Translations] table and a few project methods to create and use fields localized for any number of countries."}),"\n",(0,s.jsx)(n.p,{children:"In your database, add the following table:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(640066).Z+"",width:"144",height:"157"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, create the TRANSLATE TABLES AND FIELDS project method listed below. This method browses the actual structure of your database and creates all the necessary ",(0,s.jsx)(n.em,{children:"[Translations]"})," records for the localization corresponding to the language passed as parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//TRANSLATE TABLES AND FIELDS project method\n\xa0\xa0//TRANSLATE TABLES AND FIELDS (Text)\n\xa0\xa0//TRANSLATE TABLES AND FIELDS (LanguageCode)\n\xa0\n\xa0var $1 : Text\xa0//language code\n\xa0var $vlTable;$vlField : Integer\n\xa0var $Language : Text\n\xa0$Language:=$1\n\xa0\n\xa0For($vlTable;1;Last table number)\xa0//Pass through each table\n\xa0\xa0\xa0\xa0If($vlTable#(Table(->[Translations])))\xa0//Do not translate table of translations\n\xa0\xa0//Check if there is a translation of the table name for the specified language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\xa0//desired language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];&;[Translations]TableID=$vlTable;*)\xa0//table number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];&;[Translations]FieldID=0)\xa0//field number = 0 means that it is a table name\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTable))\xa0//check that the table still exists\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])=0)\n\xa0\xa0//Otherwise, create the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]LanguageCode:=$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]TableID:=$vlTable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]FieldID:=0\n\xa0\xa0//The name of the translated table will need to be entered\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]Translation:=Table name($vlTable)+" in "+$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlField;1;Last field number($vlTable))\n\xa0\xa0//Check if there is a translation of the field name for the specified language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\xa0//desired language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];&;[Translations]TableID=$vlTable;*)\xa0//table number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];&;[Translations]FieldID=$vlField)\xa0//field number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is field number valid($vlTable;$vlField))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])=0)\n\xa0\xa0//Otherwise, create the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]LanguageCode:=$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]TableID:=$vlTable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]FieldID:=$vlField\n\xa0\xa0//The name of the translated field will need to be entered\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]Translation:=Field name($vlTable;$vlField)+" in "+$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])#0)\n\xa0\xa0//If the field no longer exists, remove the translation\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])#0)\n\xa0\xa0//If the table no longer exists, remove the translation\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.p,{children:"At this point, if you execute the following line, you create as many records as needed for a Spanish localization of the tables and fields titles."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0TRANSLATE TABLES AND FIELDS("Spanish")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After this call has been executed, you can then enter the ",(0,s.jsx)(n.em,{children:"[Translations]Translated Name"})," for each of the newly created records."]}),"\n",(0,s.jsx)(n.p,{children:"Finally, each time you want to show your database\u2019s standard 4D dialog boxes or forms with dynamic titles using the Spanish localization, you execute the following line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0LOCALIZED TABLES AND FIELDS("Spanish")\n'})}),"\n",(0,s.jsx)(n.p,{children:"with the project method LOCALIZED TABLES AND FIELDS:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//LOCALIZED TABLES AND FIELDS global method\n\xa0\xa0//LOCALIZED TABLES AND FIELDS (Text)\n\xa0\xa0//LOCALIZED TABLES AND FIELDS (LanguageCode)\n\xa0\n\xa0var $1 : Text\xa0//Language code\n\xa0var $vlTable;$vlField : Integer\n\xa0var $Language : Text\n\xa0var $vlTableNum;$vlFieldNum : Integer\n\xa0$Language:=$1\n\xa0\n\xa0\xa0//Updating table names\n\xa0ARRAY TEXT($asNames;0)\xa0//Initialize arrays for SET TABLE TITLES and SET FIELD TITLES\n\xa0ARRAY INTEGER($aiNumbers;0)\n\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\n\xa0QUERY([Translations];&;[Translations]FieldID=0)\xa0//thus table names\n\xa0SELECTION TO ARRAY([Translations]Translation;$asNames;[Translations]TableID;$aiNumbers)\n\xa0SET TABLE TITLES($asNames;$aiNumbers)\n\xa0\n\xa0\xa0//Updating field names\n\xa0$vlTableNum:=Last table number\xa0//Get number of tables in database\n\xa0For($vlTable;1;$vlTableNum)\xa0//Pass through each table\n\xa0\xa0\xa0\xa0If(Is table number valid($vlTable))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];&;[Translations]TableID=$vlTable;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];&;[Translations]FieldID#0)\xa0//avoid the zero that serves as table name\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Translations]Translation;$asNames;[Translations]FieldID;$aiNumbers)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET FIELD TITLES(Table($vlTable)->;$asNames;$aiNumbers)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that new localizations can be added to the database without modifying or recompiling the code."}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to remove all defined custom field and table names:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET TABLE TITLES\xa0//remove all custom names\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/last-table-number",children:"Last table number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/parse-formula",children:"Parse formula"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/table-name",children:"Table name"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},640066:function(e,n,a){a.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var t=a(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);