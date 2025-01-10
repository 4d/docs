"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46446"],{413822:function(e,r,o){o.r(r),o.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"REST/upload","title":"$upload","description":"Devolve um ID do ficheiro carregado para o servidor","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$upload.md","sourceDirName":"REST","slug":"/REST/upload","permalink":"/docs/pt/19/REST/upload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"upload","title":"$upload"},"sidebar":"docs","previous":{"title":"$info","permalink":"/docs/pt/19/REST/info"},"next":{"title":"dataClass","permalink":"/docs/pt/19/REST/dataClass"}}'),t=o("785893"),a=o("250065");let i={id:"upload",title:"$upload"},d=void 0,s={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Cen\xe1rio de carregamento",id:"cen\xe1rio-de-carregamento",level:2},{value:"Exemplo com um cliente 4D HTTP",id:"exemplo-com-um-cliente-4d-http",level:2}];function l(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Devolve um ID do ficheiro carregado para o servidor"}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["Publique essa peti\xe7\xe3o quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe ",(0,t.jsx)(r.code,{children:"$rawPict=true"}),". Para todos os outros ficheiros, deve passar ",(0,t.jsx)(r.code,{children:"$binary=true"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Pode modificar o tempo limite, que por defeito \xe9 de 120 segundos, passando um valor para o par\xe2metro ",(0,t.jsx)(r.code,{children:"$timeout"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"cen\xe1rio-de-carregamento",children:"Cen\xe1rio de carregamento"}),"\n",(0,t.jsx)(r.p,{children:"Imagine que pretende carregar uma imagem para atualizar o atributo imagem de uma entidade."}),"\n",(0,t.jsx)(r.p,{children:"Para carregar uma imagem (ou qualquer ficheiro bin\xe1rio), deve primeiro selecionar o ficheiro a partir da aplica\xe7\xe3o cliente. O ficheiro em si deve ser passado no **corpo ** do pedido."}),"\n",(0,t.jsx)(r.p,{children:"Depois, carrega a imagem selecionada para 4D Server usando uma peti\xe7\xe3o como:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,t.jsx)(r.p,{children:"Como resultado, o servidor devolve um ID que identifica o ficheiro:"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Resposta"}),":"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,t.jsxs)(r.p,{children:["Afterwards, you use this ID to add it to an attribute using ",(0,t.jsx)(r.a,{href:"/docs/pt/19/REST/method#methodupdate",children:(0,t.jsx)(r.code,{children:"$method=update"})})," to add the image to an entity: O pedido tem o seguinte aspecto:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Dados POST"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Resposta"}),":"]}),"\n",(0,t.jsx)(r.p,{children:"A entidade modificada \xe9 devolvida:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"exemplo-com-um-cliente-4d-http",children:"Exemplo com um cliente 4D HTTP"}),"\n",(0,t.jsxs)(r.p,{children:["O exemplo a seguir mostra como fazer o upload de um arquivo ",(0,t.jsx)(r.em,{children:".pdf"})," para o servidor usando o cliente 4D HTTP."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob ARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream" DOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues) If ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n'})})]})}function u(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return i}});var n=o(667294);let t={},a=n.createContext(t);function i(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);