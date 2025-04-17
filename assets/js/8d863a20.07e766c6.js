"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82297"],{971536:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/log-file-to-json","title":"LOG FILE TO JSON","description":"LOG FILE TO JSON ( destFolderPath {; maxSize {; logPath {; fieldAtt}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/log-file-to-json.md","sourceDirName":"commands-legacy","slug":"/commands/log-file-to-json","permalink":"/docs/20-R8/commands/log-file-to-json","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file-to-json.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"log-file-to-json","title":"LOG FILE TO JSON","slug":"/commands/log-file-to-json","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Log file","permalink":"/docs/20-R8/commands/log-file"},"next":{"title":"New log file","permalink":"/docs/20-R8/commands/new-log-file"}}'),s=t("785893"),r=t("250065");let l={id:"log-file-to-json",title:"LOG FILE TO JSON",slug:"/commands/log-file-to-json",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LOG FILE TO JSON"})," ( ",(0,s.jsx)(n.em,{children:"destFolderPath"})," {; ",(0,s.jsx)(n.em,{children:"maxSize"})," {; ",(0,s.jsx)(n.em,{children:"logPath"})," {; ",(0,s.jsx)(n.em,{children:"fieldAtt"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destFolderPath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Path of the saved file destination folder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxSize"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Maximum size of JSON file to create (bytes)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"logPath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pathname of log file to export; use current log file if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldAtt"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field description attribute: 1 = use number (default), 2 = use name"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LOG FILE TO JSON"})," command saves the current log file, or any specified log file, in JSON format."]}),"\n",(0,s.jsx)(n.p,{children:"Once a log (binary file) is saved in JSON, its contents can be read and interpreted by the database administrator or any user in order to analyze database events, for example."}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"destFolderPath"}),", pass the path of the folder where you want to store the JSON file. This file is named ",(0,s.jsx)(n.strong,{children:"JournalExport.json"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the maximum size of the exported JSON file is 10 MB. When this size is reached, the file is closed and a new file is created. Limiting the size of each JSON file reduces memory requirements for analyzing the files. You can change the maximum size for the exported file by setting a value (in bytes) in the ",(0,s.jsx)(n.em,{children:"maxSize"})," parameter. Passing 0 resets to the default size. Passing a negative value removes any size limit."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, if the ",(0,s.jsx)(n.em,{children:"logPath"})," parameter is omitted, the command saves the current log file. If you want to export a specific log file, pass its path in the ",(0,s.jsx)(n.em,{children:"logPath"}),' parameter. The log file must be a file with the ".journal" extension. If you want to export an archived log file (".4bl" extension), you need to convert it beforehand using the ',(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/restore",children:"RESTORE"}),' command. You can pass an empty string ("") to display the standard open file dialog box, allowing the user to select the log file to save. The selected log file path is returned in the ',(0,s.jsx)(n.strong,{children:"Document"})," system variable."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the command saves the current log file, the database is not locked. New operations can be executed while the file is being written on disk - these operations will not be included in the saved file."]}),"\n",(0,s.jsxs)(n.p,{children:["When you export the current log file, the ",(0,s.jsx)(n.em,{children:"fieldAtt"}),' parameter allows you to define how fields will be described in the exported attribute: by number (default), or by name. You can pass one of the following constants, found in the "',(0,s.jsx)(n.em,{children:"Backup and Restore"}),'" constant theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Field attribute with name"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:'Fields are identified by their name. Example: {"LastName":"Jones"}'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Field attribute with number"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:'Fields are identified by their number (default if omitted). Example: {"5":"Jones"}.'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When you export an external log file, fields are always identified by their number."]}),"\n",(0,s.jsx)(n.p,{children:"The saved JSON file contains all the operations recorded in the log, in the form of an array of JSON objects. Each object contains several properties describing the operation. Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":25,\xa0\xa0\xa0\xa0\xa0 "operationName":"Modify record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":45,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:17.138Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":42,\xa0\xa0\xa0\xa0\xa0 "recordNumber":4,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": "primkey5",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": -5,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "5": "data 25"\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "8"\xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":23,\xa0\xa0\xa0\xa0\xa0 "operationName":"Save seqnum",\xa0\xa0\xa0\xa0\xa0 "operationNumber":46,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:18.155Z",\xa0\xa0\xa0\xa0\xa0 "sequenceNumber":23,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem" \xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":24,\xa0\xa0\xa0\xa0\xa0 "operationName":"Create record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":47,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:19.228Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":570,\xa0\xa0\xa0\xa0\xa0 "recordNumber":7,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "3": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0 "extraData": {\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 1,\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "Vanessa Smith",\xa0 \xa0 \xa0 \xa0 \xa0 "user4d_alias": "Default 4D User",\xa0 \xa0 \xa0 \xa0 \xa0 "user4d_id": 1,\xa0 \xa0 \xa0 \xa0 \xa0 "host_name": "iMac-VSmith-0833",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "Application process",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1610541776\xa0\xa0\xa0 \xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "9"\xa0\xa0 }]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note: If you passed Field attribute with ",(0,s.jsx)(n.strong,{children:"name"})," in the ",(0,s.jsx)(n.em,{children:"fieldAtt"}),' parameter, the "fields" object would look like this:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'...\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "ID": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Date_Field": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },...\n'})}),"\n",(0,s.jsx)(n.h3,{id:""}),"\n",(0,s.jsx)(n.p,{children:"The actual list of available properties depends on the operation type (i.e.: create record, delete record, modify record, create Blob, etc.). Here are the main properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"operationType"}),": internal code for the operation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"operationName"}),': kind of operation, for example "create record," "modify record"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"operationNumber"}),": internal number of operation in the log file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"contextID"}),": ID of execution context; the context is detailed in the ",(0,s.jsx)(n.em,{children:"extraData"})," section"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"timeStamp"}),": timestamp of operation in the log file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"dataLen"}),": internal size of data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"recordNumber"}),": internal record number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableID"}),": internal ID of the table"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableName"}),": name of the table"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"fields"}),": object containing the list of field numbers (or field names) along with their values. Any fields with a modified value are logged.",(0,s.jsx)(n.br,{}),"\nIn case of Blob or picture values, different information is provided based on their storage location:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'If the Blob or picture is stored inside the data file, the property will be "BlobID:"+ an internal Blob number, for example: "BlobID:1"'}),"\n",(0,s.jsx)(n.li,{children:'If the Blob or picture is stored outside the data file, the property will be "BlobPath:" + the path for the data, for example: "BlobPath: Table 1/Field 6/Data_EE12D091535F9748BCE62EDE972A4BA2.jpg"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"extraData"}),": user context data, including user name and alias(*), task name and ID, host machine name, and client version."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"sequenceNumber"}),": current number within auto-increment sequence."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"primaryKey"}),": primary key value."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'(*) In project databases, the "user4d_id" property is not returned.'}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to save the current log file in JSON:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs")\n'})}),"\n",(0,s.jsx)(n.p,{children:"You want to save a specific log file in JSON with field names:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs";0;"c:\\\\4Dv15\\\\Backup\\\\old_myDB.journal";Field attribute with name)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LOG FILE TO JSON"}),' command modifies the value of the OK and Document variables: if the JSON file was correctly saved, OK is set to 1 and Document contains the pathname of the journal file. If you passed "" in the ',(0,s.jsx)(n.em,{children:"logPath"})," parameter and the user canceled the file selection dialog box, OK is set to 0 and Document contains an empty string. If the user selected an invalid file, OK is set to 0 and Document contains the pathname of the invalid file."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"http://download.4d.com/Demos/4D%5Fv15%5FR4/ExportLogToJSON%5FHDI.zip",children:"Download HDI database"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/integrate-mirror-log-file",children:"INTEGRATE MIRROR LOG FILE"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1352"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);