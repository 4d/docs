"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2451"],{705922:function(e,a,o){o.r(a),o.d(a,{default:()=>l,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/set-picture-metadata","title":"SET PICTURE METADATA","description":"SET PICTURE METADATA ( imagem ; nomeMeta ; conteudoMeta {; nomeMeta2 ; conteudoMeta2 ; ... ; nomeMetaN ; conteudoMetaN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-metadata","permalink":"/docs/pt/commands/set-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-metadata.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-picture-metadata","title":"SET PICTURE METADATA","slug":"/commands/set-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE FILE NAME","permalink":"/docs/pt/commands/set-picture-file-name"},"next":{"title":"SET PICTURE TO LIBRARY","permalink":"/docs/pt/commands/set-picture-to-library"}}'),n=o("785893"),s=o("250065");let d={id:"set-picture-metadata",title:"SET PICTURE METADATA",slug:"/commands/set-picture-metadata",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Nota",id:"nota",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"SET PICTURE METADATA"})," ( ",(0,n.jsx)(a.em,{children:"imagem"})," ; ",(0,n.jsx)(a.em,{children:"nomeMeta"})," ; ",(0,n.jsx)(a.em,{children:"conteudoMeta"})," {; ",(0,n.jsx)(a.em,{children:"nomeMeta2"})," ; ",(0,n.jsx)(a.em,{children:"conteudoMeta2"})," ; ... ; ",(0,n.jsx)(a.em,{children:"nomeMetaN"})," ; ",(0,n.jsx)(a.em,{children:"conteudoMetaN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"imagem"}),(0,n.jsx)(a.td,{children:"Picture"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Imagem cujos metadados voc\xea deseja estabelecer"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"nomeMeta"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Nome ou caminho do bloco a ser estabelecido"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"conteudoMeta"}),(0,n.jsx)(a.td,{children:"Variable"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Conte\xfado do metadado"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["O comando SET PICTURE METADATA permite escrever ou modificar o conte\xfado dos metadados (ou meta-etiquetas) presentes em ",(0,n.jsx)(a.em,{children:"imagem"})," (campo ou vari\xe1vel imagem 4D)."]}),"\n",(0,n.jsx)(a.p,{children:"Os metadados s\xe3o informa\xe7\xe3o adicional inserida nas imagens. 4D permite manipular quatro tipos de metadados padr\xe3o: EXIF, GPS, IPTC e TIFF."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota:"})," para uma descri\xe7\xe3o detalhada destes tipos de metadados, pode consultar os seguintes documentos: ",(0,n.jsx)(a.a,{href:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf",children:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf"})," (IPTC) e ",(0,n.jsx)(a.a,{href:"http://exif.org/Exif2-2.PDF",children:"http://exif.org/Exif2-2.PDF"})," (TIFF, EXIF e GPS)."]}),"\n",(0,n.jsxs)(a.p,{children:["No par\xe2metro ",(0,n.jsx)(a.em,{children:"nomMeta"}),", passe uma string especificando o tipo de metadado a escrever ou modificar. Pode passar:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["uma das constantes do tema ",(0,n.jsx)(a.em,{children:"Picture Metadata Names"}),'. Este tema agrupa todas as etiquetas compat\xedveis com 4D. Cada constante cont\xe9m uma rota de etiqueta (por exemplo, "TIFF/DateTime"),']}),"\n",(0,n.jsx)(a.li,{children:'o nome de un bloco completo de metadados ("TIFF", "EXIF", "GPS" ou "IPTC"),'}),"\n",(0,n.jsx)(a.li,{children:'uma string vazia ("").'}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Passe os novos valores do metadado no par\xe2metro ",(0,n.jsx)(a.em,{children:"conte\xfadoMeta"}),":"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Se passa uma constante de rota de etiqueta em ",(0,n.jsx)(a.em,{children:"nomMeta"}),", passe diretamente em ",(0,n.jsx)(a.em,{children:"conteudoMeta"})," o valor a escrever ou uma das constantes do tema ",(0,n.jsx)(a.em,{children:"Picture Metadata Values"}),'. O valor pode ser de tipo Texto, Inteiro longo, Real, Data ou Hora, de acordo com o metadado especificado. Pode utilizar um array se o metadado contiver mais de um valor. Se passa uma string, deve ser formatada em XML (padr\xe3o XMP). Pode passar uma string vazia ("") para apagar todo metadado existente.']}),"\n",(0,n.jsxs)(a.li,{children:["Se passa um nome de bloco ou uma string vazia em ",(0,n.jsx)(a.em,{children:"nomMeta"}),", passe em ",(0,n.jsx)(a.em,{children:"conte\xfadoMeta"})," a refer\xeancia XML DOM do elemento que cont\xe9m os metadados a escrever. No caso de uma string vazia, todos os metadados ser\xe3o modificados."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Aten\xe7\xe3o:"})," certos metadados est\xe3o em modo s\xf3 de leitura e portanto n\xe3o podem ser modificados pelo comando ",(0,n.jsx)(a.strong,{children:"SET PICTURE METADATA"}),", por exemplo TIFF XResolution/TIFF YResolution, EXIF Color Space ou EXIF Pixel X Dimension/EXIF Pixel Y Dimension."]}),"\n",(0,n.jsx)(a.p,{children:"Em Windows, se ocorre um erro durante a execu\xe7\xe3o do comando, a vari\xe1vel OK toma o valor 0. Note que em Mac OS, por raz\xf5es t\xe9cnicas, os erros de escritura de metadados n\xe3o s\xe3o detectados. Portanto este comando n\xe3o modifica a vari\xe1vel OK em MacOS."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"S\xf3 certos formatos de imagens (especificamente JPEG e TIFF) suportam os metadados. Pelo contr\xe1rio, os formatos tais como GIF ou BMP n\xe3o aceitam os metadados. Quando converte uma imagem com metadados a um formato que n\xe3o os suporta, se perde a informa\xe7\xe3o."}),"\n",(0,n.jsx)(a.li,{children:"Em macOS vers\xe3o 10.7 (Lion), um bug do framework nativo utilizado para a codifica\xe7\xe3o e decodifica\xe7\xe3o dos metadados pode causar erros de precis\xe3o nas coordenadas de GPS. Neste caso, se recomenda uma atualiza\xe7\xe3o a macOS 10.8 (Mountain Lion) ou 10.9 (Maverick)."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(a.p,{children:"Escritura do bloqueio GPS sob uma refer\xeancia DOM:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0var $domMetas : Text\n\xa0$domMetas:=DOM Parse XML source("metas.xml")\n\xa0var $gpsRef : Text\n\xa0$gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET PICTURE METADATA(vImage;"GPS";$refGPS)\n\xa0\xa0//$gpsRef realmente aponta ao elemento GPS\n\xa0\xa0\xa0\xa0...\n\xa0End if\n\xa0DOM CLOSE XML($domMetas)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(a.p,{children:"Escrita do bloco GPS via uma refer\xeancia DOM:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0var $domMetas : Text\n\xa0$domMetas:=DOM Parse XML source("metas.xml")\n\xa0var $gpsRef : Text\n\xa0$gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET PICTURE METADATA(vImage;"GPS";$refGPS)\n\xa0\xa0//$gpsRef realmente aponta ao elemento GPS\n\xa0\xa0\xa0\xa0...\n\xa0End if\n\xa0DOM CLOSE XML($domMetas)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"nota",children:"Nota"}),"\n",(0,n.jsx)(a.p,{children:"Quanto todos os metadados s\xe3o manipulados via uma refer\xeancia de elementos DOM, as etiquetas s\xe3o guardadas como atributos associados a um elemento (filho do elemento referenciado) cujo nome for o nome do bloco (TIFF, IPTC, etc.). Quando se manipula um bloco de metadados espec\xedfico, as etiquetas do bloco s\xe3o armazenados como atributos diretamente associados ao elemento referenciado pelo comando."}),"\n",(0,n.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/pt/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/commands/get-picture-metadata",children:"GET PICTURE METADATA"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.em,{children:"Picture Metadata Names"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.em,{children:"Picture Metadata Values"})]}),"\n",(0,n.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"1121"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2713"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(a.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return r},a:function(){return d}});var t=o(667294);let n={},s=t.createContext(n);function d(e){let a=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);