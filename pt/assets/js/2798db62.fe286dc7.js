"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55055"],{377609:function(e,o,d){d.r(o),d.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>t,toc:()=>i,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/base64-decode","title":"BASE64 DECODE","description":"BASE64 DECODE ( textoCodificado {; BLOB}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/base64-decode.md","sourceDirName":"commands-legacy","slug":"/commands/base64-decode","permalink":"/docs/pt/commands/base64-decode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbase64-decode.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"base64-decode","title":"BASE64 DECODE","slug":"/commands/base64-decode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACTIVITY SNAPSHOT","permalink":"/docs/pt/commands/activity-snapshot"},"next":{"title":"BASE64 ENCODE","permalink":"/docs/pt/commands/base64-encode"}}'),s=d("785893"),r=d("250065");let a={id:"base64-decode",title:"BASE64 DECODE",slug:"/commands/base64-decode",displayed_sidebar:"docs"},c=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"BASE64 DECODE"})," ( ",(0,s.jsx)(o.em,{children:"textoCodificado"})," {; ",(0,s.jsx)(o.em,{children:"BLOB"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"textoCodificado"}),(0,s.jsx)(o.td,{children:"Text, Blob"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Texto que cont\xe9m o BLOB codificado no formato Base64"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Valor decodificado (se par\xe2metro decodificado for omitido)"}),(0,s.jsx)(o.td,{}),(0,s.jsx)(o.td,{})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Blob"}),(0,s.jsx)(o.td,{children:"Text, Blob"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"BLOB decodificado"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Decodificado em formato Base64URL"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"BASE64 DECODE"})," permite decodificar o texto ou valor de BLOB codificado em formato base64 ou Base64URL passado no par\xe2metro ",(0,s.jsx)(o.em,{children:"aDecodificar"}),". . Para sasber mais sobre os formatos Base64 e Base64URL, consule a descri\xe7ao do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/base64-encode",children:"BASE64 ENCODE"})]}),"\n",(0,s.jsxs)(o.p,{children:["Passe em ",(0,s.jsx)(o.em,{children:"aDecodificar"})," o valor codificado de tipo texto ou BLOB, em Base64 ou Base64URL, a decodificar."]}),"\n",(0,s.jsxs)(o.p,{children:["Se passar o par\xe2metro ",(0,s.jsx)(o.em,{children:"decodificado"}),", o comando decodifica o conte\xfado de ",(0,s.jsx)(o.em,{children:"aDecodificar"}),"  e o retorna no par\xe2metro ",(0,s.jsx)(o.em,{children:"decodificado"}),". o par\xe2metro ",(0,s.jsx)(o.em,{children:"aDecodificar"})," \xe9 deixado intacto. Se omitir o par\xe2metro ",(0,s.jsx)(o.em,{children:"decodificado"}),"  o comando modifica diretament o conte\xfado do par\xe2metro ",(0,s.jsx)(o.em,{children:"aDecodificar"})]}),"\n",(0,s.jsx)(o.p,{children:"Nota: se for passado uma vari\xe1vel de texto para receber o que decofica o comando, recebe os bytes decodificados interpretados como utf-8."}),"\n",(0,s.jsxs)(o.p,{children:["Como padr\xe3o, se for omitido o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),", o comando utiliza uma decodifica\xe7\xe3o Base64. Se passar o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),", o comando utiliza uma decodifica\xe7\xe3o Base64URL."]}),"\n",(0,s.jsxs)(o.p,{children:["Se ",(0,s.jsx)(o.em,{children:"aDecodificar"})," conter um conte\xfado base64 n\xe3o v\xe1lido, se devolve um valor de tipo texto vazio ou blob."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Este exemplo lhe permite transferir uma imagem atrav\xe9s de um BLOB:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $sourceBlob : Blob\n\xa0var $minhaImagem : Picture\n\xa0$minhaImagem:=[pessoas]foto\n\xa0PICTURE TO BLOB($minhaImagem;$sourceBlob;".JPG")\n\xa0var $base64Text : Text\n\xa0BASE64 ENCODE($sourceBlob;$base64Text)\xa0//Codificar o texto\n\xa0\xa0// o bin\xe1rio \xe9 agora dispon\xedvel como string de caracteres no $base64Text\n\xa0\n\xa0var $base64Text : Text\n\xa0var $targetBlob : Blob\n\xa0BASE64 DECODE($base64Text;$targetBlob)\xa0//Decodificar o texto\n\xa0\xa0// a codifica\xe7\xe3o bin\xe1ria na base64 est\xe1 agora dispon\xedvel como um BLOB em $blobAlvo\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/base64-encode",children:"BASE64 ENCODE"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/generate-digest",children:"Generate digest"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.em,{children:"Vis\xe3o Geral dos comandos XML DOM"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/xml-decode",children:"XML DECODE"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"896"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,d){d.d(o,{Z:function(){return c},a:function(){return a}});var n=d(667294);let s={},r=n.createContext(s);function a(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);