"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97269"],{865009:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/get-picture-from-library","title":"GET PICTURE FROM LIBRARY","description":"GET PICTURE FROM LIBRARY ( refImag | nomImag ; imagem )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-library","permalink":"/docs/pt/commands/get-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-library.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-picture-from-library","title":"GET PICTURE FROM LIBRARY","slug":"/commands/get-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FORMATS","permalink":"/docs/pt/commands/get-picture-formats"},"next":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/pt/commands/get-picture-keywords"}}'),s=n("785893"),o=n("250065");let t={id:"get-picture-from-library",title:"GET PICTURE FROM LIBRARY",slug:"/commands/get-picture-from-library",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," ( refImag | nomImag ; ",(0,s.jsx)(r.em,{children:"imagem"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"refImag | nomImag"}),(0,s.jsx)(r.td,{children:"Inteiro longo, String"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de refer\xeancia ou Nome da imagem da biblioteca de imagens"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"imagem"}),(0,s.jsx)(r.td,{children:"Picture"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Imagem da biblioteca de imagens"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando GET PICTURE FROM LIBRARY devolve no par\xe2metro ",(0,s.jsx)(r.em,{children:"imagem"})," a imagem da biblioteca de imagens cujo n\xfamero de refer\xeancia se passa em ",(0,s.jsx)(r.em,{children:"refImag"})," ou cujo nome se passa em ",(0,s.jsx)(r.em,{children:"nomImag"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Se n\xe3o houver uma imagem com esse nome ou n\xfamero de refer\xeancia, GET PICTURE FROM LIBRARY n\xe3o modifica ",(0,s.jsx)(r.em,{children:"imagem"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(r.p,{children:["O exemplo a seguir devolve em ",(0,s.jsx)(r.em,{children:"vgMiImagen"})," a imagem cujo n\xfamero de refer\xeancia se armazena na vari\xe1vel local ",(0,s.jsx)(r.em,{children:"$vlRefImag"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0GET PICTURE FROM LIBRARY($vlRefImag;vgMinhaImagem)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(r.p,{children:["O exemplo a seguir devolve em ",(0,s.jsx)(r.em,{children:"$DDcom_Prot_MiImagen"}),' a imagem com o nome "DDcom_Prot_Boton1" armazenada na biblioteca de imagens:']}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0GET PICTURE FROM LIBRARY("XP - Aceitar";$XP_Aceitar)\n'})}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsxs)(r.p,{children:["Ver o terceiro exemplo para o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/picture-library-list",title:"PICTURE LIBRARY LIST",children:"PICTURE LIBRARY LIST"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(r.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se a imagem existe na biblioteca de imagens. Do contr\xe1rio, OK toma o valor zero."}),"\n",(0,s.jsx)(r.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsx)(r.p,{children:"Se n\xe3o houver suficiente mem\xf3ria para devolver a imagem, se gera o erro -108. Pode interceptar este erro utilizando um m\xe9todo de gest\xe3o de erros."}),"\n",(0,s.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"565"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return t}});var i=n(667294);let s={},o=i.createContext(s);function t(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);