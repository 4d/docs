"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56201"],{925506:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>m,default:()=>c,assets:()=>d,toc:()=>t,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/picture-library-list","title":"PICTURE LIBRARY LIST","description":"PICTURE LIBRARY LIST ( refsImagem ; nomsImagem )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/picture-library-list.md","sourceDirName":"commands-legacy","slug":"/commands/picture-library-list","permalink":"/docs/pt/commands/picture-library-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-library-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"picture-library-list","title":"PICTURE LIBRARY LIST","slug":"/commands/picture-library-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PICTURE CODEC LIST","permalink":"/docs/pt/commands/picture-codec-list"},"next":{"title":"PICTURE PROPERTIES","permalink":"/docs/pt/commands/picture-properties"}}'),s=a("785893"),i=a("250065");let o={id:"picture-library-list",title:"PICTURE LIBRARY LIST",slug:"/commands/picture-library-list",displayed_sidebar:"docs"},m=void 0,d={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PICTURE LIBRARY LIST"})," ( ",(0,s.jsx)(n.em,{children:"refsImagem"})," ; ",(0,s.jsx)(n.em,{children:"nomsImagem"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refsImagem"}),(0,s.jsx)(n.td,{children:"Integer array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfameros de refer\xeancia dos gr\xe1ficos da biblioteca de Imagens"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomsImagem"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nomes dos gr\xe1ficos da biblioteca de Imagens"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando PICTURE LIBRARY LIST devolve os n\xfameros de refer\xeancia e os nomes das imagens armazenadas na biblioteca de imagens do banco de dados."}),"\n",(0,s.jsxs)(n.p,{children:["Depois de cham\xe1-lo, voc\xea recupera os n\xfameros de refer\xeancia no array ",(0,s.jsx)(n.em,{children:"refsImagem"})," e os nomes no array ",(0,s.jsx)(n.em,{children:"nomsImagem"}),". Os dois arrays est\xe3o sincronizados: o elemento n de ",(0,s.jsx)(n.em,{children:"refsImagem"})," \xe9 o n\xfamero de refer\xeancia da imagem da biblioteca cujo nome \xe9 devolvido no elemento n de ",(0,s.jsx)(n.em,{children:"nomsImagem"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se for necess\xe1rio, o comando cria e dimensiona automaticamente os arrays ",(0,s.jsx)(n.em,{children:"refsImagem"})," e ",(0,s.jsx)(n.em,{children:"nomsImagem."})]}),"\n",(0,s.jsx)(n.p,{children:"A longitude m\xe1xima do nome de uma imagem da biblioteca \xe9 de 255 caracteres."}),"\n",(0,s.jsx)(n.p,{children:"Se a biblioteca de imagens estiver vazia, os dois arrays devolvidos estar\xe3o vazios."}),"\n",(0,s.jsxs)(n.p,{children:["Para obter o n\xfamero de imagens armazenadas atualmente na biblioteca de imagens, utilize o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/size-of-array",title:"Size of Array",children:"Size of Array"})," para obter o tamanho de um dos dois arrays."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["O c\xf3digo a seguir devolve o cat\xe1logo da biblioteca de imagens nos arrays ",(0,s.jsx)(n.em,{children:"alRefImag"})," e ",(0,s.jsx)(n.em,{children:"asNomImag"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0PICTURE LIBRARY LIST(alRefImag;asNomImag)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo a seguir prova se a biblioteca de imagens est\xe1 vazia ou n\xe3o:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST(alRefImag;asNomImag)\n\xa0If(Size of array(alRefImag)=0)\n\xa0\xa0\xa0\xa0ALERT("A biblioteca de imagens est\xe1 vazia.")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("A biblioteca de imagens cont\xe9m "+String(Size of array(alRefImag))+" imagens.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo a seguir exporta a biblioteca de imagens a um documento armazenado no disco:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alRefImag ;$asNomImag)\n\xa0$vlNbImagens:=Size of array($alRefImag)\n\xa0If($vlNbImagens>0)\n\xa0\xa0\xa0\xa0SET CHANNEL(12;"")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTag:="4DV6PICTURELIBRARYEXPORT"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vsTag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbImagens)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlImagem;1;$vlNbImagens)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlRefImag:=$alRefImag{$vlImagem}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNomImag:=$asNomImag{$vlImagem}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PICTURE FROM LIBRARY($alRefImag{$vlimagem};$vgImagem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlRefImag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vsNomImag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vgImagem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlImagem:=$vlImagem+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0gErro:=-108\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(gErro#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("A biblioteca de imagens n\xe3o pode ser exportada, trate novamente com mais mem\xf3ria.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT(Document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("A biblioteca de imagens est\xe1 vazia.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return m},a:function(){return o}});var r=a(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);