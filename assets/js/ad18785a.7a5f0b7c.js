"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35480],{721813:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=o(474848),s=o(28453);const a={id:"blob",title:"BLOB"},t=void 0,i={id:"Concepts/blob",title:"BLOB",description:"A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually.",source:"@site/versioned_docs/version-20/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/20/Concepts/blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Data types overview",permalink:"/docs/20/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/20/Concepts/boolean"}},r={},c=[{value:"Blob Types",id:"blob-types",level:2},{value:"Checking if a variable holds a scalar blob or a <code>4D.Blob</code>",id:"checking-if-a-variable-holds-a-scalar-blob-or-a-4dblob",level:2},{value:"Passing blobs as parameters",id:"passing-blobs-as-parameters",level:2},{value:"Passing blobs and blob objects to 4D commands",id:"passing-blobs-and-blob-objects-to-4d-commands",level:3},{value:"Passing blobs and blob objects to methods",id:"passing-blobs-and-blob-objects-to-methods",level:3},{value:"Passing a scalar blob by reference using a pointer",id:"passing-a-scalar-blob-by-reference-using-a-pointer",level:3},{value:"Assigning a blob variable to another",id:"assigning-a-blob-variable-to-another",level:2},{value:"Automatic conversion of blob type",id:"automatic-conversion-of-blob-type",level:2},{value:"Modifying a scalar blob",id:"modifying-a-scalar-blob",level:2},{value:"Individually accessing bytes in a blob",id:"individually-accessing-bytes-in-a-blob",level:2},{value:"Accessing a scalar blob&#39;s bytes",id:"accessing-a-scalar-blobs-bytes",level:4},{value:"Accessing a <code>4D.Blob</code>&#39;s bytes",id:"accessing-a-4dblobs-bytes",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually."}),"\n",(0,l.jsx)(n.p,{children:"A blob is loaded into memory in its entirety. A blob variable is held and exists in memory only. A blob field is loaded into memory from the disk, like the rest of the record to which it belongs."}),"\n",(0,l.jsxs)(n.p,{children:["Like other field types that can retain a large amount of data (such as the Picture field type), Blob fields are not duplicated in memory when you modify a record. Consequently, the result returned by the ",(0,l.jsx)(n.code,{children:"Old"})," and ",(0,l.jsx)(n.code,{children:"Modified"})," commands is not significant when applied to a Blob field."]}),"\n",(0,l.jsx)(n.h2,{id:"blob-types",children:"Blob Types"}),"\n",(0,l.jsx)(n.p,{children:"Using the 4D language, there are two ways to handle a blob:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"as a scalar value"}),": a blob can be stored in a Blob variable or field and altered."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:["as an object (",(0,l.jsx)(n.code,{children:"4D.Blob"}),")"]}),": a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," is a blob object. You can encapsulate a blob or part of it in a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," without altering the original blob. This method is called ",(0,l.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing",children:"boxing"}),". For more info on how to instantiate a ",(0,l.jsx)(n.code,{children:"4D.Blob"}),", see ",(0,l.jsx)(n.a,{href:"/docs/20/API/BlobClass",children:"Blob Class"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Each blob type has its advantages. Use the following table to determine which one suits your needs:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Blob"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"4D.Blob"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Alterable"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Shareable in objects and collections"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Passed by reference*"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Performance when accessing bytes"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"+"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Maximum size"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"2GB"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Memory"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["*Unlike the 4D commands designed to take a scalar blob as a parameter, passing a scalar blob to a method duplicates it in memory. When working with methods, using blob objects (",(0,l.jsx)(n.code,{children:"4D.Blob"}),") is more efficient, as they are passed by reference."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"By default, 4D sets the maximum size of scalar blobs to 2GB, but this size limit may be lower depending on your OS and how much space is available."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"You cannot use operators on blobs."}),"\n",(0,l.jsxs)(n.h2,{id:"checking-if-a-variable-holds-a-scalar-blob-or-a-4dblob",children:["Checking if a variable holds a scalar blob or a ",(0,l.jsx)(n.code,{children:"4D.Blob"})]}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1509.html",children:"Value type"})," command to determine if a value is of type Blob or Object.\nTo check that an object is a blob object (",(0,l.jsx)(n.code,{children:"4D.Blob"}),"), use ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1731.html",children:"OB instance of"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (object)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True\n"})}),"\n",(0,l.jsx)(n.h2,{id:"passing-blobs-as-parameters",children:"Passing blobs as parameters"}),"\n",(0,l.jsx)(n.p,{children:"Scalar blobs and blob objects can be passed as parameters to 4D commands or plug-in routines that expect blob parameters."}),"\n",(0,l.jsx)(n.h3,{id:"passing-blobs-and-blob-objects-to-4d-commands",children:"Passing blobs and blob objects to 4D commands"}),"\n",(0,l.jsxs)(n.p,{children:["You can pass a scalar blob or a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," to any 4D command that takes a blob as a parameter:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Some 4D commands alter the original blob, and thus do not support the ",(0,l.jsx)(n.code,{children:"4D.Blob"})," type:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page560.html",children:"DELETE FROM BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page559.html",children:"INSERT IN BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page548.html",children:"INTEGER TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page550.html",children:"LONGINT TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page552.html",children:"REAL TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page606.html",children:"SET BLOB SIZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page554.html",children:"TEXT TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page532.html",children:"VARIABLE TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page556.html",children:"LIST TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page782.html",children:"SOAP DECLARATION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page777.html",children:"WEB SERVICE SET PARAMETER"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"passing-blobs-and-blob-objects-to-methods",children:"Passing blobs and blob objects to methods"}),"\n",(0,l.jsxs)(n.p,{children:["You can pass blobs and blob objects (",(0,l.jsx)(n.code,{children:"4D.Blob"}),") to methods. Keep in mind that unlike blob objects, which are passed by reference, scalar blobs are duplicated in memory when passed to methods."]}),"\n",(0,l.jsx)(n.h3,{id:"passing-a-scalar-blob-by-reference-using-a-pointer",children:"Passing a scalar blob by reference using a pointer"}),"\n",(0,l.jsx)(n.p,{children:"To pass a scalar blob to your own methods without duplicating it in memory, define a pointer to the variable that stores it and pass the pointer as a parameter."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Declare a variable of type Blob\nvar $myBlobVar: Blob\n// Pass the blob as parameter to a 4D command\n SET BLOB SIZE($myBlobVar;1024*1024)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Pass the blob as parameter to an external routine\n $errCode:=Do Something With This blob($myBlobVar)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Pass the blob as a parameter to a method that returns a blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Pass a pointer to the blob as a parameter to your own method,\nCOMPUTE BLOB(->$myBlobVar)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note for Plug-in developers:"})," A BLOB parameter is declared as \u201c&O\u201d (the letter \u201cO\u201d, not the digit \u201c0\u201d)."]}),"\n",(0,l.jsx)(n.h2,{id:"assigning-a-blob-variable-to-another",children:"Assigning a blob variable to another"}),"\n",(0,l.jsx)(n.p,{children:"You can assign a Blob variable to another:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Declare two variables of type Blob\n var $vBlobA; $vBlobB : Blob\n// Set the size of the first blob to 10K\n SET BLOB SIZE($vBlobA;10*1024)\n// Assign the first blob to the second one\n $vBlobB:=$vBlobA\n"})}),"\n",(0,l.jsx)(n.h2,{id:"automatic-conversion-of-blob-type",children:"Automatic conversion of blob type"}),"\n",(0,l.jsx)(n.p,{children:"4D automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'// Create a variable of type Blob and an object variable\nvar $myBlob: Blob\nvar $myObject : Object\n\n// Assign that blob to a property of $myObject named "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// The blob stored in $myBlob is automatically converted to a 4D.Blob\n$type:= OB Instance of($myObject.blob; 4D.Blob)  //True\n\n// Conversion from 4D.Blob to Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["When converting a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," to a scalar blob, if the size of the ",(0,l.jsx)(n.code,{children:"4D.Blob"})," exceeds the maximum size for scalar blobs, the resulting scalar blob is empty.\nFor example, when the maximum size for scalar blobs is 2GB, if you convert a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," of 2.5GB to a scalar blob, you obtain an empty blob."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"modifying-a-scalar-blob",children:"Modifying a scalar blob"}),"\n",(0,l.jsx)(n.p,{children:"Unlike blob objects, scalar blobs can be altered. For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"individually-accessing-bytes-in-a-blob",children:"Individually accessing bytes in a blob"}),"\n",(0,l.jsx)(n.h4,{id:"accessing-a-scalar-blobs-bytes",children:"Accessing a scalar blob's bytes"}),"\n",(0,l.jsxs)(n.p,{children:["You can access individual bytes of a scalar blob using curly brackets ",(0,l.jsx)(n.code,{children:"{}"}),". Within a blob, bytes are numbered from 0 to N-1, where N is the size of the BLOB:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"  // Declare a variable of type Blob\n var $vBlob : Blob\n  // Set the size of the blob to 256 bytes\n SET BLOB SIZE($vBlob;256)\n  // The following code loops through the blob to set each byte to zero\n For(vByte;0;BLOB size($vBlob)-1)\n    $vBlob{vByte}:=0\n End for\n"})}),"\n",(0,l.jsx)(n.p,{children:"Since you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or field."}),"\n",(0,l.jsxs)(n.h4,{id:"accessing-a-4dblobs-bytes",children:["Accessing a ",(0,l.jsx)(n.code,{children:"4D.Blob"}),"'s bytes"]}),"\n",(0,l.jsxs)(n.p,{children:["Use square brackets ",(0,l.jsx)(n.code,{children:"[]"})," to directly access a specific byte in a ",(0,l.jsx)(n.code,{children:"4D.Blob"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Since a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," cannot be altered, you can read the bytes of a ",(0,l.jsx)(n.code,{children:"4D.Blob"})," using this syntax, but not modify them."]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>i});var l=o(296540);const s={},a=l.createContext(s);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);