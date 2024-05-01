"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29725],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},375353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"analysis",title:"Activity analysis Page"},l=void 0,s={unversionedId:"MSC/analysis",id:"version-20-R4/MSC/analysis",title:"Activity analysis Page",description:"The Activity analysis page allows viewing the contents of the current log file. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine.",source:"@site/versioned_docs/version-20-R4/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/20-R4/MSC/analysis",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fanalysis.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"analysis",title:"Activity analysis Page"},sidebar:"docs",previous:{title:"Information Page",permalink:"/docs/20-R4/MSC/information"},next:{title:"Verify Page",permalink:"/docs/20-R4/MSC/verify"}},p={},c=[],u={toc:c};function f(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Activity analysis page allows viewing the contents of the current log file. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is also possible to rollback the operations carried out on the data of the database. For more information, refer to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/MSC/rollback"}),"Rollback page"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(432181).Z,width:"882",height:"666"})),(0,a.kt)("p",null,"Every operation recorded in the log file appears as a row. The columns provide various information on the operation. You can reorganize the columns as desired by clicking on their headers."),(0,a.kt)("p",null,"This information allows you to identify the source and context of each operation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Operation"),": Sequence number of operation in the log file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Action"),": Type of operation performed on the data. This column can contain one of the following operations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Opening of Data File: Opening of a data file."),(0,a.kt)("li",{parentName:"ul"},"Closing of Data File: Closing of an open data file."),(0,a.kt)("li",{parentName:"ul"},"Creation of a Context: Creation of a process that specifies an execution context."),(0,a.kt)("li",{parentName:"ul"},"Closing of a Context: Closing of process."),(0,a.kt)("li",{parentName:"ul"},"Addition: Creation and storage of a record."),(0,a.kt)("li",{parentName:"ul"},"Adding a BLOB: Storage of a BLOB in a BLOB field."),(0,a.kt)("li",{parentName:"ul"},"Deletion: Deletion of a record."),(0,a.kt)("li",{parentName:"ul"},"Modification: Modification of a record."),(0,a.kt)("li",{parentName:"ul"},"Start of Transaction: Transaction started."),(0,a.kt)("li",{parentName:"ul"},"Validation of Transaction: Transaction validated."),(0,a.kt)("li",{parentName:"ul"},"Cancellation of Transaction: Transaction cancelled."),(0,a.kt)("li",{parentName:"ul"},"Update context: Change in extra data (e.g. a call to ",(0,a.kt)("inlineCode",{parentName:"li"},"CHANGE CURRENT USER")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"SET USER ALIAS"),")."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Table"),": Table to which the added/deleted/modified record or BLOB belongs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Primary Key/BLOB"),": contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Process"),": Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Size"),": Size (in bytes) of data processed by the operation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Date and Hour"),": Date and hour when the operation was performed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"System User"),": System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"4D User"),": 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Values"),": Values of fields for the record in the case of addition or modification. The values are separated by \u201c;\u201d. Only values represented in alphanumeric form are displayed.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"*Note:")," If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Records"),": Record number."))),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Analyze")," to update the contents of the current log file of the selected application (named by default dataname.journal). The Browse button can be used to select and open another log file for the application. The ",(0,a.kt)("strong",{parentName:"p"},"Export...")," button can be used to export the contents of the file as text."))}f.isMDXComponent=!0},432181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"}}]);