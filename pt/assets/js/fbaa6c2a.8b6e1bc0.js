"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42207"],{293587:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/web-send-raw-data","title":"WEB SEND RAW DATA","description":"WEB SEND RAW DATA ( dados {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-send-raw-data.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-raw-data","permalink":"/docs/pt/20-R8/commands/web-send-raw-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-raw-data.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-send-raw-data","title":"WEB SEND RAW DATA","slug":"/commands/web-send-raw-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/pt/20-R8/commands/web-send-http-redirect"},"next":{"title":"WEB SEND TEXT","permalink":"/docs/pt/20-R8/commands/web-send-text"}}'),s=a("785893"),r=a("250065");let t={id:"web-send-raw-data",title:"WEB SEND RAW DATA",slug:"/commands/web-send-raw-data",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"WEB SEND RAW DATA"})," ( ",(0,s.jsx)(o.em,{children:"dados"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"dados"}),(0,s.jsx)(o.td,{children:"Blob"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Dados HTTP a enviar"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Enviar em peda\xe7os"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando [",(0,s.jsx)(o.strong,{children:"#current_title]"}),' permite ao servidor web 4D enviar dados HTTP "brutos", os quais podem estar em peda\xe7os.']}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"dados"})," cont\xe9m as duas partes padr\xe3o de uma resposta HTTP, ou seja o cabe\xe7alho e o corpo. Os dados s\xe3o enviados sem formato pr\xe9vio pelo servidor. Entretanto, 4D realiza um controle b\xe1sico sobre o cabe\xe7alho e o corpo da resposta com o fim de garantir que sejam v\xe1lidos:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Se o cabe\xe7alho estiver incompleto ou n\xe3o cumpre com as especifica\xe7\xf5es do protocolo HTTP, 4D o modifica como corresponde."}),"\n",(0,s.jsx)(o.li,{children:"Se a peti\xe7\xe3o HTTP estiver incompleta, 4D adiciona a informa\xe7\xe3o faltante. Se por exemplo desejar redirecionar a peti\xe7\xe3o, deve escrever:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-HTML",children:"\xa0\xa0\xa0HTTP/1.1 302\n\xa0\xa0\xa0Location: http://...\n"})}),"\n",(0,s.jsx)(o.p,{children:"Se apenas passar:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-HTML",children:"\xa0\xa0\xa0Location: http://...\n"})}),"\n",(0,s.jsx)(o.p,{children:"4D vai completar a peti\xe7\xe3o adicionando HTTP/1.1 302."}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"})," permite especificar que a resposta se enviar\xe1 \u201Cpicotada\u201D. O corte das respostas pode ser \xfatil quando o servidor enviar uma resposta sem conhecer seu comprimento total (se, por exemplo, a resposta ainda n\xe3o foi gerada). Todos os navegadores compat\xedveis HTTP/1.1-aceitam as respostas em peda\xe7os."]}),"\n",(0,s.jsxs)(o.p,{children:["Se passar o par\xe2metro *, o servidor web incluir\xe1 automaticamente o campo ",(0,s.jsx)(o.em,{children:"transfer-encoding"}),": ",(0,s.jsx)(o.em,{children:"chunked"})," no cabe\xe7alho da resposta, se for necess\xe1rio (pode manejar manualmente o cabe\xe7alho da resposta, se assim preferir)."]}),"\n",(0,s.jsx)(o.p,{children:"O restante da resposta tamb\xe9m ser\xe1 formatado para respeitar a sintaxe da op\xe7\xe3o chunked. As respostas picotadas cont\xe9m apenas um cabe\xe7alho e um n\xfamero indefinido de corpos."}),"\n",(0,s.jsxs)(o.p,{children:["Todas as instru\xe7\xf5es ",(0,s.jsx)(o.strong,{children:"WEB SEND RAW DATA"})," que sigam a execu\xe7\xe3o de ",(0,s.jsx)(o.strong,{children:"WEB SEND RAW DATA"}),"(data;*) dentro do mesmo m\xe9todo ser\xe3o consideradas como parte da resposta (sem importar se cont\xe9m o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),"). O servidor coloca fim ao envio em blocos quando terminar a execu\xe7\xe3o do m\xe9todo."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": se o cliente web n\xe3o for compat\xedvel o protocolo HTTP/1.1, 4D converter\xe1 automaticamente a resposta ao formato compat\xedvel HTTP/1.0 (o envio n\xe3o ser\xe1 em peda\xe7os). Entretanto, neste caso, o resultado pode n\xe3o corresponder a seus desejos. Portanto se recomenda testar se o navegador web compat\xedvel HTTP/1.1 e enviar uma resposta apropriada. Para fazer isso, pode utilizar um m\xe9todo deste tipo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $0 : Boolean\n\xa0ARRAY TEXT(arCampos;0)\n\xa0ARRAY TEXT(arValores;0)\n\xa0WEB GET HTTP HEADER(arCampos;arValores)\n\xa0$0:=False\n\xa0If(Size of array(arValores)>=3)\n\xa0\xa0\xa0\xa0If(Position("HTTP/1.1";arValores{3})>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// O navegador \xe9 compat\xedvel HTTP/1.1; $0 retorna True\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Combinado com o novo comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/web-get-http-body",children:"WEB GET HTTP BODY"})," e com os outros comandos do tema \u201CServidor web\u201D, este comando completa o conjunto de ferramentas dispon\xedveis para os desenvolvedores 4D para tratar de maneira completamente personalizada as conex\xf5es HTTP entrantes e saintes. Estas ferramentas s\xe3o apresentadas no diagrama abaixo:"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:a(589805).Z+"",width:"676",height:"374"})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(o.p,{children:["Este exemplo ilustra o uso da op\xe7\xe3o chunked com o comando ",(0,s.jsx)(o.strong,{children:"WEB SEND RAW DATA"}),". Os dados (uma sequ\xeancia de n\xfameros) s\xe3o enviadas em 100 peda\xe7os gerados rapidamente em um loop. Lembre que o cabe\xe7alho da resposta n\xe3o est\xe1 definido explicitamente: o comando o enviar\xe1 automaticamente e inserir\xe1 o campo ",(0,s.jsx)(o.em,{children:"transfer-encoding: chunked"})," nele se o par\xe2metro * for utilizado."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $cpt : Integer\n\xa0var $meu_blob : Blob\n\xa0var $sa\xedda : Text\n\xa0\n\xa0For($cpt;1;100)\n\xa0\xa0\xa0\xa0$saida:="["+String($cpt)+"]"\n\xa0\xa0\xa0\xa0TEXT TO BLOB($saida;$meu_blob;UTF8 text without length)\n\xa0\xa0\xa0\xa0WEB SEND RAW DATA($meu_blob;*)\n\xa0End for\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"815"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},589805:function(e,o,a){a.d(o,{Z:function(){return n}});let n=a.p+"assets/images/pict856016.en-f0f40e81d3278591838e7c262365beb9.png"},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return t}});var n=a(667294);let s={},r=n.createContext(s);function t(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);