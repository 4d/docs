"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96893"],{101516:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>r,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"ORDA/global-stamp","title":"Using the Global Stamp","description":"Overview","source":"@site/versioned_docs/version-20-R9/ORDA/global-stamp.md","sourceDirName":"ORDA","slug":"/ORDA/global-stamp","permalink":"/docs/ORDA/global-stamp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglobal-stamp.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"global-stamp","title":"Using the Global Stamp"},"sidebar":"docs","previous":{"title":"Working with data","permalink":"/docs/ORDA/entities"},"next":{"title":"Remote datastores","permalink":"/docs/ORDA/datastores"}}'),a=n("785893"),l=n("250065");let s={id:"global-stamp",title:"Using the Global Stamp"},d=void 0,r={},o=[{value:"Overview",id:"overview",level:2},{value:"Configuring data change tracking",id:"configuring-data-change-tracking",level:2},{value:"Structure requirements",id:"structure-requirements",level:3},{value:"Using the Structure Editor",id:"using-the-structure-editor",level:3},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["4D automatically manages an internal ",(0,a.jsx)(t.strong,{children:"global modification stamp"}),", useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc."]}),"\n",(0,a.jsxs)(t.p,{children:["The global modification stamp is a number, always maintained by 4D, even in case of database restoration, import, etc. Note however that the stamp can be modified using the ",(0,a.jsx)(t.a,{href:"/docs/API/DataStoreClass#setglobalstamp",children:(0,a.jsx)(t.code,{children:".setGlobalStamp()"})})," function."]}),"\n",(0,a.jsxs)(t.p,{children:["Once the ",(0,a.jsx)(t.a,{href:"#configuring-data-change-tracking",children:"data change tracking is configured and enabled"}),", the following actions are automatically executed by 4D at each record modification (add, modify, delete):"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:['The current global modification stamp value is saved in the special "__GlobalStamp" attribute of the involved entity.\nIn case of a deletion, a new entity is also added to the ',(0,a.jsx)(t.code,{children:"__DeletedRecords"}),' table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The global modification stamp value is incremented."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This mechanism allows you to identify entities that have been modified, added, or deleted since a point in time, and to implement any appropriate action (see example)."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Do not confuse the ",(0,a.jsx)(t.strong,{children:"global modification stamp"})," with the internal ",(0,a.jsx)(t.strong,{children:"entity stamp"}),", used for the ",(0,a.jsx)(t.a,{href:"/docs/ORDA/entities#automatic-optimistic-lock",children:"optimistic locking feature"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"configuring-data-change-tracking",children:"Configuring data change tracking"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the global modification stamp is not created (the ",(0,a.jsx)(t.a,{href:"/docs/API/DataStoreClass#getglobalstamp",children:(0,a.jsx)(t.code,{children:".getGlobalStamp()"})})," function returns 0. To enable data change tracking, you need to add special fields and a table to your structure. You can use the contextual menu of the Structure Editor to create automatically all necessary elements."]}),"\n",(0,a.jsx)(t.h3,{id:"structure-requirements",children:"Structure requirements"}),"\n",(0,a.jsxs)(t.p,{children:["To enable data change tracking, the application structure must contain at least one table with a ",(0,a.jsx)(t.code,{children:"__GlobalStamp"})," field."]}),"\n",(0,a.jsx)(t.p,{children:"In addition, to ensure proper operation of the feature, the following conditions are required:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"__GlobalStamp"})," field must must be of type ",(0,a.jsx)(t.em,{children:"Integer 64 bits"}),", with ",(0,a.jsx)(t.em,{children:"automatic index"}),", ",(0,a.jsx)(t.em,{children:"Expose as REST resource"}),", and ",(0,a.jsx)(t.em,{children:"Invisible"})," properties selected."]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.code,{children:"__DeletedRecords"})," table must be added, with the following fields:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"__PrimaryKey"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"Primary key of the deleted entity"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"__Stamp"}),(0,a.jsx)(t.td,{children:"Integer 64 bits"}),(0,a.jsx)(t.td,{children:"Global stamp just before the deletion"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"__TableName"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"Name of the deleted entity table"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"__TableNumber"}),(0,a.jsx)(t.td,{children:"Long Integer"}),(0,a.jsx)(t.td,{children:"Number of the deleted entity table"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["You can only track changes for data in tables having the ",(0,a.jsx)(t.code,{children:"__GlobalStamp"})," field."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["In the 4D language, the ",(0,a.jsx)(t.code,{children:"__GlobalStamp"})," field value should be handled through a ",(0,a.jsx)(t.code,{children:"Real"})," type variable."]})}),"\n",(0,a.jsx)(t.h3,{id:"using-the-structure-editor",children:"Using the Structure Editor"}),"\n",(0,a.jsx)(t.p,{children:"The 4D Structure Editor allows you to enable or disable data change tracking using a single menu item."}),"\n",(0,a.jsx)(t.p,{children:"To enable data change tracking:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Select the table(s) for which you want to enable data change tracking."}),"\n",(0,a.jsxs)(t.li,{children:["Right-click on a selected table and select ",(0,a.jsx)(t.strong,{children:"Enable data change tracking"})," in the contextual menu."]}),"\n",(0,a.jsxs)(t.li,{children:["A confirmation dialog box is displayed. Click ",(0,a.jsx)(t.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"4D then makes the following changes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A preconfigured ",(0,a.jsx)(t.code,{children:"__GlobalStamp"})," field is added to the table(s)."]}),"\n",(0,a.jsxs)(t.li,{children:["If not already existing, a ",(0,a.jsx)(t.code,{children:"__DeletedRecords"})," table is added to the structure."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To disable data change tracking:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Select the table(s) for which you want to remove data change tracking."}),"\n",(0,a.jsxs)(t.li,{children:["Right-click on a selected table and select ",(0,a.jsx)(t.strong,{children:"Disable data change tracking"})," in the contextual menu."]}),"\n",(0,a.jsxs)(t.li,{children:["A confirmation dialog box is displayed. Click ",(0,a.jsx)(t.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["4D then removes the ",(0,a.jsx)(t.code,{children:"__GlobalStamp"})," field from the table(s). Note that if you want to remove the ",(0,a.jsx)(t.code,{children:"__DeletedRecords"})," table, you need to do it manually."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'var $oldStamp : Real\nvar $tableName : Text\nvar $modifiedEmps : cs.EmployeeSelection\nvar $deletedEmpsInfo : cs.__DeletedRecordsSelection\n\n$tableName:="Employee"\n$oldStamp:=... //load the previous stamp value  \n	//from which you want to compare the current stamp\n\nIf ($oldStamp # ds.getGlobalStamp())\n		//get all new or modified entities\n	$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)\n		//get all deleted entities\n	$deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\\\n	$oldStamp; $tableName)\nEnd if\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(667294);let a={},l=i.createContext(a);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);