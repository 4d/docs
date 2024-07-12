/*! For license information please see ba05b862.62834060.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9295],{38063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(474848),s=r(28453);const i={id:"filter",title:"$filter"},l=void 0,o={id:"REST/filter",title:"$filter",description:"Allows to query the data in a dataclass or method (e.g., $filter=\"firstName!='' AND salary>30000\")",source:"@site/versioned_docs/version-18/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/18/REST/filter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/18/REST/expand"},next:{title:"$imageformat",permalink:"/docs/18/REST/imageformat"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Using a simple filter",id:"using-a-simple-filter",level:3},{value:"Using a complex filter",id:"using-a-complex-filter",level:3},{value:"Using the params property",id:"using-the-params-property",level:3},{value:"Attribute",id:"attribute",level:2},{value:"Comparator",id:"comparator",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Allows to query the data in a dataclass or method ",(0,n.jsx)(t.em,{children:"(e.g."}),", ",(0,n.jsx)(t.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This parameter allows you to define the filter for your dataclass or method."}),"\n",(0,n.jsx)(t.h3,{id:"using-a-simple-filter",children:"Using a simple filter"}),"\n",(0,n.jsx)(t.p,{children:"A filter is composed of the following elements:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,n.jsxs)(t.p,{children:["For example: ",(0,n.jsx)(t.code,{children:'$filter="firstName=john"'})," where ",(0,n.jsx)(t.code,{children:"firstName"})," is the ",(0,n.jsx)(t.strong,{children:"attribute"}),", ",(0,n.jsx)(t.code,{children:"="})," is the ",(0,n.jsx)(t.strong,{children:"comparator"})," and ",(0,n.jsx)(t.code,{children:"john"})," is the ",(0,n.jsx)(t.strong,{children:"value"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"using-a-complex-filter",children:"Using a complex filter"}),"\n",(0,n.jsx)(t.p,{children:"A more compex filter is composed of the following elements, which joins two queries:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,n.jsxs)(t.p,{children:["For example: ",(0,n.jsx)(t.code,{children:'$filter="firstName=john AND salary>20000"'})," where ",(0,n.jsx)(t.code,{children:"firstName"})," and ",(0,n.jsx)(t.code,{children:"salary"})," are attributes in the Employee dataclass."]}),"\n",(0,n.jsx)(t.h3,{id:"using-the-params-property",children:"Using the params property"}),"\n",(0,n.jsx)(t.p,{children:"You can also use 4D's params property."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,n.jsxs)(t.p,{children:["For example: ",(0,n.jsx)(t.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\''})," where firstName and salary are attributes in the Employee dataclass."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information regarding how to query data in 4D, refer to the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html",children:"dataClass.query()"})," documentation."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"When inserting quotes (') or double quotes (\"), you must escape them using using their character code:"}),"\n",(0,n.jsx)(t.p,{children:"Quotes ('): \\u0027\nDouble quotes (\"): \\u0022"}),"\n",(0,n.jsxs)(t.p,{children:["For example, you can write the following when passing a value with a quote when using the ",(0,n.jsx)(t.em,{children:"params"})," property:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,n.jsxs)(t.p,{children:["If you pass the value directly, you can write the following:\n",(0,n.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"attribute",children:"Attribute"}),"\n",(0,n.jsxs)(t.p,{children:["If the attribute is in the same dataclass, you can just pass it directly (",(0,n.jsx)(t.em,{children:"e.g."}),", ",(0,n.jsx)(t.code,{children:"firstName"}),"). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (",(0,n.jsx)(t.em,{children:"e.g."}),", employer.name). The attribute name is case-sensitive (",(0,n.jsx)(t.code,{children:"firstName"})," is not equal to ",(0,n.jsx)(t.code,{children:"FirstName"}),")."]}),"\n",(0,n.jsx)(t.p,{children:'You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can search in the object by writing the following:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,n.jsx)(t.h2,{id:"comparator",children:"Comparator"}),"\n",(0,n.jsx)(t.p,{children:"The comparator must be one of the following values:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Comparator"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"="}),(0,n.jsx)(t.td,{children:"equals to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"!="}),(0,n.jsx)(t.td,{children:"not equal to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:">"}),(0,n.jsx)(t.td,{children:"greater than"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:">="}),(0,n.jsx)(t.td,{children:"greater than or equal to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"<"}),(0,n.jsx)(t.td,{children:"less than"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"<="}),(0,n.jsx)(t.td,{children:"less than or equal to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"begin"}),(0,n.jsx)(t.td,{children:"begins with"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:'In the following example, we look for all employees whose last name begins with a "j":'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example, we search the Employee dataclass for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example, we search the Person dataclass for all the people whose number property in the anotherobj attribute of type Object is greater than 50:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(296540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);