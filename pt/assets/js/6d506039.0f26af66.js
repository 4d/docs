"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53039],{603905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},510780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});r(667294);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"upload",title:"$upload"},p=void 0,l={unversionedId:"REST/upload",id:"version-19/REST/upload",title:"$upload",description:"Devolve um ID do ficheiro carregado para o servidor",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/pt/19/REST/upload",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/pt/19/REST/info"},next:{title:"dataClass",permalink:"/docs/pt/19/REST/dataClass"}},u={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Cen\xe1rio de carregamento",id:"cen\xe1rio-de-carregamento",level:2},{value:"Exemplo com um cliente 4D HTTP",id:"exemplo-com-um-cliente-4d-http",level:2}],s={toc:d};function c(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Devolve um ID do ficheiro carregado para o servidor"),(0,n.kt)("h2",a({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Publique essa peti\xe7\xe3o quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe ",(0,n.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". Para todos os outros ficheiros, deve passar ",(0,n.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,n.kt)("p",null,"Pode modificar o tempo limite, que por defeito \xe9 de 120 segundos, passando um valor para o par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,n.kt)("h2",a({},{id:"cen\xe1rio-de-carregamento"}),"Cen\xe1rio de carregamento"),(0,n.kt)("p",null,"Imagine que pretende carregar uma imagem para atualizar o atributo imagem de uma entidade."),(0,n.kt)("p",null,"Para carregar uma imagem (ou qualquer ficheiro bin\xe1rio), deve primeiro selecionar o ficheiro a partir da aplica\xe7\xe3o cliente. O ficheiro em si deve ser passado no ",(0,n.kt)("strong",{parentName:"p"},"corpo ")," do pedido."),(0,n.kt)("p",null,"Depois, carrega a imagem selecionada para 4D Server usando uma peti\xe7\xe3o como:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,n.kt)("p",null,"Como resultado, o servidor devolve um ID que identifica o ficheiro:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,n.kt)("p",null,"Afterwards, you use this ID to add it to an attribute using ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/19/REST/method#methodupdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=update"))," to add the image to an entity: O pedido tem o seguinte aspecto:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dados POST"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("p",null,"A entidade modificada \xe9 devolvida:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')),(0,n.kt)("h2",a({},{id:"exemplo-com-um-cliente-4d-http"}),"Exemplo com um cliente 4D HTTP"),(0,n.kt)("p",null,"O exemplo a seguir mostra como fazer o upload de um arquivo ",(0,n.kt)("em",{parentName:"p"},".pdf")," para o servidor usando o cliente 4D HTTP."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob ARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream" DOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues) If ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n')))}c.isMDXComponent=!0}}]);