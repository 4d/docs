"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43270"],{972646:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/json-resolve-pointers","title":"JSON Resolve pointers","description":"JSON Resolve pointers ( object {; options} ) : Object","source":"@site/versioned_docs/version-20-R7/commands-legacy/json-resolve-pointers.md","sourceDirName":"commands-legacy","slug":"/commands/json-resolve-pointers","permalink":"/docs/commands/json-resolve-pointers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-resolve-pointers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-resolve-pointers","title":"JSON Resolve pointers","slug":"/commands/json-resolve-pointers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON PARSE ARRAY","permalink":"/docs/commands/json-parse-array"},"next":{"title":"JSON Stringify","permalink":"/docs/commands/json-stringify"}}'),r=s("785893"),i=s("250065");let o={id:"json-resolve-pointers",title:"JSON Resolve pointers",slug:"/commands/json-resolve-pointers",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Defining JSON Pointers",id:"defining-json-pointers",level:4},{value:"Recursivity and path resolution",id:"recursivity-and-path-resolution",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Resolve pointers"})," ( ",(0,r.jsx)(n.em,{children:"object"})," {; ",(0,r.jsx)(n.em,{children:"options"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object containing JSON pointers to resolve"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Object with JSON pointers resolved (only if result is an object)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Options for pointer resolution"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Object containing the result of the processing"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"JSON Resolve pointers"})," command resolves all the JSON pointers found in the ",(0,r.jsx)(n.em,{children:"object"}),", with regards to ",(0,r.jsx)(n.em,{children:"options"})," settings (if any)."]}),"\n",(0,r.jsx)(n.p,{children:"JSON pointers are particularily useful to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"embed some part of an external JSON document or reuse a part of a JSON document in other places in the same JSON document, in order to factorize information,"}),"\n",(0,r.jsx)(n.li,{children:"express a cyclic structure in JSON,"}),"\n",(0,r.jsx)(n.li,{children:"define a template object containing default properties stored in JSON."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Pass in the ",(0,r.jsx)(n.em,{children:"object"})," parameter an object containing JSON pointers to be resolved (for information on JSON pointer syntax, please refer to the ",(0,r.jsx)(n.em,{children:"Defining JSON Pointers"})," paragraph below)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The source ",(0,r.jsx)(n.em,{children:"object"})," will be updated with the result of pointer resolution after the command is executed (except if the result is not an object, see below). If you want to keep an original version of ",(0,r.jsx)(n.em,{children:"object"}),", you may consider using the ",(0,r.jsx)(n.a,{href:"/docs/commands/ob-copy",children:"OB Copy"})," beforehand."]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally, you can pass in ",(0,r.jsx)(n.em,{children:"options"})," an object containing specific properties to be used when resolving pointers. The following properties are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Value type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rootFolder"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:["Absolute path (using standard 4D syntax) to the folder to be used to resolve relative pointers in ",(0,r.jsx)(n.em,{children:"object"}),". Default is the database Resources folder."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"merge"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["Merge objects with pointer objects (true) instead of replacing them (false). Default is false ",(0,r.jsx)(n.img,{src:s(121972).Z+"",width:"769",height:"322"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"After the command is executed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["if the result of pointer resolution is an object, ",(0,r.jsx)(n.em,{children:"object"})," is updated and contains the resulting object."]}),"\n",(0,r.jsxs)(n.li,{children:["if the result of pointer resolution is a scalar value (i.e. a text, a number...), ",(0,r.jsx)(n.em,{children:"object"}),' is left untouched and the resulting value is returned in the "value" property of the function result.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In any cases, the command returns an object containing the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Value type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Any"}),(0,r.jsxs)(n.td,{children:["Result of the command processing on ",(0,r.jsx)(n.em,{children:"object"}),". If the result is an object, it is equal to output ",(0,r.jsx)(n.em,{children:"object"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"true if all pointers have been resolved successfully"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Collection of errors if any"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].code"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"error code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"error message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].pointerURI"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"pointer value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].referredPath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"document fullpath"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"defining-json-pointers",children:"Defining JSON Pointers"}),"\n",(0,r.jsxs)(n.p,{children:["JSON Pointer is a standard that defines a string syntax which can be used to access a particular field or key value in the entire JSON document. The standard has been described in the ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"RFC 6901"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"A JSON pointer is, strictly speaking, a string composed of parts separated by '/'. A JSON pointer is usually found in a URI that specifies the document into which the pointer will be resolved. The fragment character \"#' is used in the URI to specify the JSON pointer. By convention, a URI containing a JSON pointer can be found in a JSON object property that must be named \"$ref\"."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0 "$ref":<path>#<json_pointer>\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' 4D does not support the "-" character as reference to nonexistent arrray elements.']}),"\n",(0,r.jsx)(n.h5,{id:"recursivity-and-path-resolution",children:"Recursivity and path resolution"}),"\n",(0,r.jsx)(n.p,{children:"JSON pointers are resolved recursively, which means that if a resolved pointer also contains pointers, they are resolved recursively and so on, until all pointers are resolved. In this context, all file paths found in JSON pointer URIs can be relative or absolute. They must use '/' as path delimiter and are resolved the following way:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A relative path must not start with '/'. It is resolved relatively to the JSON document where the path string has been found,"}),"\n",(0,r.jsxs)(n.li,{children:["An absolute path starts with '/'. Only ",(0,r.jsx)(n.a,{href:"https://developer.4d.com/docs/Concepts/paths/#filesystem-pathnames",children:"filesystem pathnames"}),' are accepted as absolute paths. For example, "/RESOURCES/templates/myfile.json" points to the file "myfile.json" located in the current database resources folder.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The name resolution is case sensitive."}),"\n",(0,r.jsx)(n.li,{children:'4D does not resolve a path to a json file located over the network (starting with "http/https").'}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"This basic example illustrates how a JSON pointer can be set and replaced in an object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// create an object with some value\n\xa0var $o : Object\n\xa0$o:=New object("value";42)\n\xa0\n\xa0\xa0// create the JSON pointer object\n\xa0var $ref : Object\n\xa0$ref:=New object("$ref";"#/value")\n\xa0\n\xa0\xa0// add the JSON pointer object as property\n\xa0$o.myJSONPointer:=$ref\n\xa0\n\xa0\xa0// resolve the whole and check that the pointer has been resolved\n\xa0var $result : Object\n\xa0$options:=New object("rootFolder";Get 4D folder(Current resources folder);"merge";True)\n\xa0$result:=JSON Resolve pointers($o;$options)\n\xa0If($result.success)\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.value))\n\xa0\xa0//{"value":42,"myJSONPointer":42}\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.errors))\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:'You want to reuse the "billingAddress" as the "shippingAddress" in the following JSON object (named $oMyConfig):'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0 "billingAddress": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0 },\n\xa0\xa0\xa0 "shippingAddress": { "$ref": "#/billingAddress" }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$oResult:=JSON Resolve pointers($oMyConfig)\n"})}),"\n",(0,r.jsx)(n.p,{children:"... the following object is returned:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "billingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "shippingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:'This example illustrates the effect of the "merge" option. You want to edit an user\'s rights based upon a default file.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "rights": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "$ref": "defaultSettings.json#/defaultRights",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"defaultSettings.json"})," file contains:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "defaultRights":\n\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you execute:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";False)\xa0//replace contents\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["... the resulting value is exactly the ",(0,r.jsx)(n.em,{children:"defaultSettings.json"})," file contents:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you execute:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";True)\xa0//merge both contents\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,r.jsx)(n.p,{children:"... the resulting value is a modified version of the original object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1478"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},121972:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3516702.en-cb064ec14e9d4dfe520c789afa171666.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);