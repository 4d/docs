"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24311],{796188:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=r(474848),t=r(28453);const a={id:"upload",title:"$upload"},s=void 0,d={id:"REST/upload",title:"$upload",description:"Devolve um ID do ficheiro carregado para o servidor",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/pt/20/REST/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/pt/20/REST/info"},next:{title:"API (dataClass)",permalink:"/docs/pt/20/category/api-dataclass"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Cen\xe1rio de carregamento",id:"cen\xe1rio-de-carregamento",level:2},{value:"Exemplo com um cliente 4D HTTP",id:"exemplo-com-um-cliente-4d-http",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Devolve um ID do ficheiro carregado para o servidor"}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["Publique essa peti\xe7\xe3o quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe ",(0,n.jsx)(o.code,{children:"$rawPict=true"}),". Para todos os outros ficheiros, deve passar ",(0,n.jsx)(o.code,{children:"$binary=true"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Pode modificar o tempo limite, que por defeito \xe9 de 120 segundos, passando um valor para o par\xe2metro ",(0,n.jsx)(o.code,{children:"$timeout"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"cen\xe1rio-de-carregamento",children:"Cen\xe1rio de carregamento"}),"\n",(0,n.jsx)(o.p,{children:"Imagine que pretende carregar uma imagem para atualizar o atributo imagem de uma entidade."}),"\n",(0,n.jsx)(o.p,{children:"Para carregar uma imagem (ou qualquer ficheiro bin\xe1rio), deve primeiro selecionar o ficheiro a partir da aplica\xe7\xe3o cliente. O ficheiro em si deve ser passado no **corpo ** do pedido."}),"\n",(0,n.jsx)(o.p,{children:"Depois, carrega a imagem selecionada para 4D Server usando uma peti\xe7\xe3o como:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,n.jsx)(o.p,{children:"Como resultado, o servidor devolve um ID que identifica o ficheiro:"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Resposta"}),":"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,n.jsxs)(o.p,{children:["Afterwards, you use this ID to add it to an attribute using ",(0,n.jsx)(o.a,{href:"/docs/pt/20/REST/method#methodupdate",children:(0,n.jsx)(o.code,{children:"$method=update"})})," to add the image to an entity: O pedido tem o seguinte aspecto:"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Dados POST"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Resposta"}),":"]}),"\n",(0,n.jsx)(o.p,{children:"A entidade modificada \xe9 devolvida:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"exemplo-com-um-cliente-4d-http",children:"Exemplo com um cliente 4D HTTP"}),"\n",(0,n.jsxs)(o.p,{children:["O exemplo a seguir mostra como fazer o upload de um arquivo ",(0,n.jsx)(o.em,{children:".pdf"})," para o servidor usando o cliente 4D HTTP."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob ARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream" DOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues) If ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n'})})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>d});var n=r(296540);const t={},a=n.createContext(t);function s(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);