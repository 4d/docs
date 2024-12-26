"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11242"],{954798:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/integrate-mirror-log-file","title":"INTEGRATE MIRROR LOG FILE","description":"INTEGRATE MIRROR LOG FILE ( pathName ; operationNum {; mode {; errObject}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/integrate-mirror-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/integrate-mirror-log-file","permalink":"/docs/commands/integrate-mirror-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fintegrate-mirror-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"integrate-mirror-log-file","title":"INTEGRATE MIRROR LOG FILE","slug":"/commands/integrate-mirror-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHECK LOG FILE","permalink":"/docs/commands/check-log-file"},"next":{"title":"Log File","permalink":"/docs/commands/log-file"}}'),i=t("785893"),s=t("250065");let o={id:"integrate-mirror-log-file",title:"INTEGRATE MIRROR LOG FILE",slug:"/commands/integrate-mirror-log-file",displayed_sidebar:"docs"},a=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"})," ( ",(0,i.jsx)(n.em,{children:"pathName"})," ; ",(0,i.jsx)(n.em,{children:"operationNum"})," {; ",(0,i.jsx)(n.em,{children:"mode"})," {; ",(0,i.jsx)(n.em,{children:"errObject"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pathName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Name or pathname of the log file to be integrated"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"operationNum"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Number of last operation integrated or -2 to integrate the whole file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"New number of last operation integrated"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mode"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"0=strict mode (default mode), 1=auto repair mode"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"errObject"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Missed operation(s)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Preliminary note:"})," This command only works with 4D Server. It can only be executed via the ",(0,i.jsx)(n.a,{href:"/docs/commands/execute-on-server",children:"Execute on server"})," command or in a stored procedure."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"})," integrates the log file designated by ",(0,i.jsx)(n.em,{children:"pathName"})," into a 4D Server database, after the ",(0,i.jsx)(n.em,{children:"operationNum"})," operation. The command accepts to integrate any log file into the database, even if it does not correspond to the the data file. This command is specifically intended for use in the context of a mirror database."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"}),' Since 4D v14, it is possible to use a log file as part of a "mirror" database: the "Use Log File" option can now be checked in the Database Settings of a 4D Server used as a logical mirror, thus allowing the implementation of a series of cascading mirror servers (see the ',(0,i.jsx)(n.em,{children:"Setting up a logical mirror"})," section in the 4D Server manual)."]}),"\n",(0,i.jsxs)(n.p,{children:["Unlike the existing ",(0,i.jsx)(n.em,{children:"_o_INTEGRATE LOG FILE"})," command, at the end of its execution ",(0,i.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"})," does not replace the current log file with the integrated one: the current log file of the database continues to be used. Accordingly, any changes made during integration are saved in the current log file."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"pathName"}),", you pass an absolute or relative path to the database folder. If you pass an empty string in this parameter, a standard open file dialog box appears so that you can specify the file to be integrated. If this dialog box is canceled, no file is integrated and the ",(0,i.jsx)(n.em,{children:"OK"})," system variable is set to 0."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"operationNum"})," variable, you pass the number of the last operation integrated, so that integration begins at the next operation. After integration, the value of the ",(0,i.jsx)(n.em,{children:"operationNum"})," variable is updated with the number of the last operation integrated. You must save this variable and then reuse it directly as the ",(0,i.jsx)(n.em,{children:"operationNum"})," parameter for the next integration operation. This allows you to follow on with subsequent log file integrations using ",(0,i.jsx)(n.strong,{children:"INTEGRATE MIRROR LOG FILE"}),". Pass -2 in the variable to integrate all the operations in the log file."]}),"\n",(0,i.jsxs)(n.p,{children:["*",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.em,{children:"Compatibility note:"})," In versions of 4D prior to v15 R4,"]})," *",(0,i.jsx)(n.em,{children:"the operationNum parameter was optional; however, from now on, if"})," *",(0,i.jsx)(n.em,{children:"the operationNum parameter is omitted, an error is generated. To restore the original functioning of your former code, you can just pass -2"})," *",(0,i.jsx)(n.em,{children:"in the operationNum parameter variable."})]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"mode"}),', you pass the integration mode you want to activate. You can use one of the following constants found in the "',(0,i.jsx)(n.em,{children:"Backup and Restore"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Auto repair mode"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Use flexible mode with auto-repair actions and fill the ",(0,i.jsx)(n.em,{children:"errObject"})," parameter (if any)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Strict mode"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Use strict integration mode (default)"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Strict mode: In this mode, as soon as an error occurs during integration, it stops and you have to use the MSC in order to trace the error. This secure mode is used by default and is recommended in most cases."}),"\n",(0,i.jsxs)(n.li,{children:["Auto repair mode: In this mode, when a non-critical error occurs, it is bypassed and integration continues. If you passed the ",(0,i.jsx)(n.em,{children:"errObject"})," parameter, each error is logged and can be analyzed afterwards.",(0,i.jsx)(n.br,{}),"\nCases of non-critical errors are:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The log requests to add a record, but this record already exists in the data.",(0,i.jsx)(n.br,{}),"\nRepair action: 4D updates the record."]}),"\n",(0,i.jsxs)(n.li,{children:["The log requests to update a record, but this record does not yet exist.",(0,i.jsx)(n.br,{}),"\nRepair action: 4D adds the record."]}),"\n",(0,i.jsxs)(n.li,{children:["The log requests to delete a record, but this record does not exist.",(0,i.jsx)(n.br,{}),"\nRepair action: 4D does nothing."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": In strict mode (default mode), integration will stop at the first error encountered. In this case, if you want to continue with the integration you will need to use the MSC."]}),"\n",(0,i.jsxs)(n.p,{children:['When one of these anomalies occurs in auto-repair mode, the record concerned is automatically "repaired" and the related operation is logged in the ',(0,i.jsx)(n.em,{children:"errObject"})," parameter. After execution is completed, the ",(0,i.jsx)(n.em,{children:"errObject"}),' parameter lists all the repaired records. It contains a single object array named "operations" built as follows:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"operations":\xa0\xa0\xa0 [\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "operationType":24,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "operationName":"Create record",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "operationNumber":2,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextID":48,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "timeStamp":"2015-07-10T07:53:02.413Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "dataLen":24,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber":0,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "tableID":"F4CXXXXX",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "tableName":"Customers",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "fields": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "1": 9,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "2": "test value",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "3": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "8": "BlobID: 2"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 {...} \xa0\xa0\xa0 ]\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," The auto-repair mode must be used in specific cases since it bypasses 4D's internal data integrity checking features. It can be used, for example, when an intermediary log file has been lost or corrupted and you want to recover as many operations as possible. In any case, you need to pay particular attention to data integrity when using this mode."]}),"\n",(0,i.jsx)(n.h5,{id:""}),"\n",(0,i.jsx)(n.p,{children:"The actual list of available properties depends on the operation type (i.e.: create record, delete record, modify record, create Blob, etc.). Here are the main properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"operationType"}),": internal code for the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"operationName"}),': kind of operation, for example "create record," "modify record"']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"operationNumber"}),": internal number of operation in the log file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"contextID"}),": ID of execution context; the context is detailed in the ",(0,i.jsx)(n.em,{children:"extraData"})," section"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"timeStamp"}),": timestamp of operation in the log file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"dataLen"}),": internal size of data"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"recordNumber"}),": internal record number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"tableID"}),": internal ID of the table"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"tableName"}),": name of the table"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"fields"}),": object containing the list of field numbers along with their values. All fields in the table are logged.",(0,i.jsx)(n.br,{}),"\nIn case of Blob or picture values, different information is provided based on their storage location:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'If the Blob or picture is stored inside the data file, the property will be "BlobID:"+ an internal Blob number, for example: "BlobID:1"'}),"\n",(0,i.jsx)(n.li,{children:'If the Blob or picture is stored outside the data file, the property will be "BlobPath:" + the path for the data, for example: "BlobPath: Table 1/Field 6/Data_EE12D091535F9748BCE62EDE972A4BA2.jpg"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"extraData"}),": user context data, including user name and ID, task name and ID, host machine name, and client version."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"sequenceNumber"}),": current number within auto-increment sequence."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"primaryKey"}),": primary key value."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to integrate a log file on the mirror server in auto-repair mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//to be executed on the server\n\xa0var $err : Object\n\xa0var $num : Integer\xa0//-2 to integrate all operations\n\xa0INTEGRATE MIRROR LOG FILE("c:\\\\mirror\\\\logNew.journal";$num;Auto repair mode;$err)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(n.p,{children:"If the integration is carried out correctly, the system variable OK is set to 1; otherwise, it is set to 0."}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/log-file-to-json",children:"LOG FILE TO JSON"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1312"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);