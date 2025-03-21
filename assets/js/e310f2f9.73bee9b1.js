"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49624"],{873590:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/form-get-objects","title":"FORM GET OBJECTS","description":"FORM GET OBJECTS ( objectsArray {; variablesArray {; pagesArray}} {; formPageOption | *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/form-get-objects.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-objects","permalink":"/docs/commands/form-get-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-objects.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-get-objects","title":"FORM GET OBJECTS","slug":"/commands/form-get-objects","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET HORIZONTAL RESIZING","permalink":"/docs/commands/form-get-horizontal-resizing"},"next":{"title":"FORM GET PROPERTIES","permalink":"/docs/commands/form-get-properties"}}'),s=r("785893"),a=r("250065");let o={id:"form-get-objects",title:"FORM GET OBJECTS",slug:"/commands/form-get-objects",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"Example 5",id:"example-5",level:2},{value:"Example 6",id:"example-6",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM GET OBJECTS"})," ( ",(0,s.jsx)(n.em,{children:"objectsArray"})," {; ",(0,s.jsx)(n.em,{children:"variablesArray"})," {; ",(0,s.jsx)(n.em,{children:"pagesArray"}),"}} {; formPageOption | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectsArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Name of form objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"variablesArray"}),(0,s.jsx)(n.td,{children:"Pointer array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Pointers to variables or fields associated with objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pagesArray"}),(0,s.jsx)(n.td,{children:"Array integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Page number of each object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formPageOption | *"}),(0,s.jsx)(n.td,{children:"Integer, Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["1=Form current page, 2=Form all pages, 4=Form inherited",(0,s.jsx)(n.br,{}),"If * passed (obsolete) = current page with inherited objects"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The FORM GET OBJECTS command returns the list of all objects present in the current form in the form of (an) array(s). This list can be restricted to the current form page and can exclude objects of inherited forms. The command can be used with both input and output forms."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The command does not include list box parts. To parse a form for the list box objects, ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-objects",children:"LISTBOX GET OBJECTS"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"})," should be used (see example below for a combination of ",(0,s.jsx)(n.a,{href:"/docs/commands/form-get-objects",children:"FORM GET OBJECTS"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/object-get-type",children:"OBJECT Get type"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-objects",children:"LISTBOX GET OBJECTS"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"If an array passed as a parameter is not previously declared, the command creates it and automatically sets its size. However, in the interest of compiling the application, we recommend that you explicitly declare each array."}),"\n",(0,s.jsxs)(n.p,{children:["Pass the name of the string array that will contain object names (each object name is unique within a form) in ",(0,s.jsx)(n.em,{children:"objectsArray"}),". The order in which objects appear in the array is not significant."]}),"\n",(0,s.jsx)(n.p,{children:"The other arrays optionally filled by the command are synchronized with the first array."}),"\n",(0,s.jsxs)(n.p,{children:["Pass the name of the pointer array that already contains pointers to variables or fields associated with objects in the optional ",(0,s.jsx)(n.em,{children:"variablesArray"})," parameter. If an object does not have an associated variable, the pointer ",(0,s.jsx)(n.a,{href:"/docs/commands/is-nil-pointer",children:"Is nil pointer"})," is returned. If there is a \u201Csubform\u201D type object, a pointer to the table of the subform is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["The third array (optional), ",(0,s.jsx)(n.em,{children:"pagesArray"}),", is filled with the form page numbers. Each line of this array contains the page number of the corresponding object."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"*"})," parameter allows you to reduce the list of objects returned to the current page of the form. When this parameter is passed, only objects of the current page, page 0 and inherited pages are returned by the command. In other words, all the objects present in the current page of the form (visible or not) are processed by the command."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"formPageOption"})," parameter allows you to specify the form part(s) from where you want to get objects. By default, if the ",(0,s.jsx)(n.em,{children:"formPageOption"})," parameter is omitted (as well as the ",(0,s.jsx)(n.em,{children:"*"})," parameter), objects from all pages, including inherited objects, are returned. To reduce the scope of the command, you can pass a value in ",(0,s.jsx)(n.em,{children:"formPageOption"}),'. You can pass one (or a combination) of the following constants, found in the "',(0,s.jsx)(n.em,{children:"Form Objects (Access)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form all pages"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Returns all objects of all the pages, excluding inherited objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form current page"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Returns all objects of the current page, including page 0 but excluding inherited objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form inherited"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Returns inherited objects only"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility note:"})," Passing the ",(0,s.jsx)(n.em,{children:"*"})," parameter is equivalent to passing Form current page+Form inherited. The syntax using the ",(0,s.jsx)(n.em,{children:"*"})," parameter is now deprecated and should no longer be used."]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to get information on all pages including objects from the inherited form (if any):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//open form\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//loaded form\n\xa0FORM LOAD([Table1];"MyForm")\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to get information on the current page only, with page 0 of the loaded form and inherited form objects (if any):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD("MyForm")\n\xa0FORM GOTO PAGE(2)\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form current page+Form inherited)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"You want to get information on all objects in the inherited form (if any). If there is no inherited form, arrays will be returned empty."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD("MyForm")\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form inherited)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"You want to get information on page 4 objects, including page 0 objects, but without inherited form objects (if any):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD([Table1];"MyForm")\n\xa0FORM GOTO PAGE(4)\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form current page)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"You want to get information on objects on all pages, but without inherited form objects (if any):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD([Table1];"MyForm")\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-6",children:"Example 6"}),"\n",(0,s.jsx)(n.p,{children:"You want to load a form and get a list of all the objects of list boxes that it contains."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD("MyForm")\n\xa0ARRAY TEXT(arrObjects;0)\n\xa0FORM GET OBJECTS(arrObjects)\n\xa0ARRAY LONGINT(ar_type;Size of array(arrObjects))\n\xa0For($i;1;Size of array(arrObjects))\n\xa0\xa0\xa0\xa0ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})\n\xa0\xa0\xa0\xa0If(ar_type{$i}=Object type listbox)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrLBObjects;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Form Objects (Access)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Objects (Forms)"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"898"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var t=r(667294);let s={},a=t.createContext(s);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);