"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99045],{756915:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var d=o(474848),r=o(28453);const i={id:"picture-codec-list",title:"PICTURE CODEC LIST",slug:"/commands/picture-codec-list",displayed_sidebar:"docs"},n=void 0,c={id:"commands-legacy/picture-codec-list",title:"PICTURE CODEC LIST",description:"PICTURE CODEC LIST ( arrayCodec {; arrayNomes}{; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/picture-codec-list.md",sourceDirName:"commands-legacy",slug:"/commands/picture-codec-list",permalink:"/docs/pt/commands/picture-codec-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-codec-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"picture-codec-list",title:"PICTURE CODEC LIST",slug:"/commands/picture-codec-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is picture file",permalink:"/docs/pt/commands/is-picture-file"},next:{title:"PICTURE LIBRARY LIST",permalink:"/docs/pt/commands/picture-library-list"}},a={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"PICTURE CODEC LIST"})," ( ",(0,d.jsx)(s.em,{children:"arrayCodec"})," {; ",(0,d.jsx)(s.em,{children:"arrayNomes"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"arrayCodec"}),(0,d.jsx)(s.td,{children:"Text array"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Identificadores de codecs de imagens dispon\xedveis"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"arrayNomes"}),(0,d.jsx)(s.td,{children:"Text array"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Nomes dos Codecs de imagens"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"*"}),(0,d.jsx)(s.td,{children:"Operador"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Retorna a lista de Codecs de leitura"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["O comando PICTURE CODEC LIST preenche o array ",(0,d.jsx)(s.em,{children:"arrayCodec"})," com a lista dos identificadores dos codecs de imagens que est\xe3o dispon\xedveis na m\xe1quina onde se executa. Esta lista inclui os codecs dos formatos de imagens que s\xe3o geridos nativamente por 4D."]}),"\n",(0,d.jsxs)(s.p,{children:["Os identificadores dos codecs podem ser devolvidos no array ",(0,d.jsx)(s.em,{children:"arrayCodec"})," de duas formas diferentes:"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"como uma exten\xe3o (por exemplo, \u201c.gif\u201d)"}),"\n",(0,d.jsx)(s.li,{children:"como um tipo Mime (por exemplo, \u201cImagem/jpeg\u201d)"}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota de compatibilidade"}),": Se QuickTime foi ativado na base (ver a se\xe7\xe3o ",(0,d.jsx)(s.em,{children:"Imagens"}),'), os c\xf3digos QuickTime de 4 caracteres tamb\xe9m podem ser devolvidos (por exemplo "PNTG").']}),"\n",(0,d.jsxs)(s.p,{children:["A forma retornada pelo comando depende do modo de declara\xe7\xe3o do codec ao n\xedvel do sistema operativo. O array opcional ",(0,d.jsx)(s.em,{children:"arrayNoms"})," permite recuperar o nome de cada codec. Estes nomes s\xe3o mais expl\xedcitos que os identificadores. Este array pode ser utilizado, por exemplo, para criar e mostrar um menu que liste os codecs dispon\xedveis."]}),"\n",(0,d.jsxs)(s.p,{children:["Por padr\xe3o, se n\xe3o passa o par\xe2metro ",(0,d.jsx)(s.em,{children:"*"}),", o comando devolve unicamente os codecs que podem ser utilizados para codificar (escrever) as imagens. Estes identificadores podem ser utilizados no par\xe2metro ",(0,d.jsx)(s.em,{children:"formato"})," dos comandos de exporta\xe7\xe3o de imagens ",(0,d.jsx)(s.a,{href:"/docs/pt/commands/write-picture-file",children:"WRITE PICTURE FILE"})," e ",(0,d.jsx)(s.a,{href:"/docs/pt/commands/picture-to-blob",children:"PICTURE TO BLOB"}),".",(0,d.jsx)(s.br,{}),"\nSe passa o par\xe2metro ",(0,d.jsx)(s.em,{children:"*"}),', o comando tamb\xe9m devolve a lista de codecs utilizados para decodificar (ler) as imagens. As duas listas n\xe3o s\xe3o exclusivas, certos codecs de leitura e de escrita s\xe3o id\xeanticos. Os codecs destinados a codifica\xe7\xe3o das imagens podem ser utilizadas para a decodifica\xe7\xe3o. Por outro lado, os codecs de decodifica\xe7\xe3o n\xe3o necessariamente podem ser utilizados para a codifica\xe7\xe3o. Por exemplo, o codec ".jpg" se encontrar\xe1 em ambas listas, enquanto o ".xbmp" estar\xe1 presente na lista de codecs de leitura mas n\xe3o na de escritura.']}),"\n",(0,d.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.em,{children:"Imagens"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/commands/is-picture-file",children:"Is picture file"})]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>n,x:()=>c});var d=o(296540);const r={},i=d.createContext(r);function n(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);