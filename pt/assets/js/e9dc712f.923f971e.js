"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47940"],{389188:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/http-request","title":"HTTP Request","description":"HTTP Request ( metodoHTTP ; url ; conte\xfado ; resultado {; nomCab ; valCab}{; *} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/http-request.md","sourceDirName":"commands-legacy","slug":"/commands/http-request","permalink":"/docs/pt/20-R7/commands/http-request","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-request.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-request","title":"HTTP Request","slug":"/commands/http-request","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Parse message","permalink":"/docs/pt/20-R7/commands/http-parse-message"},"next":{"title":"HTTP SET CERTIFICATES FOLDER","permalink":"/docs/pt/20-R7/commands/http-set-certificates-folder"}}'),d=n("785893"),r=n("250065");let t={id:"http-request",title:"HTTP Request",slug:"/commands/http-request",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"HTTP Request"})," ( ",(0,d.jsx)(s.em,{children:"metodoHTTP"})," ; ",(0,d.jsx)(s.em,{children:"url"})," ; ",(0,d.jsx)(s.em,{children:"conte\xfado"})," ; ",(0,d.jsx)(s.em,{children:"resultado"})," {; ",(0,d.jsx)(s.em,{children:"nomCab"})," ; ",(0,d.jsx)(s.em,{children:"valCab"}),"}{; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"metodoHTTP"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"M\xe9todo HTTP para a solicita\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"url"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"URL \xe0 qual enviar a solicita\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"conte\xfado"}),(0,d.jsx)(s.td,{children:"Text, Blob, Picture, Object"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Conte\xfado do corpo(body)da solicita\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"resultado"}),(0,d.jsx)(s.td,{children:"Text, Blob, Picture, Object"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Resultado da solicita\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"nomCab"}),(0,d.jsx)(s.td,{children:"Text array"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Nomes dos cabe\xe7alhos da solicita\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Nomes dos cabe\xe7alhos devolvidos"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"valCab"}),(0,d.jsx)(s.td,{children:"Text array"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Valores dos cabe\xe7alhos da solicita\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Valores dos cabe\xe7alhos devolvidos"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"*"}),(0,d.jsx)(s.td,{children:"Operador"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Se passada, a conex\xe3o se mant\xe9m (keep-alive)Se omitida, a conex\xe3o \xe9 fechada automaticamente."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Resultado"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"C\xf3digo de estado HTTP"})]})]})]}),"\n",(0,d.jsx)(s.admonition,{title:"Compatibilidade",type:"info",children:(0,d.jsxs)(s.p,{children:["Esse comando \xe9 mantido apenas por motivos de compatibilidade. Agora \xe9 recomend\xe1vel usar ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/API/HTTPRequestClass",children:(0,d.jsx)(s.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,d.jsx)(s.h4,{id:""}),"\n",(0,d.jsxs)(s.p,{children:["O comando ",(0,d.jsx)(s.strong,{children:"HTTP Request"})," permite enviar todo tipo de peti\xe7\xe3o HTTP a um URL espec\xedfico e processar a resposta do servidor HTTP."]}),"\n",(0,d.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(s.em,{children:"metodoHTTP"})," o m\xe9todo HTTP da peti\xe7\xe3o. Pode utilizar uma das seguintes constantes, do tema ",(0,d.jsx)(s.em,{children:"HTTP Client"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Constante"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{children:"Valor"}),(0,d.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP DELETE method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"DELETE"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP GET method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"GET"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"}),". Equivale a utilizar o comando ",(0,d.jsx)(s.em,{children:"HTTP Get"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP HEAD method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"HEAD"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP OPTIONS method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"OPTIONS"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP POST method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"POST"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP PUT method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"PUT"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"HTTP TRACE method"}),(0,d.jsx)(s.td,{children:"Cadeia"}),(0,d.jsx)(s.td,{children:"TRACE"}),(0,d.jsxs)(s.td,{children:["Ver o ",(0,d.jsx)(s.em,{children:"RFC 2616"})]})]})]})]}),"\n",(0,d.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(s.em,{children:"url"})," ou URL onde queira enviar a solicita\xe7\xe3o. A sintaxes a utilizar \xe9:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-RAW",children:"http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]\n"})}),"\n",(0,d.jsx)(s.p,{children:"Por exemplo, voc\xea pode passar as seguintes cadeias:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-RAW",children:'\xa0\xa0\xa0 http://www.myserver.com\xa0\xa0\xa0 http://www.myserver.com/path\xa0\xa0\xa0 http://www.myserver.com/path?name="jones"\xa0\xa0\xa0 https://www.myserver.com/login (*)\xa0\xa0\xa0 http://123.45.67.89:8083\xa0\xa0\xa0 http://john:smith@123.45.67.89:8083\xa0\xa0\xa0 http://[2001:0db8:0000:0000:0000:ff00:0042:8329]\xa0\xa0\xa0 http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)\n'})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.em,{children:"(*)"})," Durante as solicita\xe7\xf5es HTTPS, a autoridade do certificado n\xe3o se verifica.",(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.em,{children:"(**)"})," Para saber mais sobre endere\xe7os IPv6 em urls, veja ",(0,d.jsx)(s.a,{href:"https://www.ietf.org/rfc/rfc2732.txt",children:"RFC 2732"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(s.em,{children:"conte\xfado"})," o corpo (body) da peti\xe7\xe3o. Os dados passados neste par\xe2metro dependem do m\xe9todo HTTP da solicita\xe7\xe3o.",(0,d.jsx)(s.br,{}),"\nPode enviar dados de tipo texto, BLOB, imagem ou objeto. Quando o content-type n\xe3o \xe9 especificado, \xe9 utilizado os seguintes tipos:"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"para os textos: texto/plano - UTF8"}),"\n",(0,d.jsx)(s.li,{children:"para os BLOBs: aplica\xe7\xe3o/byte-stream"}),"\n",(0,d.jsx)(s.li,{children:"para as imagens: tipo MIME conhecido (best for Web)."}),"\n",(0,d.jsxs)(s.li,{children:["para os objetos ",(0,d.jsx)(s.em,{children:"C_OBJECT"}),": aplica\xe7\xe3o/json"]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["Depois da execu\xe7\xe3o do comando, o par\xe2metro ",(0,d.jsx)(s.em,{children:"resposta"})," recupera o resultado do pedido devolvido pelo servidor. Este resultado corresponde ao corpo (body) da resposta, sem os cabe\xe7alhos (headers). Pode passar vari\xe1veis de diferentes tipos em ",(0,d.jsx)(s.em,{children:"resposta"}),":"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Texto: quando o resultado se espera em forma de texto codificado em UTF16 ou em forma de referencia \xe1rvore XML."}),"\n",(0,d.jsx)(s.li,{children:"BLOB: quando o resultado se espera em forma bin\xe1ria."}),"\n",(0,d.jsx)(s.li,{children:"Imagem: quando o resultado se espera em forma de imagem."}),"\n",(0,d.jsxs)(s.li,{children:["Objeto ",(0,d.jsx)(s.em,{children:"C_OBJECT"}),": quando o resultado esperado \xe9 um objeto."]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," quando se passa uma vari\xe1vel de texto em ",(0,d.jsx)(s.em,{children:"resposta"}),", 4D tentar\xe1 decodificar os dados devolvidos desde o servidor. 4D primeiro tenta recuperar o conjunto de caracteres do cabe\xe7alho de ",(0,d.jsx)(s.em,{children:"tipo de conte\xfado"}),", depois do conte\xfado utilizando um BOM e, finalmente, busca qualquer atributo ",(0,d.jsx)(s.em,{children:"http-equiv charset"})," (em conte\xfado html) ou ",(0,d.jsx)(s.em,{children:"codifica\xe7\xe3o"})," (para xml). Se n\xe3o puder detectar nenhum charset, 4D tentar\xe1 decodificar a resposta em ANSI. Se a convers\xe3o falhar, o texto resultante ficar\xe1 vazio. Se n\xe3o tiver certeza se o servidor devolve uma informa\xe7\xe3o charset ou BOM, mas conhece a codifica\xe7\xe3o, \xe9 preciso passar ",(0,d.jsx)(s.em,{children:"resposta"})," em BLOB e chamar ao ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/convert-to-text",children:"Convert to text"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Se passar uma vari\xe1vel de tipo objeto no par\xe2metro ",(0,d.jsx)(s.em,{children:"resposta"}),', se a peti\xe7\xe3o devolver um resultado com o conte\xfado tipo "aplica\xe7\xe3o/json" (ou "algo/json"), 4D tenta analisar o conte\xfado JSON para gerar o objeto. Sen\xe3o um objeto ',(0,d.jsx)(s.em,{children:"4DBlob"})," \xe9 retornado."]}),"\n",(0,d.jsx)(s.p,{children:"Se o resultado retornado pelo servidor n\xe3o corresponder ao tipo de vari\xe1vel de respsota, ser\xe1 deixado em branco."}),"\n",(0,d.jsxs)(s.p,{children:["Em ",(0,d.jsx)(s.em,{children:"nomCab"})," e ",(0,d.jsx)(s.em,{children:"valoresCab"})," passe os arrays que cont\xe9m os nomes e os valores dos cabe\xe7alhos da solicita\xe7\xe3o."]}),"\n",(0,d.jsx)(s.p,{children:"Depois da execu\xe7\xe3o do m\xe9todo, estes arrays cont\xe9m os nomes e os valores dos cabe\xe7alhos devolvidos pelo servidor HTTP. Especificamente, este principio lhe permite administrar seus cookies."}),"\n",(0,d.jsxs)(s.p,{children:["O par\xe2metro ",(0,d.jsx)(s.em,{children:"*"})," permite ativar o mecanismo keep-alive para a conex\xe3o ao servidor. Por padr\xe3o, este par\xe2metro se omite, keep-alive n\xe3o est\xe1 ativo."]}),"\n",(0,d.jsxs)(s.p,{children:["O comando devolve o c\xf3digo do estado HTTP padr\xe3o (200=OK...) tal qual foi devolvido pelo servidor. A lista de c\xf3digos de estado HTTP est\xe1 no ",(0,d.jsx)(s.em,{children:"RFC 2616"}),".",(0,d.jsx)(s.br,{}),"\nCaso a conex\xe3o ao servido n\xe3o seja poss\xedvel por uma raz\xe3o relacionada com a rede (DNS Failed, Server not reachable...), o comando devolve 0 e \xe9 gerado um erro.Voc\xea pode intercept\xe1-lo usando um m\xe9todo instalado pelo comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsx)(s.p,{children:"Elimina\xe7\xe3o de um registro em uma base remota:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0var $response : Text\n\xa0$body_t:="{record_id:25}"\n\xa0$httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t;$response)\n'})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," Voc\xea deve processar a solicita\xe7\xe3o da maneira apropriada no servidor remoto, ",(0,d.jsx)(s.strong,{children:"HTTP Request"})," somente se encarrega da peti\xe7\xe3o e do resultado devolvido."]}),"\n",(0,d.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsx)(s.p,{children:"Adicionar um registro a uma base remota:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0var $response : Text\n\xa0$body_t:=\"{fName:'john',fName:'Doe'}\"\n\xa0$httpStatus_l:=HTTP Request(HTTP PUT method;\"database.example.com\";$body_t;$response)\n"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," Voc\xea deve processar a solicita\xe7\xe3o da maneira apropriada no servidor remoto, ",(0,d.jsx)(s.strong,{children:"HTTP Request"})," somente se encarrega da peti\xe7\xe3o e do resultado devolvido."]}),"\n",(0,d.jsx)(s.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,d.jsx)(s.p,{children:"Peti\xe7\xe3o para adicionar um registro em JSON a um banco de dados remoto:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0var $content : Object\n\xa0OB SET($content;"lastname";"Doe";"firstname";"John")\n\xa0$result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)\n'})}),"\n",(0,d.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/http-get",children:"HTTP Get"})}),"\n",(0,d.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero do comando"}),(0,d.jsx)(s.td,{children:"1158"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread-seguro"}),(0,d.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var o=n(667294);let d={},r=o.createContext(d);function t(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);