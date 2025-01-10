"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95781"],{273364:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/ob-set","title":"OB SET","description":"OB SET ( object ; property ; value {; property2 ; value2 ; ... ; propertyN ; valueN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/ob-set.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set","permalink":"/docs/commands/ob-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set","title":"OB SET","slug":"/commands/ob-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB REMOVE","permalink":"/docs/commands/ob-remove"},"next":{"title":"OB SET ARRAY","permalink":"/docs/commands/ob-set-array"}}'),s=t("785893"),r=t("250065");let i={id:"ob-set",title:"OB SET",slug:"/commands/ob-set",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Example 7",id:"example-7",level:4},{value:"Example 8",id:"example-8",level:4},{value:"Example 9",id:"example-9",level:4},{value:"Example 10",id:"example-10",level:4},{value:"Example 11",id:"example-11",level:4},{value:"Example 12",id:"example-12",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB SET"})," ( ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"property"})," ; ",(0,s.jsx)(n.em,{children:"value"})," {; ",(0,s.jsx)(n.em,{children:"property2"})," ; ",(0,s.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"propertyN"})," ; ",(0,s.jsx)(n.em,{children:"valueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Object, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Structured object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"property"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of property to set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Expression"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"New value of property"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OB SET"})," command creates or modifies one or more ",(0,s.jsx)(n.em,{children:"property"}),"/",(0,s.jsx)(n.em,{children:"value"})," pairs in the language object designated by the ",(0,s.jsx)(n.em,{children:"object"})," parameter.must be an object variable or designate a 4D object field."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"property"})," parameter, pass the label of the property to be created or modified. If the property already exists in ",(0,s.jsx)(n.em,{children:"object"}),", its value is updated. If it does not exist, it is created."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.em,{children:"property"})," parameter is case sensitive."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"value"})," parameter, pass the value you want to set for the property. Several data types are supported. Note that:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["if you pass a pointer, it is kept as is; it is evaluated using the ",(0,s.jsx)(n.a,{href:"/docs/commands/json-stringify",children:"JSON Stringify"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:['if you pass a date, it will be stored with date type or as text in ISO format depending on your current database date settings. For more information, please refer to the "Use date type instead of ISO date format in objects" option in the ',(0,s.jsx)(n.em,{children:"Compatibility page"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["if you pass a time, it is stored as a number of seconds (Real) in ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"if you pass a language object or a collection, the command uses a reference and not a copy. Any modification applied to the object or collection will be reported to all references."}),"\n",(0,s.jsxs)(n.li,{children:["starting with 4D v16 R4, you can pass a picture of any supported type (see ",(0,s.jsx)(n.em,{children:"Native Formats Supported"})," )."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Creating an object and adding a text type property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"FirstName";"John";"LastName";"Smith")\n\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Creating an object and adding a Boolean type property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"LastName";"smith";"age";42;"client";True)\n\xa0\xa0// $Object = {"LastName":"smith","age":42,"client":true}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"Modifying a property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n\xa0OB SET($Object ;"FirstName";"Paul")\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"Adding a property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n\xa0OB SET($Object ;"department";"Accounting")\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"Renaming a property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"LastName";"James";"age";35)\n\xa0\xa0// $Object = {"LastName":"James","age":35}\n\xa0OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))\n\xa0\xa0// $Object = {"FirstName":""James","nom":"James","age":35}\n\xa0OB REMOVE($Object ;"LastName")\n\xa0\xa0// $Object = {"FirstName":""James","age":35}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,s.jsx)(n.p,{children:"Using a pointer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith"}\n\xa0var $LastName : Text\n\xa0OB SET($Object ;"LastName";->$LastName)\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"->$LastName"}\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0// $JsonString="{"FirstName":"Paul","LastName":""}\n\xa0$LastName:="Wesson"\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0// $JsonString="{"FirstName":"Paul","LastName":"Wesson"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-7",children:"Example 7"}),"\n",(0,s.jsx)(n.p,{children:"Using an object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_smith : Object\n\xa0OB SET($ref_smith ;"name";"Smith")\n\xa0var $ref_emp : Object\n\xa0OB SET($ref_emp ;"employee";$ref_smith)\n\xa0$Json_string :=JSON Stringify($ref_emp)\n\xa0\xa0// $ref_emp = {"employee":{"name":"Smith"}} (object)\n\xa0\xa0// $Json_string = "{"employee":{"name":"Smith"}}" (string)\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can also change a value on the fly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref_smith ;"name";"Smyth")\n\xa0\xa0// $ref_smith = {"employee":{"name":"Smyth"}}\n\xa0$string:=JSON Stringify($ref_emp)\n\xa0\xa0// $string = "{"employee":{"name":"Smyth"}}"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-8",children:"Example 8"}),"\n",(0,s.jsx)(n.p,{children:"If you have defined the [Rect]Desc field as an object field, you can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Rect])\n\xa0[Rect]Name:="Blue square"\n\xa0OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")\n\xa0SAVE RECORD([Rect])\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-9",children:"Example 9"}),"\n",(0,s.jsxs)(n.p,{children:["You want to export data in JSON that contains a 4D date that you want to be converted into a string without time zone information. Note that conversion occurs when the date is saved in the object, so you must call the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command before calling ",(0,s.jsx)(n.a,{href:"/docs/commands/ob-set",children:"OB SET"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$vDateSetting:=Get database parameter(Dates inside objects)\xa0//save the current setting\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0OB SET($o ;"myDate";Current date)\xa0// JSON conversion\n\xa0$json:=JSON Stringify($o)\n\xa0SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-10",children:"Example 10"}),"\n",(0,s.jsx)(n.p,{children:"In the method of a form containing a 4D Write Pro area, you can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Validate)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can also read custom attributes of the documents:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-11",children:"Example 11"}),"\n",(0,s.jsx)(n.p,{children:"You want to set a collection as a property value. You can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $myCol : Collection\n\xa0\n\xa0$person:=OB New\n\xa0$myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)\n\xa0OB SET($person;"Name";"Jones";"Children";$myCol)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-12",children:"Example 12"}),"\n",(0,s.jsx)(n.p,{children:"You want to store a picture in an object field. You can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0READ PICTURE FILE("photo.jpg";$vPict)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OB SET([Emp]Children;"photo";$vPict)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/ob-get",children:"OB Get"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/ob-remove",children:"OB REMOVE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/ob-set-array",children:"OB SET ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/ob-set-null",children:"OB SET NULL"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1220"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);