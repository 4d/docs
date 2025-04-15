"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59439"],{666481:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>a,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"API/OutgoingMessageClass","title":"OutgoingMessage","description":"A classe 4D.OutgoingMessage permite que voc\xea crie mensagens a serem retornadas pelas fun\xe7\xf5es do seu aplicativo em resposta a [solicita\xe7\xf5es REST] (../REST/REST_requests.md). Se a resposta for do tipo 4D.OutgoingMessage, o servidor REST n\xe3o retornar\xe1 um objeto, mas a inst\xe2ncia do objeto da classe OutgoingMessage.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/API/OutgoingMessageClass.md","sourceDirName":"API","slug":"/API/OutgoingMessageClass","permalink":"/docs/pt/API/OutgoingMessageClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FOutgoingMessageClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"OutgoingMessageClass","title":"OutgoingMessage"},"sidebar":"docs","previous":{"title":"MailAttachment","permalink":"/docs/pt/API/MailAttachmentClass"},"next":{"title":"POP3Transporter","permalink":"/docs/pt/API/POP3TransporterClass"}}'),r=n("785893"),t=n("250065");let o={id:"OutgoingMessageClass",title:"OutgoingMessage"},i=void 0,a={},l=[{value:"Exemplo",id:"exemplo",level:3},{value:"Objeto OutgoingMessage",id:"objeto-outgoingmessage",level:3},{value:".body",id:"body",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".headers",id:"headers",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".setBody()",id:"setbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".setHeader()",id:"setheader",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".setStatus()",id:"setstatus",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4}];function c(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["A classe ",(0,r.jsx)(s.code,{children:"4D.OutgoingMessage"})," permite que voc\xea crie mensagens a serem retornadas pelas fun\xe7\xf5es do seu aplicativo em resposta a [solicita\xe7\xf5es REST] (../REST/REST_requests.md). Se a resposta for do tipo ",(0,r.jsx)(s.code,{children:"4D.OutgoingMessage"}),", o servidor REST n\xe3o retornar\xe1 um objeto, mas a inst\xe2ncia do objeto da classe ",(0,r.jsx)(s.code,{children:"OutgoingMessage"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Typically, this class can be used in custom ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/http-request-handler#function-configuration",children:"HTTP request handler functions"})," or in functions declared with the ",(0,r.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#onhttpget-keyword",children:(0,r.jsx)(s.code,{children:"onHttpGet"})})," keyword and designed to handle HTTP GET requests. Tais solicita\xe7\xf5es s\xe3o usadas, por exemplo, para implementar recursos como arquivo de download, Gerar e baixar imagens, bem como receber qualquer tipo de conte\xfado por um navegador."]}),"\n",(0,r.jsxs)(s.p,{children:["Uma inst\xe2ncia desta classe \xe9 constru\xedda no Servidor 4D e pode ser enviada para o navegador pelo ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/gettingStarted",children:"4D Servidor REST"})," apenas. Essa classe permite usar tecnologias diferentes do HTTP (por exemplo, mobile)."]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R7"}),(0,r.jsx)(s.td,{children:"Classe adicionada"})]})})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(s.p,{children:["Neste exemplo, uma fun\xe7\xe3o ",(0,r.jsx)(s.code,{children:"getFile()"})," est\xe1 implementada na ",(0,r.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#datastore-class",children:"classe Datastore "})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#onhttpget-keyword",children:"pode ser chamada"})," por uma solicita\xe7\xe3o REST. O objetivo \xe9 retornar um arquivo ",(0,r.jsx)(s.strong,{children:"testFile.pdf"})," como resposta \xe0 solicita\xe7\xe3o:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'Class extends DataStoreImplementation\n\nexposed onHTTPGet Function getFile() : 4D.OutgoingMessage\n	\n	var $result:=4D.OutgoingMessage.new()\n	var $file:=File("/RESOURCES/testFile.pdf")\n	\n	$result.setBody($file.getContent())  // This is binary content\n	$result.setHeader("Content-Type"; "application/pdf")\n	return $result\n'})}),"\n",(0,r.jsx)(s.h3,{id:"objeto-outgoingmessage",children:"Objeto OutgoingMessage"}),"\n",(0,r.jsx)(s.p,{children:"Os objetos 4D.OutgoingMessage fornecem as seguintes propriedades e fun\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#body",children:[(0,r.jsx)(s.strong,{children:"body"})," : any"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#headers",children:[(0,r.jsx)(s.strong,{children:"headers"})," : Object"]}),(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setbody",children:[(0,r.jsx)(s.strong,{children:".setBody"}),"( ",(0,r.jsx)(s.em,{children:"body"})," : any )"]}),(0,r.jsx)(s.br,{}),"define a mensagem de sa\xedda ",(0,r.jsx)(s.em,{children:"body"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setheader",children:[(0,r.jsx)(s.strong,{children:".setHeader"}),"( ",(0,r.jsx)(s.em,{children:"key"})," : Text ; ",(0,r.jsx)(s.em,{children:"value"})," : Text )"]}),(0,r.jsx)(s.br,{}),"define o cabe\xe7alho de mensagem de sa\xedda ",(0,r.jsx)(s.em,{children:"chave"})," com o ",(0,r.jsx)(s.em,{children:"valor"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setstatus",children:[(0,r.jsx)(s.strong,{children:".setStatus"}),"( ",(0,r.jsx)(s.em,{children:"status"})," : Integer )"]}),(0,r.jsx)(s.br,{}),"define a propriedade ",(0,r.jsx)(s.code,{children:"status"})," com o ",(0,r.jsx)(s.em,{children:"status"}),"."]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.em,{children:"status"})," n\xe3o for um valor inteiro, um erro \xe9 gerado."]}),"\n",(0,r.jsxs)(s.p,{children:["Para obter uma lista de c\xf3digos de status HTTP, por favor, consulte a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"lista de c\xf3digo de status HTTP na Wikipedia"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["|\n| ",(0,r.jsxs)(s.a,{href:"#status",children:[(0,r.jsx)(s.strong,{children:"status"})," : Integer"]}),(0,r.jsx)(s.br,{})," o status atual da mensagem de sa\xedda               |"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Um objeto 4D.OutgoingMessage \xe9 um objeto ",(0,r.jsx)(s.a,{href:"/docs/pt/Concepts/shared",children:"n\xe3o compartilh\xe1vel"}),"."]})}),"\n",(0,r.jsx)(s.h2,{id:"body",children:".body"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"body"})," : any"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A propriedade ",(0,r.jsx)(s.code,{children:".body"})," cont\xe9m  o corpo da mensagem enviada. Os seguintes tipos de dados s\xe3o suportados na propriedade ",(0,r.jsx)(s.code,{children:".body"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"text"}),"\n",(0,r.jsx)(s.li,{children:"blob"}),"\n",(0,r.jsx)(s.li,{children:"object"}),"\n",(0,r.jsx)(s.li,{children:"image"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["A propriedade ",(0,r.jsx)(s.code,{children:".body"})," \xe9 de leitura e grava\xe7\xe3o."]}),"\n",(0,r.jsxs)(s.p,{children:["Voc\xea tamb\xe9m pode definir a propriedade ",(0,r.jsx)(s.code,{children:".body"})," usando a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"#setbody",children:(0,r.jsx)(s.code,{children:"setBody()"})}),", caso em que o cabe\xe7alho ",(0,r.jsx)(s.code,{children:"content-type"})," \xe9 automaticamente definido."]}),"\n",(0,r.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"headers"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A propriedade ",(0,r.jsx)(s.code,{children:".headers"})," cont\xe9m  os cabe\xe7alhos atuais da mensagem de sa\xedda como pares chave/valor."]}),"\n",(0,r.jsxs)(s.p,{children:["A propriedade ",(0,r.jsx)(s.code,{children:".headers"})," \xe9 somente leitura. Para definir um cabe\xe7alho, use a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"#setheader",children:(0,r.jsx)(s.code,{children:"setHeader()"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"setbody",children:".setBody()"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setBody"}),"( ",(0,r.jsx)(s.em,{children:"body"})," : any )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"body"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Corpo da mensagem de sa\xedda"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(s.code,{children:".setBody()"})," define a mensagem de sa\xedda ",(0,r.jsx)(s.em,{children:"body"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Os seguintes tipos de dados s\xe3o suportados no ",(0,r.jsx)(s.em,{children:"corpo"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Text"}),"\n",(0,r.jsx)(s.li,{children:"Blob"}),"\n",(0,r.jsx)(s.li,{children:"Object"}),"\n",(0,r.jsx)(s.li,{children:"Imagem"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Quando essa fun\xe7\xe3o \xe9 usada, o cabe\xe7alho do tipo de conte\xfado \xe9 definido automaticamente dependendo do tipo ",(0,r.jsx)(s.em,{children:"corpo"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Content-Type:text/plain se o corpo \xe9 um Texto"}),"\n",(0,r.jsx)(s.li,{children:"Content-Type:application/octet-stream se o corpo \xe9 um Blob"}),"\n",(0,r.jsx)(s.li,{children:"Content-Type:application/json se o corpo \xe9 um objeto"}),"\n",(0,r.jsx)(s.li,{children:"Conte\xfado-Tipo:image/jpeg, imagem/gif... se o corpo for uma imagem"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.em,{children:"body"})," n\xe3o for de um tipo de valor suportado, um erro \xe9 retornado."]}),"\n",(0,r.jsx)(s.h2,{id:"setheader",children:".setHeader()"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setHeader"}),"( ",(0,r.jsx)(s.em,{children:"key"})," : Text ; ",(0,r.jsx)(s.em,{children:"value"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"|"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Propriedade de cabe\xe7alho para definir"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"value"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Valor da propriedade do cabe\xe7alho"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(s.code,{children:".setHeader()"})," define o cabe\xe7alho de mensagem de sa\xedda ",(0,r.jsx)(s.em,{children:"chave"})," com o ",(0,r.jsx)(s.em,{children:"valor"}),". Se ambos os par\xe2metros n\xe3o s\xe3o valores de texto, um erro \xe9 gerado."]}),"\n",(0,r.jsxs)(s.p,{children:["Ao retornar uma inst\xe2ncia de objeto 4D.OutgoingMessage, 4D automaticamente define alguns cabe\xe7alhos (por exemplo, ",(0,r.jsx)(s.code,{children:"Set-Cookie"})," com ",(0,r.jsx)(s.code,{children:"WASID4D=..."})," e ",(0,r.jsx)(s.code,{children:"4DSID__ProjectName_=...."}),")."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Se voc\xea definir um ",(0,r.jsx)(s.em,{children:"valor"}),' para o cabe\xe7alho "Content-Type" ',(0,r.jsx)(s.em,{children:"chave"}),", certifique-se de chamar esta fun\xe7\xe3o depois da chamada para ",(0,r.jsx)(s.a,{href:"#setbody",children:(0,r.jsx)(s.code,{children:"setBody()"})}),", porque ",(0,r.jsx)(s.code,{children:"setBody()"}),' preenche automaticamente este cabe\xe7alho. Para obter uma lista de valores de cabe\xe7alho "Content-Type", por favor, consulte a ',(0,r.jsxs)(s.a,{href:"/docs/pt/commands/web-send-blob",children:["documenta\xe7\xe3o do ",(0,r.jsx)(s.code,{children:"WEB SEND BLOB"})]}),"."]})}),"\n",(0,r.jsx)(s.h2,{id:"setstatus",children:".setStatus()"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setStatus"}),"( ",(0,r.jsx)(s.em,{children:"status"})," : Integer )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Status para definir"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(s.code,{children:".setStatus()"})," define a propriedade ",(0,r.jsx)(s.code,{children:"status"})," com o ",(0,r.jsx)(s.em,{children:"status"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.em,{children:"status"})," n\xe3o for um valor inteiro, um erro \xe9 gerado."]}),"\n",(0,r.jsxs)(s.p,{children:["Para obter uma lista de c\xf3digos de status HTTP, por favor, consulte a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"lista de c\xf3digo de status HTTP na Wikipedia"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"status"})," : Integer"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A propriedade ",(0,r.jsx)(s.code,{children:".status"})," cont\xe9m  o status atual da mensagem de sa\xedda . Essa propriedade pode ser definida com a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"setstatus",children:(0,r.jsx)(s.code,{children:"setStatus()"})}),"."]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var d=n(667294);let r={},t=d.createContext(r);function o(e){let s=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);