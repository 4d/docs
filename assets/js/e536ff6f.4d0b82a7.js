"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57384"],{514938:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"REST/filter","title":"$filter","description":"Allows to query the data in a dataclass or method (e.g., $filter=\\"firstName!=\'\' AND salary>30000\\")","source":"@site/versioned_docs/version-19/REST/$filter.md","sourceDirName":"REST","slug":"/REST/filter","permalink":"/docs/19/REST/filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"filter","title":"$filter"},"sidebar":"docs","previous":{"title":"$expand","permalink":"/docs/19/REST/expand"},"next":{"title":"$imageformat","permalink":"/docs/19/REST/imageformat"}}'),s=r("785893"),i=r("250065");let l={id:"filter",title:"$filter"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Using a simple filter",id:"using-a-simple-filter",level:3},{value:"Using a complex filter",id:"using-a-complex-filter",level:3},{value:"Using the params property",id:"using-the-params-property",level:3},{value:"Attribute",id:"attribute",level:2},{value:"Comparator",id:"comparator",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Allows to query the data in a dataclass or method ",(0,s.jsx)(t.em,{children:"(e.g."}),", ",(0,s.jsx)(t.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This parameter allows you to define the filter for your dataclass or method."}),"\n",(0,s.jsx)(t.h3,{id:"using-a-simple-filter",children:"Using a simple filter"}),"\n",(0,s.jsx)(t.p,{children:"A filter is composed of the following elements:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,s.jsxs)(t.p,{children:["For example: ",(0,s.jsx)(t.code,{children:'$filter="firstName=john"'})," where ",(0,s.jsx)(t.code,{children:"firstName"})," is the ",(0,s.jsx)(t.strong,{children:"attribute"}),", ",(0,s.jsx)(t.code,{children:"="})," is the ",(0,s.jsx)(t.strong,{children:"comparator"})," and ",(0,s.jsx)(t.code,{children:"john"})," is the ",(0,s.jsx)(t.strong,{children:"value"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"using-a-complex-filter",children:"Using a complex filter"}),"\n",(0,s.jsx)(t.p,{children:"A more compex filter is composed of the following elements, which joins two queries:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,s.jsxs)(t.p,{children:["For example: ",(0,s.jsx)(t.code,{children:'$filter="firstName=john AND salary>20000"'})," where ",(0,s.jsx)(t.code,{children:"firstName"})," and ",(0,s.jsx)(t.code,{children:"salary"})," are attributes in the Employee dataclass."]}),"\n",(0,s.jsx)(t.h3,{id:"using-the-params-property",children:"Using the params property"}),"\n",(0,s.jsx)(t.p,{children:"You can also use 4D's params property."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,s.jsxs)(t.p,{children:["For example: ",(0,s.jsx)(t.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\''})," where firstName and salary are attributes in the Employee dataclass."]}),"\n",(0,s.jsxs)(t.p,{children:["For more information regarding how to query data in 4D, refer to the ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html",children:"dataClass.query()"})," documentation."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"When inserting quotes (') or double quotes (\"), you must escape them using using their character code:"}),"\n",(0,s.jsx)(t.li,{children:"Quotes ('): \\u0027"}),"\n",(0,s.jsx)(t.li,{children:'Double quotes ("): \\u0022'}),"\n",(0,s.jsxs)(t.p,{children:["For example, you can write the following when passing a value with a quote when using the ",(0,s.jsx)(t.em,{children:"params"})," property:",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the value directly, you can write the following:\n",(0,s.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"attribute",children:"Attribute"}),"\n",(0,s.jsxs)(t.p,{children:["If the attribute is in the same dataclass, you can just pass it directly (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:"firstName"}),"). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (",(0,s.jsx)(t.em,{children:"e.g."}),", employer.name). The attribute name is case-sensitive (",(0,s.jsx)(t.code,{children:"firstName"})," is not equal to ",(0,s.jsx)(t.code,{children:"FirstName"}),")."]}),"\n",(0,s.jsx)(t.p,{children:'You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can search in the object by writing the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,s.jsx)(t.h2,{id:"comparator",children:"Comparator"}),"\n",(0,s.jsx)(t.p,{children:"The comparator must be one of the following values:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Comparator"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"="}),(0,s.jsx)(t.td,{children:"equals to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"!="}),(0,s.jsx)(t.td,{children:"not equal to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:">"}),(0,s.jsx)(t.td,{children:"greater than"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:">="}),(0,s.jsx)(t.td,{children:"greater than or equal to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"<"}),(0,s.jsx)(t.td,{children:"less than"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"<="}),(0,s.jsx)(t.td,{children:"less than or equal to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"begin"}),(0,s.jsx)(t.td,{children:"begins with"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:'In the following example, we look for all employees whose last name begins with a "j":'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,s.jsx)(t.p,{children:"In this example, we search the Employee dataclass for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,s.jsx)(t.p,{children:"In this example, we search the Person dataclass for all the people whose number property in the anotherobj attribute of type Object is greater than 50:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var n=r(667294);let s={},i=n.createContext(s);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);