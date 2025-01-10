"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57062"],{14936:function(e,i,a){a.r(i),a.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"MSC/repair","title":"Repair Page","description":"This page is used to repair the data file when it has been damaged. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a verification.","source":"@site/versioned_docs/version-19/MSC/repair.md","sourceDirName":"MSC","slug":"/MSC/repair","permalink":"/docs/19/MSC/repair","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frepair.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"repair","title":"Repair Page","sidebar_label":"Repair Page"},"sidebar":"docs","previous":{"title":"Restore Page","permalink":"/docs/19/MSC/restore"},"next":{"title":"Encrypt Page","permalink":"/docs/19/MSC/encrypt"}}'),n=a("785893"),r=a("250065");let s={id:"repair",title:"Repair Page",sidebar_label:"Repair Page"},o=void 0,l={},d=[{value:"File overview",id:"file-overview",level:2},{value:"Data file to be repaired",id:"data-file-to-be-repaired",level:3},{value:"Original files backup folder",id:"original-files-backup-folder",level:3},{value:"Repaired files",id:"repaired-files",level:3},{value:"Standard repair",id:"standard-repair",level:2},{value:"Recover by record headers",id:"recover-by-record-headers",level:2},{value:"Manual assigning",id:"manual-assigning",level:3},{value:"Open log file",id:"open-log-file",level:2}];function c(e){let i={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["This page is used to repair the data file when it has been damaged. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a ",(0,n.jsx)(i.a,{href:"/docs/19/MSC/verify",children:"verification"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Warning:"})," Each repair operation involves the duplication of the original file, which increases the size of the application folder. It is important to take this into account (especially in macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually removing the copies of the original file inside the package can be useful to minimize the package size."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Repairing is only available in maintenance mode. If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode."}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"When the database is encrypted, repairing data includes decryption and encryption steps and thus, requires the current data encryption key. If no valid encryption key has already been provided, a dialog requesting the passphrase or the encryption key is displayed (see Encrypt page)."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"file-overview",children:"File overview"}),"\n",(0,n.jsx)(i.h3,{id:"data-file-to-be-repaired",children:"Data file to be repaired"}),"\n",(0,n.jsxs)(i.p,{children:["Pathname of the current data file. The ",(0,n.jsx)(i.strong,{children:"[...]"})," button can be used to specify another data file. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. If you perform a ",(0,n.jsx)(i.a,{href:"#standard-repair",children:"standard repair"}),", you must select a data file that is compatible with the open project file. If you perform a ",(0,n.jsx)(i.a,{href:"#recover-by-record-headers",children:"recover by record headers"})," repair, you can select any data file. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window."]}),"\n",(0,n.jsx)(i.h3,{id:"original-files-backup-folder",children:"Original files backup folder"}),"\n",(0,n.jsxs)(i.p,{children:["By default, the original data file will be duplicated before the repair operation. It will be placed in a subfolder named \u201CReplaced files (repairing)\u201D in the application folder. The second ",(0,n.jsx)(i.strong,{children:"[...]"})," button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks."]}),"\n",(0,n.jsx)(i.h3,{id:"repaired-files",children:"Repaired files"}),"\n",(0,n.jsx)(i.p,{children:'4D creates a new blank data file at the location of the original file. The original file is moved into the folder named "\\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (application folder by default). The blank file is filled with the recovered data.'}),"\n",(0,n.jsx)(i.h2,{id:"standard-repair",children:"Standard repair"}),"\n",(0,n.jsx)(i.p,{children:"Standard repair should be chosen when only a few records or indexes are damaged (address tables are intact). The data is compacted and repaired. This type of repair can only be performed when the data and structure file match."}),"\n",(0,n.jsxs)(i.p,{children:['When the repair procedure is finished, the "Repair" page of the MSC is displayed. A message indicates if the repair was successful. If so, you can open the application immediately.\n',(0,n.jsx)(i.img,{src:a(876693).Z+"",width:"225",height:"45"})]}),"\n",(0,n.jsx)(i.h2,{id:"recover-by-record-headers",children:"Recover by record headers"}),"\n",(0,n.jsx)(i.p,{children:"Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective."}),"\n",(0,n.jsx)(i.p,{children:"4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["If you have deselected the ",(0,n.jsx)(i.strong,{children:"Records definitively deleted"})," option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear."]}),"\n",(0,n.jsxs)(i.p,{children:["Recovery by headers does not take integrity constraints into account. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared ",(0,n.jsx)(i.strong,{children:"Never Null"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["When you click on ",(0,n.jsx)(i.strong,{children:"Scan and repair..."}),", 4D performs a complete scan of the data file. When the scan is complete, the results appear in the following window:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:a(959480).Z+"",width:"906",height:"683"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"If all the records and all the tables have been assigned, only the main area is displayed."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:'The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"The first table lists the information from the data file scan. Each row shows a group of recoverable records in the data file:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Order"})," column indicates the recovery order for the group of records."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Count"})," column indicates the number of the records in the table."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Destination table"})," column indicates the names of tables that were automatically assigned to the groups of identified records. The names of tables assigned automatically appear in green. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Recover"})," column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"The second table lists the tables of the project file."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"manual-assigning",children:"Manual assigning"}),"\n",(0,n.jsx)(i.p,{children:'If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually.\nTo do this, first select an unassigned group of records in the first table. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:a(9100).Z+"",width:"903",height:"682"})}),"\n",(0,n.jsxs)(i.p,{children:['Next select the table you want to assign to the group in the "Unassigned tables" table and click on the ',(0,n.jsx)(i.strong,{children:"Identify table"})," button. You can also assign a table using drag and drop.\nThe group of records is then associated with the table and it will be recovered in this table. The names of tables that are assigned manually appear in black.\nUse the ",(0,n.jsx)(i.strong,{children:"Ignore records"})," button to remove the association made manually between the table and the group of records."]}),"\n",(0,n.jsx)(i.h2,{id:"open-log-file",children:"Open log file"}),"\n",(0,n.jsxs)(i.p,{children:["After repair is completed, 4D generates a log file in the Logs folder of the project. This file allows you to view all the operations carried out. It is created in XML format and named: ",(0,n.jsx)(i.em,{children:"ApplicationName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" where:']}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"ApplicationName"}),' is the name of the project file without any extension, for example "Invoices",']}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"yyyy-mm-dd hh-mm-ss"}),' is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["When you click on the ",(0,n.jsx)(i.strong,{children:"Open log file"})," button, 4D displays the most recent log file in the default browser of the machine."]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},876693:function(e,i,a){a.d(i,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAtCAIAAADX+5viAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAPcSURBVHhe7ZdBaxNBFMf7qXISD/Ugiih48KAIEYXeRDz3HlD8JLlJta0IIhZpEBLtxZNCL4k2mkZqhXpydt7M7JuZt5vdJGYH/f8ouvvmzZv3Jj9CuzYFIG3gKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOApSB46C1GnY0U5rLaTV6fd1uN01STVZbLdHt21b0k/qfwplD+Us2ETFUxpn3j5rXU8S36PUcT7qX3VUX2uV2l5XcFQEjprXmpTv1rdaw9EwE44ug1rXszRHD4bH5qk+1HHoaKuV/csXKE5EHyBfVGTzR/kkqEFlFBf0qqlMJw23p6QfWgpGEPJZR/wTo1PabW+7QjwxDlLV+AIJnk+nFlQIGyhKU49VagYn+xOXsBxHH/fH554Otz99N+81odbtIN47Peph9H3QWCxqoE8lz/Pnd1cpripYgsM7xCXkmfqJluN+5BEstoh0rEYv8O3FJ0rBaLt3OoXycytVcNkZejWLuIfqNXWQPc5mCY4+6o8v73y52zu98Hw0n6bhLbipFP51eLAR+cx8t727DKof3k6U4PDq+G3M7EcewcU1KuLegqOFLaqUeGJJUJ9Ou736Qai4QtiAe9Zkqy6tQk3WlFdyJos6SoLeH5w9/PB7492v+TQNBvQmsLcQ5viI81Mw22KLBJligsO7R5dgH8r7EUeQj6No/q7hCbaUeKLcBtXUpwsJfqikgglShpUsC7pV91ChJmvKldQLs1jIUS4o/dx4Pb26O/pW81fTcCQ+QXALbq5uh98Aq+Dy8hhb5bXlBAfLZG1U68fbbLZ0i49zRS06QJG8kniiGKTtOhadFYVKKngN5NvyJ9d4hZosJV8O9onM72gs6O23J5e2Rx9Htf94ChuldxqQf3xmNCKci27Vke22IfrjwW6wUZUhJxh4F3kb7sFlGPzd4gjRcTag8LezhQzTRMGJcZC261206FWPQ0UVHGwQRX5dOpI9VKkpVRXai5AdfXM4ufly9Pmo0LYlCgpSxMmXAIKje4eT9WfD66+Or+3Kmqq/4iHoP07KjqpvUCXovd6pMu/W3o9YU3yD/hck6+jBcHJ+a3Rn/6fzL9AUgoLVE36PbvaOrrw4esAsNJqOIShoBuH3UVHT9a0hBAWNIDiqiDXd6J1AUNAIsqOKzX2t6XsjJf+BoGCVFDqqEDWFoGDFlDmqCDSFoGD1zHBUYTQdnEFQ0AizHVUoTS/ufIWgoBEqOap4MhhDUNAIVR0FoCngKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOArSZjr9Az4Tm0/7xRlRAAAAAElFTkSuQmCC"},959480:function(e,i,a){a.d(i,{Z:function(){return t}});let t=a.p+"assets/images/mscrepair2-70f7dc0be1529255122f9c117f88d8a0.png"},9100:function(e,i,a){a.d(i,{Z:function(){return t}});let t=a.p+"assets/images/mscrepair3-fca9ba66ac4c95138c0a5560adae3d30.png"},250065:function(e,i,a){a.d(i,{Z:function(){return o},a:function(){return s}});var t=a(667294);let n={},r=t.createContext(n);function s(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);