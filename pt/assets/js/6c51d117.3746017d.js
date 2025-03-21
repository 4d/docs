"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95700"],{809867:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>a,assets:()=>t,toc:()=>m,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","description":"REMOVE PICTURE FROM LIBRARY ( refImag | nomImag )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/remove-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/remove-picture-from-library","permalink":"/docs/pt/commands/remove-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fremove-picture-from-library.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","slug":"/commands/remove-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ PICTURE FILE","permalink":"/docs/pt/commands/read-picture-file"},"next":{"title":"SET PICTURE FILE NAME","permalink":"/docs/pt/commands/set-picture-file-name"}}'),o=r("785893"),i=r("250065");let s={id:"remove-picture-from-library",title:"REMOVE PICTURE FROM LIBRARY",slug:"/commands/remove-picture-from-library",displayed_sidebar:"docs"},d=void 0,t={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"REMOVE PICTURE FROM LIBRARY"})," ( refImag | nomImag )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"refImag | nomImag"}),(0,o.jsx)(n.td,{children:"Inteiro longo, String"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de refer\xeancia ou nome da imagem da biblioteca de imagens"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando REMOVE PICTURE FROM LIBRARY elimina da biblioteca de imagens a imagem cujo n\xfamero de refer\xeancia se passa em ",(0,o.jsx)(n.em,{children:"refImag"})," ou cujo nome se passa em ",(0,o.jsx)(n.em,{children:"nomImag"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Se o n\xfamero de refer\xeancia ou nome n\xe3o correspondem a nenhuma imagem, o comando n\xe3o faz nada."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4D Server:"})," REMOVE PICTURE FROM LIBRARY n\xe3o pode ser utilizado desde um m\xe9todo executado na m\xe1quina servidor (procedimento armazenado ou trigger). Se chamar REMOVE PICTURE FROM LIBRARY numa m\xe1quina servidor, n\xe3o passa nada, se ignora a chamada."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Advert\xeancia:"})," os objetos de desenho (elementos de lista hier\xe1rquica, linhas de menu, etc.) possam fazer refer\xeancia a uma imagem da biblioteca. Seja prudente quando elimine por programa\xe7\xe3o uma imagem da biblioteca de imagens."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"O exemplo a seguir apaga a imagem #4444 da biblioteca de imagens."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0REMOVE PICTURE FROM LIBRARY(4444)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsxs)(n.p,{children:["O exemplo a seguir apaga da biblioteca de imagens toda imagem cujo nome comece pelo s\xedmbolo d\xf3lar (",(0,o.jsx)(n.em,{children:"$"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alRefImag;$asNomImag)\n\xa0For($vlImag;1;Size of array($alRefImag))\n\xa0\xa0\xa0\xa0If($asNomImag{$vlImag}="$@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REMOVE PICTURE FROM LIBRARY($alRefImag{$vlImag})\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"567"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Proibido no servidor"}),(0,o.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var a=r(667294);let o={},i=a.createContext(o);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);