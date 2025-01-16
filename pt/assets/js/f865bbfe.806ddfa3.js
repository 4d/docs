"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70018"],{229265:function(e,s,d){d.r(s),d.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/picture-codec-list","title":"PICTURE CODEC LIST","description":"PICTURE CODEC LIST ( arrayCodec {; arrayNomes}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/picture-codec-list.md","sourceDirName":"commands-legacy","slug":"/commands/picture-codec-list","permalink":"/docs/pt/commands/picture-codec-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-codec-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"picture-codec-list","title":"PICTURE CODEC LIST","slug":"/commands/picture-codec-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is picture file","permalink":"/docs/pt/commands/is-picture-file"},"next":{"title":"PICTURE LIBRARY LIST","permalink":"/docs/pt/commands/picture-library-list"}}'),o=d("785893"),n=d("250065");let i={id:"picture-codec-list",title:"PICTURE CODEC LIST",slug:"/commands/picture-codec-list",displayed_sidebar:"docs"},c=void 0,t={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"PICTURE CODEC LIST"})," ( ",(0,o.jsx)(s.em,{children:"arrayCodec"})," {; ",(0,o.jsx)(s.em,{children:"arrayNomes"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"arrayCodec"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Identificadores de codecs de imagens dispon\xedveis"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"arrayNomes"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes dos Codecs de imagens"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Retorna a lista de Codecs de leitura"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando PICTURE CODEC LIST preenche o array ",(0,o.jsx)(s.em,{children:"arrayCodec"})," com a lista dos identificadores dos codecs de imagens que est\xe3o dispon\xedveis na m\xe1quina onde se executa. Esta lista inclui os codecs dos formatos de imagens que s\xe3o geridos nativamente por 4D."]}),"\n",(0,o.jsxs)(s.p,{children:["Os identificadores dos codecs podem ser devolvidos no array ",(0,o.jsx)(s.em,{children:"arrayCodec"})," de duas formas diferentes:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"como uma exten\xe3o (por exemplo, \u201C.gif\u201D)"}),"\n",(0,o.jsx)(s.li,{children:"como um tipo Mime (por exemplo, \u201CImagem/jpeg\u201D)"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota de compatibilidade"}),": Se QuickTime foi ativado na base (ver a se\xe7\xe3o ",(0,o.jsx)(s.em,{children:"Imagens"}),'), os c\xf3digos QuickTime de 4 caracteres tamb\xe9m podem ser devolvidos (por exemplo "PNTG").']}),"\n",(0,o.jsxs)(s.p,{children:["A forma retornada pelo comando depende do modo de declara\xe7\xe3o do codec ao n\xedvel do sistema operativo. O array opcional ",(0,o.jsx)(s.em,{children:"arrayNoms"})," permite recuperar o nome de cada codec. Estes nomes s\xe3o mais expl\xedcitos que os identificadores. Este array pode ser utilizado, por exemplo, para criar e mostrar um menu que liste os codecs dispon\xedveis."]}),"\n",(0,o.jsxs)(s.p,{children:["Por padr\xe3o, se n\xe3o passa o par\xe2metro ",(0,o.jsx)(s.em,{children:"*"}),", o comando devolve unicamente os codecs que podem ser utilizados para codificar (escrever) as imagens. Estes identificadores podem ser utilizados no par\xe2metro ",(0,o.jsx)(s.em,{children:"formato"})," dos comandos de exporta\xe7\xe3o de imagens ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/write-picture-file",children:"WRITE PICTURE FILE"})," e ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/picture-to-blob",children:"PICTURE TO BLOB"}),".",(0,o.jsx)(s.br,{}),"\nSe passa o par\xe2metro ",(0,o.jsx)(s.em,{children:"*"}),', o comando tamb\xe9m devolve a lista de codecs utilizados para decodificar (ler) as imagens. As duas listas n\xe3o s\xe3o exclusivas, certos codecs de leitura e de escrita s\xe3o id\xeanticos. Os codecs destinados a codifica\xe7\xe3o das imagens podem ser utilizadas para a decodifica\xe7\xe3o. Por outro lado, os codecs de decodifica\xe7\xe3o n\xe3o necessariamente podem ser utilizados para a codifica\xe7\xe3o. Por exemplo, o codec ".jpg" se encontrar\xe1 em ambas listas, enquanto o ".xbmp" estar\xe1 presente na lista de codecs de leitura mas n\xe3o na de escritura.']}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"Imagens"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/is-picture-file",children:"Is picture file"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"992"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,d){d.d(s,{Z:function(){return c},a:function(){return i}});var r=d(667294);let o={},n=r.createContext(o);function i(e){let s=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);