"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19184],{345778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(474848),i=a(28453);const o={id:"compact",title:"Compact Page",sidebar_label:"Compact Page"},s=void 0,c={id:"MSC/compact",title:"Compact Page",description:"You use this page to access the data file compacting functions.",source:"@site/versioned_docs/version-19/MSC/compact.md",sourceDirName:"MSC",slug:"/MSC/compact",permalink:"/docs/19/MSC/compact",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fcompact.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"compact",title:"Compact Page",sidebar_label:"Compact Page"},sidebar:"docs",previous:{title:"Backup Page",permalink:"/docs/19/MSC/backup"},next:{title:"Rollback Page",permalink:"/docs/19/MSC/rollback"}},r={},d=[{value:"Why compact your files?",id:"why-compact-your-files",level:2},{value:"Standard compacting",id:"standard-compacting",level:2},{value:"Open log file",id:"open-log-file",level:2},{value:"Advanced mode",id:"advanced-mode",level:2},{value:"Compact records and indexes",id:"compact-records-and-indexes",level:3},{value:"Force updating of the records",id:"force-updating-of-the-records",level:3},{value:"Compact address table",id:"compact-address-table",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"You use this page to access the data file compacting functions."}),"\n",(0,n.jsx)(t.h2,{id:"why-compact-your-files",children:"Why compact your files?"}),"\n",(0,n.jsx)(t.p,{children:"Compacting files meets two types of needs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Reducing size and optimization of files"}),": Files may contain unused spaces (\u201choles\u201d). In fact, when you delete records, the space that they occupied previously in the file becomes empty. 4D reuses these empty spaces whenever possible, but since data size is variable, successive deletions or modifications will inevitably generate unusable space for the program. The same goes when a large quantity of data has just been deleted: the empty spaces remain unassigned in the file.\nThe ratio between the size of the data file and the space actually used for the data is the occupation rate of the data. A rate that is too low can lead, in addition to a waste of space, to the deterioration of database performance. Compacting can be used to reorganize and optimize storage of the data in order to remove the \u201choles\u201d.\nThe \u201cInformation\u201d area summarizes the data concerning the fragmentation of the file and suggests operations to be carried out. The ",(0,n.jsx)(t.a,{href:"/docs/19/MSC/information#data",children:"Data"})," tab on the \u201cInformation\u201d page of the MSC indicates the fragmentation of the current data file."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Complete updating of data"})," by applying the current formatting set in the structure file. This is useful when data from the same table were stored in different formats, for example after a change in the database structure."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Compacting is only available in maintenance mode. If you attempt to carry out this operation in standard mode, a warning dialog box will inform you that the application will be closed and restarted in maintenance mode. You can compact a data file that is not opened by the application (see ",(0,n.jsx)(t.a,{href:"#compact-records-and-indexes",children:"Compact records and indexes"})," below)."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"standard-compacting",children:"Standard compacting"}),"\n",(0,n.jsx)(t.p,{children:"To directly begin the compacting of the data file, click on the compacting button in the MSC window."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(551353).A+"",width:"158",height:"88"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Since compacting involves the duplication of the original file, the button is disabled when there is not adequate space available on the disk containing the file."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This operation compacts the main file as well as any index files. 4D copies the original files and puts them in a folder named ",(0,n.jsx)(t.strong,{children:"Replaced Files (Compacting)"}),", which is created next to the original file. If you have carried out several compacting operations, a new folder is created each time. It will be named \u201cReplaced Files (Compacting)_1\u201d, \u201cReplaced Files (Compacting)_2\u201d, and so on. You can modify the folder where the original files are saved using the advanced mode."]}),"\n",(0,n.jsx)(t.p,{children:"When the operation is completed, the compacted files automatically replace the original files. The application is immediately operational without any further manipulation."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"When the database is encrypted, compacting includes decryption and encryption steps and thus, requires the current data encryption key. If no valid data key has already been provided, a dialog box requesting the passphrase or the data key is displayed."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Warning:"})," Each compacting operation involves the duplication of the original file which increases the size of the application folder. It is important to take this into account (especially under macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually removing the copies of the original file inside the package can be useful in order to keep the package size down."]}),"\n",(0,n.jsx)(t.h2,{id:"open-log-file",children:"Open log file"}),"\n",(0,n.jsxs)(t.p,{children:["After compacting is completed, 4D generates a log file in the Logs folder of the project. This file allows you to view all the operations carried out. It is created in XML format and named:  ",(0,n.jsx)(t.em,{children:"ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" where:']}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"ApplicationName"}),' is the name of the project file without any extension, for example "Invoices",']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"yyyy-mm-dd hh-mm-ss"}),' is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When you click on the ",(0,n.jsx)(t.strong,{children:"Open log file"})," button, 4D displays the most recent log file in the default browser of the machine."]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-mode",children:"Advanced mode"}),"\n",(0,n.jsxs)(t.p,{children:["The Compact page contains an ",(0,n.jsx)(t.strong,{children:"Advanced>"})," button, which can be used to access an options page for compacting data file."]}),"\n",(0,n.jsx)(t.h3,{id:"compact-records-and-indexes",children:"Compact records and indexes"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Compact records and indexes"})," area displays the pathname of the current data file as well as a ",(0,n.jsx)(t.strong,{children:"[...]"})," button that can be used to specify another data file. When you click on this button, a standard Open document dialog box is displayed so that you can designate the data file to be compacted. You must select a data file that is compatible with the open structure file. Once this dialog box has been validated, the pathname of the file to be compacted is indicated in the window."]}),"\n",(0,n.jsxs)(t.p,{children:["The second ",(0,n.jsx)(t.strong,{children:"[...]"})," button can be used to specify another location for the original files to be saved before the compacting operation. This option can be used more particularly when compacting voluminous files while using different disks."]}),"\n",(0,n.jsx)(t.h3,{id:"force-updating-of-the-records",children:"Force updating of the records"}),"\n",(0,n.jsx)(t.p,{children:"When this option is checked, 4D rewrites every record for each table during the compacting operation, according to its description in the structure. If this option is not checked, 4D just reorganizes the data storage on disk. This option is useful in the following cases:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"When field types are changed in the application structure after data were entered. For example, you may have changed a Longint field to a Real type. 4D even allows changes between two very different types (with risks of data loss), for instance a Real field can be changed to Text and vice versa.\nIn this case, 4D does not convert data already entered retroactively; data is converted only when records are loaded and then saved. This option forces all data to be converted."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"When an external storage option for Text, Picture or BLOB data has been changed after data were entered. This can happen when databases are converted from a version prior to v13. As is the case with the retyping described above, 4D does not convert data already entered retroactively. To do this, you can force records to be updated in order to apply the new storage mode to records that have already been entered."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"When tables or fields were deleted. In this case, compacting with updating of records recovers the space of these removed data and thus reduces file size."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"All the indexes are updated when this option is selected."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"compact-address-table",children:"Compact address table"}),"\n",(0,n.jsx)(t.p,{children:"(option only active when preceding option is checked)"}),"\n",(0,n.jsx)(t.p,{children:"This option completely rebuilds the address table for the records during compacting. This optimizes the size of the address table and is mainly used for databases where large volumes of data were created and then deleted. In other cases, optimization is not a decisive factor."}),"\n",(0,n.jsxs)(t.p,{children:["Note that this option substantially slows compacting and invalidates any sets saved using the ",(0,n.jsx)(t.code,{children:"SAVE SET"})," command. Moreover, we strongly recommend deleting saved sets in this case because their use can lead to selections of incorrect data."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Compacting takes records of tables that have been put into the Trash into account. If there are a large number of records in the Trash, this can be an additional factor that may slow down the operation."}),"\n",(0,n.jsx)(t.li,{children:"Using this option makes the address table, and thus the database, incompatible with the current journal file (if there is one). It will be saved automatically and a new journal file will have to be created the next time the application is launched."}),"\n",(0,n.jsxs)(t.li,{children:["You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the ",(0,n.jsx)(t.a,{href:"/docs/19/MSC/information",children:"Information"})," page of the MSC."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1051.html",children:(0,n.jsx)(t.code,{children:"TRUNCATE TABLE"})})," command automatically resets the address table for the specified table."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},551353:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>c});var n=a(296540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);