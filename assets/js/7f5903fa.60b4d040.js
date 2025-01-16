"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83544"],{357560:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/variable-to-blob","title":"VARIABLE TO BLOB","description":"VARIABLE TO BLOB ( variable ; blob {; offset\xa0|\xa0*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/variable-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/variable-to-blob","permalink":"/docs/20-R7/commands/variable-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariable-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"variable-to-blob","title":"VARIABLE TO BLOB","slug":"/commands/variable-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TEXT TO BLOB","permalink":"/docs/20-R7/commands/text-to-blob"},"next":{"title":"Boolean","permalink":"/docs/20-R7/category/boolean"}}'),a=t("785893"),s=t("250065");let o={id:"variable-to-blob",title:"VARIABLE TO BLOB",slug:"/commands/variable-to-blob",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Note",id:"note",level:5},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VARIABLE TO BLOB"})," ( ",(0,a.jsx)(n.em,{children:"variable"})," ; ",(0,a.jsx)(n.em,{children:"blob"})," {; offset\xa0|\xa0*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"variable"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Variable to store in the BLOB"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"blob"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"BLOB to receive the variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"offset\xa0|\xa0*"}),(0,a.jsx)(n.td,{children:"Variable, Operator"}),(0,a.jsx)(n.td,{children:"\u2194"}),(0,a.jsx)(n.td,{children:"Offset within the BLOB (expressed in bytes) or * to append the value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"New offset after writing if not *"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The VARIABLE TO BLOB command stores the variable ",(0,a.jsx)(n.em,{children:"variable"})," in the BLOB ",(0,a.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you specify the * optional parameter, the variable is appended to the BLOB and the size of the BLOB is extended accordingly. Using the * optional parameter, you can sequentially store any number of variables or lists (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory."}),"\n",(0,a.jsxs)(n.p,{children:["If you do not specify the * optional parameter or the ",(0,a.jsx)(n.em,{children:"offset"})," variable parameter, the variable is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly."]}),"\n",(0,a.jsxs)(n.p,{children:["If you pass the ",(0,a.jsx)(n.em,{children:"offset"})," variable parameter, the variable is written at the offset (starting from zero) within the BLOB. No matter where you write the variable, the size of the BLOB is increased according to the location you passed (plus the size of the variable, if necessary). Newly allocated bytes, other than the ones you are writing, are initialized to zero."]}),"\n",(0,a.jsxs)(n.p,{children:["After the call, the ",(0,a.jsx)(n.em,{children:"offset"})," variable parameter is returned, incremented by the number of bytes that have been written. Therefore, you can reuse that same variable with another BLOB writing command to write another variable or list."]}),"\n",(0,a.jsx)(n.p,{children:"VARIABLE TO BLOB accepts any type of variable (including other BLOBs), except the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pointer"}),"\n",(0,a.jsx)(n.li,{children:"Array of pointers"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Note that:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["if you store a Long Integer variable that is a reference to a hierarchical list (ListRef), VARIABLE TO BLOB stores the Long Integer variable, not the list. To store and retrieve hierarchical lists in and from a BLOB, use the ",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/list-to-blob",children:"LIST TO BLOB"})," and ",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-list",children:"BLOB to list"})," commands."]}),"\n",(0,a.jsxs)(n.li,{children:["if you pass an object or a collection in the ",(0,a.jsx)(n.em,{children:"variable"})," parameter, the command places a copy (and not a reference) of it in the BLOB. If the object or collection contains pointers, their dereferenced values are stored in the BLOB, not the pointers themselves."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WARNING:"})," If you use a BLOB for storing variables, you must later use the command ",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-variable",children:"BLOB TO VARIABLE"})," for reading back the contents of the BLOB, because variables are stored in BLOBs using a 4D internal format."]}),"\n",(0,a.jsx)(n.p,{children:"After the call, if the variable has been successfully stored, the OK variable is set to 1. If the operation could not be performed, the OK variable is set to 0; for example, there was not enough memory."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note regarding Platform Independence:"})," VARIABLE TO BLOB and ",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-variable",children:"BLOB TO VARIABLE"})," use a 4D internal format for handling variables stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms while using these two commands. In other words, a BLOB created on Windows using either of these commands can be reused on Macintosh, and vice-versa."]}),"\n",(0,a.jsx)(n.h5,{id:"note",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Compatiblity note:"})," Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See ",(0,a.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n",(0,a.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,a.jsx)(n.p,{children:"The OK variable is set to 1 if the variable has been successfully stored, otherwise it is set to 0."}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"The two following project methods allow you to quickly store and retrieve any set of variables into and from a BLOB:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//STORE VARIABLES INTO BLOB project method\n\xa0\xa0//STORE VARIABLES INTO BLOB ( Pointer { ; Pointer ... { ; Pointer } } )\n\xa0\xa0//STORE VARIABLES INTO BLOB ( BLOB { ; Var1 ... { ; Var2 } } )\n\xa0var ${1} : Pointer\n\xa0var $vlParam : Integer\n\xa0\n\xa0SET BLOB SIZE($1->;0)\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(${$vlParam}->;$1->;*)\n\xa0End for\n\xa0\n\xa0\n\xa0\xa0//RETRIEVE VARIABLES FROM BLOB project method\n\xa0\xa0//RETRIEVE VARIABLES FROM BLOB ( Pointer { ; Pointer ... { ; Pointer } } )\n\xa0\xa0//RETRIEVE VARIABLES FROM BLOB ( BLOB { ; Var1 ... { ; Var2 } } )\n\xa0var ${1} : Pointer\n\xa0var $vlParam;$vlOffset : Integer\n\xa0\n\xa0$vlOffset:=0\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)\n\xa0End for\n"})}),"\n",(0,a.jsx)(n.p,{children:"After these methods have been added to your application, you can write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0STORE VARIABLES INTO BLOB(->vxBLOB;->vgPicture;->asAnArray;->alAnotherArray)\n\xa0\xa0// ...\n\xa0RETRIEVE VARIABLES FROM BLOB(->vxBLOB;->vgPicture;->asAnArray;->alAnotherArray)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(n.p,{children:"The two following project methods allow you to quickly store and retrieve arrays into and from documents on disk:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// SAVE ARRAY project method\n\xa0\xa0// SAVE ARRAY (Text ; Pointer)\n\xa0\xa0// SAVE ARRAY (Document ; -> Array)\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0var $vxArrayData : Blob\n\xa0VARIABLE TO BLOB($2->;$vxArrayData)\xa0// Store the array in the BLOB\n\xa0COMPRESS BLOB($vxArrayData)\xa0// Compress the BLOB\n\xa0BLOB TO DOCUMENT($1;$vxArrayData)\xa0// Save the BLOB on disk\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// LOAD ARRAY project method\n\xa0\xa0// LOAD ARRAY (Text ; Pointer)\n\xa0\xa0// LOAD ARRAY (Document ; -> Array)\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0var $vxArrayData : Blob\n\xa0DOCUMENT TO BLOB($1;$vxArrayData)\xa0// Load the BLOB from the disk\n\xa0EXPAND BLOB($vxArrayData)\xa0// Expand the BLOB\n\xa0BLOB TO VARIABLE($vxArrayData;$2->)\xa0// Retrieve the array from the BLOB\n"})}),"\n",(0,a.jsx)(n.p,{children:"After these methods have been added to your application, you can write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(...;asAnyArray;...)\n\xa0\xa0//\xa0 ...\n\xa0SAVE ARRAY($vsDocName;->asAnyArray)\n\xa0\xa0//\xa0 ...\n\xa0LOAD ARRAY($vsDocName;->asAnyArray)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-list",children:"BLOB to list"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/list-to-blob",children:"LIST TO BLOB"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"532"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifies variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let a={},s=r.createContext(a);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);