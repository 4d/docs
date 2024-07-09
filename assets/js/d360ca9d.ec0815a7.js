/*! For license information please see d360ca9d.ec0815a7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52165],{875321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(474848),s=n(28453);const a={id:"manData",title:"Manipulating Data"},r=void 0,l={id:"REST/manData",title:"Manipulating Data",description:"All exposed datastore classes, attributes and methods can be accessed through REST. Dataclass, attribute, and method names are case-sensitive; however, the data for queries is not.",source:"@site/versioned_docs/version-18/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/18/REST/manData",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"manData",title:"Manipulating Data"},sidebar:"docs",previous:{title:"Getting Server Information",permalink:"/docs/18/REST/genInfo"},next:{title:"About REST Requests",permalink:"/docs/18/REST/REST_requests"}},o={},d=[{value:"Querying data",id:"Querying-data",level:2},{value:"Adding, modifying, and deleting entities",id:"Adding-modifying-and-deleting-entities",level:2},{value:"Navigating data",id:"Navigating-data",level:2},{value:"Creating and managing entity set",id:"Creating-and-managing-entity-set",level:2},{value:"Calculating data",id:"Calculating-data",level:2},{value:"Getting data from methods",id:"Getting-data-from-methods",level:2},{value:"Selecting Attributes to get",id:"Selecting-Attributes-to-get",level:2},{value:"Examples",id:"Examples",level:3},{value:"Dataclass Example",id:"Dataclass-Example",level:4},{value:"Entity Example",id:"Entity-Example",level:4},{value:"Entity Set Example",id:"Entity-Set-Example",level:4},{value:"Viewing an image attribute",id:"Viewing-an-image-attribute",level:2},{value:"Saving a BLOB attribute to disk",id:"Saving-a-BLOB-attribute-to-disk",level:2},{value:"Retrieving only one entity",id:"Retrieving-only-one-entity",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["All ",(0,i.jsx)(t.a,{href:"/docs/18/REST/configuration#exposing-tables-and-fields",children:"exposed datastore classes, attributes"})," and methods can be accessed through REST. Dataclass, attribute, and method names are case-sensitive; however, the data for queries is not."]}),"\n",(0,i.jsx)(t.h2,{id:"Querying-data",children:"Querying data"}),"\n",(0,i.jsxs)(t.p,{children:["To query data directly, you can do so using the ",(0,i.jsx)(t.a,{href:"/docs/18/REST/filter",children:(0,i.jsx)(t.code,{children:"$filter"})}),' function. For example, to find a person named "Smith", you could write:']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,i.jsx)(t.h2,{id:"Adding-modifying-and-deleting-entities",children:"Adding, modifying, and deleting entities"}),"\n",(0,i.jsx)(t.p,{children:"With the REST API, you can perform all the manipulations to data as you can in 4D."}),"\n",(0,i.jsxs)(t.p,{children:["To add and modify entities, you can call ",(0,i.jsx)(t.a,{href:"/docs/18/REST/method#methodupdate",children:(0,i.jsx)(t.code,{children:"$method=update"})}),". If you want to delete one or more entities, you can use ",(0,i.jsx)(t.a,{href:"/docs/18/REST/method#methoddelete",children:(0,i.jsx)(t.code,{children:"$method=delete"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Besides retrieving a single entity in a dataclass using ",(0,i.jsx)(t.a,{href:"%7BdataClass%7D_%7Bkey%7D.html",children:"{dataClass}({key})"}),", you can also write a method in your DataClass class and call it to return an entity selection (or a collection) by using ",(0,i.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassmethod",children:"{dataClass}/{method}"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Before returning the collection, you can also sort it by using ",(0,i.jsx)(t.a,{href:"/docs/18/REST/orderby",children:(0,i.jsx)(t.code,{children:"$orderby"})})," one one or more attributes (even relation attributes)."]}),"\n",(0,i.jsx)(t.h2,{id:"Navigating-data",children:"Navigating data"}),"\n",(0,i.jsxs)(t.p,{children:["Add the ",(0,i.jsx)(t.a,{href:"/docs/18/REST/skip",children:(0,i.jsx)(t.code,{children:"$skip"})})," (to define with which entity to start) and ",(0,i.jsx)(t.a,{href:"/docs/18/REST/top_$limit",children:(0,i.jsx)(t.code,{children:"$top/$limit"})})," (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities."]}),"\n",(0,i.jsx)(t.h2,{id:"Creating-and-managing-entity-set",children:"Creating and managing entity set"}),"\n",(0,i.jsxs)(t.p,{children:["An entity set (aka ",(0,i.jsx)(t.em,{children:"entity selection"}),") is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application."]}),"\n",(0,i.jsxs)(t.p,{children:["To create an entity set, call ",(0,i.jsx)(t.a,{href:"/docs/18/REST/method#methodentityset",children:(0,i.jsx)(t.code,{children:"$method=entityset"})})," in your REST request. As a measure of security, you can also use ",(0,i.jsx)(t.a,{href:"/docs/18/REST/savedfilter",children:(0,i.jsx)(t.code,{children:"$savedfilter"})})," and/or ",(0,i.jsx)(t.a,{href:"/docs/18/REST/savedorderby",children:(0,i.jsx)(t.code,{children:"$savedorderby"})})," when you call ",(0,i.jsx)(t.a,{href:"/docs/18/REST/filter",children:(0,i.jsx)(t.code,{children:"$filter"})})," and/or ",(0,i.jsx)(t.a,{href:"/docs/18/REST/orderby",children:(0,i.jsx)(t.code,{children:"$orderby"})})," so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before."]}),"\n",(0,i.jsxs)(t.p,{children:["To access the entity set, you must use ",(0,i.jsx)(t.code,{children:"$entityset/\\{entitySetID\\}"}),", for example:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,i.jsxs)(t.p,{children:["By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to ",(0,i.jsx)(t.a,{href:"/docs/18/REST/timeout",children:(0,i.jsx)(t.code,{children:"$timeout"})}),". The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to remove an entity set from 4D Server's cache, you can use ",(0,i.jsx)(t.a,{href:"/docs/18/REST/method#methodrelease",children:(0,i.jsx)(t.code,{children:"$method=release"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set."}),"\n",(0,i.jsx)(t.p,{children:"If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it."}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.a,{href:"/docs/18/REST/entityset#entitysetentitysetidoperatorothercollection",children:(0,i.jsx)(t.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})}),", you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two."]}),"\n",(0,i.jsxs)(t.p,{children:["A new selection of entities is returned; however, you can also create a new entity set by calling ",(0,i.jsx)(t.a,{href:"/docs/18/REST/method#methodentityset",children:(0,i.jsx)(t.code,{children:"$method=entityset"})})," at the end of the REST request."]}),"\n",(0,i.jsx)(t.h2,{id:"Calculating-data",children:"Calculating data"}),"\n",(0,i.jsxs)(t.p,{children:["By using ",(0,i.jsx)(t.a,{href:"/docs/18/REST/compute",children:(0,i.jsx)(t.code,{children:"$compute"})}),", you can compute the ",(0,i.jsx)(t.strong,{children:"average"}),", ",(0,i.jsx)(t.strong,{children:"count"}),", ",(0,i.jsx)(t.strong,{children:"min"}),", ",(0,i.jsx)(t.strong,{children:"max"}),", or ",(0,i.jsx)(t.strong,{children:"sum"})," for a specific attribute in a dataclass. You can also compute all values with the $all keyword."]}),"\n",(0,i.jsx)(t.p,{children:"For example, to get the highest salary:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"/rest/Employee/salary/?$compute=sum"})}),"\n",(0,i.jsx)(t.p,{children:"To compute all values and return a JSON object:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,i.jsx)(t.h2,{id:"Getting-data-from-methods",children:"Getting data from methods"}),"\n",(0,i.jsxs)(t.p,{children:["You can call 4D project methods that are ",(0,i.jsx)(t.a,{href:"%7BdataClass%7D.html#4d-configuration",children:"exposed as REST Service"}),". A 4D method can return in $0:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"an object"}),"\n",(0,i.jsx)(t.li,{children:"a collection"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following example is a dataclass method that reveives parameters and returns an object:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'// 4D findPerson method\nC_TEXT($1;$firstname;$2;$lastname)\n$firstname:=$1\n$lastname:=$2\n\n$0:=ds.Employee.query("firstname = :1 and lastname = :2";$firstname;$lastname).first().toObject()\n'})}),"\n",(0,i.jsx)(t.p,{children:"The method properties are configured accordingly on the 4D project side:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt-text",src:n(91300).A+"",width:"552",height:"360"})}),"\n",(0,i.jsxs)(t.p,{children:["Then you can send the following REST POST request, for example using the ",(0,i.jsx)(t.code,{children:"HTTP Request"})," 4D command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'C_TEXT($content)\nC_OBJECT($response)\n\n$content:="[\\"Toni\\",\\"Dickey\\"]" \n\n$statusCode:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/Employee/findPerson";$content;$response)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Method calls are detailed in the ",(0,i.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassmethod-and-dataclasskeymethod",children:"{dataClass}"})," section."]}),"\n",(0,i.jsx)(t.h2,{id:"Selecting-Attributes-to-get",children:"Selecting Attributes to get"}),"\n",(0,i.jsxs)(t.p,{children:["You can always define which attributes to return in the REST response after an initial request by passing their path in the request (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:"Company(1)/name,revenues/"}),")"]}),"\n",(0,i.jsx)(t.p,{children:"You can apply this filter in the following ways:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Object"}),(0,i.jsx)(t.th,{children:"Syntax"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Dataclass"}),(0,i.jsx)(t.td,{children:"{dataClass}/{att1,att2...}"}),(0,i.jsx)(t.td,{children:"/People/firstName,lastName"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Collection of entities"}),(0,i.jsx)(t.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,i.jsx)(t.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Specific entity"}),(0,i.jsx)(t.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,i.jsx)(t.td,{children:"/People(1)/firstName,lastName"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,i.jsx)(t.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Entity selection"}),(0,i.jsx)(t.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,i.jsx)(t.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The attributes must be delimited by a comma, ",(0,i.jsx)(t.em,{children:"i.e."}),", ",(0,i.jsx)(t.code,{children:"/Employee/firstName,lastName,salary"}),". Storage or relation attributes can be passed."]}),"\n",(0,i.jsx)(t.h3,{id:"Examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities."}),"\n",(0,i.jsx)(t.p,{children:"You can apply this technique to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dataclasses (all or a collection of entities in a dataclass)"}),"\n",(0,i.jsx)(t.li,{children:"Specific entities"}),"\n",(0,i.jsx)(t.li,{children:"Entity sets"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"Dataclass-Example",children:"Dataclass Example"}),"\n",(0,i.jsxs)(t.p,{children:["The following requests returns only the first name and last name from the People dataclass (either the entire dataclass or a selection of entities based on the search defined in ",(0,i.jsx)(t.code,{children:"$filter"}),")."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Result"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Result"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"Entity-Example",children:"Entity Example"}),"\n",(0,i.jsx)(t.p,{children:"The following request returns only the first name and last name attributes from a specific entity in the People dataclass:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Result"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Result"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n \n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"Entity-Set-Example",children:"Entity Set Example"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have ",(0,i.jsx)(t.a,{href:"#creating-and-managing-entity-set",children:"created an entity set"}),", you can filter the information in it by defining which attributes to return:"]}),"\n",(0,i.jsx)(t.p,{children:"`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"}),"\n",(0,i.jsx)(t.h2,{id:"Viewing-an-image-attribute",children:"Viewing an image attribute"}),"\n",(0,i.jsx)(t.p,{children:"If you want to view an image attribute in its entirety, write the following:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,i.jsxs)(t.p,{children:["For more information about the image formats, refer to ",(0,i.jsx)(t.a,{href:"/docs/18/REST/imageformat",children:(0,i.jsx)(t.code,{children:"$imageformat"})}),". For more information about the version parameter, refer to ",(0,i.jsx)(t.a,{href:"/docs/18/REST/version",children:(0,i.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"Saving-a-BLOB-attribute-to-disk",children:"Saving a BLOB attribute to disk"}),"\n",(0,i.jsx)(t.p,{children:"If you want to save a BLOB stored in your dataclass, you can write the following:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,i.jsx)(t.h2,{id:"Retrieving-only-one-entity",children:"Retrieving only one entity"}),"\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,i.jsx)(t.code,{children:"\\{dataClass\\}:\\{attribute\\}(value)"})})," syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the dataclass's primary key. For example, you can write:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var i=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,a={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,i)&&!o.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},91300:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/methodProp_ex-a0a39f52d2866fe84f8b62118662b333.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(296540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);