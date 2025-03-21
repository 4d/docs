"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4630"],{849208:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/ob-get","title":"OB Get","description":"OB Get ( object ; property {; type} ) : Expression","source":"@site/versioned_docs/version-20-R7/commands-legacy/ob-get.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get","permalink":"/docs/20-R7/commands/ob-get","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-get","title":"OB Get","slug":"/commands/ob-get","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Entries","permalink":"/docs/20-R7/commands/ob-entries"},"next":{"title":"OB GET ARRAY","permalink":"/docs/20-R7/commands/ob-get-array"}}'),s=t("785893"),i=t("250065");let a={id:"ob-get",title:"OB Get",slug:"/commands/ob-get",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"Example 5",id:"example-5",level:2},{value:"Example 6",id:"example-6",level:2},{value:"Example 7",id:"example-7",level:2},{value:"Example 8",id:"example-8",level:2},{value:"Example 9",id:"example-9",level:2},{value:"Example 10",id:"example-10",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB Get"})," ( ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"property"})," {; ",(0,s.jsx)(n.em,{children:"type"}),"} ) : Expression"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Object, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Structured object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"property"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of property to read"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type to which to convert the value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Expression"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Current value of property"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OB Get"})," command returns the current value of the ",(0,s.jsx)(n.em,{children:"property"})," of the ",(0,s.jsx)(n.em,{children:"object"}),", optionally converted into the ",(0,s.jsx)(n.em,{children:"type"})," specified.can be an object varialble or a 4D object field."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command supports attribute definitions in 4D Write Pro ",(0,s.jsx)(n.em,{children:"objects"}),", like the ",(0,s.jsx)(n.em,{children:"WP GET ATTRIBUTES"})," command (see example 9)."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"property"})," parameter, pass the label of the property to be read. Note that the ",(0,s.jsx)(n.em,{children:"property"})," parameter is case sensitive."]}),"\n",(0,s.jsxs)(n.p,{children:['By default, 4D returns the value of the property in its original type. You can "force" the typing of the value returned using the optional ',(0,s.jsx)(n.em,{children:"type"})," parameter. To do this, in ",(0,s.jsx)(n.em,{children:"type"})," you pass one of the following constants found in the ",(0,s.jsx)(n.em,{children:"Field and Variable Types"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is Boolean"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is collection"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is date"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is longint"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is null"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"255"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is object"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"38"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is picture"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is pointer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"23"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is real"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is text"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is time"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The command returns the value of the ",(0,s.jsx)(n.em,{children:"property"}),". Several types of data are supported. Note that:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a pointer is returned as such; it can be evaluated using the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/json-stringify",children:"JSON Stringify"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:['depending on your database date settings, dates in object attributes are stored either with date type or text type (starting with 4D v16 R6). For more information, please refer to the "Use date type instead of ISO date format in objects" option in the ',(0,s.jsx)(n.em,{children:"Compatibility page"}),". In order for ",(0,s.jsx)(n.strong,{children:"OB Get"})," to correctly interpret a date stored as a text, you need to use the Is date constant (see example 5)."]}),"\n",(0,s.jsx)(n.li,{children:'in real values, the decimal separator is always a period "."'}),"\n",(0,s.jsx)(n.li,{children:"times are returned as a number. Times are stored in seconds by default in objects (see compatibility note below). Use the Is time constant to get a 4D formatted time value."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Compatibility Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In versions prior to v17, times were stored in milliseconds inside objects. For compatibility needs, this previous behavior can be restored using the Times inside objects selector of the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command. Whatever the setting, the result will be correct when the Is time constant is passed."]}),"\n",(0,s.jsxs)(n.li,{children:["(",(0,s.jsx)(n.em,{children:"4D Write Pro"}),") In versions prior to v16 R6, when ",(0,s.jsx)(n.em,{children:"property"})," defined a 4D Write Pro image attribute (such as wk image), a text value containing a data URI was always returned. Starting with 4D v16 R6, 4D Write Pro image attributes are always returned as picture values. You must use a specific ",(0,s.jsx)(n.em,{children:"property"})," like wk image url to get a data URI."]}),"\n",(0,s.jsxs)(n.li,{children:["In versions prior to v16 R4, when ",(0,s.jsx)(n.em,{children:"property"})," contains a null value and if the ",(0,s.jsx)(n.em,{children:"type"}),' parameter is not used, 4D returns an empty string. For 4D v16 R4 and higher versions, the Is null constant is returned in this case. To preserve compatibilty, this change takes effect only if the "Use object notation to access objects properties (Unicode required)" option is enabled in the database (see the ',(0,s.jsx)(n.em,{children:"Compatibility page"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Retrieving a text type value:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0var $FirstName : Text\n\xa0OB SET($ref;"FirstName";"Harry")\n\xa0$FirstName:=OB Get($ref;"FirstName")\xa0// $FirstName = "Harry" (text)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Retrieving a real number value converted into a longint:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref ;"age";42)\n\xa0$age:=OB Get($ref ;"age")\xa0// $age is a real number (default)\n\xa0$age:=OB Get($ref ;"age";Is longint)\xa0// $age is a longint\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"Retrieving the values of an object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref1;$ref2 : Object\n\xa0OB SET($ref1;"LastName";"Smith")\xa0// $ref1={"LastName":"Smith"}\n\xa0OB SET($ref2;"son";$ref1)\xa0// $ref2={"son":{"LastName":"Smith"}}\n\xa0$son:=OB Get($ref2;"son")\xa0// $son={"LastName":"john"} (object)\n\xa0$sonsName:=OB Get($son ;"name")\xa0// $sonsName="john" (text)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"Modifying the age of an employee twice:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_john;$ref_jim : Object\n\xa0OB SET($ref_john;"name";"John";"age";35)\n\xa0OB SET($ref_jim;"name";"Jim";"age";40)\n\xa0APPEND TO ARRAY($myArray;$ref_john)\xa0// we create an object array\n\xa0APPEND TO ARRAY($myArray;$ref_jim)\n\xa0\xa0// we change the age for John from 35 to 25\n\xa0OB SET($myArray{1};"age";25)\n\xa0\xa0// We replace the age of "John" in the array\n\xa0For($i;1;Size of array($myArray))\n\xa0\xa0\xa0\xa0If(OB Get($myArray{$i};"name")="John")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OB SET($myArray{$i};"age";36)\xa0// instead of 25\n\xa0\xa0// $ref_john={"name":"John","age":36}\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"When retrieving a date, the resulting value depends on the current database date settings."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'If the "Use date type instead of ISO date format in objects" option is not checked:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0var $birthday : Date\n\xa0var $birthdayString : Text\n\xa0OB SET($object;"Birthday";!30/01/2010!)\n\xa0$birthday:=OB Get($object;"Birthday";Is date)\xa0//30/01/10\n\xa0$birthdayString:=OB Get($object;"Birthday")\xa0//"2010-01-29T23:00:00.000Z" (Paris time zone)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'If the "Use date type instead of ISO date format in objects" option is checked:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0var $birthday : Date\n\xa0OB SET($object;"Birthday";!30/01/2010!)\n\xa0$birthday:=OB Get($object;"Birthday")\xa0//30/01/10, no need for Is date\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For more information on this setting, please refer to the ",(0,s.jsx)(n.em,{children:"Compatibility page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example-6",children:"Example 6"}),"\n",(0,s.jsx)(n.p,{children:"Using nested objects:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref1;$child;$children : Object\n\xa0var $childName : Text\n\xa0OB SET($ref1;"firstname";"John";"lastname";"Monroe")\n\xa0\xa0//{"firstname":"john","lastname";"Monroe"}\n\xa0OB SET($children;"children";$ref1)\n\xa0$child:=OB Get($children;"children")\n\xa0\xa0//$son = {"firstname":"John","lastname":"Monroe"} (object)\n\xa0$childName:=OB Get($child;"lastname")\n\xa0\xa0//$childName = "Monroe" (text)\n\xa0\xa0//or\n\xa0$childName:=OB Get(OB Get($children;"children");"lastname")\n\xa0\xa0// $childName = "Monroe" (text)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-7",children:"Example 7"}),"\n",(0,s.jsx)(n.p,{children:"Recovery in 4D of a time stored in an object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj_o : Object\n\xa0var $set_h;$get_h : Time\n\xa0\n\xa0$set_h:=?01:00:00?+1\n\xa0OB SET($obj_o;"myHour";$set_h)\n\xa0\xa0// $obj_o = {"myHour":3601}\n\xa0\xa0// The time is stored in seconds\n\xa0$get_h:=OB Get($obj_o;"myHour";Is time)\n\xa0\xa0// $get_h = ?01:00:01?\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-8",children:"Example 8"}),"\n",(0,s.jsx)(n.p,{children:"Examples of working with 4D object fields:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Define a value\n\xa0OB SET([People]Identity_OB;"First name";$firstName)\n\xa0OB SET([People]Identity_OB;"Last name";$lastName)\n\xa0\n\xa0\xa0// Get a value\n\xa0$firstName:=OB Get([People]Identity_OB;"First name")\n\xa0$lastName:=OB Get([People]Identity_OB;"Last name")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-9",children:"Example 9"}),"\n",(0,s.jsx)(n.p,{children:"In the method of a form containing a 4D Write Pro area, you can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Validate)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can also read custom attributes of the documents:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-10",children:"Example 10"}),"\n",(0,s.jsx)(n.p,{children:"You want to know the size of a picture stored in an object attribute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vSize : Integer\n\xa0$vSize:=Picture size(OB Get($object;"photo";Is picture))\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you assign the result of the command to a picture variable, the Is picture constant is not necessary. Example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0$vPict:=OB Get($object;"photo")\xa0//"is picture" is useless in this case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Field and Variable Types"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/ob-copy",children:"OB Copy"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/ob-set",children:"OB SET"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1224"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);