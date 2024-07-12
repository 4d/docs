/*! For license information please see 31b933ab.cf8aa5b1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99087],{550849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(474848),o=n(28453);const s={id:"upload",title:"$upload"},a=void 0,i={id:"REST/upload",title:"$upload",description:"Returns an ID of the file uploaded to the server",source:"@site/versioned_docs/version-20-R5/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/20-R5/REST/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/20-R5/REST/info"},next:{title:"API (dataClass)",permalink:"/docs/20-R5/category/api-dataclass"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Uploading scenario",id:"uploading-scenario",level:2},{value:"Example with a 4D HTTP client",id:"example-with-a-4d-http-client",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Returns an ID of the file uploaded to the server"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Post this request when you have a file that you want to upload to the Server. If you have an image, you pass ",(0,r.jsx)(t.code,{children:"$rawPict=true"}),". For all other files, you pass ",(0,r.jsx)(t.code,{children:"$binary=true"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can modify the timeout, which by default is 120 seconds, by passing a value to the ",(0,r.jsx)(t.code,{children:"$timeout"})," parameter."]}),"\n",(0,r.jsx)(t.h2,{id:"uploading-scenario",children:"Uploading scenario"}),"\n",(0,r.jsx)(t.p,{children:"Imagine you want to upload an image to update the picture attribute of an entity."}),"\n",(0,r.jsxs)(t.p,{children:["To upload an image (or any binary file), you must first select the file from the client application. The file itlself must be passed in the ",(0,r.jsx)(t.strong,{children:"body"})," of the request."]}),"\n",(0,r.jsx)(t.p,{children:"Then, you upload the selected image to 4D Server using a request such as:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,r.jsx)(t.p,{children:"As a result, the server returns an ID that identifies the file:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,r.jsxs)(t.p,{children:["Afterwards, you use this ID to add it to an attribute using ",(0,r.jsx)(t.a,{href:"/docs/20-R5/REST/method#methodupdate",children:(0,r.jsx)(t.code,{children:"$method=update"})})," to add the image to an entity. The request looks like:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"POST data"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.p,{children:"The modified entity is returned:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example-with-a-4d-http-client",children:"Example with a 4D HTTP client"}),"\n",(0,r.jsxs)(t.p,{children:["The following example shows how to upload a ",(0,r.jsx)(t.em,{children:".pdf"})," file to the server using the 4D HTTP client."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n\tvar $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n\tALERT(String($result)+" Error")\nEnd if\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);