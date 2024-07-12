/*! For license information please see 46d48a0f.e16c9277.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[626],{961166:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(474848),a=r(28453);const o={id:"upload",title:"$upload"},s=void 0,i={id:"REST/upload",title:"$upload",description:"Devuelve un ID del archivo subido al servidor",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/es/20-R5/REST/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/es/20-R5/REST/info"},next:{title:"API (dataClass)",permalink:"/docs/es/20-R5/category/api-dataclass"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Escenario de carga",id:"escenario-de-carga",level:2},{value:"Ejemplo con un cliente 4D HTTP",id:"ejemplo-con-un-cliente-4d-http",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Devuelve un ID del archivo subido al servidor"}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Publique esta petici\xf3n cuando tenga un archivo que quiera subir al Servidor. Si tiene una imagen, pase ",(0,t.jsx)(n.code,{children:"$rawPict=true"}),". Para todos los dem\xe1s archivos, se pasa ",(0,t.jsx)(n.code,{children:"$binary=true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede modificar el tiempo de espera, que por defecto es de 120 segundos, pasando un valor al par\xe1metro ",(0,t.jsx)(n.code,{children:"$timeout"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"escenario-de-carga",children:"Escenario de carga"}),"\n",(0,t.jsx)(n.p,{children:"Imagine que quiere subir una imagen para actualizar el atributo imagen de una entidad."}),"\n",(0,t.jsxs)(n.p,{children:["Para cargar una imagen (o cualquier archivo binario), primero debe seleccionar el archivo desde la aplicaci\xf3n cliente. El archivo en s\xed debe pasarse en el ",(0,t.jsx)(n.strong,{children:"cuerpo"})," de la petici\xf3n."]}),"\n",(0,t.jsx)(n.p,{children:"A continuaci\xf3n, se sube la imagen seleccionada a 4D Server mediante una petici\xf3n como:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,t.jsx)(n.p,{children:"Como resultado, el servidor devuelve un ID que identifica el archivo:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,t.jsxs)(n.p,{children:["Afterwards, you use this ID to add it to an attribute using ",(0,t.jsx)(n.a,{href:"/docs/es/20-R5/REST/method#methodupdate",children:(0,t.jsx)(n.code,{children:"$method=update"})})," to add the image to an entity. La petici\xf3n se ve as\xed:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Datos POST"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Se devuelve la entidad modificada:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-con-un-cliente-4d-http",children:"Ejemplo con un cliente 4D HTTP"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo muestra c\xf3mo subir un archivo ",(0,t.jsx)(n.em,{children:".pdf"})," al servidor utilizando el cliente 4D HTTP."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n\tvar $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n\tALERT(String($result)+" Error")\nEnd if\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:a,type:e,key:c,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(296540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);