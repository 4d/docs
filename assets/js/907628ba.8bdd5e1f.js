"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89744"],{600260:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"REST/method","title":"$method","description":"This parameter allows you to define the operation to execute with the returned entity or entity selection.","source":"@site/versioned_docs/version-18/REST/$method.md","sourceDirName":"REST","slug":"/REST/method","permalink":"/docs/18/REST/method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24method.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"method","title":"$method"},"sidebar":"docs","previous":{"title":"$imageformat","permalink":"/docs/18/REST/imageformat"},"next":{"title":"$orderby","permalink":"/docs/18/REST/orderby"}}'),i=t("785893"),r=t("250065");let d={id:"method",title:"$method"},o=void 0,a={},l=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"$method=delete",id:"methoddelete",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"$method=entityset",id:"methodentityset",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"$method=release",id:"methodrelease",level:2},{value:"Description",id:"description-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Response:",id:"response",level:4},{value:"$method=subentityset",id:"methodsubentityset",level:2},{value:"Description",id:"description-3",level:3},{value:"Example",id:"example-3",level:3},{value:"Response:",id:"response-1",level:4},{value:"$method=update",id:"methodupdate",level:2},{value:"Description",id:"description-4",level:3},{value:"Example",id:"example-4",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This parameter allows you to define the operation to execute with the returned entity or entity selection."}),"\n",(0,i.jsx)(n.h2,{id:"available-syntaxes",children:"Available syntaxes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Syntax"}),(0,i.jsx)(n.th,{children:"Example"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#methoddelete",children:(0,i.jsx)(n.strong,{children:"$method=delete"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'POST /Employee?$filter="ID=11"& $method=delete'})}),(0,i.jsx)(n.td,{children:"Deletes the current entity, entity collection, or entity selection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#methodentityset",children:(0,i.jsx)(n.strong,{children:"$method=entityset"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'GET /People/?$filter="ID>320"& $method=entityset& $timeout=600'})}),(0,i.jsx)(n.td,{children:"Creates an entity set in 4D Server's cache based on the collection of entities defined in the REST request"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#methodrelease",children:(0,i.jsx)(n.strong,{children:"$method=release"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GET /Employee/$entityset/<entitySetID>?$method=release"})}),(0,i.jsx)(n.td,{children:"Releases an existing entity set stored in 4D Server's cache"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#methodsubentityset",children:(0,i.jsx)(n.strong,{children:"$method=subentityset"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC"})}),(0,i.jsx)(n.td,{children:"Creates an entity set based on the collection of related entities defined in the REST request"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#methodupdate",children:(0,i.jsx)(n.strong,{children:"$method=update"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POST /Person/?$method=update"})}),(0,i.jsx)(n.td,{children:"Updates and/or creates one or more entities"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methoddelete",children:"$method=delete"}),"\n",(0,i.jsx)(n.p,{children:"Deletes the current entity, entity collection, or entity selection (created through REST)"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.code,{children:"$method=delete"}),", you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, ",(0,i.jsx)(n.a,{href:"/docs/18/REST/filter",children:(0,i.jsx)(n.code,{children:"$filter"})})," or specifying one directly using ",(0,i.jsx)(n.a,{href:"%7BdataClass%7D.html#dataclasskey",children:(0,i.jsx)(n.code,{children:"\\{dataClass\\}({key})"})})," ",(0,i.jsx)(n.em,{children:"(e.g."}),", /Employee(22))."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also delete the entities in an entity set, by calling ",(0,i.jsx)(n.a,{href:"/docs/18/REST/entityset#entitysetentitysetid",children:(0,i.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You can then write the following REST request to delete the entity whose key is 22:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST  /rest/Employee(22)/?$method=delete"})}),"\n",(0,i.jsx)(n.p,{children:"You can also do a query as well using $filter:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'POST  /rest/Employee?$filter="ID=11"&$method=delete'})}),"\n",(0,i.jsx)(n.p,{children:"You can also delete an entity set using $entityset/{entitySetID}:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete"})}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"methodentityset",children:"$method=entityset"}),"\n",(0,i.jsx)(n.p,{children:"Creates an entity set in 4D Server's cache based on the collection of entities defined in the REST request"}),"\n",(0,i.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["When you create a collection of entities in REST, you can also create an entity set that will be saved in 4D Server's cache. The entity set will have a reference number that you can pass to ",(0,i.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})," to access it. By default, it is valid for two hours; however, you can modify that amount of time by passing a value (in seconds) to $timeout."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have used ",(0,i.jsx)(n.code,{children:"$savedfilter"})," and/or ",(0,i.jsx)(n.code,{children:"$savedorderby"})," (in conjunction with ",(0,i.jsx)(n.code,{children:"$filter"})," and/or ",(0,i.jsx)(n.code,{children:"$orderby"}),") when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache."]}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["To create an entity set, which will be saved in 4D Server's cache for two hours, add ",(0,i.jsx)(n.code,{children:"$method=entityset"})," at the end of your REST request:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset'})}),"\n",(0,i.jsxs)(n.p,{children:["You can create an entity set that will be stored in 4D Server's cache for only ten minutes by passing a new timeout to ",(0,i.jsx)(n.code,{children:"$timeout"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600'})}),"\n",(0,i.jsxs)(n.p,{children:["You can also save the filter and order by, by passing true to ",(0,i.jsx)(n.code,{children:"$savedfilter"})," and ",(0,i.jsx)(n.code,{children:"$savedorderby"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$skip"})," and ",(0,i.jsx)(n.code,{children:"$top/$limit"})," are not taken into consideration when saving an entity set."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After you create an entity set, the first element, ",(0,i.jsx)(n.code,{children:"__ENTITYSET"}),", is added to the object returned and indicates the URI to use to access the entity set:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`\n'})}),"\n",(0,i.jsx)(n.h2,{id:"methodrelease",children:"$method=release"}),"\n",(0,i.jsx)(n.p,{children:"Releases an existing entity set stored in 4D Server's cache."}),"\n",(0,i.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["You can release an entity set, which you created using ",(0,i.jsx)(n.a,{href:"#methodentityset",children:(0,i.jsx)(n.code,{children:"$method=entityset"})}),", from 4D Server's cache."]}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Release an existing entity set:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release"})}),"\n",(0,i.jsx)(n.h4,{id:"response",children:"Response:"}),"\n",(0,i.jsx)(n.p,{children:"If the request was successful, the following response is returned:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\nIf the entity set wasn\'t found, an error is returned:\n\n{\n    "__ERROR": [\n        {\n            "message": "Error code: 1802\\nEntitySet  \\"4C51204DD8184B65AC7D79F09A077F24\\" cannot be found\\ncomponent:  \'dbmg\'\\ntask 22, name: \'HTTP connection handler\'\\n",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"methodsubentityset",children:"$method=subentityset"}),"\n",(0,i.jsx)(n.p,{children:"Creates an entity set in 4D Server's cache based on the collection of related entities defined in the REST request"}),"\n",(0,i.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$method=subentityset"})," allows you to sort the data returned by the relation attribute defined in the REST request."]}),"\n",(0,i.jsxs)(n.p,{children:["To sort the data, you use the ",(0,i.jsx)(n.code,{children:"$subOrderby"})," property. For each attribute, you specify the order as ASC (or asc) for ascending order and DESC (desc) for descending order. By default, the data is sorted in ascending order."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to specify multiple attributes, you can delimit them with a comma, \xb5, ",(0,i.jsx)(n.code,{children:'$subOrderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"If you want to retrieve only the related entities for a specific entity, you can make the following REST request where staff is the relation attribute in the Company dataclass linked to the Employee dataclass:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:" GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC"})}),"\n",(0,i.jsx)(n.h4,{id:"response-1",children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n \n    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",\n    "__entityModel": "Employee",\n    "__COUNT": 2,\n    "__SENT": 2,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "4",\n            "__STAMP": 1,\n            "ID": 4,\n            "firstName": "Linda",\n            "lastName": "Jones",\n            "birthday": "1970-10-05T14:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        },\n        {\n            "__KEY": "1",\n            "__STAMP": 3,\n            "ID": 1,\n            "firstName": "John",\n            "lastName": "Smith",\n            "birthday": "1985-11-01T15:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        }\n    ]\n \n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"methodupdate",children:"$method=update"}),"\n",(0,i.jsx)(n.p,{children:"Updates and/or creates one or more entities"}),"\n",(0,i.jsx)(n.h3,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$method=update"})," allows you to update and/or create one or more entities in a single ",(0,i.jsx)(n.strong,{children:"POST"}),". If you update and/or create one entity, it is done in an object with each property an attribute with its value, ",(0,i.jsx)(n.em,{children:"e.g."}),", ",(0,i.jsx)(n.code,{children:'{ lastName: "Smith" }'}),". If you update and/or create multiple entities, you must create a collection of objects."]}),"\n",(0,i.jsxs)(n.p,{children:["In any cases, you must set the ",(0,i.jsx)(n.strong,{children:"POST"})," data in the ",(0,i.jsx)(n.strong,{children:"body"})," of the request."]}),"\n",(0,i.jsxs)(n.p,{children:["To update an entity, you must pass the ",(0,i.jsx)(n.code,{children:"__KEY"})," and ",(0,i.jsx)(n.code,{children:"__STAMP"})," parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your ",(0,i.jsx)(n.strong,{children:"POST"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Triggers are executed immediately when saving the entity to the server. The response contains all the data as it exists on the server."}),"\n",(0,i.jsxs)(n.p,{children:["You can also put these requests to create or update entities in a transaction by calling ",(0,i.jsx)(n.code,{children:"$atomic/$atOnce"}),". If any errors occur during data validation, none of the entities are saved. You can also use ",(0,i.jsx)(n.code,{children:"$method=validate"})," to validate the entities before creating or updating them."]}),"\n",(0,i.jsx)(n.p,{children:"If a problem arises while adding or modifying an entity, an error will be returned to you with that information."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dates"}),' must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). If you have selected the Date only property for your Date attribute, the time zone and time (hour, minutes, and seconds) will be removed. In this case, you can also send the date in the format that it is returned to you dd!mm!yyyy (e.g., 05!10!2013).']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Booleans"})," are either true or false."]}),"\n",(0,i.jsxs)(n.li,{children:["Uploaded files using ",(0,i.jsx)(n.code,{children:"$upload"})," can be applied to an attribute of type Image or BLOB by passing the object returned in the following format ",(0,i.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}'})]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"To update a specific entity, you use the following URL:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"POST data:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    __KEY: "340",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Miller"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The firstName and lastName attributes in the entity indicated above will be modified leaving all other attributes (except calculated ones based on these attributes) unchanged."}),"\n",(0,i.jsx)(n.p,{children:"If you want to create an entity, you can POST the attributes using this URL:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"POST data:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ \n    firstName: "John",\n    lastName: "Smith"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also create and update multiple entities at the same time using the same URL above by passing multiple objects in an array to the POST:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"POST data:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[{ \n    "__KEY": "309",\n    "__STAMP": 5,\n    "ID": "309",\n    "firstName": "Penelope",\n    "lastName": "Miller"\n}, { \n    "firstName": "Ann",\n    "lastName": "Jones"\n}]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response:"})}),"\n",(0,i.jsx)(n.p,{children:"When you add or modify an entity, it is returned to you with the attributes that were modified. For example, if you create the new employee above, the following will be returned:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "__KEY": "622", \n    "__STAMP": 1, \n    "uri": "http://127.0.0.1:8081/rest/Employee(622)", \n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 622, \n    "firstName": "John", \n    "firstName": "Smith"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"If, for example, the stamp is not correct, the following error is returned:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "status": 2,\n        "statusText": "Stamp has changed",\n        "success": false\n    },\n    "__KEY": "1",\n    "__STAMP": 12,\n    "__TIMESTAMP": "!!2020-03-31!!",\n    "ID": 1,\n    "firstname": "Denise",\n    "lastname": "O\'Peters",\n    "isWoman": true,\n    "numberOfKids": 1,\n    "addressID": 1,\n    "gender": true,\n    "imageAtt": {\n        "__deferred": {\n            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",\n            "image": true\n        }\n    },\n    "extra": {\n        "num": 1,\n        "alpha": "I am 1"\n    },\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(1)",\n            "__KEY": "1"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Given stamp does not match current one for record# 0 of table Persons",\n            "componentSignature": "dbmg",\n            "errCode": 1263\n        },\n        {\n            "message": "Cannot save record 0 in table Persons of database remote_dataStore",\n            "componentSignature": "dbmg",\n            "errCode": 1046\n        },\n        {\n            "message": "The entity# 1 in the \\"Persons\\" dataclass cannot be saved",\n            "componentSignature": "dbmg",\n            "errCode": 1517\n        }\n    ]\n}{}\n\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);