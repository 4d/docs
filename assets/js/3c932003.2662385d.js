"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16151"],{640654:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>h});var r=JSON.parse('{"id":"commands-legacy/json-validate","title":"JSON Validate","description":"JSON Validate ( vJson ; vSchema ) : Object","source":"@site/versioned_docs/version-20-R7/commands-legacy/json-validate.md","sourceDirName":"commands-legacy","slug":"/commands/json-validate","permalink":"/docs/20-R7/commands/json-validate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-validate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-validate","title":"JSON Validate","slug":"/commands/json-validate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON TO SELECTION","permalink":"/docs/20-R7/commands/json-to-selection"},"next":{"title":"Selection to JSON","permalink":"/docs/20-R7/commands/selection-to-json"}}'),t=s("785893"),i=s("250065");let d={id:"json-validate",title:"JSON Validate",slug:"/commands/json-validate",displayed_sidebar:"docs"},h=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JSON Validate"})," ( ",(0,t.jsx)(n.em,{children:"vJson"})," ; ",(0,t.jsx)(n.em,{children:"vSchema"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vJson"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"JSON object to validate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vSchema"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"JSON schema used to validate JSON objects"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Validation status and errors (if any)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"JSON Validate"})," command checks the compliance of the ",(0,t.jsx)(n.em,{children:"vJson"})," JSON contents with the rules defined in the ",(0,t.jsx)(n.em,{children:"vSchema"})," JSON schema. If the JSON is invalid, the command returns a detailed description of error(s)."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vJson"}),", pass a JSON object containing the JSON contents to be validated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Validating a JSON string consists of checking that it follows the rules defined in a JSON schema. This is different from checking that the JSON is well-formed, which is done by the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/json-parse",children:"JSON Parse"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vSchema"}),", pass the JSON schema to use for the validation. For more information on how to create a JSON schema, you may consult the ",(0,t.jsx)(n.a,{href:"http://json-schema.org/",children:"json-schema.org"})," web site."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," To validate a JSON object, 4D uses the norm described in the ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/draft-wright-json-schema-validation-00",children:"JSON Schema Validation"})," document (this draft is still being written and can evolve in the future). 4D's current implementation is based upon the version 4 of the draft."]}),"\n",(0,t.jsxs)(n.p,{children:["If the JSON schema is not valid, 4D returns a ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/null",children:"Null"})," object and throws an error that can be caught by an on error call method."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"JSON Validate"})," returns an object that provides the status of the validation. This object can contain the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Property name"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"success"})}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["True if ",(0,t.jsx)(n.em,{children:"vJson"})," is validated, false otherwise. If false, the ",(0,t.jsx)(n.em,{children:"errors"})," property is also returned"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"errors"})}),(0,t.jsx)(n.td,{children:"Object collection"}),(0,t.jsxs)(n.td,{children:["List of error objects if the ",(0,t.jsx)(n.em,{children:"vJson"})," is not validated (see below)"]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Each error object of the ",(0,t.jsx)(n.em,{children:"errors"})," collection contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Property name"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"code"})}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Error code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"jsonPath"})}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["JSON path that cannot be validated in ",(0,t.jsx)(n.em,{children:"vJson"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"line"})}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Line number of the error in the JSON file. This property is filled if the JSON has been parsed by ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/json-parse",children:"JSON Parse"})," with the ",(0,t.jsx)(n.em,{children:"*"})," parameter. Otherwise, the property is omitted."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"message"})}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Error message"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"offset"})}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Line offset of the error in the JSON file. This property is filled if the JSON has been parsed by ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/json-parse",children:"JSON Parse"})," with the ",(0,t.jsx)(n.em,{children:"*"})," parameter. Otherwise, the property is omitted."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"schemaPaths"})}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"JSON path in the schema that causes the validation error"})]})]})]}),"\n",(0,t.jsx)(n.h5,{id:"error-management",children:"Error management"}),"\n",(0,t.jsx)(n.p,{children:"The following errors may be returned :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Code"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"JSON Keyword"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Message"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"multipleOf"}),(0,t.jsx)(n.td,{children:"Error while validating against 'multipleOf' key."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"maximum"}),(0,t.jsx)(n.td,{children:'The value provided should not be greater than specified in the schema ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"exclusiveMaximum"}),(0,t.jsx)(n.td,{children:'The value provided should be less than specified in the schema ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"minimum"}),(0,t.jsx)(n.td,{children:'The value provided should not be less than specified in the schema ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"exclusiveMinimum"}),(0,t.jsx)(n.td,{children:'The value provided should be greater than specified in the schema ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"maxLength"}),(0,t.jsx)(n.td,{children:"The string is longer than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"minLength"}),(0,t.jsx)(n.td,{children:"The string is shorter than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"pattern"}),(0,t.jsx)(n.td,{children:'The string "{s1}" does not match the pattern in the schema:{s2}.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"additionalItems"}),(0,t.jsx)(n.td,{children:"Error while validating an array. JSON contains more elements than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"maxItems"}),(0,t.jsx)(n.td,{children:"The array contains more items than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12"}),(0,t.jsx)(n.td,{children:"minItems"}),(0,t.jsx)(n.td,{children:"The array contains less items than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"uniqueItems"}),(0,t.jsx)(n.td,{children:'Error while validating an array. Elements are not unique. Another instance of "{s1}" is already in the array.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"14"}),(0,t.jsx)(n.td,{children:"maxProperties"}),(0,t.jsx)(n.td,{children:"The number of properties is greater than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"minProperties"}),(0,t.jsx)(n.td,{children:"The number of properties is less than specified in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:'The required property "{s1}" is missing.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17"}),(0,t.jsx)(n.td,{children:"additionalProperties"}),(0,t.jsx)(n.td,{children:"No additional properties allowed by the schema. The property(ies) {s1} should be removed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"dependencies"}),(0,t.jsx)(n.td,{children:'The property "{s1}" requires the property "{s2}".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19"}),(0,t.jsx)(n.td,{children:"enum"}),(0,t.jsx)(n.td,{children:"Error while validating against 'enum' key. \"{s1}\" does not match any enum element in the schema."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Incorrect type. Expected type is: {s1}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"21"}),(0,t.jsx)(n.td,{children:"oneOf"}),(0,t.jsx)(n.td,{children:"The JSON matches more than one value."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"oneOf"}),(0,t.jsx)(n.td,{children:"The JSON does not match any value."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"not"}),(0,t.jsx)(n.td,{children:"The JSON is valid against the value of 'not'."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"24"}),(0,t.jsx)(n.td,{children:"format"}),(0,t.jsx)(n.td,{children:'The string does not match ("{s1}")'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to validate a JSON object with a schema and get the list of validation errors, if any, and store error lines and messages in a text variable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $oResult : Object\n\xa0$oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)\n\xa0If($oResult.success)\xa0//validation successful\n\xa0\xa0\xa0\xa0...\n\xa0Else\xa0//validation failed\n\xa0\xa0\xa0\xa0var $vLNbErr : Integer\n\xa0\xa0\xa0\xa0var $vTerrLine : Text\n\xa0\xa0\xa0\xa0$vLNbErr:=$oResult.errors.length\xa0///get the number of error(s)\n\xa0\xa0\xa0\xa0ALERT(String($vLNbErr)+" validation error(s) found.")\n\xa0\xa0\xa0\xa0For($i;0;$vLNbErr)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This example requires that object notation is activated (see the ",(0,t.jsx)(n.em,{children:"Compatibility page"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/json-parse",children:"JSON Parse"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1456"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return h},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);