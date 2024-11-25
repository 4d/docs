"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73913"],{896071:function(e,n,d){d.r(n),d.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>t});var l=JSON.parse('{"id":"Concepts/null-undefined","title":"Null and Undefined","description":"Null and Undefined are data types that handle cases where the value of an expression is not known.","source":"@site/versioned_docs/version-20-R7/Concepts/dt_null_undefined.md","sourceDirName":"Concepts","slug":"/Concepts/null-undefined","permalink":"/docs/Concepts/null-undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"null-undefined","title":"Null and Undefined"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/Concepts/date"},"next":{"title":"Number (Real, Integer)","permalink":"/docs/Concepts/number"}}'),s=d("785893"),r=d("250065");let t={id:"null-undefined",title:"Null and Undefined"},i=void 0,a={},c=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Null operators",id:"null-operators",level:2},{value:"Undefined operators",id:"undefined-operators",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Null and Undefined are data types that handle cases where the value of an expression is not known."}),"\n",(0,s.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,s.jsxs)(n.p,{children:["Null is a special data type with only one possible value: ",(0,s.jsx)(n.strong,{children:"null"}),". This value is returned by an expression that does not contain any value. Trying to read a property of a ",(0,s.jsx)(n.strong,{children:"null"})," value returns an error."]}),"\n",(0,s.jsxs)(n.p,{children:["In the 4D language and for object field attributes, null values are managed through the ",(0,s.jsx)(n.code,{children:"Null"})," function. This function can be used with the following expressions for setting or comparing the null value:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"object attributes"}),"\n",(0,s.jsx)(n.li,{children:"collection elements"}),"\n",(0,s.jsxs)(n.li,{children:["variables of the object, collection, pointer, picture, or variant type (see also ",(0,s.jsx)(n.a,{href:"/docs/Concepts/data-types#null-as-default-value",children:"Null as default value"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,s.jsxs)(n.p,{children:["Undefined is not actually a data type. It denotes a variable that has not yet been defined. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns ",(0,s.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A variant variable has ",(0,s.jsx)(n.strong,{children:"undefined"})," as ",(0,s.jsx)(n.a,{href:"/docs/Concepts/data-types#default-values",children:"default value"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A field cannot be undefined (the ",(0,s.jsx)(n.code,{children:"Undefined"})," command always returns False for a field)."]}),"\n",(0,s.jsx)(n.p,{children:"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,s.jsx)(n.code,{children:"CLEAR VARIABLE"})})," with them:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Object, collection, pointer: Null"}),"\n",(0,s.jsx)(n.li,{children:"Picture: Empty picture"}),"\n",(0,s.jsx)(n.li,{children:"Boolean: False"}),"\n",(0,s.jsx)(n.li,{children:'String: ""'}),"\n",(0,s.jsx)(n.li,{children:"Number: 0"}),"\n",(0,s.jsx)(n.li,{children:'Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""'}),"\n",(0,s.jsx)(n.li,{children:"Time: 0 (number of ms)"}),"\n",(0,s.jsx)(n.li,{children:"Undefined, Null: no change"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assigning an undefined value to a non existing object property does nothing."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n     \n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: ",(0,s.jsx)(n.code,{children:"String"}),", ",(0,s.jsx)(n.code,{children:"Num"}),", ",(0,s.jsx)(n.code,{children:"Date"}),", ",(0,s.jsx)(n.code,{children:"Time"}),", ",(0,s.jsx)(n.code,{children:"Bool"}),". These commands return an empty value of the specified type when the expression evaluates to undefined. For example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined\n  //to avoid errors in the code\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"null-operators",children:"Null operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Equality"}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"="})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"="})," b.nullProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"="})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"="})," ",(0,s.jsx)(n.em,{children:"scalar value"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"="})," 42"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inequality"}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"#"})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"#"})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"#"})," ",(0,s.jsx)(n.em,{children:"scalar value"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"#"})," 42"]}),(0,s.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"scalar values"})," are values of type string, Date, Time, Boolean, number, or Blob. When declared, their ",(0,s.jsx)(n.a,{href:"/docs/Concepts/data-types#default-values",children:"default value"})," is neither undefined nor null. Other types (Pointer, Picture, Object, Collection) have undefined or null default value. Ex:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Comparisons with Greater than (",(0,s.jsx)(n.code,{children:">"}),"), Less than (",(0,s.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,s.jsx)(n.code,{children:">="}),"), and Less than or equal to (",(0,s.jsx)(n.code,{children:"<="}),") operators are not supported with Null values and return an error."]})}),"\n",(0,s.jsx)(n.h2,{id:"undefined-operators",children:"Undefined operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Equality"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"="})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"="})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"="})," c.nullProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"="})," ",(0,s.jsx)(n.em,{children:"other values"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"="})," 42"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inequality"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"#"})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"#"})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"#"})," ",(0,s.jsx)(n.em,{children:"other values"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"#"})," 42"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:">"})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:">"}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"<"})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"<"}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than or equal to"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:">="})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:">="}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than or equal to"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"<="})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"<="}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"other values"})," are expressions of any type with a value neither Undefined nor Null."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Comparisons of Undefined values with Pointer, Picture, Boolean, Blob, Object, Collection, Undefined or Null values using Greater than (",(0,s.jsx)(n.code,{children:">"}),"), Less than (",(0,s.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,s.jsx)(n.code,{children:">="}),"), and Less than or equal to (",(0,s.jsx)(n.code,{children:"<="}),") operators are not supported and return an error."]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Here are the different results of the ",(0,s.jsx)(n.code,{children:"Undefined"})," command as well as the ",(0,s.jsx)(n.code,{children:"Null"})," command with object properties, depending on the context:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n'})}),"\n",(0,s.jsx)(n.p,{children:"Examples of comparison results with undefined and null values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return t}});var l=d(667294);let s={},r=l.createContext(s);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);