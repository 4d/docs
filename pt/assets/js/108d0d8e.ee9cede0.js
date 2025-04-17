"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74203"],{327789:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>s});var a=JSON.parse('{"id":"REST/upload","title":"$upload","description":"Devolve um ID do ficheiro carregado para o servidor","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/REST/$upload.md","sourceDirName":"REST","slug":"/REST/upload","permalink":"/docs/pt/REST/upload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"upload","title":"$upload"},"sidebar":"docs","previous":{"title":"$singleton","permalink":"/docs/pt/REST/singleton"},"next":{"title":"API (dataClass)","permalink":"/docs/pt/category/api-dataclass"}}'),o=r("785893"),t=r("250065");let i={id:"upload",title:"$upload"},s=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Cen\xe1rio de carregamento",id:"cen\xe1rio-de-carregamento",level:2},{value:"Exemplo com um cliente 4D HTTP",id:"exemplo-com-um-cliente-4d-http",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Devolve um ID do ficheiro carregado para o servidor"}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Publique essa peti\xe7\xe3o quando quiser fazer upload de um ficheiro para o servidor. Si tiene una imagen, pase ",(0,o.jsx)(n.code,{children:"$rawPict=true"}),". Para todos los dem\xe1s archivos, se pasa ",(0,o.jsx)(n.code,{children:"$binary=true"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Puede modificar el tiempo de espera, que por defecto es de 120 segundos, pasando un valor al par\xe1metro ",(0,o.jsx)(n.code,{children:"$timeout"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"cen\xe1rio-de-carregamento",children:"Cen\xe1rio de carregamento"}),"\n",(0,o.jsx)(n.p,{children:"Imagine que pretende carregar uma imagem para atualizar o atributo imagem de uma entidade."}),"\n",(0,o.jsxs)(n.p,{children:["Para carregar uma imagem (ou qualquer ficheiro bin\xe1rio), deve primeiro selecionar o ficheiro a partir da aplica\xe7\xe3o cliente. El archivo en s\xed debe pasarse en el ",(0,o.jsx)(n.strong,{children:"cuerpo"})," de la petici\xf3n."]}),"\n",(0,o.jsx)(n.p,{children:"Depois, carrega a imagem selecionada para 4D Server usando uma peti\xe7\xe3o como:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,o.jsx)(n.p,{children:"Como resultado, o servidor devolve um ID que identifica o ficheiro:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,o.jsxs)(n.p,{children:["Posteriormente, voc\xea usa essa ID para adicion\xe1-la a um atributo usando ",(0,o.jsx)(n.a,{href:"/docs/pt/REST/method#methodupdate",children:(0,o.jsx)(n.code,{children:"$method=update"})})," para adicionar a imagem a uma entidade. O pedido tem o seguinte aspecto:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Datos POST"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"A entidade modificada \xe9 devolvida:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-com-um-cliente-4d-http",children:"Exemplo com um cliente 4D HTTP"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo muestra c\xf3mo subir un archivo ",(0,o.jsx)(n.em,{children:".pdf"})," al servidor utilizando el cliente 4D HTTP."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n	var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n	ALERT(String($result)+" Error")\nEnd if\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var a=r(667294);let o={},t=a.createContext(o);function i(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);